import{_ as r,r as t,o as l,c as i,a as n,b as s,F as p,d as o,e as a}from"./app.4a7482f4.js";const c={},d=o(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h1><h2 id="\u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B" aria-hidden="true">#</a> \u5E38\u89C1\u5185\u7F6E\u5DE5\u5177\u6CDB\u578B</h2><h3 id="partial-t" tabindex="-1"><a class="header-anchor" href="#partial-t" aria-hidden="true">#</a> Partial&lt;T&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u8F6C\u4E3A\u53EF\u9009\u9879:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial&lt;Todo&gt;) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: &quot;organize desk&quot;,
  description: &quot;clear clutter&quot;
};

const todo2 = updateTodo(todo1, {
  description: &quot;throw out trash&quot;
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

type TodoPreview = Pick&lt;Todo, &#39;title&#39; | &#39;completed&#39;&gt;;

const todo: TodoPreview = {
  title: &#39;Clean room&#39;,
  completed: false,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="readonly-t" tabindex="-1"><a class="header-anchor" href="#readonly-t" aria-hidden="true">#</a> Readonly&lt;T&gt;</h3><p>\u5C06\u7C7B\u578B <code>T</code> \u7684\u6240\u6709\u5C5E\u6027\u90FD\u8BBE\u4E3A <code>readonly</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F7F\u7528\u8BE5\u6CDB\u578B\u540E\u5C31\u53EA\u80FD\u8BFB\u4E0D\u80FD\u5199\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Todo {
  title: string;
}

const todo: Readonly&lt;Todo&gt; = {
  title: &#39;Todo&#39;,
};

// \u6539\u4E0D\u5F97
todo.title = &#39;Hello&#39;; // Error: cannot reassign a readonly property
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5728-js-\u9879\u76EE\u4E2D\u4F7F\u7528-ts" tabindex="-1"><a class="header-anchor" href="#\u5728-js-\u9879\u76EE\u4E2D\u4F7F\u7528-ts" aria-hidden="true">#</a> \u5728 js \u9879\u76EE\u4E2D\u4F7F\u7528 ts</h2><p>\u53C2\u8003\u8D44\u6599\uFF1A</p>`,19),b={href:"https://www.typescriptlang.org/zh/play#example/jsdoc-support",target:"_blank",rel:"noopener noreferrer"},u=a("jsdoc-support"),m={href:"https://code.visualstudio.com/docs/nodejs/working-with-javascript#_global-variables-and-type-checking",target:"_blank",rel:"noopener noreferrer"},h=a("vscode");function g(v,T){const e=t("ExternalLinkIcon");return l(),i(p,null,[d,n("ol",null,[n("li",null,[n("a",b,[u,s(e)])]),n("li",null,[n("a",m,[h,s(e)])])])],64)}var y=r(c,[["render",g],["__file","typescript.html.vue"]]);export{y as default};
