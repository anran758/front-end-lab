---
sidebarDepth: 3
sidebar: auto
---

<!-- omit in toc -->
# Git

- [日常提交流程](#日常提交流程)
- [Add](#add)
- [Commit](#commit)
  - [撤销还没 push 到远程的 commit](#撤销还没-push-到远程的-commit)
  - [撤销已经 push 到远端的 commit](#撤销已经-push-到远端的-commit)
- [branch and tag](#branch-and-tag)
- [history](#history)
- [remote](#remote)
  - [合并两个不同仓库的 commit](#合并两个不同仓库的-commit)
- [Guide](#guide)
  - [解决.git目录过大的问题](#解决git目录过大的问题)
  - [初始化远程仓库](#初始化远程仓库)
  - [清空项目的 commit 记录](#清空项目的-commit-记录)
  - [撤销修改](#撤销修改)
  - [文件夹大小写切换](#文件夹大小写切换)
  - [保留空的文件夹](#保留空的文件夹)
- [常见错误](#常见错误)
- [其他](#其他)
  - [查看仓库提交者的统计](#查看仓库提交者的统计)
  - [更改项目中作者信息](#更改项目中作者信息)
  - [vim 常用命令](#vim-常用命令)
  - [扩展阅读](#扩展阅读)

<details>
  <summary>常见术语解释</summary>

  | 术语      | 解释                                        |
  | --------- | ------------------------------------------- |
  | origin    | 默认远端仓库                                |
  | master    | 默认开发分支                                |
  | HEAD      | 默认开发分支                                |
  | HEAD^     | `HEAD` 父提交                               |
  | tracked   | `git` 已经追踪文件的修改                    |
  | untracked | 未跟踪的状态，也就是 `git` 不认识的新的文件 |
  | revert    | 回退                                        |

</details>

## 日常提交流程

``` bash
# 跟踪改动过的文件
# `git add <file>` or
# `git add -A` or
git add .

# 添加 commit 信息
# 不同团队有不同的编写 commit 信息规范，有的项目依赖 commit 的格式来做自动化处理
# 常见格式如： `<action> <desc content>`
git commit -m "fix: message commit"

# 从远程仓库拉取代码，查看是否有冲突
# 直接 git pull 可能会有冲突，可采用 rebase 代替默认的 merge 策略减少多余的 commit 提交
git pull --rebase

# 提交改动至默认的远程仓库
git push

# or 同时提交改动至指定远程仓库(orgin)和分支(develop, master)
git push origin master develop
```

## Add

| 方法                    | 说明                                     |
| ----------------------- | ---------------------------------------- |
| git add `<change file>` | git add `<change file>`将其添加到 status |
| git add `[--all / .]`   | 添加全部改动的文件                       |

---

## Commit

| 方法                        | 说明                                          |
| --------------------------- | --------------------------------------------- |
| git commit -m "`<message>`" | 为已经进入`stage(暂存的更改)`添加`commit`信息 |
| git commit --amend          | 修改上一次提交的`commit`信息                  |

---

### 撤销还没 push 到远程的 commit

``` bash
# 找到需要撤销的 commit 的`前一个` commit_hash(这步可以理解为找到定位的节点
# bash 的 commit 顺序是从上(最新 commit)至下的顺序
git log --online

# 撤销 commit, 将代码恢复为前一个版本(会丢失修改的代码)
git reset --hard commit_hash

# or 完成 commit 撤销，可以重新提交 commit(不会丢失修改的代码)
git reset commit_hash

# 如果只 commit 了一次，想给回退到 commit 前上一个版本的话，还可以用`HEAD`代替`hash`(不会丢失修改的代码)
# HEAD    就是本次的版本
# HEAD~1  就是上一次的版本
git reset HEAD~1
```

### 撤销已经 push 到远端的 commit

在使用`git`时，有时候我们会无意间错推了我们不想推上去的文件或者希望能够回退以前版本的时候.
这时我们可以先在本地回退到相应的版本。

``` bash
# 注意使用 --hard 参数会抛弃当前工作区的修改
# 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
git reset --hard <版本号>
```

为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

``` bash
# branch: 分支
git push origin <branch> --force
```

---

## branch and tag

常用的分支和标签命令

``` bash
# 查看分支
git branch

# git checkout <branch/tag> 切换指定的分支或标签
git checkout develop

# 切换名为 gh-pages 的分支, 如果不存在这个分支就创建它
git checkout -b "gh-pages"

# 使当前的分支和远程仓库 `origin2/game` 建立关联（前提是目标分支要存在）
# 建立关联后就可以直接使用 `git push` 命令而无需添加其他参数。
git branch --set-upstream-to orgin2/game

# 查看所有标签
git tag

# 基于当前 commit 创建标签
git tag <tagname>

# 删除指定标签
git tag -d <tagname>
```

## history

``` bash
# 查看提交历史
git log

# 使用更简洁的模式查看提交历史
git log --oneline

# 查看指定文件的提交历史
git log -p <file>

# 以列表的方式查看指定文件的提交历史
git blame <file>
```

---

## remote

添加新的 remote

``` bash
git remote add <originName> <remoteUrl>

# example, 添加一个 origin name 为 `newOrigin`
git remote add newOrigin https://github.com/anran758/front-end-lab.git
```

将本地分支推送到存在依赖关系的远端分支，如果 remote 没有推送的分支，那就新建一个:

``` bash
git push origin master
```

推送当前分支并与 remote 上游建立跟踪

``` bash
git push --set-upstream origin master
```

设置上游并推送至远程的 `master` 分支

``` bash
git push -u origin master

# 以下两条与上面一条功能相似
git push origin master
git branch --set-upstream-to orgin/master
```

### 合并两个不同仓库的 commit

首先我们有两个仓库: `repo1` 和 `repo2`。`repo1` 是我们想要保留的仓库：

``` bash
# 添加远程地址
git remote add repo2 git@github.com:anran758/repo2.git

# 拉取代码
git fetch repo2

# 切换至 master 分支
git checkout master

# 合并 repo2 的 master
# 由于两个 master 分支的 commit 会有所不同，此时需要添加：
# --allow-unrelated-histories, 允许 git 合并不相关的历史，其余有冲突让我们手动确认
git merge repo2/master --allow-unrelated-histories

# 合并冲突、后提交 commit
git commit -m "chg: 合并两个仓库的历史"
git push
```

## Guide

### 解决.git目录过大的问题

<details>
<summary>Click show details</summary>

> [如何解决 GitHub 提交次数过多 .git 文件过大的问题？ - 作者：郑宇](https://www.zhihu.com/question/29769130/answer/315745139)

项目中上传了一些很大的文件(文件过大在`git cached`中占用了很大空间，可能是几百M)，经过了一段时间后又将这些文件移除，并且确定不在使用后，可以使用下面命令在树中移除它:

1. 运行 gc ，生成 pack 文件（后面的 --prune=now 表示对之前的所有提交做修剪，有的时候仅仅 gc 一下.git 文件就会小很多）

   ``` bash
   git gc --prune=now
   ```

2. 找出最大的三个文件（看自己需要）

   ``` bash
   git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -3
   # 示例输出：
   #1debc758cf31a649c2fc5b0c59ea1b7f01416636 blob   4925660 3655422 14351
   #c43a8da9476f97e84b52e0b34034f8c2d93b4d90 blob   154188651 152549294 12546842
   #2272096493d061489349e0a312df00dcd0ec19a2 blob   155414465 153754005 1650961363
   ```

3. 查看那些大文件究竟是谁（c43a8da 是上面大文件的hash码）

   ``` bash
   $ git rev-list --objects --all | grep c43a8da
   # c43a8da9476f97e84b52e0b34034f8c2d93b4d90 data/bigfile
   ```

4. 使用`git filter-branch`移除对文件的引用重写分支。因为我想删除的是一个目录(`Books`)，因此需要加上递归(`-r`)来移除`Book`文件夹下的文件.

   ``` bash
   git filter-branch --index-filter  'git rm -r --cached --ignore-unmatch Books' --prune-empty --tag-name-filter cat --force -- --all
   ```

5. 进行 `repack`

   ``` bash
   git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
   git reflog expire --expire=now --all
   git gc --prune=now
   ```

6. 查看 pack 的空间使用情况

   ``` bash
   git count-objects -v
   ```

</details>

### 初始化远程仓库

假设你已经在远程储存库上创建了新的库(`test`)，此时需要将本地项目的代码关联并推送到远程仓库上去:

<details>
<summary>Click show details</summary>

``` bash
cd test

# 初始化 git
git init

# 添加全部改动
git add .

# 添加 commit 信息
git commit -m "init message"

# 添加远程地址，提交代码至远程，并设置为追踪分支
git remote add origin git@github.com:anran758/test.git
git push -u origin master
```

</details>

### 清空项目的 commit 记录

当一个项目已经存在久远，或者说`commit`记录有很多历史遗留的问题，分支线跟地铁图似得。此时你想重置 `git` 线时，可以这样做:

<details>
<summary>Click show code</summary>

``` bash
# 先从远端克隆一份仓库，不要在原先本地项目直接进行操作
git clone git@github.com:anran758/test.git
cd test

# 创建一个临时分支
git checkout --orphan tmp

# 在新的分支中添加全部文件进去，并提交 commit
git add .
git commit -m "commit message"

# 删除分支
git branch -D master

# 此时所处于的分支在 tmp 分支， 将 tmp 更名为 master
git branch -m master

# 强制推入远程仓库即可
git push -f origin master
```

</details>

### 撤销修改

``` bash
# 只删除所有`untracked`的文件
# 如果文件已经被`tracked`, 修改过的文件不会被回退
git clean -df

# 把`tracked`的文件回退到前一个版本
# 对于`untracked`的文件(比如编译的临时文件)都不会被删除
git reset --hard

# 撤销指定未提交的修改内容
git checkout HEAD <file>
```

### 文件夹大小写切换

<details>
<summary>Click show details</summary>

如果你提交了一个文件夹名为`FOO`，然后你现在想修改为小写的`foo`时，你会发现直接修改文件名`git`是不识别的。因为在默认情况下，`git`是不区分文件名大小写。

这时有两个解决方法：

**(不推荐)** 直接设置 `git config` 区分大小写，但弊端在不同平台下可能会引起别的问题。

``` bash
# 配置仓库的大小写敏感
$ git config core.ignorecase false
```

**(推荐)** 通过 `git mv` 方法来改名。

``` bash
# 回避系统对大小写的判定，先修改为其他的名字, git 会将修改自动添加到工作区上
$ git mv FOO FOO1

# 再将名字修改回小写的状态，修改后的操作会自动添加到工作区上, 这样就完成了名字的修改
$ git mv FOO1 foo

# 提交修改
$ git commit -m "Modify dir name"
```

</details>

### 保留空的文件夹

<details>
<summary>Click show details</summary>

在默认情况下，`git` 会忽略掉空的文件夹。如果想要保留这个文件夹的话，可以在里面创建一个名为`.gitkeep`的空文件(名字是社区约定形成，也可以使用其他名字，原理上只是占个坑).

不过`windows`平台下不能直接右键创建`.`开头的文件，系统会认为文件名不合法。这时需要使用命令行或者编辑器来完成创建。

</details>

## 常见错误

<details>
<summary>在执行 git pull origin master 命令时，无法 pull 的情况</summary>

``` bash
$ git pull
$ fatal: refusing to merge unrelated histories
# 原因是说在 git 2.9版本后，需要加上这句 --allow-unrelated-histories。
git pull origin master --allow-unrelated-histories
```

---

使用`git pull`遇到合并`commit`时，此时并不想因为合并代码多产生一条`commit`记录，可以将`commit`信息注释掉，`shift + :wq`退出。

然后会因为自动合并失败后提示错误:

``` bash
Auto-merging pages/index/index.js
error: Empty commit message.
Not committing merge; use 'git commit' to complete the merge.
```

撤消合并并再次拉动，使用`rebase`解决冲突：

``` bash
$ git merge --abort
$ git pull --rebase
First, rewinding head to replay your work on top of it...
Applying: fix: fixed something
$ git push
```

</details>

## 其他

### 查看仓库提交者的统计

``` git
# 查看选项
git shortlog --help

# 统计排除合并提交
git shortlog -sn --no-merges
```

### 更改项目中作者信息

[git 更改作者信息](https://help.github.com/en/articles/changing-author-info)

同样的方法还可以修改 commit 时间为作者时间:

``` bash
git filter-branch --env-filter 'GIT_COMMITTER_DATE=$GIT_AUTHOR_DATE; export GIT_COMMITTER_DATE'
```

### vim 常用命令

- [vim 常用命令](../operations/README.md#vim)

### 扩展阅读

[GitHub Protips: Tips, tricks, hacks, and secrets from Lee Reilly](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly)
