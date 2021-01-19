# css 涉及理论相关笔记

一些值得注意的 rule 或 defect:

1. css 选择符是从右至左进行匹配的，为了浏览器在匹配 rule 时消耗过的时间应避免嵌套太高层级，**建议最高不超过 3 层**。
2. 了解哪些属性可以通过继承而来，避免重复指定规则。
3. 滚动容器避免使用 `padding-bottom` 进行留白，IOS 低版本会直接忽略掉。除此之外 `IE`, 低版本的 `firefox` 据说也有这种情况。

**相关资料:**

- [normalize 与 reset 的取舍](https://anran758.github.io/blog/2017/10/15/%E6%B5%85%E8%B0%88Normalize%E4%B8%8Ereset/)

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

### 父子 margin 重叠的其他条件

**margin-top 重叠**：

1. 父元素非块状格式化上下文元素
2. 父元素没有 `border-top` 设置
3. 父元素没有 `padding-top` 值
4. 父元素和第一个子元素之间没有 `inline` 元素分隔

**margin-bottom 重叠**:

1. 父元素非块状格式化上下文元素
2. 父元素没有 `border-bottom` 设置
3. 父元素没有 `padding-bottom` 值
4. 父元素和最后一个子元素之间没有 `inline` 元素分隔
5. 父元素没有 `height`、`min-height`、`max-height` 限制

### 空 block 元素重叠

1. 元素没有 `border`/`padding`/`inline` 元素;
2. 没有设置 `height`/`min-height`;

### margin 重叠计算规则

1. 正正取大值
2. 正负值相加
3. 正负最负值

### 清除 margin 重叠

1. 加入 css 属性 `overflow: hidden;`
2. 加入边框 (`border`) 属性;
3. 加入 `padding-top`
4. 加入内联元素，如 `&nbsp;`
5. 限制高度 `height`

### 善用 margin 重叠

``` css
.list {
  margin-top: 12px;
  margin-bottom: 12px;
}
```

写垂直布局的时候，利用 margin 重叠 (外边距塌陷) 的特性，在容器上下加上 margin 会更具有稳定性，哪怕移除元素或者元素没加载出来都不会破坏布局。
