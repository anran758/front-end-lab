import{_ as l,r as i,o as t,c,a as e,b as s,F as o,d as r,e as n}from"./app.7e3542fd.js";var p="/front-end-lab/assets/box-model-example.ce69ab81.png";const u={},b=r(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><p>\u7EC6\u8282\u548C\u6280\u5DE7\u7684\u4EA4\u6C47\uFF0C\u672C\u7BC7\u7B14\u8BB0\u4E3B\u8981\u7528\u4E8E\u901F\u67E5\u3002</p><ul><li><a href="#%E7%BB%83%E6%89%8B%E7%BB%84%E4%BB%B6">\u7EC3\u624B\u7EC4\u4EF6</a></li><li><a href="#%E4%BB%A3%E7%A0%81%E7%AE%80%E5%8C%96">\u4EE3\u7801\u7B80\u5316</a><ul><li><a href="#%E7%A7%91%E5%AD%A6%E8%AE%A1%E6%95%B0%E6%B3%95-e">\u79D1\u5B66\u8BA1\u6570\u6CD5 E</a></li><li><a href="#%E4%B8%89%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6">\u4E09\u5143\u64CD\u4F5C\u7B26</a></li><li><a href="#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6">\u903B\u8F91\u8FD0\u7B97\u7B26</a></li></ul></li><li><a href="#utils">Utils</a><ul><li><a href="#%E5%88%A4%E6%96%AD%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B">\u5224\u65AD\u539F\u59CB\u7C7B\u578B</a></li><li><a href="#%E8%AE%A1%E7%AE%97%E6%98%9F%E5%BA%A7">\u8BA1\u7B97\u661F\u5EA7</a></li><li><a href="#array%E5%88%A0%E9%99%A4%E6%95%B0%E7%BB%84%E9%A1%B9">\u3010Array\u3011\u5220\u9664\u6570\u7EC4\u9879</a></li><li><a href="#array%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D">\u3010Array\u3011\u6570\u7EC4\u53BB\u91CD</a></li><li><a href="#array%E4%B8%AD%E6%96%87%E6%8E%92%E5%BA%8F">\u3010Array\u3011\u4E2D\u6587\u6392\u5E8F</a></li><li><a href="#array%E6%95%B0%E7%BB%84%E6%89%81%E5%B9%B3%E5%8C%96">\u3010Array\u3011\u6570\u7EC4\u6241\u5E73\u5316</a></li><li><a href="#number%E9%87%91%E9%A2%9D%E5%88%86%E9%9A%94">\u3010Number\u3011\u91D1\u989D\u5206\u9694</a></li><li><a href="#number%E7%94%9F%E6%88%90%E9%9A%8F%E6%9C%BA%E6%95%B0">\u3010Number\u3011\u751F\u6210\u968F\u673A\u6570</a></li><li><a href="#number%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%95%B0%E5%AD%97">\u3010Number\u3011\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57</a></li><li><a href="#number%E5%88%A4%E6%96%AD%E9%97%B0%E5%B9%B4%E5%87%BD%E6%95%B0">\u3010Number\u3011\u5224\u65AD\u95F0\u5E74\u51FD\u6570</a></li><li><a href="#stringurl-%E6%8B%BC%E6%8E%A5">\u3010String\u3011URL \u62FC\u63A5</a></li><li><a href="#string%E8%AE%A1%E7%AE%97%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6">\u3010String\u3011\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6</a></li><li><a href="#string%E7%94%9F%E6%88%90-uuid">\u3010String\u3011\u751F\u6210 UUID</a></li><li><a href="#string%E9%A9%BC%E5%B3%B0%E5%91%BD%E5%90%8D%E7%B1%BB%E5%9E%8B%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E4%B8%BA%E5%B8%B8%E9%87%8F%E5%91%BD%E5%90%8D%E7%B1%BB%E5%9E%8B">\u3010String\u3011\u9A7C\u5CF0\u547D\u540D\u7C7B\u578B\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5E38\u91CF\u547D\u540D\u7C7B\u578B</a></li><li><a href="#date%E8%8E%B7%E5%8F%96%E6%8C%87%E5%AE%9A%E5%A4%A9%E5%89%8D%E7%9A%84%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4">\u3010Date\u3011\u83B7\u53D6\u6307\u5B9A\u5929\u524D\u7684\u65F6\u95F4\u533A\u95F4</a></li></ul></li><li><a href="#store">Store</a><ul><li><a href="#localstorage">localStorage</a></li><li><a href="#cookie">cookie</a></li></ul></li><li><a href="#dom">DOM</a><ul><li><a href="#%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E5%AF%B9%E5%BA%94%E7%9A%84-dom-api">\u76D2\u5B50\u6A21\u578B\u5BF9\u5E94\u7684 DOM API</a></li><li><a href="#%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5%E8%8A%82%E7%82%B9">\u6279\u91CF\u63D2\u5165\u8282\u70B9</a></li><li><a href="#%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E4%B8%8E%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7">\u4E8B\u4EF6\u5192\u6CE1\u4E0E\u4E8B\u4EF6\u6355\u83B7</a></li></ul></li><li><a href="#%E6%8A%80%E6%9C%AF%E7%BB%86%E8%8A%82">\u6280\u672F\u7EC6\u8282</a><ul><li><a href="#parseint">parseInt</a></li><li><a href="#map-%E4%B8%8E-foreach-%E7%9A%84%E5%8C%BA%E5%88%AB">map \u4E0E forEach \u7684\u533A\u522B</a></li><li><a href="#symbol">Symbol</a></li><li><a href="#class">Class</a></li></ul></li><li><a href="#%E7%BC%96%E7%A0%81%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF">\u7F16\u7801\u8BBE\u8BA1\u601D\u8DEF</a><ul><li><a href="#%E9%99%90%E5%88%B6%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E6%95%B0%E9%87%8F">\u9650\u5236\u51FD\u6570\u53C2\u6570\u7684\u6570\u91CF</a></li></ul></li><li><a href="#%E4%B8%9A%E5%8A%A1%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF">\u4E1A\u52A1\u5B9E\u73B0\u601D\u8DEF</a><ul><li><a href="#%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%88%B0%E6%8C%87%E5%AE%9A%E4%BD%8D%E7%BD%AE%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87%E5%86%85%E5%AE%B9">\u9875\u9762\u6EDA\u5230\u6307\u5B9A\u4F4D\u7F6E\u663E\u793A\u56FE\u7247(\u5185\u5BB9)</a></li><li><a href="#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6">\u4E0B\u8F7D\u6587\u4EF6</a></li></ul></li></ul><h2 id="\u7EC3\u624B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u624B\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC3\u624B\u7EC4\u4EF6</h2><p>\u5982\u679C\u4E00\u4E9B\u521A\u5165\u95E8\u7684\u670B\u53CB\u5B66\u5B8C\u8BED\u6CD5\u540E\u4E0D\u77E5\u9053\u8BE5\u505A\u4EC0\u4E48\uFF0C\u53EF\u4EE5\u81EA\u4E2A\u5C1D\u8BD5\u5B9E\u73B0\u4EE5\u4E0B\u7684\u7B80\u5355\u7EC4\u4EF6\uFF0C\u5C06\u77E5\u8BC6\u5B66\u4EE5\u81F4\u7528\uFF1A</p><ul><li><strong>\u65E5\u5386</strong>: \u8003\u9A8C\u5BF9 <code>Date</code> \u5BF9\u8C61\u7684\u4F7F\u7528\u3002</li><li><strong>\u56DB\u5219\u8BA1\u7B97\u5668</strong>: \u8003\u9A8C\u5BF9\u5904\u7406<strong>\u6D6E\u70B9\u6570\u6EA2\u51FA</strong>\u7684\u80FD\u529B\u3001<code>Math</code> \u7684\u4F7F\u7528\u7B49\u3002</li><li><strong>\u8F6E\u64AD\u56FE</strong>: \u8003\u9A8C\u5BF9 setTimeout \u76F8\u5173\u7684\u5B9A\u65F6\u5668\u7684\u5904\u7406\u3002</li></ul><p><strong>\u7B80\u5355\u7B97\u6CD5</strong></p><ul><li>\u8BBE\u4EFB\u610F N \u884C\u5217\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u8981\u6C42\u87BA\u65CB\u6253\u5370\u51FA\u5176\u503C</li></ul><h2 id="\u4EE3\u7801\u7B80\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7B80\u5316" aria-hidden="true">#</a> \u4EE3\u7801\u7B80\u5316</h2><p>\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u53EF\u4EE5\u5728\u4FDD\u8BC1\u8BED\u4E49\u5316\u7684\u524D\u63D0\u4F7F\u7528\u4E00\u4E9B\u7B80\u5199\u65B9\u6CD5\u6765\u63D0\u5347\u4EE3\u7801\u7684\u7B80\u6D01\u6027</p><h3 id="\u79D1\u5B66\u8BA1\u6570\u6CD5-e" tabindex="-1"><a class="header-anchor" href="#\u79D1\u5B66\u8BA1\u6570\u6CD5-e" aria-hidden="true">#</a> \u79D1\u5B66\u8BA1\u6570\u6CD5 E</h3><p>\u4F3C\u4E4E\u5F88\u591A\u4EBA\u90FD\u4E0D\u7231\u7528<code>js</code>\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u4F46\u5B9E\u9645\u4E0A\u79D1\u5B66\u8BA1\u6570\u6CD5\u7528\u6765\u8868\u793A\u5927\u6570\u5B57\u80FD\u4F7F\u4EE3\u7801\u663E\u5F97\u5F88\u7B80\u6D01\u6613\u8BFB\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(1000000000 === 1e9); // true
console.log(1e9 * 4); // 4000000000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E24\u8005\u5BF9\u6BD4\u5C31\u80FD\u770B\u51FA\u5DEE\u5F02\uFF0C\u800C\u4E14\u79D1\u5B66\u8BA1\u6570\u6CD5\u4E5F\u80FD\u505A\u540C\u7B49\u7684\u8FD0\u7B97\u3002</p><h3 id="\u4E09\u5143\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4E09\u5143\u64CD\u4F5C\u7B26</h3><p>\u7528\u4E09\u5143\u64CD\u4F5C\u7B26\u4EE3\u66FF\u7B80\u5355<code>if...else</code>\u903B\u8F91\uFF0C\u9664\u4E86\u7B80\u6D01\u4E4B\u5916\u4E09\u5143\u64CD\u4F5C\u7B26\u8FD8\u6709\u4E00\u4E2A\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u7528\u4F5C\u6761\u4EF6\u9884\u52A0\u8F7D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const age = 16;

// bad
let hint = &quot;&quot;;
if (age &gt;= 18) {
  hint = &quot;\u6B22\u8FCE\u6253\u5F00\u65B0\u4E16\u754C(&quot;;
} else {
  hint = &quot;\u563F, \u672A\u6210\u5E74\u4E0D\u5F97\u5165\u5185!&quot;;
}

// good
const hint = age &gt;= 18 ? &quot;\u6B22\u8FCE\u6253\u5F00\u65B0\u4E16\u754C (&quot; : &quot;\u672A\u6210\u5E74\u4E0D\u5F97\u5165\u5185!&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97\u7B26</h3><p>\u5229\u7528\u597D <code>&amp;&amp;</code> \u548C <code>||</code> \u7279\u6027\u7684\u80FD\u529B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5728\u67D0\u4E9B\u573A\u666F\u4E0B, \u4F7F\u7528 &amp;&amp; \u64CD\u4F5C\u7B26\u4EE3\u66FF if \u80FD\u4F7F\u4F7F\u4F60\u7684\u4EE3\u7801\u53D8\u5F97\u66F4\u52A0\u7684\u6574\u6D01
let isMoving = false;
container.addEventListener(&quot;mousedown&quot;, () =&gt; (ismoving = true));
container.addEventListener(&quot;mouseup&quot;, () =&gt; (ismoving = false));

// if \u8BED\u53E5
container.addEventListener(&quot;mousemove&quot;, () =&gt; {
  if (isMoving) handleMove();
});

// &amp;&amp; \u64CD\u4F5C\u7B26. \u524D\u8005\u4E3A true \u7684\u8BDD, \u5C31\u8C03\u7528\u51FD\u6570
container.addEventListener(&quot;mousemove&quot;, () =&gt; isMoving &amp;&amp; handleMove());

// || \u64CD\u4F5C\u7B26\u5219\u76F8\u53CD\uFF0C\u53EA\u8981\u524D\u9762\u7684\u503C\u4E3Atrue\uFF0C\u5C31\u4E0D\u7EE7\u7EED\u5F80\u540E\u8D70\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><details><summary>\u4E0D\u518D\u5EFA\u8BAE\u4F7F\u7528\u7684\u7F16\u7A0B\u6280\u5DE7</summary><p>\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5199\u6CD5\u7B80\u6D01\u4F46\u53EF\u8BFB\u6027\u4E0D\u592A\u9AD8\u7684\u7F16\u7A0B\u6280\u5DE7\u3002\u8FD9\u4E9B\u6280\u5DE7\u4E00\u822C\u4E0D\u4F1A\u5728 web \u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u5728 <code>eslint</code> \u89C4\u5219\u4E2D\u662F\u88AB\u7981\u6B62\u4F7F\u7528\u7684\u3002\u4F46\u53EF\u4EE5\u4E86\u89E3\u4E00\u4E0B\u7528\u9014\uFF1A</p><p><strong>\u6309\u4F4D\u975E(\u6309\u4F4D\u53D6\u53CD):</strong></p><p>\u5BF9\u4EFB\u4E00\u6570\u503C<code>x</code>\u8FDB\u884C\u6309\u4F4D\u975E\u64CD\u4F5C\u7684\u7ED3\u679C\u4E3A<code>-(x + 1)</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(~1); // -2
console.log(~0); // -1
console.log(~-1); // 0

// \u5F53\u6CA1\u6709\u627E\u5230\u5185\u5BB9, \u65B9\u6CD5\u8FD4\u56DE -1 \u65F6, \u8FDB\u884C\u6309\u4F4D\u975E\u4F1A\u52A0\u4E00\u53D6\u53CD, \u5219\u4E3A 0
// \u8FD9\u4E2A\u65B9\u6CD5\u662F\u5229\u7528\u9690\u5F0F\u8F6C\u6362\uFF0C\u5728\u5224\u65AD\u4E2D\u4F1A\u5C06 0 \u9690\u5F0F\u8F6C\u6362\u4E3Afalse

// \u76F8\u5F53\u4E8E\u4E0B\u9762\u7684\u4EE3\u7801\u540C\u7B49\u7684\u6548\u679C
// names.some(name =&gt; linkName.indexOf(name) === -1)
names.some((name) =&gt; ~linkName.indexOf(name));
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u4F4D\u64CD\u4F5C\u7B26:</strong></p><p>\u5229\u7528\u6309\u4F4D\u6216 <code>|</code> \u5411\u4E0B\u53D6\u6574:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const num = 50.1234 | 0;

console.log(num); // 50
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>~~</code>\u622A\u9664\u5C0F\u6570\uFF0C\u4F46\u5B83\u53EA\u9002\u7528\u4E8E<code>32</code>\u4F4D\u6570\u5B57\u3002<br> \u867D\u8BF4\u524D\u8005\u4F1A\u66F4\u7B80\u5355\uFF0C\u4F46\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u64CD\u4F5C\u7B26\u4F18\u5148\u7EA7\u7684\u95EE\u9898\u3002\u56E0\u6B64\u4F7F\u7528\u65F6\u4E00\u5B9A\u8981\u4E86\u89E3\u5B83\u7684\u89C4\u5219\uFF0C\u540C\u65F6\u786E\u4FDD\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u8FDB\u884C\u4E24\u6B21\u53CD\u8F6C\u5B57\u4F4D\uFF0C\u7136\u540E\u51FA\u4E8E10
console.log(~~50.1234 / 10); // 5

console.log(50.1234 | (0 / 10)); // 50
console.log((50.1234 | 0) / 10); // 5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u538B\u7F29\u540E\u7684\u5E03\u5C14\u503C</strong></p><p>\u5F88\u591A\u7F16\u8BD1\u5668\u5728\u538B\u7F29\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4F1A\u7528 <code>!0</code> \u548C <code>!1</code> \u6765\u4EE3\u66FF\u5E03\u5C14\u503C <code>false</code> \u548C <code>true</code>\u3002\u56E0\u4E3A\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u6587\u4EF6\u4F53\u79EF, \u4F46\u4F1A\u7834\u574F\u4EE3\u7801\u53EF\u8BFB\u6027 (\u867D\u7136\u53EF\u8BFB\u6027\u662F\u7ED9\u4EBA\u770B\u5F97\uFF0C\u673A\u5668\u53EA\u5728\u4E4E\u8FD0\u884C\u6548\u7387)\u3002</p></details><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> Utils</h2><h3 id="\u5224\u65AD\u539F\u59CB\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u539F\u59CB\u7C7B\u578B" aria-hidden="true">#</a> \u5224\u65AD\u539F\u59CB\u7C7B\u578B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u76EE\u6807\u662F\u5426\u662F\u5BF9\u8C61
function isObject(obj) {
  return Object.prototype.toString.call(obj) === &quot;[object Object]&quot;;
}

// \u4F7F\u7528\u540C\u6837\u7684\u65B9\u6CD5\u8FDB\u884C\u6D4B\u8BD5, \u7ED3\u679C\u5982\u4E0B:
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(&quot;12&quot;); // [object String]
Object.prototype.toString.call(NaN); // [object Number]. \u6CE8\u610F, NaN \u662F\u5C5E\u4E8E\u6570\u5B57\u7C7B\u578B
Object.prototype.toString.call(345); // [object Number]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(Symbol()); // [object Symbol]
Object.prototype.toString.call(function () {}); // [object Function]

// \u6839\u636E\u4E0A\u8FF0\u89C4\u5219\uFF0C\u53EF\u4EE5\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u64CD\u4F5C
// \u83B7\u53D6\u57FA\u7840\u7C7B\u578B
function getBaseType(target) {
  const typeStr = Object.prototype.toString.call(target).toLocaleLowerCase();

  return typeStr.slice(8, -1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u8BA1\u7B97\u661F\u5EA7" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u661F\u5EA7" aria-hidden="true">#</a> \u8BA1\u7B97\u661F\u5EA7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u6839\u636E\u751F\u65E5\u7684\u6708\u4EFD\u548C\u65E5\u671F\uFF0C\u8BA1\u7B97\u661F\u5EA7\u3002
 * @param {String} month - \u6708\u4EFD
 * @param {String} day - \u65E5\u671F
 * @desc \u8FD4\u56DE\u661F\u5EA7\u540D
 */
function getAstro(month, day) {
  return &quot;\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u7261\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF&quot;.substr(
    month * 2 - (day &lt; &quot;102223444433&quot;.charAt(month - 1) - -19) * 2,
    2,
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u3010array\u3011\u5220\u9664\u6570\u7EC4\u9879" tabindex="-1"><a class="header-anchor" href="#\u3010array\u3011\u5220\u9664\u6570\u7EC4\u9879" aria-hidden="true">#</a> \u3010Array\u3011\u5220\u9664\u6570\u7EC4\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5220\u9664\u6570\u7EC4\u5143\u7D20, index \u4E3A\u6570\u7EC4\u7D22\u6027, \u53EA\u5220\u9664\u4E00\u4E2A
arr.splice(index, 1);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u3010array\u3011\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u3010array\u3011\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u3010Array\u3011\u6570\u7EC4\u53BB\u91CD</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let arr = [1, 2, 3, &quot;1&quot;, 5, 2, 4, 5, 3, 4];

/* es6 */
// \u5229\u7528 Set \u6CA1\u6709\u91CD\u590D\u503C\u7684\u7279\u6027\u53BB\u91CD, \u518D\u5C06\u5176\u8F6C\u4E3A\u6570\u7EC4.
let newarr = Array.from(new Set(arr));

// \u539F\u7406\u540C\u4E0A, \u53EA\u4E0D\u8FC7\u662F\u901A\u8FC7\u6269\u5C55\u8FD0\u7B97\u7B26\u6269\u5C55\u51FA\u6765
let newarr = [...new Set(arr)];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u3010array\u3011\u4E2D\u6587\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u3010array\u3011\u4E2D\u6587\u6392\u5E8F" aria-hidden="true">#</a> \u3010Array\u3011\u4E2D\u6587\u6392\u5E8F</h3>`,31),d=e("strong",null,"[IE11+]",-1),m=n(),h={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare",target:"_blank",rel:"noopener noreferrer"},g=n("String.prototype.localeCompare"),v=n("\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u914D\u5408\u6570\u7EC4\u7684"),E=e("code",null,"sort",-1),f=n("\u65B9\u6CD5\u8FDB\u884C\u6392\u5E8F\u3002"),q=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>[&quot;\u5F20\u4E09&quot;, &quot;\u674E\u56DB&quot;, &quot;\u738B\u4E94&quot;].sort((a, b) =&gt;
  a.localeCompare(b, &quot;zh-Hans-CN&quot;, { sensitivity: &quot;accent&quot; }),
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u3010array\u3011\u6570\u7EC4\u6241\u5E73\u5316" tabindex="-1"><a class="header-anchor" href="#\u3010array\u3011\u6570\u7EC4\u6241\u5E73\u5316" aria-hidden="true">#</a> \u3010Array\u3011\u6570\u7EC4\u6241\u5E73\u5316</h3><p>\u4E8C\u7EF4\u6570\u7EC4\u6241\u5E73\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [[1, 2, 3], [4, 5], [7, 8, 9], 10, null, undefined, {}];
const newArr = arr.reduce(
  (p, n) =&gt; (Array.isArray(n) ? p.concat(n) : (p.push(n), p)),
  [],
);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {\u2026}]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>[ES6+]</strong> \u591A\u7EF4\u6570\u7EC4\u6241\u5E73\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function flatten(arr) {
  const newArr = arr.map((item) =&gt;
    Array.isArray(item) ? flatten(item) : item,
  );
  return [].concat(...newArr);
}

const arr = [[1, 2, 3], [4, 5], [7, [8, [9]]], 10, null, undefined, {}];
const newArr = flatten(arr);

console.log(newArr); // [1, 2, 3, 4, 5, 7, 8, 9, 10, null, undefined, {\u2026}]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u3010number\u3011\u91D1\u989D\u5206\u9694" tabindex="-1"><a class="header-anchor" href="#\u3010number\u3011\u91D1\u989D\u5206\u9694" aria-hidden="true">#</a> \u3010Number\u3011\u91D1\u989D\u5206\u9694</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u5343\u4F4D\u5206\u9694\u7B26
 *
 * @param {Number} num - \u91D1\u989D
 * @returns \u8FD4\u56DE\u683C\u5F0F\u5316\u540E\u7684\u6570\u5B57
 */
function numberWithCommas(n) {
  // \u6B63\u5219\u89E3\u91CA: \u5339\u914D\u5230 \\B(\u975E\u5355\u8BCD\u8FB9\u754C)\u540E, \u540E\u9762\u8981\u5339\u914D\u5230 (\\d{3})+(?!\\d)
  // (\\d{3})+ \u81F3\u5C11\u5339\u914D\u5230\u4E00\u6B21\u6216\u591A\u6B21\u4E09\u4E2A\u6570\u5B57
  // (?!\\d) \u540C\u65F6\u540E\u9762\u4E0D\u662F\u6570\u5B57\u7684\u8BDD, \u5C31\u5339\u914D.
  // \u6CE8\u610F, \u540E\u9762\u7684 (?=) \u90A3\u4E00\u6BB5\u4EE3\u7801\u53EA\u662F\u5224\u65AD\u7684\u89C4\u5219, \u5339\u914D\u5230\u540E\u53EA\u66FF\u6362\u6389 \\B
  // \u800C \\B \u5143\u5B57\u7B26\u5339\u914D\u7684\u662F\u975E\u5355\u8BCD\u8FB9\u754C

  let num = n.toString().split(&quot;.&quot;);
  num[0] = num[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, &quot;,&quot;);
  return num.join(&quot;.&quot;);
}

console.log(numberWithCommas(12345678912.123)); // &quot;12,345,678,912.1234&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,8),x=n("\u4EE5\u4E0A\u65B9\u6CD5\u7684\u7F3A\u9677\u662F\u9700\u8981\u989D\u5916\u5904\u7406\u5C0F\u6570\u4F4D\uFF0C\u5728 "),_=e("code",null,"ES2018",-1),B=n(" \u4E2D\u53EF\u4EE5\u4F7F\u7528 "),A={href:"https://es6.ruanyifeng.com/#docs/regex#%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},j=n("\u540E\u884C\u65AD\u8A00"),y=n(" \u7684\u8BED\u6CD5(chrome 62+)\uFF0C\u53EF\u4EE5\u5B8C\u5168\u901A\u8FC7\u6B63\u5219\u6765\u5904\u7406\uFF0C\u6027\u80FD\u4E5F\u6BD4\u4E0A\u4E00\u79CD\u65B9\u5F0F\u4F1A\u66F4\u9AD8:"),k=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function numberWithCommas(x) {
  return x.toString().replace(/\\B(?&lt;!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, &quot;,&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details><summary>\u6D4B\u8BD5\u7528\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function numberWithCommas(x) {
  return x.toString().replace(/\\B(?&lt;!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, &quot;,&quot;);
}

function test(x, expect) {
  const result = numberWithCommas(x);
  const pass = result === expect;
  console.log(\`\${pass ? &quot;\u2713&quot; : &quot;ERROR ====&gt;&quot;} \${x} =&gt; \${result}\`);
  return pass;
}

let failures = 0;
failures += !test(0, &quot;0&quot;);
failures += !test(0.123456, &quot;0.123456&quot;);
failures += !test(100, &quot;100&quot;);
failures += !test(100.123456, &quot;100.123456&quot;);
failures += !test(1000, &quot;1,000&quot;);
failures += !test(1000.123456, &quot;1,000.123456&quot;);
failures += !test(10000, &quot;10,000&quot;);
failures += !test(10000.123456, &quot;10,000.123456&quot;);
failures += !test(100000, &quot;100,000&quot;);
failures += !test(100000.123456, &quot;100,000.123456&quot;);
failures += !test(1000000, &quot;1,000,000&quot;);
failures += !test(1000000.123456, &quot;1,000,000.123456&quot;);
failures += !test(10000000, &quot;10,000,000&quot;);
failures += !test(10000000.123456, &quot;10,000,000.123456&quot;);
if (failures) {
  console.log(\`\${failures} test(s) failed\`);
} else {
  console.log(&quot;All tests passed&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details>`,2),S=n("\u9664\u4E86\u6B63\u5219\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),N={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",target:"_blank",rel:"noopener noreferrer"},C=n("Number.prototype.toLocaleString"),D=n(" \u6216 "),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"},I=n("Intl.NumberFormat"),O=n(" \u6765\u683C\u5F0F\u6570\u5B57\u3002\u8BE5\u65B9\u6CD5\u7684\u7F3A\u70B9\u662F\u4F4E\u7248\u672C IE \u53CA\u79FB\u52A8\u7AEF\u7684\u517C\u5BB9\u6027\u652F\u6301\u4E0D\u591F\u597D."),L=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var num = 1234567.123456;

// toLocaleString
num.toLocaleString(); // &quot;1,234,567.123&quot;

// result =&gt; &quot;1,234,567.123&quot;
new Intl.NumberFormat().format(num);

// \u8BBE\u7F6E\u683C\u5F0F\u9009\u9879
var CNY_OPTIOONS = { style: &quot;currency&quot;, currency: &quot;CNY&quot; };

// result =&gt; &quot;\xA51,234,567.12&quot;
new Intl.NumberFormat(&quot;zh-CN&quot;, CNY_OPTIOONS).format(num);

// result =&gt; &quot;\xA51,234,567.123450&quot;
// \u8BBE\u7F6E\u5C0F\u6570\u4F4D
new Intl.NumberFormat(&quot;zh-CN&quot;, {
  ...CNY_OPTIOONS,
  minimumFractionDigits: 6,
}).format(num);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,1),U=n("\u6216\u8005\u4F7F\u7528 "),F={href:"https://github.com/adamwdraper/Numeral-js/blob/master/numeral.js",target:"_blank",rel:"noopener noreferrer"},M=n("numeral.js"),P=n(" \u8FDB\u884C\u6570\u5B57\u683C\u5F0F\u5316\u3002"),T=n("\u53C2\u8003\u8D44\u6599: "),$={href:"https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript",target:"_blank",rel:"noopener noreferrer"},R=n("How to print a number with commas as thousands separators in JavaScript"),z=r(`<h3 id="\u3010number\u3011\u751F\u6210\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u3010number\u3011\u751F\u6210\u968F\u673A\u6570" aria-hidden="true">#</a> \u3010Number\u3011\u751F\u6210\u968F\u673A\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u751F\u6210\u968F\u673A\u6570
 * @param {number} min - \u968F\u673A\u6570\u7684\u4E0B\u9650
 * @param {number} max - \u968F\u673A\u6570\u7684\u4E0A\u9650
 * @returns \u8FD4\u56DE\u6307\u5B9A\u8303\u56F4\u5185\u7684\u968F\u673A\u6570
 */
function randomRangeNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u3010number\u3011\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u3010number\u3011\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57" aria-hidden="true">#</a> \u3010Number\u3011\u5B57\u7B26\u4E32\u8F6C\u6570\u5B57</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>[&quot;1.1&quot;, &quot;4566&quot;, &quot;3e300&quot;].map(Number); // [1.1, 4566, 3e+300]
[&quot;1.1&quot;, &quot;456a&quot;, &quot;3e300&quot;].map(Number); // [1.1, NaN, 3e+300]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u3010number\u3011\u5224\u65AD\u95F0\u5E74\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u3010number\u3011\u5224\u65AD\u95F0\u5E74\u51FD\u6570" aria-hidden="true">#</a> \u3010Number\u3011\u5224\u65AD\u95F0\u5E74\u51FD\u6570</h3><p>\u5224\u65AD\u95F0\u5E74\u5176\u5B9E\u53EA\u8981\u6EE1\u8DB3\u4E0B\u9762\u51E0\u4E2A\u6761\u4EF6\u5373\u53EF:</p><ul><li>\u666E\u901A\u5E74<strong>\u80FD\u88AB 4 \u6574\u9664</strong>\u4E14<strong>\u4E0D\u80FD\u88AB 100 \u6574\u9664</strong>\u7684\u4E3A\u95F0\u5E74\u3002\u5982 2004 \u5E74\u5C31\u662F\u95F0\u5E74,1900 \u5E74\u4E0D\u662F\u95F0\u5E74</li><li><strong>\u4E16\u7EAA\u5E74</strong>\u80FD\u88AB<strong>400 \u6574\u9664</strong>\u7684\u662F\u95F0\u5E74\u3002\u5982 2000 \u5E74\u662F\u95F0\u5E74\uFF0C1900 \u5E74\u4E0D\u662F\u95F0\u5E74</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u5224\u65AD\u95F0\u5E74\u51FD\u6570
 * @param  {number} year \u8981\u5224\u65AD\u7684\u5E74\u4EFD
 * @return {bool} \u8FD4\u56DE\u5E03\u5C14\u503C
 */
function leapYear(year) {
  return !(year % (year % 100 ? 4 : 400));
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u3010string\u3011url-\u62FC\u63A5" tabindex="-1"><a class="header-anchor" href="#\u3010string\u3011url-\u62FC\u63A5" aria-hidden="true">#</a> \u3010String\u3011URL \u62FC\u63A5</h3>`,9),W=n("\u65B0\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528 "),G={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},H=n("URLSearchParams"),J=n(" API \u6765\u5904\u7406 URL \u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u517C\u5BB9\u6027\u4E3A Edge 17+\uFF1A"),Y=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const params = new URLSearchParams({
  name: &quot;Danny chan&quot;,
  age: 18,
});

console.log(&quot;params toString:&quot;, params.toString());
// params toString: name=Danny+chan&amp;age=18
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8001\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u62FC\u63A5\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u5904\u7406\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function param(data: object) {
  let url = &quot;&quot;;

  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : &quot;&quot;;
    url += \`&amp;\${k}=\${encodeURIComponent(value)}\`;
  }

  return url ? url.substring(1) : &quot;&quot;;
}

// \u4F7F\u7528\u793A\u4F8B
url += (url.indexOf(&quot;?&quot;) &gt; 0 ? &quot;?&quot; : &quot;&amp;&quot;) + param(data);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u3010string\u3011\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u3010string\u3011\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6" aria-hidden="true">#</a> \u3010String\u3011\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6</h3><p><code>unicode</code> \u7F16\u7801 <code>0 ~ 128</code> \u662F\u5355\u5B57\u8282\u7F16\u7801\u5E8F\u5217\u3002\u56E0\u6B64\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u7279\u70B9\u6765\u786E\u5B9A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6(\u5355\u53CC\u5B57\u8282\u5B9E\u9645\u5360\u4F4D)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u68C0\u67E5\u5B57\u7B26\u4E32\u4E2D\u7B2C\u51E0\u4E2A\u5B57\u7B26\u662F\u5426\u4E3A\u6C49\u5B57
 * @param { String } str \u5B57\u7B26\u4E32
 * @param { Number } i \u7B2C\u51E0\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6700\u5C0F\u4E3A 1
 */
function checkCHS(str, i = 1) {
  const code = str.charCodeAt(Math.min(0, i - 1));
  return code &gt; 255 || code &lt; 0;
}

/**
 * \u83B7\u53D6\u533A\u5206\u5355\u53CC\u5B57\u8282\u6587\u672C\u957F\u5EA6
 * @desc \u4EC5\u7528\u4E8E\u4E2D\u82F1\u6587\u957F\u5EA6\u5224\u65AD\uFF0C\u4E2D\u6587\u5360 2 \u4F4D\uFF0C\u82F1\u6587\u5360 1 \u4F4D
 *       \u6CE8\u610F: emoji \u7684\u5224\u65AD\u4F1A\u4E0D\u7CBE\u51C6
 */
function getStrLength(str) {
  let len = 0;

  for (let i = 1; i &lt;= str.length; i++) {
    len += checkCHS(str, i) ? 2 : 1;
  }

  return len;
}

console.log(
  &quot;[getStrLength result]:&quot;,
  getStrLength(&quot;\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341&quot;),
  getStrLength(&quot;1234567890&quot;),
  getStrLength(&quot;abcdefghij&quot;),
);
// [getStrLength result]: 20 10 10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="\u3010string\u3011\u751F\u6210-uuid" tabindex="-1"><a class="header-anchor" href="#\u3010string\u3011\u751F\u6210-uuid" aria-hidden="true">#</a> \u3010String\u3011\u751F\u6210 UUID</h3>`,7),V=n("UUID\uFF0C\u5373\u901A\u7528\u552F\u4E00\u8BC6\u522B\u7801\uFF08Universally Unique Identifier\uFF09\u7528\u4E8E\u8BA1\u7B97\u673A\u4F53\u7CFB\u4E2D\u4EE5\u8BC6\u522B\u4FE1\u606F\u7684\u4E00\u4E2A128\u4F4D\u6807\u8BC6\u7B26\u3002\u751F\u6210 UUID \u662F\u6709\u89C4\u8303\u7EA6\u675F\u7684\uFF0C\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B\u300A"),X={href:"https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%A0%81",target:"_blank",rel:"noopener noreferrer"},Z=n("\u901A\u7528\u552F\u4E00\u8BC6\u522B\u7801"),K=n("\u300B\u3002"),Q=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u751F\u6210\u552F\u4E00\u6807\u8BC6\u7B26
 */
function getUUID() {
  return &quot;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&quot;.replace(/[xy]/g, (str) =&gt; {
    const r = (Math.random() * 16) | 0;
    const v = str === &quot;x&quot; ? r : (r &amp; 0x3) | 0x8;

    return v.toString(16);
  });
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u3010string\u3011\u9A7C\u5CF0\u547D\u540D\u7C7B\u578B\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5E38\u91CF\u547D\u540D\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u3010string\u3011\u9A7C\u5CF0\u547D\u540D\u7C7B\u578B\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5E38\u91CF\u547D\u540D\u7C7B\u578B" aria-hidden="true">#</a> \u3010String\u3011\u9A7C\u5CF0\u547D\u540D\u7C7B\u578B\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5E38\u91CF\u547D\u540D\u7C7B\u578B</h3><p>\u6709\u65F6\u5019\u5F00\u53D1\u65F6\u9700\u8981\u5C06\u67D0\u4E9B\u9A7C\u5CF0\u547D\u4EE4\u89C4\u8303\u7684\u64CD\u4F5C\u8F6C\u4E3A\u5E38\u91CF\u5F62\u5F0F\uFF0C\u56E0\u6B64\u5199\u4E00\u4E2A\u5C0F\u51FD\u6570\u6765\u5904\u7406\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function modifyNamingType(name) {
  return name.replace(/([A-Z])/g, &quot;_$1&quot;).toUpperCase();
}

modifyNamingType(&quot;spaceNameMapping&quot;); // \u8F93\u51FA: &quot;SPACE_NAME_MAPPING&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u3010date\u3011\u83B7\u53D6\u6307\u5B9A\u5929\u524D\u7684\u65F6\u95F4\u533A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u3010date\u3011\u83B7\u53D6\u6307\u5B9A\u5929\u524D\u7684\u65F6\u95F4\u533A\u95F4" aria-hidden="true">#</a> \u3010Date\u3011\u83B7\u53D6\u6307\u5B9A\u5929\u524D\u7684\u65F6\u95F4\u533A\u95F4</h3><p>\u83B7\u53D6 rangeDay \u5929\u7684\u65F6\u95F4\u533A\u95F4\uFF0C\u533A\u95F4\u5728 <code>00:00:00 - 23:59:59</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function getFullDate(rangeDay) {
  const start = new Date().setHours(0, 0, 0, 0);
  const end = new Date().setHours(23, 59, 59, 999);
  const oneDay = 24 * 60 * 60 * 1000;

  return [start - rangeDay * oneDay, end];
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3><p>\u4F7F\u7528<code>localStorage</code>\u7684\u65F6\u5019\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u4E00\u4E9B\u5904\u7406\uFF1A</p><ul><li>\u5B58\u5165\u6570\u636E\u65F6\u5BF9\u76EE\u6807\u503C\u8F6C\u4E3A\u5408\u6CD5\u7684 JSON \u503C\uFF0C<code>localStorage.setItem(&#39;name&#39;, JSON.stringify(name))</code></li><li>\u8BFB\u53D6\u6570\u636E\u540E\u5BF9 JSON \u503C\u8FDB\u884C\u89E3\u6790\u53D6\u5F97\u76EE\u6807\u503C\uFF0C<code>JSON.parse(localStorage.getItem(&#39;name&#39;))</code></li></ul><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><blockquote><p>\u6D4F\u89C8\u5668<code>Cookie</code>\u662F\u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF0C\u5B83\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u6B21\u5411\u540C\u4E00\u670D\u52A1\u5668\u518D\u53D1\u8D77\u8BF7\u6C42\u65F6\u88AB\u643A\u5E26\u5E76\u53D1\u9001\u5230\u670D\u52A1\u5668\u4E0A</p></blockquote><p>cookie \u7684\u7528\u9014\uFF1A</p><ul><li>\u4F1A\u8BDD\u7BA1\u7406(\u7528\u6237\u72B6\u6001\u4FE1\u606F\u7B49)</li><li>\u4E2A\u6027\u5316\u8BBE\u7F6E(\u6839\u636E<code>cookie</code>\u4FE1\u606F\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u8FDB\u4E00\u6B65\u7684\u529F\u80FD)</li><li>\u6D4F\u89C8\u5668\u884C\u4E3A\u8DDF\u8E2A(\u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\u3001\u7EDF\u8BA1\u7B49)</li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>Cookie</code> \u7684\u8BED\u6CD5\u683C\u5F0F\u662F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document.cookie = newCookie;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u5BF9 <code>document.cookie</code> \u8FDB\u884C\u8D4B\u503C\u64CD\u4F5C\u65F6\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u8C03\u7528\u5B83\u5E95\u5C42\u6240\u7ED1\u5B9A\u7684\u51FD\u6570\u6765\u8BBE\u7F6E <code>cookie</code>\u3002\u5176\u4E2D <code>newCookie</code> \u662F\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u5B57\u7B26\u4E32\uFF0C\u5176\u683C\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u8BED\u6CD5\u683C\u5F0F
document.cookie = key=value[
    ;path=path |
    ;domain=domain |
    ;max-age=max-age-in-second |
    ;expires=date-in-GMTString-format |
    ;secure |
    ;samesite
]

// \u793A\u4F8B
document.cookie = &#39;nickname=anran758;path=/;max-age=31536000&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>key/value</code>\u8868\u793A<code>cookie</code>\u7684\u952E\u4E0E\u503C\uFF0C\u5176\u540E\u4E3A<code>cookie</code>\u7684\u5C5E\u6027\uFF0C\u7B80\u8981\u6982\u62EC\u4E00\u4E0B\uFF1A</p><table><thead><tr><th style="text-align:left;">cookie \u5C5E\u6027</th><th style="text-align:left;">\u4F5C\u7528</th><th style="text-align:left;">\u517C\u5BB9\u6027</th></tr></thead><tbody><tr><td style="text-align:left;">path</td><td style="text-align:left;">\u6307\u5B9A\u54EA\u4E9B\u8DEF\u5F84\u53EF\u4EE5\u63A5\u53D7<code>cookie</code>, \u4E0D\u6307\u5B9A\u5219\u4E3A\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6587\u6863\u7684\u4E3B\u673A</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">domain</td><td style="text-align:left;">\u6307\u5B9A\u54EA\u4E9B\u4E3B\u673A\u53EF\u4EE5\u63A5\u53D7<code>Cookie</code>, \u4E0D\u6307\u5B9A\u5219\u4E3A\u5F53\u524D\u9875\u9762\u7684\u6839\u76EE\u5F55<code>/</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max-age</td><td style="text-align:left;">\u6307\u5B9A\u4ECE\u73B0\u5728\u5F00\u59CB<code>Cookie</code>\u53EF\u4EE5\u5B58\u5728\u7684<strong>\u79D2\u6570</strong>, \u8D85\u65F6\u8BE5<code>cookie</code>\u5C31\u4F1A\u8FC7\u671F</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">expires</td><td style="text-align:left;">\u663E\u5F0F\u6307\u5B9A<code>cookie</code>\u5177\u4F53\u7684\u5230\u671F\u65F6\u95F4</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">secure</td><td style="text-align:left;"><code>Cookie</code>\u53EA\u80FD\u901A\u8FC7\u5B89\u5168\u534F\u8BAE\u4F20\u8F93\u4E3A<code>https</code></td><td style="text-align:left;">Chrome52+</td></tr><tr><td style="text-align:left;">samesite</td><td style="text-align:left;">\u963B\u6B62\u6D4F\u89C8\u5668\u53D1\u9001\u6B64<code>cookie</code>\u4EE5\u53CA\u8DE8\u7AD9\u70B9\u8BF7\u6C42</td><td style="text-align:left;">Chrome52+</td></tr></tbody></table><p>\u670D\u52A1\u7AEF\u53EF\u4EE5\u901A\u8FC7<code>HTTP</code>\u5934\u90E8<code>set-cookie</code>\u6765\u7ED9\u6D4F\u89C8\u5668\u8BBE\u7F6E<code>cookie</code>, \u683C\u5F0F\u5982\u4E0A\u6240\u793A\u3002</p><p>\u5982\u679C\u540C\u65F6\u6307\u5B9A\u4E86<code>Expires</code>\u548C<code>Max-Age</code>\uFF0C\u90A3\u4E48<code>Max-Age</code>\u7684\u503C\u5C06\u4F18\u5148\u751F\u6548\u3002</p><p><code>Set-Cookie</code>\u6CA1\u6709\u6307\u5B9A<code>Expires</code>\u6216<code>Max-Age</code>\u5C5E\u6027\uFF0C\u5219\u4E3A\u4F1A\u8BDD\u4FE1\u606F(<code>Session Cookie</code>), \u5173\u95ED\u6D4F\u89C8\u5668\u540E\u8BE5<code>cookie</code>\u5C31\u4F1A\u5931\u6548\u3002</p><hr><p><code>Cookie</code>\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7\u8BFB\u53D6<code>document.cookie</code>\u6765\u83B7\u53D6\uFF0C\u4F46\u662F\u8BFB\u53D6\u51FA\u6765\u7684\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A<code>cookie</code>\u4EE5<code>;</code>\u5206\u9694\u7684\u952E\u503C\u5BF9\u5B57\u7B26\u4E32\uFF0C\u5982<code>key=value;key1=value1</code>\u3002</p><p>\u4E86\u89E3\u4E86<code>cookies</code>\u7684\u89C4\u5219\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u5B83\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\u4EE5\u4FBF\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tools = {
  /**
   * \u8BFB\u53D6 cookies
   * @param name - cookie \u540D\uFF0C\u4E0D\u4F20\u62FF\u5168\u90E8
   */
  cookieGet(name) {
    const cookies = document.cookie.split(&quot;;&quot;).map((item) =&gt; {
      const [key, value] = item.trim().split(&quot;=&quot;);
      return { key, value };
    });

    if (!name) return cookies;

    const cookie = cookies.find((item) =&gt; item.key === name);
    return cookie ? cookie.value : null;
  },

  /**
   * \u8BBE\u7F6Ecookie
   * @param name - cookie \u540D
   * @param value - cookie \u503C
   * @param days - \u51E0\u5929\u540E\u8FC7\u671F
   * @param domain - \u8BE5 cookie \u5728\u54EA\u4E9B\u57DF\u540D\u4E0B\u53EF\u7528
   * @param path - \u6307\u5B9A cookie \u8DEF\u5F84
   */
  cookieSet(name, value, days, domain, path = &quot;/&quot;) {
    if (!name || !value) return false;

    let cookie = \`\${name}=\${value}\`;
    if (days === 0 || days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      cookie += \`; expires=\${date.toGMTString()}\`;
    }

    if (domain) cookie += \`; domain=\${domain}\`;
    if (path) cookie += \`; path=\${path}\`;
    document.cookie = cookie;

    return true;
  },
};

// \u67E5\u8BE2 cookie
tools.cookieGet(&quot;nickName&quot;); // null

// \u8BBE\u7F6E cookie
tools.cookieSet(&quot;nickName&quot;, &quot;anran758&quot;); // true
tools.cookieGet(&quot;nickName&quot;); // &quot;anran758&quot;

// \u6E05\u9664 cookie
tools.cookieSet(&quot;nickName&quot;, &quot;anran758&quot;, 0); // true
tools.cookieGet(&quot;nickName&quot;); // null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,28),nn=n("\u5177\u4F53\u66F4\u591A\u6709\u5173"),en=e("code",null,"cookies",-1),an=n("\u4FE1\u606F\u53EF\u4EE5\u6233"),sn={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"},rn=n("MDN - Cookies"),ln=r('<h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2><h3 id="\u76D2\u5B50\u6A21\u578B\u5BF9\u5E94\u7684-dom-api" tabindex="-1"><a class="header-anchor" href="#\u76D2\u5B50\u6A21\u578B\u5BF9\u5E94\u7684-dom-api" aria-hidden="true">#</a> \u76D2\u5B50\u6A21\u578B\u5BF9\u5E94\u7684 DOM API</h3><p><img src="'+p+`" alt="box model example"></p><p>\u76D2\u5B50\u6A21\u578B\u4E0A\u5BF9\u5E94\u7684 DOM API:</p><ul><li>border \u4E0A\u7684\u5B9E\u7EBF\u4E3A\u53EF\u89C6\u5C3A\u5BF8 -&gt; <code>clientWidth</code> (\u6807\u51C6 API)</li><li>margin \u4E0A\u7684\u865A\u7EBF\u4E3A\u5360\u636E\u5C3A\u5BF8 -&gt; <code>outerWidth</code> (\u975E\u6807\u51C6 API)</li></ul><h3 id="\u6279\u91CF\u63D2\u5165\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u63D2\u5165\u8282\u70B9" aria-hidden="true">#</a> \u6279\u91CF\u63D2\u5165\u8282\u70B9</h3><p>DOM \u64CD\u4F5C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u633A\u8017\u8D39\u6E32\u67D3\u6027\u80FD\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7684\u51CF\u5C11\u5BF9 DOM \u7684\u64CD\u4F5C\u3002</p><p>\u6BD4\u5982\u6279\u91CF\u63D2\u5165\u8282\u70B9\u65F6\u53EF\u4EE5\u5148\u5728 js \u4E2D\u5C06\u65B0\u521B\u5EFA\u7684\u8282\u70B9\u63D2\u5165\u5230 <code>Fragment</code> \u8282\u70B9\u4E2D\uFF0C\u518D\u5C06\u8BE5\u8282\u70B9\u63D2\u5165\u5230\u9875\u9762\u4E2D\uFF0C\u8FD9\u6837\u5C31\u4EC5\u89E6\u53D1\u4E00\u6B21\u6E32\u67D3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const $fragment = document.createDocumentFragment();
const $list = document.querySelector(&quot;.list&quot;);

for (let i = 0; i &lt; 10; i++) {
  const $ele = document.createElement(&quot;li&quot;);
  $ele.innerText = \`item - \${i}\`;
  $ele.setAttribute(&quot;class&quot;, &quot;item&quot;);

  $fragment.appendChild($ele);
}

$list.appendChild(fragment);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u4E8B\u4EF6\u5192\u6CE1\u4E0E\u4E8B\u4EF6\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5192\u6CE1\u4E0E\u4E8B\u4EF6\u6355\u83B7" aria-hidden="true">#</a> \u4E8B\u4EF6\u5192\u6CE1\u4E0E\u4E8B\u4EF6\u6355\u83B7</h3><p>\u4E8B\u4EF6\u6355\u83B7\u662F\u4ECE\u4E0A\u5230\u4E0B(click p, document -&gt; body -&gt; p)\uFF0C\u4E8B\u4EF6\u5192\u6CE1\u5219\u662F\u4ECE\u4E0B\u5230\u4E0A(click p, p -&gt; body -&gt; html)\u3002\u4F7F\u7528 <code>addEventListener</code> \u76D1\u542C\u4E8B\u4EF6\u65F6\u9ED8\u8BA4\u662F\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4F46\u6709\u4E00\u4E9B\u573A\u666F\u4F7F\u7528\u4E8B\u4EF6\u6355\u83B7\u4F1A\u6709\u5947\u6548\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u6B63\u5728\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u5185\u7F6E\u4E86 click \u4E8B\u4EF6\uFF0C\u5E76\u4E14\u6CA1\u6709\u5BF9\u5916\u66B4\u9732\u3002\u7EC4\u4EF6\u5185\u7684 click \u4E8B\u4EF6\u603B\u662F\u6BD4\u6211\u4EEC\u540E\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u5148\u89E6\u53D1\uFF0C\u8FD9\u65F6\u6211\u4EEC\u7684\u4E00\u4E9B\u9700\u6C42\u5C31\u6CA1\u6CD5\u5B9E\u73B0\u3002\u6B64\u65F6\u53EF\u4EE5\u5C06\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u6A21\u5F0F\u5207\u4E3A<strong>\u4E8B\u4EF6\u6355\u83B7</strong>\uFF0C\u8FD9\u65F6\u4E8B\u4EF6\u6355\u83B7\u4F1A\u5148\u4E8E\u4E8B\u4EF6\u5192\u6CE1\u89E6\u53D1\uFF0C\u8FD9\u6837\u5C31\u80FD\u8FBE\u5230\u9884\u671F\u7684\u6548\u679C\u3002</p><h2 id="\u6280\u672F\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u7EC6\u8282" aria-hidden="true">#</a> \u6280\u672F\u7EC6\u8282</h2><h3 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt</h3><p>\u5728<code>ES5</code>\u4E4B\u524D\uFF0C<code>parseInt</code>\u5728\u6CA1\u6709\u4F20\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u4F20\u5165\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u6765\u5224\u65AD\u4F7F\u7528\u4EC0\u4E48\u65B9\u5F0F\u8FDB\u884C\u89E3\u6790\uFF0C\u8FD9\u4E2A\u5386\u53F2\u9057\u7559\u7684\u95EE\u9898\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9884\u671F\u4E4B\u5916\u7684\u6548\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parseInt(&quot;08&quot;); // \u6709\u4E9B\u65E7\u7248\u672C\u7684\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u89E3\u6790\u4E3A 0\uFF0C \u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u5F53\u505A\u516B\u8FDB\u5236\u8FDB\u884C\u89E3\u6790\u3002

// \u56E0\u6B64\u6211\u4EEC\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u663E\u793A\u52A0\u4E0A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u8981\u8BA9\u6D4F\u89C8\u5668\u53BB\u731C
parseInt(&quot;08&quot;, 10); // 8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD8\u6709\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u5C31\u662F\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5C06<code>parseInt</code>\u4F5C\u4E3A\u6570\u7EC4<code>map</code>\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56E0\u4E3A\u4E24\u8005\u6240\u4F20(\u63A5\u53D7)\u7684\u5F62\u53C2\u7684\u7528\u9014\u4E0D\u4E00:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>[1, 2, 3].map(parseInt); // [1, NaN, NaN]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),tn={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt",target:"_blank",rel:"noopener noreferrer"},cn=n("parseInt(string, radix)"),on=n(" \u51FD\u6570\u89E3\u6790\u4E00\u4E2A\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6307\u5B9A\u57FA\u6570\u7684\u6574\u6570;"),pn=r('<p>\u4E0A\u9762\u7684\u4F8B\u5B50\u5C31\u662F\u56E0\u4E3A<code>map</code>\u51FD\u6570\u4F20\u5165\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u6570\u7EC4\u7684\u7D22\u5F15(<code>index</code>)\u3002<code>parseInt</code>\u5728\u5904\u7406\u5230<code>2</code>\u65F6\uFF0C\u4F20\u5165\u4E86\u7D22\u5F15<code>2</code>\u4F5C\u4E3A\u57FA\u6570\uFF0C\u7136\u800C\u4E8C\u8FDB\u5236\u5E76\u6CA1\u6709<code>2</code>\u8FD9\u4E2A\u6570\u5B57\uFF0C\u5904\u7406\u540E\u81EA\u7136\u4F1A\u8FD4\u56DE<code>NaN</code>\u3002</p><h3 id="map-\u4E0E-foreach-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#map-\u4E0E-foreach-\u7684\u533A\u522B" aria-hidden="true">#</a> map \u4E0E forEach \u7684\u533A\u522B</h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u76F8\u540C\u4E4B\u5904</th><th>\u4E0D\u540C\u4E4B\u5904</th></tr></thead><tbody><tr><td><code>map</code></td><td>\u540C\u6837\u7528\u4E8E\u904D\u5386\u6570\u7EC4</td><td><code>map</code>\u5BF9\u6BCF\u9879\u8C03\u7528\u7684\u51FD\u6570\u540E\u4F1A\u53D6\u5F97\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u5E76\u63A8\u5165\u65B0\u7684\u6570\u7EC4\u4E2D\u53BB(\u610F\u5473\u7740\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528)\u3002<br>\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u6709\u6570\u7EC4\u624D\u80FD\u4F7F\u7528\u3002</td></tr><tr><td><code>forEach</code></td><td>\u540C\u6837\u7528\u4E8E\u904D\u5386\u6570\u7EC4</td><td><code>forEach</code>\u5355\u7EAF\u5BF9\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4E0D\u4F5C\u5176\u4ED6\u64CD\u4F5C\u3002<br>\u8BE5\u65B9\u6CD5\u5E76\u4E0D\u662F\u53EA\u6709\u6570\u7EC4\u80FD\u7528\uFF0C\u90E8\u5206\u7C7B\u6570\u7EC4(\u5982 NodeList)\u4E5F\u6709\u8FD9\u4E2A\u65B9\u6CD5\u3002</td></tr></tbody></table>',3),un=n("\u8BE5\u95EE\u9898\u7B14\u8005\u66FE\u5728\u77E5\u4E4E\u4E0A\u56DE\u7B54\u8FC7\u66F4\u8BE6\u7EC6\u7684\u56DE\u7B54: "),bn={href:"https://www.zhihu.com/question/278332594/answer/886056097",target:"_blank",rel:"noopener noreferrer"},dn=n("js es6 \u4E2D\u5982\u4F55\u6BD4\u8F83\u6DF1\u523B\u7684\u7406\u89E3 for \u3001for of \u3001 map\uFF1F - anran758\u7684\u56DE\u7B54 - \u77E5\u4E4E"),mn=r(`<blockquote><p>\u4F60\u77E5\u9053\u5417\uFF1F</p></blockquote><p>\u6570\u7EC4\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7C7B\u5217\u8868\u5BF9\u8C61\uFF0C\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u5728\u6570\u7EC4\u4E0A\u6DFB\u52A0\u5C5E\u6027\uFF0C\u867D\u7136\u4E00\u822C\u4E0D\u5E38\u8FD9\u6837\u505A\u3002</p><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h3><ol><li>\u6211\u4EEC\u4F7F\u7528 Symbol \u4E3B\u8981\u662F\u56E0\u4E3A\u5B83\u72EC\u4E00\u65E0\u4E8C\u7684\u7279\u6027(\u907F\u514D\u8986\u76D6)\u3002</li><li>\u5BF9\u4E8E\u4E00\u4E9B\u79C1\u6709\u7684\u65B9\u6CD5\uFF0C\u6700\u597D\u4F7F\u7528 Symbol \u4F5C\u4E3A key\u3002\u4F46\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u7528 Symbol \u4F5C\u4E3A key\u7684\u8BDD\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\uFF0C\u4E0D\u4F1A\u88AB <code>for</code> \u5FAA\u73AF\u3001<code>Object.keys</code>\u7B49\u904D\u5386\u8FD4\u56DE\u3002</li></ol><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h3><ol><li>Class \u548C\u4F20\u7EDF\u7684 <code>prototype</code> \u5728\u53EF\u679A\u4E3E\u6027\u662F\u4E0D\u4E00\u6837\u7684\uFF0CClass \u4E0D\u901A\u8FC7 <code>this.__protp__</code> \u4E0A\u83B7\u53D6\u539F\u578B\u65B9\u6CD5</li><li>Class \u5185\u90E8\u9ED8\u8BA4\u91C7\u7528\u4E25\u683C\u6A21\u5F0F(\u610F\u5473\u7740\u4E0D\u80FD\u4F7F\u7528\u975E\u4E25\u683C\u6027\u8BED\u6CD5\u4E86)</li><li>Class \u5FC5\u987B\u4F7F\u7528 new \u6765\u8C03\u7528, \u4F46\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7C7B\u7684\u9759\u6001\u65B9\u6CD5</li><li>ES6\u7684 Class \u5728\u91CD\u65B0\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0Cthis \u6307\u5411\u4F1A\u4E22\u5931\u3002\u89E3\u51B3\u7684\u65B9\u6CD5\u662F\u5728 <code>constructor</code> \u4E2D\u786C\u7ED1\u5B9A(bind) this\u3002</li></ol><h2 id="\u7F16\u7801\u8BBE\u8BA1\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u8BBE\u8BA1\u601D\u8DEF" aria-hidden="true">#</a> \u7F16\u7801\u8BBE\u8BA1\u601D\u8DEF</h2><blockquote><p>\u8BB0\u5F55\u5728\u5F00\u53D1\u65F6\u7B14\u8005\u4E2A\u4EBA\u6BD4\u8F83\u63A8\u5D07\u7684\u7F16\u7801\u4E60\u60EF</p></blockquote><h3 id="\u9650\u5236\u51FD\u6570\u53C2\u6570\u7684\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u51FD\u6570\u53C2\u6570\u7684\u6570\u91CF" aria-hidden="true">#</a> \u9650\u5236\u51FD\u6570\u53C2\u6570\u7684\u6570\u91CF</h3><p>\u5728\u62BD\u8C61\u51FD\u6570\u65F6\u5EFA\u8BAE\u63A5\u6536\u7684\u53C2\u6570\u4E0D\u8981\u8D85\u8FC7 3 \u4E2A\u3002\u82E5\u9700\u8981\u4F20\u5165\u591A\u4E2A\u53C2\u6570\uFF0C\u51FD\u6570\u63A5\u6536\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u5E94\u4E3A\u5BF9\u8C61\uFF0C\u901A\u8FC7\u89E3\u6784\u8BED\u6CD5\u6765\u83B7\u53D6\u53C2\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bad code
function getUserList(id, query, limit, level = 1, blocked = false) {
  // other code....
}

// \u83B7\u53D6\u7528\u6237\u5217\u8868
const list = await getUserList(userId, query, 20, 1, true);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E0D\u770B\u51FD\u6570\u7684\u5B9A\u4E49\u662F\u5F88\u96BE\u7406\u89E3\u540E\u9762\u51E0\u4E2A\u53C2\u6570\u7684\u4F5C\u7528\uFF0C\u989D\u5916\u589E\u52A0\u7406\u89E3\u6210\u672C\u3002 \u6B64\u5916\u82E5\u53C2\u6570 <code>level</code> \u60F3\u4F7F\u7528\u9ED8\u8BA4\u503C\u4F46\u540E\u9762\u7684 <code>blocked</code> \u60F3\u8981\u6307\u5B9A\u503C\u7684\u8BDD\u53EA\u80FD\u901A\u8FC7 <code>getUserList(userId, query, 20, undefined, true)</code> \u65B9\u5F0F\u8C03\u7528\uFF0C\u4EE3\u7801\u4F1A\u663E\u5F97\u5F88\u4E11\u964B\u3002</p><p>\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4E00\u4E2A\u51FD\u6570\u5185\u63A5\u53D7\u8FC7\u591A\u7684\u53C2\u6570\uFF0C\u82E5\u6709\u9700\u8981\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u7684\u65B9\u5F0F\u4F20\u503C\u3002\u5199\u4E0A\u6307\u5B9A\u9009\u9879\u8FD8\u80FD\u8C03\u7528\u51FD\u6570\u7684\u53EF\u8BFB\u6027:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// good code
function getUserList(id, query, { limit, level, blocked } = {}) {
  // other code....
}

// \u83B7\u53D6\u7528\u6237\u5217\u8868
const list = await getUserList(userId, query, {
  limit: 20,
  blocked: true,
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6B64\u5916\u901A\u8FC7\u5BF9\u8C61\u89E3\u6784\u7684\u8BED\u6CD5\u4F1A\u4F7F\u51FD\u6570\u8C03\u7528\u65F6</p><h2 id="\u4E1A\u52A1\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u4E1A\u52A1\u5B9E\u73B0\u601D\u8DEF</h2><p>\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u903B\u8F91\u7684\u5904\u7406\u601D\u8DEF\u3002</p><h3 id="\u9875\u9762\u6EDA\u5230\u6307\u5B9A\u4F4D\u7F6E\u663E\u793A\u56FE\u7247-\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6EDA\u5230\u6307\u5B9A\u4F4D\u7F6E\u663E\u793A\u56FE\u7247-\u5185\u5BB9" aria-hidden="true">#</a> \u9875\u9762\u6EDA\u5230\u6307\u5B9A\u4F4D\u7F6E\u663E\u793A\u56FE\u7247(\u5185\u5BB9)</h3><p><strong>HTML</strong>: \u7ED9\u76EE\u6807 DOM \u8BBE\u7F6E\u6307\u5B9A\u7C7B\u540D</p><p><strong>CSS</strong>: \u7ED9\u7C7B\u540D\u8BBE\u7F6E css3 \u5C5E\u6027</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.align-left.slide-in {
  transform: translateX(-30%) scale(0.95);
}

.align-right.slide-in {
  transform: translateX(30%) scale(0.95);
}

.slide-in.active {
  opacity: 1;
  transform: translateX(0%) scale(1);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>JavaScript</strong>:</p><ol><li>\u83B7\u53D6\u76EE\u6807\u7C7B\u540D, \u76D1\u542C window \u6EDA\u52A8, \u8BA1\u7B97\u6EDA\u52A8\u7684\u8DDD\u79BB</li><li>\u8BA1\u7B97\u6EDA\u52A8\u7684\u4F4D\u7F6E (slideInAt): window.scrollY(\u6D4F\u89C8\u5668\u6EDA\u52A8Y\u8F74\u4F4D\u7F6E) + window.innerHeight(\u7A97\u53E3\u9AD8\u5EA6) - \u5185\u5BB9(\u56FE\u7247)\u5BBD\u5EA6\u7684\u4E00\u534A\u3002(\u4E5F\u5C31\u662F\u8BF4\u5F53\u6EDA\u5230\u6307\u5B9A\u5185\u5BB9\u4E00\u534A\u4F4D\u7F6E\u7684\u65F6\u5019\u5C31\u6DFB\u52A0\u7C7B\u540D)</li><li>\u5224\u65AD\u6EDA\u52A8\u8DDD\u79BB\uFF0C\u82E5\u6EDA\u52A8\u8DDD\u79BB (slideInAt) \u5927\u4E8E \u5185\u5BB9\u7684 offsetTop\uFF0C\u6DFB\u52A0\u7C7B\u540D\u53CD\u4E4B\u79FB\u9664\u7C7B\u540D</li></ol><h3 id="\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * download file
 * @param { String } url \u8BF7\u6C42\u7684\u94FE\u63A5
 * @param { String } filename \u4FDD\u5B58\u7684\u6587\u4EF6\u540D
 * @param { String } onProgress \u5904\u7406\u4E0B\u8F7D\u8FDB\u5EA6
 */
function downloadFile(url, filename, onProgress) {
  const req = new XMLHttpRequest();

  req.onprogress = onProgress;
  req.open(&quot;GET&quot;, url, true);
  req.responseType = &quot;blob&quot;;

  req.onload = function (event) {
    var blob = req.response;
    var link = document.createElement(&#39;a&#39;);
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  req.send();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,25);function hn(gn,vn){const a=i("ExternalLinkIcon");return t(),c(o,null,[b,e("p",null,[d,m,e("a",h,[g,s(a)]),v,E,f]),q,e("p",null,[x,_,B,e("a",A,[j,s(a)]),y]),k,e("p",null,[S,e("a",N,[C,s(a)]),D,e("a",w,[I,s(a)]),O]),L,e("p",null,[U,e("a",F,[M,s(a)]),P]),e("p",null,[T,e("a",$,[R,s(a)])]),z,e("p",null,[W,e("a",G,[H,s(a)]),J]),Y,e("p",null,[V,e("a",X,[Z,s(a)]),K]),Q,e("p",null,[nn,en,an,e("a",sn,[rn,s(a)])]),ln,e("p",null,[e("a",tn,[cn,s(a)]),on]),pn,e("p",null,[un,e("a",bn,[dn,s(a)])]),mn],64)}var fn=l(u,[["render",hn],["__file","index.html.vue"]]);export{fn as default};
