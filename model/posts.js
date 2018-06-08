//const db = require('./db');
const db = require('./dbPool');

exports.findAll = (cb) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, rows) => {
        if (!err) return cb(null, rows);
        cb({msg: '数据库操作异常'});
    });
};

exports.findAllPage = (pageNow, pageSize, cb) => {
    /*1.需要管理用户表*/
    /*2.文章ID 文章标题 文字摘要 文章的更新时间 用户的ID 用户的头像 用户的名字*/
    /*3.排序最新的靠前*/
    /*4.分页  limit 4,10 */
    let sql = 'SELECT p.id, p.title, p.brief, p.time, p.uid, u.avatar, u.name ' +
        'FROM posts AS p LEFT JOIN users AS u ON p.uid = u.id WHERE p.status = 0 ' +
        'ORDER BY p.time DESC LIMIT ?,?';
    db.query(sql, [(pageNow - 1) * pageSize, pageSize], (err, rows) => {
        if (!err) return cb(null, rows);
        cb({msg: '数据库操作异常'});
    });
};

exports.findAllCount = (cb) => {
    let sql = 'SELECT count(id) as count FROM posts WHERE status = 0';
    db.query(sql, (err, rows) => {
        if (!err) return cb(null, rows[0].count);
        cb({msg: '数据库操作异常'});
    });
};

exports.find = (id, cb) => {
    /*1.需要管理用户表*/
    /*2.文章ID 标题  内容  用户的ID 头像 名字 介绍 单位 主页*/
    let sql = 'SELECT p.id, p.title, p.content, p.uid, u.avatar, u.name, u.alt, u.company, u.homepage';
    sql += ' FROM posts AS p LEFT JOIN users AS u ON p.uid = u.id WHERE p.id = ?';
    db.query(sql, [id], (err, rows) => {
        if (!err) return cb(null, rows[0]);
        cb({msg: '数据库操作异常'});
    })
};

exports.findAllUserPage = (userId, pageNow, pageSize, cb) => {
    /*1.需要管理用户表*/
    /*2.文章ID 文章标题 文字摘要 文章的更新时间 用户的ID 用户的头像 用户的名字*/
    /*3.排序最新的靠前*/
    /*4.分页  limit 4,10 */
    let sql = 'SELECT p.id, p.title, p.brief, p.time, p.uid, u.avatar, u.name ' +
        'FROM posts AS p LEFT JOIN users AS u ON p.uid = u.id WHERE p.status = 0 ' +
        'AND p.uid = ? ORDER BY p.time DESC LIMIT ?,?';
    db.query(sql, [userId, (pageNow - 1) * pageSize, pageSize], (err, rows) => {
        if (!err) return cb(null, rows);
        cb({msg: '数据库操作异常'});
    });
};

exports.findAllUserCount = (userId, cb) => {
    let sql = 'SELECT count(id) as count FROM posts WHERE status = 0 AND uid=' + userId;
    db.query(sql, (err, rows) => {
        if (!err) return cb(null, rows[0].count);
        cb({msg: '数据库操作异常'});
    });
};

exports.save = (posts, cb) => {
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, posts, (err) => {
        if (!err) return cb(null);
        cb({msg: '保存文章信息失败'});
    });
};
/*
*posts{uid} 用户ID
*posts{title} 文章标题 模糊查询
* */
exports.findAllForAdmin = (posts, cb) => {
    let sql = 'SELECT id,title FROM posts WHERE uid=? AND status = 0';
    if (posts.title) {
        sql += ' AND title LIKE "%' + posts.title + '%"';
    }
    db.query(sql, [posts.uid], (err, rows) => {
        if (!err) return cb(null, rows);
        cb({msg: '查询文章信息失败'});
    });
};

exports.delete = (id, cb) => {
    //硬删除
    //let sql = 'DELETE FROM posts WHERE id = ' + id;
    //软删除
    let sql = 'UPDATE posts SET status = 1 WHERE id = ' + id;
    db.query(sql, (err) => {
        if (!err) return cb(null);
        cb({msg: '删除文章信息失败'});
    })
};

exports.update = (posts, cb) => {
    //硬删除
    //let sql = 'DELETE FROM posts WHERE id = ' + id;
    //软删除
    let sql = 'UPDATE posts SET ? WHERE id = ' + posts.id;
    db.query(sql, posts, (err) => {
        if (!err) return cb(null);
        cb({msg: '删除文章信息失败'});
    })
};

exports.findPosts = (id, cb) => {
    let sql = 'SELECT id,title,brief,content FROM posts WHERE id = ' + id;
    db.query(sql, (err, rows) => {
        if (!err) return cb(null, rows[0]);
        cb({msg: '查询文章信息失败'});
    })
};


