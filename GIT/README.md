# 常见的 GIT 使用实例

## 常用方法

| 方法                                     |  说明                                                                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| git add `<change file>`                  | git add `<change file>`将其添加到 status                                                                                                |
| git add [--all / .]                      | 添加全部改动的文件                                                                                                                      |
| git branch                               | 查看分支                                                                                                                                |
| git branch --set-upstream-to orgin2/game | 让当前的分支和远程仓库（origin2）的 game 分支建立关联（前提是目标分支要存在），建立关联后就可以直接使用`git push`命令而无需添加其他参数 |
| git commit -m "`<message>`"              | 为这所有已经进入 stage 的改变添加一个 commit 信息                                                                                       |
| git commit --amend                       | 修改上一次 commit                                                                                                                       |
| git checkout -b "gh-pages"               | 创建一个名为`gh-pages`的新分支，并且切换过去                                                                                           |
| git remote add orgin `<remote>`          | 添加一个远程仓库                                                                                                                        |
| git push origin master                   | 将本地分支推送到存在依赖关系的远端分支，如果远端没有`master`分支，那会新建一个                                                          |
| git push -u origin master                | 相当于同时使用`git push origin master`和`git branch --set-upstream-to orgin/master`，`-u`就是`upstrean`                                 |
| git push --set-upstream origin master    | 推送当前分支并建立与远程上游的跟踪                                                                                                      |

## git 撤销已经 push 到远端的 commit

在使用 git 时， 有时候我们会无意间错推了我们不想推上去的文件或者希望能够回退以前版本的时候.

这时我们可以先在本地回退到相应的版本。

```bash
git reset --hard <版本号>
// 注意使用 --hard 参数会抛弃当前工作区的修改
// 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
```

为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

```bash
git push origin <分支名> --force
```
