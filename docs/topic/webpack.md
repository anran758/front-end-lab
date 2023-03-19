# Webpack 篇

**目录**

[[toc]]

## 为什么要使用 webpack/bundle工具？

1. 支持模块化开发
2. 使代码体积更小. 用户需要加载的资源更少，访问速度自然就更快。(关键字: tree-shaking、压缩、合并)
3. 将高级语言编译为浏览器适用的版本。比如模块化开发、ts to js、es6+ 向下兼容、css 预处理器编译。
4. 兼容性处理。(关键字: ployfill、postcss 等)

## module、chunk、bundle 分别是什么？

- module: 源码文件，一切资源皆模块
- chunk: 多个模块的结合体
- bundle: 最终输出的文件

## loader 和 plugin 有什么区别？有自己实现过吗？

loader 是模块转换器，使 webpack 可以识别除 js 外的资源。
plugin 是扩展包，内部集成了某个主题的逻辑。例如 `html-webpack-plugin` 主要处理 `HTML` 相关的插件。

## webpack 实现懒加载

Webpack 实现懒加载的方式主要是通过代码分割（code splitting）来实现的。Webpack 会根据代码的依赖关系自动进行代码分割，并将不同的代码块打包到不同的文件中，从而实现按需加载。

在代码层面上可以使用 `import()` 动态引用文件实现同步代码分隔；还可以通过配置层面上，修改 `optimization.splitChunks` 来实现异步代码分割。这样可以将代码分割成多个文件，并在需要的时候才去加载这些文件。

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

Tree-Shaking 可以通过静态分析代码来确定哪些模块中的代码没有被使用到，并将这些未使用的代码从最终的打包文件中剔除，从而减少文件体积。这对于提高应用程序的性能和减少加载时间非常有帮助。

在 Webpack 中，Tree-Shaking 主要通过使用 ES6 模块化语法来实现。Webpack 可以通过对代码进行静态分析，确定哪些模块中的代码没有被使用到，并将这些未使用的代码从最终的打包文件中剔除。为了确保 Tree-Shaking 生效，开发者需要在 Webpack 配置中启用 ES6 模块化语法，以及使用一些支持 Tree-Shaking 的工具和库。

简言之：Tree-Shaking 是一种通过静态分析代码，只打包引用到的模块，从而减少最终打包文件体积的技术，可以显著提高应用程序的性能和减少加载时间。

## rollup 和 webpack 有什么区别？

Rollup 主要专注打包，打包后 size 会非常小。webpack 功能多而杂但过于复杂。

## ESModule 和 commonJS 有什么区别

- ESModule: 静态引入，编译时引入。
- commonJS: 动态引入，运行时引入。

## 为什么要搭建脚手架，脚手架有什么用？

1. 统一开发环境
2. 统一构建流程和产出标准
3. 使用 eslint 之类的工具约束团队成员开发

## 开启多线程有什么影响

- 项目较大: 打包较慢，开启多进程能提高速度
- 项目较小: 打包很快，开启多进程会降低速度(进程开销)

多线程应根据实际项目的情况而使用。
