# Front-End-Lab
> 路漫漫其修远兮，吾将上下而求索

将Web领域的研究以及踩过坑的经验一点一滴分享出来, 只有能帮助到后来人就会长期维护, 主要内容包括但不限于相关代码规范、项目解决方案、web安全、提高效率的工具等.

### 近期更新的内容
  将自己所学的知识和经验总结到文档中, css模块正在施工中..后续其他模块尽量抽出时间完善. 

----

### 代码规范
> 作为一名合格的程序员, 应该养成一个好的的编程习惯. 在实际开发中, 你不可能总是单打独斗, 当遇到团队协作时, 代码规范就重要性就凸显出来了.

- [HTML/CSS代码规范](http://codeguide.bootcss.com) - 出自Github设计总监的代码规范  
- [ECMA-5](https://github.com/anran758/Front-End-Lab/tree/master/Code-Guide/ECMA-5) - JavaScript ES5代码风格指南  
- [ECMA-6/ECMA2015](https://github.com/anran758/Front-End-Lab/tree/master/Code-Guide/ECMA-6) - JavaScript ES6/ECMA2015 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/) - javascript文档注释
- [Git-Commit-Emoji](https://github.com/anran758/Front-End-Lab/tree/master/Code-Guide/git-commit-emoji) - 在git项目中合理的使用emoji来凸显主要工作 

----

### CSS
> css虽说入门简单, 由于CSS的强耦合性的问题很多坑还是需要自己踩下去才知道是怎么回事.

这个模块主要分享常见CSS/CSS3的应用或技巧. 目前主要更新css方面, 中后期会更新根据项目需求所需的css特效吧.

[CSS - 传送门](https://github.com/anran758/Front-End-Lab/tree/master/CSS)

----

### 关于命名规范

**Class -**  
在写`HTML`的`class`类名中只能出现小写字符和破折号.
``` html
<!-- 贴近最近的父`class`的前缀 -->
<div class="head-wrap">
  <div class="head-title"></div>
</div>

<!--  用来操作`DOM`节点的类名添加前缀`.js-` -->
<bottom class="js-hide"></bottom>
```

**驼峰式 ID**  
在写`HTML`的`id`时，使用驼峰式命名
``` html
<div id="headWarp"></div>
```

**对象、函数和实例**  
使用驼峰式命名对象、函数和实例
``` JavaScript
  var myObject = {};

  function myFunction() {
    // something code...
  }
```

**构造函数或类**  
使用帕斯卡式命名 (*每个单词首字母大写*) 来创建构造函数或类
``` JavaScript
  function User(options) {
   this.name = options.name;
  }

  var good = new User({
    name: 'jeck'
  });
```

**jQuery对象 $**   
使用`$`作为存储 jQuery 对象的变量名前缀。
``` JavaScript
  var $sidebar = $('.sidebar');
```
  
----

### 扩展阅读
**浏览器机制:**

- [ASI机制](https://segmentfault.com/a/1190000004548664) - ASI机制

