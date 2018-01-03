# Page design

通用的网页设计元素, 还有一些提供设计灵感的 button 特效等. 以及前端常用的各布局.

## 圣杯布局(Holy grail)

圣杯布局是讨论「三栏液态布局」的实现, 主要思想是让中间主要的内容先渲染, 两边相对来说没那么重要的放在后面加载.

它的实现方式其实很简单. 在`container`构建三个模块分别为`left`,`main`,`right`. 三者都使用 float 进行浮动. `container`使用`padding`为两侧栏腾出空位. `main`作为主要内容让 DOM 树解析先加载(排在前头), 两侧栏使用`relative`定位, 再使用`margin`让两栏进行偏移即可.

我将所有通用的布局都整理到了`Holy Grail.html`里了, 有兴趣的同学可以看看.

## 点缀的设计元素/动态特效

### botton

> CSS3 button 悬浮特效.

<p data-height="300" data-theme-id="32168" data-slug-hash="LejpaB" data-default-tab="css,result" data-user="anran758" data-embed-version="2" data-pen-title="button hover" class="codepen">See the Pen <a href="https://codepen.io/anran758/pen/LejpaB/">button hover</a> by anran758 (<a href="https://codepen.io/anran758">@anran758</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
