# React

- [x] [React 知识回顾 (使用篇)](https://anran758.github.io/blog/2020/10/31/react-retrospection/) (生命周期、组件通信、Hooks 等)
- [x] [React 知识回顾 (优化篇)](https://anran758.github.io/blog/2020/11/04/react-retrospection-2/)
- [ ] redux、redux-sage 总结
- [ ] router 相关总结

## 注意事项与技巧

1. React 组件需要以大写字母开头的标签才能正常解析
2. React 是响应式框架，只需要关心数据
3. React 绑定事件名是驼峰式
4. React 不允许直接修改 state 的数据，因为会对性能有影响
5. React 是单向数据流，是视图层框架，只解决视图和数据渲染方面
6. jsx/tsx 一个组件内需要包裹一个元素，但如果这个组件内你不想再最外层额外包一个 `<div>` 的话，可以使用 `<Fragment></Fragment>` 占位符，或者它的简写形式 `<></>`。
7. 当组件的 state 或者 props 发生改变时，render 函数就会重新执行。

## 展示型组件特点

1. 关心数据的展示方式
2. 不依赖 APP 的其他文件
3. 不关心数据是如何加装和变化
4. 仅通过 props 接受数据和回调
5. 通常为函数式组件

## React 常用库

React 中可能会使用到的常见库，可以作为技术选项中参考。

1. styled-components: 使用 js 管理样式冲突
2. immutable.js 生成一个 `immutable` 对象，设置的话会返回全新的对象

### react-router

react-router 的 `exact` 只跟路径完全相等才显示出来

### react-redux

React-Redux 是 Redux 的官方 React UI 绑定层。它让 React 组件从 Redux 存储中读取数据，并将操作分派到存储以更新状态。

React-redux 的 `Provider` 是一个提供器, 它将 `store` 提供给每个内部组件。

``` js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
```

组件内部可通过 `connect` 函数做连接, 如：

``` js redux/actions.js
// redux/actions.js
import { ADD_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
})

// ... other actions

```

``` js components/AddTodo.js
// components/AddTodo.js

import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
// ... other imports

class AddTodo extends React.Component {
  // ... component implementation
}

export default connect(null, { addTodo })(AddTodo)
```
