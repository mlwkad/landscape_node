import mysql from 'mysql2/promise';

// CREATE TABLE IF NOT EXISTS categories (
//     id INT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL
// );

// CREATE TABLE IF NOT EXISTS pictures (
//     id INT PRIMARY KEY,
//     category_id INT NOT NULL,
//     url VARCHAR(255) NOT NULL,
//     is_liked BOOLEAN DEFAULT false,
//     treasure_num INT DEFAULT 0,
//     click_num INT DEFAULT 0,
//     most_new INT DEFAULT 0,
//     FOREIGN KEY (category_id) REFERENCES categories(id)
// );

// 连接allpictures数据库
const allpictures = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qweee',
    database: 'allpictures',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 连接likedpictures数据库
// const likedpictures = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'qweee',
//     database: 'likedpictures',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

export default allpictures