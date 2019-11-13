# 移动端开发

## Meta

> [移动前端不得不了解的HTML5 head 头标签](https://www.html.cn/archives/6410)

``` html
<!-- Web APP的支持 -->
<!-- 网页内容以应用程序风格显示，并使状态栏透明 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<!-- 百度禁止转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />

<!-- 视口宽度统一, 设置初始的缩放比例 -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 表示强制使用最新的IE浏览器模式渲染页面 -->
<meta http-equiv="x-ua-compatible" content="ie=edge">
```

SEO基础要素:

``` html
<title>your title</title>

<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta name="author" content="author,email address">
<meta name="robots" content="index,follow">
```

### QQ 浏览器（X5 内核）

``` html
<!-- 设置锁定横屏、竖屏显示模式，portrait（横屏），landscape（竖屏）-->
<meta name="x5-orientation" content="portrait|landscape">
<!-- 设置全屏显示页面 -->
<meta name="x5-fullscreen" content="true">
<!-- 开启页面以应用模式显示（全屏显示等） -->
<meta name="x5-page-mode" content="app">
```

### 360浏览器

| 360 浏览器渲染模式 | 名字        |
| ------------------ | ----------- |
| webkit             | 极速内核    |
| ie-comp            | IE 兼容内核 |
| ie-stand           | IE 标准内核 |

``` html
<meta name="renderer" content="webkit|ie-comp|ie-stand">

<!-- 如果安装了 Google Chrome Frame，则使用 GCF 来渲染页面，如果没有安装 GCF，则使用最高版本的 IE 内核进行渲染。 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```

## 方案

## 调试

众所周知，移动端一般没有控制台来看输出信息，因此我们可以安装[vConsole](https://github.com/Tencent/vConsole)来查看相关信息。

### REM适配

将下面降本插入`<HTML>`中，计算缩放后，`1rem`就等于`100px`了。

``` html
<script>
  var docEl = document.documentElement;
  var scale = docEl.clientWidth / 750;
  docEl.style.fontSize = 100 * scale + 'px';
</script>
```

## 已知 bug

1. ios 和安卓下的 `z-index` 表现会不一致。
