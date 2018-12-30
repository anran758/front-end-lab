# JavaScript

细节和技巧的交汇，本篇笔记主要用于速查。

## 操作符

一些精简代码的实用技巧

### 三元操作符

用三元操作符代替简单`if...else`逻辑，除了简洁之外三元操作符还有一个好处就是可以用作条件预加载。

```javascript
const age = 16;
let hint = '';

// bad
if (age >= 18) {
    hint = '欢迎打开新世界(';
} else {
    hint = '嘿, 未成年不得入内!';
}

// good
let hint = age >= 18 ? '欢迎打开新世界(' : '未成年不得入内!';
```

### 逻辑运算符

利用好 `&&` 和 `||` 特性的能力

```javascript
// 在某些场景下, 使用 && 操作符代替 if 能使使你的代码变得更加的整洁
let isMoving = false;
container.addEventListener('mousedown', () => (ismoving = true));
container.addEventListener('mouseup', () => (ismoving = false));

// if 语句
container.addEventListener('mousemove', () => {
    if (isMoving) handleMove();
});

// && 操作符. 前者为 true 的话, 就调用函数
container.addEventListener('mousemove', () => isMoving && handleMove());

// || 操作符则相反，只要前面的值为true，就不继续往后走了
```

### 按位非(按位取反)

对任一数值`x`进行按位非操作的结果为`-(x + 1)`.

```javascript
console.log(~1); // -2
console.log(~0); // -1
console.log(~-1); // 0

// 当没有找到内容, 方法返回 -1 时, 进行按位非会加一取反, 则为 0
// 这个方法是利用隐式转换，在判断中会将 0 隐式转换为false

// 相当于下面的代码同等的效果
// names.some(name => linkName.indexOf(name) === -1)
names.some(name => ~linkName.indexOf(name));
```

### 位操作符

利用按位或 `|` 向下取整:

```javascript
var num = 50.1234;
var int = num | 0;

console.log(int); // 50
```

除此之外，还可以使用`~~`截除小数，但它只适用于`32`位数字。<br>
虽说前者会更简单，但有可能会遇到操作符优先级的问题。因此使用时一定要了解它的规则，同时确保代码的可读性。

```javascript
// 进行两次反转字位，然后出于10
console.log(~~50.1234 / 10); // 5

console.log(50.1234 | (0 / 10)); // 50
console.log((50.1234 | 0) / 10); // 5
```

---

## Array

### 删除数组中指定元素

```javascript
// 删除数组元素, index 为数组索性, 只删除一个
arr.splice(index, 1);
```

### 数组去重

```javascript
let arr = [1, 2, 3, '1', 5, 2, 4, 5, 3, 4];

/* es6 */
// 利用 Set 没有重复值的特性去重, 再将其转为数组.
let newarr = Array.from(new Set(arr));

// 原理同上, 只不过是通过扩展运算符扩展出来
let newarr = [...new Set(arr)];
```

### 中文排序

**[IE11+]** [String.prototype.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)，会返回一个数字，配合数组的`sort`方法进行排序。

```javascript
['张三', '李四', '王五'].sort((a, b) =>
    a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' })
);
```

### 数组扁平化

二维数组扁平化

``` javascript
const arr = [[1, 2, 3], [4, 5], [7, 8, 9], 10, null, undefined, {}]
const newArr = arr.reduce((p, n) => Array.isArray(n) ? p.concat(n) : (p.push(n), p), [])

console.log(newArr);    // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

**[ES6+]** 多维数组扁平化

``` javascript
function flatten(arr) {
    const newArr = arr.map(item => Array.isArray(item) ? flatten(item) : item);
    return [].concat(...newArr);
}

const arr = [[1, 2, 3], [4, 5], [7, [8, [9]]], 10, null, undefined, {}]
const newArr = flatten(arr);

console.log(newArr);  // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

### 其他

`map`和`forEach`的区别:

| 方法      | 相同之处         | 不同之处                                                                                                                  |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `map`     | 同样用于遍历数组 | `map`对每项调用的函数后会取得函数的返回值，并推入新的数组中去(意味着可以链式调用)。<br>但是这个方法只有数组才能使用。     |
| `forEach` | 同样用于遍历数组 | `forEach`单纯对数组中每一项调用回调函数，不作其他操作。<br>该方法并不是只有数组能用，部分类数组(如NodeList)也有这个方法。 |

> 你知道吗？

1. 数组实际上是一个类列表对象，这意味着我们可以在数组上添加属性，虽然一般我们很少会这样做

---

## Common(通用)

**判断原始类型:**

```javascript
// 目标是否是对象
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

// 使用同样的方法进行测试, 结果如下:
Object.prototype.toString.call([]) === '[object Array]'; // true
Object.prototype.toString.call(null) === '[object Null]'; // true
Object.prototype.toString.call('12') === '[object String]'; // true
Object.prototype.toString.call(NaN) === '[object Number]'; // true. 注意, NaN 是属于数字类型
Object.prototype.toString.call(345) === '[object Number]'; // true
Object.prototype.toString.call(undefined) === '[object Undefined]'; // true
```

---

## Data (数据类)

使用`localStorage`的时候需要对数据进行一些处理：

- 存入数据时对目标值转为合法的 JSON 值，`localStorage.setItem('name', JSON.stringify(name))`
- 读取数据后对 JSON 值进行解析取得目标值，`JSON.parse(localStorage.getItem('name'))`

## Number(数字类处理)

> 你知道吗？

1. 我们可以使用 E 指数形式来表示较大的数字，如`1e4 === 10000`为`true`.
1. 在`ES5`之前，`parseInt`在没有传第二个参数的时候，会根据传入字符串的第一个字符来判断使用什么方式进行解析，这可能会导致预期之外的效果。

```javascript
parseInt('08'); // 有些旧版本的浏览器可能会解析为 0， 因为浏览器会当做八进制进行解析。

// 因此我们用这个方法的时候，一定要显示加上第二个参数，而不要让浏览器去猜
parseInt('08', 10); // 8
```

### 金额分隔

```javascript
/**
 * 千位分隔符
 *
 * @param {Number} num - 金额
 * @returns 返回格式化后的数字
 */
function numberWithCommas(n) {
    // 正则解释: 匹配到 \B(非单词边界)后, 后面要匹配到 (\d{3})+(?!\d)
    // (\d{3})+ 至少匹配到一次或多次三个数字
    // (?!\d) 同时后面不是数字的话, 就匹配.
    // 注意, 后面的(?=)那一段代码只是判断的规则, 匹配到后只替换掉\B
    // 而\B 元字符匹配的是非单词边界

    let num = n.toString().split('.');
    num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num.join('.');
}

console.log(numberWithCommas(12345678912.123)); // "12,345,678,912.1234"
```

不需要兼容 IE11，则可以使用`toLocaleString`

```javascript
(12345678.912).toLocaleString(); // "12,345,678.912"
```

### 随机数

```javascript
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

### 字符串转数字

```javascript
['1.1', '4566', '3e300'].map(Number); // [1.1, 4566, 3e+300]
['1.1', '456a', '3e300'].map(Number); // [1.1, NaN, 3e+300]
```

---

## String

### 计算字符串长度

`Unicode`编码`0 ~ 128`是单字节编码序列。因此可以利用这个特点来确定字符串的长度(单双字节实际占位)。

```javascript
String.prototype.strLen = function() {
    var len = 0;
    for (var i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0) len += 2;
        else len++;
    }
    return len;
};

//判断某个字符是否是汉字
String.prototype.isCHS = function(i) {
    return this.charCodeAt(i) > 255 || this.charCodeAt(i) < 0;
};
```

### 截取字符串

```javascript
// 将字符串拆成字符，并存到数组中
String.prototype.strToChars = function() {
    var chars = [];
    for (var i = 0; i < this.length; i++) {
        chars[i] = [this.substr(i, 1), this.isCHS(i)];
    }
    String.prototype.charsArray = chars;
    return chars;
};

// 截取字符串（从start字节到end字节）
String.prototype.subCHString = function(start, end) {
    var len = 0;
    var str = '';
    this.strToChars();
    for (var i = 0; i < this.length; i++) {
        if (this.charsArray[i][1]) len += 2;
        else len++;
        if (end < len) return str;
        else if (start < len) str += this.charsArray[i][0];
    }
    return str;
};

// 截取字符串（从start字节截取length个字节）
String.prototype.subCHStr = function(start, length) {
    return this.subCHString(start, start + length);
};
```

## Date

- 设置某天的时间区间，区间在`00:00:00 - 23:59:59`。

```javascript
function setFullDate(day) {
    let start = new Date().setHours(0, 0, 0, 0);
    let end = new Date().setHours(23, 59, 59, 999);
    let base = 24 * 60 * 60 * 1000;

    return [start - day * base, end];
}
```

## Other

> 一些日常的方法

```javascript
/**
 * 根据生日的月份和日期，计算星座。
 * @param {String} m - 月份
 * @param {String} d - 日期
 * @desc 返回星座名
 */
function getAstro(m, d) {
    return '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
        m * 2 - (d < '102223444433'.charAt(m - 1) - -19) * 2,
        2
    );
}
```

> 你知道吗？

1. 很多编译器在压缩代码的时候，喜欢用`!0`和`!1`来代替布尔值`false`和`true`。因为可以有效减少文件体积, 但会破坏可读性

<!-- ## Promise

为了避免丢失被忽略和抛弃的 Promise 错误，最佳实践就是最后总以一个`catch()`结束 -->

## Vue

> 一些常见疑难杂症

1. 如果给子组件设置`v-if`的话，那么 vue 会在切换过程中将条件块内的事件监听器和子组件适当地被销毁和重建。也就是说就算里面用了`watch`也会失效。
1. 如果组件不是通过`new Vue`这种形式生成出来的话，那么`data`就必须要使用`function`的形式返回一个对象，而不是直接使用对象。不然的话`vue`会提示报错的。

    ```javascript
    // 这种会报错
    export default {
      template: '<div>{{text}}</div>',
      data: {
        text: 'hello'
      }
    }

    // 下面两者都不会
    new Vue({
      el: '#root',
      template: '<div>{{text}}</div>',
      data: {
        text: '123'
      }
    })

    export default {
      template: '<div>{{text}}</div>',
      data () {
        return {
          text: 'hello'
        }
      }
    }
    ```

1. 在父组件的`created`钩子上进行赋值操作的话，数值的变化是传不到子组件的`watch`里的。
1. 实际上，`props`的值是可以直接修改的。但是一般情况下我们并不推荐去修改`prop`里的内容，因为这会直接修改到父级的`data`。会引起组件之间的逻辑的混乱，未来 debug 也变得麻烦了起来。
   通常我们会通过`this.$emit('postHandle', data)`这种形式去激活，通知父级更改。
1. 组件的通信上，`props`里可以使用驼峰性命名参数，但传入的时候需要转变为**连字号(-)**。
1. 在使用`vue-router`时，将`mode`设置为`history`模式的话，没有后端进行做相应的匹配会报 404。
   但如果在开发模式下，使用`webpack-dev-server`作为本地服务器的话，可以让`webpack`设置`devServer`下的`historyApiFallback`做路径的映射，这样就可以用干净简洁的`history`模式啦~

## 小程序

微信小程序开发的提示：

- 一般会在`onLoad`处理请求接口，因为它是最触发的生命周期钩子。
- 在小程序中使用`import`语法时，要使用相对路径，不能使用绝对路径(如访问根目录 / )。
- 在组件上，小程序的`this.triggerEvent`相当于`vue`的`this.$emit`，在很多语法上都和`React`、`Vue`有共同之处。
- 只有跟`WXML`有绑定的变量才需要放在`data`中，其余的放在`this`里。这样能减少渲染的压力。
    ``` javascript
        Page({
            /**
             * 页面的初始数据
             */
            data: {
                // 需要跟 wxml 模板绑定的数据
                gifts: {},
            },

            // timer 只是用于储存定时器，不需要在页面中渲染
            _timer: null,

            /**
             * 页面的方法列表
             */
            methods: {/* ... */}
        })
    ```

## 性能相关

性能相关的内容以及有很多前辈有了丰富的经验，这里可以推荐几本关于性能的书，系统全面的了解一下会比单独拿片段出来讲会好很多。

- 高性能javascript
- 高性能网站建设进阶指南
- 高性能网站建设指南
