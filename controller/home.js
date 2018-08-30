const express = require('express');
const posts = require('../model/posts');
const users = require('../model/users');
const router = express.Router();

router.get('/', (req, res) => {
    let pageNow = req.query.page || 1;
    let pageSize = 4;
    posts.findAll(pageNow, pageSize, (err, list) => {
        posts.findCount((err, count) => {
            res.renderMy('home/index.html', {
                list,
                pageNow,
                pageCount: Math.ceil(count / pageSize)
            });
        });
    });
});

router.get('/article', (req, res) => {
    posts.detail(req.query.id, (err, posts) => {
        res.renderMy('home/article.html', {posts});
    });
});

router.get('/center', (req, res) => {
    let pageNow = req.query.page || 1;
    let pageSize = 4;
    users.find(req.query.id, (err, user) => {
        posts.findAllByUser(req.query.id, pageNow, pageSize, (err, list) => {
            posts.findCountByUser(req.query.id, (err, count) => {
                res.render('home/center.html', {
                    list,
                    user,
                    pageNow,
                    count,
                    pageCount: Math.ceil(count / pageSize)
                });
            });
        });
    });
});

router.get('/login', (req, res) => {
    res.renderMy('home/login.html');
});

router.post('/login', (req, res) => {
    if (!req.body.email) return res.json({msg: '请输入邮箱'});
    if (!req.body.pass) return res.json({msg: '请输入密码'});
    users.auth(req.body, (err, user) => {
        if (!err) {
            global.user = req.session.user = user;
            return res.json({success: true});
        }
        res.json(err);
    });
});

router.get('/logout', (req, res) => {
    global.user = req.session.user = null;
    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.renderMy('home/register.html');
});

router.post('/register', (req, res) => {
    if (!req.body.name) return res.json({msg: '请输入用户名'});
    if (!req.body.email) return res.json({msg: '请输入邮箱'});
    if (!req.body.pass) return res.json({msg: '请输入密码'});
    if (!req.body.repass) return res.json({msg: '请再次输入密码'});
    if (req.body.repass !== req.body.pass) return res.json({msg: '两次密码不一致'});
    users.insert(req.body, (err) => {
        if (!err) return res.json({success: true});
        res.json(err);
    })
});

router.get('/join', (req, res) => {
    res.renderMy('home/join.html');
});

router.get('/about', (req, res) => {
    res.renderMy('home/about.html');
});

module.exports = router;