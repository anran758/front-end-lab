import{_ as r,r as l,o as i,c as p,a as e,b as m,F as o,d as s,e as n}from"./app.4a7482f4.js";const t={},c=s(`<h1 id="\u5E38\u89C1\u9519\u8BEF\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF\u65E5\u5FD7" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF\u65E5\u5FD7</h1><h2 id="npm-\u53D1\u5E03\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#npm-\u53D1\u5E03\u5931\u8D25" aria-hidden="true">#</a> npm \u53D1\u5E03\u5931\u8D25</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  module-test git:(master) npm publish
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! [no_perms] Private mode enable, only admin can publish this module [no_perms] Private mode enable, only admin can publish this mod
ule: module-test
****
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6CA1\u6709\u6743\u9650\u7684\u539F\u56E0\u53EF\u80FD\u662F\u6211\u4EEC\u6309\u7167\u4E86\u6DD8\u5B9D\u7684<code>npm</code>\u955C\u50CF\uFF0C\u53D1\u5E03\u901A\u8FC7\u955C\u50CF\u4EE3\u7406\uFF0C\u5C31\u4F1A\u6709\u6743\u9650\u95EE\u9898\u3002\u8FD9\u65F6\u5019\u5C06\u6743\u9650\u8C03\u6574\u56DE\u6765\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  module-test git:(master) npm config set registry http://registry.npmjs.org

\u279C  module-test git:(master) npm publish
npm ERR! code ENEEDAUTH
npm ERR! need auth auth required for publishing
npm ERR! need auth You need to authorize this machine using \`npm adduser\`

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/anran/.npm/_logs/2019-04-27T13_56_25_234Z-debug.log

# \u6DFB\u52A0\u8D26\u53F7
\u279C  module-test git:(master) npm adduser
Username: anran758
Password:
Email: (this IS public) anran758@gmail.com
Logged in as anran758 on http://registry.npmjs.org/.

# \u9A8C\u8BC1\u90AE\u7BB1
\u279C  module-test git:(master) npm publish
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! you must verify your email before publishing a new package: https://www.npmjs.com/email-edit : module-test

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/anran/.npm/_logs/2019-04-27T14_09_30_297Z-debug.log

\u279C  module-test git:(master) npm publish
+ module-test@1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="npm-\u5B89\u88C5\u4F9D\u8D56\u62A5\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#npm-\u5B89\u88C5\u4F9D\u8D56\u62A5\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898" aria-hidden="true">#</a> npm \u5B89\u88C5\u4F9D\u8D56\u62A5\u6743\u9650\u4E0D\u8DB3\u7684\u95EE\u9898</h2>`,6),d=n("\u5982\u679C\u5728\u5B89\u88C5\u4F9D\u8D56\u65F6\u53D1\u73B0\u9519\u8BEF\u4E2D\u7531\u4EE5\u4E0B\u9519\u8BEF, \u53EF\u4EE5\u5C1D\u8BD5\u901A\u8FC7"),b={href:"https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md",target:"_blank",rel:"noopener noreferrer"},u=n("\u6B64\u6307\u5357"),h=n("\u89E3\u51B3\u95EE\u9898:"),g=s(`<div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code>Please try running this command again as root/Administrator. npm
(node:10370) UnhandledPromiseRejectionWarning: Error: EACCES: permission denied, open &#39;/Users/anran/.zshrc&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u662F\u5728\u9879\u76EE\u5185\u78B0\u89C1\u6743\u9650\u95EE\u9898\uFF0C\u53EF\u4EE5\u5148\u68C0\u67E5\u662F\u4E0D\u662F <code>node_modules</code> \u6240\u5C5E\u6743\u9650\u662F <code>root</code> \u7684\uFF0C\u5982\u662F\u5E94\u8BE5\u8C03\u6574\u4E3A\u5F53\u524D\u7528\u6237\u624D\u5BF9(macOS \u73AF\u5883)\u3002</p>`,2);function _(R,E){const a=l("ExternalLinkIcon");return i(),p(o,null,[c,e("p",null,[d,e("a",b,[u,m(a)]),h]),g],64)}var v=r(t,[["render",_],["__file","issue.html.vue"]]);export{v as default};
