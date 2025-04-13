import express from 'express';
import axios from 'axios';
import mysql from 'mysql2/promise';

const router = express.Router();

// 讯飞API配置
const XUNFEI_API_URL = 'https://spark-api-open.xf-yun.com/v1/chat/completions';
// const API_PASSWORD = 'ShpsjHBxeqSsFfTcDJGk:oUuYyhMCunBDegUnKqrS';  //lite模型
const API_PASSWORD = 'aTshaQawqHQfFnyEYJpM:HDtHRUGpERoilPpbhrON';  //MAX模型

// 创建MySQL连接池
const chatPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qweee',
    database: 'XunFei_Chat',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 初始化聊天数据库表
// async function initChatDatabase() {
//     try {
//         // 使用await等待连接
//         const connection = await chatPool.getConnection();
//         try {
//             // 创建chat_content表，如果不存在
//             await connection.query(`
//                 CREATE TABLE IF NOT EXISTS chat_content (
//                     id INT AUTO_INCREMENT PRIMARY KEY,
//                     content TEXT NOT NULL
//                 )
//             `);
//             console.log('聊天数据库表初始化成功');
//         } finally {
//             // 确保释放连接
//             connection.release();
//         }
//     } catch (error) {
//         console.error('聊天数据库表初始化失败:', error);
//     }
// }

// 数据更新时启动一次
// initChatDatabase()

// 设置是否启用联网搜索
router.get('/chat/onlineSearch', (req, res) => {
    const { isSure } = req.query;
    // 使用session存储每个用户的设置
    req.session.enableOnlineSearch = isSure === 'true';
    res.json({ success: true, enableOnlineSearch: req.session.enableOnlineSearch })
});

// 流式聊天
router.get('/chat/stream', async (req, res) => {
    try {
        // 从查询参数获取消息，而不是请求体
        const { message } = req.query;
        let totalTokens = 0;  // 用于统计token消耗

        // 1. 设置响应头支持 SSE（Server-Sent Events）
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');  //不让浏览器缓存响应，防止浏览器使用缓存数据而不使用新数据
        res.setHeader('Connection', 'keep-alive');  //保持连接，防止浏览器断开连接

        // 2. 配置请求参数，将 stream 参数设置为 true
        const requestData = {
            // model: 'lite',
            model: 'generalv3.5',
            messages: [{ role: 'user', content: message }],
            stream: true,  // 告诉讯飞API使用流式响应
            temperature: 0.5,
            max_tokens: 4096,
            tools: [
                {
                    type: "web_search",
                    web_search: {
                        enable: true,
                        show_ref_label: req.session.enableOnlineSearch || false,  // 使用session中的设置，默认不开
                        search_mode: "deep" // deep:深度搜索 / normal:标准搜索
                    }
                }
            ],
        };

        // 3. 使用 responseType: 'stream' 告诉 axios 处理流式数据
        // 向讯飞API发送请求
        const response = await axios({
            method: 'post',
            url: XUNFEI_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_PASSWORD}`
            },
            data: requestData,
            responseType: 'stream'  // 关键设置：告诉axios以流方式处理响应
        });

        // 4. 将数据块从讯飞API转发到客户端，并进行必要的格式转换
        response.data.on('data', (chunk) => {
            // 将二进制数据转换为字符串
            const chunkString = chunk.toString();
            // 处理数据块（讯飞API返回的是 "data: {json数据}\n\n" 格式）
            const lines = chunkString.split('\n\n');
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    // 提取JSON部分
                    const jsonStr = line.slice(6);
                    if (jsonStr === '[DONE]') {
                        // 流结束标记
                        res.write('data: [DONE]\n\n');
                        // 打印本次对话消耗的总token数
                        console.log(`本次对话消耗总token数: ${totalTokens}`);
                    } else {
                        try {
                            // 解析JSON
                            const jsonData = JSON.parse(jsonStr);
                            // 统计token消耗
                            if (jsonData.usage) {
                                totalTokens += jsonData.usage.total_tokens || 0;
                            }
                            let onlineInfo = ''
                            let content = ''
                            // 提取内容（根据讯飞API的响应格式）
                            if (jsonData.choices && jsonData.choices.length > 1 && jsonData.choices[1]?.delta?.tool_calls?.[0]?.web_search?.outputs) {
                                onlineInfo = jsonData.choices[1].delta.tool_calls[0].web_search.outputs
                            }
                            else if (jsonData.choices && jsonData.choices.length > 0) {
                                content = jsonData.choices[0]?.delta?.content || jsonData.choices[0]?.content || ''
                                // console.log(content)
                            }
                            // 转发到客户端
                            if (content || onlineInfo) {
                                res.write(`data: ${JSON.stringify({ content, onlineInfo })}\n\n`)
                                // 添加刷新，确保数据立即发送到客户端
                                res.flush && res.flush()
                            }
                        } catch (e) {
                            console.error('解析JSON失败:', e)
                        }
                    }
                }
            }
        });
        // 处理流结束
        response.data.on('end', () => {
            res.end();
        });
        // 处理错误
        response.data.on('error', (err) => {
            console.log('流式响应错误:', err);
            res.end();
        });
    } catch (error) {
        console.log('API请求错误:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.response?.data || error.message
        });
    }
});

// 获取所有聊天内容
router.get('/chat/getAllContent', async (req, res) => {
    try {
        const [rows] = await chatPool.query('SELECT * FROM chat_content ORDER BY id DESC');
        // 将数据转换为所需格式
        const allContent = rows.map(row => ({
            id: row.id,
            content: JSON.parse(row.content)
        }));
        res.json(allContent);
    } catch (error) {
        console.error('获取聊天数据失败:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message
        });
    }
});

// 添加新的聊天内容
router.post('/chat/addToAllContent', async (req, res) => {
    try {
        const { id, content } = req.body;
        if (!content || !Array.isArray(content)) {
            return res.status(400).json({ error: '内容格式不正确，应为数组' });
        }
        // 将内容存储为JSON字符串
        const stringContent = JSON.stringify(content);
        let result;
        // 如果提供了id，使用该id插入
        if (id) {
            // 检查id是否已存在
            const [exists] = await chatPool.query('SELECT id FROM chat_content WHERE id = ?', [id]);
            if (exists.length > 0) {
                return res.status(400).json({ error: `ID ${id} 已存在，请使用其他ID` });
            }
            [result] = await chatPool.query(
                'INSERT INTO chat_content (id, content) VALUES (?, ?)',
                [id, stringContent]
            );
            res.status(201).json({
                id: id,
                content
            });
        } else {
            // 没有提供id，使用自增id
            [result] = await chatPool.query(
                'INSERT INTO chat_content (content) VALUES (?)',
                [stringContent]
            );
            res.status(201).json({
                id: result.insertId,
                content
            });
        }
    } catch (error) {
        console.error('添加聊天数据失败:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message
        });
    }
});

// 更新聊天内容
router.put('/chat/updateContent', async (req, res) => {
    try {
        const { id, content } = req.body;
        if (!id) {
            return res.status(400).json({ error: '缺少id参数' });
        }
        if (!content || !Array.isArray(content)) {
            return res.status(400).json({ error: '内容格式不正确，应为数组' });
        }
        const stringContent = JSON.stringify(content);
        await chatPool.query(
            'UPDATE chat_content SET content = ? WHERE id = ?',
            [stringContent, parseInt(id)]
        );
        res.json({
            id: parseInt(id),
            content
        });
    } catch (error) {
        console.error('更新聊天数据失败:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message
        });
    }
});

// 根据id查找聊天内容
router.get('/chat/getContent', async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: '缺少id参数' });
        }
        const [rows] = await chatPool.query('SELECT * FROM chat_content WHERE id = ?', [parseInt(id)]);
        if (rows.length === 0) {
            return res.status(404).json({ error: '未找到对应ID的内容' });
        }
        // 转换返回格式为 {id: number, content: array}
        const result = {
            id: rows[0].id,
            content: JSON.parse(rows[0].content)
        };
        res.json(result);
    } catch (error) {
        console.error('获取聊天内容失败:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message
        });
    }
});

// 删除聊天内容
router.delete('/chat/deleteContent/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: '缺少id参数' });
        }
        await chatPool.query('DELETE FROM chat_content WHERE id = ?', [parseInt(id)]);
        res.json({ id: parseInt(id) });
    } catch (error) {
        console.error('删除聊天数据失败:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            details: error.message
        });
    }
});

export default router;