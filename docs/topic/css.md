# CSS 篇

## 列举水平垂直居中的实现

[CSS 居中元素实现示例](../css/README.md#layout-%e5%b1%85%e4%b8%ad%e5%85%83%e7%b4%a0)

## 计算样式权重

已知设备 IPhone6, 写出 div 最后的 color、font-size 值:

``` html
<style>
  div { font-size: 1rem; color: blue; }
  .class1 { font-size: .32rem; color: red; }
  #id1 { color: #333; }
  #id1 div { color: #666; }
  .class1 div { color: #999; }
  .class1 .class2 div { color: #aaa; }
</style>

<div class="class1">
    <div id="id1" class="class2">
        <div>文字</div>
    </div>
</div>
```

**答:** 从 DOM 的结构来看共有三层，各层实际被应用的样式为:

- 第一层: `font-size: .32rem`, `color: red`
- 第二层: `font-size: 1rem`, `color: #333`
- 第三层(含文字那层): `font-size: 1rem`, `color: #666`

CSS 选择器优先级:

| 优先级 | 权重   | 类型                                                                                      |
| ------ | ------ | ----------------------------------------------------------------------------------------- |
| 0 级   | 0      | 通配符(`*`)、选择符(`+`、`>`、`~`、`||`、空格等)、逻辑组合伪类(`:not`、`:is()`、`:where`) |
| 1 级   | 1      | 标签选择器，如 `body {...}` 等                                                            |
| 2 级   | 10     | 类选择器(`.list {...}`)、属性选择器(`body] {...}`)、伪类(`:hover`)                        |
| 3 级   | 100    | ID选择器(`#title {...}`)                                                                  |
| 4 级   | 内联级 | `style` 属性内联: `<span style=" color: red;" />`                                         |
| 5 级   | 顶级   | 添加 `!important` 规则： `.title { color: red !important; }`                              |

样式覆盖规则:

- 相同权重的样式，应用最后声明的样式
- 多个选择器则叠加权重，如: `.list > .item {...}` 的权重为 `10 + 0 + 10 = 20`。
- `style` 内联样式默认覆盖外部样式表的样式。除非内联样式设置了普通样式，而外部样式表的样式使用了 `!important` 规则的情况就无法覆盖。但也可以在 `style` 设置的样式属性中加上 `!important` 规则，叠加后权重就更高了(一般不推荐使用 `!important`)
