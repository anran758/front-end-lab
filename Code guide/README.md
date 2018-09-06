# Code Standards and stylu guide

关于前端代码规范及相关的代码风格指南. 养成一个好的编程习惯对程序员的意义是重大的. 还能有效避免与一些没有意义的bug.

### 命名规范

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

---

#### HTML/CSS

> 团队中, 永远遵循同一套编码规范 -- 可以是这里列出的，也可以是你自己总结的

- [HTML/CSS代码规范](http://codeguide.bootcss.com) - 出自Github设计总监的代码规范

---

#### JavaScript

> Airbnb JavaScript Style Guide -- 原文出自国外, 里面对JavaScript的很多细节进行描述. 可以根据自己的风格进行适当的调整. 写出一份让自己舒服的代码吧~

- [ECMA-5](https://github.com/anran758/Front-End-Lab/tree/master/Code-Guide/ECMA-5) - JavaScript ES5代码风格指南  
- [ECMA-6/ECMA2015](https://github.com/anran758/Front-End-Lab/tree/master/Code-Guide/ECMA-6) - JavaScript ES6/ECMA2015 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/) - javascript文档注释
