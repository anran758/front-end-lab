# JavaScript

将js一些有意思的方法或者小技巧记录下来, 检查补漏.

## 操作符

> 一些你不太了解的用法

**三目操作符:**

用三目操作符代替简单`if...else`逻辑.

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