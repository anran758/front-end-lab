---
sidebarDepth: 3
---

# 移动端开发

## Meta

> [移动前端不得不了解的 HTML5 head 头标签](https://www.html.cn/archives/6410)

```html
<!-- Web APP的支持 -->
<!-- 网页内容以应用程序风格显示，并使状态栏透明 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<!-- 百度禁止转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />

<!-- 视口宽度统一, 设置初始的缩放比例 -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- 表示强制使用最新的IE浏览器模式渲染页面 -->
<meta http-equiv="x-ua-compatible" content="ie=edge" />
```

SEO 基础要素:

```html
<title>your title</title>

<meta name="keywords" content="your keywords" />
<meta name="description" content="your description" />
<meta name="author" content="author,email address" />
<meta name="robots" content="index,follow" />
```

### QQ 浏览器（X5 内核）

```html
<!-- 设置锁定横屏、竖屏显示模式，portrait（横屏），landscape（竖屏）-->
<meta name="x5-orientation" content="portrait|landscape" />
<!-- 设置全屏显示页面 -->
<meta name="x5-fullscreen" content="true" />
<!-- 开启页面以应用模式显示（全屏显示等） -->
<meta name="x5-page-mode" content="app" />
```

### 360 浏览器

| 360 浏览器渲染模式 | 名字        |
| ------------------ | ----------- |
| webkit             | 极速内核    |
| ie-comp            | IE 兼容内核 |
| ie-stand           | IE 标准内核 |

```html
<meta name="renderer" content="webkit|ie-comp|ie-stand" />

<!-- 如果安装了 Google Chrome Frame，则使用 GCF 来渲染页面，如果没有安装 GCF，则使用最高版本的 IE 内核进行渲染。 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
```

## 调试

众所周知，移动端一般没有控制台来看输出信息，因此我们可以安装[vConsole](https://github.com/Tencent/vConsole)来查看相关信息。

## 方案

### rem 适配

- 字体单位
  值是根据 HTML 根元素大小而定, 同样可以作为宽度, 高度等单位.
- 适配原理
  将 px 替换成 rem, 动态修改 HTML 的 font-size 适配.
- ios 6 以上和 android 2.1 以上, 基本覆盖所有流行的手机系统.

将下面代码插入`<HTML>`中。使用 `js` 计算缩放，`1rem`就等于 `100px` 了。

```html
<script>
  var docEl = document.documentElement;
  var scale = docEl.clientWidth / 750;
  docEl.style.fontSize = 100 * scale + "px";
</script>
```

若需要兼容低版本的浏览器，仅需在 rem 前加上相同的 font-size 尺寸即可。

### em 适配

浏览器默认的字体是16px。当字体设置如下时，浏览器将根据该浏览器的用户设置呈现字体：

```css
body {
  font-size: 100%;
}
```

`font-size: 100%;` 在结合em基于设计的时候可以非常有用。

什么时候有用？当您的网站需要适应访客的愿望时。举个例子，一个老人，把他的默认字体大小为 24 像素。或者是具有大屏幕分辨率的人可以增加他的默认字体大小，因为他必须眯起眼睛。大多数网站将会破裂，但基于 em 的网站能够应对这些情况。

但需要注意的是, em 完全取决于声明的字体 body 。或者你可以说，它从小孩跑到父母。它不断寻找最近的父母的字体大小更改。哪些在大多数情况下将代码引导到 body 元素或用户代理默认样式表。

### 响应式设计

响应式设计为不同屏幕尺寸展示合适的设计理论上是最佳的用户体验方案，但该方案的缺点是需要出更多的设计、编写更多的代码，实现成本会比其他适配方案高。

响应式设计的讨论与实现可在 css 篇幅中的[响应式布局](../css/README.md#响应式布局)查阅。

## 滚动体验优化

### 滚动穿透

如果我们需要做弹框组件的话，在 `ios` 中可能会遇到滚动穿透的问题。常见的解决方案是打开弹框时将 body 悬浮起来，关闭时将 body 恢复原状。由于悬浮后会改变页面的尺寸，因此同时给 `body` 加上 `width: 100%; height: 100%;` 的样式:

```js
// 开启弹框前调用
function fixedBody() {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  document.body.style.cssText += `position:fixed;top:-${scrollTop}px`;
}

// 关闭弹框后调用
function looseBody() {
  const body = document.body;
  body.style.position = "";

  const top = body.style.top;
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
  body.style.top = "";
}
```

### scroll-behavior

当用户手动导航或者 CssOM scrolling API 触发滚动操作时，CSS 属性 [scroll-behavior](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior) 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。

```css
/* 平滑滚动 */
scroll-behavior: smooth;
```

### 滑动卡顿

`-webkit-overflow-scrolling` 可以解决移动端滑动卡顿的问题，但可能会并发一些问题:

1. 滑动中 scrollTop 属性不会变化
2. 手势可穿过其他元素触发元素滚动
3. 滑动时可能会暂停其他元素的 transition 效果

## 已知 bug

1. ios 和安卓下的 `z-index` 表现会不一致。
