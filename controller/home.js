const express = require('express');
const posts = require('../model/posts');
const users = require('../model/users');
const router = express.Router();

router.get('/', (req, res) => {
    let pageNow = req.query.page || 1;
    let pageSize = 4;
    posts.findAll(pageNow, pageSize, (err, list) => {
        posts.findCount((err, count) => {
            res.render('home/index.html', {
                list,
                pageNow,
                pageCount: Math.ceil(count / pageSize)
            });
        });
    });
});

router.get('/article', (req, res) => {
    posts.detail(req.query.id, (err, posts) => {
        res.render('home/article.html', {posts});
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
    res.render('home/login.html');
});

router.post('/login', (req, res) => {
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
    res.render('home/register.html');
});

router.post('/register', (req, res) => {
    users.insert(req.body, (err) => {
        if (!err) return res.json({success: true});
        res.json(err);
    })
});

router.get('/join', (req, res) => {
    res.render('home/join.html');
});

router.get('/about', (req, res) => {
    res.render('home/about.html');
});

module.exports = router;