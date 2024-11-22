import{_ as r,r as l,o as i,c as p,a as s,b,F as c,d as a,e as n}from"./app.7e3542fd.js";const d={},t=a(`<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><p>\u8BB0\u5F55 Node.js \u4E2D\u76F8\u5173\u7684 API \u4F7F\u7528\u573A\u666F\u4E0E\u76F8\u5173\u7EC6\u8282\u3002</p><hr><p><strong>\u670D\u52A1\u7AEF\u57FA\u7840\u6982\u5FF5</strong></p><ul><li>\u4E8B\u52A1\u5904\u7406\uFF1A\u4EE5\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\uFF0C\u64CD\u4F5C\u5931\u8D25\u6267\u884C\u56DE\u6EDA</li></ul><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>// \u8FD4\u56DE Node.js \u8FDB\u7A0B\u7684\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55
// \u5982\u505A\u811A\u624B\u67B6\u65F6\u53EF\u4EE5\u8BFB\u53D6\u662F\u5728\u54EA\u4E2A\u76EE\u5F55\u4E0B\u542F\u52A8 node \u670D\u52A1\u7684
process.cwd()

// \u89E3\u6790\u8DEF\u5F84\u540D
fs.realpathSync(pathStr)

// Example: \u89E3\u6790\u5F53\u524D node \u8FD0\u884C\u7684\u5DE5\u4F5C\u76EE\u5F55
fs.realpathSync(process.cwd())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u82E5\u7ED9\u5B9A\u76EE\u5F55\u4E0D\u5B58\u5728-\u5219\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u82E5\u7ED9\u5B9A\u76EE\u5F55\u4E0D\u5B58\u5728-\u5219\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u82E5\u7ED9\u5B9A\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u76EE\u5F55</h3>`,8),o=n("\u5F53\u6211\u4EEC\u60F3\u7528\u5199\u5165\u6587\u4EF6\u65F6\u82E5\u7ED9\u5B9A\u7684\u8DEF\u5F84\u4E2D\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u5219\u5C06\u4E0D\u80FD\u76F4\u63A5\u5199\u5165\u6587\u4EF6\u3002\u6B64\u65F6\u53EF\u4EE5\u5F15\u7528 "),u={href:"https://www.npmjs.com/package/mkdirp",target:"_blank",rel:"noopener noreferrer"},m=n("mkdirp"),h=n(" \u6765\u786E\u4FDD\u76EE\u6807\u6587\u4EF6\u7684\u76EE\u5F55\u80FD\u5B58\u5728\u3002"),f=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import path from &quot;path&quot;;
import mkdirp from &quot;mkdirp&quot;;
import fs from &quot;fs/promises&quot;;

async function writeFile({
  fileName,
  dirPath,
  content,
}: {
  fileName: string;
  dirPath: string;
  content: string;
}) {
  // \u786E\u4FDD\u76EE\u5F55\u88AB\u521B\u5EFA
  const made = await mkdirp(dirPath);

  return fs.writeFile(path.resolve(dirPath, fileName), content);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h2><h3 id="\u5F02\u5E38\u72B6\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u72B6\u51B5" aria-hidden="true">#</a> \u5F02\u5E38\u72B6\u51B5</h3><ol><li>\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u90FD\u8FD4\u56DE 500</li><li>\u903B\u8F91\u9519\u8BEF\uFF0C\u82E5\u5185\u5BB9\u627E\u4E0D\u5230 (404)\u3001\u5148\u51B3\u6761\u4EF6\u5931\u8D25\uFF08412\uFF09\u3001\u65E0\u6CD5\u5904\u7406\u7684\u5B9E\u4F53\uFF08\u53C2\u6570\u683C\u5F0F\u4E0D\u5BF9\uFF0C422\uFF09 \u7B49</li></ol><h3 id="\u4E3A\u4EC0\u4E48\u8981\u7528\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u7528\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u7528\u9519\u8BEF\u5904\u7406</h3><ol><li>\u9632\u6B62\u7A0B\u5E8F\u6302\u6389</li><li>\u63D0\u793A\u7528\u6237\u9519\u8BEF\u4FE1\u606F\u3001\u5F15\u5BFC\u7528\u6237\u5B8C\u6210\u4E2D\u65AD\u7684\u6D41\u7A0B</li><li>\u4FBF\u4E8E\u5F00\u53D1\u8005\u8C03\u8BD5</li></ol><h2 id="\u6280\u672F\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u65B9\u6848" aria-hidden="true">#</a> \u6280\u672F\u65B9\u6848</h2><ol><li>\u6570\u636E\u8BE5\u5982\u4F55\u5B58\u50A8</li><li>\u5982\u4F55\u4E0E\u524D\u7AEF\u5BF9\u63A5\uFF08\u63A5\u53E3\u8BBE\u8BA1\uFF09</li></ol><h2 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u8FD0\u884Cnodejs\u9879\u76EE
pm2 start [file]

# \u67E5\u770B\u65E5\u5FD7
pm2 log

# \u53EF\u4EE5\u67E5\u770B\u8FD0\u884C\u4E86\u51E0\u4E2A\u9879\u76EE
pm2 list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#\u722C\u866B" aria-hidden="true">#</a> \u722C\u866B</h2><p><strong>\u4EC0\u4E48\u662F\u722C\u866B\uFF1F</strong></p><p>\u722C\u866B\u662F\u6309\u7167\u4E00\u5B9A\u89C4\u5219\u81EA\u52A8\u6293\u53D6\u7F51\u7EDC\u4FE1\u606F\u7684\u7A0B\u5E8F\u3002</p><p><strong>\u4EC0\u4E48\u662F\u53CD\u722C\u866B\uFF1F</strong></p><p>\u4E00\u4E9B\u505A\u5185\u5BB9\u7684\u7F51\u7AD9\u4E3A\u4E86\u9632\u6B62\u522B\u4EBA\u722C\u53D6\u81EA\u5DF1\u7684\u4FE1\u606F\u53BB\u5546\u7528\u4E00\u822C\u4F1A\u4F5C\u51FA\u53CD\u722C\u866B\u7684\u673A\u5236\u3002</p><p><strong>\u53CD\u722C\u866B\u7684\u673A\u5236\u6709\uFF1A</strong></p><ul><li>\u5224\u65AD User-Agent, referrer\u3001\u9A8C\u8BC1\u7801\u6821\u9A8C</li><li>\u5355\u4F4D\u65F6\u95F4\u8BBF\u95EE\u6B21\u6570\u3001\u8BBF\u95EE\u91CF</li><li>\u5173\u952E\u4FE1\u606F\u56FE\u7247\u6DF7\u6DC6</li><li>\u5F02\u6B65\u52A0\u8F7D</li></ul><p><strong>Node.js \u4E2D\u6709\u4EC0\u4E48\u5DE5\u5177\u6269\u5C55\u5E93\u53EF\u4EE5\u505A\u722C\u866B\u7684\u529F\u80FD\uFF1F</strong></p><ol><li>cheerio</li></ol><h2 id="\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6570\u636E\u5E93</h2><h3 id="nosql-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#nosql-\u7684\u4F18\u70B9" aria-hidden="true">#</a> NoSql \u7684\u4F18\u70B9</h3><ul><li>\u7B80\u5355\uFF08\u6CA1\u6709\u539F\u5B50\u6027\u3001\u4E00\u81F4\u6027\u3001\u9694\u79BB\u6027\u7B49\u590D\u6742\u89C4\u8303\uFF09</li><li>\u4FBF\u4E8E\u6A2A\u5411\u62D3\u5C55</li><li>\u9002\u5408\u8D85\u5927\u89C4\u6A21\u6570\u636E\u7684\u5B58\u50A8</li><li>\u5F88\u7075\u6D3B\u5730\u5B58\u50A8\u590D\u6742\u7ED3\u6784\u7684\u6570\u636E \uFF08Schema Free\uFF09</li></ul><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u663E\u793A\u5185\u5B58
show dbs

# \u4F7F\u7528\u6570\u636E\u5E93
use dome

# \u521B\u5EFA\u96C6\u5408\u5E76\u63D2\u5165\u6570\u636E
db.createCollection(&quot;user&quot;)
# {&quot;ok&quot;:1}
db.users.insert({id:123,name:&quot;hello&quot;})
# writeResult({ &quot;nInserted&quot; : 1 })

# \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u7684\u96C6\u5408
show collections

# \u5220\u9664\u6570\u636E\u5E93
db.dropDatabase()
# { &quot;dropped&quot; : &quot;demo&quot;, &quot;ok&quot; : 1 }

# \u5220\u9664\u96C6\u5408
db.user.drop()
# true

# \u67E5\u770B\u6240\u6709\u6570\u636E
db.user.find()

# \u5E26\u683C\u5F0F\u5316\u7684\u6570\u636E
db.user.find().pretty()

# \u67E5\u770B\u7B2C\u4E00\u6761\u6570\u636E
db.user.findOne()

# \u66F4\u65B0\u6570\u636E (\u6761\u4EF6,)
db.user.update({&quot;userId&quot;})

# \u5220\u9664\u6307\u5B9A\u6570\u636E
db.user.remove({userId:101})

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#\u9274\u6743" aria-hidden="true">#</a> \u9274\u6743</h2><h3 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h3><p><strong>\u4EC0\u4E48\u662F JWT\uFF1F</strong></p><p>JSON We bToken \u662F\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\uFF08RFC7519\uFF09\uFF0C\u5B9A\u4E49\u4E86\u4E00\u79CD\u7D27\u51D1\u4E14\u72EC\u7ACB\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5C06\u5404\u65B9\u4E4B\u95F4\u7684\u4FE1\u606F\u4F5C\u4E3A JSON \u5BF9\u8C61\u8FDB\u884C\u5B89\u5168\u4F20\u8F93\u3002\u8BE5\u4FE1\u606F\u53EF\u4EE5\u9A8C\u8BC1\u548C\u4FE1\u4EFB\uFF0C\u56E0\u4E3A\u662F\u7ECF\u8FC7\u6570\u5B57\u7B7E\u540D\u7684\u3002</p>`,28);function g(_,q){const e=l("ExternalLinkIcon");return i(),p(c,null,[t,s("p",null,[o,s("a",u,[m,b(e)]),h]),f],64)}var v=r(d,[["render",g],["__file","nodejs.html.vue"]]);export{v as default};
