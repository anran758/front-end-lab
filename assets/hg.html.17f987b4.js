import{_ as l,r as i,o as b,c as p,a as n,b as e,F as c,d as r,e as s}from"./app.7e3542fd.js";const u={},d=r(`<h1 id="hg" tabindex="-1"><a class="header-anchor" href="#hg" aria-hidden="true">#</a> Hg</h1><p>Mercurial \u662F\u4E00\u79CD\u7248\u672C\u7BA1\u7406\u5DE5\u5177\u3002\u5C06 Mercurial \u5B89\u88C5\u5B8C\u6BD5\u540E\u53EF\u5728\u547D\u4EE4\u884C\u8F93\u5165 hg (\u5373\u4E3A\u5143\u7D20\u5468\u671F\u8868\u4E2D\u6C5E\uFF08Hydrargyrum\uFF09\u7684\u5143\u7D20\u7B26\u53F7 <code>Hg</code>) \u4F5C\u4E3A\u8C03\u7528\u7A0B\u5E8F\u7684\u5173\u952E\u5B57\u3002</p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5E2E\u52A9
hg help

# \u521D\u59CB\u5316
hg init

# \u5DE5\u4F5C\u533A\u6587\u4EF6\u6539\u52A8\u72B6\u6001
hg status

# \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740
hg paths

# \u67E5\u770B\u65E5\u5FD7
hg log

# \u62C9\u53D6\u4EE3\u7801 (\u672A\u5408\u5E76\u5230\u672C\u5730)
hg pull

# \u62C9\u53D6\u4EE3\u7801 (\u81EA\u52A8\u66F4\u65B0\u5230\u672C\u5730)
hg pull --update

# \u62C9\u53D6\u4EE3\u7801 (\u901A\u8FC7 rebase \u7684\u65B9\u5F0F\u8FDB\u884C\u5408\u5E76\uFF0C\u9700\u5DE5\u4F5C\u533A\u6CA1\u6709\u672A\u63D0\u4EA4\u7684\u6587\u4EF6)
# \u82E5\u672C\u5730\u6CA1\u6709\u5176\u4ED6\u6539\u52A8\u7684\u4EE3\u7801\uFF0C\u5728 commit \u524D\u53C8\u5FD8\u8BB0 pull --update, \u53EF\u4EE5\u4F7F\u7528\u8BE5\u9879\u547D\u4EE4\u907F\u514D\u4EA7\u751F\u51B2\u7A81\u800C\u751F\u6210\u65B0\u7684\u65E0\u7528 commit
hg pull --rebase

# \u53EF\u4EE5\u4FEE\u6539\u4E0A\u6B21\u63D0\u4EA4\u7684 commit \u7684\u5185\u5BB9
#   \u26A0\uFE0F WARNING: \u7531\u4E8E hg \u4E0D\u50CF git \u6709\u7F13\u5B58\u533A\uFF0C\u8BE5\u64CD\u4F5C\u4F1A\u628A\u5F53\u524D\u8FD8\u6CA1\u6709\u63D0\u4EA4\u7684 change \u4E5F\u4E00\u8D77\u63D0\u4EA4\u4E0A\u53BB\uFF0C\u4F7F\u7528\u524D\u5E94 hg shelve \u4FDD\u5B58\u8349\u7A3F
hg commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#\u56DE\u9000" aria-hidden="true">#</a> \u56DE\u9000</h2><p>\u64A4\u9500\u4E0A\u4E00\u6B21\u63D0\u4EA4, \u5E76\u5C06\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u653E\u5165\u5F85\u63D0\u4EA4\u533A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hg rollback
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E22\u5F03\u6587\u4EF6\u7684\u4FEE\u6539</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E0A\u6709\u4E24\u4E2A\u6587\u4EF6\u6709\u6539\u52A8
hg status
# M faas/README.md
# M faas/package.json
# (END)

# \u4E22\u5F03 README.md \u6587\u4EF6\u7684\u6539\u52A8\uFF0C\u4F7F\u5176\u53D8\u56DE\u4E0A\u4E00\u4E2A\u7248\u672C\u7684\u6A21\u6837
hg revert faas-community/README.md

# \u4E22\u5F03\u6240\u6709\u6587\u4EF6\u7684\u4FEE\u6539\uFF0C\u7B49\u4EF7\u4E8E git reset --hard
hg revert -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\u4FEE\u6539\u4E86 commit \u7684\u4FE1\u606F\u540E\uFF0Chg \u4F1A\u81EA\u52A8\u505A\u5907\u4EFD\u529F\u80FD\u3002\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hg strip commitId --keep

saved backup bundle to /Users/danny/project/project_a/.hg/strip-backup/commitId-xxx-backup.hg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F53\u8FD9\u65F6\u6267\u884C\u7684\u6548\u679C\u4E0D\u662F\u4F60\u60F3\u8981\u7684\u8BDD\u53EF\u4EE5\u8BFB\u53D6\u4E4B\u524D\u7684\u81EA\u52A8\u5907\u4EFD:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hg unbundle /Users/danny/project/project_a/.hg/strip-backup/commitId-xxx-backup.hg
# \u6B63\u5728\u589E\u52A0\u4FEE\u6539\u96C6
# \u6B63\u5728\u589E\u52A0\u6E05\u5355
# \u6B63\u5728\u589E\u52A0\u6587\u4EF6\u6539\u53D8
# \u5DF2\u589E\u52A0 1 \u4E2A\u4FEE\u6539\u96C6\uFF0C\u5305\u542B 1 \u4E2A\u6539\u53D8\uFF0C\u4FEE\u6539\u4E86 1 \u4E2A\u6587\u4EF6 (+1 heads)
# new changesets commitId (1 drafts)
# (run &#39;hg heads&#39; to see heads)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5206\u652F\u7BA1\u7406-branch" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406-branch" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406 (branch)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u5F53\u524D\u5206\u652F
hg branch

# \u67E5\u770B\u6240\u6709\u7684\u5206\u652F
hg branches

# \u5207\u6362\u5230 feature_branch_name \u5206\u652F\u4E2D
hg checkout feature_branch_name

## \u5C06 feature_branch_name_1 \u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u4E0A
$ hg merge &quot;feature_branch_name_1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u65E5\u5FD7-log" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7-log" aria-hidden="true">#</a> \u65E5\u5FD7 (log)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u65E5\u5FD7
hg log

# \u6309\u65E5\u671F\u5347\u5E8F\u67E5\u770B\u65E5\u5FD7
hg log -r &quot;sort(all(), date)&quot;

# \u663E\u793A\u5206\u652F\u56FE
hg log -G

# \u67E5\u770B\u4E0A\u4E00\u4E2A\u63D0\u4EA4
hg parent
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8349\u7A3F-shelve" tabindex="-1"><a class="header-anchor" href="#\u8349\u7A3F-shelve" aria-hidden="true">#</a> \u8349\u7A3F (shelve)</h2><blockquote><p>\u4FDD\u5B58\u5E76\u6401\u7F6E\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684\u66F4\u6539, \u7C7B\u4F3C\u4E8E <code>git stash</code></p></blockquote><p>\u8BED\u6CD5: <code>hg shelve [OPTION]... [FILE]...</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u7F13\u5B58\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u6539\u52A8
hg shelve

# \u7F13\u5B58\u5F53\u524D\u5DE5\u4F5C\u533A\u7684\u6539\u52A8\u5E76\u8BBE\u7F6E\u8349\u7A3F\u7684\u540D\u5B57
hg shelve --name &quot;draft_name&quot;

# \u5C55\u793A\u5F53\u524D\u9879\u76EE\u7684\u6240\u6709\u8349\u7A3F
hg shelve --list
hg shelve -l

# \u5C06\u7F13\u5B58\u7684\u6539\u52A8\u6062\u590D\u5230\u5DE5\u4F5C\u533A\uFF0C\u540E\u9762\u52A0 name \u53EF\u4EE5\u6062\u590D\u6307\u5B9A\u8349\u7A3F\uFF0C\u4E0D\u52A0 name \u5219\u6062\u590D\u6700\u8FD1\u7684\u4E00\u4E2A
hg unshelve
hg unshelve &quot;draft_name&quot;

# \u5220\u9664\u6307\u5B9A\u8349\u7A3F
hg shelve -d &quot;draft_name&quot;
hg shelve --delete &quot;draft_name&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u79FB\u690D-graft" tabindex="-1"><a class="header-anchor" href="#\u79FB\u690D-graft" aria-hidden="true">#</a> \u79FB\u690D (graft)</h2><p>\u5C06\u5176\u4ED6\u5206\u652F\u7684 commit \u590D\u5236\u5230\u5F53\u524D\u5206\u652F\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5C06 9393 \u7684 commit \u590D\u5236\u5230\u5F53\u524D\u5206\u652F\u4E2D
# \u76F8\u5F53\u4E8E git cherry-pick
hg graft -r 9393

# \u5C06 9393 \u7684 commit \u590D\u5236\u5230\u5F53\u524D\u5206\u652F\u4E2D\uFF0C\u5E76\u4FEE\u6539\u63D0\u4EA4\u4FE1\u606F
hg graft --edit 9393
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="rebase-\u53D8\u57FA" tabindex="-1"><a class="header-anchor" href="#rebase-\u53D8\u57FA" aria-hidden="true">#</a> Rebase (\u53D8\u57FA)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u538B\u7F29\u6700\u8FD1\u4E24\u4E2A commit
hg rebase --dest .~2 --base . --collapse

# \u5F53\u4F60\u5728\u4E00\u4E2A\u5206\u652F\u4E0A\u8FDB\u884C\u4E00\u4E9B\u63D0\u4EA4\u5E76\u5E0C\u671B\u5C06\u5B83\u4EEC\u5168\u90E8\u6298\u53E0\u6210\u4E00\u4E2A\u65F6\uFF1A
hg rebase --dest {destination branch (e.g. master)} --base . --collapse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="blame-annotate" tabindex="-1"><a class="header-anchor" href="#blame-annotate" aria-hidden="true">#</a> Blame (annotate)</h2><p>\u6309\u884C\u663E\u793A\u6BCF\u4E2A\u6587\u4EF6\u7684\u53D8\u66F4\u96C6\u4FE1\u606F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\u7684\u6BCF\u884C\u4EE3\u7801\u662F\u8C01\u63D0\u4EA4\u7684\u3001\u4FEE\u6539\u7684 commit hash \u662F\u591A\u5C11\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># -u \u5C55\u793A\u4FEE\u6539\u7684\u4F5C\u8005\u662F\u8C01
# -c \u5C55\u793A\u4FEE\u6539\u96C6
# -l \u5C55\u793A\u884C\u53F7
# file_path \u4E3A\u6587\u4EF6\u8DEF\u5F84
hg blame -ucl &lt;file_path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C (241290dffcea) \u7684\u5DEE\u5F02
$ hg diff -r 241290dffcea

# diff \u6307\u5B9A\u4E24\u4E2A commit \u4E4B\u95F4\u7684\u5DEE\u5F02
hg diff -r 241290dffcea -r da3019539240

# or, \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6307\u5B9A\u5E8F\u53F7
hg diff -r 102 -r 101
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><h2 id="\u590D\u5408\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u529F\u80FD" aria-hidden="true">#</a> \u590D\u5408\u529F\u80FD</h2><p>\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u5386\u53F2\u8BB0\u5F55\u6765\u7B5B\u9009\u51FA\u5F53\u524D\u7248\u672C\u54EA\u4E9B\u6587\u4EF6\u88AB\u6539\u52A8\u4E86\uFF0C\u7136\u540E\u53EF\u4EE5\u7EE7\u7EED\u8BE5\u7248\u672C\u8FDB\u884C\u7B5B\u9009\u9700\u8981\u90E8\u7F72\u7684\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hg status --change $(hg branch) $(hg root)/packages/faas/src/function/ | awk &#39;{print $2}&#39; | xargs -I {} basename {}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="on-my-zsh" tabindex="-1"><a class="header-anchor" href="#on-my-zsh" aria-hidden="true">#</a> on-my-zsh</h2>`,36),h=s("\u5728 on-my-zsh \u4E2D\u4F7F\u7528 hg \u7684\u6269\u5C55: "),m={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mercurial",target:"_blank",rel:"noopener noreferrer"},t=s("Mercurial plugin"),o=r(`<p>\u9996\u5148\u4E0B\u8F7D\u63D2\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/mercurial
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0B\u8F7D\u63D2\u4EF6\u540E\u7F16\u8F91 <code>~/.zshrc</code> \u6587\u4EF6\u4E2D\u7684 plugins \u5B57\u6BB5\uFF0C\u6DFB\u52A0 mercurial:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>plugins=(
  git
  yarn
  zsh-autosuggestions
  mercurial
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u82E5\u547D\u4EE4\u884C\u5904\u4E8E git \u9879\u76EE\u7684\u76EE\u5F55\u4E0B\uFF0C\u5219\u4F1A\u5728\u547D\u4EE4\u884C\u663E\u793A\u5F53\u524D\u5206\u652F\uFF0C\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  front-end-lab git:(master) \u2717
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53 hg \u4E0D\u884C\uFF0C\u9700\u8981\u505A\u989D\u5916\u7684\u914D\u7F6E\u6216\u9009\u62E9\u652F\u6301 hg \u7684\u4E3B\u9898\u3002zsh \u53EF\u4EE5\u901A\u8FC7 <code>ZSH_THEME</code> \u53D8\u91CF\u5207\u6362\u4E3B\u9898\uFF0C\u9ED8\u8BA4\u7684\u4E3B\u9898\u4E3A <code>robbyrussell</code>\u3002</p><p>zsh \u4E3B\u9898\u6587\u4EF6\u90FD\u653E\u5728 <code>~/.oh-my-zsh/themes</code> \u76EE\u5F55\u4E0B\u3002\u7B14\u8005\u4EE5\u9ED8\u8BA4\u4E3B\u9898\u4E3A\u4F8B\uFF0C\u5BF9\u9ED8\u8BA4\u7684\u4E3B\u9898\u8FDB\u884C\u6269\u5C55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u901A\u8FC7 vim \u4FEE\u6539
vim ~/.oh-my-zsh/themes/robbyrussell.zsh-theme

# \u6216\u8005\u901A\u8FC7 vscode \u4FEE\u6539\u7684
code ~/.oh-my-zsh/themes/robbyrussell.zsh-theme
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6DFB\u52A0\u5982\u4E0B\u53D8\u91CF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PROMPT+=&#39;$(hg_prompt_info)&#39;

ZSH_THEME_HG_PROMPT_PREFIX=&quot;%{$fg_bold[blue]%}hg:(%{$fg[red]%}&quot;
ZSH_THEME_HG_PROMPT_SUFFIX=&quot;%{$reset_color%}&quot;
ZSH_THEME_HG_PROMPT_DIRTY=&quot;%{$fg[blue]%}) %{$fg[yellow]%}\u2717&quot;
ZSH_THEME_HG_PROMPT_CLEAN=&quot;%{$fg[blue]%})&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u518D\u65B0\u5F00 zsh \u540E\u5C31\u80FD\u770B\u5230\u4FEE\u6539\u540E\u7684\u6548\u679C\u5566\u3002</p><hr><p><strong>\u53C2\u8003\u8D44\u6599</strong></p>`,14),g={href:"https://github.com/sympy/sympy/wiki/Git-hg-rosetta-stone",target:"_blank",rel:"noopener noreferrer"},v=s("Git hg rosetta stone");function f(_,x){const a=i("ExternalLinkIcon");return b(),p(c,null,[d,n("p",null,[h,n("a",m,[t,e(a)])]),o,n("p",null,[n("a",g,[v,e(a)])])],64)}var E=l(u,[["render",f],["__file","hg.html.vue"]]);export{E as default};
