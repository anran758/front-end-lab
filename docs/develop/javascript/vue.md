# Vue

开发常见问题：

1. 如果给子组件设置 `v-if` 的话，那么 vue 会在切换过程中将条件块内的事件监听器和子组件适当地被销毁和重建。也就是说就算里面用了 `watch` 也会失效。
2. 如果组件不是通过 `new Vue` 这种形式生成出来的话，那么`data`就必须要使用`function`的形式返回一个对象，而不是直接使用对象。不然的话`vue`会提示报错的。

   ```javascript
   // 这种会报错
   export default {
     template: '<div>{{text}}</div>',
     data: {
       text: 'hello',
     },
   };

   // 下面两者都不会
   new Vue({
     el: '#root',
     template: '<div>{{text}}</div>',
     data: {
       text: '123',
     },
   });

   export default {
     template: '<div>{{text}}</div>',
     data() {
       return {
         text: 'hello',
       };
     },
   };
   ```

3. 在父组件的 `created` 钩子上进行赋值操作的话，数值的变化是传不到子组件的`watch`里的。
4. 实际上，`props`的值是可以直接修改的。但是一般情况下我们并不推荐去修改`prop`里的内容，因为这会直接修改到父级的`data`。会引起组件之间的逻辑的混乱，未来 debug 也变得麻烦了起来。<br>通常我们会通过`this.$emit('postHandle', data)`这种形式去激活，通知父级更改。
5. 组件的通信上，`props`里可以使用驼峰性命名参数，但传入的时候需要转变为**连字号(-)**。
6. 在使用`vue-router`时，将`mode`设置为`history`模式的话，没有后端进行做相应的匹配会报 404。<br>但如果在开发模式下，使用`webpack-dev-server`作为本地服务器的话，可以让`webpack`设置`devServer`下的`historyApiFallback`做路径的映射，这样就可以用干净简洁的`history`模式啦~

## mixin 的问题

- 变量来源不明确，不利于代码阅读
- 多 mixin 可能会造成命名冲突
- mixin 和组件可能会出现多对多的关系，复杂度较高

## Object.definedProperty 缺点

- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性/删除属性(Vue.set Vue.delete)
- 无法原生监听数组，需要特殊处理

## Vue 模板编译过程

vue 的模板(`template`)是通过 `loader` 或者是 `vue template complier` 编译为 `render` 函数的。`render` 函数执行后会生成 `vnode`, 最后在渲染和更新。

组件内可以直接使用 `render` 方法进行渲染，在流程上也少一步模板编译的过程。

## vuex

vuex 的 commit mutation 是一个同步的方法，而 Action 通过`store.dispatch`方法触发的是一个异步的方法。

Vue component 中使用 `dispatch` 触发一个 `action`，`action` commit 到 `mutations` 中。`mutations` 改变 `state` 数据后，数据更新到视图中。
