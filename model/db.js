/*负责连接数据库通过数据库查询需要的连接*/
const mysql = require('mysql');
const config = require('../config');

/*1.创建连接*/
const connection = mysql.createConnection(config.db);
/*2.发起连接*/
connection.connect();
/*3.进行查询*/
/*导出query方法*/
module.exports.query = (...args) => {
    connection.query(...args);
};
/*4.关闭连接  启动就不关闭*/

