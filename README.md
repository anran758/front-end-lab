# Front-End-Lab

> 路漫漫其修远兮，吾将上下而求索

将一些踩过的坑或者一些常用的解决方案记录下来，完善自己的知识库~

> Notes

  最近想整理一下关于小程序开发的经验，之后会开始抽空更新博客了吧(

----

### 代码规范

> 作为一名合格的程序员, 应该养成一个好的的编程习惯. 在实际开发中, 你不可能总是单打独斗, 当遇到团队协作时, 代码规范就重要性就凸显出来了.

- [HTML/CSS代码规范](http://codeguide.bootcss.com) - Github设计总监的代码规范
- [ECMA-6/ECMA2015](https://github.com/anran758/Front-End-Lab/tree/master/Code%20guide/ECMA-6) - JavaScript ES6/ECMA2015 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/) - javascript文档注释

----

### CSS

> css虽说入门简单, 由于CSS的强耦合性的问题很多坑还是需要自己踩下去才知道是怎么回事.

这个模块主要分享常见CSS/CSS3的应用或技巧. 目前主要更新css方面, 中后期会更新根据项目需求所需的css特效吧.

[CSS - 传送门](https://github.com/anran758/Front-End-Lab/tree/master/CSS)

----

### Page design

偶尔能在某些页面中看到别人设计的一些炫酷的交互, 令人惊艳. 这时就不由得想到, 他是如何去实现这种效果的? 然后会把这些东西收藏起来. 自己去尝试实现.

*[Page design](https://github.com/anran758/Front-End-Lab/tree/master/Page%20design)* 里却不单单只放着这些交互设计, 还有一些开发中常见的布局技巧. 就比如众所周知圣杯布局等.

----

### 正则表达式 (RegExp)

正则表达式用的恰当能使你代码量硬是减少几倍, [这里](https://github.com/anran758/Front-End-Lab/tree/master/RegExp)收集工作中常用的正则表达式. 等需要用到的时候不妨回来查一查有没有你想要的~

----

### 兼容性相关

- [Css hack](http://browserhacks.com/)
- [HTML5shiv](https://github.com/aFarkas/html5shiv) - 兼容IE9以下不能使用HTML5的标签的问题.  
  使用方式:

  ``` html
  <!--[if lt IE 9]>
    <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
  <![endif]-->
  ```

- [Respond](https://github.com/scottjehl/Respond) - 让IE6 ~ 8支持媒体查询其中的 min/max-width 能让这些老旧的浏览器提供一些有限的支持.

### 扩展阅读

**浏览器机制:**

- [ASI机制](https://segmentfault.com/a/1190000004548664) - ASI机制

**推荐阅读:**

- **CSS:** css揭晓、css世界
- **JavaScript(难度从低到高):**
  1. 高性能JavaScript
  2. JavaScript高级程序设计(高程三/红皮书)
  3. JavaScript权威指南 - 第六版(犀牛书/工具书)
  4. 你不知道的js全册(进阶必备)
  5. ECMAScript 6 入门(阮一峰)
- **性能相关:** 高性能网站指南(猎犬)、高性能网站进阶指南(羚羊)
- **HTTP：** HTTP权威指南，图解HTTP
- **程序员扩展类**: 软技能.代码之外的生存指南

**百科类:**

- [caniuse](https://caniuse.com/): css最好的兼容性百科
- [browserhacks](http://browserhacks.com/): 浏览器hacks
- [MDN](https://developer.mozilla.org/zh-CN/): Mozilla维护的开发文档, 可能是最齐全的web文档

**学习资源:**

- 刷题与测试
  - [javascript30](https://javascript30.com/): 学习和使用`HTML5`和`ES6`API
  - [JavaScript Web Quiz](http://davidshariff.com/js-quiz/#): 测试你的javascript水平(面试题)
  - [freeCodeCamp](https://freecodecamp.cn/home)知名题目, 主要让你认识API的使用
  - [牛客网](https://www.nowcoder.com/): 知名题库, 不过有些题目有点老了
- 性能测试
  - [webpagetest](www.webpagetest.org): 网页性能测试
  - [前端优化：雅虎35条](http://blog.csdn.net/magneto7/article/details/53140269)
- tools
  - [在线工具](http://tool.oschina.net/encrypt?type=3): 在线加解密, 转base64等
  - [可视化正则表达式](https://regexper.com/) 将正则表达式转为可视化图表, 让你一眼能看懂这段正则是干啥的
  - [stylie](http://jeremyckahn.github.io/stylie/): css3贝塞尔曲线可视化工具
  - [jsbin](http://jsbin.com/?js,console,output): 在线编辑器, 可以将自己的代码保存发给别人

**其他:**

- [css动画库](http://elrumordelaluz.github.io/csshake/)