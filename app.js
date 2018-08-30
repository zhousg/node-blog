const path = require('path');
const express = require('express');
const artTemplate = require('express-art-template');
const session = require('express-session');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const moment = require('moment');
const logger = require('morgan');

const config = require('./config');
const homeRouter = require('./controller/home');
const adminRouter = require('./controller/admin');

//启动服务
let app = express();
app.listen(config.app.port, () => console.log('blog server startup prot ' + config.app.port));

//配置日志
app.use(logger('dev'));

//配置网站小图标
app.use(favicon(path.join(__dirname, '/favicon.ico')));

//配置静态资源
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));

//配置模板引擎
app.engine('html', artTemplate);
app.set('view options', {
    imports: {moment},
});

//配置post请求数据解析
app.use(bodyParser.urlencoded({extended: false}));

//配置session
app.use(session({
    secret: 'node-blog',
    resave: false,
    saveUninitialized: true
}));

const joinSessionUser = (req,res,next)=>{
    const render = res.render;
    //覆盖
    res.render = (url,data)=>{
        render(url,Object.assign(data||{},{rsUser:req.session.user}));
    };
    next();
};

//配置前台展示模块路由
app.use(joinSessionUser,homeRouter);

//配置后台管理模块路由
app.use('/admin', function (req, res, next) {
    //登录拦截中间件
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
}, joinSessionUser,adminRouter);


