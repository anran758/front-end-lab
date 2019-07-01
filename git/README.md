# Git

- [Git](#Git)
  - [提交流程](#提交流程)
  - [Add](#Add)
  - [commit](#commit)
    - [撤销还没 push 到远程的 commit](#撤销还没-push-到远程的-commit)
    - [撤销已经 push 到远端的 commit](#撤销已经-push-到远端的-commit)
  - [branch and tag](#branch-and-tag)
  - [history](#history)
  - [remote](#remote)
  - [操作指南](#操作指南)
    - [初始化远程仓库](#初始化远程仓库)
    - [清空项目的 commit 记录](#清空项目的-commit-记录)
    - [撤销修改](#撤销修改)
    - [文件夹大小写切换](#文件夹大小写切换)
    - [保留空的文件夹](#保留空的文件夹)
  - [常见错误](#常见错误)
  - [其他](#其他)

<details>
  <summary>常见术语解释</summary>

  | 术语      | 解释                                      |
  | --------- | ----------------------------------------- |
  | origin    | 默认远端仓库                              |
  | master    | 默认开发分支                              |
  | HEAD      | 默认开发分支                              |
  | HEAD^     | `HEAD`父提交                              |
  | tracked   | `git`已经追踪文件的修改                   |
  | untracked | 未跟踪的状态，也就是`git`不认识的新的文件 |
  | revert    | 回退                                      |

</details>

## 提交流程

日常提交流程

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
| git add [--all / .]     | 添加全部改动的文件                       |

---

## commit

| 方法                        | 说明                                          |
| --------------------------- | --------------------------------------------- |
| git commit -m "`<message>`" | 为已经进入`stage(暂存的更改)`添加`commit`信息 |
| git commit --amend          | 修改上一次提交的`commit`信息                  |

### 撤销还没 push 到远程的 commit

``` bash
# 找到需要撤销的 commit 的`前一个` commit_hash(这步可以理解为找到定位的节点
# bash 的 commit 顺序是从上(最新 commit)至下的顺序
git log --online

# 撤销 commit, 将代码恢复为前一个版本(会丢失修改)
git reset --hard commit_hash

# or 完成 commit 撤销，但不对代码进行撤销修改，可以重新提交 commit
git reset commit_hash


# 如果只 commit 了一次，想给回退到 commit 前上一个版本的话，还可以用`HEAD`代替`hash`
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
$ git reset --hard <版本号>
```

为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

``` bash
# branch: 分支
$ git push origin <branch> --force
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

# 查看所有标签
git tag

# 基于最新提交的分支创建标签
git tag <tagname>

# 删除指定标签
git tag -d <tagname>

# 使当前的分支和远程仓库 `origin2/game` 建立关联（前提是目标分支要存在）
# 建立关联后就可以直接使用 `git push` 命令而无需添加其他参数。
git branch --set-upstream-to orgin2/game
```

## history

查看 `git` 历史

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

添加一个远程仓库

``` bash
git remote add orgin `<remote>`
```

将本地分支推送到存在依赖关系的远端分支，如果远端没有`master`分支，那会新建一个

``` bash
git push origin master
```

推送当前分支并建立与远程上游的跟踪

``` bash
git push --set-upstream origin master
```

设置上游并推送至远程的`master`分支

``` bash
git push -u origin master

# or
git push origin master
git branch --set-upstream-to orgin/master
```

## 操作指南

### 初始化远程仓库

假设你已经在远程储存库上创建了新的库(`test`)，此时需要将本地项目的代码关联并推送到远程仓库上去:

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


### 清空项目的 commit 记录

当一个项目已经存在久远，或者说`commit`记录有很多历史遗留的问题，分支线跟地铁图似得。此时你想重置 `git` 线时，可以这样做:

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

### 保留空的文件夹

在默认情况下，`git` 会忽略掉空的文件夹。如果想要保留这个文件夹的话，可以在里面创建一个名为`.gitkeep`的空文件(名字是社区约定形成，也可以使用其他名字，原理上只是占个坑).

不过`windows`平台下不能直接右键创建`.`开头的文件，系统会认为文件名不合法。这时需要使用命令行或者编辑器来完成创建。

## 常见错误

<details>
<summary>常见错误</summary>

在执行`git pull origin master`命令时，无法`pull`的情况。

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

<details>
<summary>vim 常用命令</summary>

在`vim`编辑器中，同时按住`shift + <命令>`即可操作对应的命令. 但按`a`进入插入模式。

| 命令    | 说明                                           |
| ------- | ---------------------------------------------- |
| :q      | 不保存文件，退出 `vi(m)`                       |
| :q!     | 不保存文件，强制退出 `vi(m)`                   |
| :w      | 保存文件但不退出  `vi(m)`                      |
| :w file | 将修改另外保存到 `file` 中，不退出 `vi(m)`     |
| :w!     | 强制保存，不推出 `vi(m)`                       |
| :wq     | 保存文件并退出 `vi(m)`                         |
| :wq!    | 强制保存文件，并退出 `vi(m)`                   |
| :e!     | 放弃所有修改，从上次保存文件开始再编辑命令历史 |

[VIM中的保存和退出、VIM退出命令、如何退出vim编辑、VIM命令大全](https://www.jianshu.com/p/0009bf462f15)

</details>
