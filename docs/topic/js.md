# javascript

## 什么是闭包？列举闭包的应用场景

闭包主要指**一个函数及其周围封闭词法环境中的引用构成闭包**，这也是一种语言特性。从实践的角度来看，满足以下两个条件的才能称为闭包:

1. 创建该函数的上下文被销毁了，但该函数仍然存在
2. 函数内有引用外部变量

常见的应用场景是，在一个函数的局部作用域中创建一个内部函数，再将这个内部函数返回出去。
内部函数总是可以访问创建它的上下文，也就是外部函数中声明的参数和变量，即使创建内部函数的上下文已经销毁。例如:

``` js
function createName(name) {
  let prefix = "developer_";
  return function showName() {
    console.log(prefix + name);
  };
}

var showName = createName('anran758');
showName();
```

调用 `createName` 后返回了一个函数并赋值给了 `showName` 变量，同时 `createName` 的上下文被销毁。
此时再调用 `showName` 函数时，尽管 `createName` 的上下文已经被销毁了，但 `showName` 中还能获取 `createName` 的内部变量与形参，这就是闭包的一种应用。

## 什么是科里化？

柯里化是一种将**使用多个参数的函数**转换成一系列**使用一个参数的函数**的技术，本质上也是利用了闭包的特性。科里化可以做到**参数复用**和**延迟执行**的效果。

例如，若传入了给定函数的所定义的参数数量后执行函数:

``` js
function add(a, b, c) { return a + b + c; }

function curry(fn, ...rest) {
  return fn.length !== rest.length
    ? function wrap(...args) {
      return rest.length + args.length !== fn.length
        ? (...arg) => wrap(...args, ...arg)
        : fn(...rest, ...args)
    }
    : fn(...rest)
}

curry(add)(1)(2)(3);
// 6
```

## 节流与防抖

- 函数节流(Throttle)是：在固定的时间内触发事件，每隔 n 秒只触发一次 (例子: 移动端下拉页面)
- 函数防抖是：当你频繁触发后，n 秒内只执行一次 (例子: window.resize 触发事件，通过防抖只更新最后一次事件)

## 数组去重

1. 利用 `Set` 结构不可重复的特性

   ``` js
   var info = { name: 'anran758' };
   var arr = [0,1,2,2,info,3,info];

   // 通过扩展运算符将 Set 转为 Array
   var newArr = [...new Set(arr)];

   // 或者使用 Array.from 转为 Array
   var newArr = Array.from(new Set(arr));
   ```

   > 优点: 语法简洁
   > 缺点: Set 添加新值时是通过 [SameValueZero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) 算法进行比对的, 因此不能做深比较去重

2. 使用 `indexOf` 判断是否具有相同的项

   ``` js
   var info = { name: "anran758" };
   var arr = [0, 1, 2, 2, info, 3, info];

   function uniq(arr) {
     if (!arr || !arr.length) return [];

     var newArr = [];
     for (let i = 0; i < arr.length - 1; i++) {
       var item = arr[i];

       if (newArr.indexOf(item) === -1) {
         newArr.push(item);
       }
     }

     return newArr;
   }

   var newArr = uniq(arr);
   ```

   > 优点: 兼容低版本 IE
   > 缺点: 没有实现深比较去重

3. 引入 [lodash](https://www.lodashjs.com/docs/lodash.uniq) 工具库来处理:
  
   ``` js
   var arr = [0, 2, 4, 3, 3, 2, 6];

   _.uniq(arr);
   ```

   还可以使用 [uniqWith](https://www.lodashjs.com/docs/lodash.uniqWith) 搭配 [isEqual](https://www.lodashjs.com/docs/lodash.isEqual) 实现深比较去重的效果。

   ``` js
   var objects = [
     { 'x': 1, 'y': 2 },
     { 'x': 2, 'y': 1 },
     { 'x': 1, 'y': 2 }
   ];

   _.uniqWith(objects, _.isEqual);
   // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
   ```

   > 优点: 语法简洁，使用方便，能满足所有去重需求
   > 缺点: 需要额外引入第三方库

## 数组多层扁平化

1. `Array.flat`: 数组的 `flat` 方法接受一个数值参数，该参数是指定需要扁平化的层数。若想将数组子项中所有数组进行扁平化，可以传入 `Infinity`。

   只扁平化第 1 层:

   ``` js
   var arr = [0, [1, [2], [[3]]], [[], 4]];
   arr.flat(1);
   // [0, 1, [2], [[3]], [], 4]
   ```

   全部扁平化:

   ``` js
   arr.flat(Infinity);
   // [0, 1, 2, 3, 4]
   ```

2. 通过递归的方式处理:

   ``` js
   var arr = [0, [1, [2], [[3]]], [[], 4]];

   function flatDeep(arr, depth) {
     var d = depth != null ? depth : 1;
     return d > 0
       ? arr.reduce((acc, val) =>
         acc.concat(Array.isArray(val)
           ? flatDeep(val, d - 1)
           : val),
         [])
       : arr.slice();
   }

   flatDeep(arr, 1);
   // [0, 1, [2], [[3]], [], 4]

   flatDeep(arr, Infinity);
   // [0, 1, 2, 3, 4]
   ```

   递归实现有很多思路，`reduce` 循环合并是一种，`for` 循环也是一种。它们只是实现细节不同，但递归思想是相通的。

## 深拷贝数组和对象

1. 可以先通过 `JSON.stringify` 将数据转为 JSON 字符串，再通过 `JSON.parse` 对 JSON 字符串进行解析，可以得到全新的数组/对象。  

   使用该方法进行深拷贝并不算完美，`JSON.stringify` 只能序列化对象的可枚举属性，如果对象是通过构造函数生成的，那么会丢失 `constructor`。也不能对有循环引用的对象进行深拷贝。  
   除此之外，`Date` 对象会被序列化为字符串。正则表达式、`Error` 对象会被序列化为空对象。若属性中存在 `undefined` 则该属性会被丢弃。`NaN`、`Infinity` 等信息会被转为 `null`。  
   由此可见，如果被拷贝的参数中没有 `Date`、正则、函数或对象循环引用的问题，可以考虑使用该方法。

2. 可以自己定义递归函数，参数是传入数组或对象。再遍历形参的属性或下标，如果遍历到的类型也是引用类型那就进行浅拷贝，再进行递归，直至全部属性都遍历完毕。
3. 通过第三方类库实现，如 `lodash` 的 `deepClone` 就可以实现深拷贝。

## 数组里面有 10 万个数据，取第 1 个数据与第 10 万个数据的时间相差多少？

**A:** 取元素的复杂度为 `O(1)`, 消耗时间几乎一致，差异可以忽略不计。

## 数组的 map 和 forEach 有什么区别？

`map` 将每一个元素传入函数调用后，会将函数的返回值存入新数组中，因此可以对数组做链式处理。而 `forEach` 只是将元素传入给函数调用，不会讲返回值存入新数组中。

可以参考这个回答: [js es6 中如何比较深刻的理解 map、for、for of？](https://www.zhihu.com/question/278332594/answer/886056097)

## Fetch 与 XHR 的区别?

- `Fetch` 是基于 `Promise` 实现的, 相比 `XHR(XMLHttpRequest)` 的语法更加简洁。
- `Fetch` 发送请求时默认不带 `cookie` 的, 需要设置 `credentials` 的配置项
- 当接收到一个代表错误的 `HTTP` 状态码时, 从 `fetch()` 返回的 `Promise` 不会被标记为 `reject`, 即使响应的 `HTTP` 状态码是 `404` 或 `500`。仅当网络故障时或请求被阻止时, 才会标记为 `reject`。
- `Fetch` 不支持超时控制与检测请求进度

## bind、call、apply 的区别?

调用 bind 方法后返回一个新函数，新函数的 this 将被指向调用 bind 方法时的第一个参数。而其余参数将作为新函数的参数，供调用时使用

call 与 apply 第一个参数也是指定的 this 值，其余的不同是接受参数的不同。call 接受**参数列表**，apply 接收的是**参数数组**。两者相比，call 的性能会更好。

## 如何检测变量的类型(尽可能多，描述可能出现的问题)?

主要使用 `typeOf`、`instanceOf`、`Object.prototype.toString.call`。还可以使用 `Array.isArray` 方法判断是否是数组，`Number.isNaN` 是否是 `NaN` 等。

`typeOf` 可以用于 `String`、`Number`、`Symbol`、`Boolean`、`undefined` 等类型，但用于 `null`、`Array` 类型的话会展示为 `object` 类型。

`instanceOf` 则是通过原型链的方式来判断对象类型。但它的局限性在于只要被操作的变量原型有上有该类型的值。它主要缺点是不能检测 `number`, `boolean`, `string` 字面量的类型。

`Object.prototype.toString.call` 可以精准的判断类型的值，主要的问题是写法繁琐，可以基于此函数做一层封装:

``` js
function getBaseType(target) {
  const typeStr = Object.prototype.toString.call(target).toLocaleLowerCase();

  return typeStr.slice(8, -1);
}
```

## 简述一下原型链

原型链是实例对象与原型之间的连接，每个对象都有一个特殊的 `[[Prototype]]` 属性，它指向原型对象引用。当访问对象的某个属性时，首先会在对象自身查找这个属性。

若这个属性在自身没有找到，就会通过 `[[Prototype]]` 属性指向的原型对象上查找。如果该原型对象里也没有找到的话该属性的话，就会从这个**原型对象中**的 `[[Prototype]]` 属性继续往下找，直到找到属性或者 `[[Prototype]]` 的值为 `null` 时停止查找。

这一个通过 `[[Prototype]]` 链相连的机制被为原型链。

## prototype、__proto__ 和 constructor 的关系

**简单版**:

构造函数的 `prototype` 和通过该构造函数实例化出来的对象的 `__proto__` 属性是指向同一个原型对象。由于它们共享同一个原型对象，因此构造函数上的 `prototype.constructor` 等价于实例化对象的 `__proto__.constructor`

---

**详细版**:

在 js 中，每个函数都有一个 `prototype` 属性, 该属性指向的是调用该构造函数而创建的**实例的原型**:

``` js
function Person() {}

console.log('1. Person prototype:', Person.prototype);
```

每个 js 对象中都有个 `__proto__` 属性，这个属性会指向**该对象的原型**。比如将 `Person` 进行实例化赋值给 `person1`, `person1.__proto__` 将指向构造函数的 `prototype`。

``` js
// 此处 Person 是构造函数
const person1 = new Person();

console.log(
  "2. person1.__proto__ equal to Person.prototype:",
  person1.__proto__ === Person.prototype
);
```

<details block>
  <summary>扩展: 如果是像 `"This is a string"`、`18`、`true` 这种基本类型也会有 `__proto__` 属性吗？</summary>

  这里就需要引入**封装对象包装**的概念。当我们定义完基本类型字面量后，js 引擎自动会为这些基本类型值包装成一个对象，包装后的对象就拥有了 `__proto__` 属性:

  ``` js
  console.log(0.__proto__);
  // Uncaught SyntaxError: Invalid or unexpected token
  // 上行代码会抛错，因为字面量没有来得及封装为对象。直接访问是访问失败的

  // 将字面量存入变量中或使用括号提升优先级后就可以正常访问了
  var n = 0;
  console.log(n.__proto__);
  console.log((0).__proto__);
  ```

  具体细节请参考: **《你不知道的 JavaScript 中卷》 3.2 封装对象包装**

</details>

根据以上例子可以推出结论: `原型对象 === Person.prototype === person1.__proto__`。`person1` 没有 `prototype` 属性是因为该属性只有函数对象才有，但他们指向的引用是同一个。

除此之外，每个原型都有一个 `constructor` 属性默认指向关联的构造函数:

``` js
console.log('3. Person === Person.prototype.constructor:', Person === Person.prototype.constructor)
console.log('4. person1.__proto__.constructor === Person.prototype.constructor:', person1.__proto__.constructor === Person.prototype.constructor)
```

::: warning

`__proto__` 可能随时被废弃，若想获取原型对象，请优先使用 [Object.getPrototypeOf(object)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf) API

:::

## 使用过 ES6 吗？你常用的有哪一些？

- let/const 自身特性与块级作用域
- 模板字符串
- 解构赋值
- 函数默认参数
- 箭头函数
- Promise
- async/await

## 简述一下 Promise 的特点

- 主要用于异步计算.
- 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。
- 可以在对象之间传递和操作 Promise，帮助我们处理队列。
- 链式写法更简洁，可以避免回调地狱

## Promise 怎么做异常处理?

1. Promise 最末尾添加 catch() 是统一 catch 错误
2. Promise.then 的第二个参数捕获错误

衍生问题:

**Q: `try...catch` 可以捕获 Promise.reject 错误吗，具体说说原因？**  

A: `try...catch` 是同步代码，而 `Promise`、`setTimeout` 等语句是异步代码，因此当异步代码发生错误时，`try...catch` 代码块已经执行完毕了，因此被抛出错误。

## Promise 串联加载?

1. 通过 async await ，等异步函数执行完毕取出 Promise 中的值
2. 通过 then 链式传递串联

## Promise 并行加载?

可以使用 `Promise.all`。

`Promise.all` 接受一个数组，数组内可以是对象、数组或者字符串等基本类型，也可以是 `Promise` 类型。

若数组中有 `Promise` 类型，当所有 `Promise` 的状态都变为成功后，就会进入 `Promise.all` 的 then 方法中，若有一项 `Promise` 状态变为 `reject`，则 `Promise.all` 的状态变为 `reject`。

## Promise 限流并发? <Badge text="TODO" type="warning"/>

TODO: 待补充...

## async/await?

- async/await 是最直接的同步写法，在也没有回调函数
- async/await 使用了 Promise，并没有和 Promise 产生冲突
- 但还是改变不了 js 单线程、异步的本质

## 事件循环 (event-loop) <Badge text="TODO" type="warning"/>

<!-- 1. 什么是单线程？和异步有什么关系？

   > TODO: 待补充... -->

1. 什么是事件循环

   js 是一个单线程非阻塞的语言，单线程意味着所有任务都要排队。但有一些任务耗时很长，js 引擎不想因为这些耗时长的任务而阻塞后面任务的处理。因此将这些任务分为**同步任务**与**异步任务**。

   事件循环中的任务又区分宏任务(Microtasks)与微任务(task)。两种任务各有一个任务队列。首先会执行微任务，然后再执行宏任务。

   > TODO: 待补充...

1. `setTimeout` 是否有误差？若有，产生误差的原因是什么？

   零延迟并不意味着回调会立即执行，其等待的时间取决于队列里待处理的消息数量。

1. 以下程序依次输出的信息是:

   ``` js
   (function() {

     console.log('这是开始');

     setTimeout(function cb() {
       console.log('这是来自第一个回调的消息');
     });

     console.log('这是一条消息');

     setTimeout(function cb1() {
       console.log('这是来自第二个回调的消息');
     }, 0);

     console.log('这是结束');

   })();

   // "这是开始"
   // "这是一条消息"
   // "这是结束"
   // "这是来自第一个回调的消息"
   // "这是来自第二个回调的消息"
   ```

## 计算题

1. 按顺序写出程序的输出结果:

   > 考察 this 问题

   ``` js
   var length = 10;

   function fn() { alert(this.length); }
   var obj = {
     length: 5,
     callApi: function(fn) {
       fn();
       arguments[0]();
     }
   }

   obj.callApi(fn, 3)
   ```

   该段代码依次输出 `10`、`2`。**函数的调用方式决定了 `this` 的值**。第二个函数调用是通过 `arguments` 调用，那么 `this` 自然指向 `arguments`，那 `arguments` 的实参有 `fn` 跟 `3` 两个参数，因此输出 `2`。

2. 列出下面代码的不足及优化方案

   > 考察事件代理与 nodeList

    ``` js
    var node = document.querySelectorAll('ul');
    for (var i = 0;i < node.length; i++) {
      node[i].addEventListener('click', function() {
        alert('click' + i);
      });
    }
    ```

3. 改造下面的代码，使之输出 0 ~ 9，写出你能想到的所有解法。

   ``` js
   for (var i = 0;i < 10; i++) {
     setTimeout(() => {
       console.log(i)
     }, 1000);
   }
   ```

   1. `var` 改为 `let`
   2. 循环体内的代码改为立即执行函数，利用闭包来修复

      ``` js
      for (var i = 0;i < 10; i++) {
        ((j) => {
          setTimeout(() => {
            console.log(j);
          }, j * 1000 );
        })(i);
      }
      ```

   3. 将循环体内的代码封装到新函数中，在循环体中调用该函数并传入 `i`
   4. 将 `i` 作为 `setTimeout` 内部函数的额外参数传入

       ``` js
       for (var i = 0;i < 10; i++) {
            setTimeout((j) => {
            console.log(j);
          }, 1000, i);
        }
       ```

4. 请写出下面代码的运行结果

   ``` js
   async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
   }

   async function async2() {
       console.log("async2");
   }

   console.log("script start");

   setTimeout(() => {
       console.log('setTimeout');
   }, 0);

   async1();

   new Promise((reslove) => {
       console.log("promise1");
       reslove();
   }).then(() => {
       console.log("promise2");
   })

   console.log("script end");
   ```

   依次输出的是:

   - script start
   - async1 start
   - async2
   - promise1
   - script end
   - async1 end
   - promise2
   - setTimeout

5. 下面的代码会进入 `.catch` 吗？解释一下你的答案。

   ``` js
   new Promise(() => {
     setTimeout(() => {
       throw new Error("Whoops!");
     }, 1000);
   }).catch(() => console.log("catched!"));
   ```

   A: 不会进入 `.catch`, 因为 `try...catch` 无法捕获异步代码的错误。

---

## 为什么要引入 TypeScript，引入的好处是什么？

TypeScript 是 JavaScript 的超集，在 JavaScript 的基础上引入了类型约束。

- 提供类型系统：增强了代码的可读性和可维护性，在编译阶段就能发现大部分错误
- 支持 ES6
- 强大的 IDE 支持: 类型检测、语法提示
