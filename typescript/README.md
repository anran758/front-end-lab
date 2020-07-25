# Typescript

## 常见内置工具泛型

### Partial\<T>

将 `T` 的所有属性转为可选项:

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

将类型 T 所有属性变为必选的:

``` ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // OK

const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
```

### Omit<T,K>

从 `T` 从中移除 `K` 类型:

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
