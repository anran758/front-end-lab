import{_ as r,r as t,o as i,c as l,a as n,b as s,F as p,d as o,e as a}from"./app.7e3542fd.js";const c={},d=o(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h1><p>\u7740\u91CD\u8BB0\u5F55 Typescript \u7C7B\u578B\u76F8\u5173\u7684\u7B14\u8BB0\u3002</p><h2 id="\u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B" aria-hidden="true">#</a> \u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B</h2><h3 id="partial-t" tabindex="-1"><a class="header-anchor" href="#partial-t" aria-hidden="true">#</a> Partial&lt;T&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u8F6C\u4E3A\u53EF\u9009\u9879:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial&lt;Todo&gt;) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: &quot;organize desk&quot;,
  description: &quot;clear clutter&quot;,
};

const todo2 = updateTodo(todo1, {
  description: &quot;throw out trash&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="required-t" tabindex="-1"><a class="header-anchor" href="#required-t" aria-hidden="true">#</a> Required&lt;T&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // OK

const obj2: Required&lt;Props&gt; = { a: 5 }; // Error: property &#39;b&#39; missing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="omit-t-k" tabindex="-1"><a class="header-anchor" href="#omit-t-k" aria-hidden="true">#</a> Omit&lt;T,K&gt;</h3><p>\u4ECE\u7C7B\u578B <code>T</code> \u4ECE\u4E2D\u79FB\u9664 <code>K</code> \u5C5E\u6027:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// \u591A\u4E2A\u5C5E\u6027\u7528 | \u5206\u9694
type TodoPreview = Omit&lt;Todo, &quot;description&quot; | &quot;completed&quot;&gt;;

const todo: TodoPreview = {
  title: &quot;Clean room&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="pick-t-k" tabindex="-1"><a class="header-anchor" href="#pick-t-k" aria-hidden="true">#</a> Pick&lt;T,K&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u4E2D\u63D0\u53D6\u51FA <code>K</code> \u5C5E\u6027\u6765\u6784\u9020\u4E00\u4E2A\u65B0\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick&lt;Todo, &quot;title&quot; | &quot;completed&quot;&gt;;

const todo: TodoPreview = {
  title: &quot;Clean room&quot;,
  completed: false,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="readonly-t" tabindex="-1"><a class="header-anchor" href="#readonly-t" aria-hidden="true">#</a> Readonly&lt;T&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u90FD\u8BBE\u4E3A <code>readonly</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F7F\u7528\u8BE5\u6CDB\u578B\u540E\u5C31\u53EA\u80FD\u8BFB\u4E0D\u80FD\u5199\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
}

const todo: Readonly&lt;Todo&gt; = {
  title: &quot;Todo&quot;,
};

// \u6539\u4E0D\u5F97
todo.title = &quot;Hello&quot;; // Error: cannot reassign a readonly property
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u7279\u6B8A\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u573A\u666F" aria-hidden="true">#</a> \u7279\u6B8A\u573A\u666F</h2><p><strong>\u79FB\u9664\u51FD\u6570\u9996\u4F4D\u53C2\u6570</strong>: \u5728\u505A\u95ED\u5305\u6216\u8005\u67EF\u91CC\u5316\u65F6\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u505A\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>export type RemoveFirst&lt;T extends any[]&gt; = T extends [any, ...infer Rest]
  ? Rest
  : never;

export type OmitFirstParamFunction&lt;F extends (...args: any) =&gt; any&gt; = (
  ...args: RemoveFirst&lt;Parameters&lt;F&gt;&gt;
) =&gt; ReturnType&lt;F&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5728-javascript-\u9879\u76EE\u4E2D\u4F7F\u7528-typescript" tabindex="-1"><a class="header-anchor" href="#\u5728-javascript-\u9879\u76EE\u4E2D\u4F7F\u7528-typescript" aria-hidden="true">#</a> \u5728 JavaScript \u9879\u76EE\u4E2D\u4F7F\u7528 TypeScript</h2><p>\u53C2\u8003\u8D44\u6599\uFF1A</p>`,23),b={href:"https://www.typescriptlang.org/zh/play#example/jsdoc-support",target:"_blank",rel:"noopener noreferrer"},u=a("jsdoc-support guide"),m={href:"https://code.visualstudio.com/docs/nodejs/working-with-javascript#_global-variables-and-type-checking",target:"_blank",rel:"noopener noreferrer"},h=a("vscode guide");function g(v,y){const e=t("ExternalLinkIcon");return i(),l(p,null,[d,n("ol",null,[n("li",null,[n("a",b,[u,s(e)])]),n("li",null,[n("a",m,[h,s(e)])])])],64)}var f=r(c,[["render",g],["__file","typescript.html.vue"]]);export{f as default};
