# 在git项目中使用emoji

emoji源于日语词汇“絵文字”, 想必大家对它都挺熟悉的吧, 其拟人化的生动形象，已经成为当下流行的表情之一. 现在Github已经支持使用 emoji 啦~ 那么这意味着我们可以随意卖萌了?(不

实际上在项目中, 这 emoji 的使用还真有讲究. 用的恰当能使项目中的每个`commit`内容都变得更可观, 接下来讲一下如何规范的在`git`中使用 emoji 提高可读性.

![项目中使用](./img-1.png)
<!-- more -->

#### 使用方式
在`git commit`上加入emoji的二进制符号, 格式为
``` bash
  :emoji1: :emoji2: 本次提交的主要内容
```

如初次提交: 
``` bash
  git commit -m ":tada: Initialize Repo"
```

#### 相关规范
emoji 表情在提交代码的时候也不能乱用，否则容易造成误解. 因此开源项目[gitmoji](https://gitmoji.carloscuesta.me/)专门规定了在 github 提交代码时应当遵循的 emoji 规范：

emoji                        | emoji代码                      | 说明
:-----------                 | :-----------                   | :-----------
:tada:                       | `:tada:`                       | 初始提交
:art:                        | `:art:`                        | 改进代码的结构/格式
:zap:                        | `:zap:`                        | 提高性能
:fire:                       | `:fire:`                       | 删除代码或文件
:bug:                        | `:bug:`                        | 修复一个错误
:ambulance:                  | `:ambulance:`                  | 关键修补程序
:sparkles:                   | `:sparkles:`                   | 引用新功能
:memo:                       | `:memo:`                       | 编写文档
:rocket:                     | `:rocket:`                     | 部署新功能
:recycle:                    | `:recycle:`                    | 代码重构
:lipstick:                   | `:lipstick:`                   | 更新UI和样式文件
:white_check_mark:           | `:white_check_mark:`           | 添加测试
:apple:                      | `:apple:`                      | 修复MacOS上的问题
:penguin:                    | `:penguin:`                    | 修复Linux上的问题
:checkered_flag:             | `:checkered_flag:`             | 修复Windows上的问题
:robot:                      | `:robot:`                      | 解决Android上的问题
:green_apple:                | `:green_apple:`                | 解决iOS上的问题
:bookmark:                   | `:bookmark:`                   | 发布/版本标签
:rotating_light:             | `:rotating_light:`             | 移除 linter 警告
:construction:               | `:construction:`               | 工作正在进行中
:green_heart:                | `:green_heart:`                | 修复CI构建
:arrow_down:                 | `:arrow_down:`                 | 降级依赖关系
:arrow_up:                   | `:arrow_up:`                   | 升级依赖关系
:pushpin:                    | `:pushpin:`                    | 将依赖关系固定到特定的版本
:construction_worker:        | `:construction_worker:`        | 添加CI构建系统
:chart_with_upwards_trend:   | `:chart_with_upwards_trend:`   | 工作正在进行中
:heavy_minus_sign:           | `:heavy_minus_sign:`           | 删除依赖项
:whale:                      | `:whale:`                      | 关于Docker的工作
:heavy_plus_sign:            | `:heavy_plus_sign:`            | 添加一个依赖项
:wrench:                     | `:wrench:`                     | 更改配置文件
:pencil2:                    | `:pencil2:`                    | 修正错别字
:hankey:                     | `:hankey:`                     | 编写需要改进的不好的代码
:rewind:                     | `:rewind:`                     | 恢复更改
:globe_with_meridians:       | `:globe_with_meridians:`       | 国际化和本地化
:twisted_rightwards_arrows:  | `:twisted_rightwards_arrows:`  | 工作正在进行中
:package:                    | `:package:`                    | 更新编译的文件或包
:alien:                      | `:alien:`                      | 由于外部API更改而更新代码
:truck:                      | `:truck:`                      | 移动或重命名文件
:page_facing_up:             | `:page_facing_up:`             | 添加或更新许可证
:boom:                       | `:boom:`                       | 介绍突破性变化
:bento:                      | `:bento:`                      | 添加或更新资产
:ok_hand:                    | `:ok_hand:`                    | 由于代码审阅更改而更新代码
:wheelchair:                 | `:wheelchair:`                 | 改善无障碍
:bulb:                       | `:bulb:`                       | 记录源代码
:speech_balloon:             | `:speech_balloon:`             | 更新文字和文字
:card_file_box:              | `:card_file_box:`              | 执行与数据库相关的更改
:loud_sound:                 | `:loud_sound:`                 | 添加日志
:mute:                       | `:mute:`                       | 删除日志
:children_crossing:          | `:children_crossing:`          | 改善用户体验/可用性
:building_construction:      | `:building_construction:`      | 进行架构更改

**参考资料**

Git emoji: https://gitmoji.carloscuesta.me  
Github emoji列表: https://segmentfault.com/a/1190000009649780