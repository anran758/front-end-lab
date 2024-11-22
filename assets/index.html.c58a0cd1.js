import{_ as l,r as p,o as i,c as b,a as n,b as e,F as c,d as r,e as a}from"./app.7e3542fd.js";var d="/front-end-lab/assets/regex.0a5a4141.jpg",u="/front-end-lab/assets/regexper.4b82ad90.png";const t={},m=r('<h1 id="regexp-\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#regexp-\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> REGEXP (\u6B63\u5219\u8868\u8FBE\u5F0F)</h1><p><img src="'+d+'" alt="banner"></p><blockquote><p>tips: \u5584\u7528<code>Ctrl + F</code>\u8F93\u5165\u5173\u952E\u5B57\u80FD\u63D0\u9AD8\u67E5\u8BE2\u7684\u6548\u7387\u54DF~</p></blockquote><p>\u81EA\u5DF1\u6536\u96C6\u4E86\u4E00\u5957\u9488\u5BF9\u5DE5\u4F5C\u4E2D\u6240\u9700\u7684\u6B63\u5219\u8868\u8FBE\u5F0F. \u591A\u9002\u7528\u4E8E\u5B57\u7B26\u4E32\u5904\u7406\u3001\u8868\u5355\u9A8C\u8BC1\u3001\u65E5\u5FD7\u6570\u636E\u5206\u6790\u7B49\u573A\u5408\uFF0C\u5B9E\u7528\u9AD8\u6548, \u5C06\u957F\u671F\u7EF4\u62A4\u3002</p><ul><li><a href="#%E5%B8%B8%E8%A7%81%E6%AD%A3%E5%88%99%E6%A0%A1%E9%AA%8C">\u5E38\u89C1\u6B63\u5219\u6821\u9A8C</a><ul><li><a href="#%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81">\u8868\u5355\u9A8C\u8BC1</a></li><li><a href="#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3">\u7F51\u7EDC\u76F8\u5173</a></li><li><a href="#%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F">\u8054\u7CFB\u65B9\u5F0F</a></li><li><a href="#%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E6%95%B0%E5%AD%97">\u5339\u914D\u7279\u5B9A\u6570\u5B57</a></li><li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E5%85%B3">\u5B57\u7B26\u4E32\u76F8\u5173</a></li><li><a href="#%E5%8C%B9%E9%85%8D%E8%AF%AD%E7%B3%BB%E5%AD%97%E7%AC%A6%E8%8C%83%E5%9B%B4">\u5339\u914D\u8BED\u7CFB\u5B57\u7B26\u8303\u56F4</a></li></ul></li><li><a href="#%E6%AD%A3%E5%88%99%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">\u6B63\u5219\u51FD\u6570\u4F7F\u7528\u793A\u4F8B</a><ul><li><a href="#replace">replace</a></li><li><a href="#test">test</a></li></ul></li><li><a href="#%E6%AD%A3%E5%88%99%E6%8A%80%E5%B7%A7">\u6B63\u5219\u6280\u5DE7</a><ul><li><a href="#%E5%8F%8D%E5%90%91%E5%BC%95%E7%94%A8">\u53CD\u5411\u5F15\u7528</a></li><li><a href="#%E5%BF%BD%E7%95%A5%E5%88%86%E7%B5%84">\u5FFD\u7565\u5206\u7D44</a></li><li><a href="#%E5%89%8D%E7%9E%BB">\u524D\u77BB</a></li></ul></li></ul><hr>',6),o={href:"https://regexper.com/",target:"_blank",rel:"noopener noreferrer"},h=a("REGEXP \u53EF\u89C6\u5316\u5DE5\u5177"),v=r(`<iframe title="regexp" src="https://regexper.com/" style="height:600px;width:100%;"></iframe><h2 id="\u5E38\u89C1\u6B63\u5219\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u6B63\u5219\u6821\u9A8C" aria-hidden="true">#</a> \u5E38\u89C1\u6B63\u5219\u6821\u9A8C</h2><h3 id="\u8868\u5355\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u9A8C\u8BC1" aria-hidden="true">#</a> \u8868\u5355\u9A8C\u8BC1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u7528\u6237\u540D\u6B63\u5219\uFF0C4\u523016\u4F4D\uFF08\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u4E0B\u5212\u7EBF\uFF0C\u51CF\u53F7\uFF09
var userNameReg = /^[a-zA-Z0-9_-]{4,16}$/;

// \u5FC5\u987B\u62E5\u6709\u6570\u5B57\u548C\u7279\u6B8A\u5B57\u7B26\uFF0C\u5E76\u4E14\u57286 ~ 16\u4F4D\u4E4B\u95F4
// (?=.*[0-9]) - \u65AD\u8A00\u4E00\u4E2A\u5B57\u7B26\u4E32\u81F3\u5C11\u6709\u4E00\u4E2A\u6570\u5B57;
// (?=.*[!@#$%^&amp;*]) - \u65AD\u8A00\u4E00\u4E2A\u5B57\u7B26\u4E32\u81F3\u5C11\u6709\u4E00\u4E2A\u7279\u6B8A\u5B57\u7B26\u3002
var reg = /^(?=.*[0-9])(?=.*[!@#$%^&amp;*])[a-zA-Z0-9!@#$%^&amp;*]{6,16}$/;

// \u5339\u914D\u90AE\u7BB1\u5730\u5740
var mailReg = /\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/;

// \u4E2D\u56FD\u516D\u4F4D\u6570\u7684\u90AE\u653F\u7F16\u7801
var postalCode = /^\\d{6}$/;

// \u5339\u914D15~18\u4F4D\u8EAB\u4EFD\u8BC1
var IDCard =
  /(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$)/;

// \u5339\u914D18\u4F4D\u7684\u65B0\u7248\u8EAB\u4EFD\u8BC1
var IDCard_18 =
  /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;

// \u6821\u9A8C\u8F93\u5165\u6846\u662F\u5B57\u7B26\u6570\u4E3A\u662F\u5426\u4E3A 4~16 \u4F4D(\u82F1\u6587\u957F\u5EA6\u4E3A1, \u6C49\u5B57\u957F\u5EA6\u4E3A2)
var numName = /^[a-zA-Z0-9]{4,16}$/;
var mate = numName.test(value.replace(/[\\u4e00-\\u9fa5]/g, &quot;aa&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u7F51\u7EDC\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u76F8\u5173" aria-hidden="true">#</a> \u7F51\u7EDC\u76F8\u5173</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>//ipv4\u5730\u5740\u6B63\u5219
var IPReg =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Reg Hex\u989C\u8272\u6B63\u5219
var pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

// URL\u6B63\u5219
var urlReg =
  /^((https?|ftp|file):\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/;

// \u5339\u914DJSON\u683C\u5F0F
var reg = /^\\w+\\(({[^()]+})\\)$/;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5339\u914D<code>json</code>\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var ret = response.data;
if (typeof ret === &quot;string&quot;) {
  var reg = /^\\w+\\(({[^()]+})\\)$/;
  var matches = ret.match(reg);

  if (matches) ret = JSON.parse(matches[1]);
}

res.json(ret);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u8054\u7CFB\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8054\u7CFB\u65B9\u5F0F" aria-hidden="true">#</a> \u8054\u7CFB\u65B9\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 5-11\u4F4D\u7684\u817E\u8BAFqq\u53F7
var qqReg = /^[1-9][0-9]{4,11}$/;

// \u5FAE\u4FE1\u53F7\u6B63\u5219\uFF0C6\u81F320\u4F4D\uFF0C\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u51CF\u53F7\uFF0C\u4E0B\u5212\u7EBF
var qqReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

// \u56FD\u5185\u5E38\u89C1
var phone = /^1[3|5|8|9]\\d{9}$/;

// \u56FA\u5B9A\u7535\u8BDD
var telephone = /^(0[0-9]{2})\\d{8}$|^(0[0-9]{3}(\\d{7,8}))$/;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5339\u914D\u7279\u5B9A\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u7279\u5B9A\u6570\u5B57" aria-hidden="true">#</a> \u5339\u914D\u7279\u5B9A\u6570\u5B57</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5339\u914D\u6B63\u6574\u6570
var reg = /^[1-9]\\d*$/;

// \u5339\u914D\u8D1F\u6574\u6570
var reg = /^-[1-9]\\d*$/;

// \u5339\u914D\u6574\u6570
var reg = /^-?[1-9]\\d*$/;

// \u5339\u914D\u975E\u8D1F\u6574\u6570\uFF08\u6B63\u6574\u6570 + 0\uFF09
var reg = /^[1-9]\\d*|0$/;

// \u5339\u914D\u975E\u6B63\u6574\u6570\uFF08\u8D1F\u6574\u6570 + 0\uFF09
var reg = /^-[1-9]\\d*|0$/;

// \u5339\u914D\u6B63\u6D6E\u70B9\u6570
var reg = /^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$/;

// \u5339\u914D\u8D1F\u6D6E\u70B9\u6570
var reg = /^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$/;

// \u5339\u914D\u6D6E\u70B9\u6570
var reg = /^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$/;

// \u5339\u914D\u975E\u8D1F\u6D6E\u70B9\u6570\uFF08\u6B63\u6D6E\u70B9\u6570 + 0\uFF09
var reg = /^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$/;

// \u5339\u914D\u975E\u6B63\u6D6E\u70B9\u6570\uFF08\u8D1F\u6D6E\u70B9\u6570 + 0\uFF09
var reg = /^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$/;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="\u5B57\u7B26\u4E32\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u76F8\u5173" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u76F8\u5173</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5339\u914D\u753126\u4E2A\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32
var reg = /^[A-Za-z]+$/;

// \u5339\u914D\u753126\u4E2A\u82F1\u6587\u5B57\u6BCD\u7684\u5927\u5199\u7EC4\u6210\u7684\u5B57\u7B26\u4E32
var reg = /^[A-Z]+$/;

// \u5339\u914D\u753126\u4E2A\u82F1\u6587\u5B57\u6BCD\u7684\u5C0F\u5199\u7EC4\u6210\u7684\u5B57\u7B26\u4E32
var reg = /^[a-z]+$/;

// \u5339\u914D\u7531\u6570\u5B57\u548C26\u4E2A\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32
var reg = /^[A-Za-z0-9]+$/;

// \u5339\u914D\u7531\u6570\u5B57\u300126\u4E2A\u82F1\u6587\u5B57\u6BCD\u6216\u8005\u4E0B;\u5212\u7EBF\u7EC4\u6210\u7684\u5B57\u7B26\u4E32
var reg = /^\\w+$/;

// \u5339\u914D\u7A7A\u767D\u884C\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
var reg = /\\n\\s*\\r/;

// \u5339\u914D\u9996\u5C3E\u7A7A\u767D\u5B57\u7B26\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
var reg = /^\\s*|\\s*$/;
var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;

// \u5339\u914D\u53CC\u5B57\u8282\u5B57\u7B26(\u5305\u62EC\u6C49\u5B57\u5728\u5185, \u4E00\u4E2A\u53CC\u5B57\u8282\u5B57\u7B26\u957F\u5EA6\u8BA12\uFF0CASCII\u5B57\u7B26\u8BA11)
var reg = /[^\\x00-\\xff]/g;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><hr><h3 id="\u5339\u914D\u8BED\u7CFB\u5B57\u7B26\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u8BED\u7CFB\u5B57\u7B26\u8303\u56F4" aria-hidden="true">#</a> \u5339\u914D\u8BED\u7CFB\u5B57\u7B26\u8303\u56F4</h3><p>\u7528\u6CD5:<code>/^[\\u4E00-\\u9FA5]+$/</code>(\u5339\u914D\u7B80\u4F53\u4E2D\u6587)</p><p><code>2E80\uFF5E33FFh</code>\uFF1A\u4E2D\u65E5\u97E9\u7B26\u53F7\u533A\u3002\u6536\u5BB9\u5EB7\u7199\u5B57\u5178\u90E8\u9996\u3001\u4E2D\u65E5\u97E9\u8F85\u52A9\u90E8\u9996\u3001\u6CE8\u97F3\u7B26\u53F7\u3001\u65E5\u672C\u5047\u540D\u3001\u97E9\u6587\u97F3\u7B26\uFF0C\u4E2D\u65E5\u97E9\u7684\u7B26\u53F7\u3001\u6807\u70B9\u3001\u5E26\u5708\u6216\u5E26\u62EC\u7B26\u6587\u6570\u5B57\u3001\u6708\u4EFD\uFF0C\u4EE5\u53CA\u65E5\u672C\u7684\u5047\u540D\u7EC4\u5408\u3001\u5355\u4F4D\u3001\u5E74\u53F7\u3001\u6708\u4EFD\u3001\u65E5\u671F\u3001\u65F6\u95F4\u7B49\u3002</p><p><code>3400\uFF5E4DFFh</code>\uFF1A\u4E2D\u65E5\u97E9\u8BA4\u540C\u8868\u610F\u6587\u5B57\u6269\u5145A\u533A\uFF0C\u603B\u8BA1\u6536\u5BB96,582\u4E2A\u4E2D\u65E5\u97E9\u6C49\u5B57\u3002</p><p><code>4E00\uFF5E9FFFh</code>\uFF1A\u4E2D\u65E5\u97E9\u8BA4\u540C\u8868\u610F\u6587\u5B57\u533A\uFF0C\u603B\u8BA1\u6536\u5BB920,902\u4E2A\u4E2D\u65E5\u97E9\u6C49\u5B57\u3002</p><p><code>A000\uFF5EA4FFh</code>\uFF1A\u5F5D\u65CF\u6587\u5B57\u533A\uFF0C\u6536\u5BB9\u4E2D\u56FD\u5357\u65B9\u5F5D\u65CF\u6587\u5B57\u548C\u5B57\u6839\u3002</p><p><code>AC00\uFF5ED7FFh</code>\uFF1A\u97E9\u6587\u62FC\u97F3\u7EC4\u5408\u5B57\u533A\uFF0C\u6536\u5BB9\u4EE5\u97E9\u6587\u97F3\u7B26\u62FC\u6210\u7684\u6587\u5B57\u3002</p><p><code>F900\uFF5EFAFFh</code>\uFF1A\u4E2D\u65E5\u97E9\u517C\u5BB9\u8868\u610F\u6587\u5B57\u533A\uFF0C\u603B\u8BA1\u6536\u5BB9302\u4E2A\u4E2D\u65E5\u97E9\u6C49\u5B57\u3002</p><p><code>FB00\uFF5EFFFDh</code>\uFF1A\u6587\u5B57\u8868\u73B0\u5F62\u5F0F\u533A\uFF0C\u6536\u5BB9\u7EC4\u5408\u62C9\u4E01\u6587\u5B57\u3001\u5E0C\u4F2F\u6765\u6587\u3001\u963F\u62C9\u4F2F\u6587\u3001\u4E2D\u65E5\u97E9\u76F4\u5F0F\u6807\u70B9\u3001\u5C0F\u7B26\u53F7\u3001\u534A\u89D2\u7B26\u53F7\u3001\u5168\u89D2\u7B26\u53F7\u7B49\u3002</p><h2 id="\u6B63\u5219\u51FD\u6570\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u51FD\u6570\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u6B63\u5219\u51FD\u6570\u4F7F\u7528\u793A\u4F8B</h2><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u4F7F\u7528\u6B63\u5219\u5339\u914D\u4E2D\u6587\u5B57\u8282, \u5C06\u5176\u66FF\u6362\u4E3Axx, \u518D\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u5C31\u662F\u5B8C\u6574\u7684\u957F\u5EA6\u4E86.
function getLen(str) {
  return str.replace(/[^\\x00-\\xff]/g, &quot;xx&quot;).length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5339\u914D\u662F\u5426\u7B26\u5408\u90AE\u4EF6\u89C4\u5219
var reg = /\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/;

// test\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C, \u8868\u793A\u662F\u5426\u5339\u914D\u5230\u5236\u5B9A\u5B57\u7B26\u4E32
var mail = reg.test(&quot;anran758@gmail.com&quot;);

if (mail) {
  // \u5982\u679C\u90AE\u4EF6\u683C\u5F0F\u6B63\u786E\u7684\u8BDD, \u5C31\u53EF\u4EE5\u505A\u70B9\u5565\u4E86(\u96FE
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6B63\u5219\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u6280\u5DE7" aria-hidden="true">#</a> \u6B63\u5219\u6280\u5DE7</h2><h3 id="\u53CD\u5411\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u5F15\u7528" aria-hidden="true">#</a> \u53CD\u5411\u5F15\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u6BD4\u5982\u8FD9\u91CC\u6211\u4EEC\u60F3\u8BA9\u8FD9\u4E2A\u65E5\u671F\u683C\u5F0F\u53CD\u8F6C
// \u6B63\u5219\u62EC\u53F7\u662F\u4E00\u4E2A\u5206\u7EC4, \u4E0B\u9762\u7684\u4EE3\u7801\u5C31\u6355\u83B7\u4E86\u4E09\u4E2A\u5206\u7EC4
// \u901A\u8FC7$\u5206\u7EC4\u7B26\u6765\u8F6C\u6362\u4F4D\u7F6E, \u6765\u8FBE\u5230\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C
&quot;2018-3-21&quot;.replace(/(\\d{4})-(\\d{1,2})-(\\d{1,2})/g, &quot;$2/$3/$1&quot;); // &quot;3/21/2018&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5FFD\u7565\u5206\u7D44" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u5206\u7D44" aria-hidden="true">#</a> \u5FFD\u7565\u5206\u7D44</h3><p>\u4E0D\u5E0C\u671B\u6355\u83B7\u67D0\u4E9B\u5206\u7EC4, \u53EA\u9700\u8981\u5206\u7EC4\u5185\u52A0\u4E0A<code>?:</code>\u5373\u53EF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var reg = /(?:Byron).(ok)/;
&quot;Byron-ok&quot;.replace(reg, &quot;$1&quot;); // \u53EA\u5339\u914D\u4E86 ok
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u524D\u77BB" tabindex="-1"><a class="header-anchor" href="#\u524D\u77BB" aria-hidden="true">#</a> \u524D\u77BB</h3><table><thead><tr><th>\u540D\u5B57</th><th>\u6B63\u5247</th></tr></thead><tbody><tr><td>\u6B63\u5411\u524D\u77BB</td><td>exp(?=assert)</td></tr><tr><td>\u8D1F\u5411\u524D\u77BB</td><td>exp(?!assert)</td></tr></tbody></table><p>\u6B63\u5411\u524D\u77BB\u5C31\u662F\u5339\u914D\u524D\u8005, \u6548\u9A8C\u540E\u8005\u662F\u5426\u5B58\u5728.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u8FD9\u4E2A\u6B63\u5219\u7684\u610F\u601D\u662F: \u5339\u914D\u4E00\u4E2A\u5355\u8BCD\u5B57\u7B26( [a-zA-Z0-9_] ), \u7136\u540E\u9A8C\u8BC1\u540E\u9762\u662F\u4E0D\u662F\u6570\u5B57
// \u7ED3\u679C\u4E3A: &quot;X2*3&quot;. \u56E0\u4E3A3\u540E\u9762\u6CA1\u6709\u6570\u5B57, \u6240\u4EE5\u6CA1\u6709\u5339\u914D\u5230.
&quot;a2*3&quot;.replace(/\\w(?=\\d)/g, &quot;X&quot;);

// \u7ED3\u679C\u4E3A: &quot;X2*X4X8&quot;
// \u603B\u7684\u8BF4\u5C31\u662F
&quot;a2*34v8&quot;.replace(/\\w(?=\\d)/g, &quot;X&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8D1F\u5411\u524D\u77BB\u5219\u76F8\u53CD, \u5339\u914D\u524D\u9762, \u66FF\u4EE3\u540E\u9762</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// a \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u662F\u6570\u5B57, \u56E0\u6B64\u6CA1\u6709\u5339\u914D\u5230
// 2 \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u4E0D\u662F\u6570\u5B57, \u88AB\u66FF\u6362\u6210X
// * \u4E0D\u662F\u5355\u8BCD\u5B57\u7B26 \u56E0\u6B64\u6CA1\u6709\u5339\u914D\u5230
// 3 \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u662F\u6570\u5B57, \u56E0\u6B64\u6CA1\u6709\u5339\u914D\u5230
// 4 \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u4E0D\u662F\u6570\u5B57, \u88AB\u66FF\u6362\u6210X
// v \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u662F\u6570\u5B57, \u56E0\u6B64\u6CA1\u6709\u5339\u914D\u5230
// 8 \u662F\u5355\u8BCD\u5B57\u7B26, \u540E\u9762\u6CA1\u6709\u5339\u914D\u5230\u6570\u5B57, \u88AB\u66FF\u6362\u6210X
// \u7ED3\u679C: aX*4XvX
&quot;a2*34v8&quot;.replace(/\\w(?!\\d)/g, &quot;X&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>`,42),g=a("\u53EF\u89C6\u5316\u6B63\u5219\u8868\u8FBE\u5F0F, \u53EF\u4EE5\u8BD5\u8BD5"),E={href:"https://regexper.com/",target:"_blank",rel:"noopener noreferrer"},x=a("regexper"),f=a(", \u8BA9\u4F60\u770B\u61C2\u6B63\u5219\u5339\u914D\u7684\u8D70\u5411."),A=n("p",null,[n("img",{src:u,alt:"regexper"})],-1),B=n("p",null,"\u5982\u679C\u6709\u4E0A\u8FF0\u6B63\u5219\u89C4\u5219\u5B58\u5728\u95EE\u9898, \u53EF\u5728 issue \u7559\u8A00\u63A2\u8BA8~",-1);function _($,q){const s=p("ExternalLinkIcon");return i(),b(c,null,[m,n("p",null,[n("strong",null,[n("a",o,[h,e(s)])])]),v,n("p",null,[g,n("a",E,[x,e(s)]),f]),A,B],64)}var F=l(t,[["render",_],["__file","index.html.vue"]]);export{F as default};
