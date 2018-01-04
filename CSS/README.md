# CSS / CSS3 的踩坑与应用

> CSS 的学习曲线可以说是非常奇怪了.. 说简单, 的确来个人认真的学习三五天, 也能跟着模仿, 撸出一个像样的页面. 但是说复杂, 的确又是挺复杂的, 各个属性之间的耦合性让人防不胜防. 动了一个属性可能会牵扯到另外属性.

CSS 相关的资料在网上也很多, 但都比较零散, 也有很多坑 dalao 们踩过的都知道, 如`inline-block`就自带有 3px 左右的间隙, 新手就会摸不透头脑, 因此将自己的一些经验整合分享下. 回头遇到相似的场景还可以翻回来看看相关的解决方案.

如果有同学在 css 方面遇到困扰或者难题, 也不妨向我提问, 我了解的东西自然乐于分享, 我没遇到的坑也可以大家一起来讨论学习~

**食用说明**  
我会尽量将案例都配合图片来展示效果. `codepen`是一个在线分享代码的工具, 点击进去可以看到部署上去代码的实际效果.

---

### 目录

* CSS 及常见的应用
  1. [[common] reset 与 Normalize](#common-reset)
  2. [[common] 响应式设计 - 针对不同分辨率设置(@media)](#common-responsive)
  3. [[display] 隐藏元素](#dispaly)
  4. [[image] 图片居中处理](#imgage-center)
  5. [[layout] 关于居中](#layout-center)
  6. [[layout] 查看更多 - 白色半透明遮罩](#layout-background-more)
  7. [[nav] 导航渐变色分割线 - after](#nav-split)
  8. [[nav] 导航列表下标 - 悬浮动画显示](#nav-anima)
  9. [[text] 文字超出显示省略号 - text-overflow](#text-overflow)
* CSS / CSS3 绘制图形
  1. [基础图形](#form-1)

---

### CSS 及常见的应用

<a name="common-reset"></a>

#### [common] reset 与 Normalize

可能有同学会困惑, 这两者有什么区别, 该如何取舍. 我曾经写过一篇博客, . 有兴趣的同学可以过去看一下 - [浅谈 Normalize 与 reset](https://anran758.github.io/blog/2017/10/15/%E6%B5%85%E8%B0%88Normalize%E4%B8%8Ereset/)

**优化后的`reset.css`**: https://github.com/anran758/Front-End-Lab/tree/master/CSS/reset.css

---

<a name="common-responsive"></a>

#### [common] 响应式设计 - 针对不同分辨率设置(@media)

如今比较通用的媒体查询. 其中`max-width`是媒体查询的一个特性，其意思是指媒体类型小于或等于指定的宽度时, `min-width`相反

```css
/* 1024px显屏 */
@media screen and (max-width: 1024px) {
  /* 样式代码 */
}

/* 800px显屏 */
@media screen and (max-width: 800px) {
}

/* 640px显屏 */
@media screen and (max-width: 640px) {
}

/* iPad横板显屏 */
@media screen and (max-device-width: 1024px) and (orientation: landscape) {
}

/* iPad竖板显屏 */
@media screen and (max-device-width: 768px) and (orientation: portrait) {
}

/* iPhone 和 Smartphones */
@media screen and (min-device-width: 320px) and (min-device-width: 480px) {
}
```

现在有关于这方面的运用也是相当的成熟，twitter 的 Bootstrap 第二版本中就加上了这方面的运用。大家可以对比一下：

```css
@media (max-width: 480px) {
  /* ... */
}
@media (max-width: 768px) {
  /* ... */
}
@media (min-width: 768px) and (max-width: 980px) {
  /* ... */
}
@media (min-width: 1200px) {
  /* ... */
}
```

---

<a name="display"></a>

#### [display] 隐藏元素

优化无障碍的体验, `display: none`辅助屏幕设备实际上是读不了的。

```css
.hidden {
  position: absolute;
  top: -9999em;
}

.hidden {
  position: absolute;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
```

如果不用顾忌无障碍的话, 也可以这个方法来避免页面回流

```css
.hidden {
  position: absolute;
  visibility: hidden;
}
```

---

<a name="imgage-center"></a>

#### [image] 图片居中裁剪

我们经常能遇到这种情景, 做一个用户头像. 拿到的图片是一个长方形的长图, 但是我们并不需要这么长的图, 因此我们需要"裁剪". 这时我们只需设置图片中心为原点, 设置相应的宽高再加上圆角即可, 代码如下:

```css
.user-info-box .avatar {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: 50%/cover;
  background-color: #f1f1f1;
  background-image: url(https://avatars.githubusercontent.com/u/23024075?v=3);
}
```

其中`background: 50%/cover`是关键, 这一个方法同时也可以适用于其他有图片的场景.
<p data-height="300" data-theme-id="32168" data-slug-hash="WdOvRY" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="images-center" class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/WdOvRY/">images-center</a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

<a name="layout-center"></a>

#### [layout] 关于居中

> 常用的居中方法

1. `absolute` + `margin`分配剩余空间, 这个方法需要设置宽高.

```css
.element {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

2. `absolute` + `transform`自身宽高的一半, 副作用是`transform`会占据原来的文档流位置. 部分场景不适用.

```css
.element {
  position:  absolute;
  top:  50%;
  left:  50%;
  transform:  translate(-50%, -50%);
}
```

---

<a name="layout-background-more"></a>

#### [layout] 查看更多 - 白色半透明遮罩

写了个简易的 Demo, 使用`linear-gradient`颜色渐变, 再使用`pointer-events: none`清除默认事件.  
[test / codepenn](https://codepen.io/anran758/pen/ppwwKN)

![background-more](./images/background-more.png)
<p data-height="300" data-theme-id="32168" data-slug-hash="ppwwKN" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="ppwwKN" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/ppwwKN/">ppwwKN</a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

<a name="nav-split"></a>

#### [nav]导航渐变色分割线 - after

使用`after`对导航进行分割, 对`background`使用`linear-gradient`渐变.

<p data-height="300" data-theme-id="32168" data-slug-hash="ypXYba" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="Nav Dividing line" class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/ypXYba/">Nav Dividing line</a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

<a name="nav-anima"></a>

#### [nav]导航列表下标 - 悬浮动画显示

利用`:before`和`transition`实现悬浮后, 下标从底部中间向两边展开.

<p data-height="300" data-theme-id="32168" data-slug-hash="BJZdLL" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="nav " class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/BJZdLL/">nav </a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

![nav-anima](./images/nav-anima.png)

---

<a name="text-overflow"></a>

#### [text] 文字超出显示省略号(text-overflow)

text-overflow 只是用来说明文字溢出时用什么方式显示，要实现溢出时产生省略号的效果，还须配合其他属性.

```css
/* 强制不断行, 单行超出范围出现省略号 */
.overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

---

### CSS / CSS3 绘制图形

<a name="form-1"></a>

#### 基本图形

善用 css 属性绘制图形, 来完成一些设计所需.

<p data-height="300" data-theme-id="32168" data-slug-hash="NXgzGM" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="NXgzGM" class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/NXgzGM/">NXgzGM</a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

![form](./images/form-1.png)