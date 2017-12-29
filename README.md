# Front-End-Lab

对Web前端的研究以及踩过坑的一些记录, 希望能给后来者留下帮助, 将不定期更新.

## 代码规范
> 作为一名合格的程序员, 应该养成一个好的的编程习惯. 在开发中, 你不可能永远都是一个人单打独斗, 当遇到团队开发时, 代码规范就重要性就凸显出来了.

- [HTML/CSS代码规范](http://codeguide.bootcss.com) - 出自Github设计总监的代码规范  
- [ECMA-5](https://github.com/anran758/Front-End-Lab/Code-Guide/ECMA-5) - JavaScript ES5代码风格指南  
- [ECMA-6/ECMA2015](https://github.com/anran758/Front-End-Lab/Code-Guide/ECMA-6) - JavaScript ES6/ECMA2015 代码风格指南


### 关于命名规范
#### Class命名  
在写`HTML`的`class`名称中只能出现小写字符和破折号
``` html
<div class="head-wrap">
```

#### ID驼峰式
在写`HTML`的`id`时，使用驼峰式命名
``` html
<div id="headWarp">
```

#### 对象、函数和实例
使用驼峰式命名对象、函数和实例
``` JavaScript
  var myObject = {};

  function myFunction() {
    // something code...
  }
```

#### 构造函数或类
使用帕斯卡式命名来创建构造函数或类(每一個单词的首字母都转为大写字母)
``` JavaScript
  function User(options) {
   this.name = options.name;
  }

  var good = new User({
    name: 'jeck'
  });
```

#### 私有变量前置 _ 标识


#### jQuery 对象
使用`$`作为存储 jQuery 对象的变量名前缀。
``` JavaScript
  var $sidebar = $('.sidebar');
```
