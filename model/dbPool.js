const mysql = require('mysql');
const config = require('../config');
/*创建连接池*/
const pool = mysql.createPool(config.db);
/*去连接池中获取一个有用的连接*/
// pool.getConnection(function (err, connection) {
//     /*使用连接去查询数据库*/
//     connection.query('SELECT something FROM sometable', function (error, results, fields) {
//         /*查询结束之后释放连接*/
//         connection.release();
//     });
// });
//封装一个query方法  帮你获取有用的连接 且提供查询数据库功能 且自动的释放连接
module.exports.query = (...args) => {
    pool.getConnection((err, connection) => {
        connection.query(...args);
        connection.release();
    });
};
