const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config.db);
//封装查询方法
module.exports.query = function (...args) {
    /*1.获取连接池中的可使用连接*/
    pool.getConnection(function (err, connection) {
        /*2.发出查询请求*/
        connection.query(...args);
        /*3.释放连接*/
        connection.release();
    });
};