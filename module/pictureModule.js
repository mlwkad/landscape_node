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
            // 先清空表
            await connection.execute('DELETE FROM pictures');
            await connection.execute('DELETE FROM categories');
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
                            picture.isLiked,
                            picture.treasureNum || 0,
                            picture.clickNum || 0,
                            picture.mostNew || 0
                        ]
                    );
                }
            }
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
// init();

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


export default router; 