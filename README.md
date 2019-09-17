# Front-End-Lab

[![GitHub stars](https://img.shields.io/github/stars/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/network)
[![GitHub watchers](https://img.shields.io/github/watchers/anran758/Front-End-Lab.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab/watchers)
[![CRAN/METACRAN](https://img.shields.io/cran/l/devtools.svg?style=flat-square)](https://github.com/anran758/Front-End-Lab)

:art: 将曾经踩过的坑、常用的解决方案还有一些待完成的想法记录下来，完善自己的知识库。

---

## TODO

待完善的 flags

- [ ] Vue
- [ ] React
- [ ] Node.js
- [ ] 数据结构
- [ ] 数据可视化(D2, D6, echart 等)
- [ ] 常用库整理

---

## 导读

当前目录并不是完整的，详细的子目录需要在子页查看。

- [Git](./git)
- [RegExp](./REGEXP)
- [CSS](./css)
  - [common](#common)
    - [值得注意的规则](#%e5%80%bc%e5%be%97%e6%b3%a8%e6%84%8f%e7%9a%84%e8%a7%84%e5%88%99)
    - [Reset、Normalize 的选择](#resetnormalize-%e7%9a%84%e9%80%89%e6%8b%a9)
    - [继承性与通配符](#%e7%bb%a7%e6%89%bf%e6%80%a7%e4%b8%8e%e9%80%9a%e9%85%8d%e7%ac%a6)
  - [常见工具类](#%e5%b8%b8%e8%a7%81%e5%b7%a5%e5%85%b7%e7%b1%bb)
    - [[display] 隐藏元素](#display-%e9%9a%90%e8%97%8f%e5%85%83%e7%b4%a0)
    - [[image] 居中裁剪图片](#image-%e5%b1%85%e4%b8%ad%e8%a3%81%e5%89%aa%e5%9b%be%e7%89%87)
    - [[layout] 居中元素](#layout-%e5%b1%85%e4%b8%ad%e5%85%83%e7%b4%a0)
    - [[text] 文本溢出溢出隐藏](#text-%e6%96%87%e6%9c%ac%e6%ba%a2%e5%87%ba%e6%ba%a2%e5%87%ba%e9%9a%90%e8%97%8f)
    - [图形绘制](#%e5%9b%be%e5%bd%a2%e7%bb%98%e5%88%b6)
  - [功能](#%e5%8a%9f%e8%83%bd)
    - [[nav] 导航渐变色分割线](#nav-%e5%af%bc%e8%88%aa%e6%b8%90%e5%8f%98%e8%89%b2%e5%88%86%e5%89%b2%e7%ba%bf)
    - [[nav] 导航列表下标，悬浮动画显示](#nav-%e5%af%bc%e8%88%aa%e5%88%97%e8%a1%a8%e4%b8%8b%e6%a0%87%e6%82%ac%e6%b5%ae%e5%8a%a8%e7%94%bb%e6%98%be%e7%a4%ba)
    - [[overflow] 查看更多](#overflow-%e6%9f%a5%e7%9c%8b%e6%9b%b4%e5%a4%9a)
    - [[animation] loading](#animation-loading)
    - [[image] 悬浮头像动画](#image-%e6%82%ac%e6%b5%ae%e5%a4%b4%e5%83%8f%e5%8a%a8%e7%94%bb)
  - [布局](#%e5%b8%83%e5%b1%80)
    - [圣杯布局](#%e5%9c%a3%e6%9d%af%e5%b8%83%e5%b1%80)
    - [双飞翼布局](#%e5%8f%8c%e9%a3%9e%e7%bf%bc%e5%b8%83%e5%b1%80)
    - [Flexbox 布局](#flexbox-%e5%b8%83%e5%b1%80)
    - [响应式布局](#%e5%93%8d%e5%ba%94%e5%bc%8f%e5%b8%83%e5%b1%80)
    - [Grid](#grid)
  - [动画与特效](#%e5%8a%a8%e7%94%bb%e4%b8%8e%e7%89%b9%e6%95%88)
- [JavaScrip](./javascript)
  - [代码简洁性](./javascript#%E4%BB%A3%E7%A0%81%E7%AE%80%E6%B4%81%E6%80%A7)
  - [Array](./javascript#array)
  - [Common](./javascript#common)
  - [Data](./javascript#data)
  - [Number](./javascript#number)
  - [String](./javascript#string)
  - [Store](./javascript#store)
  - [Date](./javascript#date)
  - [Vue](./javascript#vue)
- [扩展阅读](./further)
  - [代码风格指南](./further/#代码风格指南)
  - [兼容性处理](./further/#兼容性处理)
  - [test](./further/#test)
  - [扩展知识](./further/#扩展知识)
    - [百科类](./further/#百科类)
    - [工具类](./further/#工具类)
    - [学习资源](./further/#学习资源)
    - [浏览器机制](./further/#浏览器机制)
    - [推荐书单](./further/#推荐书单)

:construction: 待完善

- [HTML](./html)
- [移动端解决方案](./mobile)

## 专栏与博客

- [anran758's blog](https://anran758.github.io/blog/): 业务场景的分析与解决方案、计算机相关的笔记、简单的教程等。
- [专栏 | 初级前端工程师的进阶之路](https://zhuanlan.zhihu.com/c_1147180666474176512): 专门针对初级工程师进阶时常遇到的一些问题专辑。
