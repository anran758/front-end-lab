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
