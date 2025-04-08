import express from 'express';

const router = express.Router();

// 认证配置
const users = [
    { username: "000", password: "000" }
];

// 生成token函数
function generateToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// 用户登录路由
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // 在 users 数组中查找用户
    const user = users.find(u => u.username === username);

    // 如果找到用户，则验证密码
    if (user && user.password === password) {
        const token = generateToken();
        res.json({ token });
    } else {
        res.status(401).json({ error: '用户名或密码错误' });
    }
});

export default router; 