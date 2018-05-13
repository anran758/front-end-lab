# JavaScript

将js一些有意思的方法或者小技巧记录下来, 检查补漏.

## 操作符

> 一些你不太了解的用法

**三元操作符:**

用三元操作符代替简单`if...else`逻辑，除了简洁之外三元操作符还有一个好处就是可以条件预加载。

``` javascript
const age = 16
let hint = ''

// bad
if (age >= 18) {
  hint = '欢迎打开新世界('
} else {
  hint = '嘿, 未成年不得入内!'
}

// good
let hint = age >= 18 ? '欢迎打开新世界(' : '未成年不得入内!'
```

**逻辑运算符:**

善用 && 和 || 操作符的特性.

``` javascript
  // 在某些场景下, 使用 && 操作符代替 if 能使使你的代码变得更加的整洁
  let isMoving = false
  container.addEventListener('mousedown', () => (ismoving = true))
  container.addEventListener('mouseup', () => (ismoving = false))

  // if 语句
  container.addEventListener('mousemove', () => {
    if (isMoving) handleMove()
  })

  // && 操作符. 前者为 true 的话, 就调用函数
  container.addEventListener('mousemove', () => isMoving && handleMove())
```

**位操作符:**

利用**按位或( | )**向下取整:

``` javascript
var num = 50.1234;
var int = num | 0;

console.log(int);   // 50
```

**按位非(按位取反)**对任一数值`x`进行按位非操作的结果为`-(x + 1)`.

``` javascript
console.log(~1);   // -2
console.log(~0);   // -1
console.log(~-1);  // 0

// 当没有找到内容, 返回 -1 时, 进行按位非会加一取反, 则为 0
// 相当于下面的代码同等的效果
// names.some(name => linkName.indexOf(name) === -1)
names.some(name => ~linkName.indexOf(name))
```

----

## Array

**删除数组中某个元素:**

``` javascript
// 删除数组元素, index 为数组索性, 只删除一个
arr.splice(index, 1);
```

**数组去重:**

``` javascript
let arr = [1,2,3,'1',5,2,4,5,3,4];

/* es6 */
// 利用 Set 没有重复值的特性去重, 再将其转为数组.
let newarr = Array.from(new Set(arr));

// 原理同上, 只不过是通过扩展运算符扩展出来
let newarr = [...new Set(arr)];
```

**中文排序:**

可以使用[String.prototype.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)，它会返回一个数字，配合数组的`sort`方法进行排序。

``` javascript
['张三','李四','王五'].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}))
```

**map和forEach的异同:**

两者都可以逐个遍历数组, 但不同的是, map操作后可以返回一个新数组(意味着可以链式调用), forEach操作完就结束了.

map是数组的方法, 如果是一个Nodelist的话则用不了(虽然可以进行封装扩展). 而forEach数组和Nodelist都内置有这个方法.

----

## Common(通用)

**判断原始类型:**

``` javascript
// 目标是否是对象
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// 使用同样的方法进行测试, 结果如下:
Object.prototype.toString.call([]) === "[object Array]"             // true
Object.prototype.toString.call(null) === "[object Null]"            // true
Object.prototype.toString.call('12') === "[object String]"          // true
Object.prototype.toString.call(NaN) === "[object Number]"           // true. 注意, NaN 是属于数字类型
Object.prototype.toString.call(345) === "[object Number]"           // true
Object.prototype.toString.call(undefined) === "[object Undefined]"  // true
```

----

## Number(数字类处理)

**金额分隔:**

``` javascript
/**
 * 千位分隔符
 *
 * @param {Number} num - 金额
 * @returns 返回格式化后的数字
 */
function numberWithCommas(num) {
  // 正则解释: 匹配到 \B(非单词边界)后, 后面要匹配到 (\d{3})+(?!\d)
  // (\d{3})+ 至少匹配到一次或多次三个数字
  // (?!\d) 同时后面不是数字的话, 就匹配.
  // 注意, 后面的(?=)那一段代码只是判断的规则, 匹配到后只替换掉\B
  // 这是一个很巧妙的方法 ..
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// '12,345'
'12345'.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// '123,456e'
'123456e'.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```

**随机数:**

``` javascript
/**
 * 生成随机数
 * @param {number} min - 随机数的下限
 * @param {number} max - 随机数的上限
 * @returns 返回指定范围内的随机数
 */
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
```

----

## String

Unicode编码`0 ~ 128`是单字节编码序列. 因此可以利用这个特点来确定字符串的长度.

## Other

你知道吗？

1. 很多编译器在压缩代码的时候，喜欢用`!0`和`!1`来代替布尔值`false`和`true`(因为可以减少文件体积

> 一些日常的方法

``` javascript
/**
 * 根据生日的月份和日期，计算星座。
 * @param {String} m - 月份
 * @param {String} d - 日期
 * @desc 返回星座名
 */
function getAstro(m,d){
  return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2);
}
```

### 性能相关

#### DOM

**DOM 的修改与访问:**
事实上，访问`DOM`是具有代价的，首先**DOM**和**ECMAScript**在底层实际上是两个相互独立的接口，不仅是你JS可以调用，其他语言也可以调用 DOM 的接口。因此访问 DOM 就像一座岛的居民想要去另一座岛一样，是有点费劲的（接口问题，天生就慢）。其次我们在调用DOM接口时，它还会导致浏览器重新计算页面的变化(回流与重绘)。

因此，我们应该尽可能的避免操作和访问DOM.

``` javascript
// bad code
for (var count = 0; count < 12000; count ++) {
  document.querySelector('div.point').innerHTML += `Hi, Cycle times： ${count} <br/>`;
}

// good code
let text = '';
for (var count = 0; count < 12000; count ++) {
  text += `Hi, Cycle times： ${count} <br/>`;
}
document.querySelector('div.point').innerHTML = text;
```

将需要访问两次以上的 DOM 保存到一个变量中（这样就不用再跑到另一个岛屿拿东西了）。

**DOM 集合:**

当我们调用`document.getElementsByTagName('a')`会返回一个集合，这个集合是一个类数组的列表，它没有数组的方法。但值得注意的是，这个类数组里的 HTML 是实时的，也就是说它们和文档实际上还是保持有联系，当你需要查询这个类数组的信息时，它还是会重新查询一遍，哪怕只是访问`length`属性也是如此。

``` javascript
// 假设`list`的 length 值 12000，那么就会查询12000次
for (var count = 0; count < list.length; count++) {
  // do something
}

// good code
let length = list.length;
for (var count = 0; count < length; count++) {
  // do something
}
```

#### 循环体

首先JavaScript的循环体主要有四种：`for`、`while`、`do...while`、`for...in`循环。 我们在选择循环体时，应该是基于需求而不是性能。

比如`for...in`每次迭代都需要更多的开销，相比其他三种速度会慢上七倍左右的，但却是最适合遍历对象的一种方式（这里姑且抛开ES6+的新方法）。

采用倒序循环是变成语言中一种通用的性能优化方法，这是因为正序迭代时，对多一次比较（迭代数少于总数吗？是否为true），而倒序则只需要判断是否为0，非0就转为true。循环次数少还好，当循环的次数多了，性能上的差距就体现出来了。

``` javascript
// 正序自增有六步操作
for (let i = 0, length = items.length; i < length; i++) {
  // something
}

// 倒序循环则只有四步操作
for (let i = items.length; i--; ) {
  // something
}
```

----

ES4/5增加了新的数组迭代方式，比如`forEach`，它给每项成员都传一个函数调用，相比之下会比for循环之类的方法显得更便捷。
但是这种东西有利也有弊，反过来看，每个数组调用外部方法其实会带来额外的开销，这也是慢的主要原因。如果注重运行速度的话，那么`forEach`不是一个最好的选择————因为在所有情况下，基于循环的迭代方式会比继续函数的迭代方式要快 8 倍。

#### 条件语句

小于三条判断用`if-else`，大于三条用`switch`。将最可能出现的条件放在前头，能减少循环的次数。