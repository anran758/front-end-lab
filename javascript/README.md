# JavaScript

细节和技巧的交汇，本篇笔记主要用于速查。

- [JavaScript](#javascript)
  - [操作符的实用技巧](#%E6%93%8D%E4%BD%9C%E7%AC%A6%E7%9A%84%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7)
    - [三元操作符](#%E4%B8%89%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6)
    - [逻辑运算符](#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)
    - [按位非(按位取反)](#%E6%8C%89%E4%BD%8D%E9%9D%9E%E6%8C%89%E4%BD%8D%E5%8F%96%E5%8F%8D)
    - [位操作符](#%E4%BD%8D%E6%93%8D%E4%BD%9C%E7%AC%A6)
  - [Array](#array)
    - [删除数组中指定元素](#%E5%88%A0%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E6%8C%87%E5%AE%9A%E5%85%83%E7%B4%A0)
    - [数组去重](#%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D)
    - [中文排序](#%E4%B8%AD%E6%96%87%E6%8E%92%E5%BA%8F)
    - [数组扁平化](#%E6%95%B0%E7%BB%84%E6%89%81%E5%B9%B3%E5%8C%96)
    - [其他细节](#%E5%85%B6%E4%BB%96%E7%BB%86%E8%8A%82)
  - [Common(通用)](#common%E9%80%9A%E7%94%A8)
  - [Data (数据类)](#data-%E6%95%B0%E6%8D%AE%E7%B1%BB)
  - [Number(数字类处理)](#number%E6%95%B0%E5%AD%97%E7%B1%BB%E5%A4%84%E7%90%86)
    - [科学计数法 E](#%E7%A7%91%E5%AD%A6%E8%AE%A1%E6%95%B0%E6%B3%95-e)
    - [parseInt](#parseint)
    - [金额分隔](#%E9%87%91%E9%A2%9D%E5%88%86%E9%9A%94)
    - [生成随机数](#%E7%94%9F%E6%88%90%E9%9A%8F%E6%9C%BA%E6%95%B0)
    - [字符串转数字](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%95%B0%E5%AD%97)
  - [String](#string)
    - [计算字符串长度](#%E8%AE%A1%E7%AE%97%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6)
    - [截取字符串](#%E6%88%AA%E5%8F%96%E5%AD%97%E7%AC%A6%E4%B8%B2)
  - [Store](#store)
    - [cookie](#cookie)
  - [Date](#date)
  - [Other](#other)
  - [Vue](#vue)
  - [小程序](#%E5%B0%8F%E7%A8%8B%E5%BA%8F)
  - [性能相关](#%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3)

## 操作符的实用技巧

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

### 其他细节

`map`和`forEach`的区别:

| 方法      | 相同之处         | 不同之处                                                                                                                  |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `map`     | 同样用于遍历数组 | `map`对每项调用的函数后会取得函数的返回值，并推入新的数组中去(意味着可以链式调用)。<br>但是这个方法只有数组才能使用。     |
| `forEach` | 同样用于遍历数组 | `forEach`单纯对数组中每一项调用回调函数，不作其他操作。<br>该方法并不是只有数组能用，部分类数组(如NodeList)也有这个方法。 |

> 你知道吗？

1. 数组实际上是一个类列表对象，这意味着我们可以在数组上添加属性，虽然一般不常这样做

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

---

## Number(数字类处理)

### 科学计数法 E

可以使用`科学计数法(E)`来表示较大的数字，如`1e4`的效果等同于`10000`。

### parseInt

在`ES5`之前，`parseInt`在没有传第二个参数的时候，会根据传入字符串的第一个字符来判断使用什么方式进行解析，这个历史遗留的问题可能会导致预期之外的效果。

```javascript
parseInt('08'); // 有些旧版本的浏览器可能会解析为 0， 因为浏览器会当做八进制进行解析。

// 因此我们用这个方法的时候，一定要显示加上第二个参数，而不要让浏览器去猜
parseInt('08', 10); // 8
```

还有一个常见的问题就是，不能直接将`parseInt`作为数组`map`的回调函数，因为两者所传(接受)的形参的用途不一:

``` javascript
[1,2,3].map(parseInt);       // [1, NaN, NaN]
```

[parseInt(string, radix)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 函数解析一个字符串参数，并返回一个指定基数的整数;

上面的例子就是因为`map`函数传入的第二个参数为数组的索引(`index`)。`parseInt`在处理到`2`时，传入了索引`2`作为基数，然而二进制并没有`2`这个数字，处理后自然会返回`NaN`。

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

### 生成随机数

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

---

## Store

### cookie

> 浏览器`Cookie`是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

`cookie`用途：

- 会话管理(用户状态信息等)
- 个性化设置(根据`cookie`信息为用户提供更进一步的功能)
- 浏览器行为跟踪(追踪用户行为、统计等)

创建一个新的`Cookie`的语法格式是:

``` javascript
document.cookie = newCookie;
```

当对`document.cookie`进行赋值操作时，该属性会调用它底层所绑定的函数来设置`cookie`。其中`newCookie`是一个键值对的字符串，其格式如下:

``` javascript
// 语法格式
document.cookie = key=value[
    ;path=path |
    ;domain=domain |
    ;max-age=max-age-in-second |
    ;expires=date-in-GMTString-format |
    ;secure |
    ;samesite
]

// 示例
document.cookie = 'nickname=anran758;path=/;max-age=31536000'
```

`key/value`表示`cookie`的键与值，其后为`cookie`的属性，简要概括一下：

| cookie 属性 | 作用                                                             | 兼容性    |
| :---------- | :--------------------------------------------------------------- | :-------- |
| path        | 指定哪些路径可以接受`cookie`, 不指定则为默认为当前文档的主机     |
| domain      | 指定哪些主机可以接受`Cookie`, 不指定则为当前页面的根目录`/`      |
| max-age     | 指定从现在开始`Cookie`可以存在的**秒数**, 超时该`cookie`就会过期 |
| expires     | 显式指定`cookie`具体的到期时间                                   |
| secure      | `Cookie`只能通过安全协议传输为`https`                            | Chrome52+ |
| samesite    | 阻止浏览器发送此`cookie`以及跨站点请求                           | Chrome52+ |

服务端可以通过`HTTP`头部`set-cookie`来给浏览器设置`cookie`, 格式如上所示。

如果同时指定了`Expires`和`Max-Age`，那么`Max-Age`的值将优先生效。

`Set-Cookie`没有指定`Expires`或`Max-Age`属性，则为会话信息(`Session Cookie`), 关闭浏览器后该`cookie`就会失效。

---

`Cookie`信息可以通过读取`document.cookie`来获取，但是读取出来的是由一个或多个`cookie`以`;`分隔的键值对字符串，如`key=value;key1=value1`。

了解了`cookies`的规则之后，我们需要对它进一步的封装以便在实际应用中使用：

``` javascript
const tools = {
    /**
     * 读取 cookies
     * @param name - cookie 名，不传拿全部
     */
    cookieGet(name) {
        const cookies = document.cookie.split(';').map(item => {
            const [key, value] = item.trim().split('=')
            return { key, value };
        });

        if (!name) return cookies;

        const cookie = cookies.find(item => item.key === name);
        return cookie ? cookie.value :  null;
    },

    /**
     * 设置cookie
     * @param name - cookie 名
     * @param value - cookie 值
     * @param days - 几天后过期
     * @param domain - 该 cookie 在哪些域名下可用
     * @param path - 指定 cookie 路径
     */
    cookieSet(name, value, days, domain, path = '/') {
        if (!name || !value) return false;

        let cookie = `${name}=${value}`
        if (days === 0 || days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            cookie += `; expires=${date.toGMTString()}`;
        }

        if (domain) cookie += `; domain=${domain}`
        if (path) cookie += `; path=${path}`
        document.cookie = cookie;

        return true
    },
}

// 查询 cookie
tools.cookieGet('nickName')     // null

// 设置 cookie
tools.cookieSet('nickName', 'anran758')     // true
tools.cookieGet('nickName')     // "anran758"

// 清除 cookie
tools.cookieSet('nickName', 'anran758', 0)  // true
tools.cookieGet('nickName')     // null
```

具体更多有关`cookies`信息可以戳[MDN - Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

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

---

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

* 很多编译器在压缩代码的时候，喜欢用`!0`和`!1`来代替布尔值`false`和`true`。因为可以有效减少文件体积, 但会破坏可读性

<!-- ## Promise

为了避免丢失被忽略和抛弃的 Promise 错误，最佳实践就是最后总以一个`catch()`结束 -->

---

## Vue

一些常见的问题

1. 如果给子组件设置`v-if`的话，那么 vue 会在切换过程中将条件块内的事件监听器和子组件适当地被销毁和重建。也就是说就算里面用了`watch`也会失效。
2. 如果组件不是通过`new Vue`这种形式生成出来的话，那么`data`就必须要使用`function`的形式返回一个对象，而不是直接使用对象。不然的话`vue`会提示报错的。

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

3. 在父组件的`created`钩子上进行赋值操作的话，数值的变化是传不到子组件的`watch`里的。
4. 实际上，`props`的值是可以直接修改的。但是一般情况下我们并不推荐去修改`prop`里的内容，因为这会直接修改到父级的`data`。会引起组件之间的逻辑的混乱，未来 debug 也变得麻烦了起来。
   通常我们会通过`this.$emit('postHandle', data)`这种形式去激活，通知父级更改。
5. 组件的通信上，`props`里可以使用驼峰性命名参数，但传入的时候需要转变为**连字号(-)**。
6. 在使用`vue-router`时，将`mode`设置为`history`模式的话，没有后端进行做相应的匹配会报 404。
   但如果在开发模式下，使用`webpack-dev-server`作为本地服务器的话，可以让`webpack`设置`devServer`下的`historyApiFallback`做路径的映射，这样就可以用干净简洁的`history`模式啦~

---

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
