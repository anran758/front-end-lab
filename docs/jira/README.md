# jira

- [高级搜索 和 JQL 入门](https://www.atlassian.com/zh/software/jira/guides/expand-jira/jql#jql-syntax)
- [Advanced search reference - JQL fields](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-fields/)
- [Advanced search reference - JQL operators](https://support.atlassian.com/jira-software-cloud/docs/advanced-search-reference-jql-operators/)

## SQL

指定 project:

``` shell
project = SC
```

指定 Epic Link

``` shell
"Epic Link" = "space v2.0.0"
```

搜索指定 key:

``` shell
key in (DC-1000,DC-2321,DC-3179)
```

修复结果:

``` shell
# 修复结果: 未完成
resolution = Unresolved
```

当前用户登记过工作:

``` shell
worklogAuthor = currentUser()
```

登记工作的日期范围:

``` shell
worklogDate >= startOfWeek() AND worklogDate < endOfWeek()

# 2021-06-28 ~ 2021-07-02 登记过工作的 jira
worklogDate >= 2021-06-28 AND worklogDate < 2021-07-02
```

排序：

``` shell
# 按照优先级 (priority) 升序排序
ORDER BY priority DESC
```
