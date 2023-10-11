# HTML

## HTML5 哪些标签可以优化 SEO?

SEO 需要使用具有语义化的标签，避免使用 div 与 span 这种无语义标签:

1. title
2. meta
3. header
4. nav
5. article
6. aside
7. footer

## HTML 的 img 标签为什么要添加 alt 属性呢？

`<img>` 标签的 `alt` 元素用于在图像无法显示、网络错误或用户禁用图像显示时，代替图像显示在浏览器中的文本内容。添加该属性能增强网站的可访问性。

## 元素的 alt 和 title 有什么区别？

`alt` 元素常用于图片显示失败后作为备用的文本内容，而 `title` 的值一般作为提示条 (tooltip) 呈现给用户，在光标于图片上停下后显示出来。

`title` 属性不是 `alt` 属性可接受的替代品。并且，避免将 `alt` 属性的值直接复制到同一幅图片的 `title` 属性上。这样可能会让一些屏幕阅读器把同一段描述读两遍，造成一定程度上的困扰。

## HTML 的 a 标签属性 rel='nofollow' 有什么作用？

`nofollow` 是 HTML 页面中 a 标签的属性值。这个标签的意义是告诉搜索引擎不要追踪此网页上的链接或不要追踪此特定链接。

`nofollow` 的作用是：

1. 防止不可信的内容，最常见的是博客上的垃圾留言与评论中为了获取外链的垃圾链接，为了防止页面指向一些拉圾页面和站点。
2. 为了防止付费链接影响 Google 的搜索结果排名。
3. 引导爬虫抓取有效的页面，避免爬虫抓取一些无意义的页面，影响爬虫抓取的效率。

## 简述超链接 target 属性的取值和作用

该属性指定在何处显示链接的资源。 取值为标签（tab），窗口（window），或框架（iframe）等浏览上下文的名称或其他关键词。以下关键字具有特殊的意义：

- `_self`: 当前页面加载。`target` 的默认值为该值
- `_blank`: 在新窗口打开
- `_parent`: 加载响应到当前框架的 `HTML4` 父框架或当前的 `HTML5` 浏览上下文的父浏览上下文。如果没有 `parent` 框架或者浏览上下文，此选项的行为方式与 `_self` 相同。
- `_top`: 加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有 parent）。如果没有 parent 框架或者浏览上下文，此选项的行为方式相同 `_self`

## 说说你对 target="\_blank" 的理解？有啥安全性问题？如何防范？

在超链接 `<a>` 中设有 `target="_blank"` 可以不影响当前页面，而是新的一个选项卡窗口打开目标链接页面。

然后在目标链接中可以通过 `window.opener` 对象获得对链接页面的部分访问权限。虽然访问权限有限，但新打开的选项卡可以更改 `window.opener.location` 为某些网络钓鱼页面。用户信任已经打开的页面，可能没有察觉到可能的潜在威胁。

解决的方式很简单，若需要在新的选项卡打开，可以在超链接中再额外添加 `rel="noopener noreferrer"` 元素。

- `rel="noopener"` 防止新页面能够访问该 window.opener 属性并确保它在单独的进程中运行。
- `rel="noreferrer"` 阻止浏览器导航到另一个页面时，通过 Referer: HTTP header 将该页面地址或任何其他值作为 Referrer 发送。

目前所有主要浏览器都已通过更新默认行为以确保安全而无需指定 `rel` 属性来解决此问题。但一些留的浏览器（指 IE 11）仍需要设置该属性才能阻止漏洞。

参考资料:

- [Target="\_blank" - the most underestimated vulnerability ever](https://www.jitbit.com/alexblog/256-targetblathe-most-underestimated-vulnerability-ever/)
- [Link with target="\_blank" and rel="noopener noreferrer" still vulnerable?](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable)

## 把带 css 链接的 link 标签放在 head 标签内，而带 js 链接的 script 标签尽量靠近 body, 为什么会有这种提议？如果必须不这样做，该如何处理？

HTML 解析是自上向下解析的。若在 `<head>` 中解析到 `<link>` 标签的话，可以一边加载样式表渲染样式，一边继续向下解析。

若解析到 `<script>` 标签的话，由于 `<script>` 有可能会修改 DOM 的结构(比如 `document.write()`)，因此会停止渲染，先将 `<script>` 加载完毕并执行后，才继续向下解析。在这阻塞的过程中，用户所看到的页面将是一片空白，会影响用户体验。所以早期最佳实践就是将 `<script>` 放到 `</body>` 之前，这样就不会影响页面的渲染了。

HTML5 为 `<script>` 引入了 `async` 属性，添加该属性后可使脚本请求并行加载，让尽快解析和执行而不阻塞渲染。常见的应用场景就是没有 `DOM` 依赖关系或是没有跟其他脚本有依赖关系的脚本，如页面统计等。

## label 标签有什么用？

无障碍体验优化，方便鼠标点击使用，扩大可点击的范围，增强用户操作体验。

## WebComponent 是什么

Web Components 是一种能够创建自定义 HTML 元素的技术。这些元素和你平时用的 HTML 标签一样，但是可以包含你自己定义的行为和样式。
这样做的好处是可以创建一些可重用的组件，比如一个特别的按钮或者一个导航栏，然后在不同的网页或项目中使用它们，而不用每次都重写相同的代码。

使用步骤大致如下：

1. 定义一个类：这个类继承自 HTMLElement，你可以在这里定义组件的功能和行为。
2. 注册自定义元素：使用 `customElements.define` 方法来注册新元素，此时需要给它定义一个标签名（比如 `<my-button>`）。
3. 使用组件

``` js
class WelcomeMessage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>欢迎访问我们的网站!</p>`;
  }
}

customElements.define('welcome-message', WelcomeMessage);
```
