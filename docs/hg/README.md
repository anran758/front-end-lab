# HG

Mercurial 是一种版本管理工具。将 Mercurial 安装完毕后可在命令行输入 hg (即为元素周期表中汞（Hydrargyrum）的元素符号 `Hg`) 作为调用程序的关键字。

## 常用命令

``` shell
# 帮助
hg help

# 初始化
hg init

# 工作区文件改动状态
hg status

# 查看远程仓库地址
hg paths

# 查看日志
hg log

# 拉取代码 (未合并到本地)
hg pull

# 拉取代码 (自动更新到本地)
hg pull --update

# 拉取代码 (通过 rebase 的方式进行合并，需工作区没有未提交的文件)
# 若本地没有其他改动的代码，在 commit 前又忘记 pull --update, 可以使用该项命令避免产生冲突而生成新的无用 commit
hg pull --rebase

# 可以修改上次提交的 commit 的内容
#   ⚠️ WARNING: 由于 hg 不像 git 有缓存区，该操作会把当前还没有提交的 change 也一起提交上去，使用前应 hg shelve 保存草稿
hg commit --amend
```

## 回退

撤销上一次提交, 并将上一次提交的内容，放入待提交区

``` bash
hg rollback
```

丢弃文件的修改

``` bash
# 当前工作目录上有两个文件有改动
hg status
# M faas/README.md
# M faas/package.json
# (END)

# 丢弃 README.md 文件的改动，使其变回上一个版本的模样
hg revert faas-community/README.md 

# 丢弃所有文件的修改，等价于 git reset --hard
hg revert -a
```

当执行某个操作修改了 commit 的信息后，hg 会自动做备份功能。例如:

``` bash
hg strip commitId --keep 

saved backup bundle to /Users/danny/project/project_a/.hg/strip-backup/commitId-xxx-backup.hg
```

当这时执行的效果不是你想要的话可以读取之前的自动备份:

``` bash
hg unbundle /Users/danny/project/project_a/.hg/strip-backup/commitId-xxx-backup.hg
# 正在增加修改集
# 正在增加清单
# 正在增加文件改变
# 已增加 1 个修改集，包含 1 个改变，修改了 1 个文件 (+1 heads)
# new changesets commitId (1 drafts)
# (run 'hg heads' to see heads)
```

## 分支管理 (branch)

``` bash
# 查看当前分支
hg branch

# 查看所有的分支
hg branches

# 切换到 feature_branch_name 分支中
hg checkout feature_branch_name

## 将 feature_branch_name_1 合并到当前分支上
$ hg merge "feature_branch_name_1"
```

## 日志 (log)

``` bash
# 查看日志
hg log

# 按日期升序查看日志
hg log -r "sort(all(), date)"

# 显示分支图
hg log -G

# 查看上一个提交
hg parent 
```

## 草稿 (shelve)

> 保存并搁置工作目录中的更改, 类似于 `git stash`

语法: `hg shelve [OPTION]... [FILE]...`

``` shell
# 缓存当前工作区的改动
hg shelve

# 缓存当前工作区的改动并设置草稿的名字
hg shelve --name "draft_name"

# 展示当前项目的所有草稿
hg shelve --list
hg shelve -l

# 将缓存的改动恢复到工作区，后面加 name 可以恢复指定草稿，不加 name 则恢复最近的一个
hg unshelve
hg unshelve "draft_name"

# 删除指定草稿
hg shelve -d "draft_name"
hg shelve --delete "draft_name"
```

## 移植 (graft)

将其他分支的 commit 复制到当前分支中。

``` shell
# 将 9393 的 commit 复制到当前分支中
# 相当于 git cherry-pick
hg graft -r 9393

# 将 9393 的 commit 复制到当前分支中，并修改提交信息
hg graft --edit 9393
```

## Rebase (变基)

``` shell
# 压缩最近两个 commit
hg rebase --dest .~2 --base . --collapse

# 当你在一个分支上进行一些提交并希望将它们全部折叠成一个时：
hg rebase --dest {destination branch (e.g. master)} --base . --collapse
```

## Blame (annotate)

按行显示每个文件的变更集信息，可以用于追踪指定文件的每行代码是谁提交的、修改的 commit hash 是多少。

``` bash
# -u 展示修改的作者是谁
# -c 展示修改集
# -l 展示行号
# file_path 为文件路径
hg blame -ucl <file_path>
```

## Diff

``` bash
# 查看当前版本与指定版本 (241290dffcea) 的差异
$ hg diff -r 241290dffcea

# diff 指定两个 commit 之间的差异
hg diff -r 241290dffcea -r da3019539240

# or, 可以直接使用指定序号
hg diff -r 102 -r 101
```

---

## on-my-zsh

在 on-my-zsh 中使用 hg 的扩展: [Mercurial plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/mercurial)

首先下载插件。

``` shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/mercurial
```

下载插件后编辑 `~/.zshrc` 文件中的 plugins 字段，添加 mercurial:

``` shell
plugins=(
  git
  yarn
  zsh-autosuggestions
  mercurial
)
```

若命令行处于 git 项目的目录下，则会在命令行显示当前分支，例如:

``` bash
➜  front-end-lab git:(master) ✗ 
```

当 hg 不行，需要做额外的配置或选择支持 hg 的主题。zsh 可以通过 `ZSH_THEME` 变量切换主题，默认的主题为 `robbyrussell`。

zsh 主题文件都放在 `~/.oh-my-zsh/themes` 目录下。笔者以默认主题为例，对默认的主题进行扩展:

``` shell
# 通过 vim 修改
vim ~/.oh-my-zsh/themes/robbyrussell.zsh-theme

# 或者通过 vscode 修改的
code ~/.oh-my-zsh/themes/robbyrussell.zsh-theme
```

添加如下变量:

``` shell
PROMPT+='$(hg_prompt_info)'

ZSH_THEME_HG_PROMPT_PREFIX="%{$fg_bold[blue]%}hg:(%{$fg[red]%}"
ZSH_THEME_HG_PROMPT_SUFFIX="%{$reset_color%}"
ZSH_THEME_HG_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"
ZSH_THEME_HG_PROMPT_CLEAN="%{$fg[blue]%})"
```

再新开 zsh 后就能看到修改后的效果啦。

---

**参考资料**

[Git hg rosetta stone](https://github.com/sympy/sympy/wiki/Git-hg-rosetta-stone)
