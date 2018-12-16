# Front-End-Lab

:art: 将曾经踩过的坑或者常用的解决方案记录下来，完善自己的知识库~

[![GitHub stars](https://img.shields.io/github/stars/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/network)
[![GitHub watchers](https://img.shields.io/github/watchers/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/watchers)
[![GitHub issues](https://img.shields.io/github/issues/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/issues)
[![CRAN/METACRAN](https://img.shields.io/cran/l/devtools.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab)

> Notes

最近想整理总结一下关于小程序开发的经验，之后会开始抽空更新博客了吧(如果时间安排的过来的话qwq

## 导读

- [CSS](https://github.com/anran758/Front-End-Lab/tree/master/CSS) -  常见CSS/CSS3的应用或技巧
- [Git](https://github.com/anran758/Front-End-Lab/tree/master/Git) -  常见CSS/CSS3的应用或技巧
- [Page design](https://github.com/anran758/Front-End-Lab/tree/master/Page%20design) - 页面设计、布局设计
- [正则表达式 (RegExp)](https://github.com/anran758/Front-End-Lab/tree/master/REGEXP) - 正则速查表，总结工作中常用的正则
- [编码规范/风格指南](./guide) - 团队代码规范或语言风格指南
- [扩展阅读](./further)
- [关于兼容性](#%E5%85%B3%E4%BA%8E%E5%85%BC%E5%AE%B9%E6%80%A7)

:construction: 待完善

- [HTML](https://github.com/anran758/Front-End-Lab/tree/master/HTML) - 在编写`HTML`中可能会遇到的问题
- [移动端解决方案](https://github.com/anran758/Front-End-Lab/tree/master/Mobile)

----

### 关于兼容性

- [Browser hack](http://browserhacks.com/) - 顾名思义，兼容低版本浏览器的`hack`.
- [HTML5shiv](https://github.com/aFarkas/html5shiv) - 兼容IE9以下不能使用HTML5的标签的问题.  
  使用方式:
    ``` html
    <!--[if lt IE 9]>
      <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
    <![endif]-->
    ```
- [Respond](https://github.com/scottjehl/Respond) - 让`IE6 ~ 8`支持媒体查询其中的 min/max-width 能让这些老旧的浏览器提供一些有限的支持.
