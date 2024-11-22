import{_ as n,d as s}from"./app.7e3542fd.js";var a="/front-end-lab/assets/libuv.1a7894f0.jpeg",e="/front-end-lab/assets/koa-middleware.d8d6bdca.png";const r={},l=s('<h1 id="node-js-\u670D\u52A1\u7AEF\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#node-js-\u670D\u52A1\u7AEF\u5F00\u53D1" aria-hidden="true">#</a> Node.js (\u670D\u52A1\u7AEF\u5F00\u53D1)</h1><h3 id="\u7B80\u8FF0\u4E00\u4E0B-nodejs-\u7684\u5F02\u6B65-io-\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u8FF0\u4E00\u4E0B-nodejs-\u7684\u5F02\u6B65-io-\u6A21\u578B" aria-hidden="true">#</a> \u7B80\u8FF0\u4E00\u4E0B Nodejs \u7684\u5F02\u6B65 IO \u6A21\u578B</h3><ol><li><strong>\u4E8B\u4EF6\u9A71\u52A8\uFF1A</strong> \u57FA\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u6A21\u578B\uFF0C\u901A\u8FC7\u76D1\u542C\u548C\u54CD\u5E94\u4E8B\u4EF6\u5B9E\u73B0\u5F02\u6B65\u7F16\u7A0B\u3002</li><li><strong>\u975E\u963B\u585E I/O\uFF1A</strong> \u91C7\u7528\u975E\u963B\u585E\u7684 I/O \u64CD\u4F5C\u65B9\u5F0F\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u5728\u8FDB\u884C I/O \u64CD\u4F5C\u7684\u540C\u65F6\u6267\u884C\u5176\u4ED6\u4EE3\u7801\u3002</li><li><strong>\u56DE\u8C03\u51FD\u6570\uFF1A</strong> \u5927\u90E8\u5206\u5F02\u6B65\u64CD\u4F5C\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u7ED3\u679C\uFF0C\u5B9E\u73B0\u4E86\u5F02\u6B65\u7F16\u7A0B\u7684\u4E3B\u8981\u673A\u5236\u3002</li><li><strong>\u4E8B\u4EF6\u89E6\u53D1\u5668\uFF1A</strong> \u63D0\u4F9B\u4E8B\u4EF6\u89E6\u53D1\u5668\u7C7B\u6765\u5904\u7406\u4E8B\u4EF6\u7684\u76D1\u542C\u548C\u89E6\u53D1\uFF0C\u7528\u4E8E\u6A21\u5757\u4E4B\u95F4\u7684\u89E3\u8026\u548C\u901A\u4FE1\u3002</li><li><strong>\u5355\u7EBF\u7A0B\uFF1A</strong> \u5C3D\u7BA1\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4F46\u901A\u8FC7\u4E8B\u4EF6\u5FAA\u73AF\u548C\u5F02\u6B65 I/O \u6A21\u578B\uFF0C\u80FD\u591F\u5145\u5206\u5229\u7528\u591A\u6838 CPU\uFF0C\u5B9E\u73B0\u9AD8\u5E76\u53D1\u548C\u9AD8\u541E\u5410\u91CF\u7684\u5904\u7406\u80FD\u529B\u3002</li></ol><hr><h3 id="\u4EC0\u4E48\u662F-libuv" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-libuv" aria-hidden="true">#</a> \u4EC0\u4E48\u662F libuv?</h3><p>libuv \u662F\u4E00\u4E2A\u7528\u4E8E\u62BD\u8C61\u975E\u963B\u585E I/O \u64CD\u4F5C\u7684 C \u5E93\u3002\u4ED6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p><ul><li>\u96C6\u6210\u4E86\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65I/O\u6A21\u578B\u3002</li><li>\u5B83\u5141\u8BB8\u540C\u65F6\u4F7F\u7528CPU\u548C\u5176\u4ED6\u8D44\u6E90\uFF0C\u540C\u65F6\u4ECD\u7136\u6267\u884CI/O\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8D44\u6E90\u548C\u7F51\u7EDC\u7684\u9AD8\u6548\u5229\u7528\u3002</li><li>\u5B83\u4FC3\u8FDB\u4E86\u4E8B\u4EF6\u9A71\u52A8\u7684\u65B9\u6CD5\uFF0C\u5176\u4E2D\u4F7F\u7528\u57FA\u4E8E\u56DE\u8C03\u7684\u901A\u77E5\u6765\u6267\u884C I/O \u548C\u5176\u4ED6\u6D3B\u52A8\u3002</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong> \u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u7A0B\u5E8F\u6B63\u5728\u6267\u884C\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u64CD\u4F5C\uFF0C\u800C\u6570\u636E\u5E93\u67E5\u8BE2\u53EF\u80FD\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\u6765\u5B8C\u6210\u3002\u5982\u679C\u7A0B\u5E8F\u5728\u7B49\u5F85\u67E5\u8BE2\u7ED3\u679C\u7684\u540C\u65F6\u88AB\u963B\u585E\uFF0C\u90A3\u4E48 CPU \u5C31\u4F1A\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\uFF0C\u65E0\u6CD5\u5904\u7406\u5176\u4ED6\u4EFB\u52A1\uFF0C\u4ECE\u800C\u9020\u6210\u7CFB\u7EDF\u8D44\u6E90\u7684\u6D6A\u8D39\u3002</p><p><img src="'+a+`" alt="libuv"></p><hr><h3 id="\u5E76\u53D1\u91CF\u5927\u600E\u4E48\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u91CF\u5927\u600E\u4E48\u89E3\u51B3" aria-hidden="true">#</a> \u5E76\u53D1\u91CF\u5927\u600E\u4E48\u89E3\u51B3?</h3><p><strong>1.\u4ECE\u4EE3\u7801\u5C42\u9762\u8FDB\u884C\u4F18\u5316</strong></p><ul><li><strong>\u5F02\u6B65\u7F16\u7A0B</strong>\uFF1A\u5229\u7528Node.js\u7684\u975E\u963B\u585EI/O\u6A21\u578B\uFF0C\u786E\u4FDD\u5E94\u7528\u4F7F\u7528\u5F02\u6B65API\u8C03\u7528\uFF0C\u907F\u514D\u963B\u585E\u4E3B\u4E8B\u4EF6\u5FAA\u73AF\u3002</li><li><strong>\u907F\u514D\u91CD\u8BA1\u7B97</strong>\uFF1A\u4F7F\u7528\u7F13\u5B58\u7B56\u7565\uFF0C\u5982\u5185\u5B58\u7F13\u5B58\u6216\u5206\u5E03\u5F0F\u7F13\u5B58\u7CFB\u7EDF\uFF08\u5982Redis\uFF09\uFF0C\u6765\u5B58\u50A8\u91CD\u590D\u8BA1\u7B97\u7684\u7ED3\u679C\u6216\u5E38\u7528\u6570\u636E\u3002</li></ul><p><strong>2.\u5728\u5E94\u7528\u67B6\u6784\u5C42\u9762\u8C03\u6574</strong></p><ul><li><strong>\u5FAE\u670D\u52A1\u67B6\u6784</strong>\uFF1A\u5C06\u5927\u578B\u5E94\u7528\u62C6\u5206\u4E3A\u5C0F\u7684\u3001\u72EC\u7ACB\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u5206\u522B\u6269\u5C55\uFF0C\u964D\u4F4E\u6574\u4F53\u7CFB\u7EDF\u7684\u590D\u6742\u6027\u3002</li><li><strong>\u65E0\u72B6\u6001\u8BBE\u8BA1</strong>\uFF1A\u786E\u4FDD\u670D\u52A1\u95F4\u7684\u901A\u4FE1\u65E0\u72B6\u6001\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u670D\u52A1\u90FD\u53EF\u4EE5\u72EC\u7ACB\u6269\u5C55\u3002</li></ul><p>\u5176\u4E2D\u4E00\u4E2A\u5178\u578B\u7684\u4F8B\u5B50\u5C31\u662F\u4E91\u51FD\u6570\u67B6\u6784 (FaaS)\uFF0C\u6BCF\u4E2A\u4E91\u51FD\u6570\u90FD\u72EC\u7ACB\u6267\u884C\u3002\u5982\u679C\u4E00\u4E2A\u4E91\u51FD\u6570\u53D1\u751F\u5D29\u6E83\u6216\u9047\u5230\u963B\u585E\uFF0C\u5B83\u4E0D\u4F1A\u5F71\u54CD\u5E94\u7528\u7A0B\u5E8F\u7684\u5176\u4ED6\u90E8\u5206\u6B63\u5E38\u8FD0\u884C\u3002</p><p><strong>3.\u8D1F\u8F7D\u5747\u8861</strong></p><ul><li><strong>\u4F7F\u7528\u53CD\u5411\u4EE3\u7406</strong>\uFF1A\u901A\u8FC7 Nginx \u6216 HAProxy \u7B49\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u5206\u53D1\u5165\u7AD9\u8BF7\u6C42\u5230\u591A\u4E2A Node.js \u5B9E\u4F8B\u6216\u670D\u52A1\u5668\u3002</li><li><strong>DNS\u8F6E\u8BE2</strong>\uFF1A\u914D\u7F6EDNS\u4EE5\u8F6E\u8BE2\u65B9\u5F0F\u5206\u53D1\u8BF7\u6C42\u5230\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u4ECE\u800C\u5E73\u8861\u8D1F\u8F7D\u3002</li></ul><p><strong>4.\u6C34\u5E73\u6269\u5C55</strong>\uFF0C\u5373\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u5E38\u8BF4 &quot;\u6269\u5BB9&quot;\u3002</p><ul><li><strong>\u589E\u52A0\u5B9E\u4F8B</strong>\uFF1A\u901A\u8FC7\u589E\u52A0\u66F4\u591A\u7684 Node.js \u5B9E\u4F8B\u6765\u5206\u6563\u8D1F\u8F7D\u3002\u8FD9\u53EF\u4EE5\u5728\u5355\u53F0\u673A\u5668\u4E0A\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u8DE8\u591A\u53F0\u673A\u5668\u5B9E\u73B0\u3002</li><li><strong>\u5BB9\u5668\u5316\u4E0E\u7F16\u6392</strong>\uFF1A\u4F7F\u7528 Docker \u548C Kubernetes \u7B49\u6280\u672F\u53EF\u4EE5\u5E2E\u52A9\u81EA\u52A8\u7BA1\u7406\u548C\u6269\u5C55\u5E94\u7528\u7A0B\u5E8F\u7684\u591A\u4E2A\u5B9E\u4F8B\u3002</li></ul><p><strong>5.\u4F18\u5316\u6570\u636E\u5E93\u8BBF\u95EE</strong></p><ul><li><strong>\u6570\u636E\u5E93\u7D22\u5F15</strong>\uFF1A\u6839\u636E\u4E1A\u52A1\u9700\u6C42\uFF0C\u5728\u5408\u9002\u7684\u5730\u65B9\u6DFB\u52A0\u7D22\u5F15\uFF0C\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u67E5\u8BE2\u7684\u901F\u5EA6\u548C\u6548\u7387\u3002\u786E\u4FDD\u5173\u952E\u67E5\u8BE2\u5B57\u6BB5\u90FD\u5EFA\u7ACB\u4E86\u7D22\u5F15\u3002</li><li><strong>\u8BFB\u5199\u5206\u79BB</strong>\uFF1A\u5BF9\u4E8E\u8BBF\u95EE\u91CF\u5927\u7684\u6570\u636E\u5E93\u5E94\u7528\uFF0C\u901A\u8FC7\u5B9E\u73B0\u4E3B\u4ECE\u590D\u5236\u53CA\u8BFB\u5199\u5206\u79BB\u7B56\u7565\uFF0C\u53EF\u4EE5\u6709\u6548\u5206\u6563\u8BFB\u64CD\u4F5C\u548C\u5199\u64CD\u4F5C\u7684\u538B\u529B\uFF0C\u4ECE\u800C\u63D0\u5347\u6574\u4F53\u6027\u80FD\u3002</li></ul><p><strong>6.\u8BBE\u7F6E\u7F13\u5B58</strong></p><ul><li><strong>\u524D\u7AEF\u7F13\u5B58</strong>\uFF1A\u4F7F\u7528 CDN \u6765\u7F13\u5B58\u9759\u6001\u8D44\u6E90\uFF0C\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B\u3002</li><li><strong>\u540E\u7AEF\u7F13\u5B58</strong>\uFF1A\u5E94\u7528\u7A0B\u5E8F\u7EA7\u522B\u7684\u7F13\u5B58\uFF08\u4F8B\u5982Redis\uFF09\u53EF\u4EE5\u5B58\u50A8\u5E38\u7528\u6570\u636E\u6216\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u51CF\u5C11\u6570\u636E\u5E93\u8BBF\u95EE\u6B21\u6570\u3002</li></ul><p><strong>7.\u9650\u6D41\u548C\u670D\u52A1\u964D\u7EA7</strong></p><ul><li><strong>\u9650\u6D41</strong>\uFF1A\u9650\u5236\u8BBF\u95EE\u901F\u7387\uFF0C\u9632\u6B62\u7CFB\u7EDF\u8FC7\u8F7D\u3002</li><li><strong>\u670D\u52A1\u964D\u7EA7</strong>\uFF1A\u5728\u7CFB\u7EDF\u8D1F\u8F7D\u6781\u9AD8\u65F6\uFF0C\u6682\u65F6\u5173\u95ED\u6216\u964D\u4F4E\u67D0\u4E9B\u975E\u6838\u5FC3\u529F\u80FD\u7684\u670D\u52A1\u8D28\u91CF\u3002</li></ul><p>\u6BD4\u65B9\u8BF4\uFF0C\u5728\u7535\u5546\u5E73\u53F0\u7684\u5927\u4FC3\u9500\u671F\u95F4\uFF0C\u4E3A\u9632\u6B62\u7CFB\u7EDF\u5D29\u6E83\uFF0C\u53EF\u4EE5\u9650\u5236\u6BCF\u79D2\u5904\u7406\u7684\u7528\u6237\u8BF7\u6C42\u6570\u91CF\uFF0C\u786E\u4FDD\u6240\u6709\u7528\u6237\u90FD\u80FD\u83B7\u5F97\u4E00\u81F4\u7684\u670D\u52A1\u4F53\u9A8C\u3002</p><hr><h3 id="\u5982\u679C\u4F60\u7684-node-\u534A\u591C\u670D\u52A1\u6302\u4E86\u5982\u4F55\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u4F60\u7684-node-\u534A\u591C\u670D\u52A1\u6302\u4E86\u5982\u4F55\u542F\u52A8" aria-hidden="true">#</a> \u5982\u679C\u4F60\u7684 node \u534A\u591C\u670D\u52A1\u6302\u4E86\u5982\u4F55\u542F\u52A8?</h3><p>\u901A\u8FC7\u5B88\u62A4\u8FDB\u7A0B\u7BA1\u7406 Node.js \u5E94\u7528\uFF0C\u5728 Node.js \u4E2D\u6700\u5E38\u7528\u7684\u5B88\u62A4\u8FDB\u7A0B\u662F <code>pm2</code>:</p><p>\u4F7F\u7528 pm2 \u542F\u52A8\u5E94\u7528:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\uFF0C\u786E\u4FDD\u670D\u52A1\u5668\u91CD\u542F\u540E\u80FD\u81EA\u52A8\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 startup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h3 id="koa-\u7684\u6D0B\u8471\u6A21\u578B\u662F\u600E\u4E48\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#koa-\u7684\u6D0B\u8471\u6A21\u578B\u662F\u600E\u4E48\u5B9E\u73B0\u7684" aria-hidden="true">#</a> koa \u7684\u6D0B\u8471\u6A21\u578B\u662F\u600E\u4E48\u5B9E\u73B0\u7684</h3><p>\u5728 Koa \u4E2D\uFF0C\u4E2D\u95F4\u4EF6\u5C31\u50CF\u6D0B\u8471\u7684\u5C42\u5C42\u76AE\u4E00\u6837\u3002\u5F53\u4E00\u4E2A\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u5B83\u9996\u5148\u7ECF\u8FC7\u6700\u5916\u5C42\u7684\u4E2D\u95F4\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 <code>next</code> \u51FD\u6570\u9010\u5C42\u5411\u91CC\u4F20\u9012\uFF0C\u76F4\u5230\u8FBE\u5230\u6700\u5185\u5C42\u3002</p><p>\u6BCF\u4E00\u5C42\u4E2D\u95F4\u4EF6\u90FD\u662F\u72EC\u7ACB\u7684\u529F\u80FD\u3001\u53EF\u4EE5\u505A\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u7136\u540E\u518D\u628A\u8BF7\u6C42\u4F20\u9012\u7ED9\u4E0B\u4E00\u5C42\u3002\u5F53\u8BF7\u6C42\u5904\u7406\u5B8C\u6210\u540E\uFF0CKoa \u4F1A\u9006\u5411\u6267\u884C\u8FD9\u4E9B\u4E2D\u95F4\u4EF6\uFF0C\u4ECE\u5185\u5C42\u5230\u5916\u5C42\uFF0C\u4EE5\u4FBF\u5B8C\u6210\u4E00\u4E9B\u6E05\u7406\u5DE5\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const Koa = require(&#39;koa&#39;);
const app = new Koa();

// \u7B2C\u4E00\u4E2A\u4E2D\u95F4\u4EF6
app.use(async (ctx, next) =&gt; {
    console.log(&#39;Middleware 1 - Start&#39;);
    await next(); // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
    console.log(&#39;Middleware 1 - End&#39;);
});

// \u7B2C\u4E8C\u4E2A\u4E2D\u95F4\u4EF6
app.use(async (ctx, next) =&gt; {
    console.log(&#39;Middleware 2 - Start&#39;);
    await next(); // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
    console.log(&#39;Middleware 2 - End&#39;);
});

// \u8DEF\u7531\u5904\u7406\u51FD\u6570
app.use(async ctx =&gt; {
    console.log(&#39;Route Handler&#39;);
    ctx.body = &#39;Hello Koa!&#39;;
});

// \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F
app.listen(3000, () =&gt; {
    console.log(&#39;Server is running on port 3000&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><img src="`+e+`" alt="koa middleware"></p><hr><h3 id="\u5728\u6CA1\u6709async-await-\u7684\u65F6\u5019-koa\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u6D0B\u8471\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u5728\u6CA1\u6709async-await-\u7684\u65F6\u5019-koa\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u6D0B\u8471\u6A21\u578B" aria-hidden="true">#</a> \u5728\u6CA1\u6709async await \u7684\u65F6\u5019, koa\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u6D0B\u8471\u6A21\u578B?</h3><p>Koa \u53EF\u4EE5\u57FA\u4E8E\u56DE\u8C03\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u4E2D\u95F4\u4EF6\u7684\u6267\u884C\u548C\u63A7\u5236\u6D41\u7A0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const Koa = require(&#39;koa&#39;);
const app = new Koa();

// \u7B2C\u4E00\u4E2A\u4E2D\u95F4\u4EF6
app.use((ctx, next) =&gt; {
    console.log(&#39;Middleware 1 - Start&#39;);
    // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u51FD\u6570
    return next(() =&gt; {
        console.log(&#39;Middleware 1 - End&#39;);
    });
});

// \u7B2C\u4E8C\u4E2A\u4E2D\u95F4\u4EF6
app.use((ctx, next) =&gt; {
    console.log(&#39;Middleware 2 - Start&#39;);
    // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u51FD\u6570
    return next(() =&gt; {
        console.log(&#39;Middleware 2 - End&#39;);
    });
});

// \u8DEF\u7531\u5904\u7406\u51FD\u6570
app.use(ctx =&gt; {
    console.log(&#39;Route Handler&#39;);
    ctx.body = &#39;Hello Koa!&#39;;
});

// \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F
app.listen(3000, () =&gt; {
    console.log(&#39;Server is running on port 3000&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><hr><h3 id="\u4E2D\u95F4\u4EF6\u7684\u5F02\u5E38\u5904\u7406\u662F\u600E\u4E48\u505A\u7684" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u7684\u5F02\u5E38\u5904\u7406\u662F\u600E\u4E48\u505A\u7684" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u7684\u5F02\u5E38\u5904\u7406\u662F\u600E\u4E48\u505A\u7684\uFF1F</h3><p>\u4E2D\u95F4\u4EF6\u7684\u5F02\u5E38\u5904\u7406\u901A\u5E38\u901A\u8FC7 try...catch \u5757\u6765\u5B9E\u73B0\u3002\u5F53\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u51FD\u6570\u629B\u51FA\u5F02\u5E38\u65F6\uFF0CKoa \u4F1A\u6355\u83B7\u8FD9\u4E2A\u5F02\u5E38\uFF0C\u5E76\u5C06\u63A7\u5236\u4F20\u9012\u7ED9\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u9519\u8BEF\u7684\u4E2D\u95F4\u4EF6\u51FD\u6570\u3002\u8FD9\u4E2A\u9519\u8BEF\u5904\u7406\u4E2D\u95F4\u4EF6\u51FD\u6570\u901A\u5E38\u4F1A\u88AB\u653E\u7F6E\u5728\u5176\u4ED6\u4E2D\u95F4\u4EF6\u51FD\u6570\u7684\u540E\u9762\uFF0C\u4EE5\u786E\u4FDD\u5B83\u80FD\u591F\u6355\u83B7\u6240\u6709\u5176\u4ED6\u4E2D\u95F4\u4EF6\u51FD\u6570\u629B\u51FA\u7684\u5F02\u5E38\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const Koa = require(&#39;koa&#39;);
const app = new Koa();

// \u4E2D\u95F4\u4EF61
app.use(async (ctx, next) =&gt; {
    console.log(&#39;Middleware 1&#39;);
    throw new Error(&#39;Something went wrong&#39;); // \u629B\u51FA\u4E00\u4E2A\u5F02\u5E38
});

// \u4E2D\u95F4\u4EF62
app.use(async (ctx, next) =&gt; {
    console.log(&#39;Middleware 2&#39;);
    // \u6B63\u5E38\u60C5\u51B5
    await next(); // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u51FD\u6570
});

// \u9519\u8BEF\u5904\u7406\u4E2D\u95F4\u4EF6
app.use(async (ctx, next) =&gt; {
    try {
        await next(); // \u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u51FD\u6570
    } catch (err) {
        console.error(&#39;Error caught by error handling middleware:&#39;, err);
        ctx.status = err.status || 500;
        ctx.body = {
            error: {
                message: err.message || &#39;Internal Server Error&#39;
            }
        };
    }
});

// \u8DEF\u7531\u5904\u7406\u51FD\u6570
app.use(ctx =&gt; {
    console.log(&#39;Route Handler&#39;);
    ctx.body = &#39;Hello Koa!&#39;;
});

// \u542F\u52A8\u5E94\u7528\u7A0B\u5E8F
app.listen(3000, () =&gt; {
    console.log(&#39;Server is running on port 3000&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><hr><h3 id="body-parser-\u4E2D\u95F4\u4EF6\u4E86\u89E3\u8FC7\u5417" tabindex="-1"><a class="header-anchor" href="#body-parser-\u4E2D\u95F4\u4EF6\u4E86\u89E3\u8FC7\u5417" aria-hidden="true">#</a> body-parser \u4E2D\u95F4\u4EF6\u4E86\u89E3\u8FC7\u5417</h3><p><code>body-parser</code> \u662F Node.js \u7684\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u7528\u4E8E\u89E3\u6790\u8BF7\u6C42\u4F53\u4E2D\u7684\u6570\u636E\uFF0C\u4F8B\u5982 JSON\u3001URL \u7F16\u7801\u548C\u8868\u5355\u6570\u636E\u7B49\u3002</p><p><code>body-parser</code> \u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5C06\u8BF7\u6C42\u4F53\u4E2D\u7684\u6570\u636E\u89E3\u6790\u4E3A JavaScript \u5BF9\u8C61\uFF0C\u5E76\u5C06\u89E3\u6790\u540E\u7684\u6570\u636E\u9644\u52A0\u5230\u8BF7\u6C42\u5BF9\u8C61\u7684 body \u5C5E\u6027\u4E2D\uFF0C\u4EE5\u4FBF\u540E\u7EED\u4E2D\u95F4\u4EF6\u6216\u8DEF\u7531\u5904\u7406\u51FD\u6570\u4F7F\u7528\u3002</p><p><code>body-parser</code> \u5E38\u642D\u914D <code>express</code> \u6846\u67B6\u4E00\u8D77\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const express = require(&#39;express&#39;);
const bodyParser = require(&#39;body-parser&#39;);

const app = express();

// \u4F7F\u7528 body-parser \u4E2D\u95F4\u4EF6\u89E3\u6790 application/json \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53
app.use(bodyParser.json());

// \u4F7F\u7528 body-parser \u4E2D\u95F4\u4EF6\u89E3\u6790 application/x-www-form-urlencoded \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53
app.use(bodyParser.urlencoded({ extended: true }));

// \u4F7F\u7528 body-parser \u4E2D\u95F4\u4EF6\u89E3\u6790 text/plain \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53
app.use(bodyParser.text());

// \u8DEF\u7531\u5904\u7406\u51FD\u6570
app.post(&#39;/api/data&#39;, (req, res) =&gt; {
    console.log(req.body); // \u8F93\u51FA\u89E3\u6790\u540E\u7684\u8BF7\u6C42\u4F53\u6570\u636E
    res.send(&#39;Data received&#39;);
});

app.listen(3000, () =&gt; {
    console.log(&#39;Server is running on port 3000&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><hr><h3 id="\u5982\u679C\u6D4F\u89C8\u5668\u7AEF\u7528-post-\u63A5\u53E3\u4E0A\u4F20\u56FE\u7247\u548C\u4E00\u4E9B\u5176\u4ED6\u5B57\u6BB5-header-\u91CC\u4F1A\u6709\u4EC0\u4E48-koa-\u91CC\u5982\u679C\u4E0D\u7528-body-parser-\u5E94\u8BE5\u600E\u4E48\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u6D4F\u89C8\u5668\u7AEF\u7528-post-\u63A5\u53E3\u4E0A\u4F20\u56FE\u7247\u548C\u4E00\u4E9B\u5176\u4ED6\u5B57\u6BB5-header-\u91CC\u4F1A\u6709\u4EC0\u4E48-koa-\u91CC\u5982\u679C\u4E0D\u7528-body-parser-\u5E94\u8BE5\u600E\u4E48\u89E3\u6790" aria-hidden="true">#</a> \u5982\u679C\u6D4F\u89C8\u5668\u7AEF\u7528 post \u63A5\u53E3\u4E0A\u4F20\u56FE\u7247\u548C\u4E00\u4E9B\u5176\u4ED6\u5B57\u6BB5, header \u91CC\u4F1A\u6709\u4EC0\u4E48? koa \u91CC\u5982\u679C\u4E0D\u7528 body-parser\uFF0C\u5E94\u8BE5\u600E\u4E48\u89E3\u6790?</h3><p>\u82E5\u63A5\u53E3\u9700\u8981\u6388\u6743\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7 Authorization \u4F20\u9012\u6388\u6743\u4FE1\u606F\u3002</p><p>\u4E0A\u4F20\u6587\u4EF6\u65F6\u7684 Content-Type \u4E00\u822C\u88AB\u8BBE\u7F6E\u4E3A <code>multipart/form-data</code> \u7C7B\u578B\uFF0C\u5176\u4E2D <code>boundary</code> \u662F\u5206\u9694\u7B26\uFF0C\u7531\u6D4F\u89C8\u5668\u968F\u673A\u751F\u6210\u7684\u552F\u4E00\u5B57\u7B26\u4E32\uFF1A</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>Content-Type: multipart/form-data; boundary=something
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE5\u4E0B\u4F8B curl \u4E3A\u4F8B\uFF0C<code>----WebKitFormBoundaryEU440tTuKtxsINLf</code> \u5C31\u662F\u4F5C\u4E3A\u5206\u9694 <code>data</code> \u7684\u4F5C\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl &#39;https://api.upyun.com/cloud-example&#39; \\
  -H &#39;accept: application/json, text/plain, */*&#39; \\
  -H &#39;accept-language: en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.6&#39; \\
  -H &#39;cache-control: no-cache&#39; \\
  -H &#39;content-type: multipart/form-data; boundary=----WebKitFormBoundaryEU440tTuKtxsINLf&#39; \\
  -H &#39;origin: https://v5204.eng.szx.ifanrx.com&#39; \\
  -H &#39;pragma: no-cache&#39; \\
  -H &#39;priority: u=1, i&#39; \\
  -H &#39;referer: https://v5204.eng.szx.ifanrx.com/&#39; \\
  -H &#39;sec-ch-ua: &quot;Chromium&quot;;v=&quot;124&quot;, &quot;Google Chrome&quot;;v=&quot;124&quot;, &quot;Not-A.Brand&quot;;v=&quot;99&quot;&#39; \\
  -H &#39;sec-ch-ua-mobile: ?0&#39; \\
  -H &#39;sec-ch-ua-platform: &quot;macOS&quot;&#39; \\
  -H &#39;sec-fetch-dest: empty&#39; \\
  -H &#39;sec-fetch-mode: cors&#39; \\
  -H &#39;sec-fetch-site: cross-site&#39; \\
  -H &#39;user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36&#39; \\
  --data-raw $&#39;------WebKitFormBoundaryEU440tTuKtxsINLf\\r\\nContent-Disposition: form-data; name=&quot;policy&quot;\\r\\n\\r\\neyJidWNrZXQiOiAiY2xvdWQtbWluYXBwLTQ3MTUxIiwgInNhdmUta2V5IjogIjFzNU4xTmVHdHdOQ3FPWHYucG5nIiwgImRhdGUiOiAiRnJpLCAxMCBNYXkgMjAyNCAwOTo1ODozMyBHTVQiLCAiZXhwaXJhdGlvbiI6IDE3MTUzMzU0MTMsICJub3RpZnktdXJsIjogImh0dHBzOi8vdjUyMDQuZW5nLnN6eC5pZmFucnguY29tL2V4dGFwaS9oeWRyb2dlbi91cHl1bi9jYWxsYmFjay85MzAvNjYzZGVmYzljYjc0N2RiYzlkNWRiMmJlLyJ9\\r\\n------WebKitFormBoundaryEU440tTuKtxsINLf\\r\\nContent-Disposition: form-data; name=&quot;authorization&quot;\\r\\n\\r\\nmyauth=\\r\\n------WebKitFormBoundaryEU440tTuKtxsINLf\\r\\nContent-Disposition: form-data; name=&quot;file&quot;; filename=&quot;img_product.png&quot;\\r\\nContent-Type: image/png\\r\\n\\r\\n\\r\\n------WebKitFormBoundaryEU440tTuKtxsINLf--\\r\\n&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>koa \u91CC\u5982\u679C\u4E0D\u7528 body-parser\uFF0C\u5E94\u8BE5\u600E\u4E48\u89E3\u6790?</strong></p><p><code>multipart/form-data</code> \u8BF7\u6C42\u4E2D\uFF0C\u6BCF\u4E2A\u8868\u5355\u5B57\u6BB5\u6216\u4E0A\u4F20\u7684\u6587\u4EF6\u90FD\u88AB\u5C01\u88C5\u5728\u4E00\u4E2A\u7531\u8FB9\u754C\u5B57\u7B26\u4E32\uFF08boundary\uFF09\u5206\u9694\u7684\u90E8\u5206\u91CC\u3002\u6BCF\u4E2A\u90E8\u5206\u7684\u5F00\u5934\u901A\u5E38\u5305\u542B\u4E00\u4E2A <code>Content-Disposition</code> \u5934\uFF0C\u8BE5\u5934\u63CF\u8FF0\u4E86\u5B57\u6BB5\u7684\u540D\u79F0\uFF08\u4EE5\u53CA\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u5982\u679C\u8BE5\u90E8\u5206\u662F\u4E00\u4E2A\u6587\u4EF6\uFF09\u3002</p><p>\u4E0D\u901A\u8FC7\u4E2D\u95F4\u4EF6\u6765\u89E3\u6790 <code>multipart/form-data</code> \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5219\u539F\u751F\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const Koa = require(&#39;koa&#39;);
const app = new Koa();

app.use(async (ctx, next) =&gt; {
    if (ctx.method === &#39;POST&#39; &amp;&amp; ctx.is(&#39;multipart/form-data&#39;)) {
        let data = &#39;&#39;;
        let boundary = ctx.get(&#39;content-type&#39;).split(&#39;=&#39;)[1];
        let parts = [];

        await new Promise((resolve, reject) =&gt; {
            ctx.req.on(&#39;data&#39;, chunk =&gt; {
                data += chunk.toString();
            });

            ctx.req.on(&#39;end&#39;, () =&gt; {
                // \u5206\u5272\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528boundary
                data.split(boundary).forEach(part =&gt; {
                    if (part.includes(&#39;Content-Disposition: form-data;&#39;)) {
                        parts.push(part); // \u5C06\u6BCF\u4E2A\u90E8\u5206\u5B58\u50A8\u5230\u6570\u7EC4\u4E2D
                    }
                });

                resolve();
            });
        });

        // \u5904\u7406\u6BCF\u4E2A\u90E8\u5206\uFF0C\u89E3\u6790\u51FA\u5B57\u6BB5\u540D\u548C\u503C
        parts.forEach(part =&gt; {
            let matchResult = part.match(/name=&quot;([^&quot;]+)&quot;\\r\\n\\r\\n([\\s\\S]+)\\r\\n$/);
            if (matchResult) {
                let key = matchResult[1];
                let value = matchResult[2].trim();
                ctx.request.body = ctx.request.body || {};
                ctx.request.body[key] = value;
            }
        });

        await next();
    }
});

app.use(async ctx =&gt; {
    ctx.body = ctx.request.body; // \u8F93\u51FA\u89E3\u6790\u7684\u7ED3\u679C
});

app.listen(3000, () =&gt; console.log(&#39;Server running on http://localhost:3000&#39;));

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><hr><h3 id="node-\u7684\u65E5\u5FD7\u600E\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#node-\u7684\u65E5\u5FD7\u600E\u4E48\u505A" aria-hidden="true">#</a> Node \u7684\u65E5\u5FD7\u600E\u4E48\u505A\uFF1F</h3><p><strong>\u65E5\u5FD7\u7CFB\u7EDF</strong></p><p>\u5E38\u4F7F\u7528\u5982 Winston \u6216 Morgan \u7B49\u5E93\u8FDB\u884C\u65E5\u5FD7\u7BA1\u7406\u3002Winston \u652F\u6301\u591A\u79CD\u5B58\u50A8\u9009\u9879\u548C\u65E5\u5FD7\u7EA7\u522B\uFF0C\u800C Morgan \u7279\u522B\u9002\u7528\u4E8E HTTP \u8BF7\u6C42\u65E5\u5FD7\u3002</p><hr><h3 id="node-\u7684\u8D1F\u8F7D\u5747\u8861\u600E\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#node-\u7684\u8D1F\u8F7D\u5747\u8861\u600E\u4E48\u505A" aria-hidden="true">#</a> Node \u7684\u8D1F\u8F7D\u5747\u8861\u600E\u4E48\u505A\uFF1F</h3><p><strong>1.Node.js Cluster\u6A21\u5757</strong></p><p>Node.js \u7684 Cluster \u6A21\u5757\u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u5229\u7528\u591A\u6838\u7CFB\u7EDF\u7684\u591A\u4E2A\u6838\u5FC3\u3002\u901A\u8FC7\u521B\u5EFA\u591A\u4E2A\u5B50\u8FDB\u7A0B\uFF08workers\uFF09\uFF0C\u6BCF\u4E2A\u5B50\u8FDB\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u5FAA\u73AF\u548C\u5185\u5B58\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u5206\u6563\u8BF7\u6C42\u8D1F\u8F7D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const cluster = require(&#39;cluster&#39;);
const http = require(&#39;http&#39;);
const numCPUs = require(&#39;os&#39;).cpus().length; // \u83B7\u53D6CPU\u6838\u5FC3\u6570

if (cluster.isMaster) {
  console.log(\`\u4E3B\u8FDB\u7A0B \${process.pid} \u6B63\u5728\u8FD0\u884C\`);

  // \u884D\u751F\u5DE5\u4F5C\u8FDB\u7A0B\u3002
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  cluster.on(&#39;exit&#39;, (worker, code, signal) =&gt; {
    console.log(\`\u5DE5\u4F5C\u8FDB\u7A0B \${worker.process.pid} \u5DF2\u9000\u51FA\`);
  });
} else {
  // \u5DE5\u4F5C\u8FDB\u7A0B\u53EF\u4EE5\u5171\u4EAB\u4EFB\u4F55TCP\u8FDE\u63A5\u3002
  // \u5728\u672C\u4F8B\u4E2D\uFF0C\u5B83\u662F\u4E00\u4E2AHTTP\u670D\u52A1\u5668
  http.createServer((req, res) =&gt; {
    res.writeHead(200);
    res.end(&#39;\u4F60\u597D\u4E16\u754C\\n&#39;);
  }).listen(8000);

  console.log(\`\u5DE5\u4F5C\u8FDB\u7A0B \${process.pid} \u5DF2\u542F\u52A8\`);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>2.\u53CD\u5411\u4EE3\u7406</strong></p><p>\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u662F Node.js \u5E94\u7528\u6700\u5E38\u89C1\u7684\u8D1F\u8F7D\u5747\u8861\u65B9\u6CD5\u4E4B\u4E00\uFF0C\u5B83\u7684\u5B9E\u73B0\u539F\u7406\u662F\uFF1A</p><p>\u5F53\u7528\u6237\u8BBF\u95EE\u4F8B\u5982 <code>example.com</code> \u8FD9\u6837\u7684\u7F51\u7AD9\u65F6\uFF0C\u7528\u6237\u7684\u8BF7\u6C42\u9996\u5148\u5230\u8FBE\u90E8\u7F72\u4E86\u53CD\u5411\u4EE3\u7406\u7684\u670D\u52A1\u5668\u3002\u8FD9\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u4E0D\u4F1A\u76F4\u63A5\u5904\u7406\u8BF7\u6C42\u5185\u5BB9\uFF0C\u800C\u662F\u6839\u636E\u4E00\u5B9A\u7684\u89C4\u5219\uFF08\u5982\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u3001\u670D\u52A1\u5668\u5065\u5EB7\u72B6\u6001\u7B49\uFF09\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u4E00\u7EC4\u540E\u7AEF\u670D\u52A1\u5668\u4E4B\u4E00\u3002</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u53CD\u5411\u4EE3\u7406\u53EF\u4EE5\u91C7\u53D6\u591A\u79CD\u7B56\u7565\u6765\u51B3\u5B9A\u5982\u4F55\u5206\u53D1\u8BF7\u6C42\uFF1A</p><ul><li><strong>\u8F6E\u8BE2\uFF08Round Robin\uFF09</strong>\uFF1A\u6309\u987A\u5E8F\u5C06\u6BCF\u4E2A\u65B0\u8BF7\u6C42\u53D1\u9001\u5230\u4E0B\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u5FAA\u73AF\u8FDB\u884C\u3002</li><li><strong>\u6700\u5C11\u8FDE\u63A5\uFF08Least Connections\uFF09</strong>\uFF1A\u5C06\u8BF7\u6C42\u53D1\u9001\u5230\u5F53\u524D\u8FDE\u63A5\u6570\u6700\u5C11\u7684\u670D\u52A1\u5668\u3002</li><li><strong>IP\u54C8\u5E0C\uFF08IP Hashing\uFF09</strong>\uFF1A\u6839\u636E\u7528\u6237\u7684 IP \u5730\u5740\u51B3\u5B9A\u5C06\u8BF7\u6C42\u53D1\u9001\u5230\u54EA\u4E2A\u670D\u52A1\u5668\uFF0C\u8FD9\u6837\u6765\u81EA\u540C\u4E00IP\u5730\u5740\u7684\u8BF7\u6C42\u603B\u662F\u88AB\u53D1\u9001\u5230\u540C\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u7EF4\u6301\u7528\u6237\u7684\u4F1A\u8BDD\u72B6\u6001\u3002</li></ul><p>\u4EE5\u4E0B\u5E38\u4E3A\u5E38\u89C1\u7684\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF1A</p><ul><li><strong>Nginx</strong>: \u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5C06\u8FDB\u5165\u7684\u8BF7\u6C42\u5206\u53D1\u5230\u540E\u7AEF\u7684\u591A\u4E2A Node.js\u5B9E\u4F8B\u3002</li><li><strong>Apache HTTP Server</strong>: \u867D\u7136\u4E0D\u5982 Nginx \u6D41\u884C\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u914D\u7F6E\u4E3ANode.js\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u3002</li></ul><p><strong>3.DNS\u8D1F\u8F7D\u5747\u8861</strong></p><p>\u4E91\u89E3\u6790 DNS \u6743\u91CD\u914D\u7F6E\uFF0C\u5373\u5728 DNS \u670D\u52A1\u5668\u4E2D\u4E3A\u540C\u4E00\u4E2A\u4E3B\u673A\u8BB0\u5F55\u914D\u7F6E\u591A\u4E2A IP \u5730\u5740\uFF0C\u5728\u5E94\u7B54 DNS \u67E5\u8BE2\u65F6\uFF0C\u6240\u6709 IP \u5730\u5740\u6309\u7167\u9884\u5148\u8BBE\u7F6E\u7684\u6743\u91CD\u8FDB\u884C\u8FD4\u56DE\u4E0D\u540C\u7684\u89E3\u6790\u7ED3\u679C\uFF0C\u5C06\u89E3\u6790\u6D41\u91CF\u5206\u914D\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u4ECE\u800C\u8FBE\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u76EE\u7684\u3002</p><p>\u4EE5\u963F\u91CC\u4E91\u7684 DNS \u4E91\u89E3\u6790\u4E3A\u4F8B\uFF1A\u5047\u8BBE\u60A8\u6211\u4EEC\u6709 3 \u53F0\u670D\u52A1\u5668 (IP \u5730\u5740\u5206\u522B\u4E3A <code>1.1.XX.XX</code>\u3001<code>2.2.XX.XX</code>\u3001<code>3.3.XX.XX</code>) \u63D0\u4F9B\u540C\u4E00\u670D\u52A1\uFF081 \u4E2A\u57DF\u540D\uFF09\u3002</p><p>\u5F53\u6743\u91CD\u914D\u7F6E\u5F00\u542F\u540E\uFF0C\u8FDB\u884C\u6743\u91CD\u8BBE\u7F6E\uFF0C\u5728 DNS \u8BF7\u6C42\u5E94\u7B54\u4E2D\uFF0CIP \u5730\u5740\u6309\u7167\u9884\u5148\u8BBE\u7F6E\u7684\u6743\u91CD\u8FDB\u884C\u8FD4\u56DE\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5C06\u89E3\u6790\u6D41\u91CF\u6309\u7167\u6743\u91CD\u8FDB\u884C\u5206\u914D\u3002\u4F8B\u5982\uFF0C\u5C06\u4E0A\u8FF0 3 \u6761\u89E3\u6790\u8BB0\u5F55\u7684\u6743\u91CD\u6BD4\u8BBE\u7F6E\u4E3A <strong>2:1:1</strong> \u65F6\uFF0C\u5219 DNS \u89E3\u6790\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code>Region1 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 1.1.XX.XX
Region2 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 2.2.XX.XX
Region3 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 3.3.XX.XX
Region4 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 1.1.XX.XX
Region5 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 1.1.XX.XX
Region6 \u8BBF\u95EE\uFF0C\u8FD4\u56DE 2.2.XX.XX
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>4.\u5BB9\u5668\u670D\u52A1\u4E0E\u7F16\u6392\u5DE5\u5177</strong></p><p>\u5BB9\u5668\u5316\u6280\u672F\u5141\u8BB8\u5C06\u5E94\u7528\u548C\u5176\u4F9D\u8D56\u73AF\u5883\u5C01\u88C5\u5728\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u3001\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\u3002\u6BCF\u4E2A\u5BB9\u5668\u90FD\u662F\u72EC\u7ACB\u8FD0\u884C\u7684\uFF0C\u5E76\u4E14\u4E0E\u5176\u4ED6\u5BB9\u5668\u9694\u79BB\u3002\u8FD9\u79CD\u9694\u79BB\u548C\u5C01\u88C5\u786E\u4FDD\u4E86\u5E94\u7528\u7684\u4E00\u81F4\u6027\u548C\u5B89\u5168\u6027\uFF0C\u4F7F\u5F97\u5BB9\u5668\u975E\u5E38\u9002\u5408\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u90E8\u7F72\u548C\u6269\u5C55\u3002\u5E38\u89C1\u7684\u5BB9\u5668\u670D\u52A1\u6709 docker\u3002</p><p>\u5BB9\u5668\u7F16\u6392\u5DE5\u5177\uFF0C\u5982 Kubernetes\uFF0C\u80FD\u591F\u76D1\u63A7\u5BB9\u5668\u7684\u72B6\u6001\u548C\u6027\u80FD\u6307\u6807\u3002\u6839\u636E\u9884\u5B9A\u4E49\u7684\u89C4\u5219\uFF0C\u5982 CPU \u4F7F\u7528\u7387\u6216\u5185\u5B58\u6D88\u8017\uFF0C\u7F16\u6392\u5DE5\u5177\u53EF\u4EE5\u81EA\u52A8\u589E\u52A0\u6216\u51CF\u5C11\u5BB9\u5668\u5B9E\u4F8B\u7684\u6570\u91CF\u3002\u8FD9\u79CD\u81EA\u52A8\u6269\u5C55\u529F\u80FD\u662F\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u7684\u5173\u952E\uFF0C\u5B83\u786E\u4FDD\u5E94\u7528\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u52A8\u6001\u8C03\u6574\u8D44\u6E90\uFF0C\u907F\u514D\u8FC7\u8F7D\u3002</p><p>\u4F8B\u5982\uFF0C\u5728 Kubernetes \u4E2D\uFF0C\u4E00\u4E2A Service \u5BF9\u8C61\u5B9A\u4E49\u4E86\u4E00\u4E2A\u903B\u8F91\u5E94\u7528\u670D\u52A1\uFF0C\u5B83\u80CC\u540E\u53EF\u4EE5\u6709\u591A\u4E2A Pod \u5B9E\u4F8B\u3002\u5F53\u670D\u52A1\u63A5\u6536\u5230\u8BF7\u6C42\u65F6\uFF0CKubernetes \u7684\u5185\u90E8\u8D1F\u8F7D\u5747\u8861\u673A\u5236\uFF08\u5982 iptables \u6216 IPVS\uFF09\u5C06\u8BF7\u6C42\u5747\u5300\u5730\u5206\u914D\u5230\u540E\u7AEF\u7684 Pod \u4E0A\u3002</p><hr><h3 id="\u8BB2\u8BB2-charles-\u7684-map-local-\u548C-map-remote" tabindex="-1"><a class="header-anchor" href="#\u8BB2\u8BB2-charles-\u7684-map-local-\u548C-map-remote" aria-hidden="true">#</a> \u8BB2\u8BB2 Charles \u7684 map local \u548C map remote</h3><p>Charles \u4E2D\u7684 <code>Map Local</code> \u548C <code>Map Remote</code> \u529F\u80FD\u90FD\u7528\u4E8E\u91CD\u5B9A\u5411\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u4FEE\u6539\u5B9E\u9645\u670D\u52A1\u5668\u54CD\u5E94\u7684\u60C5\u51B5\u4E0B\u6D4B\u8BD5\u548C\u8C03\u8BD5\u7F51\u7EDC\u5E94\u7528\u3002</p><ul><li><strong>Map Local</strong>: \u4E3B\u8981\u7528\u4E8E\u5C06\u7F51\u7EDC\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u672C\u5730\u6587\u4EF6\u3002\u8FD9\u9002\u7528\u4E8E\u9700\u8981\u4F7F\u7528\u9759\u6001\u54CD\u5E94\u6570\u636E\u8FDB\u884C\u5F00\u53D1\u548C\u6D4B\u8BD5\u7684\u573A\u666F\uFF0C\u5982\u79BB\u7EBF\u5F00\u53D1\u6216\u56FA\u5B9A\u8F93\u51FA\u7684\u6D4B\u8BD5\u3002</li><li><strong>Map Remote</strong>: \u7528\u4E8E\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u53E6\u4E00\u4E2A\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u5730\u5740\u3002\u8FD9\u53EF\u4EE5\u7528\u4E8E\u6D4B\u8BD5\u5E94\u7528\u5728\u4E0D\u540C\u540E\u7AEF\u73AF\u5883\u4E0B\u7684\u884C\u4E3A\uFF0C\u6216\u8005\u5728\u8BBF\u95EE\u67D0\u4E9B\u56E0\u7B56\u7565\u9650\u5236\u800C\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u7684\u670D\u52A1\u5668\u65F6\u4F7F\u7528\u3002</li></ul>`,94);function p(i,o){return l}var c=n(r,[["render",p],["__file","nodejs.html.vue"]]);export{c as default};
