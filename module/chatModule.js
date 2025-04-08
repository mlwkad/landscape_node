import express from 'express';
import axios from 'axios';

const router = express.Router();

// 讯飞API配置
const XUNFEI_API_URL = 'https://spark-api-open.xf-yun.com/v1/chat/completions';
const API_PASSWORD = 'ShpsjHBxeqSsFfTcDJGk:oUuYyhMCunBDegUnKqrS';  //lite模型
// const API_PASSWORD = 'ShpsjHBxeqSsFfTcDJGk:oUuYyhMCunBDegUnKqrS';  //lite模型
// const API_PASSWORD = 'ShpsjHBxeqSsFfTcDJGk:oUuYyhMCunBDegUnKqrS';  //lite模型
// const API_PASSWORD = 'ShpsjHBxeqSsFfTcDJGk:oUuYyhMCunBDegUnKqrS';  //lite模型

// 流式聊天
router.get('/chat/stream', async (req, res) => {
    try {
        // 从查询参数获取消息，而不是请求体
        const { message } = req.query;

        // 1. 设置响应头支持 SSE（Server-Sent Events）
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // 2. 配置请求参数，将 stream 参数设置为 true
        const requestData = {
            model: 'lite',
            messages: [{ role: 'user', content: message }], // 修改role为'user'
            stream: true,  // 告诉讯飞API使用流式响应
            temperature: 0.5,
            max_tokens: 1024
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
                    } else {
                        try {
                            // 解析JSON
                            const jsonData = JSON.parse(jsonStr);

                            // 提取内容（根据讯飞API的响应格式）
                            const content = jsonData.choices[0]?.delta?.content ||
                                jsonData.choices[0]?.content || '';

                            // 转发到客户端
                            if (content) {
                                res.write(`data: ${JSON.stringify({ content })}\n\n`);
                            }
                        } catch (e) {
                            console.error('解析JSON失败:', e);
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
            res.end();
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router; 