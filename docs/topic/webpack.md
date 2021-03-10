# webpack

**目录**

[[toc]]

## 为什么要使用 webpack/bundle工具？

1. 使代码体积更小. 用户需要加载的资源更少，访问速度自然就更快。(关键字: tree-shaking、压缩、合并)
2. 将高级语言编译为浏览器适用的版本。比如模块化开发、ts to js、es6+ 向下兼容、css 预处理器编译。
3. 兼容性处理。(关键字: ployfill、postcss 等)

## module、chunk、bundle 分别是什么？

- module: 源码文件，一切资源皆模块
- chunk: 多个模块的结合体
- bundle: 最终输出的文件

## loader 和 plugin 有什么区别？有自己实现过吗？

loader 是模块转换器，使 webpack 可以识别除 js 外的资源。
plugin 是扩展包，内部集成了某个主题的逻辑。例如 `html-webpack-plugin` 主要处理 `HTML` 相关的插件。

## 除了做基础脚手架外，还用来做过什么?

TODO: 待补充...

## webpack 实现懒加载

TODO: 待补充...

## webpack 优化项

细节优化:

- 优化 loader 的配置
- 使用 IgnorePlugin，忽略第三方包指定目录，让这些指定目录不要被打包进去
- 使用 noParse
- HappyPack
- ParalleUgllifyPlugin

资源优化:

- mode 使用 production 模式，该模式会自动开启代码压缩。第三方库会移除开发调试代码，自动使用 tree-shaking(减少代码体积).
- 小图片转为 base64
- bundle 加 hash 进行缓存
- 使用 cache, 提取公共代码
- 打包后的资源上 CDN

其他：

- 自动刷新
- 懒加载
- Scope Hosting

## babel-runtime 和 babel-polyfill

babel 的作用就是使新版本的 ES 语法可以兼容到低版本浏览器中使用。babel 只解析语法，如果有新的功能出现，则需要引入 `polyfill` 进行打补丁。

babel-polyfill 由于本身体积过大，最佳实践是按需引入所需的 `polyfill`。

## 什么是 Tree-Shaking

TODO: 待补充...

## rollup 和 webpack 有什么区别？

Rollup 主要专注打包，打包后 size 会非常小。webpack 功能多而杂但过于复杂。

## ESModule 和 commonJS 有什么区别

- ESModule: 静态引入，编译时引入。
- commonJS: 动态引入，运行时引入。

## 为什么要搭建脚手架，脚手架有什么用？

1. 统一开发环境
2. 统一构建流程和产出标准
3. 使用 eslint 之类的工具约束团队成员开发
