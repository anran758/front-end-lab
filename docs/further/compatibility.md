# 兼容性处理

### **[Browser hack](http://browserhacks.com/)**

Browser hack 提供了兼容低版本浏览器的 `hack` 指南。

### **[HTML5shiv](https://github.com/aFarkas/html5shiv)**

可以用于兼容 IE9 以下不能使用 HTML5 的标签的问题. 使用方式如下:

```html
<!--[if lt IE 9]>
  <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

### **[Respond](https://github.com/scottjehl/Respond)**

让`IE6 ~ 8`支持媒体查询其中的 min/max-width 能让这些老旧的浏览器提供一些有限的支持。

### IE Hack 条件注释

```html
<!--[if gt/lt/gte/lte IE8]>
  <p>content</p>
<![endif]-->
```

- gt (>, 大于)
- lt (<, 小于)
- gte (>=, 大于等于)
- lte (<=, 小于等于)

当 IE 的版本符合以上条件时，if 内部的标签将会展示出来。一般主要用于给正在使用 IE 的用户展示兼容性提示。
