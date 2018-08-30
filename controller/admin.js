const express = require('express');
const posts = require('../model/posts');
const users = require('../model/users');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.renderMy('admin/index.html');
});

router.get('/blog/list', (req, res) => {
    let title = req.query.title || '';
    posts.findAllByTitle({
        id: req.session.user.id,
        title
    }, (err, rows) => {
        res.renderMy('admin/blogManage.html', {rows, title});
    });
});

router.get('/blog/push', (req, res) => {
    res.renderMy('admin/blogEdit.html', {posts: {}});
});

router.post('/blog/push', (req, res) => {
    req.body.uid = req.session.user.id;
    req.body.status = 0;
    req.body.time = new Date();
    posts.insert(req.body, (err) => {
        if (!err) return res.send({success: true});
        res.send({msg: '添加失败'});
    });
});
router.get('/blog/edit/:id', (req, res) => {
    posts.find(req.params.id, (req, posts) => {
        res.renderMy('admin/blogEdit.html', {posts});
    });
});
router.post('/blog/edit', (req, res) => {
    req.body.time = new Date();
    posts.modify(req.body, (err) => {
        if (!err) return res.send({success: true});
        res.send({msg: '编辑失败'});
    });
});
router.get('/blog/del/:id', (req, res) => {
    posts.modify({
        id:req.params.id,
        status:1
    }, (err) => {
        res.redirect('/admin/blog/list');
    });
});

router.get('/repass', (req, res) => {
    res.renderMy('admin/repass.html');
});
router.post('/repass', (req, res) => {
    req.body.id = req.session.user.id;
    req.body.sessionPass = req.session.user.pass;
    users.repass(req.body, (err) => {
        if (!err) {
            global.user = req.session.user = null;
            return res.send({success: true});
        }
        res.send(err);
    });
});

router.get('/settings', (req, res) => {
    res.renderMy('admin/settings.html', {user: req.session.user});
});

router.post('/settings', (req, res) => {
    req.body.id = req.session.user.id;
    users.settings(req.body, (err) => {
        if (!err) {
            global.user = req.session.user = req.body;
            return res.send({success: true});
        }
        res.send(err);
    });
});

/*上传组件的使用*/
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            // 接收到文件后输出的保存路径（若不存在则需要创建）
            cb(null, path.join(__dirname, '../public/uploads/avatar/'));
        },
        filename: function (req, file, cb) {
            // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
});

router.post('/upload', upload.single('avatar'), (req, res) => {
    res.send('/public/uploads/avatar/' + req.file.filename);
});

module.exports = router;