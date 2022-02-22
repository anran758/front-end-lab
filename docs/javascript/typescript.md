# Typescript

## 常见内置工具泛型

### Partial\<T>

将类型 `T` 的所有属性转为可选项:

``` ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});
```

### Required\<T>

将类型 `T` 所有属性变为必选的:

``` ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // OK

const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
```

### Omit<T,K>

从类型 `T` 从中移除 `K` 属性:

``` ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 多个属性用 | 分隔
type TodoPreview = Omit<Todo, "description" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
};
```

### Pick<T,K>

将类型 `T` 中提取出 `K` 属性来构造一个新类型:

``` ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

### Readonly\<T>

将类型 `T` 的所有属性都设为 `readonly`，也就是说使用该泛型后就只能读不能写。

``` ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Todo',
};

// 改不得
todo.title = 'Hello'; // Error: cannot reassign a readonly property
```

## 在 js 项目中使用 ts

参考资料：

1. [jsdoc-support](https://www.typescriptlang.org/zh/play#example/jsdoc-support)
2. [vscode](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_global-variables-and-type-checking)
