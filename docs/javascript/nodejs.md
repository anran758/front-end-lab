# node.js

记录 Node.js 中相关的 API 使用场景与相关细节。

## 环境相关

``` JS
// 返回 Node.js 进程的当前工作目录
// 如做脚手架时可以读取是在哪个目录下启动 node 服务的
process.cwd()

// 解析路径名
fs.realpathSync(pathStr)

// Example: 解析当前 node 运行的工作目录
fs.realpathSync(process.cwd())
```

## pm2

``` bash
# 运行nodejs项目
pm2 start [file]

# 查看日志
pm2 log

# 可以查看运行了几个项目
pm2 list
```

## Node.js 需要确定的技术方案

1. 数据该如何存储
2. 如何与前端对接（接口设计）

## 爬虫

**什么是爬虫？**

爬虫是按照一定规则自动抓取网络信息的程序。

**什么是反爬虫？**

一些做内容的网站为了防止别人爬取自己的信息去商用一般会作出反爬虫的机制。

**反爬虫的机制有：**

- 判断 User-Agent, referrer、验证码校验
- 单位时间访问次数、访问量
- 关键信息图片混淆
- 异步加载

**Node.js 中有什么工具扩展库可以做爬虫的功能？**

1. cheerio

## MongoDB 简要用法

``` bash
# 显示内存
show dbs

# 使用数据库
use dome

# 创建集合并插入数据
db.createCollection("user")
# {"ok":1}
db.users.insert({id:123,name:"hello"})
# writeResult({ "nInserted" : 1 })

# 查看当前数据库的集合
show collections

# 删除数据库
db.dropDatabase()
# { "dropped" : "demo", "ok" : 1 }

# 删除集合
db.user.drop()
# true

# 查看所有数据
db.user.find()

# 带格式化的数据
db.user.find().pretty()

# 查看第一条数据
db.user.findOne()

# 更新数据 (条件,)
db.user.update({"userId"})

# 删除指定数据
db.user.remove({userId:101})

```
