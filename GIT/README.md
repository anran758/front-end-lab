# 常见的 GIT 使用实例

## common

| 方法                        |  说明                                            |
| --------------------------- | ------------------------------------------------- |
| git add `<change file>`     | git add `<change file>`将其添加到 status          |
| git add [--all / .]         | 添加全部改动的文件                                |
| git branch                  | 查看分支                                          |
| git commit -m "`<message>`" | 为这所有已经进入 stage 的改变添加一个 commit 信息 |
| git commit --amend          | 修改上一次 commit                                 |
| git checkout -b "gh-pages"  | 创建一个名为`gh-pages`的新分支，并且切换过去      |

**分支:**

| 命令                                     | 说明                                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| git branch --set-upstream-to orgin2/game | 让当前的分支和远程仓库（origin2）的 game 分支建立关联（前提是目标分支要存在），建立关联后就可以直接使用`git push`命令而无需添加其他参数 |

`git pull --rebase`加上 --rebase 参数的作用是，提交线图有分叉的话，Git 会 rebase 策略来代替默认的 merge 策略。如果远程已经有其他人提交了的话，我们 pull 代码时加上这个参数就不会出现多余的mergel。

**远程(remote)相关:**

| 命令                                  | 说明                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| git remote add orgin `<remote>`       | 添加一个远程仓库                                                                                        |
| git push origin master                | 将本地分支推送到存在依赖关系的远端分支，如果远端没有`master`分支，那会新建一个                          |
| git push -u origin master             | 相当于同时使用`git push origin master`和`git branch --set-upstream-to orgin/master`，`-u`就是`upstrean` |
| git push --set-upstream origin master | 推送当前分支并建立与远程上游的跟踪                                                                      |

---

## 撤销修改

| 命令                | 说明                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------ |
| git clean -df       | 只删除所有`untracked`的文件，如果文件已经被`tracked`, 修改过的文件不会被回退               |
| 2. git reset --hard | 把`tracked`的文件 revert(回退) 到前一个版本，对于`untracked`的文件(比如编译的临时文件)都不会被删除。 |

- `untracked`，未跟踪(`git`上不认识的新的文件)。与之相反的动作是`tracked`，代表`git`已经追踪文件的修改。

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
git reset --hard <版本号>
# 注意使用 --hard 参数会抛弃当前工作区的修改
# 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
```

为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

``` bash
# branch: 分支
git push origin <branch> --force
```

---

## 其他

1. 默认情况下，git会忽略掉空的文件夹。如果想要保留这个文件夹的话，可以在里面创建一个名为`.gitkeep`的空文件(这名字只是社区约定俗称的一个名称，换作其他名称都可以).<br>一般都是通过命令行或者在一些编辑器下直接创建文件(windows不能直接创建`.`开头的文件，系统会认为文件名不合法)。