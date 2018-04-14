# 常见的 GIT 使用实例

## 常用方法

| 方法                                  |  说明                                             |
| ------------------------------------- | ------------------------------------------------- |
| git add `<change file>`               | git add `<change file>`将其添加到 status          |
| git add [--all / .]                   | 添加全部改动的文件                                |
| git commit -m "`<message>`"           | 为这所有已经进入 stage 的改变添加一个 commit 信息 |
| git commit --amend                    | 修改上一次 commit                                 |
| git checkout -b "gh-pages"            | 为仓库创建新的分支名为  gh-pages                  |
| git push --set-upstream origin master | 推送当前分支并建立与远程上游的跟踪                |

## git 撤销已经 push 到远端的 commit

在使用 git 时， 有时候我们会无意间错推了我们不想推上去的文件或者希望能够回退以前版本的时候.

这时我们可以先在本地回退到相应的版本。

``` bash
git reset --hard <版本号>
// 注意使用 --hard 参数会抛弃当前工作区的修改
// 使用 --soft 参数的话会回退到之前的版本，但是保留当前工作区的修改，可以重新提交
```

为了覆盖掉远端的版本信息，使远端的仓库也回退到相应的版本，需要加上参数`--force`

```bash
git push origin <分支名> --force
```
