# Jira

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
worklogDate >= startOfWeek() AND worklogDate < endOfWeek()

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
