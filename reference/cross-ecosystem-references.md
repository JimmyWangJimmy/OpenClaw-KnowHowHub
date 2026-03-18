# Cross-Ecosystem References

Status: Verified
Last Updated: 2026-03-19
Source: official docs and GitHub snapshot

## Goal

为 OpenClaw 使用者提供一个可参考的跨生态资料面：

- OpenAI 官方 agent 架构与安全实践
- Anthropic 官方 API / MCP / tool use 实践
- GitHub 上高星 agent 框架和 SDK 参考仓库

这页不是要替代 OpenClaw 官方文档，而是用来做“对照学习”和“方案借鉴”。

## Official Company References

## OpenAI

- [Agents guide](https://platform.openai.com/docs/guides/agents)
- [Agents SDK guide](https://platform.openai.com/docs/guides/agents-sdk/)
- [Agent Builder guide](https://platform.openai.com/docs/guides/agent-builder)
- [Safety in building agents](https://platform.openai.com/docs/guides/agent-builder-safety)
- [Responses API](https://platform.openai.com/docs/api-reference/responses/retrieve)
- [Responses vs Chat Completions](https://platform.openai.com/docs/guides/responses-vs-chat-completions)

Why this matters for OpenClaw users:

- 对比 agent workflow 设计方法
- 对比工具调用与安全审批策略
- 对比接口演进路线和迁移建议

## Anthropic

- [Messages API](https://docs.anthropic.com/en/api/messages)
- [Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/mcp)
- [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Prompt engineering overview](https://docs.anthropic.com/en/docs/prompt-engineering)
- [API release notes](https://docs.anthropic.com/en/release-notes/api)

Why this matters for OpenClaw users:

- 对比 MCP 生态与工具接入模式
- 对比消息接口和工具执行边界
- 对比提示词工程和评估思路

## High-Star GitHub Repositories (Snapshot)

Snapshot date: 2026-03-19  
Note: star/fork 会快速变化，本页只记录带日期快照。

| Repo | Snapshot signal | Why it is worth tracking |
| --- | --- | --- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 130,065 stars / 21,442 forks | 通用 agent 工程平台，模式和组件非常丰富 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 81,212 stars / 9,594 forks | browser agent 自动化方向，实战导向很强 |
| [microsoft/autogen](https://github.com/microsoft/autogen) | 55,834 stars / 8,414 forks | 多 agent 协作框架，研究与工程都活跃 |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 46,453 stars / 6,268 forks | role-based agent orchestration，社区活跃 |
| [openai/openai-python](https://github.com/openai/openai-python) | 30,264 stars / 4,643 forks | OpenAI 官方 Python SDK，接口变化一手信号 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 26,805 stars / 4,628 forks | graph-style agent 工作流与状态管理 |
| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | 20,091 stars / 3,280 forks | OpenAI 官方 multi-agent SDK 参考实现 |
| [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) | 2,977 stars / 531 forks | Anthropic 官方 Python SDK，模型/API 演进入口 |

## How To Use These References In This Repo

1. OpenClaw 官方文档仍是主判定依据
2. OpenAI / Anthropic 用于方法对照，不直接替代 OpenClaw 结论
3. 高星仓库用于学习“模式”和“工程组织”，不直接照搬
4. 任何外部模式引入前，先做 OpenClaw 语境下的安全与边界检查

## Suggested Reading Path

1. 先读 OpenClaw：`what-is-openclaw` + `security-first`
2. 再读 OpenAI / Anthropic 官方 agent 指南
3. 最后看高星仓库，提炼可迁移模式
