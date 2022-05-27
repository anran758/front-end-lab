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

**bizcharts**

`Chart` 图表使用 `type: time`，数据量大了后刻度会不准，解决方法是将 `type` 替换为 `timecat`，将日期转换为有序的分类数据。
