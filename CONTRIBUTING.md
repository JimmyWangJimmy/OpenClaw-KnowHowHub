# Contributing

这个仓库希望成为 OpenClaw 的公共知识入口，因此贡献内容时优先考虑可读性、可验证性和可复用性。

## Basic Rules

- 面向读者写文档，不要只给作者自己看得懂的笔记标题
- 文件名使用英文 `kebab-case`
- 教程放在 `guides/`
- 查阅型资料放在 `reference/`
- 实验和未完全确认的内容放在 `research/`
- 图片和示例资源放在 `assets/`

## Recommended Doc Header

建议每篇文档开头包含以下信息：

```md
Status: Draft | Verified | In Progress | Deprecated
Last Updated: YYYY-MM-DD
Source: firsthand | reverse engineering | external reference
```

## Writing Guidance

- 教程类内容尽量包含前置条件、步骤、结果和风险说明
- 研究类内容尽量区分“已确认事实”和“推测”
- 如果引用外部资料，请附原始链接
- 如果内容仍未验证，请明确写出待确认点
- 文档默认使用中文；必要英文术语请用 `中文（English）` 并列写法
- 避免纯英文标题；推荐使用 `中文标题（English Title）`

## Pull Requests

- 标题尽量直接说明修改内容
- 如果改动较大，请在描述中说明目的、范围和未解决问题
- 如果新增教程或参考资料，请在相关目录的入口文档中补上链接

## Suggestions And Fixes

如果你不想直接提交 PR，也可以：

- 用 source suggestion issue 推荐高质量来源
- 用 documentation fix issue 报告错误、失效链接或过时内容
