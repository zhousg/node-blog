const md5 = require('md5');
const db = require('./db');

// 验证登录
exports.auth = (body, cb) => {

    let sql = 'SELECT * FROM users WHERE email=?';

    // 执行 sql
    db.query(sql, body.email, (err, rows) => {
        if (!err && rows[0].pass == md5(body.pass)) {
            // 登录成功
            cb(null, rows[0]);
        } else {
            cb({'msg': '用户名或密码错误！'});
        }
    })
}

// 插入操作
exports.insert = (body, cb) => {

    let sql = 'INSERT INTO users SET ?';

    // md5 处理
    body.pass = md5(body.pass);

    delete body.repass;

    db.query(sql, body, (err) => {
        if (!err) {
            return cb(null);
        }
        cb({'msg': '数据库错误!'});
    })
}

// 根据用户 id 查询信息
exports.find = (id, cb) => {

    let sql = 'SELECT * FROM users WHERE id=?';

    db.query(sql, id, (err, rows) => {
        if (!err) {
            return cb(null, rows[0]);
        }

        cb({msg: '查询用户失败!'});
    })
}

// 更新用户信息
exports.update = (body, cb) => {

    let sql = 'UPDATE users SET ? WHERE id=?';

    //
    let id = body.id;

    delete body.id;

    db.query(sql, [body, id], (err) => {
        if (!err) {
            return cb(null);
        }

        cb({msg: '更新用户信息失败'});
    })
}