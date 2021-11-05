# 扩展阅读

## 代码风格指南

工欲善其事，必先利其器。养成一个良好的编程习惯，才能写出优雅的代码。

- [HTML / CSS 代码规范](http://codeguide.bootcss.com): 出自`Github`设计总监之手的代码规范
- [javascript](./guide/js.md): `JavaScript ES6+` 代码风格指南
- [JSDoc 中文文档](http://www.css88.com/doc/jsdoc/): `javascript` 文档注释指南
- [vue](https://cn.vuejs.org/v2/style-guide/): `vue` 官方推荐的风格指南
- [react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules): `react` 官方的脚手架是自带 `eslint` 的，这个 `eslint` 底层配置 `airbnb-base`的规则，可以参考一下`react`的编写风格。

## 相关技术文章

- [前端优化：雅虎35条](http://blog.csdn.net/magneto7/article/details/53140269)
- [JavaScript ASI 机制详解](https://segmentfault.com/a/1190000004548664)

## 其他指南

**[兼容性处理指南](./compatibility.md)**

### URL design

- URL 设计中只能使用一些相对较小、通用的安全字母表中的字符.
- URL 设计希望是具有可读性的.
- URL 设计应避免使用诸如 `adv` 广告相关的单词，因为可能会被用户所装的广告拦截插件给拦截下来。

### 启动本地服务器的方法

- Nginx
- webpack dev server
- Http-server

### UI design 与 CSS 属性的关系

``` css
box-shadow:  inset(内置方向) | offset-x(水平) | offset-y(垂直) | blur-radius(模糊半径) | spread-radius(扩散半径) | color(颜色)
```

图层样式和CSS属性对应如下：

- 投影 ↔ box-shadow 垂直偏移不为0；
- 描边 ↔ border（这个不是很重要，直接体现在界面标注中也可以）；
- 渐变叠加 ↔ background-image（不止线性渐变，角度渐变、径向渐变都支持，还能图案叠加，很少用，不多说）；
- 内阴影 ↔ box-shadow: inset & 垂直偏移不为0；
- 外发光 ↔ box-shadow: 垂直水平偏移均为0；
- 内发光 ↔ box-shadow：inset & 垂直水平偏移均为0。

参考资料: [UI设计师进阶技能 —— CSS3之样式篇](https://www.jianshu.com/p/ffd475c367bb)
