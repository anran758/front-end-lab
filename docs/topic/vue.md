# Vue

**目录**

[[toc]]

## 列举 Vue 的生命周期以及它们的应用场景

Vue 的生命周期可以分为**挂载阶段**、**更新阶段**、**销毁阶段**三大阶段。

<!-- 生命周期图 -->

TODO: 待补充...

## 父组件和子组件生命周期钩子执行顺序是什么？

TODO: 待补充...

## DOM 渲染在 Vue 的哪个生命周期就已经完成

`mounted` 就已经被挂载。

## v-for 遍历模板时为什么要用 key? key 有什么用？

必须要用 key，因为当列表刷新时，底层的虚拟 DOM 会使用 diff 算法来对比新旧 DOM 树的变化。它首先是比对同一层级的 `tag` 和 `key` 来判断是否是同一个节点(sameNode)，若同一个层级的列表项都设有唯一的 key 的话，那就可以避免重复渲染的问题，从而提升渲染性能。

## v-if 与 v-show 有什么区别? 在什么场景下可以应用

主要取决于元素是否会多次渲染，`v-if` 决定节点是否渲染，`v-show` 会渲染节点，但会通过 `display` 控制是否展示。

如果仅需渲染一次的话可以使用 `v-if`。反之，如果需要频繁渲染的话可以使用 `v-show` 仅展示显隐。

## vue 组件通信

- 父子通信中，父组件通过 `props` 传值给子组件并监听子组件对应的事件，子组件通过 `emit` 触发事件，
- 通过 vue 自定义事件进行父子/跨组件通信
  
  详细的操作是： 先新建一个 `event.js` 文件，该文件将导出一个新的 `Vue` 实例，通过该实例进行收发事件。  
  如果在组件中使用 `event` 监听了事件，那应该在组件销毁时，也就是 `beforeDestroy` 中销毁该事件。

- `vuex`

## vue 的双向绑定原理是什么？

数据劫持，get set 发布者与订阅者

TODO: 待补充...

## 怎么在组件中实现 v-modal

`v-model` 默认会利用组件中名为 `value` 的 `prop` 和监听名为 `input` 的事件 (`event`) 完成双向绑定。原理是: 当触发 `input` 事件时，会将 `input` 函数接收的值赋值给 `value`。

``` html
<input v-model="name" />

<!-- 等同于 -->
<input :value="name" @input="name = $event.target.value" />
```

自定义组件可以设置 `model` 来改变 `v-model` 绑定的属性和方法。例如封装一个 `checkbox` 组件, 它被选中的属性应该是 `checked`:

``` js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

## beforeDestroy 一般的用途

- 解除自定义事件
- 消除定时器
- 解绑自定义的 DOM 事件监听器

## vue router 的 beforeEach 和 afterEach 一般用法/使用场景?

`beforeEach` 可以从路由 `meta` 中获取元数据来处理一些东西。比如在 `router meta` 中设置 `title` 的信息。还可以用于用户权限校验，当用户没有足够的权限访问目标页面的话，那就阻止页面跳转。

`afterEach` 当页面切换后可以在此钩子将页面的滚动距离滚回顶部。

## 虚拟 DOM

因为 DOM 操作会非常耗费性能，因此引入了虚拟 DOM 来检查对 DOM 的操作。

引入虚拟 DOM 后，开发方式也发生了改变。以前需要手动操作 DOM，现在只需要关心数据的变化，由数据驱动视图。

虚拟 DOM 主要是指 `vdom`, 它用 js 生成 DOM 树来模拟 DOM 结构，计算出最小的变更来操作 dom。

计算最小的变更是通过 `diff 算法` 来实现的，它也是 vdom 中最核心、最关键的部分。我们常说的 `vdom diff` 其实 diff 新旧树的变化。

## vdom diff 特点

- vdom diff 只 diff 同一层，不跨级比较
- tag 不相同，则直接丢掉重建，不再深度比较
- tag 和 key，两者都相同，则认为是相同节点，不再深度比较

## vdom diff 算法的事件复杂度

在 `O(n^3)` 的基础上使用了同层比较策略，因此优化为 `O(n)`.

## vue 性能优化

在使用层面上需要注意以下几点:

- 根据业务场景合理的使用 `v-if` 和 `v-show`
- 合理使用 `computed`
- `v-for` 循环时加上唯一的 `key`, 避免和 `v-if` 同时使用
- 在组件内创建的自定义事件、DOM 事件监听器在组件销毁前要销毁，避免内存泄露。
- 根据业务场景合理使用 `keep-alive`
- data 层级不易过深

## vue 如何监听 data 的每个属性变化？

TODO: 待补充...

## vue 模板引擎如何解析？指令如何处理？如何渲染为 HTML

TODO: 待补充...

# Vue 与 React 的区别

> 如果候选者 vue 和 react 都开发过项目的话，面试官可能会问两者的差别，技术选型的理由

1. 在语法层面上 React 使用 JSX，Vue 使用模板。
2. 在编程思想上，React 是函数式编程，vue 是声明式编程
3. React 相比 vue 会更精简，同时学习成本会更高一些。vue 的语法糖和封装程度比 React 高。比如 vue 原生的 `watch`、`keep-alive` 等功能都需要 React 用户自己去实现，而 `vue` 可以只关注使用。
