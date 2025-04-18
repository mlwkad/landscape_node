// 导入 express 模块
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import session from 'express-session';
import authRoutes from './module/authModule.js';
import pictureRoutes from './module/pictureModule.js';
import chatRoutes from './module/chatModule.js';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建 express 应用实例
const app = express();

// 设置服务器监听端口
const port = 3000;

// 禁用 Express 的响应缓冲，确保流式响应立即发送
app.set('etag', false); // 禁用 ETag 生成
app.set('x-powered-by', false); // 禁用 X-Powered-By 头

//解决跨域(必须在使用中间件之前)
app.use(cors({
    origin: ['http://localhost:5173'], // 允许来自 localhost:5173 的请求
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的 HTTP 方法
    allowedHeaders: ['Content-Type', 'Accept-Encoding'] // 允许的请求头
}));

// 配置静态文件服务中间件，使pic目录下的图片可以通过/pic路径访问
app.use('/pic', express.static(path.join(__dirname, 'pic')));

// 配置session中间件
app.use(session({
    secret: 'a4f8071f7b8992de34281db843182e3c2589920aa8ad5c5c3af7f67dd9ff25c9',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // 在生产环境中使用HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24小时
    }
}));

// 使用中间件解析 JSON 格式的请求体
app.use(bodyParser.json());

// 开启压缩功能
app.use(compression({
    level: 6, // 压缩级别，默认为6
    threshold: 0, // 总是压缩，不管响应大小
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        // 不对SSE流式响应进行压缩，避免缓冲问题
        if (req.path.includes('/chat/stream')) {
            return false;
        }
        // 强制所有其他响应都尝试压缩
        return true;
    },
    // 设置应该压缩的内容类型
    contentType: [
        'application/json',
        'text/plain',
        'text/html',
        'text/css',
        'application/javascript',
        'text/javascript'
    ],
    // 强制使用 gzip
    algorithm: 'gzip'
}));

// 路由
app.use('/api', authRoutes);
app.use('/api/picture', pictureRoutes);
app.use('/api', chatRoutes);

// 监听端口
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

// 你的服务器地址
axios.defaults.baseURL = 'http://localhost:3000'