import{_ as n,r as d,o as t,c,a as e,b as i,w as o,F as r,e as l,d as h}from"./app.7e3542fd.js";const u={},s=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),l(" Webpack")],-1),p=e("p",null,[e("strong",null,"\u76EE\u5F55")],-1),b={class:"table-of-contents"},k=l("\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 webpack/bundle\u5DE5\u5177\uFF1F"),_=l("module\u3001chunk\u3001bundle \u5206\u522B\u662F\u4EC0\u4E48\uFF1F"),f=l("loader \u548C plugin \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u6709\u81EA\u5DF1\u5B9E\u73B0\u8FC7\u5417\uFF1F"),m=l("webpack \u5B9E\u73B0\u61D2\u52A0\u8F7D"),w=l("webpack \u4F18\u5316\u9879"),g=l("babel-runtime \u548C babel-polyfill"),S=l("\u4EC0\u4E48\u662F Tree-Shaking"),x=l("rollup \u548C webpack \u6709\u4EC0\u4E48\u533A\u522B\uFF1F"),y=l("ESModule \u548C commonJS \u6709\u4EC0\u4E48\u533A\u522B"),T=l("\u4E3A\u4EC0\u4E48\u8981\u642D\u5EFA\u811A\u624B\u67B6\uFF0C\u811A\u624B\u67B6\u6709\u4EC0\u4E48\u7528\uFF1F"),E=l("\u5F00\u542F\u591A\u7EBF\u7A0B\u6709\u4EC0\u4E48\u5F71\u54CD"),W=h('<h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-webpack-bundle\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-webpack-bundle\u5DE5\u5177" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 webpack/bundle\u5DE5\u5177\uFF1F</h2><ol><li>\u652F\u6301\u6A21\u5757\u5316\u5F00\u53D1</li><li>\u4F7F\u4EE3\u7801\u4F53\u79EF\u66F4\u5C0F. \u7528\u6237\u9700\u8981\u52A0\u8F7D\u7684\u8D44\u6E90\u66F4\u5C11\uFF0C\u8BBF\u95EE\u901F\u5EA6\u81EA\u7136\u5C31\u66F4\u5FEB\u3002(\u5173\u952E\u5B57: tree-shaking\u3001\u538B\u7F29\u3001\u5408\u5E76)</li><li>\u5C06\u9AD8\u7EA7\u8BED\u8A00\u7F16\u8BD1\u4E3A\u6D4F\u89C8\u5668\u9002\u7528\u7684\u7248\u672C\u3002\u6BD4\u5982\u6A21\u5757\u5316\u5F00\u53D1\u3001ts to js\u3001es6+ \u5411\u4E0B\u517C\u5BB9\u3001css \u9884\u5904\u7406\u5668\u7F16\u8BD1\u3002</li><li>\u517C\u5BB9\u6027\u5904\u7406\u3002(\u5173\u952E\u5B57: ployfill\u3001postcss \u7B49)</li></ol><h2 id="module\u3001chunk\u3001bundle-\u5206\u522B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#module\u3001chunk\u3001bundle-\u5206\u522B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> module\u3001chunk\u3001bundle \u5206\u522B\u662F\u4EC0\u4E48\uFF1F</h2><ul><li>module: \u6E90\u7801\u6587\u4EF6\uFF0C\u4E00\u5207\u8D44\u6E90\u7686\u6A21\u5757</li><li>chunk: \u591A\u4E2A\u6A21\u5757\u7684\u7ED3\u5408\u4F53</li><li>bundle: \u6700\u7EC8\u8F93\u51FA\u7684\u6587\u4EF6</li></ul><h2 id="loader-\u548C-plugin-\u6709\u4EC0\u4E48\u533A\u522B-\u6709\u81EA\u5DF1\u5B9E\u73B0\u8FC7\u5417" tabindex="-1"><a class="header-anchor" href="#loader-\u548C-plugin-\u6709\u4EC0\u4E48\u533A\u522B-\u6709\u81EA\u5DF1\u5B9E\u73B0\u8FC7\u5417" aria-hidden="true">#</a> loader \u548C plugin \u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u6709\u81EA\u5DF1\u5B9E\u73B0\u8FC7\u5417\uFF1F</h2><p>loader \u662F\u6A21\u5757\u8F6C\u6362\u5668\uFF0C\u4F7F webpack \u53EF\u4EE5\u8BC6\u522B\u9664 js \u5916\u7684\u8D44\u6E90\u3002 plugin \u662F\u6269\u5C55\u5305\uFF0C\u5185\u90E8\u96C6\u6210\u4E86\u67D0\u4E2A\u4E3B\u9898\u7684\u903B\u8F91\u3002\u4F8B\u5982 <code>html-webpack-plugin</code> \u4E3B\u8981\u5904\u7406 <code>HTML</code> \u76F8\u5173\u7684\u63D2\u4EF6\u3002</p><h2 id="webpack-\u5B9E\u73B0\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#webpack-\u5B9E\u73B0\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> webpack \u5B9E\u73B0\u61D2\u52A0\u8F7D</h2><p>Webpack \u5B9E\u73B0\u61D2\u52A0\u8F7D\u7684\u65B9\u5F0F\u4E3B\u8981\u662F\u901A\u8FC7\u4EE3\u7801\u5206\u5272\uFF08code splitting\uFF09\u6765\u5B9E\u73B0\u7684\u3002Webpack \u4F1A\u6839\u636E\u4EE3\u7801\u7684\u4F9D\u8D56\u5173\u7CFB\u81EA\u52A8\u8FDB\u884C\u4EE3\u7801\u5206\u5272\uFF0C\u5E76\u5C06\u4E0D\u540C\u7684\u4EE3\u7801\u5757\u6253\u5305\u5230\u4E0D\u540C\u7684\u6587\u4EF6\u4E2D\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u3002</p><p>\u5728\u4EE3\u7801\u5C42\u9762\u4E0A\u53EF\u4EE5\u4F7F\u7528 <code>import()</code> \u52A8\u6001\u5F15\u7528\u6587\u4EF6\u5B9E\u73B0\u540C\u6B65\u4EE3\u7801\u5206\u9694\uFF1B\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u5C42\u9762\u4E0A\uFF0C\u4FEE\u6539 <code>optimization.splitChunks</code> \u6765\u5B9E\u73B0\u5F02\u6B65\u4EE3\u7801\u5206\u5272\u3002\u8FD9\u6837\u53EF\u4EE5\u5C06\u4EE3\u7801\u5206\u5272\u6210\u591A\u4E2A\u6587\u4EF6\uFF0C\u5E76\u5728\u9700\u8981\u7684\u65F6\u5019\u624D\u53BB\u52A0\u8F7D\u8FD9\u4E9B\u6587\u4EF6\u3002</p><h2 id="webpack-\u4F18\u5316\u9879" tabindex="-1"><a class="header-anchor" href="#webpack-\u4F18\u5316\u9879" aria-hidden="true">#</a> webpack \u4F18\u5316\u9879</h2><p>\u7EC6\u8282\u4F18\u5316:</p><ul><li>\u4F18\u5316 loader \u7684\u914D\u7F6E</li><li>\u4F7F\u7528 IgnorePlugin\uFF0C\u5FFD\u7565\u7B2C\u4E09\u65B9\u5305\u6307\u5B9A\u76EE\u5F55\uFF0C\u8BA9\u8FD9\u4E9B\u6307\u5B9A\u76EE\u5F55\u4E0D\u8981\u88AB\u6253\u5305\u8FDB\u53BB</li><li>\u4F7F\u7528 noParse</li><li>HappyPack</li><li>ParalleUgllifyPlugin</li></ul><p>\u8D44\u6E90\u4F18\u5316:</p><ul><li>mode \u4F7F\u7528 production \u6A21\u5F0F\uFF0C\u8BE5\u6A21\u5F0F\u4F1A\u81EA\u52A8\u5F00\u542F\u4EE3\u7801\u538B\u7F29\u3002\u7B2C\u4E09\u65B9\u5E93\u4F1A\u79FB\u9664\u5F00\u53D1\u8C03\u8BD5\u4EE3\u7801\uFF0C\u81EA\u52A8\u4F7F\u7528 tree-shaking(\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF).</li><li>\u5C0F\u56FE\u7247\u8F6C\u4E3A base64</li><li>bundle \u52A0 hash \u8FDB\u884C\u7F13\u5B58</li><li>\u4F7F\u7528 cache, \u63D0\u53D6\u516C\u5171\u4EE3\u7801</li><li>\u6253\u5305\u540E\u7684\u8D44\u6E90\u4E0A CDN</li></ul><p>\u5176\u4ED6\uFF1A</p><ul><li>\u81EA\u52A8\u5237\u65B0</li><li>\u61D2\u52A0\u8F7D</li><li>Scope Hosting</li></ul><h2 id="babel-runtime-\u548C-babel-polyfill" tabindex="-1"><a class="header-anchor" href="#babel-runtime-\u548C-babel-polyfill" aria-hidden="true">#</a> babel-runtime \u548C babel-polyfill</h2><p>babel \u7684\u4F5C\u7528\u5C31\u662F\u4F7F\u65B0\u7248\u672C\u7684 ES \u8BED\u6CD5\u53EF\u4EE5\u517C\u5BB9\u5230\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u3002babel \u53EA\u89E3\u6790\u8BED\u6CD5\uFF0C\u5982\u679C\u6709\u65B0\u7684\u529F\u80FD\u51FA\u73B0\uFF0C\u5219\u9700\u8981\u5F15\u5165 <code>polyfill</code> \u8FDB\u884C\u6253\u8865\u4E01\u3002</p><p>babel-polyfill \u7531\u4E8E\u672C\u8EAB\u4F53\u79EF\u8FC7\u5927\uFF0C\u6700\u4F73\u5B9E\u8DF5\u662F\u6309\u9700\u5F15\u5165\u6240\u9700\u7684 <code>polyfill</code>\u3002</p><h2 id="\u4EC0\u4E48\u662F-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-tree-shaking" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Tree-Shaking</h2><p>Tree-Shaking \u53EF\u4EE5\u901A\u8FC7\u9759\u6001\u5206\u6790\u4EE3\u7801\u6765\u786E\u5B9A\u54EA\u4E9B\u6A21\u5757\u4E2D\u7684\u4EE3\u7801\u6CA1\u6709\u88AB\u4F7F\u7528\u5230\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u672A\u4F7F\u7528\u7684\u4EE3\u7801\u4ECE\u6700\u7EC8\u7684\u6253\u5305\u6587\u4EF6\u4E2D\u5254\u9664\uFF0C\u4ECE\u800C\u51CF\u5C11\u6587\u4EF6\u4F53\u79EF\u3002\u8FD9\u5BF9\u4E8E\u63D0\u9AD8\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u548C\u51CF\u5C11\u52A0\u8F7D\u65F6\u95F4\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><p>\u5728 Webpack \u4E2D\uFF0CTree-Shaking \u4E3B\u8981\u901A\u8FC7\u4F7F\u7528 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\u6765\u5B9E\u73B0\u3002Webpack \u53EF\u4EE5\u901A\u8FC7\u5BF9\u4EE3\u7801\u8FDB\u884C\u9759\u6001\u5206\u6790\uFF0C\u786E\u5B9A\u54EA\u4E9B\u6A21\u5757\u4E2D\u7684\u4EE3\u7801\u6CA1\u6709\u88AB\u4F7F\u7528\u5230\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u672A\u4F7F\u7528\u7684\u4EE3\u7801\u4ECE\u6700\u7EC8\u7684\u6253\u5305\u6587\u4EF6\u4E2D\u5254\u9664\u3002\u4E3A\u4E86\u786E\u4FDD Tree-Shaking \u751F\u6548\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u5728 Webpack \u914D\u7F6E\u4E2D\u542F\u7528 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\uFF0C\u4EE5\u53CA\u4F7F\u7528\u4E00\u4E9B\u652F\u6301 Tree-Shaking \u7684\u5DE5\u5177\u548C\u5E93\u3002</p><p>\u7B80\u8A00\u4E4B\uFF1ATree-Shaking \u662F\u4E00\u79CD\u901A\u8FC7\u9759\u6001\u5206\u6790\u4EE3\u7801\uFF0C\u53EA\u6253\u5305\u5F15\u7528\u5230\u7684\u6A21\u5757\uFF0C\u4ECE\u800C\u51CF\u5C11\u6700\u7EC8\u6253\u5305\u6587\u4EF6\u4F53\u79EF\u7684\u6280\u672F\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u548C\u51CF\u5C11\u52A0\u8F7D\u65F6\u95F4\u3002</p><h2 id="rollup-\u548C-webpack-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#rollup-\u548C-webpack-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> rollup \u548C webpack \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>Rollup \u4E3B\u8981\u4E13\u6CE8\u6253\u5305\uFF0C\u6253\u5305\u540E size \u4F1A\u975E\u5E38\u5C0F\u3002webpack \u529F\u80FD\u591A\u800C\u6742\u4F46\u8FC7\u4E8E\u590D\u6742\u3002</p><h2 id="esmodule-\u548C-commonjs-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#esmodule-\u548C-commonjs-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> ESModule \u548C commonJS \u6709\u4EC0\u4E48\u533A\u522B</h2><ul><li>ESModule: \u9759\u6001\u5F15\u5165\uFF0C\u7F16\u8BD1\u65F6\u5F15\u5165\u3002</li><li>commonJS: \u52A8\u6001\u5F15\u5165\uFF0C\u8FD0\u884C\u65F6\u5F15\u5165\u3002</li></ul><h2 id="\u4E3A\u4EC0\u4E48\u8981\u642D\u5EFA\u811A\u624B\u67B6-\u811A\u624B\u67B6\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u642D\u5EFA\u811A\u624B\u67B6-\u811A\u624B\u67B6\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u642D\u5EFA\u811A\u624B\u67B6\uFF0C\u811A\u624B\u67B6\u6709\u4EC0\u4E48\u7528\uFF1F</h2><ol><li>\u7EDF\u4E00\u5F00\u53D1\u73AF\u5883</li><li>\u7EDF\u4E00\u6784\u5EFA\u6D41\u7A0B\u548C\u4EA7\u51FA\u6807\u51C6</li><li>\u4F7F\u7528 eslint \u4E4B\u7C7B\u7684\u5DE5\u5177\u7EA6\u675F\u56E2\u961F\u6210\u5458\u5F00\u53D1</li></ol><h2 id="\u5F00\u542F\u591A\u7EBF\u7A0B\u6709\u4EC0\u4E48\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u591A\u7EBF\u7A0B\u6709\u4EC0\u4E48\u5F71\u54CD" aria-hidden="true">#</a> \u5F00\u542F\u591A\u7EBF\u7A0B\u6709\u4EC0\u4E48\u5F71\u54CD</h2><ul><li>\u9879\u76EE\u8F83\u5927: \u6253\u5305\u8F83\u6162\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u80FD\u63D0\u9AD8\u901F\u5EA6</li><li>\u9879\u76EE\u8F83\u5C0F: \u6253\u5305\u5F88\u5FEB\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u4F1A\u964D\u4F4E\u901F\u5EA6(\u8FDB\u7A0B\u5F00\u9500)</li></ul><p>\u591A\u7EBF\u7A0B\u5E94\u6839\u636E\u5B9E\u9645\u9879\u76EE\u7684\u60C5\u51B5\u800C\u4F7F\u7528\u3002</p>',32);function j(N,P){const a=d("RouterLink");return t(),c(r,null,[s,p,e("nav",b,[e("ul",null,[e("li",null,[i(a,{to:"#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-webpack-bundle\u5DE5\u5177"},{default:o(()=>[k]),_:1})]),e("li",null,[i(a,{to:"#module\u3001chunk\u3001bundle-\u5206\u522B\u662F\u4EC0\u4E48"},{default:o(()=>[_]),_:1})]),e("li",null,[i(a,{to:"#loader-\u548C-plugin-\u6709\u4EC0\u4E48\u533A\u522B-\u6709\u81EA\u5DF1\u5B9E\u73B0\u8FC7\u5417"},{default:o(()=>[f]),_:1})]),e("li",null,[i(a,{to:"#webpack-\u5B9E\u73B0\u61D2\u52A0\u8F7D"},{default:o(()=>[m]),_:1})]),e("li",null,[i(a,{to:"#webpack-\u4F18\u5316\u9879"},{default:o(()=>[w]),_:1})]),e("li",null,[i(a,{to:"#babel-runtime-\u548C-babel-polyfill"},{default:o(()=>[g]),_:1})]),e("li",null,[i(a,{to:"#\u4EC0\u4E48\u662F-tree-shaking"},{default:o(()=>[S]),_:1})]),e("li",null,[i(a,{to:"#rollup-\u548C-webpack-\u6709\u4EC0\u4E48\u533A\u522B"},{default:o(()=>[x]),_:1})]),e("li",null,[i(a,{to:"#esmodule-\u548C-commonjs-\u6709\u4EC0\u4E48\u533A\u522B"},{default:o(()=>[y]),_:1})]),e("li",null,[i(a,{to:"#\u4E3A\u4EC0\u4E48\u8981\u642D\u5EFA\u811A\u624B\u67B6-\u811A\u624B\u67B6\u6709\u4EC0\u4E48\u7528"},{default:o(()=>[T]),_:1})]),e("li",null,[i(a,{to:"#\u5F00\u542F\u591A\u7EBF\u7A0B\u6709\u4EC0\u4E48\u5F71\u54CD"},{default:o(()=>[E]),_:1})])])]),W],64)}var C=n(u,[["render",j],["__file","webpack.html.vue"]]);export{C as default};
