const db = require('./dbPool');
const md5 = require('md5');

exports.find = (id, cb) => {
    let sql = 'SELECT * FROM users WHERE id =' + id;
    db.query(sql, (err, rows) => {
        if (!err) return cb(null, rows[0]);
        cb({msg: '数据库操作异常'});
    });
};

/*
* users{name} 用户名
* users{email} 用户名
* users{pass} 用户名
* */
exports.save = (users, cb) => {
    // let sql = 'INSERT INTO users(name,email,pass) VALUES(?,?,?)';
    // db.query(sql, [users.name, users.email, users.pass], (err, data) => {
    //
    // });
    //去掉脏数据
    delete users.repass;
    //加密
    users.pass = md5(users.pass);
    //根据键值对自动去插入字段 如果对象内有一个数据是表没有的字段报错 注意：不要有脏数据
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, users, (err) => {
        if (!err) return cb(null);
        cb({msg: '保存用户信息失败'});
    });
};

exports.update = (users, cb) => {
    let sql = 'UPDATE users SET ? WHERE id=' + users.id;
    db.query(sql, users, (err) => {
        console.log(err);
        if (!err) return cb(null);
        cb({msg: '设置个人信息失败'});
    });
};

/*
* users(email)
* users(pass)
* */
exports.auth = function (users, cb) {
    //1. 先通过email查出用户信息
    //2. 获取用户的密码 和 输入的密码 比较
    let sql = 'SELECT * FROM users WHERE email =?';
    db.query(sql, [users.email], (err, rows) => {
        console.log(err);
        if (!err && rows.length && rows[0].pass === md5(users.pass)) {
            cb(null, rows[0]);
        } else {
            cb({msg: '用户名或密码错误'});
        }
    });
};