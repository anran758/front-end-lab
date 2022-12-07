# Jira

> JIRA 是一个缺陷跟踪管理系统，为针对缺陷管理、任务追踪和项目管理的商业性应用软件

- [高级搜索 和 JQL 入门](https://www.atlassian.com/zh/software/jira/guides/expand-jira/jql#jql-syntax)
- [Advanced search reference - JQL fields](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-fields/)
- [Advanced search reference - JQL operators](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-operators/)

## SQL

指定 project:

``` sql
project = SC
```

指定 Epic Link

``` sql
"Epic Link" = "space v2.0.0"
```

搜索指定 key:

``` sql
key in (DC-1000,DC-2321,DC-3179)
```

修复结果:

``` sql
-- 修复结果: 未完成
resolution = Unresolved
```

当前用户登记过工作:

``` sql
worklogAuthor = currentUser()
```

登记工作的日期范围:

``` sql
worklogAuthor = currentUser() AND worklogDate >= startOfWeek() AND worklogDate < endOfWeek()

-- 2021-06-28 ~ 2021-07-02 登记过工作的 jira
worklogDate >= 2021-06-28 AND worklogDate < 2021-07-02
```

排序：

``` sql
-- 按照优先级 (priority) 升序排序
ORDER BY priority DESC
```

## 组合应用

月报填写, 如 `2021-7-1` 到 `2021-8-1` 前:

``` sql
(worklogAuthor = currentUser() OR assignee = currentUser()) AND worklogDate >= 2021-7-1 AND worklogDate < 2021-8-1 ORDER BY summary DESC  
```

查询本周工作内容

``` sql
-- 如果是写周报类的的话，需要将 currentUser() 替换为当前用户的名字
(worklogAuthor = currentUser() OR assignee = currentUser()) AND worklogDate >= startOfWeek() AND worklogDate < endOfWeek() 
```

查询还未完成的工作内容

``` sql
assignee = currentUser() AND resolution = Unresolved AND status not in ("Ready For Deploy", "Testing") ORDER BY updated DESC
```

## 在浏览器快速 copy key

在浏览器快速 copy jira 的 key:

``` js
function getJiraKeys() {
  const keys = Array.from($$('.issue-key-column span')).map((item) => {
    return item.textContent?.trim();
  });

  const content = `key in (${keys})`
  copy?.(content)

  return content
}
getJiraKeys()
```

## Linked Issues

创建 jira 时若存在 jira 之间存在依赖关系，应设置 Linked Issues 表明依赖关系。

jira 中 Linked Issues 之间大多数存在对应关系，如在 SC-0002 中设置 SC-0001 为 `is parent task of`，那么在 `SC-0001` issue 界面中查看依赖关系会自动显示 `SC-0002` 为 `is subtask of`。

以下笔者根据用途做了简要的分类:

**原因**

- is caused by (是由 ... 引起)
- causes (引起了 ... )

**阻断任务执行的关系**

- is blocked by (被 ... 阻断进度)
- blocks (阻断)

**层级关系**

- is parent task of (... 是父任务)
- is subtask of (... 是子任务)
- is child of (... 是当前任务的孩子)
- is parent of (... 是当前任务的父母)

**模板关系**

- clones (克隆)
- is cloned by (被克隆)
- is duplicated by (被 ... 复制)
- duplicates (复制于 ...)

**依赖关系**

`Gantt` 为甘特图的名字。

- [Gantt: finish-start] has to be done after (必须在 ... 之后完成)
- [Gantt: finish-start] has to be done before (必须在 ... 之前完成)
- [Gantt: start-start] has to be started together with (必须与 ... 一起开始)
- [Gantt: finish-finish] has to be finished together with (必须与 ... 一起完成)
- [Gantt: start-finish] start is earliest end of (开始是最早的结束): 任务不能在 ... 开始之前结束
- [Gantt: start-finish] earliest end is start of (最早的结束是开始): 任务在 ... 结束之前无法开始
- relates to (涉及到 ...)
- starts with (以 ... 开始)
- finishs with (以 ... 结束)
- tbd. before
- tbd. after

Linked Issues 还可以为甘特图生成清晰的关联关系。
