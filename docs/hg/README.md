# 分布式软件配置管理工具 - Mercurial(水银)

Mercurial 是一种版本管理工具。将 Mercurial 安装完毕后可在命令行输入 hg (即为元素周期表中汞（Hydrargyrum）的元素符号 `Hg`) 作为调用程序的关键字。

## common

``` shell
# 帮助
hg help

# 初始化
hg init

# 工作区文件改动状态
hg status

# 查看远程仓库地址
hg paths

# 查看当前分支
hg branch

# 查看日志
hg log

# 拉取代码 (未合并到本地)
hg pull

# 拉取代码 (自动更新到本地)
hg pull --update

# 拉取代码 (通过 rebase 的方式进行合并，需工作区没有未提交的文件)
hg pull --rebase
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
