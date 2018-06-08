const express = require('express');
const bodyParser = require('body-parser');
const artTemplate = require('express-art-template');
const favicon = require('express-favicon');
const session = require('express-session');
const moment = require('moment');
const path = require('path');

const homeRouter = require('./controller/homeRouter');
const adminRouter = require('./controller/adminRouter');

const config = require('./config');

/*创建服务*/
const app = express();
app.listen(config.app.port, () => console.log('server blog port:' + config.app.port));

/*1.静态资源处理*/
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
/*2.模板的处理*/
app.engine('html', artTemplate);
app.set('view options', {
    imports: {
        moment, getUsers: function () {
            return global.users;
        }
    }
});
/*3.post数据处理*/
app.use(bodyParser.urlencoded({extended: false}));
/*4.网站小图标*/
app.use(favicon(path.join(__dirname, './favicon.ico')));
/*5.session配置*/
app.use(session({
    //加密字符
    secret: 'node-blog',
    //是否重新保存session
    resave: false,
    //是否在和服务器建立连接的时候初始化session
    saveUninitialized: true
}));

/*处理业务*/
/*1.前台展示  homeRouter*/
app.use(homeRouter);
/*2.后台管理  adminRouter 给路由加一个路径 */
//admin路径下的路由都需要登录
//访问这些路由之前就可以去校验登录状态
//后台路由之前 加一个流程（加一个中间件 加一个校验登录的函数）
const checkLoginMiddlewareFuc = function (req, res, next) {
    //未登录
    if (!req.session.users) {
        return res.redirect('/login');
    }
    next();
};
app.use('/admin', checkLoginMiddlewareFuc, adminRouter);



