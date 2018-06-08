const express = require('express');
const postsDB = require('../model/posts');
const usersDB = require('../model/users');
const router = express.Router();

const pageSize = 4;
//首页
router.get('/', (req, res) => {
    //用户的请求或传递页面 page 页码  get方式传递
    let pageNow = req.query.page || 1; //默认第一页
    postsDB.findAllPage(pageNow, pageSize, (err, rows) => {
        if (err) return res.send(err);
        postsDB.findAllCount((err, count) => {
            if (!err) return res.render('home/index.html', {
                rows,
                count,
                pageCount: Math.ceil(count / pageSize),
                pageNow
            });
            res.send(err);
        });
    });
});
//博客详情
router.get('/article', (req, res) => {
    let id = req.query.id;
    postsDB.find(id, (err, posts) => {
        res.render('home/article.html', {posts});
    });
});
//个人博客中心
router.get('/center', (req, res) => {
    /*1.个人信息*/
    /*2.列表分页信息*/
    /*3.总条数--》总页数*/
    let userId = req.query.id;
    let pageNow = req.query.page || 1;
    usersDB.find(userId, (err, users) => {
        if (err) return res.send(err);
        postsDB.findAllUserPage(userId, pageNow, pageSize, (err, rows) => {
            if (err) return res.send(err);
            postsDB.findAllUserCount(userId, (err, count) => {
                if (err) return res.send(err);
                res.render('home/center.html', {
                    users,
                    rows,
                    count,
                    pageNow,
                    pageCount: Math.ceil(count / pageSize)
                });
            });
        })
    });
});
//登录页面
router.get('/login', (req, res) => {
    res.render('home/login.html');
});
//登录处理
router.post('/login', (req, res) => {
    //post提交的数据就是users{email,pass}
    //校验
    if (!req.body.email) return res.json({msg: '请输入邮箱地址'});
    if (!req.body.pass) return res.json({msg: '请输入密码'});
    usersDB.auth(req.body, (err, users) => {
        if (!err) {
            /*登录成功 记录session.users = users*/
            /*global.users 公用的数据需要给模板使用*/
            global.users = req.session.users = users;
            /*响应客户端成功的信息*/
            res.json({success: true});
        } else {
            res.json(err);
        }
    });
});
//退出
router.get('/logout', (req, res) => {
    global.users = req.session.users = null;
    res.redirect('/');
});
//注册页面
router.get('/register', (req, res) => {
    res.render('home/register.html');
});
//注册信息提交
router.post('/register', (req, res) => {
    //post提交的数据就是users{name,email,pass,repass}
    //校验
    if (!req.body.name) return res.json({msg: '请输入用户名'});
    if (!req.body.email) return res.json({msg: '请输入邮箱地址'});
    if (!req.body.pass) return res.json({msg: '请输入密码'});
    if (!req.body.repass) return res.json({msg: '请输入确认密码'});
    if (req.body.pass != req.body.repass) return res.json({msg: '密码不一致'});
    usersDB.save(req.body, (err) => {
        if (!err) return res.json({success: true});
        res.json(err);
    });
});
//加入我们
router.get('/join', (req, res) => {
    res.render('home/join.html');
});
//关于我们
router.get('/about', (req, res) => {
    res.render('home/about.html')
});


module.exports = router;