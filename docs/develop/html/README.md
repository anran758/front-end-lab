---
sidebarDepth: 3
---

<!-- omit in toc -->
# HTML

- [img](#img)
- [CSS 属性](#css-属性)
  - [href](#href)
- [video](#video)
  - [视频首屏最先加载方法](#视频首屏最先加载方法)
  - [引用视频播放失败](#引用视频播放失败)
- [pre / code](#pre--code)

---

编写`HTML`的一些好习惯:

每个标签都有自己的语义，coding 时应该编写具有语义化的代码。这样方便小蜘蛛(搜索引擎)的抓取收录网站信息。

1. `h1 ~ h6`表示标题. 不准滥用`h1`标签
2. `ul` 标签多用于无序列表
3. `ol` 标签用于有序列表
4. `dl` 标签用于定义数据列表
5. `em`、`strong` 表示强调等

在模块化工程中，`<script>`标签加上了`type="ecmascript-6"`后, eslint 部分规则会失效。

## img

`<img />` 自适应 `div` 大小

``` css
img { max-width: 100%; max-height: 100%; }
```

`max-width:100%` 和 `width:100%` 的区别在于:

`max-width` 是相对于 img 自身的尺寸而言的，意思是图片最大宽度为自身尺寸的宽，在这里就是 100px。而 `width` 的 100% 我们上面已经说过了是相对于父级宽度的，所以为了不让图片被放大后失真我们可以设置 img 的最大宽度为自身尺寸大小，更通俗的讲就是只允许缩小不允许放大 img。

HTML5 图片自适应:

``` html
<!--
* html 设置了 font-size: 62.5%;
* em 是相对 html 的 .50em 即 800px;
* picture 标签的兼容性是IE10 +
-->
<div class="item">
  <picture>
    <source srcset="img/xxx01-l.png" midia="(min-width: 50em)">
    <source srcset="img/xxx01-l.png" hmidia="(min-width: 50em)">
    <img srcset="img/xxx01.png" alt="something">
  </picture>
</div>
```

## CSS 属性

### href

`href` 属性常被 `a` 标签用于跳转。有时只是想通过 `a` 标签来模拟 UI，并不想跳转的话可以使用以下方式:

``` js
// 阻止浏览器的默认行为，表示交给 JavaScript 控制。不填会直接跳到页面顶部。
<a href="javascript:;">link</a>

// 使用锚点标签，### 创建一个不会出现在任何地方的 link
// 若只写一个 # 的话，还是会跳回页面顶部
<a href="###">link</a>
```

## video

### 视频首屏最先加载方法

如爱奇艺、优酷等以视频为核心的网站, 用户点击进来无非就像看视频. 在进行性能优化的时候, 理所当然的先让用户看到想要看到的东西(视频). 因此我们需要把视频和相关依赖文件等最先加载.

![YouTube在网络慢的场景](@image/youtube.png)

但是浏览器会默认的将多媒体资源放在最后面加载, 无论你的标签在文档中放的多靠前. 这时的解决方案就是将`<script>`(初始化视频的js文件)改用为`<link>`标签引用.

### 引用视频播放失败

在一些业务中，会使用到第三方的视频链接。然后该链接的提供者或许会根据`referrer`来判断来源，进而拒绝请求，视频将无法播放。因此可以在页面首部加上`<meta name="referrer" content="no-referrer">`.

但引用该头部后可能会影响其他依赖`referrer`的功能。比如百度统计会追踪`referrer`，设置`no-referrer`后将无法再进行统计。

遇到 `403`, 通常是防盗链在作用。

<!-- ### video api

playbackRate 控制播放速度 -->

## pre / code

[Pre 和 Code 标签之间的区别](https://anran758.github.io/blog/2019/08/24/js-%E5%B0%86JSON%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E8%BE%93%E5%87%BA%E8%87%B3%E9%A1%B5%E9%9D%A2%E4%B8%8A/)
