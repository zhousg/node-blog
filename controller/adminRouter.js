const express = require('express');
const path = require('path');
const postsDB = require('../model/posts');
const usersDB = require('../model/users');
const router = express.Router();
const multer = require('multer');

router.get('/', (req, res) => {
    res.render('admin/index.html');
});

router.get('/blog/push', (req, res) => {
    res.render('admin/blogEdit.html', {posts: {}});
});

router.post('/blog/push', (req, res) => {
    //校验
    if (!req.body.title) return res.json({msg: '请输文章标题'});
    if (!req.body.brief) return res.json({msg: '请输文章摘要'});
    if (!req.body.content) return res.json({msg: '请输文章内容'});
    //默认数据
    req.body.uid = req.session.users.id;
    req.body.status = 0;
    req.body.time = new Date();
    postsDB.save(req.body, (err) => {
        if (!err) return res.json({success: true});
        res.json(err);
    });
});

router.get('/blog/list', (req, res) => {
    postsDB.findAllForAdmin({
        uid: req.session.users.id,
        title: req.query.title || ''
    }, (err, rows) => {
        if (!err) return res.render('admin/blogManage.html', {rows, title: req.query.title});
        res.send(err.msg);
    });
});

router.get('/blog/edit', (req, res) => {
    postsDB.findPosts(req.query.id, (err, posts) => {
        res.render('admin/blogEdit.html', {posts});
    });
});

router.post('/blog/edit', (req, res) => {
    //校验
    if (!req.body.title) return res.json({msg: '请输文章标题'});
    if (!req.body.brief) return res.json({msg: '请输文章摘要'});
    if (!req.body.content) return res.json({msg: '请输文章内容'});
    //更新时间
    req.body.time = new Date();
    postsDB.update(req.body, (err) => {
        if (!err) return res.json({success: true});
        res.json(err);
    });
});

router.get('/blog/del', (req, res) => {
    postsDB.delete(req.query.id, (err) => {
        if (!err) return res.redirect('/admin/blog/list');
        res.send(err.msg);
    });
});

router.get('/settings', (req, res) => {
    res.render('admin/settings.html', {users: req.session.users});
});

router.post('/settings', (req, res) => {
    req.body.id = req.session.users.id;
    usersDB.update(req.body, (err) => {
        if (!err){
            global.users = req.session.users = req.body;
            return res.json({success: true});
        }
        res.json(err);
    });
});

router.get('/repass', (req, res) => {
    res.render('admin/repass.html');
});

router.post('/repass', (req, res) => {
    res.send('/admin');
});

/*配置磁盘的存储信息*/
const storage = multer.diskStorage({
    /*目录*/
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads/avatar'));
    },
    /*名称*/
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
/*返回上传对象*/
const upload = multer({storage});
router.post('/upload', upload.single('avatar'), (req, res) => {
    res.send('/public/uploads/avatar/' + req.file.filename);
});


module.exports = router;