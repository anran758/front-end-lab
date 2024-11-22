import{_ as r,r as t,o,c as l,a as e,b as s,F as c,e as n,d as i}from"./app.7e3542fd.js";const d={},p=e("h1",{id:"react",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),n(" React")],-1),u=n("[x] "),b={href:"https://anran758.github.io/blog/2020/10/31/react-retrospection/",target:"_blank",rel:"noopener noreferrer"},m=n("React \u77E5\u8BC6\u56DE\u987E (\u4F7F\u7528\u7BC7)"),h=n(" (\u751F\u547D\u5468\u671F\u3001\u7EC4\u4EF6\u901A\u4FE1\u3001Hooks \u7B49)"),x=n("[x] "),_={href:"https://anran758.github.io/blog/2020/11/04/react-retrospection-2/",target:"_blank",rel:"noopener noreferrer"},g=n("React \u77E5\u8BC6\u56DE\u987E (\u4F18\u5316\u7BC7)"),f=e("li",null,"[ ] redux\u3001redux-sage \u603B\u7ED3",-1),v=e("li",null,"[ ] router \u76F8\u5173\u603B\u7ED3",-1),R=i(`<h2 id="\u6CE8\u610F\u4E8B\u9879\u4E0E\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879\u4E0E\u6280\u5DE7" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879\u4E0E\u6280\u5DE7</h2><ol><li>React \u7EC4\u4EF6\u9700\u8981\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u6807\u7B7E\u624D\u80FD\u6B63\u5E38\u89E3\u6790</li><li>React \u662F\u54CD\u5E94\u5F0F\u6846\u67B6\uFF0C\u53EA\u9700\u8981\u5173\u5FC3\u6570\u636E</li><li>React \u7ED1\u5B9A\u4E8B\u4EF6\u540D\u662F\u9A7C\u5CF0\u5F0F</li><li>React \u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539 state \u7684\u6570\u636E\uFF0C\u56E0\u4E3A\u4F1A\u5BF9\u6027\u80FD\u6709\u5F71\u54CD</li><li>React \u662F\u5355\u5411\u6570\u636E\u6D41\uFF0C\u662F\u89C6\u56FE\u5C42\u6846\u67B6\uFF0C\u53EA\u89E3\u51B3\u89C6\u56FE\u548C\u6570\u636E\u6E32\u67D3\u65B9\u9762</li><li>jsx/tsx \u4E00\u4E2A\u7EC4\u4EF6\u5185\u9700\u8981\u5305\u88F9\u4E00\u4E2A\u5143\u7D20\uFF0C\u4F46\u5982\u679C\u8FD9\u4E2A\u7EC4\u4EF6\u5185\u4F60\u4E0D\u60F3\u518D\u6700\u5916\u5C42\u989D\u5916\u5305\u4E00\u4E2A <code>&lt;div&gt;</code> \u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>&lt;Fragment&gt;&lt;/Fragment&gt;</code> \u5360\u4F4D\u7B26\uFF0C\u6216\u8005\u5B83\u7684\u7B80\u5199\u5F62\u5F0F <code>&lt;&gt;&lt;/&gt;</code>\u3002</li><li>\u5F53\u7EC4\u4EF6\u7684 state \u6216\u8005 props \u53D1\u751F\u6539\u53D8\u65F6\uFF0Crender \u51FD\u6570\u5C31\u4F1A\u91CD\u65B0\u6267\u884C\u3002</li></ol><h2 id="\u5C55\u793A\u578B\u7EC4\u4EF6\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A\u578B\u7EC4\u4EF6\u7279\u70B9" aria-hidden="true">#</a> \u5C55\u793A\u578B\u7EC4\u4EF6\u7279\u70B9</h2><ol><li>\u5173\u5FC3\u6570\u636E\u7684\u5C55\u793A\u65B9\u5F0F</li><li>\u4E0D\u4F9D\u8D56 APP \u7684\u5176\u4ED6\u6587\u4EF6</li><li>\u4E0D\u5173\u5FC3\u6570\u636E\u662F\u5982\u4F55\u52A0\u88C5\u548C\u53D8\u5316</li><li>\u4EC5\u901A\u8FC7 props \u63A5\u53D7\u6570\u636E\u548C\u56DE\u8C03</li><li>\u901A\u5E38\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6</li></ol><h2 id="react-\u5E38\u7528\u5E93" tabindex="-1"><a class="header-anchor" href="#react-\u5E38\u7528\u5E93" aria-hidden="true">#</a> React \u5E38\u7528\u5E93</h2><p>React \u4E2D\u53EF\u80FD\u4F1A\u4F7F\u7528\u5230\u7684\u5E38\u89C1\u5E93\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u6280\u672F\u9009\u9879\u4E2D\u53C2\u8003\u3002</p><ol><li>styled-components: \u4F7F\u7528 js \u7BA1\u7406\u6837\u5F0F\u51B2\u7A81</li><li>immutable.js \u751F\u6210\u4E00\u4E2A <code>immutable</code> \u5BF9\u8C61\uFF0C\u8BBE\u7F6E\u7684\u8BDD\u4F1A\u8FD4\u56DE\u5168\u65B0\u7684\u5BF9\u8C61</li></ol><h3 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> react-router</h3><p>react-router \u7684 <code>exact</code> \u53EA\u8DDF\u8DEF\u5F84\u5B8C\u5168\u76F8\u7B49\u624D\u663E\u793A\u51FA\u6765</p><h3 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h3><p>React-Redux \u662F Redux \u7684\u5B98\u65B9 React UI \u7ED1\u5B9A\u5C42\u3002\u5B83\u8BA9 React \u7EC4\u4EF6\u4ECE Redux \u5B58\u50A8\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u5E76\u5C06\u64CD\u4F5C\u5206\u6D3E\u5230\u5B58\u50A8\u4EE5\u66F4\u65B0\u72B6\u6001\u3002</p><p>React-redux \u7684 <code>Provider</code> \u662F\u4E00\u4E2A\u63D0\u4F9B\u5668, \u5B83\u5C06 <code>store</code> \u63D0\u4F9B\u7ED9\u6BCF\u4E2A\u5185\u90E8\u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// index.js
import React from &quot;react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import TodoApp from &quot;./TodoApp&quot;;

import { Provider } from &quot;react-redux&quot;;
import store from &quot;./redux/store&quot;;

// As of React 18
const root = ReactDOM.createRoot(document.getElementById(&quot;root&quot;));
root.render(
  &lt;Provider store={store}&gt;
    &lt;TodoApp /&gt;
  &lt;/Provider&gt;,
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7EC4\u4EF6\u5185\u90E8\u53EF\u901A\u8FC7 <code>connect</code> \u51FD\u6570\u505A\u8FDE\u63A5, \u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// redux/actions.js
import { ADD_TODO } from &quot;./actionTypes&quot;;

let nextTodoId = 0;
export const addTodo = (content) =&gt; ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

// ... other actions
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// components/AddTodo.js

import { connect } from &quot;react-redux&quot;;
import { addTodo } from &quot;../redux/actions&quot;;
// ... other imports

class AddTodo extends React.Component {
  // ... component implementation
}

export default connect(null, { addTodo })(AddTodo);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,16);function q(j,T){const a=t("ExternalLinkIcon");return o(),l(c,null,[p,e("ul",null,[e("li",null,[u,e("a",b,[m,s(a)]),h]),e("li",null,[x,e("a",_,[g,s(a)])]),f,v]),R],64)}var D=r(d,[["render",q],["__file","react.html.vue"]]);export{D as default};
