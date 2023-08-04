---
sidebarDepth: 3
---

<!-- omit in toc -->

# JavaScript

细节和技巧的交汇，本篇笔记主要用于速查。

- [练手组件](#练手组件)
- [代码简化](#代码简化)
  - [科学计数法 E](#科学计数法-e)
  - [三元操作符](#三元操作符)
  - [逻辑运算符](#逻辑运算符)
- [Utils](#utils)
  - [判断原始类型](#判断原始类型)
  - [计算星座](#计算星座)
  - [【Array】删除数组项](#array删除数组项)
  - [【Array】数组去重](#array数组去重)
  - [【Array】中文排序](#array中文排序)
  - [【Array】数组扁平化](#array数组扁平化)
  - [【Number】金额分隔](#number金额分隔)
  - [【Number】生成随机数](#number生成随机数)
  - [【Number】字符串转数字](#number字符串转数字)
  - [【Number】判断闰年函数](#number判断闰年函数)
  - [【String】URL 拼接](#stringurl-拼接)
  - [【String】计算字符串长度](#string计算字符串长度)
  - [【String】生成 UUID](#string生成-uuid)
  - [【String】驼峰命名类型字符串转为常量命名类型](#string驼峰命名类型字符串转为常量命名类型)
  - [【Date】获取指定天前的时间区间](#date获取指定天前的时间区间)
- [Store](#store)
  - [localStorage](#localstorage)
  - [cookie](#cookie)
- [DOM](#dom)
  - [盒子模型对应的 DOM API](#盒子模型对应的-dom-api)
  - [批量插入节点](#批量插入节点)
  - [事件冒泡与事件捕获](#事件冒泡与事件捕获)
- [技术细节](#技术细节)
  - [parseInt](#parseint)
  - [map 与 forEach 的区别](#map-与-foreach-的区别)
  - [Symbol](#symbol)
  - [Class](#class)
- [编码设计思路](#编码设计思路)
  - [限制函数参数的数量](#限制函数参数的数量)
- [业务实现思路](#业务实现思路)
  - [页面滚到指定位置显示图片(内容)](#页面滚到指定位置显示图片内容)
  - [下载文件](#下载文件)

## 练手组件

如果一些刚入门的朋友学完语法后不知道该做什么，可以自个尝试实现以下的简单组件，将知识学以致用：

- **日历**: 考验对 `Date` 对象的使用。
- **四则计算器**: 考验对处理**浮点数溢出**的能力、`Math` 的使用等。
- **轮播图**: 考验对 setTimeout 相关的定时器的处理。

**简单算法**

- 设任意 N 行列的二维数组，要求螺旋打印出其值

## 代码简化

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
let hint = "";
if (age >= 18) {
  hint = "欢迎打开新世界(";
} else {
  hint = "嘿, 未成年不得入内!";
}

// good
const hint = age >= 18 ? "欢迎打开新世界 (" : "未成年不得入内!";
```

### 逻辑运算符

利用好 `&&` 和 `||` 特性的能力

```javascript
// 在某些场景下, 使用 && 操作符代替 if 能使使你的代码变得更加的整洁
let isMoving = false;
container.addEventListener("mousedown", () => (ismoving = true));
container.addEventListener("mouseup", () => (ismoving = false));

// if 语句
container.addEventListener("mousemove", () => {
  if (isMoving) handleMove();
});

// && 操作符. 前者为 true 的话, 就调用函数
container.addEventListener("mousemove", () => isMoving && handleMove());

// || 操作符则相反，只要前面的值为true，就不继续往后走了
```

<details>
<summary>不再建议使用的编程技巧</summary>

以下是一些写法简洁但可读性不太高的编程技巧。这些技巧一般不会在 web 项目中使用，在 `eslint` 规则中是被禁止使用的。但可以了解一下用途：

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
names.some((name) => ~linkName.indexOf(name));
```

**位操作符:**

利用按位或 `|` 向下取整:

```javascript
const num = 50.1234 | 0;

console.log(num); // 50
```

除此之外，还可以使用`~~`截除小数，但它只适用于`32`位数字。<br>
虽说前者会更简单，但有可能会遇到操作符优先级的问题。因此使用时一定要了解它的规则，同时确保代码的可读性。

```javascript
// 进行两次反转字位，然后出于10
console.log(~~50.1234 / 10); // 5

console.log(50.1234 | (0 / 10)); // 50
console.log((50.1234 | 0) / 10); // 5
```

**压缩后的布尔值**

很多编译器在压缩代码的时候，会用 `!0` 和 `!1` 来代替布尔值 `false` 和 `true`。因为可以有效减少文件体积, 但会破坏代码可读性 (虽然可读性是给人看得，机器只在乎运行效率)。

</details>

## Utils

### 判断原始类型

```javascript
// 目标是否是对象
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// 使用同样的方法进行测试, 结果如下:
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call("12"); // [object String]
Object.prototype.toString.call(NaN); // [object Number]. 注意, NaN 是属于数字类型
Object.prototype.toString.call(345); // [object Number]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(Symbol()); // [object Symbol]
Object.prototype.toString.call(function () {}); // [object Function]

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
 * @param {String} month - 月份
 * @param {String} day - 日期
 * @desc 返回星座名
 */
function getAstro(month, day) {
  return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(
    month * 2 - (day < "102223444433".charAt(month - 1) - -19) * 2,
    2,
  );
}
```

### 【Array】删除数组项

```javascript
// 删除数组元素, index 为数组索性, 只删除一个
arr.splice(index, 1);
```

### 【Array】数组去重

```javascript
let arr = [1, 2, 3, "1", 5, 2, 4, 5, 3, 4];

/* es6 */
// 利用 Set 没有重复值的特性去重, 再将其转为数组.
let newarr = Array.from(new Set(arr));

// 原理同上, 只不过是通过扩展运算符扩展出来
let newarr = [...new Set(arr)];
```

### 【Array】中文排序

**[IE11+]** [String.prototype.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)，会返回一个数字，配合数组的`sort`方法进行排序。

```javascript
["张三", "李四", "王五"].sort((a, b) =>
  a.localeCompare(b, "zh-Hans-CN", { sensitivity: "accent" }),
);
```

### 【Array】数组扁平化

二维数组扁平化

```javascript
const arr = [[1, 2, 3], [4, 5], [7, 8, 9], 10, null, undefined, {}];
const newArr = arr.reduce(
  (p, n) => (Array.isArray(n) ? p.concat(n) : (p.push(n), p)),
  [],
);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

**[ES6+]** 多维数组扁平化

```javascript
function flatten(arr) {
  const newArr = arr.map((item) =>
    Array.isArray(item) ? flatten(item) : item,
  );
  return [].concat(...newArr);
}

const arr = [[1, 2, 3], [4, 5], [7, [8, [9]]], 10, null, undefined, {}];
const newArr = flatten(arr);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {…}]
```

### 【Number】金额分隔

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

  let num = n.toString().split(".");
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num.join(".");
}

console.log(numberWithCommas(12345678912.123)); // "12,345,678,912.1234"
```

以上方法的缺陷是需要额外处理小数位，在 `ES2018` 中可以使用 [后行断言](https://es6.ruanyifeng.com/#docs/regex#%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80) 的语法(chrome 62+)，可以完全通过正则来处理，性能也比上一种方式会更高:

```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
```

<details>
  <summary>测试用例</summary>

```js
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
failures += !test(0, "0");
failures += !test(0.123456, "0.123456");
failures += !test(100, "100");
failures += !test(100.123456, "100.123456");
failures += !test(1000, "1,000");
failures += !test(1000.123456, "1,000.123456");
failures += !test(10000, "10,000");
failures += !test(10000.123456, "10,000.123456");
failures += !test(100000, "100,000");
failures += !test(100000.123456, "100,000.123456");
failures += !test(1000000, "1,000,000");
failures += !test(1000000.123456, "1,000,000.123456");
failures += !test(10000000, "10,000,000");
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
num.toLocaleString(); // "1,234,567.123"

// result => "1,234,567.123"
new Intl.NumberFormat().format(num);

// 设置格式选项
var CNY_OPTIOONS = { style: "currency", currency: "CNY" };

// result => "¥1,234,567.12"
new Intl.NumberFormat("zh-CN", CNY_OPTIOONS).format(num);

// result => "¥1,234,567.123450"
// 设置小数位
new Intl.NumberFormat("zh-CN", {
  ...CNY_OPTIOONS,
  minimumFractionDigits: 6,
}).format(num);
```

或者使用 [numeral.js](https://github.com/adamwdraper/Numeral-js/blob/master/numeral.js) 进行数字格式化。

参考资料: [How to print a number with commas as thousands separators in JavaScript](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)

### 【Number】生成随机数

```javascript
/**
 * 生成随机数
 * @param {number} min - 随机数的下限
 * @param {number} max - 随机数的上限
 * @returns 返回指定范围内的随机数
 */
function randomRangeNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
```

### 【Number】字符串转数字

```javascript
["1.1", "4566", "3e300"].map(Number); // [1.1, 4566, 3e+300]
["1.1", "456a", "3e300"].map(Number); // [1.1, NaN, 3e+300]
```

### 【Number】判断闰年函数

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

### 【String】URL 拼接

新方法可以使用 [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) API 来处理 URL 的查询字符串，兼容性为 Edge 17+：

```js
const params = new URLSearchParams({
  name: "Danny chan",
  age: 18,
});

console.log("params toString:", params.toString());
// params toString: name=Danny+chan&age=18
```

老方法可以通过拼接字符串的方式处理：

```ts
function param(data: object) {
  let url = "";

  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : "";
    url += `&${k}=${encodeURIComponent(value)}`;
  }

  return url ? url.substring(1) : "";
}

// 使用示例
url += (url.indexOf("?") > 0 ? "?" : "&") + param(data);
```

### 【String】计算字符串长度

`unicode` 编码 `0 ~ 128` 是单字节编码序列。因此可以利用这个特点来确定字符串的长度(单双字节实际占位)。

```javascript
/**
 * 检查字符串中第几个字符是否为汉字
 * @param { String } str 字符串
 * @param { Number } i 第几个字符串，最小为 1
 */
function checkCHS(str, i = 1) {
  const code = str.charCodeAt(Math.min(0, i - 1));
  return code > 255 || code < 0;
}

/**
 * 获取区分单双字节文本长度
 * @desc 仅用于中英文长度判断，中文占 2 位，英文占 1 位
 *       注意: emoji 的判断会不精准
 */
function getStrLength(str) {
  let len = 0;

  for (let i = 1; i <= str.length; i++) {
    len += checkCHS(str, i) ? 2 : 1;
  }

  return len;
}

console.log(
  "[getStrLength result]:",
  getStrLength("一二三四五六七八九十"),
  getStrLength("1234567890"),
  getStrLength("abcdefghij"),
);
// [getStrLength result]: 20 10 10
```

### 【String】生成 UUID

UUID，即通用唯一识别码（Universally Unique Identifier）用于计算机体系中以识别信息的一个128位标识符。生成 UUID 是有规范约束的，详情可以查看《[通用唯一识别码](https://zh.wikipedia.org/wiki/通用唯一识别码)》。

```js
/**
 * 生成唯一标识符
 */
function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (str) => {
    const r = (Math.random() * 16) | 0;
    const v = str === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}
```

### 【String】驼峰命名类型字符串转为常量命名类型

有时候开发时需要将某些驼峰命令规范的操作转为常量形式，因此写一个小函数来处理。

```js
function modifyNamingType(name) {
  return name.replace(/([A-Z])/g, "_$1").toUpperCase();
}

modifyNamingType("spaceNameMapping"); // 输出: "SPACE_NAME_MAPPING"
```

### 【Date】获取指定天前的时间区间

获取 rangeDay 天的时间区间，区间在 `00:00:00 - 23:59:59`。

```javascript
function getFullDate(rangeDay) {
  const start = new Date().setHours(0, 0, 0, 0);
  const end = new Date().setHours(23, 59, 59, 999);
  const oneDay = 24 * 60 * 60 * 1000;

  return [start - rangeDay * oneDay, end];
}
```

## Store

### localStorage

使用`localStorage`的时候需要对数据进行一些处理：

- 存入数据时对目标值转为合法的 JSON 值，`localStorage.setItem('name', JSON.stringify(name))`
- 读取数据后对 JSON 值进行解析取得目标值，`JSON.parse(localStorage.getItem('name'))`

### cookie

> 浏览器`Cookie`是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

cookie 的用途：

- 会话管理(用户状态信息等)
- 个性化设置(根据`cookie`信息为用户提供更进一步的功能)
- 浏览器行为跟踪(追踪用户行为、统计等)

创建一个新的 `Cookie` 的语法格式是:

```javascript
document.cookie = newCookie;
```

当对 `document.cookie` 进行赋值操作时，该属性会调用它底层所绑定的函数来设置 `cookie`。其中 `newCookie` 是一个键值对的字符串，其格式如下:

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
| path        | 指定哪些路径可以接受`cookie`, 不指定则为默认为当前文档的主机     |           |
| domain      | 指定哪些主机可以接受`Cookie`, 不指定则为当前页面的根目录`/`      |           |
| max-age     | 指定从现在开始`Cookie`可以存在的**秒数**, 超时该`cookie`就会过期 |           |
| expires     | 显式指定`cookie`具体的到期时间                                   |           |
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
    const cookies = document.cookie.split(";").map((item) => {
      const [key, value] = item.trim().split("=");
      return { key, value };
    });

    if (!name) return cookies;

    const cookie = cookies.find((item) => item.key === name);
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
  cookieSet(name, value, days, domain, path = "/") {
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
  },
};

// 查询 cookie
tools.cookieGet("nickName"); // null

// 设置 cookie
tools.cookieSet("nickName", "anran758"); // true
tools.cookieGet("nickName"); // "anran758"

// 清除 cookie
tools.cookieSet("nickName", "anran758", 0); // true
tools.cookieGet("nickName"); // null
```

具体更多有关`cookies`信息可以戳[MDN - Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## DOM

### 盒子模型对应的 DOM API

![box model example](@image/box-model-example.png)

盒子模型上对应的 DOM API:

- border 上的实线为可视尺寸 -> `clientWidth` (标准 API)
- margin 上的虚线为占据尺寸 -> `outerWidth` (非标准 API)

### 批量插入节点

DOM 操作实际上是一个挺耗费渲染性能的操作，我们应该尽可能的减少对 DOM 的操作。

比如批量插入节点时可以先在 js 中将新创建的节点插入到 `Fragment` 节点中，再将该节点插入到页面中，这样就仅触发一次渲染。

```javascript
const $fragment = document.createDocumentFragment();
const $list = document.querySelector(".list");

for (let i = 0; i < 10; i++) {
  const $ele = document.createElement("li");
  $ele.innerText = `item - ${i}`;
  $ele.setAttribute("class", "item");

  $fragment.appendChild($ele);
}

$list.appendChild(fragment);
```

### 事件冒泡与事件捕获

事件捕获是从上到下(click p, document -> body -> p)，事件冒泡则是从下到上(click p, p -> body -> html)。使用 `addEventListener` 监听事件时默认是事件冒泡，但有一些场景使用事件捕获会有奇效。

比如我们正在使用第三方的组件，这个组件内置了 click 事件，并且没有对外暴露。组件内的 click 事件总是比我们后绑定的事件监听器先触发，这时我们的一些需求就没法实现。此时可以将事件监听器的模式切为**事件捕获**，这时事件捕获会先于事件冒泡触发，这样就能达到预期的效果。

## 技术细节

### parseInt

在`ES5`之前，`parseInt`在没有传第二个参数的时候，会根据传入字符串的第一个字符来判断使用什么方式进行解析，这个历史遗留的问题可能会导致预期之外的效果。

```javascript
parseInt("08"); // 有些旧版本的浏览器可能会解析为 0， 因为浏览器会当做八进制进行解析。

// 因此我们用这个方法的时候，一定要显示加上第二个参数，而不要让浏览器去猜
parseInt("08", 10); // 8
```

还有一个常见的问题就是，不能直接将`parseInt`作为数组`map`的回调函数，因为两者所传(接受)的形参的用途不一:

```javascript
[1, 2, 3].map(parseInt); // [1, NaN, NaN]
```

[parseInt(string, radix)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 函数解析一个字符串参数，并返回一个指定基数的整数;

上面的例子就是因为`map`函数传入的第二个参数为数组的索引(`index`)。`parseInt`在处理到`2`时，传入了索引`2`作为基数，然而二进制并没有`2`这个数字，处理后自然会返回`NaN`。

### map 与 forEach 的区别

| 方法      | 相同之处         | 不同之处                                                                                                                   |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `map`     | 同样用于遍历数组 | `map`对每项调用的函数后会取得函数的返回值，并推入新的数组中去(意味着可以链式调用)。<br>但是这个方法只有数组才能使用。      |
| `forEach` | 同样用于遍历数组 | `forEach`单纯对数组中每一项调用回调函数，不作其他操作。<br>该方法并不是只有数组能用，部分类数组(如 NodeList)也有这个方法。 |

该问题笔者曾在知乎上回答过更详细的回答: [js es6 中如何比较深刻的理解 for 、for of 、 map？ - anran758的回答 - 知乎](https://www.zhihu.com/question/278332594/answer/886056097)

> 你知道吗？

数组实际上是一个类列表对象，这意味着我们可以在数组上添加属性，虽然一般不常这样做。

### Symbol

1. 我们使用 Symbol 主要是因为它独一无二的特性(避免覆盖)。
2. 对于一些私有的方法，最好使用 Symbol 作为 key。但值得注意的是，用 Symbol 作为 key的话还有一个问题就是，不会被 `for` 循环、`Object.keys`等遍历返回。

### Class

1. Class 和传统的 `prototype` 在可枚举性是不一样的，Class 不通过 `this.__protp__` 上获取原型方法
2. Class 内部默认采用严格模式(意味着不能使用非严格性语法了)
3. Class 必须使用 new 来调用, 但可以直接使用类的静态方法
4. ES6的 Class 在重新赋值给一个变量的时候，this 指向会丢失。解决的方法是在 `constructor` 中硬绑定(bind) this。

## 编码设计思路

> 记录在开发时笔者个人比较推崇的编码习惯

### 限制函数参数的数量

在抽象函数时建议接收的参数不要超过 3 个。若需要传入多个参数，函数接收的最后一个参数应为对象，通过解构语法来获取参数。

```js
// bad code
function getUserList(id, query, limit, level = 1, blocked = false) {
  // other code....
}

// 获取用户列表
const list = await getUserList(userId, query, 20, 1, true);
```

上述代码不看函数的定义是很难理解后面几个参数的作用，额外增加理解成本。
此外若参数 `level` 想使用默认值但后面的 `blocked` 想要指定值的话只能通过 `getUserList(userId, query, 20, undefined, true)` 方式调用，代码会显得很丑陋。

因此不建议一个函数内接受过多的参数，若有需要可以通过对象的方式传值。写上指定选项还能调用函数的可读性:

```js
// good code
function getUserList(id, query, { limit, level, blocked } = {}) {
  // other code....
}

// 获取用户列表
const list = await getUserList(userId, query, {
  limit: 20,
  blocked: true,
});
```

此外通过对象解构的语法会使函数调用时

## 业务实现思路

一些常见的业务逻辑的处理思路。

### 页面滚到指定位置显示图片(内容)

**HTML**: 给目标 DOM 设置指定类名

**CSS**: 给类名设置 css3 属性

```css
.align-left.slide-in {
  transform: translateX(-30%) scale(0.95);
}

.align-right.slide-in {
  transform: translateX(30%) scale(0.95);
}

.slide-in.active {
  opacity: 1;
  transform: translateX(0%) scale(1);
}
```

**JavaScript**:

1. 获取目标类名, 监听 window 滚动, 计算滚动的距离
2. 计算滚动的位置 (slideInAt): window.scrollY(浏览器滚动Y轴位置) + window.innerHeight(窗口高度) - 内容(图片)宽度的一半。(也就是说当滚到指定内容一半位置的时候就添加类名)
3. 判断滚动距离，若滚动距离 (slideInAt) 大于 内容的 offsetTop，添加类名反之移除类名

### 下载文件



@[code{1-23}](./utlis.js)