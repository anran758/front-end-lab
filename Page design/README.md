# Page design

通用的网页设计元素, 还有一些提供设计灵感的 button 特效等. 以及前端常用的各布局.

## 常见的布局方式

> 目前主流的布局方式.

### 圣杯布局

圣杯布局实际上是讨论「三栏液态布局」的实现, 主要思想是让中间主要的内容先渲染, 两边相对来说没那么重要的放在后面加载.

圣杯布局让`container`上构建三个模块， 分别为`left`、`main`、`right`，其中`main`独占一行.
实现的原理如下：

- 三者都使用`float`进行浮动.
- `container`使用`padding`为两侧栏腾出空位.
- 将主要内容`main`排在前头, 让 **DOM树**先加载.
- 两侧栏添加`relative`定位
  * 左列使用`margin-left: -100%`
  * 右例使用`margin-left: -右列宽度`

[源码](https://github.com/anran758/Front-End-Lab/blob/master/Page%20design/Layout/Holy%20Grail.html)

![image](./images/auto-width.gif)

### 双飞翼布局

> 这段来自于大漠老师的「[聊聊 CSS 中的布局模式](http://gitbook.cn/books/5a5cd7ec6f3da41fa892ec8f/index.html)」一文, 老师总结的比我简洁就直接搬过来用了..

双飞翼布局和圣杯布局类似，也是左，中，右三列，中列里面会再套一个容器。

- 中列宽度设置为`100%`
- 使用负边距`margin-left`把左右两列拉到和中列同一行
- 在中列内的容器div设置`margin-left`和`margin-right`给左右两列留下对应的空间

实现代码也很简单：

``` html
<!-- HTML -->
<div class="container">
    <!-- 中间的 div 必须写在最前面 -->
    <div class="middle">
        <div class="middle-inner">中间弹性区</div>
    </div>
    <div class="left">左边栏</div>
    <div class="right">右边栏</div>
</div>

<!-- CSS -->
<style>
  .container {
      width: 960px;
      margin: 20px auto;
      overflow: hidden;
  }
  .middle {
      float: left;
      width: 100%;
  }
  .middle-inner {
      margin: 0 240px; /*留出距离*/
      background-color: yellow;
  }
  .left {
      float: left;
      width: 220px;
      margin-left: -100%;
      background-color: red;
  }
  .right {
      float: left;
      width: 220px;
      margin-left: -220px;
      background-color: green;
  }
</style>
```

圣杯布局和双飞翼布局解决的问题是一样的，都是两边定宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。

这样做主要是因为早年的网络和设备没有现在这么优秀，为了让主要的内容先向用户呈现，所以很多时候都使用这两种布局方式。甚至可以说，现在很多人都还在使用这两种布局方式。

### Flexbox布局
Flexbox是CSS的一个新特性，这个新特性解决我们以前在CSS中很多麻烦问题，比如说内容的伸缩与扩展、垂直居中、等分列、等高列等等。

Flexbox顾名思义就是弹性盒子, 它可以规定弹性元素如何分配空间或者布局的方式. 下面就是个例子. 利用`flex`的计算的特性, 配合js的`onclick`实现出来的效果.
![flexbox-1](./images/flexbox-1.gif)

当我们将Flex布局运用在移动端, 更能体现出它的价值——它能适配移动端各种复杂的屏幕. qq音乐的导航就是使用了`flex`的属性, 我们来随机测试一下机型. 能发现不管是什么尺寸屏幕下, `flex`都能合理的分配空间.

![flexbox-2](./images/flexbox-2.gif)

关于Flexbox的使用这里也不多说了, 下面是一些学习资料, 感兴趣的同学可以看一下:  
- [Flexbox简介](https://segmentfault.com/a/1190000002910324#articleHeader6)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex入门](http://ife.baidu.com/note/detail/id/952)

### 响应式布局
响应式布局实际上是一个设计理念, 它是多项技术的综合体. 能适应于各种的屏幕. 其核心围绕着媒体查询(@media).

`max-width`是媒体查询的一个特性，其意思是指媒体类型小于或等于指定的宽度时, `min-width`则相反.

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

关于响应式布局设计的其他几个点可以看[这里](https://anran758.github.io/blog/2018/01/25/web-%E8%B5%B0%E8%BF%9Bweb%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91/#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B8%83%E5%B1%80)  

## Design

### botton

> CSS3 button 悬浮特效.

[codepen / 测试一下](https://codepen.io/anran758/pen/LejpaB/)