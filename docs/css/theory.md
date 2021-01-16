# css 涉及理论相关笔记

一些值得注意的 rule 或 defect:

1. css 选择符是从右至左进行匹配的，为了浏览器在匹配 rule 时消耗过的时间应避免嵌套太高层级，**建议最高不超过 3 层**。
2. 了解哪些属性可以通过继承而来，避免重复指定规则。
3. 滚动容器避免使用 `padding-bottom` 进行留白，IOS 低版本会直接忽略掉。除此之外 `IE`, 低版本的 `firefox` 据说也有这种情况。

## margin

### marin 百分比计算

普通元素的 `marin` 的百分比是根据父元素的宽度来计算的。例如:

``` css
.parents {
  width: 600px;
}

img {
  margin: 10%;
}
```

那么子元素的 `margin` 计算后值为: `600px * 10% = 60px`。

绝对定位计算方式是相同的，只不过它不是相对父元素，而是相对于第一个定位元素 (`relative/absolute/fixed`) 的宽度计算的。

### margin 重叠通常特性

1. block 水平元素(不包括 `float` 和 `absolute` 元素)
2. 不考虑 `writing-mode`，只发生在垂直方向 (`margin-top` / `margin-bottom`)

### margin 重叠的场景

1. 相邻的兄弟元素
2. 父级和第一个 / 最后一个子元素
3. 空的 block 元素
