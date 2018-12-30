# 移动端

移动端的一些坑或者 bug :

1. ios和安卓下`z-index`的表现会不一样。

## 常见meta

`<meta http-equiv="x-ua-compatible" content="ie=edge">`
// 表示强制使用最新的IE浏览器模式渲染页面`

`<meta name="viewport" content="width=device-width, initial-scale=1">`
// 视口宽度统一, 设置初始的缩放比例`

Web APP的支持

``` html
<!-- 网页内容以应用程序风格显示，并使状态栏透明 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

## 方案

**REM适配:**

计算缩放后，`1rem`就等于`100px`了。

``` html
<script>
  var docEl = document.documentElement;
  var scale = docEl.clientWidth / 750;
  docEl.style.fontSize = 100 * scale + 'px';
</script>
```
