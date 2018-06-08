/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50556
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2018-06-07 09:48:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `content` text,
  `status` tinyint(4) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('1', '1', 'JS the Hardcore: 执行上下文(Execution Context)', '先看个例子: console.log(a) console.log(foo()) var a = \'hello world\' function foo() { console.log(\'foo\') } 估计大部分人早就对这种问题了如指掌了，输出结果也是脱口而出', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:29:18');
INSERT INTO `posts` VALUES ('2', '2', 'weui.js发布', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:31:02');
INSERT INTO `posts` VALUES ('3', '1', '中国第三届CSS开发者大会即将召开', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:31:37');
INSERT INTO `posts` VALUES ('4', '2', 'weui.js发布', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:32:08');
INSERT INTO `posts` VALUES ('5', '1', '中国第三届CSS开发者大会即将召开', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:32:27');
INSERT INTO `posts` VALUES ('6', '2', 'JS the Hardcore: 执行上下文(Execution Context)', '先看个例子: console.log(a) console.log(foo()) var a = \'hello world\' function foo() { console.log(\'foo\') } 估计大部分人早就对这种问题了如指掌了，输出结果也是脱口而出', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:32:49');
INSERT INTO `posts` VALUES ('8', '1', 'JS the Hardcore: 执行上下文(Execution Context)', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:33:24');
INSERT INTO `posts` VALUES ('9', '1', '中国第三届CSS开发者大会即将召开', 'weui.js 是 WeUI 的轻量级 js 封装。 嗯，没啥好介绍的，直接复制项目的 Readme.md 过来好了，欢迎去项目的 Github 项目主页 star 并贡献代码。 概述 注意：由于微信小程序不支持dom操作，所以weui.js并不适用于小程序。不过WeUI也为小程', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:34:21');
INSERT INTO `posts` VALUES ('10', '1', 'weui.js发布', '中国第三届CSS开发者大会将于 2016 年 12 月 17 日在广州召开，这次请来的分享嘉宾还是非常牛逼的，有不少国内外的大牛，也有我的几个同事。 感兴趣可以直接访问上面的链接了解动态和详情。 部分讲师简介 还没有勾三股四的议题，看来是要压轴啊，好期待！', '<p>这几年，前端技术发展很快，每年都有新的技术名词流行，ReactJS、Angular 2、VUE、微信小程序。。。而我重新学习了 swift ，是的，重新学习，之前读过《swift 1.0 从入门到放弃》</p>\r\n\r\n<p>想起当年学习前端开发的经历，我开始写一些实际的小 app 来练手，总算是没有又一次『从入门到放弃』</p>\r\n\r\n<p>有一天突然想到，每一天不管开心还是难过，不管是平淡还是难忘，都要过的有意义&mdash;&mdash;从来不写日记的我第一次想每天花几分钟记录一下自己的一天了。（日记？上个世纪的东西了吧？！）</p>\r\n\r\n<p>于是就尝试了各种 app，记事类的、日记类的。却发现每个 app 都想做的很完美，带上各种功能，需要的不需要的全都有，干扰的东西太多。。。</p>\r\n\r\n<p>我只想一个单纯的记录自己每一天的 app，几张图片，一段文字，最多再加上一个地理位置，嗯，真实的自己，只有自己能看到，也不用担心有没有人点赞。</p>\r\n\r\n<p>干脆就自己用 swift 写一个吧：One Day.</p>\r\n\r\n<p>有一天正在听最喜欢的《One Day》，嗯，海贼王中艾斯被行刑的那一段的主题曲，这段剧情也是海贼王中给我感受最深的一段。于是 App 的名字就叫 One Day 了。</p>\r\n\r\n<p>One Day 的目标就只有一个：记录『最真实的自己』。所以从一开始就完全抛弃了社交和分享的功能。</p>\r\n', '0', '2017-07-01 17:34:07');
INSERT INTO `posts` VALUES ('11', '1', '解决nodejs mysql Error: Connection lost The server closed the connection的两种方法', '最近在学习node.js是发现在MySQL连接时出现问题，当过几个小时没有访问的MySQL的时候，MySQL自动断开连接，这个问题的原因是MySQL有一个wait_time当超过这个时间的时候连接会丢失，当你再去请求MySQL的时候会连接不上MySQL服务。先在整理一下解决这两个问题的方法', '<p>使用连接池，同样将连接封装成module，取名为&lsquo;mysqlpool.js&rsquo;代码如下：</p>\r\n\r\n<pre>\r\n<code>var mysql=require(&quot;mysql&quot;);\r\nvar pool = mysql.createPool({\r\n    host: &#39;127.0.0.1&#39;,\r\n    user:&#39;root&#39;,\r\n    password:&#39;123456&#39;,\r\n    database:&#39;workstation&#39;\r\n});\r\n\r\nvar query=function(sql,options,callback){\r\n\r\n    pool.getConnection(function(err,conn){\r\n        if(err){\r\n            callback(err,null,null);\r\n        }else{\r\n            conn.query(sql,options,function(err,results,fields){\r\n                //事件驱动回调\r\n                callback(err,results,fields);\r\n            });\r\n            //释放连接，需要注意的是连接释放需要在此处释放，而不是在查询回调里面释放\r\n            conn.release();\r\n        }\r\n    });\r\n};\r\n\r\nmodule.exports=query;\r\n</code>这里同样要注意的是释放连接问题&lsquo; conn.release();&rsquo;现在网上能查的这个问题的解决方法的释放连接这行代码都放错位置了，害的我一直解决不了办法，他们是将释放连接这个问题放到上面代码中第一个注释<code>//事件驱动回调&nbsp;</code></pre>\r\n\r\n<p><code>callback(err,results,fields);</code>这个的前面，这个写法是<strong>错误</strong>的，这个写法会发生的错误就是在你不停的请求10来次之后，发现连接不上了。所以，释放连接应该放在&lsquo;conn.query&rsquo;之后，<strong>执行查询完之后再释放连接才是正确的</strong>！！！，所以要想上面代码中的写法才不会出错！</p>\r\n', '0', '2018-06-06 09:27:38');
INSERT INTO `posts` VALUES ('12', '6', '官方实锤！微软宣布以 75 亿美元收购 GitHub', '在文中，微软表示开发者是这个新时代的创建者，他们为世界编写代码，而 GitHub 是他们的“家”，在上面，每位开发者都可以共同创建、协作、共享代码并相互为彼此贡献力量。', '<p>在文中，微软表示开发者是这个新时代的创建者，他们为世界编写代码，而 GitHub 是他们的&ldquo;家&rdquo;，在上面，每位开发者都可以共同创建、协作、共享代码并相互为彼此贡献力量。</p>\n\n<p>目前已有超过 2800 万的开发者在 GitHub 上进行协作开发，并托管了超过 8500 万个代码库。微软是一家以开发者为中心的公司，构建技术与他人共享是其使命和核心价值观。GitHub&nbsp;作为开发者学习、共享和成长的基地，也正是微软的&ldquo;目的地&rdquo;。</p>\n\n<p><strong>完成收购后，GitHub 将仍然是一个开放平台，并保留其开发者优先的风格，独立运营。</strong></p>\n\n<p>微软副总裁、Xamarin 创始人 Nat Friedman 将会担任 CEO 一职，GitHub 现任 CEO Chris Wanstrath 则将担任微软的技术院士。</p>\n', '0', '2018-06-06 21:43:45');
INSERT INTO `posts` VALUES ('13', '6', '444官方实锤！微软宣布以 75 亿美元收购 GitHub', '1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub', '<p>在文中，微软表示开发者是这个新时代的创建者，他们为世界编写代码，而 GitHub 是他们的&ldquo;家&rdquo;，在上面，每位开发者都可以共同创建、协作、共享代码并相互为彼此贡献力量。</p>\n\n<p>目前已有超过 2800 万的开发者在 GitHub 上进行协作开发，并托管了超过 8500 万个代码库。微软是一家以开发者为中心的公司，构建技术与他人共享是其使命和核心价值观。GitHub&nbsp;作为开发者学习、共享和成长的基地，也正是微软的&ldquo;目的地&rdquo;。</p>\n\n<p><strong>完成收购后，GitHub 将仍然是一个开放平台，并保留其开发者优先的风格，独立运营。</strong></p>\n\n<p>微软副总裁、Xamarin 创始人 Nat Friedman 将会担任 CEO 一职，GitHub 现任 CEO Chris Wanstrath 则将担任微软的技术院士。</p>\n', '1', '2018-06-07 00:21:53');
INSERT INTO `posts` VALUES ('14', '6', 'Web 应用ffffff', 'Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。', '<p><strong>有些人因为朋友间关系不错，往往张口借车，你说这车主借还是不借？实在是为难。</strong>要是不借，肯定会影响朋友间的感情；若爽快地借，却又担心出现问题。一般车主会考虑车子借出后有可能发生的三个问题，按严重程度依次为：一是怕出车祸，尤其是担心出现借车朋友承担全责的车祸，那样若借车朋友无力承担应负的责任，车主就会受到连累，说不定会成为一生的&ldquo;梦呓&rdquo;；二是担心借车朋友手艺不精、交规意识不强而违规行驶，并导致扣分；三是担心借车朋友野蛮驾驶，损害车辆。</p>\n', '0', '2018-06-07 00:21:59');
INSERT INTO `posts` VALUES ('15', '6', '22官方实锤！微软宣布以 75 亿美元收购 GitHub', '1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub1111111111111111111111官方实锤！微软宣布以 75 亿美元收购 GitHub', '<p>在文中，微软表示开发者是这个新时代的创建者，他们为世界编写代码，而 GitHub 是他们的&ldquo;家&rdquo;，在上面，每位开发者都可以共同创建、协作、共享代码并相互为彼此贡献力量。</p>\n\n<p>目前已有超过 2800 万的开发者在 GitHub 上进行协作开发，并托管了超过 8500 万个代码库。微软是一家以开发者为中心的公司，构建技术与他人共享是其使命和核心价值观。GitHub&nbsp;作为开发者学习、共享和成长的基地，也正是微软的&ldquo;目的地&rdquo;。</p>\n\n<p><strong>完成收购后，GitHub 将仍然是一个开放平台，并保留其开发者优先的风格，独立运营。</strong></p>\n\n<p>微软副总裁、Xamarin 创始人 Nat Friedman 将会担任 CEO 一职，GitHub 现任 CEO Chris Wanstrath 则将担任微软的技术院士。</p>\n', '0', '2018-06-07 09:14:46');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pass` char(32) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `phone` char(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `homepage` varchar(255) DEFAULT NULL,
  `alt` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '小明', 'e10adc3949ba59abbe56e057f20f883e', 'xiaoming@itcast.cn', '\\public\\uploads\\avatar\\tony.jpg', '0', '12312345678', '传智播客', 'http://www.itcast.cn', '一名程序员');
INSERT INTO `users` VALUES ('2', '小米', 'e10adc3949ba59abbe56e057f20f883e', 'xiaomi@itcast.cn', '\\public\\uploads\\avatar\\monkey.png', '0', '12312345678', '传智播客', 'http://www.itcast.cn', '一名程序员');
INSERT INTO `users` VALUES ('6', 'zhousg', '96e79218965eb72c92a549dd5a330112', 'zhoushugang@itcast.cn', '/public/uploads/avatar/1528300628819-user.jpg', '0', '13211112222', '传智播客教育集团', 'http://www.itcast.cn', '30祖国花朵');
