const db = require('./db');

// 查询所有文章
exports.findAll = (pageNow, pageSize, cb) => {
    let sql = 'SELECT p.id, p.title, p.uid, p.brief, p.time, u.name, u.avatar ' +
        'FROM posts AS p LEFT JOIN users AS u ' +
        'ON p.uid = u.id WHERE P.status = 0 ORDER BY p.time DESC LIMIT ?,?';
    db.query(sql, [(pageNow - 1) * pageSize, pageSize], (err, rows) => {
        if (!err) {
            return cb(null, rows);
        }

        cb(err);
    })
};

exports.findAllByUser = function (userId, pageNow, pageSize, cb) {
    let sql = 'SELECT p.id, p.title,p.uid, p.brief, p.time, u.name, u.avatar ' +
        'FROM posts AS p LEFT JOIN users AS u ' +
        'ON p.uid = u.id WHERE p.status = 0 AND u.id = ? ORDER BY p.time DESC LIMIT ?,?';
    db.query(sql, [userId, (pageNow - 1) * pageSize, pageSize], (err, rows) => {
        if (!err) {
            return cb(null, rows);
        }

        cb(err);
    })
};

exports.findCount = function (cb) {
    let sql = 'SELECT count(id) as count FROM posts WHERE status = 0;';
    db.query(sql, function (err, rows) {
        if (!err) {
            return cb(err, rows[0].count);
        }
        cb(err);
    });
};

exports.findCountByUser = function (userId, cb) {
    let sql = 'SELECT count(id) as count FROM posts WHERE status = 0 AND uid= ?;';
    db.query(sql, [userId], function (err, rows) {
        if (!err) {
            return cb(err, rows[0].count);
        }
        cb(err);
    });
};

// 根据id删除文章
exports.delete = (id, cb) => {

    let sql = 'DELETE FROM posts WHERE id=?';

    db.query(sql, id, (err) => {
        if (!err) {
            return cb(null);
        }

        cb(err);
    });
}

// 新增
exports.insert = (body, cb) => {

    let sql = 'INSERT INTO posts SET ?';

    db.query(sql, body, (err) => {
        if (!err) {
            return cb(null);
        }

        cb(err);
    })
}

// 根据文章id查询
exports.find = (id, cb) => {

    let sql = 'SELECT * FROM posts WHERE id=?';

    db.query(sql, id, (err, rows) => {
        if (!err) {
            return cb(null, rows[0]);
        }

        cb(err);
    })
}

// 修改文章
exports.modify = (body, cb) => {

    let sql = 'UPDATE posts SET ? WHERE id=?';

    let id = body.id;

    delete body.id;

    db.query(sql, [body, id], (err) => {
        if (!err) {
            return cb(null);
        }

        cb(err);
    })
}

// 请情
exports.detail = (id, cb) => {

    let sql = 'SELECT p.title, p.content, p.uid, u.name, u.alt, u.company, u.email, u.homepage ,u.avatar FROM posts AS p LEFT JOIN users AS u ON p.uid = u.id WHERE p.id = ?';

    db.query(sql, id, (err, rows) => {
        if (!err) {
            return cb(null, rows[0]);
        }
        cb(err);
    });
}