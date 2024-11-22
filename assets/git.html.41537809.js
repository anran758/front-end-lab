import{_ as c,r as t,o as p,c as d,a as n,b as e,w as r,F as b,e as s,d as i}from"./app.7e3542fd.js";var o="/front-end-lab/assets/git-merge-difference.bcb521fd.png";const u={},m=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" Git")],-1),h={class:"table-of-contents"},g=s("\u65E5\u5E38\u63D0\u4EA4\u6D41\u7A0B"),_=s("Add"),f=s("Commit"),v=s("Branch"),x=s("\u6279\u91CF\u5220\u9664\u5206\u652F"),k=s("\u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u540D"),w=s("Tag"),E=s("History"),y=s("Remote"),A=s("Guide"),D=s("\u521D\u59CB\u5316\u8FDC\u7A0B\u4ED3\u5E93"),q=s("\u5408\u5E76\u5206\u652F"),H=s("\u64A4\u9500\u8FD8\u6CA1 push \u5230\u8FDC\u7A0B\u7684 commit"),T=s("\u64A4\u9500\u5DF2\u7ECF push \u5230\u8FDC\u7AEF\u7684 commit"),O=s("\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u4ED3\u5E93\u7684 commit"),R=s("\u6E05\u7A7A\u9879\u76EE\u7684 commit \u8BB0\u5F55"),B=s("\u89E3\u51B3.git\u76EE\u5F55\u8FC7\u5927\u7684\u95EE\u9898"),F=s("\u6587\u4EF6\u5939\u5927\u5C0F\u5199\u5207\u6362"),G=s("\u4FDD\u7559\u7A7A\u7684\u6587\u4EF6\u5939"),$=s("\u5E38\u89C1\u9519\u8BEF"),I=s("\u5728\u6267\u884C git pull origin master \u547D\u4EE4\u65F6\uFF0C\u65E0\u6CD5 pull \u7684\u60C5\u51B5"),M=s("win10 \u4FEE\u6539 git \u5BC6\u7801\u540E\u65E0\u6CD5 pull"),N=s("Filename too long"),C=s("\u5176\u4ED6"),j=s("\u67E5\u770B\u4ED3\u5E93\u63D0\u4EA4\u8005\u7684\u7EDF\u8BA1"),L=s("\u66F4\u6539\u9879\u76EE\u4E2D\u4F5C\u8005\u4FE1\u606F"),V=s("gitattributes"),W=s("\u6269\u5C55\u9605\u8BFB"),P=i(`<table><thead><tr><th>\u672F\u8BED</th><th>\u89E3\u91CA</th></tr></thead><tbody><tr><td>origin</td><td>\u9ED8\u8BA4\u8FDC\u7AEF\u4ED3\u5E93</td></tr><tr><td>master</td><td>\u9ED8\u8BA4\u5F00\u53D1\u5206\u652F</td></tr><tr><td>HEAD</td><td>\u5F53\u524D\u6D3B\u8DC3\u5206\u652F\u7684\u6E38\u6807, \u5982\u679C\u5F53\u524D\u5904\u4E8E master \u5206\u652F\uFF0C\u90A3\u4E48 HEAD \u6307\u5411 master</td></tr><tr><td>HEAD^</td><td><code>HEAD</code> \u7236\u63D0\u4EA4</td></tr><tr><td>tracked</td><td><code>git</code> \u5DF2\u7ECF\u8FFD\u8E2A\u6587\u4EF6</td></tr><tr><td>untracked</td><td><code>git</code> \u672A\u8DDF\u8E2A\u7684\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u63D0\u4EA4\u5230 <code>git</code> \u8FC7\u7684\u65B0\u6587\u4EF6</td></tr><tr><td>revert</td><td>\u56DE\u9000</td></tr><tr><td>stage</td><td>\u6682\u5B58\u7684\u66F4\u6539\uFF0C\u6B64\u65F6\u6587\u4EF6\u8FD8\u6CA1\u6709\u63D0\u4EA4\u5230\u8FDC\u7A0B</td></tr></tbody></table><h2 id="\u65E5\u5E38\u63D0\u4EA4\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5E38\u63D0\u4EA4\u6D41\u7A0B" aria-hidden="true">#</a> \u65E5\u5E38\u63D0\u4EA4\u6D41\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u8DDF\u8E2A\u6539\u52A8\u8FC7\u7684\u6587\u4EF6
# \`git add &lt;file&gt;\` or
# \`git add -A\` or
git add .

# \u6DFB\u52A0 commit \u4FE1\u606F
# \u4E0D\u540C\u56E2\u961F\u6709\u4E0D\u540C\u7684\u7F16\u5199 commit \u4FE1\u606F\u89C4\u8303\uFF0C\u6709\u7684\u9879\u76EE\u4F9D\u8D56 commit \u7684\u683C\u5F0F\u6765\u505A\u81EA\u52A8\u5316\u5904\u7406
# \u5E38\u89C1\u683C\u5F0F\u5982\uFF1A \`&lt;action&gt; &lt;desc content&gt;\`
git commit -m &quot;fix: message commit&quot;

# \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u4EE3\u7801\uFF0C\u67E5\u770B\u662F\u5426\u6709\u51B2\u7A81
# \u76F4\u63A5 git pull \u53EF\u80FD\u4F1A\u6709\u51B2\u7A81\uFF0C\u53EF\u91C7\u7528 rebase \u4EE3\u66FF\u9ED8\u8BA4\u7684 merge \u7B56\u7565\u51CF\u5C11\u591A\u4F59\u7684 commit \u63D0\u4EA4
git pull --rebase

# \u63D0\u4EA4\u6539\u52A8\u81F3\u9ED8\u8BA4\u7684\u8FDC\u7A0B\u4ED3\u5E93
git push

# or \u540C\u65F6\u63D0\u4EA4\u6539\u52A8\u81F3\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93(orgin)\u548C\u5206\u652F(develop, master)
git push origin master develop

# \u67E5\u770B\u547D\u4EE4\u5386\u53F2,
# \u4F7F\u7528\u573A\u666F: \u8BEF\u64CD\u4F5C reset \u9519\u4E86 commit\uFF0C\u73B0\u5728\u671F\u671B\u6062\u590D\u56DE\u6765\u3002
# \u4F7F\u7528 git reflog \u627E\u5230\u64CD\u4F5C\u7684\u5386\u53F2\uFF0C\u627E\u5230\u9700\u8981\u6062\u590D\u7684 commit_id \u53EF\u4EE5\u901A\u8FC7 git reset --hard &lt;commit_id&gt; \u56DE\u9000\u5230\u539F\u672C\u7684\u7248\u672C\u4E2D
git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5C06 &lt;change file&gt; \u5C06\u5176\u6DFB\u52A0\u5230 \u201C\u6682\u5B58\u7684\u66F4\u6539\u201D \u4E2D
git add &lt;change file&gt;

# Example: \u5C06\u5F53\u524D\u8DEF\u5F84\u4E0B ./docs/git/README.md \u6587\u4EF6\u6DFB\u52A0\u5230 \u201C\u6682\u5B58\u7684\u66F4\u6539\u201D \u4E2D
git add docs/git/README.md

# \u4EE5\u4E0B\u4E24\u8005\u90FD\u662F\u5C06\u4FEE\u6539\u7684\u6587\u4EF6\u5168\u90E8\u6DFB\u52A0\u5230\u7F13\u5B58\u533A\u4E2D
git add .
git add --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u4E3A\u5DF2\u7ECF\u8FDB\u5165 \`stage(\u6682\u5B58\u7684\u66F4\u6539)\` \u6DFB\u52A0\`commit\`\u4FE1\u606F
git commit -m &lt;message&gt;

# Example:
git commit -m &quot;docs: uupdate README&quot;

# \u4FEE\u6539\u4E0A\u6B21\u63D0\u4EA4\u7684 \`commit\` \u4FE1\u606F, \u4E4B\u540E\u4F1A\u8FDB\u5165\u7F16\u8F91\u5668\u6A21\u5F0F(\u4E00\u822C\u662F vim \u7F16\u8F91\u5668)
git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> Branch</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u5206\u652F
git branch

# git checkout &lt;branch/tag&gt; \u5207\u6362\u6307\u5B9A\u7684\u5206\u652F\u6216\u6807\u7B7E
git checkout develop

# \u5207\u6362\u540D\u4E3A gh-pages \u7684\u5206\u652F, \u5982\u679C\u4E0D\u5B58\u5728\u8FD9\u4E2A\u5206\u652F\u5C31\u57FA\u4E8E\u5F53\u524D\u5206\u652F\u521B\u5EFA\u5B83
# \u6BD4\u5982\u5F53\u524D\u5206\u652F\u4E3A develop, \u90A3\u65B0\u5206\u652F\u7684\u4EE3\u7801\u662F\u57FA\u4E8E develop \u7684\u4EE3\u7801
git checkout -b &quot;gh-pages&quot;

# \u4F7F\u5F53\u524D\u7684\u5206\u652F\u548C\u8FDC\u7A0B\u4ED3\u5E93 \`origin2/game\` \u5EFA\u7ACB\u5173\u8054\uFF08\u524D\u63D0\u662F\u76EE\u6807\u5206\u652F\u8981\u5B58\u5728\uFF09
# \u5EFA\u7ACB\u5173\u8054\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 \`git push\` \u547D\u4EE4\u800C\u65E0\u9700\u6DFB\u52A0\u5176\u4ED6\u53C2\u6570\u3002
git branch --set-upstream-to orgin2/game

# \u5220\u9664\u5DF2\u5408\u5E76\u7684\u5206\u652F, \u672A\u5408\u5E76\u8FC7\u5206\u652F\u5220\u9664\u4F1A\u5931\u8D25
git branch -d feature/ticket-382

# \u5F3A\u5236\u5220\u9664\u5206\u652F
git branch -D feature/ticket-382

# \u5220\u9664\u8FDC\u7A0B\u7684\u6307\u5B9A\u5206\u652F
git push origin --delete feature/ticket-382
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u6279\u91CF\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u6279\u91CF\u5220\u9664\u5206\u652F</h3><p>\u6BD4\u5982\u6211\u73B0\u5728 local \u6709\u5F88\u591A\u4E0D\u518D\u9700\u8981\u4F7F\u7528\u7684\u67D0\u4E2A\u5F00\u53D1\u5468\u671F\u5206\u652F\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u7BA1\u9053\u6279\u91CF\u5220\u9664\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git branch | grep -v 13 | grep SPRINT | xargs git branch -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u5217\u4EE3\u7801\u4E2D\u7684 grep \u7528\u4E8E\u67E5\u627E\u6587\u4EF6\u91CC\u7B26\u5408\u6761\u4EF6\u7684\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u79FB\u9664\u7684\u7ED3\u679C\uFF0C\u901A\u8FC7\u7BA1\u9053\u64CD\u4F5C\u7B26\u53EF\u591A\u6B21\u5BF9\u7ED3\u679C\u8FDB\u884C\u7B5B\u9009\u3002xargs \u662F\u7ED9\u547D\u4EE4\u884C\u4F20\u9012\u53C2\u6570\u7684\u5DE5\u5177\u3002</p><h3 id="\u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u540D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u540D" aria-hidden="true">#</a> \u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u540D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 1. \u91CD\u547D\u540D\u5206\u652F
git branch -m oldBranch newBranch

# 2. \u5220\u9664\u8FDC\u7A0B\u5206\u652F
git push --delete origin oldBranch

# 3. \u5C06\u4FEE\u6539\u540E\u7684\u65B0\u5206\u652F\u63A8\u9001\u81F3\u8FDC\u7AEF\u5E76\u8DDF\u8E2A\u5173\u8054
git push -u origin newBranch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> Tag</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u6240\u6709\u6807\u7B7E
git tag

# \u57FA\u4E8E\u5F53\u524D commit \u521B\u5EFA\u6807\u7B7E
git tag &lt;tagname&gt;

# \u5220\u9664\u6307\u5B9A\u6807\u7B7E
git tag -d &lt;tagname&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u63D0\u4EA4\u5386\u53F2
git log

# \u4F7F\u7528\u66F4\u7B80\u6D01\u7684\u6A21\u5F0F\u67E5\u770B\u63D0\u4EA4\u5386\u53F2
git log --oneline

# \u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2
git log -p &lt;file&gt;

# \u4EE5\u5217\u8868\u7684\u65B9\u5F0F\u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u63D0\u4EA4\u5386\u53F2
git blame &lt;file&gt;

# \u67E5\u770B\u6307\u5B9A\u7528\u6237 commit \u8BB0\u5F55
git log --author &lt;authorName&gt;

# \u6839\u636E\u6807\u7B7E\u7B5B\u9009\u51FA\u4E24\u4E2A\u7248\u672C\u4E4B\u95F4\u7684 commit \u4FE1\u606F:
git log master..develop
# \u5728 Git \u4E2D\uFF0C..\uFF08\u4E24\u4E2A\u8FDE\u7EED\u7684\u70B9\uFF09\u662F\u4E00\u4E2A\u8303\u56F4\u64CD\u4F5C\u7B26\uFF0C\u7528\u4E8E\u8868\u793A\u4E24\u4E2A\u53C2\u8003\u70B9\u4E4B\u95F4\u7684\u8303\u56F4\u3002
# \u4EE5\u4E0A\u8868\u660E\u7B5B\u9009\u51FA v0.0.1 \u548C v0.0.2 \u533A\u95F4\u5185\u7684 commit \u8BB0\u5F55

# \u663E\u793A\u4ECE\u7248\u672C v0.1.0 \u5230\u5F53\u524D\u6700\u65B0\u63D0\u4EA4\u4E4B\u95F4\u7684\u6240\u6709\u63D0\u4EA4\u8BB0\u5F55\u53CA\u6BCF\u6B21\u63D0\u4EA4\u6539\u53D8\u4E86\u54EA\u4E9B\u6587\u4EF6\u3002
# --name-status \u4F1A\u5728\u6BCF\u4E2A\u63D0\u4EA4\u4FE1\u606F\u540E\u663E\u793A\u53D7\u5F71\u54CD\u7684\u6587\u4EF6\u7684\u8DEF\u5F84\u548C\u8FD9\u4E9B\u6587\u4EF6\u7684\u72B6\u6001
# tips: \u53EF\u4EE5\u7ED3\u5408\u547D\u4EE4\u884C\u7684\u5176\u4ED6\u6587\u672C\u5904\u7406\u7684\u547D\u4EE4\u6765\u505A\u67D0\u4E9B\u5DE5\u4F5C
git log --name-status v0.1.0..HEAD

# \u67E5\u770B\u4E0A\u4E00\u6B21 commit \u7684\u4FEE\u6539\u5185\u5BB9
git show

# \u67E5\u770B\u6307\u5B9A commit \u7684\u4FEE\u6539\u5185\u5BB9
git show &lt;commitHash&gt;

# \u67E5\u770B\u7F13\u5B58\u533A\u4E2D\u6587\u4EF6\u7684\u6539\u52A8
git diff --cached
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="remote" tabindex="-1"><a class="header-anchor" href="#remote" aria-hidden="true">#</a> Remote</h2><p>\u6DFB\u52A0\u65B0\u7684 remote</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git remote add &lt;originName&gt; &lt;remoteUrl&gt;

# example, \u6DFB\u52A0\u4E00\u4E2A origin name \u4E3A \`newOrigin\`
git remote add newOrigin https://github.com/anran758/front-end-lab.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C06\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u7684\u8FDC\u7AEF\u5206\u652F\uFF0C\u5982\u679C remote \u6CA1\u6709\u63A8\u9001\u7684\u5206\u652F\uFF0C\u90A3\u5C31\u65B0\u5EFA\u4E00\u4E2A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A8\u9001\u5F53\u524D\u5206\u652F\u5E76\u4E0E remote \u4E0A\u6E38\u5EFA\u7ACB\u8DDF\u8E2A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git push --set-upstream origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u4E0A\u6E38\u5E76\u63A8\u9001\u81F3\u8FDC\u7A0B\u7684 <code>master</code> \u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git push -u origin master

# \u4EE5\u4E0B\u4E24\u6761\u4E0E\u4E0A\u9762\u4E00\u6761\u529F\u80FD\u76F8\u4F3C
git push origin master
git branch --set-upstream-to orgin/master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="guide" tabindex="-1"><a class="header-anchor" href="#guide" aria-hidden="true">#</a> Guide</h2><h3 id="\u521D\u59CB\u5316\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8FDC\u7A0B\u4ED3\u5E93</h3><p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u5728\u8FDC\u7A0B\u50A8\u5B58\u5E93\u4E0A\u521B\u5EFA\u4E86\u65B0\u7684\u5E93(<code>test</code>)\uFF0C\u6B64\u65F6\u9700\u8981\u5C06\u672C\u5730\u9879\u76EE\u7684\u4EE3\u7801\u5173\u8054\u5E76\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u53BB:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cd test

# \u521D\u59CB\u5316 git
git init

# \u6DFB\u52A0\u5168\u90E8\u6539\u52A8
git add .

# \u6DFB\u52A0 commit \u4FE1\u606F
git commit -m &quot;feat: init message&quot;

# \u6DFB\u52A0\u8FDC\u7A0B\u5730\u5740
git remote add origin git@github.com:anran758/test.git

# \u63D0\u4EA4\u4EE3\u7801\u81F3 origin\uFF0C\u5E76\u8BBE\u7F6E master \u5206\u652F\u4E3A\u8FFD\u8E2A\u5206\u652F
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h3><p>\u5206\u652F\u5408\u5E76\u65F6\u63D0\u4F9B\u7684 <code>--ff</code>, <code>--no-ff</code>, <code>--ff-only</code> \u9009\u9879\u7684\u4E0D\u540C\u4F1A\u5BFC\u81F4\u5206\u652F\u7EBF\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\uFF1A</p><p><img src="`+o+`" alt="\u5206\u652F\u7EBF\u53D8\u52A8"></p><p>\u5176\u4E2D <code>ff</code> \u4E3A <code>fast-forward</code> \u7684\u7F29\u5199\uFF0Cmerge \u4EE3\u7801\u65F6 git \u9ED8\u8BA4\u4F1A\u91C7\u7528 <code>--ff</code> \u7684\u9009\u9879\u3002 \u8BE5\u9009\u9879\u7684\u610F\u601D\u4E3A\uFF1A\u5982\u679C master \u6CA1\u6709\u5206\u6B67\uFF0Cgit \u4E0D\u4F1A\u521B\u5EFA\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5C06 master \u6307\u5411 feature \u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4\uFF0C\u5728 fast-forward \u5408\u5E76\u4E2D\u4E0D\u4F1A\u6709\u4EFB\u4F55 &quot;\u5408\u5E76\u63D0\u4EA4&quot;\u3002</p><p>\u4E00\u822C\u6211\u4EEC\u5408\u5E76 feature \u5206\u652F\u65F6\u4F1A\u503E\u5411\u4E8E\u5C06\u529F\u80FD\u5206\u652F\u4F5C\u4E3A\u4E00\u6761\u5355\u72EC\u7684\u7EBF\uFF0C\u5408\u5E76\u540E\u4F1A\u4FDD\u7559\u8FD9\u6761\u5206\u652F\u7EBF\u3002\u6B64\u65F6\u5C31\u9700\u8981 merge \u52A0\u4E0A <code>--no-ff</code>\u3002\u5373\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u521B\u5EFA merge \u63D0\u4EA4\u3002</p><blockquote><p>Tips: \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>git log --graph</code> \u67E5\u770B\u5E26\u5206\u652F\u7EBF\u7684 commit \u65E5\u5FD7\u3002</p></blockquote><h3 id="\u64A4\u9500\u8FD8\u6CA1-push-\u5230\u8FDC\u7A0B\u7684-commit" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u8FD8\u6CA1-push-\u5230\u8FDC\u7A0B\u7684-commit" aria-hidden="true">#</a> \u64A4\u9500\u8FD8\u6CA1 push \u5230\u8FDC\u7A0B\u7684 commit</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u4EC5\u5220\u9664\u6240\u6709\u672A\u8FFD\u8E2A\u7684\u6587\u4EF6\uFF0C\u4FEE\u6539\u8FC7\u5DF2\u8FFD\u8E2A\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u56DE\u9000
git clean -df

# \u628A\u5DF2\u8FFD\u8E2A\u7684\u6587\u4EF6\u56DE\u9000\u5230\u524D\u4E00\u4E2A\u7248\u672C\uFF0C\u4E0D\u4F1A\u5220\u9664\u672A\u8FFD\u8E2A\u7684\u6587\u4EF6
git reset HEAD~1

# \u628A\u5DF2\u8FFD\u8E2A\u7684\u6587\u4EF6\u56DE\u9000\u5230\u524D\u4E00\u4E2A\u7248\u672C\uFF0C\u4E0D\u4F1A\u5220\u9664\u672A\u8FFD\u8E2A\u7684\u6587\u4EF6\u3002\u4F46\u4F1A\u4E22\u5931\u5DF2\u8FFD\u8E2A\u7684\u6587\u4EF6
git reset --hard
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u60F3\u64A4\u9500\u6307\u5B9A commit \u7684\u8BDD:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># [\u4FDD\u7559\u6587\u4EF6\u7684\u6539\u52A8]
#    \u5982\u679C\u5F53\u524D\u53EA commit \u4E86\u4E00\u6B21\uFF0C\u60F3\u7ED9\u56DE\u9000\u5230 commit \u524D\u7684\u4E0A\u4E00\u4E2A\u7248\u672C\u7684\u8BDD\uFF0C
#    \u53EF\u4EE5\u7528 \`HEAD\` \u6307\u9488\u6765\u4EE3\u66FF \`commit_hash\`
#
# HEAD    \u5F53\u524D\u7248\u672C
# HEAD~1  \u5F53\u524D\u7248\u672C\u5411\u540E\u79FB 1 \u4E2A\u7248\u672C
# HEAD~5  \u5F53\u524D\u7248\u672C\u5411\u540E\u79FB 5 \u4E2A\u7248\u672C
git reset HEAD~1

# \u5982\u679C\u60F3\u56DE\u9000\u7684\u7248\u672C\u8FC7\u957F\uFF0C\u4E0D\u597D\u7B97 HEAD \u504F\u79FB\u91CF\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E commit_hash \u56DE\u9000\u5230\u6307\u5B9A\u7248\u672C
#
# Example: \u6211\u60F3\u5C06\u4EE3\u7801\u56DE\u9000\u5230\u7B2C\u4E09\u4E2A commit(3333333) \u7684\u7248\u672C
git log --oneline
# \u5DE6\u4FA7=commit_hash, \u53F3\u4FA7=commit_info
#
# 1111111 (HEAD -&gt; master, origin/master, origin/HEAD) docs: modify README
# 2222222 build: update details styles
# 3333333 docs(topic): update topic note

# [\u4FDD\u7559\u6587\u4EF6\u7684\u6539\u52A8] \u5C06\u4EE3\u7801\u6062\u590D\u4E3A commit_hash=3333333 \u7684\u7248\u672C
#   1111111 \u548C 2222222 \u6240\u505A\u7684\u6539\u52A8\u4F1A\u88AB\u4FDD\u7559\uFF0C\u53EF\u4EE5\u91CD\u65B0\u9009\u62E9 commit
git reset 3333333

# [\u4E22\u5F03\u6587\u4EF6\u7684\u6539\u52A8] \u5C06\u4EE3\u7801\u6062\u590D\u4E3A commit_hash=3333333 \u7684\u7248\u672C
#   1111111 \u548C 2222222 \u6240\u505A\u7684\u6539\u52A8\u90FD\u4F1A\u88AB\u4E22\u5F03
git reset --hard 3333333
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u64A4\u9500\u5DF2\u7ECF-push-\u5230\u8FDC\u7AEF\u7684-commit" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u5DF2\u7ECF-push-\u5230\u8FDC\u7AEF\u7684-commit" aria-hidden="true">#</a> \u64A4\u9500\u5DF2\u7ECF push \u5230\u8FDC\u7AEF\u7684 commit</h3><p>\u5728\u4F7F\u7528<code>git</code>\u65F6\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u4F1A\u65E0\u610F\u95F4\u9519\u63A8\u4E86\u6211\u4EEC\u4E0D\u60F3\u63A8\u4E0A\u53BB\u7684\u6587\u4EF6\u6216\u8005\u5E0C\u671B\u80FD\u591F\u56DE\u9000\u4EE5\u524D\u7248\u672C\u7684\u65F6\u5019. \u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u5148\u5728\u672C\u5730\u56DE\u9000\u5230\u76F8\u5E94\u7684\u7248\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6CE8\u610F\u4F7F\u7528 --hard \u53C2\u6570\u4F1A\u629B\u5F03\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539
# \u4F7F\u7528 --soft \u53C2\u6570\u7684\u8BDD\u4F1A\u56DE\u9000\u5230\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u4F46\u662F\u4FDD\u7559\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u91CD\u65B0\u63D0\u4EA4
git reset --hard &lt;commit_hash&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E3A\u4E86\u8986\u76D6\u6389\u8FDC\u7AEF\u7684\u7248\u672C\u4FE1\u606F\uFF0C\u4F7F\u8FDC\u7AEF\u7684\u4ED3\u5E93\u4E5F\u56DE\u9000\u5230\u76F8\u5E94\u7684\u7248\u672C\uFF0C\u9700\u8981\u52A0\u4E0A\u53C2\u6570<code>--force</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># branch: \u5206\u652F
git push origin &lt;branch&gt; --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u4ED3\u5E93\u7684-commit" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u4ED3\u5E93\u7684-commit" aria-hidden="true">#</a> \u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u4ED3\u5E93\u7684 commit</h3><p>\u9996\u5148\u6211\u4EEC\u6709\u4E24\u4E2A\u4ED3\u5E93: <code>repo1</code> \u548C <code>repo2</code>\u3002<code>repo1</code> \u662F\u6211\u4EEC\u60F3\u8981\u4FDD\u7559\u7684\u4ED3\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6DFB\u52A0\u8FDC\u7A0B\u5730\u5740
git remote add repo2 git@github.com:anran758/repo2.git

# \u62C9\u53D6\u4EE3\u7801
git fetch repo2

# \u5207\u6362\u81F3 master \u5206\u652F
git checkout master

# \u5408\u5E76 repo2 \u7684 master
# \u7531\u4E8E\u4E24\u4E2A master \u5206\u652F\u7684 commit \u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u6B64\u65F6\u9700\u8981\u6DFB\u52A0\uFF1A
# --allow-unrelated-histories, \u5141\u8BB8 git \u5408\u5E76\u4E0D\u76F8\u5173\u7684\u5386\u53F2\uFF0C\u5176\u4F59\u6709\u51B2\u7A81\u8BA9\u6211\u4EEC\u624B\u52A8\u786E\u8BA4
git merge repo2/master --allow-unrelated-histories

# \u5408\u5E76\u51B2\u7A81\u3001\u540E\u63D0\u4EA4 commit
git commit -m &quot;chore: \u5408\u5E76\u4E24\u4E2A\u4ED3\u5E93\u7684\u5386\u53F2&quot;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u6E05\u7A7A\u9879\u76EE\u7684-commit-\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7A7A\u9879\u76EE\u7684-commit-\u8BB0\u5F55" aria-hidden="true">#</a> \u6E05\u7A7A\u9879\u76EE\u7684 commit \u8BB0\u5F55</h3><p>\u5F53\u4E00\u4E2A\u9879\u76EE\u5DF2\u7ECF\u5B58\u5728\u4E45\u8FDC\uFF0C\u6216\u8005\u8BF4<code>commit</code>\u8BB0\u5F55\u6709\u5F88\u591A\u5386\u53F2\u9057\u7559\u7684\u95EE\u9898\uFF0C\u5206\u652F\u7EBF\u8DDF\u5730\u94C1\u56FE\u4F3C\u5F97\u3002\u6B64\u65F6\u4F60\u60F3\u91CD\u7F6E <code>git</code> \u7EBF\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5148\u4ECE\u8FDC\u7AEF\u514B\u9686\u4E00\u4EFD\u4ED3\u5E93\uFF0C\u4E0D\u8981\u5728\u539F\u5148\u672C\u5730\u9879\u76EE\u76F4\u63A5\u8FDB\u884C\u64CD\u4F5C
git clone git@github.com:anran758/test.git
cd test

# \u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5206\u652F
git checkout --orphan tmp

# \u5728\u65B0\u7684\u5206\u652F\u4E2D\u6DFB\u52A0\u5168\u90E8\u6587\u4EF6\u8FDB\u53BB\uFF0C\u5E76\u63D0\u4EA4 commit
git add .
git commit -m &quot;commit message&quot;

# \u5220\u9664\u5206\u652F
git branch -D master

# \u6B64\u65F6\u6240\u5904\u4E8E\u7684\u5206\u652F\u5728 tmp \u5206\u652F\uFF0C \u5C06 tmp \u66F4\u540D\u4E3A master
git branch -m master

# \u5F3A\u5236\u63A8\u5165\u8FDC\u7A0B\u4ED3\u5E93\u5373\u53EF
git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u89E3\u51B3-git\u76EE\u5F55\u8FC7\u5927\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-git\u76EE\u5F55\u8FC7\u5927\u7684\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3.git\u76EE\u5F55\u8FC7\u5927\u7684\u95EE\u9898</h3>`,54),S={block:""},U=n("summary",null,"Click show details",-1),z={href:"https://www.zhihu.com/question/29769130/answer/315745139",target:"_blank",rel:"noopener noreferrer"},J=s("\u5982\u4F55\u89E3\u51B3 GitHub \u63D0\u4EA4\u6B21\u6570\u8FC7\u591A .git \u6587\u4EF6\u8FC7\u5927\u7684\u95EE\u9898\uFF1F - \u4F5C\u8005\uFF1A\u90D1\u5B87"),K=i(`<p>\u9879\u76EE\u4E2D\u4E0A\u4F20\u4E86\u4E00\u4E9B\u5F88\u5927\u7684\u6587\u4EF6(\u6587\u4EF6\u8FC7\u5927\u5728<code>git cached</code>\u4E2D\u5360\u7528\u4E86\u5F88\u5927\u7A7A\u95F4\uFF0C\u53EF\u80FD\u662F\u51E0\u767EM)\uFF0C\u7ECF\u8FC7\u4E86\u4E00\u6BB5\u65F6\u95F4\u540E\u53C8\u5C06\u8FD9\u4E9B\u6587\u4EF6\u79FB\u9664\uFF0C\u5E76\u4E14\u786E\u5B9A\u4E0D\u5728\u4F7F\u7528\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u5728\u6811\u4E2D\u79FB\u9664\u5B83:</p><ol><li><p>\u8FD0\u884C gc \uFF0C\u751F\u6210 pack \u6587\u4EF6\uFF08\u540E\u9762\u7684 --prune=now \u8868\u793A\u5BF9\u4E4B\u524D\u7684\u6240\u6709\u63D0\u4EA4\u505A\u4FEE\u526A\uFF0C\u6709\u7684\u65F6\u5019\u4EC5\u4EC5 gc \u4E00\u4E0B.git \u6587\u4EF6\u5C31\u4F1A\u5C0F\u5F88\u591A\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git gc --prune=now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u627E\u51FA\u6700\u5927\u7684\u4E09\u4E2A\u6587\u4EF6\uFF08\u770B\u81EA\u5DF1\u9700\u8981\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -3
# \u793A\u4F8B\u8F93\u51FA\uFF1A
#1debc758cf31a649c2fc5b0c59ea1b7f01416636 blob   4925660 3655422 14351
#c43a8da9476f97e84b52e0b34034f8c2d93b4d90 blob   154188651 152549294 12546842
#2272096493d061489349e0a312df00dcd0ec19a2 blob   155414465 153754005 1650961363
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u67E5\u770B\u90A3\u4E9B\u5927\u6587\u4EF6\u7A76\u7ADF\u662F\u8C01\uFF08c43a8da \u662F\u4E0A\u9762\u5927\u6587\u4EF6\u7684hash\u7801\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git rev-list --objects --all | grep c43a8da
# c43a8da9476f97e84b52e0b34034f8c2d93b4d90 data/bigfile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u4F7F\u7528<code>git filter-branch</code>\u79FB\u9664\u5BF9\u6587\u4EF6\u7684\u5F15\u7528\u91CD\u5199\u5206\u652F\u3002\u56E0\u4E3A\u6211\u60F3\u5220\u9664\u7684\u662F\u4E00\u4E2A\u76EE\u5F55(<code>Books</code>)\uFF0C\u56E0\u6B64\u9700\u8981\u52A0\u4E0A\u9012\u5F52(<code>-r</code>)\u6765\u79FB\u9664<code>Book</code>\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git filter-branch --index-filter  &#39;git rm -r --cached --ignore-unmatch Books&#39; --prune-empty --tag-name-filter cat --force -- --all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u8FDB\u884C <code>repack</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git for-each-ref --format=&#39;delete %(refname)&#39; refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u67E5\u770B pack \u7684\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git count-objects -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol>`,2),Q=i(`<h3 id="\u6587\u4EF6\u5939\u5927\u5C0F\u5199\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5939\u5927\u5C0F\u5199\u5207\u6362" aria-hidden="true">#</a> \u6587\u4EF6\u5939\u5927\u5C0F\u5199\u5207\u6362</h3><p>\u5982\u679C\u4F60\u63D0\u4EA4\u4E86\u4E00\u4E2A\u6587\u4EF6\u5939\u540D\u4E3A<code>FOO</code>\uFF0C\u7136\u540E\u4F60\u73B0\u5728\u60F3\u4FEE\u6539\u4E3A\u5C0F\u5199\u7684<code>foo</code>\u65F6\uFF0C\u4F60\u4F1A\u53D1\u73B0\u76F4\u63A5\u4FEE\u6539\u6587\u4EF6\u540D<code>git</code>\u662F\u4E0D\u8BC6\u522B\u7684\u3002\u56E0\u4E3A\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>git</code>\u662F\u4E0D\u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199\u3002</p><p>\u8FD9\u65F6\u6709\u4E24\u4E2A\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><p><strong>\u63A8\u8350</strong>\uFF1A\u901A\u8FC7 <code>git mv</code> \u65B9\u6CD5\u6765\u6539\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u56DE\u907F\u7CFB\u7EDF\u5BF9\u5927\u5C0F\u5199\u7684\u5224\u5B9A\uFF0C\u5148\u4FEE\u6539\u4E3A\u5176\u4ED6\u7684\u540D\u5B57, git \u4F1A\u5C06\u4FEE\u6539\u81EA\u52A8\u6DFB\u52A0\u5230\u5DE5\u4F5C\u533A\u4E0A
$ git mv FOO FOO1

# \u518D\u5C06\u540D\u5B57\u4FEE\u6539\u56DE\u5C0F\u5199\u7684\u72B6\u6001\uFF0C\u4FEE\u6539\u540E\u7684\u64CD\u4F5C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u5230\u5DE5\u4F5C\u533A\u4E0A, \u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u540D\u5B57\u7684\u4FEE\u6539
$ git mv FOO1 foo

# \u63D0\u4EA4\u4FEE\u6539
$ git commit -m &quot;Modify dir name&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u4E0D\u63A8\u8350</strong>\uFF1A\u76F4\u63A5\u8BBE\u7F6E <code>git config</code> \u533A\u5206\u5927\u5C0F\u5199\uFF0C\u4F46\u5F0A\u7AEF\u5728\u4E0D\u540C\u5E73\u53F0\u4E0B\u53EF\u80FD\u4F1A\u5F15\u8D77\u522B\u7684\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u914D\u7F6E\u4ED3\u5E93\u7684\u5927\u5C0F\u5199\u654F\u611F
$ git config core.ignorecase false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4FDD\u7559\u7A7A\u7684\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u7559\u7A7A\u7684\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u4FDD\u7559\u7A7A\u7684\u6587\u4EF6\u5939</h3><p>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>git</code> \u4F1A\u5FFD\u7565\u6389\u7A7A\u7684\u6587\u4EF6\u5939\u3002\u5982\u679C\u60F3\u8981\u4FDD\u7559\u8FD9\u4E2A\u6587\u4EF6\u5939\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728\u91CC\u9762\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>.gitkeep</code>\u7684\u7A7A\u6587\u4EF6(\u540D\u5B57\u662F\u793E\u533A\u7EA6\u5B9A\u5F62\u6210\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u540D\u5B57\uFF0C\u539F\u7406\u4E0A\u53EA\u662F\u5360\u4E2A\u5751).</p><p>\u4E0D\u8FC7<code>windows</code>\u5E73\u53F0\u4E0B\u4E0D\u80FD\u76F4\u63A5\u53F3\u952E\u521B\u5EFA<code>.</code>\u5F00\u5934\u7684\u6587\u4EF6\uFF0C\u7CFB\u7EDF\u4F1A\u8BA4\u4E3A\u6587\u4EF6\u540D\u4E0D\u5408\u6CD5\u3002\u8FD9\u65F6\u9700\u8981\u4F7F\u7528\u547D\u4EE4\u884C\u6216\u8005\u7F16\u8F91\u5668\u6765\u5B8C\u6210\u521B\u5EFA\u3002</p><h2 id="\u5E38\u89C1\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF</h2><h3 id="\u5728\u6267\u884C-git-pull-origin-master-\u547D\u4EE4\u65F6-\u65E0\u6CD5-pull-\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5728\u6267\u884C-git-pull-origin-master-\u547D\u4EE4\u65F6-\u65E0\u6CD5-pull-\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u5728\u6267\u884C git pull origin master \u547D\u4EE4\u65F6\uFF0C\u65E0\u6CD5 pull \u7684\u60C5\u51B5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git pull
$ fatal: refusing to merge unrelated histories
# \u539F\u56E0\u662F\u8BF4\u5728 git 2.9\u7248\u672C\u540E\uFF0C\u9700\u8981\u52A0\u4E0A\u8FD9\u53E5 --allow-unrelated-histories\u3002
git pull origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528 <code>git pull</code> \u9047\u5230\u5408\u5E76 <code>commit</code> \u65F6\uFF0C\u6B64\u65F6\u5E76\u4E0D\u60F3\u56E0\u4E3A\u5408\u5E76\u4EE3\u7801\u591A\u4EA7\u751F\u4E00\u6761 <code>commit</code> \u8BB0\u5F55\uFF0C\u53EF\u4EE5\u5C06 <code>commit</code> \u4FE1\u606F\u6CE8\u91CA\u6389\uFF0C<code>shift + :wq</code>\u9000\u51FA\u3002</p><p>\u7136\u540E\u4F1A\u56E0\u4E3A\u81EA\u52A8\u5408\u5E76\u5931\u8D25\u540E\u63D0\u793A\u9519\u8BEF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Auto-merging pages/index/index.js
error: Empty commit message.
Not committing merge; use &#39;git commit&#39; to complete the merge.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u64A4\u6D88\u5408\u5E76\u5E76\u518D\u6B21\u62C9\u52A8\uFF0C\u4F7F\u7528 <code>rebase</code> \u89E3\u51B3\u51B2\u7A81\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git merge --abort
$ git pull --rebase
First, rewinding head to replay your work on top of it...
Applying: fix: fixed something

$ git push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="win10-\u4FEE\u6539-git-\u5BC6\u7801\u540E\u65E0\u6CD5-pull" tabindex="-1"><a class="header-anchor" href="#win10-\u4FEE\u6539-git-\u5BC6\u7801\u540E\u65E0\u6CD5-pull" aria-hidden="true">#</a> win10 \u4FEE\u6539 git \u5BC6\u7801\u540E\u65E0\u6CD5 pull</h3><p><strong>Error info</strong>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>remote: Invalid username or password
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u89E3\u51B3\u65B9\u6848</strong>:</p><p>\u6253\u5F00\u63A7\u5236\u9762\u677F -&gt; \u7528\u6237\u8D26\u53F7 -&gt; \u7BA1\u7406 windows \u51ED\u8BC1 -&gt; \u9009\u62E9 <code>git:https://github.com</code> -&gt; \u7F16\u8F91 -&gt; \u8F93\u5165\u4FEE\u6539\u540E\u7684\u5BC6\u7801</p><h3 id="filename-too-long" tabindex="-1"><a class="header-anchor" href="#filename-too-long" aria-hidden="true">#</a> Filename too long</h3><p>\u6267\u884C <code>git push</code> \u65F6\u62A5 <code>Filename too long</code> \u7684\u9519\u8BEF\u3002</p><p>\u539F\u56E0: Git \u7684\u6587\u4EF6\u540D\u9650\u5236\u4E3A 4096 \u4E2A\u5B57\u7B26\uFF0C\u4F46\u5728 Windows \u4E0A\u4F7F\u7528 msys \u7F16\u8BD1 git \u65F6\u60C5\u51B5\u4F1A\u6709\u6240\u4E0D\u540C\u3002\u5B83\u4F1A\u4F7F\u7528 Windows API \u7684\u8F83\u65E7\u7248\u672C\uFF0C\u6587\u4EF6\u540D\u9650\u5236\u4E3A 260 \u4E2A\u5B57\u7B26\u3002\u8FD9\u662F\u5BF9 msys \u7684\u9650\u5236\uFF0C\u800C\u4E0D\u662F\u5BF9 git \u7684\u9650\u5236\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Windows \u4E0A\u7684 git \u7684\u53E6\u4E00\u4E2A\u5BA2\u6237\u7AEF\u6765\u7ED5\u8FC7\u9650\u5236\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5728\u5F53\u524D project \u4E0B\u5F00\u542F longpaths
git config core.longpaths true

# \u5982\u679C\u662F clone repository \u65F6\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u6765\u8BBE\u7F6E\u9488\u5BF9\u8BE5 repository \u7684\u914D\u7F6E:
git clone -c core.longpaths=true &lt;repo-url&gt;

# \u5168\u5C40\u4F7F\u7528\uFF0C\u4F46\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E00\u4E9B\u811A\u672C\u7684\u5931\u6548\uFF0C\u6545 default=false
git config --system core.longpaths true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,28),X=s("\u53C2\u8003\u8D44\u6599: "),Y={href:"https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows",target:"_blank",rel:"noopener noreferrer"},Z=s("Filename too long in Git for Windows"),nn=i(`<h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="\u67E5\u770B\u4ED3\u5E93\u63D0\u4EA4\u8005\u7684\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4ED3\u5E93\u63D0\u4EA4\u8005\u7684\u7EDF\u8BA1" aria-hidden="true">#</a> \u67E5\u770B\u4ED3\u5E93\u63D0\u4EA4\u8005\u7684\u7EDF\u8BA1</h3><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code># \u67E5\u770B\u9009\u9879
git shortlog --help

# \u7EDF\u8BA1\u6392\u9664\u5408\u5E76\u63D0\u4EA4
git shortlog -sn --no-merges
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u66F4\u6539\u9879\u76EE\u4E2D\u4F5C\u8005\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u9879\u76EE\u4E2D\u4F5C\u8005\u4FE1\u606F" aria-hidden="true">#</a> \u66F4\u6539\u9879\u76EE\u4E2D\u4F5C\u8005\u4FE1\u606F</h3>`,4),sn={href:"https://help.github.com/en/articles/changing-author-info",target:"_blank",rel:"noopener noreferrer"},en=s("git \u66F4\u6539\u4F5C\u8005\u4FE1\u606F"),an=i(`<p>\u540C\u6837\u7684\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u4FEE\u6539 commit \u65F6\u95F4\u4E3A\u4F5C\u8005\u65F6\u95F4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git filter-branch --env-filter &#39;GIT_COMMITTER_DATE=$GIT_AUTHOR_DATE; export GIT_COMMITTER_DATE&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="gitattributes" tabindex="-1"><a class="header-anchor" href="#gitattributes" aria-hidden="true">#</a> gitattributes</h3>`,3),rn=s("\u82E5\u4F60\u7684\u50A8\u5B58\u5E93\u4E2D\u5F15\u5165\u4E86\u67D0\u4E2A\u7B2C\u4E09\u65B9\u5E93\u6784\u5EFA\u51FA\u6765\u7684 sdk \u5E76\u653E\u5165\u4E86\u50A8\u5B58\u5E93\u4E2D\uFF0C\u6B64\u65F6\u8BED\u8A00\u7EDF\u8BA1\u53EF\u80FD\u4F1A\u56E0\u4E3A\u6784\u5EFA\u51FA\u6765\u7684\u6587\u4EF6\u800C\u5BFC\u81F4\u8BA1\u7B97\u6E90\u7801\u8BED\u8A00\u5360\u6BD4\u4E0D\u51C6\u786E\uFF0C\u6B64\u65F6\u53EF\u4EE5\u7F16\u5199 "),ln=n("code",null,".gitattributes",-1),tn=s(" \u6587\u4EF6\u6765"),cn={href:"https://github.com/github-linguist/linguist/blob/master/docs/overrides.md",target:"_blank",rel:"noopener noreferrer"},pn=s("\u8986\u76D6"),dn=s("\u9ED8\u8BA4\u7684\u5339\u914D\u89C4\u5219\uFF1A"),bn=i(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>lib/sdk-v*.js linguist-generated=true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a> \u6269\u5C55\u9605\u8BFB</h3>`,2),on=s("vim \u5E38\u7528\u547D\u4EE4"),un={href:"https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly",target:"_blank",rel:"noopener noreferrer"},mn=s("GitHub Protips: Tips, tricks, hacks, and secrets from Lee Reilly");function hn(gn,_n){const a=t("RouterLink"),l=t("ExternalLinkIcon");return p(),d(b,null,[m,n("nav",h,[n("ul",null,[n("li",null,[e(a,{to:"#\u65E5\u5E38\u63D0\u4EA4\u6D41\u7A0B"},{default:r(()=>[g]),_:1})]),n("li",null,[e(a,{to:"#add"},{default:r(()=>[_]),_:1})]),n("li",null,[e(a,{to:"#commit"},{default:r(()=>[f]),_:1})]),n("li",null,[e(a,{to:"#branch"},{default:r(()=>[v]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u6279\u91CF\u5220\u9664\u5206\u652F"},{default:r(()=>[x]),_:1})]),n("li",null,[e(a,{to:"#\u4FEE\u6539\u8FDC\u7A0B\u5206\u652F\u540D"},{default:r(()=>[k]),_:1})])])]),n("li",null,[e(a,{to:"#tag"},{default:r(()=>[w]),_:1})]),n("li",null,[e(a,{to:"#history"},{default:r(()=>[E]),_:1})]),n("li",null,[e(a,{to:"#remote"},{default:r(()=>[y]),_:1})]),n("li",null,[e(a,{to:"#guide"},{default:r(()=>[A]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u521D\u59CB\u5316\u8FDC\u7A0B\u4ED3\u5E93"},{default:r(()=>[D]),_:1})]),n("li",null,[e(a,{to:"#\u5408\u5E76\u5206\u652F"},{default:r(()=>[q]),_:1})]),n("li",null,[e(a,{to:"#\u64A4\u9500\u8FD8\u6CA1-push-\u5230\u8FDC\u7A0B\u7684-commit"},{default:r(()=>[H]),_:1})]),n("li",null,[e(a,{to:"#\u64A4\u9500\u5DF2\u7ECF-push-\u5230\u8FDC\u7AEF\u7684-commit"},{default:r(()=>[T]),_:1})]),n("li",null,[e(a,{to:"#\u5408\u5E76\u4E24\u4E2A\u4E0D\u540C\u4ED3\u5E93\u7684-commit"},{default:r(()=>[O]),_:1})]),n("li",null,[e(a,{to:"#\u6E05\u7A7A\u9879\u76EE\u7684-commit-\u8BB0\u5F55"},{default:r(()=>[R]),_:1})]),n("li",null,[e(a,{to:"#\u89E3\u51B3-git\u76EE\u5F55\u8FC7\u5927\u7684\u95EE\u9898"},{default:r(()=>[B]),_:1})]),n("li",null,[e(a,{to:"#\u6587\u4EF6\u5939\u5927\u5C0F\u5199\u5207\u6362"},{default:r(()=>[F]),_:1})]),n("li",null,[e(a,{to:"#\u4FDD\u7559\u7A7A\u7684\u6587\u4EF6\u5939"},{default:r(()=>[G]),_:1})])])]),n("li",null,[e(a,{to:"#\u5E38\u89C1\u9519\u8BEF"},{default:r(()=>[$]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u5728\u6267\u884C-git-pull-origin-master-\u547D\u4EE4\u65F6-\u65E0\u6CD5-pull-\u7684\u60C5\u51B5"},{default:r(()=>[I]),_:1})]),n("li",null,[e(a,{to:"#win10-\u4FEE\u6539-git-\u5BC6\u7801\u540E\u65E0\u6CD5-pull"},{default:r(()=>[M]),_:1})]),n("li",null,[e(a,{to:"#filename-too-long"},{default:r(()=>[N]),_:1})])])]),n("li",null,[e(a,{to:"#\u5176\u4ED6"},{default:r(()=>[C]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u67E5\u770B\u4ED3\u5E93\u63D0\u4EA4\u8005\u7684\u7EDF\u8BA1"},{default:r(()=>[j]),_:1})]),n("li",null,[e(a,{to:"#\u66F4\u6539\u9879\u76EE\u4E2D\u4F5C\u8005\u4FE1\u606F"},{default:r(()=>[L]),_:1})]),n("li",null,[e(a,{to:"#gitattributes"},{default:r(()=>[V]),_:1})]),n("li",null,[e(a,{to:"#\u6269\u5C55\u9605\u8BFB"},{default:r(()=>[W]),_:1})])])])])]),P,n("details",S,[U,n("blockquote",null,[n("p",null,[n("a",z,[J,e(l)])])]),K]),Q,n("p",null,[X,n("a",Y,[Z,e(l)])]),nn,n("p",null,[n("a",sn,[en,e(l)])]),an,n("p",null,[rn,ln,tn,n("a",cn,[pn,e(l)]),dn]),bn,n("ul",null,[n("li",null,[e(a,{to:"/operations/#vim"},{default:r(()=>[on]),_:1})]),n("li",null,[n("a",un,[mn,e(l)])])])],64)}var vn=c(u,[["render",hn],["__file","git.html.vue"]]);export{vn as default};
