import express from 'express';
import mysql from 'mysql2/promise';
import { pictureData } from './pictures.js'
import { oldPictureData } from './oldPictures.js'

// 数据连接池
const allpictures = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qweee',
    database: 'allpictures',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const router = express.Router();

async function init() {
    try {
        // 开启事务
        const connection = await allpictures.getConnection();
        await connection.beginTransaction();
        try {
            // 先清空所有表
            await connection.execute('DELETE FROM pictures');
            await connection.execute('DELETE FROM categories');

            // 创建liked_pictures表（如果不存在），这是一个完全独立的表
            await connection.execute(`
                CREATE TABLE IF NOT EXISTS liked_pictures (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    picture_id VARCHAR(100) NOT NULL,
                    url VARCHAR(255) NOT NULL,
                    date DATE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            // 清空liked_pictures表
            await connection.execute('DELETE FROM liked_pictures');

            // 插入分类数据
            // for (const category of pictureData) {
            for (const category of oldPictureData) {
                // 插入分类
                const [categoryResult] = await connection.execute(
                    'INSERT INTO categories (id, name) VALUES (?, ?)',
                    [category.id, category.name]
                );
                // 插入该分类下的所有图片
                for (const picture of category.url) {
                    await connection.execute(
                        'INSERT INTO pictures (id, category_id, url, is_liked, treasure_num, click_num, most_new) VALUES (?, ?, ?, ?, ?, ?, ?)',
                        [
                            picture.id,
                            category.id,
                            picture.url,
                            0, // 将所有图片的is_liked初始值设为0
                            picture.treasureNum || 0,
                            picture.clickNum || 0,
                            picture.mostNew || 0
                        ]
                    );
                }
            }

            // 确保所有图片的is_liked属性为0
            await connection.execute('UPDATE pictures SET is_liked = 0');

            // 提交事务
            await connection.commit();
            console.log('数据初始化成功！');
        } catch (error) {
            // 如果出错，回滚事务
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('初始化数据失败:', error);
    }
}

// 数据更新时启动一次
init();

// 获取图片列表路由（从数据库获取）
router.get('/homeShowPicture', async (req, res) => {
    try {
        // 获取所有分类和对应的图片
        const [categories] = await allpictures.execute('SELECT * FROM categories');
        const result = await Promise.all(categories.map(async (category) => {
            const [pictures] = await allpictures.execute(
                'SELECT id, url, is_liked as isLiked, treasure_num as treasureNum, click_num as clickNum, most_new as mostNew FROM pictures WHERE category_id = ?',
                [category.id]
            );
            return {
                id: category.id,
                name: category.name,
                url: pictures
            };
        }));
        res.json({
            code: 200,
            data: result
        });
    } catch (error) {
        console.error('获取图片数据失败:', error);
        res.status(500).json({
            code: 500,
            message: '获取数据失败'
        });
    }
});

// 更新图片点赞状态
router.put('/updateLikeStatus', async (req, res) => {
    try {
        const { id, isLiked } = req.body;
        await allpictures.execute(
            'UPDATE pictures SET is_liked = ? WHERE id = ?',
            [isLiked, id]
        );
        res.json({
            code: 200,
            message: '更新成功'
        });
    } catch (error) {
        console.error('更新点赞状态失败:', error);
        res.status(500).json({
            code: 500,
            message: '更新失败'
        });
    }
});

// 以下是完全独立的收藏功能接口，与其他表无关 ======================

// 获取收藏列表，按日期分组
router.get('/getLikedList', async (req, res) => {
    try {
        // 直接使用日期，不做任何加减调整
        const [pictures] = await allpictures.execute(`
            SELECT picture_id, url, DATE_FORMAT(date, '%Y-%m-%d') as date_string 
            FROM liked_pictures 
            ORDER BY date DESC
        `);

        // 按日期分组
        const groupedByDate = pictures.reduce((acc, picture) => {
            const date = picture.date_string || '未知日期';

            // 如果日期不存在于累加器中，新建该日期条目
            if (!acc.find(item => item.date === date)) {
                acc.push({ date, info: [] });
            }

            // 找到对应日期的条目并添加图片信息
            const dateEntry = acc.find(item => item.date === date);
            dateEntry.info.push({
                id: picture.picture_id,
                url: picture.url
            });

            return acc;
        }, []);

        res.json({
            code: 200,
            data: groupedByDate
        });
    } catch (error) {
        console.error('获取收藏列表失败:', error);
        res.status(500).json({
            code: 500,
            message: '获取收藏列表失败'
        });
    }
});

// 添加图片到收藏列表
router.post('/addToLikedList', async (req, res) => {
    try {
        const { date, url, id } = req.body;

        // 直接添加到专门的收藏表中，不更新其他表
        await allpictures.execute(
            'INSERT INTO liked_pictures (picture_id, url, date) VALUES (?, ?, ?)',
            [id, url, date]
        );

        res.json({
            code: 200,
            message: '添加到收藏成功'
        });
    } catch (error) {
        console.error('添加到收藏失败:', error);
        res.status(500).json({
            code: 500,
            message: '添加到收藏失败'
        });
    }
});

// 从收藏列表中删除图片
router.delete('/deleteFromLikedList', async (req, res) => {
    try {
        const { id } = req.body;

        // 从收藏表中删除指定图片ID的记录
        const [result] = await allpictures.execute(
            'DELETE FROM liked_pictures WHERE picture_id = ?',
            [id]
        );

        if (result.affectedRows > 0) {
            res.json({
                code: 200,
                message: '从收藏中删除成功'
            });
        } else {
            res.json({
                code: 404,
                message: '未找到该收藏记录'
            });
        }
    } catch (error) {
        console.error('从收藏中删除失败:', error);
        res.status(500).json({
            code: 500,
            message: '从收藏中删除失败'
        });
    }
});

export default router; 