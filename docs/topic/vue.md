# Vue 篇

**目录**

[[toc]]

## 生命周期

### 列举 Vue 的生命周期以及它们的应用场景

Vue 的生命周期可以分为**挂载阶段**、**更新阶段**、**销毁阶段**三大阶段。

- **挂载阶段**: `beforeCreate`、`created`、`beforeMount`、`mounted`。
- **更新阶段**: `beforeUpdate`、`updated`。
- **销毁阶段**: `beforeUnmount`、`unmounted`。

![Vue 生命周期](./images/vue-lifecycle-v3.svg)

| 生命周期      | 描述                                                                                                                        | 使用场景                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| beforeCreate  | 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。此处无法修改 vue 实例的 `data` 和 `methods` | 由于触发的时机较早，可以处理 window.title 等外部逻辑。         |
| create        | 组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，`vm.$el` 还不可用                                                  | 可以做一些初始化工作                                           |
| beforeMount   | 在挂载开始之前被调用：相关的 render 函数首次被调用。                                                                        | 略                                                             |
| mounted       | 实例被挂载后调用，此时可以访问 `vm.$el`、可以操作 DOM                                                                       | fetch data、DOM 操作等                                         |
| beforeUpdate  | 组件数据更新之前调用，发生在虚拟 DOM 打补丁之前                                                                             | 适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。 |
| updated       | 组件数据更新之后                                                                                                            | 现在可以执行依赖于 DOM 的操作                                  |
| beforeUnmount | 组件销毁前调用                                                                                                              | 解除自定义事件、消除定时器、解绑自定义的 DOM 事件监听器        |
| unmounted     | 组件销毁后调用, 此时实例仍然是完全正常的                                                                                    | 略                                                             |

### 父组件和子组件生命周期钩子执行顺序是什么？

**渲染阶段**：

```diff
+ 父 beforeCreate
+ 父 created
+ 父 beforeMount

- 子 beforeCreat
- 子 created
- 子 beforeMount
- 子 mounted

+ 父 mounted
```

**更新阶段**：

```diff
+ 父 beforeUpdate

- 子 beforeUpdate
- 子 updated

+ 父 updated
```

**销毁阶段**：

```diff
+ 父 beforeUnmount

- 子 beforeUnmount
- 子 unmounted

+ 父 unmounted
```

### DOM 渲染在 Vue 的哪个生命周期就已经完成

`mounted` 阶段完成挂载。

### 应该在哪个生命周期中请求数据？

放在 `mounted`。由于 js 是单线程，在 ajax 中异步获取到的数据 vue 并不能立即赋值到 data 中，同时还会使逻辑变得更加混乱。

### beforeUnmount 一般的用途

- 解除自定义事件
- 消除定时器
- 解绑自定义的 DOM 事件监听器

## vue 使用

### vue 组件通信

- 父组件给子组件传入 `props`并监听子组件对应的事件，子组件通过 `emit` 触发事件。
- event-bus
- vuex 等状态管理器

### computed 的特点是什么？

计算的值会被缓存，若 data 不会重新计算，进而提升 vue 的性能。

### computed 和 watch 的区别和运用的场景？

- `computed`: `computed` 是计算属性，计算的值会被缓存，若 `data` 没有改变则不会重新计算。
- `watch`: 每当监听的数据变化时都会执行回调进行后续操作

**运用场景**：

当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

### 组件的 data 为什么要是一个函数

由于 JavaScript 对象引用的特性，直接使用对象的话，组件实例化后数据将不能保持独立，组件 A 修改了数据后，组件 B 也会跟着被修改。

因此需要使用函数，在函数内返回一个新的对象，确保每个实例后的组件的数据是彼此独立的。

### Vue 是单向数据流吗？怎样理解 Vue 的单向数据流？

是单向数据流。

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样做的意图是: 防止从子组件意外改变父级组件的状态，从而导致应用的数据流向变得难以理解。

在每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 `$emit` 派发一个自定义事件，父组件接收到事件后，由父组件修改。

### v-if 与 v-show 有什么区别? 在什么场景下可以应用

- 使用 `v-show` 的节点会直接渲染到 DOM 树中，它的显示与隐藏是通过 css 属性 `display` 来控制的。
- 使用 `v-if` 的节点默认不会直接渲染到 DOM 树中，它的显示与隐藏是根据 `v-if` 的值判断是否将节点渲染到 DOM 树中。
- 合适的使用场景: 需要频繁切换展示或隐藏的状态可使用 `v-show`；仅少数情况会切换状态可使用 `v-if`。

主要取决于元素是否会多次渲染，`v-if` 决定节点是否渲染；`v-show` 会渲染节点，但会通过 `display` 控制是否展示。

如果仅需渲染一次的话可以使用 `v-if`。反之，如果需要频繁渲染的话可以使用 `v-show` 仅展示显隐。

### v-for 遍历模板时为什么要用 key? key 有什么用？

必须要用 key。因为当列表刷新时，底层的虚拟 DOM 会使用 diff 算法来对比新旧 DOM 树的变化。

它首先是比对同一层级的 `tag` 和 `key` 来判断是否是同一个节点(sameNode)；若同一个层级的列表项都设有唯一的 key 的话，那就可以避免重复渲染的问题，从而提升渲染性能。

### 怎么在组件中实现 v-modal

`v-model` 默认会利用组件中名为 `value` 的 `prop` 和监听名为 `input` 的事件 (`event`) 完成双向绑定。原理是: 当触发 `input` 事件时，会将 `input` 函数接收的值赋值给 `value`。

```html
<input v-model="name" />

<!-- 等同于 -->
<input :value="name" @input="name = $event.target.value" />
```

自定义组件可以设置 `model` 来改变 `v-model` 绑定的属性和方法。例如封装一个 `checkbox` 组件, 它被选中的属性应该是 `checked`:

```js
Vue.component("base-checkbox", {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `,
});
```

### Vue 逻辑复用

**Vue 2**

1. Mixin：可以定义一些共享的方法、计算属性、生命周期钩子等，然后将它们混入到需要的组件中。这样可以避免重复编写相同的逻辑。
2. 自定义指令：自定义指令允许在 DOM 元素上添加一些特定行为，可以用于复用一些 DOM 操作的逻辑。
3. 自定义组件：将通用的逻辑抽象到全局组件中
4. 插件：Vue 插件可以为 Vue 应用添加全局功能。你可以将一些常用的功能封装成插件，然后在 Vue 实例中通过 Vue.use() 方法来使用它们。

**Vue 3**

1. Composition API 允许按功能组织组件逻辑，并且在不同组件之间共享和复用。

### 自定义指令如何封装？

通过 `Vue.directive` 方法来定义自定义指令。自定义指令可以用于在 DOM 元素上添加一些特殊行为，比如改变样式、添加事件监听器、操作 DOM 等。

``` js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时...
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 使用示例
<input v-focus>
```

### 异步组件的使用场景

1. 加载大组件
2. 路由异步加载

### keep-alive 的作用是什么？怎么实现的？如何刷新的? 它的使用场景是？

`keep-alive` 是一个抽象组件，用于缓存非活动的组件实例而不是销毁它们。主要用于提高应用性能，尤其是在频繁切换组件时，可以避免重复渲染带来的性能开销。

它通过钩子函数 `activated` 和 `deactivated` 来管理组件的显示与隐藏。当需要刷新缓存的组件时，可以通过更改组件的 `key` 或直接清理 `keep-alive` 的缓存来实现。

``` vue
<keep-alive>
  <component :is="currentComponent" :key="componentKey"></component>
</keep-alive>
```

使用场景：

假设我们有一个电商应用，用户频繁切换查看不同产品的详情页。如果每次切换都重新加载组件，会消耗大量资源并降低用户体验。使用 `keep-alive` 可以保持用户的滚动位置和之前的交互状态，当用户返回之前查看的页面时，页面可以迅速加载且状态一致，从而提高了用户体验和应用的性能。

## vue 原理

### vue 的双向绑定原理是什么？

Vue.js 的双向绑定机制在 Vue 2.x 中通过 `Object.defineProperty` 实现，而在 Vue 3.x 中则是通过 `Proxy`（）来对数据对象进行劫持。

**Vue 2.x 双向绑定原理**

在 Vue 2.x 中，双向绑定的核心是 **响应式系统**。其基本步骤如下：

1. **数据劫持**：Vue 通过 `Object.defineProperty` 函数对组件的数据对象进行劫持（即使数据属性变得可观察）。对数据对象的每一个属性，Vue 会定义对应的 getter 和 setter。

2. **依赖收集**：
   - 当渲染函数或计算属性等被执行时，它们会访问响应式数据的属性，此时属性的 getter 函数被调用。
   - Getter 函数负责收集依赖，即识别哪些组件或计算属性依赖于这个数据属性（通过依赖管理器，通常是一个 Watcher 实例）。

3. **派发更新**：
   - 当响应式数据的属性值被修改时，其 setter 函数被调用。
   - Setter 会通知所有依赖于该属性的组件或计算属性，导致它们重新评估或重新渲染。

4. **视图更新**：组件重新渲染，将新的数据值反映到 DOM 中，完成数据到视图的更新。

**Vue 3.x 双向绑定原理**

Vue 3.x 改进了响应式系统，采用了 ES6 的 `Proxy` 来替代 `Object.defineProperty`，这带来了几个优势，如性能提升和更好的语言特性支持。其原理如下：

1. **使用 Proxy**：Vue 3 使用 `Proxy` 对组件的根数据对象进行劫持，可以拦截更多的操作，如属性添加、删除等，并且不需要预先定义属性。

2. **响应式转换**：当数据对象通过 Proxy 被访问或修改时，Proxy 的处理函数（handler）会对应地调用 getter 和 setter。
   - **Getter**：执行依赖收集，类似 Vue 2.x。
   - **Setter**：执行派发更新，通知变更。

3. **更细致的变更检测**：因为 Proxy 可以监控到更多类型的变化，Vue 3 的响应式系统可以更灵活地处理数组和嵌套对象的更新，从而提高性能和响应性。

**结合 v-model 实现双向绑定**

在具体实现双向绑定时，`v-model` 指令是一个常见的工具，它实际上是一个语法糖，结合了输入元素的 `value` 属性和 `input` 事件。例如，在一个输入框中使用 `v-model`：

```html
<input v-model="message">
```

这等同于：

```html
<input :value="message" @input="message = $event.target.value">
```

这样，数据的变化会实时反映在输入框中，输入框的变化也会实时更新数据，从而实现双向绑定。

---

### vue 是怎么解析 template 的? template 会变成什么?

模板解析的步骤简单的来说：

1. **解析**：
   Vue 通过一个解析器（parser）读取 `template` 字符串，解析里面的 HTML 结构、指令、插值表达式（如 `{{ message }}`）和绑定的属性。

2. **优化**：
   Vue 的编译器会对解析后的抽象语法树（AST）进行优化，识别静态根节点，这样在后续的 diff 和重渲染操作中，可以跳过静态节点，提升性能。

3. **代码生成**：
   编译器将优化后的 AST 转换为 JavaScript 渲染函数的代码。这个函数是实际驱动视图更新的部分。

模板（`template`）最终会被编译成一个渲染函数（render function）。这个函数是 JavaScript 代码，用来高效地构建和更新虚拟 DOM（Virtual DOM）。当数据发生变化时，Vue 会重新执行渲染函数来更新虚拟 DOM，接着通过 DOM diff 算法来高效更新实际的 DOM。

例如：

```html
<div id="app">
  <p>{{ message }}</p>
</div>
```

经过编译后，对应的渲染函数可能类似于：

```javascript
function render() {
  with(this) {
    return _c('div', {attrs: {"id":"app"}}, [
      _c('p', [_v(_s(message))])
    ])
  }
}
```

---

### render 和 template 有什么关系？

它们都用于生成组件的 HTML 输出，只是使用方式有差异。

- 使用 `template`: 这是一种声明式语法，使用起来有直接编写 HTML 风格，看上去更简单直观。
- 使用 `render` 函数: 这种一个纯 JavaScript 函数，它可以让开发者通过编程的方式生成虚拟 DOM，从而控制组件的输出。`render` 函数相比模板语法会更加灵活。

`template` 模板语法只是 `vue` 提供的语法糖，最终也会通过解析器(parser)转换为 `render` 函数。因此实际使用时会根据场景去选择使用。

---

### 什么是虚拟 DOM？

虚拟 DOM 主要是指 `vdom`, 它用 js 生成 DOM 树来模拟 DOM 结构，计算出最小的变更来操作 dom。

由于真实 DOM 的操作会非常耗费性能，因此 vue 引入了虚拟 DOM 来检查对 DOM 的操作。引入虚拟 DOM 后，开发方式也发生了改变。以前需要手动操作 DOM，现在只需要关心数据的变化，由数据驱动视图。

虚拟 DOM 计算最小的变更是通过 `diff` 算法来实现的，它也是 `vdom` 中最核心、最关键的部分。我们常说的 `vdom diff` 其实就是 `diff` 新旧树的变化。

### vdom diff 特点

- vdom diff 只 diff 同一层，不跨级比较。
- tag 不相同，则直接丢掉重建，不再深度比较。
- tag 和 key，两者都相同，则认为是相同节点，不再深度比较。

### vdom diff 算法的事件复杂度

在 `O(n^3)` 的基础上使用了同层比较策略，因此优化为 `O(n)`.

### vue 如何监听 data 的每个属性变化？

Vue.js 提供了 `$watch` 方法来监听数据对象的变化，可以用它来监听每个属性的变化。

Vue.js 实现数据双向绑定的原理是通过 `Object.defineProperty()` 方法对数据对象进行拦截，将每个属性都转换为 `getter/setter`，在拦截器中进行依赖收集和派发更新的操作。$watch 实际上是对每个属性的 `getter/setter` 进行了包装，将回调函数作为其监听器。

### Vue 如何监听数组变化

`Object.defineProperty` 只能对属性进行数据劫持，不能监听数组变化，需要重新原型，重写 push/pop 等方法实现监听：

```js
  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])  // observe 功能为监测数据的变化
    }
  }

  /**
   * 对属性进行递归遍历
   */
  let childOb = !shallow && observe(val) // observe 功能为监测数据的变化
```

在 vue3 中使用了 `Proxy` 代替 `Object.defineProperty`，`Proxy` 可以原生支持监听数组变化。

### vue 模板引擎如何解析？指令如何处理？如何渲染为 HTML

- 在开发环境下使用 webpack 的 vue-loader 编译模板
- 先将模板编译为 `render` 函数，执行 `render` 函数会返回 `vnoe`
- 基于 `vnode` 再执行 patch 和 diff

## vue-router

### vue-router 的 hash 模式和 history 模式有什么区别？

`hash` 模式: 使用 URL 的 `hash` 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。它的特点如下:

- 会占用原本 hash 锚点定位的功能
- 页面的路径以 `#` 开头，不方便用户记忆

`history` 模式: 利用 `history.pushState` API 来完成 `URL` 跳转而无须重新加载页面。

- 使用该模式的页面像正常的 URL
- 需要服务端支持，若服务端没有正确配置，用户一刷新页面就会返回 404

### vue router 的 beforeEach 和 afterEach 一般用法/使用场景?

`beforeEach` 可以从路由 `meta` 中获取元数据来处理一些东西。比如在 `router meta` 中设置 `title` 的信息。还可以用于用户权限校验，当用户没有足够的权限访问目标页面的话，那就阻止页面跳转。

`afterEach` 当页面切换后可以在此钩子将页面的滚动距离滚回顶部。

## vuex

### vue 中的 action 和 mutation 的区别

1. action 可以处理异步，mutation 不可以
2. mutation 一般做原子操作，action 则可以整合多个 mutation

## vue 性能优化

在使用层面上需要注意以下几点:

- 根据业务场景合理的使用 `v-if` 和 `v-show`
- 合理使用 `computed`
- `v-for` 循环时加上唯一的 `key`, 避免和 `v-if` 同时使用
- 在组件内创建的自定义事件、DOM 事件监听器在组件销毁前要销毁，避免内存泄露。
- 根据业务场景合理使用 `keep-alive`
- data 层级不易过深
- 服务端渲染处理首屏空白问题 (SSR)

## Vue 与 React 的区别

> 如果候选者 vue 和 react 都开发过项目的话，面试官可能会问两者的差别，技术选型的理由

1. 在语法层面上 React 使用 JSX，Vue 使用模板。
2. 在编程思想上，React 是函数式编程，vue 是声明式编程
3. React 相比 vue 会更精简，同时学习成本会更高一些。vue 的语法糖和封装程度比 React 高。比如 vue 原生的 `watch`、`keep-alive` 等功能都需要 React 用户自己去实现，而 `vue` 可以只关注使用。

<!--
1. react 生态丰富，只提供了基础的架构
2. NG 是全家桶，推出了非常多的组件，应用都趋同
3. Vue 官方提供了很多实用的组件，也在整生态圈
 -->
