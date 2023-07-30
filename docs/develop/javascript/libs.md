# 第三方库

实际工作中总会遇到很多形形色色的业务需求，这篇针对特定业务需求所需推荐的库。

| name                                                   | 用途                                       |
| ------------------------------------------------------ | ------------------------------------------ |
| moment                                                 | 专门处理 date 的操作                       |
| lodash                                                 | 主要用于数据处理相关的 js 工具库           |
| node-qrcode                                            | 用以生成二维码                             |
| xlsx                                                   | excel 之类的表格处理，如导入导出           |
| classnames                                             | 类名管理工具                               |
| [decimal.js](https://www.npmjs.com/package/decimal.js) | JavaScript 的任意精度的十进制类型。        |
| [numeral](https://www.npmjs.com/package/numeral)       | 一个用于格式化和处理数字的 javascript 库。 |

[runkit](https://npm.runkit.com/) 可以在浏览器在线运行 npm 包，同时还提供该包的说明文档。这样可以使我们在测试 package 时确认 package 的功能是否符合我们的预期，减少调研时间。

可以直接在 [https://npm.runkit.com/](https://npm.runkit.com/) 上搜索 npm package, 也可以直接通过 url 路径进入指定的包中: `https://npm.runkit.com/<pacakge_name>`

## bizcharts

`Chart` 图表使用 `type: time`，数据量大了后刻度会不准，解决方法是将 `type` 替换为 `timecat`，将日期转换为有序的分类数据。

## webpack

> 记载一些未整理的零散笔记

1. cross-env 跨平台坏境变量
2. host 设置为0.0.0.0 的好处是，我们可以通过localhost，127.0.0.1来进行访问。同时还可以通过内网IP来进行访问(也就是说我们可以通过我们的手机进行访问)

### 占位符

在 webpack 中经常有一些占位符可以供我们选择, 以下常见的占位符可做参考:

> 部分插件文档上的描述也提供占位符作为文件名来生成文件，这取决于具体插件的实现

| 模板          | 描述                             |
| ------------- | -------------------------------- |
| [hash]        | 模块标识符的哈希                 |
| [contenthash] | 文件内容的哈希值，每种资产都不同 |
| [chunkhash]   | 块内容的哈希                     |
| [name]        | 模块名称                         |
| [id]          | 模块标识符                       |
| [query]       | 模块查询，即? 文件名后面的字符串 |
| [function]    | 该函数可以返回文件名[字符串]     |
| [ext]         | 文件后缀                         |

### Plugins

1. html-webpack-plugin: 生成 HTML
2. extract-text-webpack-plugin: 将 CSS 抽出来
3. webpack-merge: 扩展 webpack 配置文件，合理的合并webpack的配置

#### Babel

1. babel-loader
2. babel-core (babel编译核心)
3. babel-runtime 避免babel编译后输入重复的内容
   1. 同时需要在根目录下新建`.babelrc`
   2. 如果需要让项目分成生产模式和开发模式的话，还需要安装：
      1. [babel-preset-env](https://babeljs.cn/docs/plugins/preset-env/) 根据你支持的环境自动决定适合你的 Babel 插件的 Babel preset

如果是 vue 项目的话，此时还需要安装:

1. babel-plugin-transform-vue-jsx 扩展合并帮助程序作为模块导入以避免重复, 专门处理vue 的 jsx 文件
2. babel-plugin-syntax-jsx
3. babel-helper-vue-jsx-merge-props
4. vue-style-load: 热更新样式

#### eslint

- eslint
- eslint-config-standard
- eslint-plugin-standard
- eslint-plugin-promise
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-html (解析.vue 文件下的 script 标签)
- eslint-loader
- babel-eslint (依赖 babel)
