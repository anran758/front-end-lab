# JavaScript

细节和技巧的交汇，本篇笔记主要用于速查。

- [JavaScript](#javascript)
  - [TODO](#todo)
  - [代码简洁性](#%e4%bb%a3%e7%a0%81%e7%ae%80%e6%b4%81%e6%80%a7)
    - [科学计数法 E](#%e7%a7%91%e5%ad%a6%e8%ae%a1%e6%95%b0%e6%b3%95-e)
    - [三元操作符](#%e4%b8%89%e5%85%83%e6%93%8d%e4%bd%9c%e7%ac%a6)
    - [逻辑运算符](#%e9%80%bb%e8%be%91%e8%bf%90%e7%ae%97%e7%ac%a6)
  - [Array](#array)
    - [删除数组中指定元素](#%e5%88%a0%e9%99%a4%e6%95%b0%e7%bb%84%e4%b8%ad%e6%8c%87%e5%ae%9a%e5%85%83%e7%b4%a0)
    - [数组去重](#%e6%95%b0%e7%bb%84%e5%8e%bb%e9%87%8d)
    - [中文排序](#%e4%b8%ad%e6%96%87%e6%8e%92%e5%ba%8f)
    - [数组扁平化](#%e6%95%b0%e7%bb%84%e6%89%81%e5%b9%b3%e5%8c%96)
    - [其他细节](#%e5%85%b6%e4%bb%96%e7%bb%86%e8%8a%82)
  - [Common](#common)
    - [判断原始类型](#%e5%88%a4%e6%96%ad%e5%8e%9f%e5%a7%8b%e7%b1%bb%e5%9e%8b)
    - [计算星座](#%e8%ae%a1%e7%ae%97%e6%98%9f%e5%ba%a7)
    - [判断闰年函数](#%e5%88%a4%e6%96%ad%e9%97%b0%e5%b9%b4%e5%87%bd%e6%95%b0)
  - [Number](#number)
    - [parseInt](#parseint)
    - [金额分隔](#%e9%87%91%e9%a2%9d%e5%88%86%e9%9a%94)
    - [生成随机数](#%e7%94%9f%e6%88%90%e9%9a%8f%e6%9c%ba%e6%95%b0)
    - [字符串转数字](#%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bd%ac%e6%95%b0%e5%ad%97)
  - [String](#string)
    - [计算字符串长度](#%e8%ae%a1%e7%ae%97%e5%ad%97%e7%ac%a6%e4%b8%b2%e9%95%bf%e5%ba%a6)
    - [截取字符串](#%e6%88%aa%e5%8f%96%e5%ad%97%e7%ac%a6%e4%b8%b2)
  - [Store](#store)
  - [存取数据](#%e5%ad%98%e5%8f%96%e6%95%b0%e6%8d%ae)
    - [cookie](#cookie)
  - [Date](#date)
  - [DOM](#dom)
    - [批量插入节点](#%e6%89%b9%e9%87%8f%e6%8f%92%e5%85%a5%e8%8a%82%e7%82%b9)
  - [技术栈](#%e6%8a%80%e6%9c%af%e6%a0%88)
    - [Vue](#vue)
      - [vuex](#vuex)
    - [React](#react)
      - [注意事项与技巧](#%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a1%b9%e4%b8%8e%e6%8a%80%e5%b7%a7)
      - [展示型组件特点](#%e5%b1%95%e7%a4%ba%e5%9e%8b%e7%bb%84%e4%bb%b6%e7%89%b9%e7%82%b9)
      - [hooks](#hooks)
    - [React 与 Vue 的选择](#react-%e4%b8%8e-vue-%e7%9a%84%e9%80%89%e6%8b%a9)
    - [小程序](#%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  - [第三方库](#%e7%ac%ac%e4%b8%89%e6%96%b9%e5%ba%93)
  - [数据可视化](#%e6%95%b0%e6%8d%ae%e5%8f%af%e8%a7%86%e5%8c%96)
    - [bizcharts](#bizcharts)

## TODO

我记得当初自学学完 `js` 语法后是比较茫然的，什么都看过了一遍，但又感觉好像还是什么都不懂。

实际上这是熟练度不高的一种表现，如果你已经学习完 `js` 的语法。这时你可以来做一些 Demo 来验证你的学习成果。

比如下面完成下面的小应用能提高你对应 API 熟练度。demo 列表后续还会有所补充，未来有空也会把参考 demo 发布至博客中。

- [ ] 日历: 考验对 `Date` 对象的使用。
- [ ] 简单的四则计算器: 考验对处理**浮点数溢出**的能力、`Math` 的使用等。

## 代码简洁性

在实际工作中，可以在保证语义化的前提使用一些简写方法来提升代码的简洁性

### 科学计数法 E

似乎很多人都不爱用`js`的科学计数法，但实际上科学计数法用来表示大数字能使代码显得很简洁易读，如下：

```javascript
console.log(1000000000 === 1e9); // true
console.log(1e9 * 4); // 4000000000
```

两者对比就能看出差异，而且科学计数法也能做同等的运算。

### 三元操作符

用三元操作符代替简单`if...else`逻辑，除了简洁之外三元操作符还有一个好处就是可以用作条件预加载。

```javascript
const age = 16;

// bad
let hint = '';
if (age >= 18) {
  hint = '欢迎打开新世界(';
} else {
  hint = '嘿, 未成年不得入内!';
}

// good
const hint = age >= 18 ? '欢迎打开新世界(' : '未成年不得入内!';
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

<details>
<summary>不再建议使用的编程技巧</summary>

下面是一些简洁但可读性不太高的一些编程技巧，在 `eslint` 中已经不建议使用。但可以了解一下：

**按位非(按位取反):**

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

**位操作符:**

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

</details>

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

```javascript
const arr = [[1, 2, 3], [4, 5], [7, 8, 9], 10, null, undefined, {}];
const newArr = arr.reduce(
  (p, n) => (Array.isArray(n) ? p.concat(n) : (p.push(n), p)),
  []
);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

**[ES6+]** 多维数组扁平化

```javascript
function flatten(arr) {
  const newArr = arr.map(item => (Array.isArray(item) ? flatten(item) : item));
  return [].concat(...newArr);
}

const arr = [[1, 2, 3], [4, 5], [7, [8, [9]]], 10, null, undefined, {}];
const newArr = flatten(arr);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

### 其他细节

`map`和`forEach`的区别:

| 方法      | 相同之处         | 不同之处                                                                                                                   |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `map`     | 同样用于遍历数组 | `map`对每项调用的函数后会取得函数的返回值，并推入新的数组中去(意味着可以链式调用)。<br>但是这个方法只有数组才能使用。      |
| `forEach` | 同样用于遍历数组 | `forEach`单纯对数组中每一项调用回调函数，不作其他操作。<br>该方法并不是只有数组能用，部分类数组(如 NodeList)也有这个方法。 |

> 你知道吗？

1. 数组实际上是一个类列表对象，这意味着我们可以在数组上添加属性，虽然一般不常这样做

---

## Common

通用方法

### 判断原始类型

```javascript
// 目标是否是对象
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// 使用同样的方法进行测试, 结果如下:
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call('12'); // [object String]
Object.prototype.toString.call(NaN); // [object Number]. 注意, NaN 是属于数字类型
Object.prototype.toString.call(345); // [object Number]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(Symbol()); // [object Symbol]
Object.prototype.toString.call(function() {}); // [object Function]

// 根据上述规则，可以对字符串进行操作
// 获取基础类型
function getBaseType(target) {
  const typeStr = Object.prototype.toString.call(target).toLocaleLowerCase();

  return typeStr.slice(8, -1);
}
```

### 计算星座

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

### 判断闰年函数

判断闰年其实只要满足下面几个条件即可:

- 普通年**能被 4 整除**且**不能被 100 整除**的为闰年。如 2004 年就是闰年,1900 年不是闰年
- **世纪年**能被**400 整除**的是闰年。如 2000 年是闰年，1900 年不是闰年

```javascript
/**
 * 判断闰年函数
 * @param  {number} year 要判断的年份
 * @return {bool} 返回布尔值
 */
function leapYear(year) {
  return !(year % (year % 100 ? 4 : 400));
}
```

> 你知道吗？

- 很多编译器在压缩代码的时候，喜欢用`!0`和`!1`来代替布尔值`false`和`true`。因为可以有效减少文件体积, 但会破坏可读性。

---

## Number

### parseInt

在`ES5`之前，`parseInt`在没有传第二个参数的时候，会根据传入字符串的第一个字符来判断使用什么方式进行解析，这个历史遗留的问题可能会导致预期之外的效果。

```javascript
parseInt('08'); // 有些旧版本的浏览器可能会解析为 0， 因为浏览器会当做八进制进行解析。

// 因此我们用这个方法的时候，一定要显示加上第二个参数，而不要让浏览器去猜
parseInt('08', 10); // 8
```

还有一个常见的问题就是，不能直接将`parseInt`作为数组`map`的回调函数，因为两者所传(接受)的形参的用途不一:

```javascript
[1, 2, 3].map(parseInt); // [1, NaN, NaN]
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
  // 注意, 后面的 (?=) 那一段代码只是判断的规则, 匹配到后只替换掉 \B
  // 而 \B 元字符匹配的是非单词边界

  let num = n.toString().split('.');
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num.join('.');
}

console.log(numberWithCommas(12345678912.123)); // "12,345,678,912.1234"
```

以上方法的缺陷是需要额外处理小数位，在 `ES2018` 中可以使用 [后行断言](https://es6.ruanyifeng.com/#docs/regex#%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80) 的语法(chrome 62+)，可以完全通过正则来处理，性能也比上一种方式会更高:

``` js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
```

<details>
  <summary>测试用例</summary>

``` js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function test(x, expect) {
  const result = numberWithCommas(x);
  const pass = result === expect;
  console.log(`${pass ? "✓" : "ERROR ====>"} ${x} => ${result}`);
  return pass;
}

let failures = 0;
failures += !test(0,               "0");
failures += !test(0.123456,        "0.123456");
failures += !test(100,             "100");
failures += !test(100.123456,      "100.123456");
failures += !test(1000,            "1,000");
failures += !test(1000.123456,     "1,000.123456");
failures += !test(10000,           "10,000");
failures += !test(10000.123456,    "10,000.123456");
failures += !test(100000,          "100,000");
failures += !test(100000.123456,   "100,000.123456");
failures += !test(1000000,         "1,000,000");
failures += !test(1000000.123456,  "1,000,000.123456");
failures += !test(10000000,        "10,000,000");
failures += !test(10000000.123456, "10,000,000.123456");
if (failures) {
    console.log(`${failures} test(s) failed`);
} else {
    console.log("All tests passed");
}
```

</details>

除了正则还可以使用 [Number.prototype.toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) 或 [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 来格式数字。该方法的缺点是低版本 IE 及移动端的兼容性支持不够好.

```javascript
var num = 1234567.123456;

// toLocaleString
num.toLocaleString();                                            // "1,234,567.123"

// result => "1,234,567.123"
new Intl.NumberFormat().format(num);

// 设置格式选项
var CNY_OPTIOONS = { style: "currency", currency: 'CNY' }

// result => "¥1,234,567.12"
new Intl.NumberFormat('zh-CN', CNY_OPTIOONS).format(num);

// result => "¥1,234,567.123450"
// 设置小数位
new Intl.NumberFormat('zh-CN', { ...CNY_OPTIOONS, minimumFractionDigits: 6 }).format(num);

```

或者使用 [numeral.js](https://github.com/adamwdraper/Numeral-js/blob/master/numeral.js) 进行数字格式化。

参考资料: [How to print a number with commas as thousands separators in JavaScript](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)

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

## 存取数据

使用`localStorage`的时候需要对数据进行一些处理：

- 存入数据时对目标值转为合法的 JSON 值，`localStorage.setItem('name', JSON.stringify(name))`
- 读取数据后对 JSON 值进行解析取得目标值，`JSON.parse(localStorage.getItem('name'))`

### cookie

> 浏览器`Cookie`是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

`cookie`用途：

- 会话管理(用户状态信息等)
- 个性化设置(根据`cookie`信息为用户提供更进一步的功能)
- 浏览器行为跟踪(追踪用户行为、统计等)

创建一个新的`Cookie`的语法格式是:

```javascript
document.cookie = newCookie;
```

当对`document.cookie`进行赋值操作时，该属性会调用它底层所绑定的函数来设置`cookie`。其中`newCookie`是一个键值对的字符串，其格式如下:

```javascript
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

```javascript
const tools = {
  /**
   * 读取 cookies
   * @param name - cookie 名，不传拿全部
   */
  cookieGet(name) {
    const cookies = document.cookie.split(';').map(item => {
      const [key, value] = item.trim().split('=');
      return { key, value };
    });

    if (!name) return cookies;

    const cookie = cookies.find(item => item.key === name);
    return cookie ? cookie.value : null;
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

    let cookie = `${name}=${value}`;
    if (days === 0 || days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      cookie += `; expires=${date.toGMTString()}`;
    }

    if (domain) cookie += `; domain=${domain}`;
    if (path) cookie += `; path=${path}`;
    document.cookie = cookie;

    return true;
  }
};

// 查询 cookie
tools.cookieGet('nickName'); // null

// 设置 cookie
tools.cookieSet('nickName', 'anran758'); // true
tools.cookieGet('nickName'); // "anran758"

// 清除 cookie
tools.cookieSet('nickName', 'anran758', 0); // true
tools.cookieGet('nickName'); // null
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

## DOM

### 批量插入节点

DOM 操作实际上是一个挺耗费渲染性能的操作，我们应该尽可能的减少对 DOM 的操作。

比如批量插入节点时可以先在 js 中将新创建的节点插入到 `Fragment` 节点中，再将该节点插入到页面中，这样就仅触发一次渲染。

``` javascript
const $fragment = document.createDocumentFragment();
const $list = document.querySelector('.list');

for (let i = 0; i < 10; i++) {
  const $ele = document.createElement("li");
  $ele.innerText = `item - ${i}`;
  $ele.setAttribute('class', 'item')

  $fragment.appendChild($ele);
}

$list.appendChild(fragment);
```

---

## 技术栈

根据目前主流框架进行划分技术栈。

### Vue

开发常见问题

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
4. 实际上，`props`的值是可以直接修改的。但是一般情况下我们并不推荐去修改`prop`里的内容，因为这会直接修改到父级的`data`。会引起组件之间的逻辑的混乱，未来 debug 也变得麻烦了起来。<br>通常我们会通过`this.$emit('postHandle', data)`这种形式去激活，通知父级更改。
5. 组件的通信上，`props`里可以使用驼峰性命名参数，但传入的时候需要转变为**连字号(-)**。
6. 在使用`vue-router`时，将`mode`设置为`history`模式的话，没有后端进行做相应的匹配会报 404。<br>但如果在开发模式下，使用`webpack-dev-server`作为本地服务器的话，可以让`webpack`设置`devServer`下的`historyApiFallback`做路径的映射，这样就可以用干净简洁的`history`模式啦~

#### vuex

vuex 的 commit mutation 是一个同步的方法，而 Action 通过`store.dispatch`方法触发的是一个异步的方法。

---

### React

- [ ] React / React Hooks 生命周期各钩子使用场景总结
- [ ] redux、redux-sage 总结
- [ ] router 相关总结

#### 注意事项与技巧

1. react 组件需要以大写字母开头的标签才能正常解析
1. react 是响应式框架，只需要关心数据
1. react 绑定事件名是驼峰式
1. react 不允许直接修改 state 的数据，因为会对性能有影响
1. react 是单向数据流，是视图层框架，只解决视图和数据渲染方面
1. jsx/tsx 一个组件内需要包裹一个元素，但如果这个组件内你不想再最外层额外包一个 `<div>` 的话，可以使用 `<Fragment></Fragment>` 占位符，或者它的简写形式 `<></>`。
1. 当组件的 state 或者 props 发生改变时，render 函数就会重新执行。

#### 展示型组件特点

1. 关心数据的展示方式
2. 不依赖 APP 的其他文件
3. 不关心数据是如何加装和变化
4. 仅通过 props 接受数据和回调
5. 通常为函数式组件

#### hooks

- 类组件逻辑复用难
  - 缺少复用逻辑
  - 渲染属性和高阶组件导致层级冗余
- 趋向复杂难以维护
  - 生命周期函数混杂不相干逻辑
  - 相干逻辑分散在不同生命周期
- this 指向困扰
  - 内联函数过度创建新句柄
  - 类成员函数不能保证 this

hooks 优势

优化组件三大问题

- 函数组件无 this 问题
- 自定义 hook 方便复用状态逻辑
- 副作用的关注点分离

memo 与 useMemo

memo 针对一个组件的渲染是否重复执行
useMemo 定义一段函数逻辑是否重复执行

useMemo(() => fn) 返回的是一个函数，那么等同于 useCallback(fn)


<!--

在组件内使用 constructor 接受参数

便于自动化测试

新的虚拟DOM减少了真实DOM的创建，较少了性能损耗

虚拟DOM优点：

1. 性能提升了
2. 使得跨端应用得以实现（React Native）

生命周期指的是

getDefaultProps

getInitialState

componentWillMount 在组件即将被挂载到页面的时刻自动执行，只会在第一次会执行 === vue.ready
render 页面被渲染时
componentDidMount 在组件被挂载到页面后自动执行，只会在第一次会执行

componentWillReceiveProps: 如果需要父组件某个信息更新时，子组件自动覆盖内部的某个state可以使用这个生命周期：

```
componentWillReceiveProps(nextProps) {
 const { projectInfo } = this.props;

 // 设置项目时间
 if (nextProps.projectInfo !== projectInfo) {
   const date = [moment(projectInfo.startTime), moment(projectInfo.endTime)];
   this.setState({
     rangPickerData: [...date],
     itemRangDate: [...date],
   });
 }
}
```

static getDerivedStateFromProps(props, state) 用于 props 改变后 针对更新 state

getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

## shouldComponentUpdate

shouldComponentUpdate 组件被更新之前，它会自动被执行,如果 shouldComponentUpdate() 返回 false，则不会调用 render(),

关于避免重复渲染，Component 是用 shouldComponentUpdate, PureComponent 会对 props 和 state 进行浅对比，如果 props 或 state 内部的某个对象里的值发生了改变，但还是不会发生渲染。
memo 则是让无状态组件避免重复渲染

如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。


### redux

redux 三大原则：单一数据源、状态不可变、纯函数修改状态

redux-sage

put 调用一个内部方法 -->

### React 与 Vue 的选择

在项目架构时, React 相比 Vue 会更灵活一些，在遇到非常复杂的业务时倾向于使用 React, 它的技术方案会更多一点选择；vue 则提供了更丰富的 API 实现功能会更简单，但相对来说缺少一定的灵活性，存在一定的限制。

---

### 小程序

小程序与`React`、`Vue` 之间有很多共通之处，将一些概念转换过来可以快速融入微信小程序思路：

1. 小程序也有生命周期，一般会在`onLoad`处理请求接口，因为它是最触发的生命周期钩子。
2. 在小程序中使用 `import` 语法时，要使用相对路径，不能使用绝对路径(如访问根目录 `/` ), 否则会抛错。
3. 在组件上，小程序的 `this.triggerEvent` 相当于 `vue` 的 `this.$emit`, 通过调用 API 来通知父组件有事件触发。
4. 只有跟 `wxml` 内有绑定的变量才需要放在 `this.data` 中，其余的放在 `this` 里。这样能减轻渲染的压力。

   ```javascript
   Page({
     /**
      * 页面的初始数据
      */
     data: {
       // 需要跟 wxml 模板绑定的数据
       gifts: {}
     },

     // timer 只是用于储存定时器，不需要在页面中渲染
     _timer: null,

     /**
      * 页面的方法列表
      */
     methods: {
       /* ... */
     }
   });
   ```

## 第三方库

实际工作中总会遇到很多形形色色的业务需求，这篇针对特定业务需求所需推荐的库。

| name        | 用途                             | 是否有 npm 包 |
| ----------- | -------------------------------- | ------------- |
| moment      | 专门处理 date 的操作             | Y             |
| lodash      | 主要用于数据处理相关的 js 工具库 | Y             |
| node-qrcode | 用以生成二维码                   | Y             |
| xlsx        | excel 之类的表格处理，如导入导出 | Y             |
| classnames  | 类名管理工具                     | y             |

---

## 数据可视化

### bizcharts

`Chart` 图表使用`type: time`，数据量大了后刻度会不准，解决方法是将`type`替换为`timecat`，将日期转换为有序的分类数据。
