# JavaScript

将 js 一些有意思的方法或者小技巧记录下来, 检查补漏.

## 操作符

> 一些你可能不太了解的小技巧

**三元操作符:**

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

**逻辑运算符:**

发挥`&&`和`||`特性的能力

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
// 在 es3/5 中，我们使用
```

**按位非(按位取反):** 对任一数值`x`进行按位非操作的结果为`-(x + 1)`.

```javascript
console.log(~1); // -2
console.log(~0); // -1
console.log(~-1); // 0

// 当没有找到内容, 返回 -1 时, 进行按位非会加一取反, 则为 0
// 相当于下面的代码同等的效果
// names.some(name => linkName.indexOf(name) === -1)
names.some(name => ~linkName.indexOf(name));
```

\*\*位操作符:

** 利用 **按位或( | )\*\* 向下取整:

```javascript
var num = 50.1234;
var int = num | 0;

console.log(int); // 50
```

除此之外，还可以使用`~~`截除小数，但它只适用于 32 位数字。虽说前者会更简单，但有可能会遇到操作符优先级的问题。因此我们使用时一定要了解它的规则，还要确保代码的可读性。

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

可以使用[String.prototype.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)，它会返回一个数字，配合数组的`sort`方法进行排序。

```javascript
['张三', '李四', '王五'].sort((a, b) =>
    a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' })
);
```

### 其他

**map 和 forEach 的异同:**

两者都可以逐个遍历数组, 但不同的是, map 操作后可以返回一个新数组(意味着可以链式调用), forEach 操作完就结束了.

map 是数组的方法, 如果是一个 Nodelist 的话则用不了(虽然可以进行封装扩展). 而 forEach 数组和 Nodelist 都内置有这个方法.

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

-   存入数据时对目标值转为合法的 JSON 值，`localStorage.setItem('name', JSON.stringify(name))`
-   读取数据后对 JSON 值进行解析取得目标值，`JSON.parse(localStorage.getItem('name'))`

## Number(数字类处理)

> 你知道吗？

1.  我们可以使用 E 指数形式来表示较大的数字，如`1e4 === 10000`为`true`.
2.  在 ES5 之前，`parseInt`在没有传第二个参数的时候，会根据传入字符串的第一个字符来判断使用什么方式进行解析，这可能会导致预期之外的效果。

```javascript
parseInt('08'); // 有些旧版本的浏览器可能会解析为 0， 因为浏览器会当做八进制进行解析。

// 因此我们用这个方法的时候，一定要显示加上第二个参数，而不要让浏览器去猜
parseInt('08', 10); // 8
```

**金额分隔:**

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

**随机数:**

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

字符串转数字：

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

-   设置某天的时间区间，区间在`00:00:00 - 23:59:59`。

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

1. 尽量使用字面直接量(常量形式)来构建基础类型，通常这种方式的效率会更高一些。如果使用原生构造函数的话可能会有意想不到的”惊喜“。
2. 很多编译器在压缩代码的时候，喜欢用`!0`和`!1`来代替布尔值`false`和`true`(因为可以有效减少文件体积

## Promise

为了避免丢失被忽略和抛弃的 Promise 错误，最佳实践就是最后总以一个`catch()`结束

### 性能相关

#### DOM

**DOM 的修改与访问:**
事实上，访问`DOM`是具有代价的，首先**DOM**和**ECMAScript**在底层实际上是两个相互独立的接口，不仅是你 JS 可以调用，其他语言也可以调用 DOM 的接口。因此访问 DOM 就像一座岛的居民想要去另一座岛一样，是有点费劲的（接口问题，天生就慢）。其次我们在调用 DOM 接口时，它还会导致浏览器重新计算页面的变化(回流与重绘)。

因此，我们应该尽可能的避免操作和访问 DOM.

```javascript
// bad code
for (var count = 0; count < 12000; count++) {
    document.querySelector(
        'div.point'
    ).innerHTML += `Hi, Cycle times： ${count} <br/>`;
}

// good code
let text = '';
for (var count = 0; count < 12000; count++) {
    text += `Hi, Cycle times： ${count} <br/>`;
}
document.querySelector('div.point').innerHTML = text;
```

将需要访问两次以上的 DOM 保存到一个变量中（这样就不用再跑到另一个岛屿拿东西了）。

**DOM 集合:**

当我们调用`document.getElementsByTagName('a')`会返回一个集合，这个集合是一个类数组的列表，它没有数组的方法。但值得注意的是，这个类数组里的 HTML 是实时的，也就是说它们和文档实际上还是保持有联系，当你需要查询这个类数组的信息时，它还是会重新查询一遍，哪怕只是访问`length`属性也是如此。

```javascript
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

首先 JavaScript 的循环体主要有四种：`for`、`while`、`do...while`、`for...in`循环。 我们在选择循环体时，应该是基于需求而不是性能。

比如`for...in`每次迭代都需要更多的开销，相比其他三种速度会慢上七倍左右的，但却是最适合遍历对象的一种方式（这里姑且抛开 ES6+的新方法）。

采用倒序循环是变成语言中一种通用的性能优化方法，这是因为正序迭代时，对多一次比较（迭代数少于总数吗？是否为 true），而倒序则只需要判断是否为 0，非 0 就转为 true。循环次数少还好，当循环的次数多了，性能上的差距就体现出来了。

```javascript
// 正序自增有六步操作
for (let i = 0, length = items.length; i < length; i++) {
    // something
}

// 倒序循环则只有四步操作
for (let i = items.length; i--; ) {
    // something
}
```

---

ES4/5 增加了  新的数组迭代方式，比如`forEach`，它给每项成员都传一个函数调用，相比之下会比 for 循环之类的方法显得更便捷。
但是这种东西有利也有弊，反过来看，每个数组调用外部方法其实会带来额外的开销，这也是慢的主要原因。如果注重运行速度的话，那么`forEach`不是一个最好的选择————因为在所有情况下，基于循环的迭代方式会比继续函数的迭代方式要快 8 倍。

#### 条件语句

小于三条判断用`if-else`，大于三条用`switch`。将最可能出现的条件放在前头，能减少循环的次数。

---

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
1. 组件的通信上，`props`可以使用驼峰性命名，但传入的时候需要转变为**连字号(-)**。
1. 在使用`vue-router`时，将`mode`设置为`history`模式的话，没有后端进行做相应的匹配会报 404。
   但如果在开发模式下，使用`webpack-dev-server`作为本地服务器的话，可以让`webpack`设置`devServer`下的`historyApiFallback`做路径的映射，这样就可以用干净简洁的`history`模式啦~

## 小程序

- 一般会在`onLoad`处理请求接口，因为它是最触发的生命周期钩子。
- 在小程序中使用`import`语法时，要使用相对路径，不能使用绝对路径(如访问根目录 / )。
- 在组件上，小程序的`this.triggerEvent`相当于`vue`的`this.$emit`，在很多语法上都和`React`、`Vue`有共同之处。
