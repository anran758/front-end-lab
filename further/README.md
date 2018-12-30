# 扩展阅读

**本篇目录:**

- [扩展阅读](#%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB)
  - [代码风格指南](#%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC%E6%8C%87%E5%8D%97)
  - [兼容性处理](#%E5%85%BC%E5%AE%B9%E6%80%A7%E5%A4%84%E7%90%86)
  - [扩展知识](#%E6%89%A9%E5%B1%95%E7%9F%A5%E8%AF%86)
    - [浏览器机制](#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%BA%E5%88%B6)
    - [推荐书单](#%E6%8E%A8%E8%8D%90%E4%B9%A6%E5%8D%95)
    - [百科类](#%E7%99%BE%E7%A7%91%E7%B1%BB)
    - [学习资源](#%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90)
    - [工具类](#%E5%B7%A5%E5%85%B7%E7%B1%BB)

## 代码风格指南

工欲善其事，必先利其器。程序员是需要有一个良好的编程习惯，这样才能写出优雅又高可读性的代码。

- [HTML/CSS代码规范](http://codeguide.bootcss.com) - 出自`Github`设计总监之手的代码规范
- [ECMA-5](./guide/ECMA-5) - `JavaScript ES5` 代码风格指南  
- [ECMA-6/ECMA2015](./guide/ECMA-6) - `JavaScript ES6+` 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/) - `javascript`文档注释
- [vue](https://cn.vuejs.org/v2/style-guide/) - `vue`官方推荐的风格指南

## 兼容性处理

- [Browser hack](http://browserhacks.com/) - 顾名思义，兼容低版本浏览器的`hack`.
- [HTML5shiv](https://github.com/aFarkas/html5shiv) - 兼容IE9以下不能使用HTML5的标签的问题.  
  使用方式:
    ``` html
    <!--[if lt IE 9]>
      <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
    <![endif]-->
    ```
- [Respond](https://github.com/scottjehl/Respond) - 让`IE6 ~ 8`支持媒体查询其中的 min/max-width 能让这些老旧的浏览器提供一些有限的支持.

## 扩展知识

### 浏览器机制

- [ASI机制](https://segmentfault.com/a/1190000004548664) - ASI机制

### 推荐书单

> CSS

| 书名    | 说明                                                           |
| ------- | -------------------------------------------------------------- |
| css揭晓 | 主要是讲`css(3)`不为人知的使用方式，侧重偏特效方面            |
| css世界 | 国内著名`css`大师张鑫旭所著。这本书偏向日常业务细节和原理解析 |

> Javascript

| 书名                       | 别名    | 说明                                                                                   |
| -------------------------- | ------- | -------------------------------------------------------------------------------------- |
| JavaScript高级程序设计     | 红皮书 | 新手入门经典书, 从零教你学 js                                                         |
| JavaScript权威指南         | 犀牛书  | 相比红皮书会有点难啃，更多的时候是作为工具书，不懂的时候再翻一翻                       |
| 高性能JavaScript           |         | 从`JavaScript`性能的角度进行深入探索                                                |
| 你不知道的js全册(上, 中册) |         | 深入解析 JavaScript 底层原理                                                          |
| 你不知道的js全册(下)       |         | 下册不是深入系列，反而是强行从零开始讲`JavaScript`，这本推荐程度不高,但也可以了解一下 |
| ECMAScript 6 入门(阮一峰)  |         | 经典的`ES6`入门书                                                                      |

> 性能优化

| 书名               | 别名                 | 说明                                                                              |
| ------------------ | -------------------- | --------------------------------------------------------------------------------- |
| 高性能网站指南     | 图灵动物书系列: 猎犬 | 作者是 Google 首席性能工程师，雅虎首席执行官. 本书从全局web网页的角度进行性能优化 |
| 高性能网站进阶指南 | 图灵动物书系列: 羚羊 | 猎犬书的进阶版                                                                    |

> HTTP

| 书名         | 说明                                            |
| ------------ | ----------------------------------------------- |
| HTTP权威指南 | 看书名就知道这本书会很厚，很细，读起来会有点闷 |
| 图解HTTP     | 用绘图的方式讲解HTTP                            |

> 扩展类书籍

| 书名                      | 说明                                                           |
| ------------------------- | -------------------------------------------------------------- |
| 软技能.代码之外的生存指南 | 从“人”（而非技术也非管理）的角度关注软件开发人员自身发展的书 |

### 百科类

- [caniuse](https://caniuse.com/): css 最好的兼容性百科
- [browserhacks](http://browserhacks.com/): 浏览器hacks
- [MDN](https://developer.mozilla.org/zh-CN/): Mozilla 维护的开发文档, 可能是最齐全的web文档

### 学习资源

- 刷题与测试
  - [javascript30](https://javascript30.com/): 学习和使用`HTML5`和`ES6`的API
  - [JavaScript Web Quiz](http://davidshariff.com/js-quiz/#): 测试你的javascript水平(面试题)
  - [freeCodeCamp](https://freecodecamp.cn/home)知名题目, 主要让你认识API的使用
  - [牛客网](https://www.nowcoder.com/): 知名题库, 不过题目大多有点老
- 关于性能
  - [前端优化：雅虎35条](http://blog.csdn.net/magneto7/article/details/53140269)

### 工具类

- 性能测试
  - [webpagetest](www.webpagetest.org): 网页性能测试
- css
  - [css动画库](http://elrumordelaluz.github.io/csshake/)
  - [stylie](http://jeremyckahn.github.io/stylie/): css3贝塞尔曲线可视化工具
- tools
  - [在线工具](http://tool.oschina.net/encrypt?type=3): 在线加解密, 转base64等
  - [jsbin](http://jsbin.com/?js,console,output): 在线编辑器, 可以将自己的代码保存发给别人
  - [可视化正则表达式](https://regexper.com/) 将正则表达式转为可视化图表, 让你一眼能看懂这段正则是干啥的
- UI
  - [loading](https://loading.io/)
