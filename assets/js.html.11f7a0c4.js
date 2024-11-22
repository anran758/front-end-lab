import{_ as p,r as l,o as b,c,a as n,b as e,w as t,F as u,e as s,d as a}from"./app.7e3542fd.js";const o={},m=n("h1",{id:"airbnb-javascript-style-guide-es6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#airbnb-javascript-style-guide-es6","aria-hidden":"true"},"#"),s(" Airbnb JavaScript Style Guide - ES6")],-1),d=n("p",null,[n("strong",null,"\u7528\u66F4\u5408\u7406\u7684\u65B9\u5F0F\u5199 JavaScript")],-1),h=n("code",null,"ES5",-1),g=s("\u7684\u7F16\u7801\u89C4\u8303\u8BF7\u67E5\u770B"),v={href:"https://github.com/anran758/Front-End-Lab/Code-Guide/ECMA-5",target:"_blank",rel:"noopener noreferrer"},f=s("ECMA-5"),_=s(", "),j=n("code",null,"ES6",-1),q=s("\u89C4\u8303\u662F\u5728\u5176\u57FA\u7840\u7684\u5347\u7EA7. \u672C\u6587\u662F\u5728\u539F\u6587\u7684\u57FA\u7840\u4E0A, \u6839\u636E\u81EA\u5DF1/\u56E2\u961F\u7684\u4EE3\u7801\u89C4\u8303\u4E2D\u8FDB\u884C\u4FEE\u6539. \u6700\u540E\u611F\u8C22"),k=n("a",{href:"#contributors"},"\u8D21\u732E\u8005\u4EEC",-1),x=s("\u7684\u65E0\u79C1\u5949\u732E."),y=s("English: "),w={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},S=s("Airbnb JavaScript Style Guide"),N=a(`<p><a name="table-of-contents"></a></p><h2 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h2><ol><li><a href="#types">\u7C7B\u578B</a></li><li><a href="#references">\u5F15\u7528</a></li><li><a href="#objects">\u5BF9\u8C61</a></li><li><a href="#arrays">\u6570\u7EC4</a></li><li><a href="#destructuring">\u89E3\u6784</a></li><li><a href="#strings">\u5B57\u7B26\u4E32</a></li><li><a href="#functions">\u51FD\u6570</a></li><li><a href="#arrow-functions">\u7BAD\u5934\u51FD\u6570</a></li><li><a href="#constructors">\u6784\u9020\u51FD\u6570</a></li><li><a href="#modules">\u6A21\u5757</a></li><li><a href="#iterators-and-generators">\u8FED\u4EE3\u5668\u548C\u751F\u6210\u5668</a></li><li><a href="#properties">\u5C5E\u6027</a></li><li><a href="#variables">\u53D8\u91CF</a></li><li><a href="#hoisting">\u63D0\u5347</a></li><li><a href="#comparison-operators--equality">\u6BD4\u8F83\u8FD0\u7B97\u7B26\u548C\u7B49\u53F7</a></li><li><a href="#blocks">\u4EE3\u7801\u5757</a></li><li><a href="#comments">\u6CE8\u91CA</a></li><li><a href="#whitespace">\u7A7A\u767D</a></li><li><a href="#commas">\u9017\u53F7</a></li><li><a href="#semicolons">\u5206\u53F7</a></li><li><a href="#type-casting--coercion">\u7C7B\u578B\u8F6C\u6362</a></li><li><a href="#naming-conventions">\u547D\u540D\u89C4\u5219</a></li><li><a href="#accessors">\u5B58\u53D6\u5668</a></li><li><a href="#events">\u4E8B\u4EF6</a></li><li><a href="#jquery">jQuery</a></li><li><a href="#ecmascript-5-compatibility">ECMAScript 5 \u517C\u5BB9\u6027</a></li><li><a href="#ecmascript-6-styles">ECMAScript 6 \u7F16\u7801\u89C4\u8303</a></li><li><a href="#contributors">\u8D21\u732E\u8005</a></li><li><a href="#license">\u8BB8\u53EF\u534F\u8BAE</a></li></ol><p><a name="types"></a></p><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><ul><li><p><a href="#1.1">1.1</a> <a name="1.1"></a> <strong>\u57FA\u672C\u7C7B\u578B</strong>: \u76F4\u63A5\u5B58\u53D6\u57FA\u672C\u7C7B\u578B\u3002</p><ul><li><code>\u5B57\u7B26\u4E32</code></li><li><code>\u6570\u503C</code></li><li><code>\u5E03\u5C14\u7C7B\u578B</code></li><li><code>null</code></li><li><code>undefined</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // =&gt; 1, 9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p><a href="#1.2">1.2</a> <a name="1.2"></a> <strong>\u590D\u6742\u7C7B\u578B</strong>: \u901A\u8FC7\u5F15\u7528\u7684\u65B9\u5F0F\u5B58\u53D6\u590D\u6742\u7C7B\u578B\u3002</p><ul><li><code>\u5BF9\u8C61</code></li><li><code>\u6570\u7EC4</code></li><li><code>\u51FD\u6570</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // =&gt; 9, 9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="references"></a></p><h2 id="\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528</h2><ul><li><p><a href="#2.1">2.1</a> <a name="2.1"></a> \u5BF9\u6240\u6709\u7684\u5F15\u7528\u4F7F\u7528 <code>const</code> \uFF1B\u4E0D\u8981\u4F7F\u7528 <code>var</code>\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8FD9\u80FD\u786E\u4FDD\u4F60\u65E0\u6CD5\u5BF9\u5F15\u7528\u91CD\u65B0\u8D4B\u503C\uFF0C\u4E5F\u4E0D\u4F1A\u5BFC\u81F4\u51FA\u73B0 bug \u6216\u96BE\u4EE5\u7406\u89E3\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p><a href="#2.2">2.2</a> <a name="2.2"></a> \u5982\u679C\u4F60\u4E00\u5B9A\u9700\u8981\u53EF\u53D8\u52A8\u7684\u5F15\u7528\uFF0C\u4F7F\u7528 <code>let</code> \u4EE3\u66FF <code>var</code>\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A <code>let</code> \u662F\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u800C <code>var</code> \u662F\u51FD\u6570\u4F5C\u7528\u57DF\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><a href="#2.3">2.3</a> <a name="2.3"></a> \u6CE8\u610F <code>let</code> \u548C <code>const</code> \u90FD\u662F\u5757\u7EA7\u4F5C\u7528\u57DF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// const \u548C let \u53EA\u5B58\u5728\u4E8E\u5B83\u4EEC\u88AB\u5B9A\u4E49\u7684\u533A\u5757\u5185\u3002
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="objects"></a></p><h2 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h2>`,13),A=a(`<li><p><a href="#3.1">3.1</a> <a name="3.1"></a> \u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const item = new Object();

// good
const item = {};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>`,1),E=n("a",{href:"#3.2"},"3.2",-1),T=s(),I=n("a",{name:"3.2"},null,-1),O=s(" \u5982\u679C\u4F60\u7684\u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6267\u884C\uFF0C\u522B\u4F7F\u7528 "),C={href:"http://es5.github.io/#x7.6.1",target:"_blank",rel:"noopener noreferrer"},R=s("\u4FDD\u7559\u5B57"),B=s(" \u4F5C\u4E3A\u952E\u503C\u3002\u8FD9\u6837\u7684\u8BDD\u5728 IE8 \u4E0D\u4F1A\u8FD0\u884C\u3002 "),F={href:"https://github.com/airbnb/javascript/issues/61",target:"_blank",rel:"noopener noreferrer"},P=s("\u66F4\u591A\u4FE1\u606F"),$=s("\u3002 \u4F46\u5728 ES6 \u6A21\u5757\u548C\u670D\u52A1\u5668\u7AEF\u4E2D\u4F7F\u7528\u6CA1\u6709\u95EE\u9898\u3002"),H=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const superman = {
  default: { clark: &quot;kent&quot; },
  private: true,
};

// good
const superman = {
  defaults: { clark: &quot;kent&quot; },
  hidden: true,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),M=a(`<li><p><a href="#3.3">3.3</a> <a name="3.3"></a> \u4F7F\u7528\u540C\u4E49\u8BCD\u66FF\u6362\u9700\u8981\u4F7F\u7528\u7684\u4FDD\u7559\u5B57\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const superman = {
  class: &quot;alien&quot;,
};

// bad
const superman = {
  klass: &quot;alien&quot;,
};

// good
const superman = {
  type: &quot;alien&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>`,1),G=a(`<p><a name="es6-computed-properties"></a></p><ul><li><p><a href="#3.4">3.4</a> <a name="3.4"></a> \u521B\u5EFA\u6709\u52A8\u6001\u5C5E\u6027\u540D\u7684\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528\u53EF\u88AB\u8BA1\u7B97\u7684\u5C5E\u6027\u540D\u79F0\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u8FD9\u6837\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E00\u4E2A\u5730\u65B9\u5B9A\u4E49\u6240\u6709\u7684\u5BF9\u8C61\u5C5E\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function getKey(k) {
  return \`a key named \${k}\`;
}

// bad
const obj = {
  id: 5,
  name: &quot;San Francisco&quot;,
};
obj[getKey(&quot;enabled&quot;)] = true;

// good
const obj = {
  id: 5,
  name: &quot;San Francisco&quot;,
  [getKey(&quot;enabled&quot;)]: true,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ul><p><a name="es6-object-shorthand"></a></p><ul><li><p><a href="#3.5">3.5</a> <a name="3.5"></a> \u4F7F\u7528\u5BF9\u8C61\u65B9\u6CD5\u7684\u7B80\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ul><p><a name="es6-object-concise"></a></p><ul><li><p><a href="#3.6">3.6</a> <a name="3.6"></a> \u4F7F\u7528\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u7B80\u5199\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u8FD9\u6837\u66F4\u77ED\u66F4\u6709\u63CF\u8FF0\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const lukeSkywalker = &quot;Luke Skywalker&quot;;

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><a href="#3.7">3.7</a> <a name="3.7"></a> \u5728\u5BF9\u8C61\u5C5E\u6027\u58F0\u660E\u524D\u628A\u7B80\u5199\u7684\u5C5E\u6027\u5206\u7EC4\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u8FD9\u6837\u80FD\u6E05\u695A\u5730\u770B\u51FA\u54EA\u4E9B\u5C5E\u6027\u4F7F\u7528\u4E86\u7B80\u5199\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const anakinSkywalker = &quot;Anakin Skywalker&quot;;
const lukeSkywalker = &quot;Luke Skywalker&quot;;

// bad
const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="arrays"></a></p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><ul><li><p><a href="#4.1">4.1</a> <a name="4.1"></a> \u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const items = new Array();

// good
const items = [];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#4.2">4.2</a> <a name="4.2"></a> \u5411\u6570\u7EC4\u6DFB\u52A0\u5143\u7D20\u65F6\u4F7F\u7528 Arrary#push \u66FF\u4EE3\u76F4\u63A5\u8D4B\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const someStack = [];
// bad
someStack[someStack.length] = &quot;abracadabra&quot;;

// good
someStack.push(&quot;abracadabra&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><p><a name="es6-array-spreads"></a></p><ul><li><p><a href="#4.3">4.3</a> <a name="4.3"></a> \u4F7F\u7528\u62D3\u5C55\u8FD0\u7B97\u7B26 <code>...</code> \u590D\u5236\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i &lt; len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><a href="#4.4">4.4</a> <a name="4.4"></a> \u4F7F\u7528 Array#from \u628A\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const foo = document.querySelectorAll(&quot;.foo&quot;);
const nodes = Array.from(foo);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="destructuring"></a></p><h2 id="\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784" aria-hidden="true">#</a> \u89E3\u6784</h2><ul><li><p><a href="#5.1">5.1</a> <a name="5.1"></a> \u4F7F\u7528\u89E3\u6784\u5B58\u53D6\u548C\u4F7F\u7528\u591A\u5C5E\u6027\u5BF9\u8C61\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u89E3\u6784\u80FD\u51CF\u5C11\u4E34\u65F6\u5F15\u7528\u5C5E\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return \`\${firstName} \${lastName}\`;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
  return \`\${firstName} \${lastName}\`;
}

// best
function getFullName({ firstName, lastName }) {
  return \`\${firstName} \${lastName}\`;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p><a href="#5.2">5.2</a> <a name="5.2"></a> \u5BF9\u6570\u7EC4\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p><a href="#5.3">5.3</a> <a name="5.3"></a> \u9700\u8981\u56DE\u4F20\u591A\u4E2A\u503C\u65F6\uFF0C\u4F7F\u7528\u5BF9\u8C61\u89E3\u6784\uFF0C\u800C\u4E0D\u662F\u6570\u7EC4\u89E3\u6784\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u589E\u52A0\u5C5E\u6027\u6216\u8005\u6539\u53D8\u6392\u5E8F\u4E0D\u4F1A\u6539\u53D8\u8C03\u7528\u65F6\u7684\u4F4D\u7F6E\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// \u8C03\u7528\u65F6\u9700\u8981\u8003\u8651\u56DE\u8C03\u6570\u636E\u7684\u987A\u5E8F\u3002
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// \u8C03\u7528\u65F6\u53EA\u9009\u62E9\u9700\u8981\u7684\u6570\u636E
const { left, right } = processInput(input);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="strings"></a></p><h2 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2>`,19),J=a(`<li><p><a href="#6.1">6.1</a> <a name="6.1"></a> \u5B57\u7B26\u4E32\u4F7F\u7528\u5355\u5F15\u53F7 <code>&#39;&#39;</code> \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const name = &quot;Capt. Janeway&quot;;

// good
const name = &quot;Capt. Janeway&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#6.2">6.2</a> <a name="6.2"></a> \u5B57\u7B26\u4E32\u8D85\u8FC7 80 \u4E2A\u5B57\u8282\u5E94\u8BE5\u4F7F\u7528\u5B57\u7B26\u4E32\u8FDE\u63A5\u53F7\u6362\u884C\u3002</p></li>`,2),D=n("a",{href:"#6.3"},"6.3",-1),L=s(),V=n("a",{name:"6.3"},null,-1),U=s(" \u6CE8\uFF1A\u8FC7\u5EA6\u4F7F\u7528\u5B57\u4E32\u8FDE\u63A5\u7B26\u53F7\u53EF\u80FD\u4F1A\u5BF9\u6027\u80FD\u9020\u6210\u5F71\u54CD\u3002"),W={href:"http://jsperf.com/ya-string-concat",target:"_blank",rel:"noopener noreferrer"},Q=s("jsPerf"),Y=s(" \u548C "),z={href:"https://github.com/airbnb/javascript/issues/40",target:"_blank",rel:"noopener noreferrer"},K=s("\u8BA8\u8BBA"),X=s("."),Z=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const errorMessage =
  &quot;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&quot;;

// bad
const errorMessage =
  &quot;This is a super long error that was thrown because \\
of Batman. When you stop to think about how Batman had anything to do \\
with this, you would get nowhere \\
fast.&quot;;

// good
const errorMessage =
  &quot;This is a super long error that was thrown because &quot; +
  &quot;of Batman. When you stop to think about how Batman had anything to do &quot; +
  &quot;with this, you would get nowhere fast.&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,1),nn=a(`<p><a name="es6-template-literals"></a></p><ul><li><p><a href="#6.4">6.4</a> <a name="6.4"></a> \u7A0B\u5E8F\u5316\u751F\u6210\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\u4EE3\u66FF\u5B57\u7B26\u4E32\u8FDE\u63A5\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u6A21\u677F\u5B57\u7B26\u4E32\u66F4\u4E3A\u7B80\u6D01\uFF0C\u66F4\u5177\u53EF\u8BFB\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function sayHi(name) {
  return &quot;How are you, &quot; + name + &quot;?&quot;;
}

// bad
function sayHi(name) {
  return [&quot;How are you, &quot;, name, &quot;?&quot;].join();
}

// good
function sayHi(name) {
  return \`How are you, \${name}?\`;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="functions"></a></p><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2>`,5),sn=a(`<li><p><a href="#7.1">7.1</a> <a name="7.1"></a> \u4F7F\u7528\u51FD\u6570\u58F0\u660E\u4EE3\u66FF\u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u51FD\u6570\u58F0\u660E\u662F\u53EF\u547D\u540D\u7684\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u5728\u8C03\u7528\u6808\u4E2D\u66F4\u5BB9\u6613\u88AB\u8BC6\u522B\u3002\u6B64\u5916\uFF0C\u51FD\u6570\u58F0\u660E\u4F1A\u628A\u6574\u4E2A\u51FD\u6570\u63D0\u5347\uFF08hoisted\uFF09\uFF0C\u800C\u51FD\u6570\u8868\u8FBE\u5F0F\u53EA\u4F1A\u628A\u51FD\u6570\u7684\u5F15\u7528\u53D8\u91CF\u540D\u63D0\u5347\u3002\u8FD9\u6761\u89C4\u5219\u4F7F\u5F97<a href="#arrow-functions">\u7BAD\u5934\u51FD\u6570</a>\u53EF\u4EE5\u53D6\u4EE3\u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const foo = function () {};

// good
function foo() {}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#7.2">7.2</a> <a name="7.2"></a> \u51FD\u6570\u8868\u8FBE\u5F0F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u7ACB\u5373\u8C03\u7528\u7684\u51FD\u6570\u8868\u8FBE\u5F0F (IIFE)
(() =&gt; {
  console.log(&quot;Welcome to the Internet. Please follow me.&quot;);
})();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><a href="#7.3">7.3</a> <a name="7.3"></a> \u6C38\u8FDC\u4E0D\u8981\u5728\u4E00\u4E2A\u975E\u51FD\u6570\u4EE3\u7801\u5757\uFF08<code>if</code>\u3001<code>while</code> \u7B49\uFF09\u4E2D\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u628A\u90A3\u4E2A\u51FD\u6570\u8D4B\u7ED9\u4E00\u4E2A\u53D8\u91CF\u3002\u6D4F\u89C8\u5668\u5141\u8BB8\u4F60\u8FD9\u4E48\u505A\uFF0C\u4F46\u5B83\u4EEC\u7684\u89E3\u6790\u8868\u73B0\u4E0D\u4E00\u81F4\u3002</p></li>`,3),an=n("a",{href:"#7.4"},"7.4",-1),en=s(),rn=n("a",{name:"7.4"},null,-1),ln=s(),pn=n("strong",null,"\u6CE8\u610F:",-1),bn=s(" ECMA-262 \u628A "),cn=n("code",null,"block",-1),tn=s(" \u5B9A\u4E49\u4E3A\u4E00\u7EC4\u8BED\u53E5\u3002\u51FD\u6570\u58F0\u660E\u4E0D\u662F\u8BED\u53E5\u3002"),un={href:"http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97",target:"_blank",rel:"noopener noreferrer"},on=s("\u9605\u8BFB ECMA-262 \u5173\u4E8E\u8FD9\u4E2A\u95EE\u9898\u7684\u8BF4\u660E"),mn=s("\u3002"),dn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (currentUser) {
  function test() {
    console.log(&quot;Nope.&quot;);
  }
}

// good
let test;
if (currentUser) {
  test = () =&gt; {
    console.log(&quot;Yup.&quot;);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,1),hn=a(`<li><p><a href="#7.5">7.5</a> <a name="7.5"></a> \u6C38\u8FDC\u4E0D\u8981\u628A\u53C2\u6570\u547D\u540D\u4E3A <code>arguments</code>\u3002\u8FD9\u5C06\u53D6\u4EE3\u539F\u6765\u51FD\u6570\u4F5C\u7528\u57DF\u5185\u7684 <code>arguments</code> \u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>`,1),gn=a(`<p><a name="es6-rest"></a></p><ul><li><p><a href="#7.6">7.6</a> <a name="7.6"></a> \u4E0D\u8981\u4F7F\u7528 <code>arguments</code>\u3002\u53EF\u4EE5\u9009\u62E9 rest \u8BED\u6CD5 <code>...</code> \u66FF\u4EE3\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u4F7F\u7528 <code>...</code> \u80FD\u660E\u786E\u4F60\u8981\u4F20\u5165\u7684\u53C2\u6570\u3002\u53E6\u5916 rest \u53C2\u6570\u662F\u4E00\u4E2A\u771F\u6B63\u7684\u6570\u7EC4\uFF0C\u800C <code>arguments</code> \u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join(&quot;&quot;);
}

// good
function concatenateAll(...args) {
  return args.join(&quot;&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul><p><a name="es6-default-parameters"></a></p><ul><li><p><a href="#7.7">7.7</a> <a name="7.7"></a> \u76F4\u63A5\u7ED9\u51FD\u6570\u7684\u53C2\u6570\u6307\u5B9A\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u8981\u4F7F\u7528\u4E00\u4E2A\u53D8\u5316\u7684\u51FD\u6570\u53C2\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// really bad
function handleThings(opts) {
  // \u4E0D\uFF01\u6211\u4EEC\u4E0D\u5E94\u8BE5\u6539\u53D8\u51FD\u6570\u53C2\u6570\u3002
  // \u66F4\u52A0\u7CDF\u7CD5: \u5982\u679C\u53C2\u6570 opts \u662F false \u7684\u8BDD\uFF0C\u5B83\u5C31\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u3002
  // \u4F46\u8FD9\u6837\u7684\u5199\u6CD5\u4F1A\u9020\u6210\u4E00\u4E9B Bugs\u3002
  //\uFF08\u8BD1\u6CE8\uFF1A\u4F8B\u5982\u5F53 opts \u88AB\u8D4B\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0Copts \u4ECD\u7136\u4F1A\u88AB\u4E0B\u4E00\u884C\u4EE3\u7801\u8BBE\u5B9A\u4E3A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002\uFF09
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li><li><p><a href="#7.8">7.8</a> <a name="7.8"></a> \u76F4\u63A5\u7ED9\u51FD\u6570\u53C2\u6570\u8D4B\u503C\u65F6\u9700\u8981\u907F\u514D\u526F\u4F5C\u7528\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u8FD9\u6837\u7684\u5199\u6CD5\u8BA9\u4EBA\u611F\u5230\u5F88\u56F0\u60D1\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="arrow-functions"></a></p><h2 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h2>`,7),vn=n("p",null,[n("a",{href:"#8.1"},"8.1"),s(),n("a",{name:"8.1"}),s(" \u5F53\u4F60\u5FC5\u987B\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08\u6216\u4F20\u9012\u4E00\u4E2A\u533F\u540D\u51FD\u6570\uFF09\u65F6\uFF0C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7B26\u53F7\u3002")],-1),fn=s("\u4E3A\u4EC0\u4E48?\u56E0\u4E3A\u7BAD\u5934\u51FD\u6570\u521B\u9020\u4E86\u65B0\u7684\u4E00\u4E2A "),_n=n("code",null,"this",-1),jn=s(" \u6267\u884C\u73AF\u5883\uFF08\u8BD1\u6CE8\uFF1A\u53C2\u8003 "),qn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",target:"_blank",rel:"noopener noreferrer"},kn=s("Arrow functions - JavaScript | MDN"),xn=s(" \u548C "),yn={href:"http://toddmotto.com/es6-arrow-functions-syntaxes-and-lexical-scoping/",target:"_blank",rel:"noopener noreferrer"},wn=s("ES6 arrow functions, syntax and lexical scoping"),Sn=s("\uFF09\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u800C\u4E14\u8FD9\u6837\u7684\u5199\u6CD5\u66F4\u4E3A\u7B80\u6D01\u3002"),Nn=a(`<blockquote><p>\u4E3A\u4EC0\u4E48\u4E0D\uFF1F\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u76F8\u5F53\u590D\u6742\u7684\u51FD\u6570\uFF0C\u4F60\u6216\u8BB8\u53EF\u4EE5\u628A\u903B\u8F91\u90E8\u5206\u8F6C\u79FB\u5230\u4E00\u4E2A\u51FD\u6570\u58F0\u660E\u4E0A\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) =&gt; {
  return x * x;
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),An=a(`<li><p><a href="#8.2">8.2</a> <a name="8.2"></a> \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u9002\u5408\u7528\u4E00\u884C\u5199\u51FA\u5E76\u4E14\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u90A3\u5C31\u628A\u82B1\u62EC\u53F7\u3001\u5706\u62EC\u53F7\u548C <code>return</code> \u90FD\u7701\u7565\u6389\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u90A3\u5C31\u4E0D\u8981\u7701\u7565\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8BED\u6CD5\u7CD6\u3002\u5728\u94FE\u5F0F\u8C03\u7528\u4E2D\u53EF\u8BFB\u6027\u5F88\u9AD8\u3002</p></blockquote><blockquote><p>\u4E3A\u4EC0\u4E48\u4E0D\uFF1F\u5F53\u4F60\u6253\u7B97\u56DE\u4F20\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// good
[1, 2, 3].map((x) =&gt; x * x);

// good
[1, 2, 3].reduce((total, n) =&gt; {
  return total + n;
}, 0);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>`,1),En=a(`<p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="constructors"></a></p><h2 id="\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a> \u6784\u9020\u5668</h2><ul><li><a href="#9.1">9.1</a> <a name="9.1"></a> \u603B\u662F\u4F7F\u7528 <code>class</code>\u3002\u907F\u514D\u76F4\u63A5\u64CD\u4F5C <code>prototype</code> \u3002</li></ul><blockquote><p>\u4E3A\u4EC0\u4E48? \u56E0\u4E3A <code>class</code> \u8BED\u6CD5\u66F4\u4E3A\u7B80\u6D01\u66F4\u6613\u8BFB\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li><p><a href="#9.2">9.2</a> <a name="9.2"></a> \u4F7F\u7528 <code>extends</code> \u7EE7\u627F\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A <code>extends</code> \u662F\u4E00\u4E2A\u5185\u5EFA\u7684\u539F\u578B\u7EE7\u627F\u65B9\u6CD5\u5E76\u4E14\u4E0D\u4F1A\u7834\u574F <code>instanceof</code>\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const inherits = require(&quot;inherits&quot;);

function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this._queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li><p><a href="#9.3">9.3</a> <a name="9.3"></a> \u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE <code>this</code> \u6765\u5E2E\u52A9\u94FE\u5F0F\u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // =&gt; true
luke.setHeight(20); // =&gt; undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump().setHeight(20);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></li><li><p><a href="#9.4">9.4</a> <a name="9.4"></a> \u53EF\u4EE5\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 <code>toString()</code> \u65B9\u6CD5\uFF0C\u4F46\u8981\u786E\u4FDD\u5B83\u80FD\u6B63\u5E38\u8FD0\u884C\u5E76\u4E14\u4E0D\u4F1A\u5F15\u8D77\u526F\u4F5C\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Jedi {
  constructor(options = {}) {
    this.name = options.name || &quot;no name&quot;;
  }

  getName() {
    return this.name;
  }

  toString() {
    return \`Jedi - \${this.getName()}\`;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="modules"></a></p><h2 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h2><ul><li><p><a href="#10.1">10.1</a> <a name="10.1"></a> \u603B\u662F\u4F7F\u7528\u6A21\u7EC4 (<code>import</code>/<code>export</code>) \u800C\u4E0D\u662F\u5176\u4ED6\u975E\u6807\u51C6\u6A21\u5757\u7CFB\u7EDF\u3002\u4F60\u53EF\u4EE5\u7F16\u8BD1\u4E3A\u4F60\u559C\u6B22\u7684\u6A21\u5757\u7CFB\u7EDF\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u6A21\u5757\u5C31\u662F\u672A\u6765\uFF0C\u8BA9\u6211\u4EEC\u5F00\u59CB\u8FC8\u5411\u672A\u6765\u5427\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const AirbnbStyleGuide = require(&#39;./AirbnbStyleGuide&#39;);
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from &#39;./AirbnbStyleGuide&#39;;
export default AirbnbStyleGuide.es6;

// best
import { es6 } from &#39;./AirbnbStyleGuide&#39;;
export default es6;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><a href="#10.2">10.2</a> <a name="10.2"></a> \u4E0D\u8981\u4F7F\u7528\u901A\u914D\u7B26 import\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8FD9\u6837\u80FD\u786E\u4FDD\u4F60\u53EA\u6709\u4E00\u4E2A\u9ED8\u8BA4 export\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
import * as AirbnbStyleGuide from &quot;./AirbnbStyleGuide&quot;;

// good
import AirbnbStyleGuide from &quot;./AirbnbStyleGuide&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#10.3">10.3</a> <a name="10.3"></a>\u4E0D\u8981\u4ECE import \u4E2D\u76F4\u63A5 export\u3002</p></li></ul><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u867D\u7136\u4E00\u884C\u4EE3\u7801\u7B80\u6D01\u660E\u4E86\uFF0C\u4F46\u8BA9 import \u548C export \u5404\u53F8\u5176\u804C\u8BA9\u4E8B\u60C5\u80FD\u4FDD\u6301\u4E00\u81F4\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> // bad
 // filename es6.js
 export { es6 as default } from &#39;./airbnbStyleGuide&#39;;

 // good
 // filename es6.js
 import { es6 } from &#39;./AirbnbStyleGuide&#39;;
 export default es6;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="iterators-and-generators"></a></p><h2 id="iterators-and-generators" tabindex="-1"><a class="header-anchor" href="#iterators-and-generators" aria-hidden="true">#</a> Iterators and Generators</h2><ul><li><p><a href="#11.1">11.1</a> <a name="11.1"></a> \u4E0D\u8981\u4F7F\u7528 iterators\u3002\u4F7F\u7528\u9AD8\u9636\u51FD\u6570\u4F8B\u5982 <code>map()</code> \u548C <code>reduce()</code> \u66FF\u4EE3 <code>for-of</code>\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u8FD9\u52A0\u5F3A\u4E86\u6211\u4EEC\u4E0D\u53D8\u7684\u89C4\u5219\u3002\u5904\u7406\u7EAF\u51FD\u6570\u7684\u56DE\u8C03\u503C\u66F4\u6613\u8BFB\uFF0C\u8FD9\u6BD4\u5B83\u5E26\u6765\u7684\u526F\u4F5C\u7528\u66F4\u91CD\u8981\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) =&gt; (sum += num));
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) =&gt; total + num, 0);
sum === 15;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p><a href="#11.2">11.2</a> <a name="11.2"></a> \u73B0\u5728\u8FD8\u4E0D\u8981\u4F7F\u7528 generators\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u5B83\u4EEC\u73B0\u5728\u8FD8\u6CA1\u6CD5\u5F88\u597D\u5730\u7F16\u8BD1\u5230 ES5\u3002 (\u8BD1\u8005\u6CE8\uFF1A\u76EE\u524D(2016/03) Chrome \u548C Node.js \u7684\u7A33\u5B9A\u7248\u672C\u90FD\u5DF2\u652F\u6301 generators)</p></blockquote></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="properties"></a></p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><ul><li><p><a href="#12.1">12.1</a> <a name="12.1"></a> \u4F7F\u7528 <code>.</code> \u6765\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke[&quot;jedi&quot;];

// good
const isJedi = luke.jedi;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p><a href="#12.2">12.2</a> <a name="12.2"></a> \u5F53\u901A\u8FC7\u53D8\u91CF\u8BBF\u95EE\u5C5E\u6027\u65F6\u4F7F\u7528\u4E2D\u62EC\u53F7 <code>[]</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp(&quot;jedi&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="variables"></a></p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2>`,24),Tn=n("a",{href:"#13.1"},"13.1",-1),In=s(),On=n("a",{name:"13.1"},null,-1),Cn=s(" \u4E00\u76F4\u4F7F\u7528 "),Rn=n("code",null,"const",-1),Bn=s(" \u6765\u58F0\u660E\u53D8\u91CF\uFF0C\u5982\u679C\u4E0D\u8FD9\u6837\u505A\u5C31\u4F1A\u4EA7\u751F\u5168\u5C40\u53D8\u91CF\u3002\u6211\u4EEC\u9700\u8981\u907F\u514D\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u7684\u6C61\u67D3\u3002"),Fn={href:"http://www.wikiwand.com/en/Captain_Planet",target:"_blank",rel:"noopener noreferrer"},Pn=s("\u5730\u7403\u961F\u957F"),$n=s("\u5DF2\u7ECF\u8B66\u544A\u8FC7\u6211\u4EEC\u4E86\u3002\uFF08\u8BD1\u6CE8\uFF1A\u5168\u5C40\uFF0Cglobal \u4EA6\u6709\u5168\u7403\u7684\u610F\u601D\u3002\u5730\u7403\u961F\u957F\u7684\u8D23\u4EFB\u662F\u4FDD\u536B\u5730\u7403\u73AF\u5883\uFF0C\u6240\u4EE5\u4ED6\u8B66\u544A\u6211\u4EEC\u4E0D\u8981\u9020\u6210\u300C\u5168\u7403\u300D\u6C61\u67D3\u3002\uFF09"),Hn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,1),Mn=a(`<li><p><a href="#13.2">13.2</a> <a name="13.2"></a> \u4F7F\u7528 <code>const</code> \u58F0\u660E\u6BCF\u4E00\u4E2A\u53D8\u91CF\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u589E\u52A0\u65B0\u53D8\u91CF\u5C06\u53D8\u7684\u66F4\u52A0\u5BB9\u6613\uFF0C\u800C\u4E14\u4F60\u6C38\u8FDC\u4E0D\u7528\u518D\u62C5\u5FC3\u8C03\u6362\u9519 <code>;</code> \u8DDF <code>,</code>\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = &quot;z&quot;;

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
  goSportsTeam = true;
dragonball = &quot;z&quot;;

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = &quot;z&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p><a href="#13.3">13.3</a> <a name="13.3"></a> \u5C06\u6240\u6709\u7684 <code>const</code> \u548C <code>let</code> \u5206\u7EC4</p><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F\u5F53\u4F60\u9700\u8981\u628A\u5DF2\u8D4B\u503C\u53D8\u91CF\u8D4B\u503C\u7ED9\u672A\u8D4B\u503C\u53D8\u91CF\u65F6\u975E\u5E38\u6709\u7528\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
let i,
  len,
  dragonball,
  items = getItems(),
  goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li><li><p><a href="#13.4">13.4</a> <a name="13.4"></a> \u5728\u4F60\u9700\u8981\u7684\u5730\u65B9\u7ED9\u53D8\u91CF\u8D4B\u503C\uFF0C\u4F46\u8BF7\u628A\u5B83\u4EEC\u653E\u5728\u4E00\u4E2A\u5408\u7406\u7684\u4F4D\u7F6E\u3002</p></li>`,3),Gn=a(`<blockquote><p>\u4E3A\u4EC0\u4E48\uFF1F<code>let</code> \u548C <code>const</code> \u662F\u5757\u7EA7\u4F5C\u7528\u57DF\u800C\u4E0D\u662F\u51FD\u6570\u4F5C\u7528\u57DF\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> // good
 function() {
   test();
   console.log(&#39;doing stuff..&#39;);

   //..other stuff..

   const name = getName();

   if (name === &#39;test&#39;) {
     return false;
   }

   return name;
 }

 // bad - unnecessary function call
 function(hasName) {
   const name = getName();

   if (!hasName) {
     return false;
   }

   this.setFirstName(name);

   return true;
 }

 // good
 function(hasName) {
   if (!hasName) {
     return false;
   }

   const name = getName();
   this.setFirstName(name);

   return true;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="hoisting"></a></p><h2 id="hoisting" tabindex="-1"><a class="header-anchor" href="#hoisting" aria-hidden="true">#</a> Hoisting</h2>`,5),Jn=n("a",{href:"#14.1"},"14.1",-1),Dn=s(),Ln=n("a",{name:"14.1"},null,-1),Vn=s(),Un=n("code",null,"var",-1),Wn=s(" \u58F0\u660E\u4F1A\u88AB\u63D0\u5347\u81F3\u8BE5\u4F5C\u7528\u57DF\u7684\u9876\u90E8\uFF0C\u4F46\u5B83\u4EEC\u8D4B\u503C\u4E0D\u4F1A\u63D0\u5347\u3002"),Qn=n("code",null,"let",-1),Yn=s(" \u548C "),zn=n("code",null,"const",-1),Kn=s(" \u88AB\u8D4B\u4E88\u4E86\u4E00\u79CD\u79F0\u4E3A\u300C"),Xn={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let",target:"_blank",rel:"noopener noreferrer"},Zn=s("\u6682\u65F6\u6027\u6B7B\u533A\uFF08Temporal Dead Zones, TDZ\uFF09"),ns=s("\u300D\u7684\u6982\u5FF5\u3002\u8FD9\u5BF9\u4E8E\u4E86\u89E3\u4E3A\u4EC0\u4E48 "),ss={href:"http://es-discourse.com/t/why-typeof-is-no-longer-safe/15",target:"_blank",rel:"noopener noreferrer"},as=s("type of \u4E0D\u518D\u5B89\u5168"),es=s("\u76F8\u5F53\u91CD\u8981\u3002"),rs=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u6211\u4EEC\u77E5\u9053\u8FD9\u6837\u8FD0\u884C\u4E0D\u4E86
// \uFF08\u5047\u8BBE notDefined \u4E0D\u662F\u5168\u5C40\u53D8\u91CF\uFF09
function example() {
  console.log(notDefined); // =&gt; throws a ReferenceError
}

// \u7531\u4E8E\u53D8\u91CF\u63D0\u5347\u7684\u539F\u56E0\uFF0C
// \u5728\u5F15\u7528\u53D8\u91CF\u540E\u518D\u58F0\u660E\u53D8\u91CF\u662F\u53EF\u4EE5\u8FD0\u884C\u7684\u3002
// \u6CE8\uFF1A\u53D8\u91CF\u7684\u8D4B\u503C \`true\` \u4E0D\u4F1A\u88AB\u63D0\u5347\u3002
function example() {
  console.log(declaredButNotAssigned); // =&gt; undefined
  var declaredButNotAssigned = true;
}

// \u7F16\u8BD1\u5668\u4F1A\u628A\u51FD\u6570\u58F0\u660E\u63D0\u5347\u5230\u4F5C\u7528\u57DF\u7684\u9876\u5C42\uFF0C
// \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u7684\u4F8B\u5B50\u53EF\u4EE5\u6539\u5199\u6210\u8FD9\u6837\uFF1A
function example() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // =&gt; undefined
  declaredButNotAssigned = true;
}

// \u4F7F\u7528 const \u548C let
function example() {
  console.log(declaredButNotAssigned); // =&gt; throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // =&gt; throws a ReferenceError
  const declaredButNotAssigned = true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1),ls=a(`<li><p><a href="#14.2">14.2</a> <a name="14.2"></a> \u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u53D8\u91CF\u540D\u4F1A\u88AB\u63D0\u5347\uFF0C\u4F46\u51FD\u6570\u5185\u5BB9\u5E76\u4E0D\u4F1A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function example() {
  console.log(anonymous); // =&gt; undefined

  anonymous(); // =&gt; TypeError anonymous is not a function

  var anonymous = function () {
    console.log(&quot;anonymous function expression&quot;);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p><a href="#14.3">14.3</a> <a name="14.3"></a> \u547D\u540D\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u53D8\u91CF\u540D\u4F1A\u88AB\u63D0\u5347\uFF0C\u4F46\u51FD\u6570\u540D\u548C\u51FD\u6570\u51FD\u6570\u5185\u5BB9\u5E76\u4E0D\u4F1A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function example() {
  console.log(named); // =&gt; undefined

  named(); // =&gt; TypeError named is not a function

  superPower(); // =&gt; ReferenceError superPower is not defined

  var named = function superPower() {
    console.log(&quot;Flying&quot;);
  };
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named); // =&gt; undefined

  named(); // =&gt; TypeError named is not a function

  var named = function named() {
    console.log(&quot;named&quot;);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p><a href="#14.4">14.4</a> <a name="14.4"></a> \u51FD\u6570\u58F0\u660E\u7684\u540D\u79F0\u548C\u51FD\u6570\u4F53\u90FD\u4F1A\u88AB\u63D0\u5347\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function example() {
  superPower(); // =&gt; Flying

  function superPower() {
    console.log(&quot;Flying&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>`,3),is=s("\u60F3\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u53C2\u8003 "),ps={href:"http://www.adequatelygood.com/",target:"_blank",rel:"noopener noreferrer"},bs=s("Ben Cherry"),cs=s(" \u7684 "),ts={href:"http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting",target:"_blank",rel:"noopener noreferrer"},us=s("JavaScript Scoping & Hoisting"),os=s("\u3002"),ms=n("p",null,[n("strong",null,[n("a",{href:"#table-of-contents"},"\u2B06 \u8FD4\u56DE\u76EE\u5F55")])],-1),ds=n("p",null,[n("a",{name:"comparison-operators--equality"})],-1),hs=n("h2",{id:"\u6BD4\u8F83\u8FD0\u7B97\u7B26\u548C\u7B49\u53F7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6BD4\u8F83\u8FD0\u7B97\u7B26\u548C\u7B49\u53F7","aria-hidden":"true"},"#"),s(" \u6BD4\u8F83\u8FD0\u7B97\u7B26\u548C\u7B49\u53F7")],-1),gs=a(`<li><p><a href="#15.1">15.1</a> <a name="15.1"></a> \u4F18\u5148\u4F7F\u7528 <code>===</code> \u548C <code>!==</code> \u800C\u4E0D\u662F <code>==</code> \u548C <code>!=</code>.</p></li><li><p><a href="#15.2">15.2</a> <a name="15.2"></a> \u6761\u4EF6\u8868\u8FBE\u5F0F\u4F8B\u5982 <code>if</code> \u8BED\u53E5\u901A\u8FC7\u62BD\u8C61\u65B9\u6CD5 <code>ToBoolean</code> \u5F3A\u5236\u8BA1\u7B97\u5B83\u4EEC\u7684\u8868\u8FBE\u5F0F\u5E76\u4E14\u603B\u662F\u9075\u5B88\u4E0B\u9762\u7684\u89C4\u5219\uFF1A</p><ul><li><strong>\u5BF9\u8C61</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>true</strong></li><li><strong>Undefined</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong></li><li><strong>Null</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong></li><li><strong>\u5E03\u5C14\u503C</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>\u5E03\u5C14\u7684\u503C</strong></li><li><strong>\u6570\u5B57</strong> \u5982\u679C\u662F <strong>+0\u3001-0\u3001\u6216 NaN</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong>, \u5426\u5219\u4E3A <strong>true</strong></li><li><strong>\u5B57\u7B26\u4E32</strong> \u5982\u679C\u662F\u7A7A\u5B57\u7B26\u4E32 <code>&#39;&#39;</code> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong>\uFF0C\u5426\u5219\u4E3A <strong>true</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><a href="#15.3">15.3</a> <a name="15.3"></a> \u4F7F\u7528\u7B80\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (name !== &quot;&quot;) {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length &gt; 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>`,3),vs=n("a",{href:"#15.4"},"15.4",-1),fs=s(),_s=n("a",{name:"15.4"},null,-1),js=s(" \u60F3\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u53C2\u8003 Angus Croll \u7684 "),qs={href:"http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108",target:"_blank",rel:"noopener noreferrer"},ks=s("Truth Equality and JavaScript"),xs=s("\u3002"),ys=a(`<p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="blocks"></a></p><h2 id="\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u4EE3\u7801\u5757</h2><ul><li><p><a href="#16.1">16.1</a> <a name="16.1"></a> \u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9\u6240\u6709\u7684\u591A\u884C\u4EE3\u7801\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function() { return false; }

// good
function() {
  return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p><a href="#16.2">16.2</a> <a name="16.2"></a> \u5982\u679C\u901A\u8FC7 <code>if</code> \u548C <code>else</code> \u4F7F\u7528\u591A\u884C\u4EE3\u7801\u5757\uFF0C\u628A <code>else</code> \u653E\u5728 <code>if</code> \u4EE3\u7801\u5757\u5173\u95ED\u62EC\u53F7\u7684\u540C\u4E00\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="comments"></a></p><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><ul><li><p><a href="#17.1">17.1</a> <a name="17.1"></a> \u4F7F\u7528 <code>/** ... */</code> \u4F5C\u4E3A\u591A\u884C\u6CE8\u91CA\u3002\u5305\u542B\u63CF\u8FF0\u3001\u6307\u5B9A\u6240\u6709\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u548C\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...stuff...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...stuff...

  return element;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li><li><p><a href="#17.2">17.2</a> <a name="17.2"></a> \u4F7F\u7528 <code>//</code> \u4F5C\u4E3A\u5355\u884C\u6CE8\u91CA\u3002\u5728\u8BC4\u8BBA\u5BF9\u8C61\u4E0A\u9762\u53E6\u8D77\u4E00\u884C\u4F7F\u7528\u5355\u884C\u6CE8\u91CA\u3002\u5728\u6CE8\u91CA\u524D\u63D2\u5165\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log(&quot;fetching type...&quot;);
  // set the default type to &#39;no type&#39;
  const type = this._type || &quot;no type&quot;;

  return type;
}

// good
function getType() {
  console.log(&quot;fetching type...&quot;);

  // set the default type to &#39;no type&#39;
  const type = this._type || &quot;no type&quot;;

  return type;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li><li><p><a href="#17.3">17.3</a> <a name="17.3"></a> \u7ED9\u6CE8\u91CA\u589E\u52A0 <code>FIXME</code> \u6216 <code>TODO</code> \u7684\u524D\u7F00\u53EF\u4EE5\u5E2E\u52A9\u5176\u4ED6\u5F00\u53D1\u8005\u5FEB\u901F\u4E86\u89E3\u8FD9\u662F\u4E00\u4E2A\u9700\u8981\u590D\u67E5\u7684\u95EE\u9898\uFF0C\u6216\u662F\u7ED9\u9700\u8981\u5B9E\u73B0\u7684\u529F\u80FD\u63D0\u4F9B\u4E00\u4E2A\u89E3\u51B3\u65B9\u5F0F\u3002\u8FD9\u5C06\u6709\u522B\u4E8E\u5E38\u89C1\u7684\u6CE8\u91CA\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u53EF\u64CD\u4F5C\u7684\u3002\u4F7F\u7528 <code>FIXME -- need to figure this out</code> \u6216\u8005 <code>TODO -- need to implement</code>\u3002</p></li><li><p><a href="#17.4">17.4</a> <a name="17.4"></a> \u4F7F\u7528 <code>// FIXME</code>: \u6807\u6CE8\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Calculator {
  constructor() {
    // FIXME: shouldn&#39;t use a global here
    total = 0;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p><a href="#17.5">17.5</a> <a name="17.5"></a> \u4F7F\u7528 <code>// TODO</code>: \u6807\u6CE8\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Calculator {
  constructor() {
    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="whitespace"></a></p><h2 id="\u7A7A\u767D" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u767D" aria-hidden="true">#</a> \u7A7A\u767D</h2><ul><li><p><a href="#18.1">18.1</a> <a name="18.1"></a> \u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u4F5C\u4E3A\u7F29\u8FDB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function() {
\u2219\u2219\u2219\u2219const name;
}

// bad
function() {
\u2219const name;
}

// good
function() {
\u2219\u2219const name;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p><a href="#18.2">18.2</a> <a name="18.2"></a> \u5728\u82B1\u62EC\u53F7\u524D\u653E\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function test() {
  console.log(&quot;test&quot;);
}

// good
function test() {
  console.log(&quot;test&quot;);
}

// bad
dog.set(&quot;attr&quot;, {
  age: &quot;1 year&quot;,
  breed: &quot;Bernese Mountain Dog&quot;,
});

// good
dog.set(&quot;attr&quot;, {
  age: &quot;1 year&quot;,
  breed: &quot;Bernese Mountain Dog&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p><a href="#18.3">18.3</a> <a name="18.3"></a> \u5728\u63A7\u5236\u8BED\u53E5\uFF08<code>if</code>\u3001<code>while</code> \u7B49\uFF09\u7684\u5C0F\u62EC\u53F7\u524D\u653E\u4E00\u4E2A\u7A7A\u683C\u3002\u5728\u51FD\u6570\u8C03\u7528\u53CA\u58F0\u660E\u4E2D\uFF0C\u4E0D\u5728\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u524D\u52A0\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (isJedi) {
  fight();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight() {
  console.log(&quot;Swooosh!&quot;);
}

// good
function fight() {
  console.log(&quot;Swooosh!&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p><a href="#18.4">18.4</a> <a name="18.4"></a> \u4F7F\u7528\u7A7A\u683C\u628A\u8FD0\u7B97\u7B26\u9694\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const x = y + 5;

// good
const x = y + 5;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#18.5">18.5</a> <a name="18.5"></a> \u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
(function (global) {
  // ...stuff...
})(this);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
(function(global) {
  // ...stuff...
})(this);\u21B5
\u21B5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// good
(function(global) {
  // ...stuff...
})(this);\u21B5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><a href="#18.5">18.5</a> <a name="18.5"></a> \u5728\u4F7F\u7528\u957F\u65B9\u6CD5\u94FE\u65F6\u8FDB\u884C\u7F29\u8FDB\u3002\u4F7F\u7528\u524D\u9762\u7684\u70B9 <code>.</code> \u5F3A\u8C03\u8FD9\u662F\u65B9\u6CD5\u8C03\u7528\u800C\u4E0D\u662F\u65B0\u8BED\u53E5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
$(&quot;#items&quot;).find(&quot;.selected&quot;).highlight().end().find(&quot;.open&quot;).updateCount();

// bad
$(&quot;#items&quot;).find(&quot;.selected&quot;).highlight().end().find(&quot;.open&quot;).updateCount();

// good
$(&quot;#items&quot;).find(&quot;.selected&quot;).highlight().end().find(&quot;.open&quot;).updateCount();

// bad
const leds = stage
  .selectAll(&quot;.led&quot;)
  .data(data)
  .enter()
  .append(&quot;svg:svg&quot;)
  .class(&quot;led&quot;, true)
  .attr(&quot;width&quot;, (radius + margin) * 2)
  .append(&quot;svg:g&quot;)
  .attr(
    &quot;transform&quot;,
    &quot;translate(&quot; + (radius + margin) + &quot;,&quot; + (radius + margin) + &quot;)&quot;,
  )
  .call(tron.led);

// good
const leds = stage
  .selectAll(&quot;.led&quot;)
  .data(data)
  .enter()
  .append(&quot;svg:svg&quot;)
  .classed(&quot;led&quot;, true)
  .attr(&quot;width&quot;, (radius + margin) * 2)
  .append(&quot;svg:g&quot;)
  .attr(
    &quot;transform&quot;,
    &quot;translate(&quot; + (radius + margin) + &quot;,&quot; + (radius + margin) + &quot;)&quot;,
  )
  .call(tron.led);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></li><li><p><a href="#18.6">18.6</a> <a name="18.6"></a> \u5728\u5757\u672B\u548C\u65B0\u8BED\u53E5\u524D\u63D2\u5165\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {},
  bar() {},
};
return obj;

// good
const obj = {
  foo() {},

  bar() {},
};

return obj;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="commas"></a></p><h2 id="\u9017\u53F7" tabindex="-1"><a class="header-anchor" href="#\u9017\u53F7" aria-hidden="true">#</a> \u9017\u53F7</h2><ul><li><p><a href="#19.1">19.1</a> <a name="19.1"></a> \u884C\u9996\u9017\u53F7\uFF1A<strong>\u4E0D\u9700\u8981</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const story = [once, upon, aTime];

// good
const story = [once, upon, aTime];

// bad
const hero = {
  firstName: &quot;Ada&quot;,
  lastName: &quot;Lovelace&quot;,
  birthYear: 1815,
  superPower: &quot;computers&quot;,
};

// good
const hero = {
  firstName: &quot;Ada&quot;,
  lastName: &quot;Lovelace&quot;,
  birthYear: 1815,
  superPower: &quot;computers&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p><a href="#19.2">19.2</a> <a name="19.2"></a> \u589E\u52A0\u7ED3\u5C3E\u7684\u9017\u53F7: <strong>\u9700\u8981</strong>\u3002</p></li></ul>`,16),ws=s("\u4E3A\u4EC0\u4E48? \u8FD9\u4F1A\u8BA9 git diffs \u66F4\u5E72\u51C0\u3002\u53E6\u5916\uFF0C\u50CF babel \u8FD9\u6837\u7684\u8F6C\u8BD1\u5668\u4F1A\u79FB\u9664\u7ED3\u5C3E\u591A\u4F59\u7684\u9017\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u4E0D\u5FC5\u62C5\u5FC3\u8001\u65E7\u6D4F\u89C8\u5668\u7684"),Ss=s("\u5C3E\u9017\u53F7\u95EE\u9898"),Ns=s("\u3002"),As=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> // bad - git diff without trailing comma
 const hero = {
      firstName: &#39;Florence&#39;,
 -    lastName: &#39;Nightingale&#39;
 +    lastName: &#39;Nightingale&#39;,
 +    inventorOf: [&#39;coxcomb graph&#39;, &#39;modern nursing&#39;]
 }

 // good - git diff with trailing comma
 const hero = {
      firstName: &#39;Florence&#39;,
      lastName: &#39;Nightingale&#39;,
 +    inventorOf: [&#39;coxcomb chart&#39;, &#39;modern nursing&#39;],
 }

 // bad
 const hero = {
   firstName: &#39;Dana&#39;,
   lastName: &#39;Scully&#39;
 };

 const heroes = [
   &#39;Batman&#39;,
   &#39;Superman&#39;
 ];

 // good
 const hero = {
   firstName: &#39;Dana&#39;,
   lastName: &#39;Scully&#39;,
 };

 const heroes = [
   &#39;Batman&#39;,
   &#39;Superman&#39;,
 ];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="semicolons"></a></p><h2 id="\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5206\u53F7" aria-hidden="true">#</a> \u5206\u53F7</h2>`,4),Es=a(`<p><a href="#20.1">20.1</a> <a name="20.1"></a> <strong>\u4F7F\u7528\u5206\u53F7</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
(function () {
  const name = &quot;Skywalker&quot;;
  return name;
})()(
  // good
  () =&gt; {
    const name = &quot;Skywalker&quot;;
    return name;
  },
)();

// good (\u9632\u6B62\u51FD\u6570\u5728\u4E24\u4E2A IIFE \u5408\u5E76\u65F6\u88AB\u5F53\u6210\u4E00\u4E2A\u53C2\u6570)
(() =&gt; {
  const name = &quot;Skywalker&quot;;
  return name;
})();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2),Ts={href:"http://stackoverflow.com/a/7365214/1712802",target:"_blank",rel:"noopener noreferrer"},Is=s("Read more"),Os=s("."),Cs=n("p",null,[n("strong",null,[n("a",{href:"#table-of-contents"},"\u2B06 \u8FD4\u56DE\u76EE\u5F55")])],-1),Rs=n("p",null,[n("a",{name:"type-casting--coercion"})],-1),Bs=n("h2",{id:"\u7C7B\u578B\u8F6C\u6362",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7C7B\u578B\u8F6C\u6362","aria-hidden":"true"},"#"),s(" \u7C7B\u578B\u8F6C\u6362")],-1),Fs=a(`<li><p><a href="#21.1">21.1</a> <a name="21.1"></a> \u5728\u8BED\u53E5\u5F00\u59CB\u65F6\u6267\u884C\u7C7B\u578B\u8F6C\u6362\u3002</p></li><li><p><a href="#21.2">21.2</a> <a name="21.2"></a> \u5B57\u7B26\u4E32\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>//  =&gt; this.reviewScore = 9;

// bad
const totalScore = this.reviewScore + &quot;&quot;;

// good
const totalScore = String(this.reviewScore);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p><a href="#21.3">21.3</a> <a name="21.3"></a> \u5BF9\u6570\u5B57\u4F7F\u7528 <code>parseInt</code> \u8F6C\u6362\uFF0C\u5E76\u5E26\u4E0A\u7C7B\u578B\u8F6C\u6362\u7684\u57FA\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const inputValue = &quot;4&quot;;

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue &gt;&gt; 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>`,3),Ps=n("a",{href:"#21.4"},"21.4",-1),$s=s(),Hs=n("a",{name:"21.4"},null,-1),Ms=s(" \u5982\u679C\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0 parseInt \u6210\u4E3A\u4F60\u6240\u505A\u7684\u4E8B\u7684\u74F6\u9888\u800C\u9700\u8981\u4F7F\u7528\u4F4D\u64CD\u4F5C\u89E3\u51B3"),Gs={href:"http://jsperf.com/coercion-vs-casting/3",target:"_blank",rel:"noopener noreferrer"},Js=s("\u6027\u80FD\u95EE\u9898"),Ds=s("\u65F6\uFF0C\u7559\u4E2A\u6CE8\u91CA\u8BF4\u6E05\u695A\u539F\u56E0\u548C\u4F60\u7684\u76EE\u7684\u3002"),Ls=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// good
/**
 * \u4F7F\u7528 parseInt \u5BFC\u81F4\u6211\u7684\u7A0B\u5E8F\u53D8\u6162\uFF0C
 * \u6539\u6210\u4F7F\u7528\u4F4D\u64CD\u4F5C\u8F6C\u6362\u6570\u5B57\u5FEB\u591A\u4E86\u3002
 */
const val = inputValue &gt;&gt; 0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),Vs=n("a",{href:"#21.5"},"21.5",-1),Us=s(),Ws=n("a",{name:"21.5"},null,-1),Qs=s(),Ys=n("strong",null,"\u6CE8:",-1),zs=s(" \u5C0F\u5FC3\u4F7F\u7528\u4F4D\u64CD\u4F5C\u8FD0\u7B97\u7B26\u3002\u6570\u5B57\u4F1A\u88AB\u5F53\u6210 "),Ks={href:"http://es5.github.io/#x4.3.19",target:"_blank",rel:"noopener noreferrer"},Xs=s("64 \u4F4D\u503C"),Zs=s("\uFF0C\u4F46\u662F\u4F4D\u64CD\u4F5C\u8FD0\u7B97\u7B26\u603B\u662F\u8FD4\u56DE 32 \u4F4D\u7684\u6574\u6570\uFF08"),na={href:"http://es5.github.io/#x11.7",target:"_blank",rel:"noopener noreferrer"},sa=s("\u53C2\u8003"),aa=s("\uFF09\u3002\u4F4D\u64CD\u4F5C\u5904\u7406\u5927\u4E8E 32 \u4F4D\u7684\u6574\u6570\u503C\u65F6\u8FD8\u4F1A\u5BFC\u81F4\u610F\u6599\u4E4B\u5916\u7684\u884C\u4E3A\u3002"),ea={href:"https://github.com/airbnb/javascript/issues/109",target:"_blank",rel:"noopener noreferrer"},ra=s("\u5173\u4E8E\u8FD9\u4E2A\u95EE\u9898\u7684\u8BA8\u8BBA"),la=s("\u3002\u6700\u5927\u7684 32 \u4F4D\u6574\u6570\u662F 2,147,483,647\uFF1A"),ia=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>2147483647 &gt;&gt; 0; //=&gt; 2147483647
2147483648 &gt;&gt; 0; //=&gt; -2147483648
2147483649 &gt;&gt; 0; //=&gt; -2147483647
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),pa=a(`<li><p><a href="#21.6">21.6</a> <a name="21.6"></a> \u5E03\u5C14:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// good
const hasAge = !!age;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>`,1),ba=a(`<p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="naming-conventions"></a></p><h2 id="\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u547D\u540D\u89C4\u5219</h2><ul><li><p><a href="#22.1">22.1</a> <a name="22.1"></a> \u907F\u514D\u5355\u5B57\u6BCD\u547D\u540D\u3002\u547D\u540D\u5E94\u5177\u5907\u63CF\u8FF0\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p><a href="#22.2">22.2</a> <a name="22.2"></a> \u4F7F\u7528\u9A7C\u5CF0\u5F0F\u547D\u540D\u5BF9\u8C61\u3001\u51FD\u6570\u548C\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p><a href="#22.3">22.3</a> <a name="22.3"></a> \u4F7F\u7528\u5E15\u65AF\u5361\u5F0F\u547D\u540D\u6784\u9020\u51FD\u6570\u6216\u7C7B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: &quot;nope&quot;,
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: &quot;yup&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p><a href="#22.4">22.4</a> <a name="22.4"></a> \u4E0D\u8981\u4F7F\u7528\u4E0B\u5212\u7EBF <code>_</code> \u7ED3\u5C3E\u6216\u5F00\u5934\u6765\u547D\u540D\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
this.__firstName__ = &quot;Panda&quot;;
this.firstName_ = &quot;Panda&quot;;
this._firstName = &quot;Panda&quot;;

// good
this.firstName = &quot;Panda&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p><a href="#22.5">22.5</a> <a name="22.5"></a> \u522B\u4FDD\u5B58 <code>this</code> \u7684\u5F15\u7528\u3002\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u6216 Function#bind\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () =&gt; {
    console.log(this);
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li><li><p><a href="#22.6">22.6</a> <a name="22.6"></a> \u5982\u679C\u4F60\u7684\u6587\u4EF6\u53EA\u8F93\u51FA\u4E00\u4E2A\u7C7B\uFF0C\u90A3\u4F60\u7684\u6587\u4EF6\u540D\u5FC5\u987B\u548C\u7C7B\u540D\u5B8C\u5168\u4FDD\u6301\u4E00\u81F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from &quot;./checkBox&quot;;

// bad
import CheckBox from &quot;./check_box&quot;;

// good
import CheckBox from &quot;./CheckBox&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p><a href="#22.7">22.7</a> <a name="22.7"></a> \u5F53\u4F60\u5BFC\u51FA\u9ED8\u8BA4\u7684\u51FD\u6570\u65F6\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u547D\u540D\u3002\u4F60\u7684\u6587\u4EF6\u540D\u5FC5\u987B\u548C\u51FD\u6570\u540D\u5B8C\u5168\u4FDD\u6301\u4E00\u81F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function makeStyleGuide() {}

export default makeStyleGuide;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p><a href="#22.8">22.8</a> <a name="22.8"></a> \u5F53\u4F60\u5BFC\u51FA\u5355\u4F8B\u3001\u51FD\u6570\u5E93\u3001\u7A7A\u5BF9\u8C61\u65F6\u4F7F\u7528\u5E15\u65AF\u5361\u5F0F\u547D\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const AirbnbStyleGuide = {
  es6: {},
};

export default AirbnbStyleGuide;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="accessors"></a></p><h2 id="\u5B58\u53D6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u5668" aria-hidden="true">#</a> \u5B58\u53D6\u5668</h2><ul><li><p><a href="#23.1">23.1</a> <a name="23.1"></a> \u5C5E\u6027\u7684\u5B58\u53D6\u51FD\u6570\u4E0D\u662F\u5FC5\u987B\u7684\u3002</p></li><li><p><a href="#23.2">23.2</a> <a name="23.2"></a> \u5982\u679C\u4F60\u9700\u8981\u5B58\u53D6\u51FD\u6570\u65F6\u4F7F\u7528 <code>getVal()</code> \u548C <code>setVal(&#39;hello&#39;)</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><a href="#23.3">23.3</a> <a name="23.3"></a> \u5982\u679C\u5C5E\u6027\u662F\u5E03\u5C14\u503C\uFF0C\u4F7F\u7528 <code>isVal()</code> \u6216 <code>hasVal()</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p><a href="#23.4">23.4</a> <a name="23.4"></a> \u521B\u5EFA <code>get()</code> \u548C <code>set()</code> \u51FD\u6570\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u8981\u4FDD\u6301\u4E00\u81F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || &quot;blue&quot;;
    this.set(&quot;lightsaber&quot;, lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="events"></a></p><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><ul><li><p><a href="#24.1">24.1</a> <a name="24.1"></a> \u5F53\u7ED9\u4E8B\u4EF6\u9644\u52A0\u6570\u636E\u65F6\uFF08\u65E0\u8BBA\u662F DOM \u4E8B\u4EF6\u8FD8\u662F\u79C1\u6709\u4E8B\u4EF6\uFF09\uFF0C\u4F20\u5165\u4E00\u4E2A\u54C8\u5E0C\u800C\u4E0D\u662F\u539F\u59CB\u503C\u3002\u8FD9\u6837\u53EF\u4EE5\u8BA9\u540E\u9762\u7684\u8D21\u732E\u8005\u589E\u52A0\u66F4\u591A\u6570\u636E\u5230\u4E8B\u4EF6\u6570\u636E\u800C\u65E0\u9700\u627E\u51FA\u5E76\u66F4\u65B0\u4E8B\u4EF6\u7684\u6BCF\u4E00\u4E2A\u5904\u7406\u5668\u3002\u4F8B\u5982\uFF0C\u4E0D\u597D\u7684\u5199\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
$(this).trigger(&#39;listingUpdated&#39;, listing.id);

...

$(this).on(&#39;listingUpdated&#39;, function(e, listingId) {
  // do something with listingId
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u66F4\u597D\u7684\u5199\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// good
$(this).trigger(&#39;listingUpdated&#39;, { listingId : listing.id });

...

$(this).on(&#39;listingUpdated&#39;, function(e, data) {
  // do something with data.listingId
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><h2 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h2>`,14),ca=a(`<li><p><a href="#25.1">25.1</a> <a name="25.1"></a> \u4F7F\u7528 <code>$</code> \u4F5C\u4E3A\u5B58\u50A8 jQuery \u5BF9\u8C61\u7684\u53D8\u91CF\u540D\u524D\u7F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
const sidebar = $(&quot;.sidebar&quot;);

// good
const $sidebar = $(&quot;.sidebar&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><a href="#25.2">25.2</a> <a name="25.2"></a> \u7F13\u5B58 jQuery \u67E5\u8BE2\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
function setSidebar() {
  $(&quot;.sidebar&quot;).hide();

  // ...stuff...

  $(&quot;.sidebar&quot;).css({
    &quot;background-color&quot;: &quot;pink&quot;,
  });
}

// good
function setSidebar() {
  const $sidebar = $(&quot;.sidebar&quot;);
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    &quot;background-color&quot;: &quot;pink&quot;,
  });
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>`,2),ta=n("a",{href:"#25.3"},"25.3",-1),ua=s(),oa=n("a",{name:"25.3"},null,-1),ma=s(" \u5BF9 DOM \u67E5\u8BE2\u4F7F\u7528\u5C42\u53E0 "),da=n("code",null,"$('.sidebar ul')",-1),ha=s(" \u6216 \u7236\u5143\u7D20 > \u5B50\u5143\u7D20 "),ga=n("code",null,"$('.sidebar > ul')",-1),va=s("\u3002 "),fa={href:"http://jsperf.com/jquery-find-vs-context-sel/16",target:"_blank",rel:"noopener noreferrer"},_a=s("jsPerf"),ja=a(`<li><p><a href="#25.4">25.4</a> <a name="25.4"></a> \u5BF9\u6709\u4F5C\u7528\u57DF\u7684 jQuery \u5BF9\u8C61\u67E5\u8BE2\u4F7F\u7528 <code>find</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad
$(&quot;ul&quot;, &quot;.sidebar&quot;).hide();

// bad
$(&quot;.sidebar&quot;).find(&quot;ul&quot;).hide();

// good
$(&quot;.sidebar ul&quot;).hide();

// good
$(&quot;.sidebar &gt; ul&quot;).hide();

// good
$sidebar.find(&quot;ul&quot;).hide();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>`,1),qa=n("p",null,[n("strong",null,[n("a",{href:"#table-of-contents"},"\u2B06 \u8FD4\u56DE\u76EE\u5F55")])],-1),ka=n("p",null,[n("a",{name:"ecmascript-5-compatibility"})],-1),xa=n("h2",{id:"ecmascript-5-\u517C\u5BB9\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ecmascript-5-\u517C\u5BB9\u6027","aria-hidden":"true"},"#"),s(" ECMAScript 5 \u517C\u5BB9\u6027")],-1),ya=n("a",{href:"#26.1"},"26.1",-1),wa=s(),Sa=n("a",{name:"26.1"},null,-1),Na=s(" \u53C2\u8003 "),Aa={href:"https://twitter.com/kangax/",target:"_blank",rel:"noopener noreferrer"},Ea=s("Kangax"),Ta=s(" \u7684 ES5 "),Ia={href:"http://kangax.github.com/es5-compat-table/",target:"_blank",rel:"noopener noreferrer"},Oa=s("\u517C\u5BB9\u6027"),Ca=s("\u3002"),Ra=a('<p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><p><a name="ecmascript-6-styles"></a></p><h2 id="ecmascript-6-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#ecmascript-6-\u89C4\u8303" aria-hidden="true">#</a> ECMAScript 6 \u89C4\u8303</h2><ul><li><a href="#27.1">27.1</a> <a name="27.1"></a> \u4EE5\u4E0B\u662F\u94FE\u63A5\u5230 ES6 \u5404\u4E2A\u7279\u6027\u7684\u5217\u8868\u3002</li></ul><ol><li><a href="#arrow-functions">\u7BAD\u5934\u51FD\u6570</a></li><li><a href="#constructors">\u7C7B</a></li><li><a href="#es6-object-shorthand">\u5BF9\u8C61\u65B9\u6CD5\u7B80\u5199</a></li><li><a href="#es6-object-concise">\u5BF9\u8C61\u5C5E\u6027\u7B80\u5199</a></li><li><a href="#es6-computed-properties">\u5BF9\u8C61\u4E2D\u7684\u53EF\u8BA1\u7B97\u5C5E\u6027</a></li><li><a href="#es6-template-literals">\u6A21\u677F\u5B57\u7B26\u4E32</a></li><li><a href="#destructuring">\u89E3\u6784</a></li><li><a href="#es6-default-parameters">\u9ED8\u8BA4\u53C2\u6570</a></li><li><a href="#es6-rest">Rest</a></li><li><a href="#es6-array-spreads">\u6570\u7EC4 Spreads</a></li><li><a href="#references">Let \u53CA Const</a></li><li><a href="#iterators-and-generators">\u8FED\u4EE3\u5668\u548C\u751F\u6210\u5668</a></li><li><a href="#modules">\u6A21\u5757</a></li></ol><p><strong><a href="#table-of-contents">\u2B06 \u8FD4\u56DE\u76EE\u5F55</a></strong></p><h2 id="\u8D21\u732E\u8005" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E\u8005" aria-hidden="true">#</a> \u8D21\u732E\u8005</h2>',7),Ba={href:"https://github.com/airbnb/javascript/graphs/contributors",target:"_blank",rel:"noopener noreferrer"},Fa=s("\u67E5\u770B\u539F\u59CB\u9879\u76EE\u8D21\u732E\u8005"),Pa={href:"https://github.com/yuche/javascript/graphs/contributors",target:"_blank",rel:"noopener noreferrer"},$a=s("\u67E5\u770B\u7B80\u4E2D\u7FFB\u8BD1\u8D21\u732E\u8005"),Ha=n("h2",{id:"\u8BB8\u53EF\u534F\u8BAE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BB8\u53EF\u534F\u8BAE","aria-hidden":"true"},"#"),s(" \u8BB8\u53EF\u534F\u8BAE")],-1),Ma=n("p",null,"(The MIT License)",-1),Ga=n("p",null,"Copyright (c) 2014 Airbnb",-1),Ja=n("p",null,"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",-1),Da=n("p",null,"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",-1),La=n("p",null,"THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",-1),Va=n("p",null,[n("strong",null,[n("a",{href:"#table-of-contents"},"\u2B06 \u8FD4\u56DE\u76EE\u5F55")])],-1);function Ua(Wa,Qa){const r=l("ExternalLinkIcon"),i=l("RouterLink");return b(),c(u,null,[m,d,n("p",null,[h,g,n("a",v,[f,e(r)]),_,j,q,k,x]),n("p",null,[y,n("a",w,[S,e(r)])]),N,n("ul",null,[A,n("li",null,[n("p",null,[E,T,I,O,n("a",C,[R,e(r)]),B,n("a",F,[P,e(r)]),$]),H]),M]),G,n("ul",null,[J,n("li",null,[n("p",null,[D,L,V,U,n("a",W,[Q,e(r)]),Y,n("a",z,[K,e(r)]),X]),Z])]),nn,n("ul",null,[sn,n("li",null,[n("p",null,[an,en,rn,ln,pn,bn,cn,tn,n("a",un,[on,e(r)]),mn]),dn]),hn]),gn,n("ul",null,[n("li",null,[vn,n("blockquote",null,[n("p",null,[fn,_n,jn,n("a",qn,[kn,e(r)]),xn,n("a",yn,[wn,e(r)]),Sn])]),Nn]),An]),En,n("ul",null,[n("li",null,[n("p",null,[Tn,In,On,Cn,Rn,Bn,n("a",Fn,[Pn,e(r)]),$n]),Hn]),Mn]),Gn,n("ul",null,[n("li",null,[n("p",null,[Jn,Dn,Ln,Vn,Un,Wn,Qn,Yn,zn,Kn,n("a",Xn,[Zn,e(r)]),ns,n("a",ss,[as,e(r)]),es]),rs]),ls,n("li",null,[n("p",null,[is,n("a",ps,[bs,e(r)]),cs,n("a",ts,[us,e(r)]),os])])]),ms,ds,hs,n("ul",null,[gs,n("li",null,[n("p",null,[vs,fs,_s,js,n("a",qs,[ks,e(r)]),xs])])]),ys,n("blockquote",null,[n("p",null,[ws,e(i,{to:"/further/guide/es5/#commas"},{default:t(()=>[Ss]),_:1}),Ns])]),As,n("ul",null,[n("li",null,[Es,n("p",null,[n("a",Ts,[Is,e(r)]),Os])])]),Cs,Rs,Bs,n("ul",null,[Fs,n("li",null,[n("p",null,[Ps,$s,Hs,Ms,n("a",Gs,[Js,e(r)]),Ds]),Ls]),n("li",null,[n("p",null,[Vs,Us,Ws,Qs,Ys,zs,n("a",Ks,[Xs,e(r)]),Zs,n("a",na,[sa,e(r)]),aa,n("a",ea,[ra,e(r)]),la]),ia]),pa]),ba,n("ul",null,[ca,n("li",null,[n("p",null,[ta,ua,oa,ma,da,ha,ga,va,n("a",fa,[_a,e(r)])])]),ja]),qa,ka,xa,n("ul",null,[n("li",null,[ya,wa,Sa,Na,n("a",Aa,[Ea,e(r)]),Ta,n("a",Ia,[Oa,e(r)]),Ca])]),Ra,n("ul",null,[n("li",null,[n("a",Ba,[Fa,e(r)])]),n("li",null,[n("a",Pa,[$a,e(r)])])]),Ha,Ma,Ga,Ja,Da,La,Va],64)}var za=p(o,[["render",Ua],["__file","js.html.vue"]]);export{za as default};
