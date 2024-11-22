import{_ as e,d as n}from"./app.7e3542fd.js";const a={},s=n(`<h1 id="\u5C0F\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F</h1><p>\u5C0F\u7A0B\u5E8F\u4E0E<code>React</code>\u3001<code>Vue</code> \u4E4B\u95F4\u6709\u5F88\u591A\u5171\u901A\u4E4B\u5904\uFF0C\u5C06\u4E00\u4E9B\u6982\u5FF5\u8F6C\u6362\u8FC7\u6765\u53EF\u4EE5\u5FEB\u901F\u878D\u5165\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u601D\u8DEF\uFF1A</p><ol><li><p>\u5C0F\u7A0B\u5E8F\u4E5F\u6709\u751F\u547D\u5468\u671F\uFF0C\u4E00\u822C\u4F1A\u5728 <code>onLoad</code> \u5904\u7406\u8BF7\u6C42\u63A5\u53E3\uFF0C\u56E0\u4E3A\u5B83\u662F\u6700\u89E6\u53D1\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002</p></li><li><p>\u5728\u5C0F\u7A0B\u5E8F\u4E2D\u4F7F\u7528 <code>import</code> \u8BED\u6CD5\u65F6\uFF0C\u8981\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u80FD\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84(\u5982\u8BBF\u95EE\u6839\u76EE\u5F55 <code>/</code> ), \u5426\u5219\u4F1A\u629B\u9519\u3002</p></li><li><p>\u5728\u7EC4\u4EF6\u4E0A\uFF0C\u5C0F\u7A0B\u5E8F\u7684 <code>this.triggerEvent</code> \u76F8\u5F53\u4E8E <code>vue</code> \u7684 <code>this.$emit</code>, \u901A\u8FC7\u8C03\u7528 API \u6765\u901A\u77E5\u7236\u7EC4\u4EF6\u6709\u4E8B\u4EF6\u89E6\u53D1\u3002</p></li><li><p>\u53EA\u6709\u8DDF <code>wxml</code> \u5185\u6709\u7ED1\u5B9A\u7684\u53D8\u91CF\u624D\u9700\u8981\u653E\u5728 <code>this.data</code> \u4E2D\uFF0C\u5176\u4F59\u7684\u653E\u5728 <code>this</code> \u91CC\u3002\u8FD9\u6837\u80FD\u51CF\u8F7B\u6E32\u67D3\u7684\u538B\u529B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Page({
  /**
   * \u9875\u9762\u7684\u521D\u59CB\u6570\u636E
   */
  data: {
    // \u9700\u8981\u8DDF wxml \u6A21\u677F\u7ED1\u5B9A\u7684\u6570\u636E
    gifts: {},
  },

  // timer \u53EA\u662F\u7528\u4E8E\u50A8\u5B58\u5B9A\u65F6\u5668\uFF0C\u4E0D\u9700\u8981\u5728\u9875\u9762\u4E2D\u6E32\u67D3
  _timer: null,

  /**
   * \u9875\u9762\u7684\u65B9\u6CD5\u5217\u8868
   */
  methods: {
    /* ... */
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ol><h2 id="\u7EC4\u4EF6\u8BBE\u8BA1\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u8BBE\u8BA1\u6307\u5357" aria-hidden="true">#</a> \u7EC4\u4EF6\u8BBE\u8BA1\u6307\u5357</h2><ol><li>\u4E0D\u8FDD\u53CD\u7EC4\u4EF6\u5C01\u88C5\u539F\u5219\uFF0C\u63D0\u4F9B\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F\u7684\u673A\u5236</li><li>\u4F7F\u7528\u5916\u90E8\u6837\u5F0F\u547D\u540D\u53EF\u4EE5\u4EE5 <code>.ex-</code> \u4E3A\u5F00\u5934\u4F5C\u4E3A\u6807\u8BC6\uFF0C\u5982 <code>.ex-tag</code></li></ol><h2 id="\u5C0F\u7A0B\u5E8F\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u6388\u6743" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u6388\u6743</h2><ul><li>\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>wx.getSetting</code>\uFF0C\u5224\u65AD<code>data.authSetting[&#39;scope.userInfo&#39;]</code>\u6765\u83B7\u53D6\u7528\u6237\u662F\u5426\u6388\u6743\u7684\u4FE1\u606F</li><li>\u6CA1\u6709\u6388\u6743\u7684\u8BDD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6807\u8BB0\u4E00\u4E2A\u72B6\u6001\u53D8\u91CF(<code>hasLogin</code>)\uFF0C\u5F53\u6CA1\u6709\u6388\u6743\u4FE1\u606F\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u4E3A<code>false</code>\u3002</li><li>\u9875\u9762\u901A\u8FC7\u8FD9\u4E2A\u53D8\u91CF\u6765\u63A7\u5236\u663E\u793A\u771F\u6B63\u7684\u6309\u94AE\uFF0C\u8FD8\u662F\u6388\u6743\u6309\u94AE(wx:if-else)</li><li>\u73B0\u5728\u5FAE\u4FE1\u7684\u6388\u6743\uFF0C\u9700\u8981\u5F15\u5BFC\u7528\u6237\u4E3B\u52A8\u70B9\u51FB\u6309\u94AE\u624D\u4F1A\u5F39\u51FA\u6388\u6743\u7684\u7A97\u53E3\uFF0C\u9700\u8981\u4F7F\u7528\u539F\u751F\u7684 button \u7EC4\u4EF6\uFF0C\u901A\u8FC7\u8C03\u7528 <code>getuserinfo</code>\u7684\u56DE\u8C03\u62FF\u5230<code>userInfo</code>\u4FE1\u606F\uFF0C\u5224\u65AD\u7528\u6237\u662F\u5426\u70B9\u51FB\u4E86\u6388\u6743</li></ul><h2 id="\u5C0F\u7A0B\u5E8F\u5DF2\u77E5\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u5DF2\u77E5\u7684\u5751" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u5DF2\u77E5\u7684\u5751</h2><ol><li>\u573A\u666F\u503C\u5E76\u4E0D\u662F\u5B9E\u65F6\u66F4\u65B0\u7684\uFF0C\u56E0\u6B64\u4F9D\u8D56\u573A\u666F\u503C\u53BB\u5224\u65AD\u53EF\u80FD\u4F1A\u5B58\u5728\u95EE\u9898\u3002</li></ol>`,9);function i(r,l){return s}var d=e(a,[["render",i],["__file","mini-program.html.vue"]]);export{d as default};
