# Security First

Status: Verified
Last Updated: 2026-03-02
Source: curated web research

## Goal

让用户先建立“OpenClaw 是有执行面的系统”这个前提，而不是把它当成普通聊天应用。

## The Core Rule

OpenClaw 的安全顺序不是：

1. 先把能力开满
2. 再想怎么限制

而是反过来：

1. 先决定谁能接触系统
2. 再决定系统暴露到哪里
3. 再决定它可以做什么
4. 最后才扩展能力

## Why Security Comes First

### 1. OpenClaw assumes a trust boundary

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方明确写了 personal assistant trust model。一个 Gateway 默认对应一个 trusted operator boundary，不是 hostile multi-tenant 隔离层。

### 2. Access control comes before intelligence

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方把 `access control before intelligence` 作为核心概念。这意味着真正的第一问题不是“模型强不强”，而是“谁能碰到它”。

### 3. A shared agent means shared delegated authority

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 如果多个不互信的人都能给同一个 tool-enabled agent 发消息，他们实际上共享的是同一套 delegated tool authority。

### 4. Plugins are part of the trust boundary

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Why it matters: 官方明确说 plugins run in-process with the Gateway，应视为 trusted code。这不是普通“安装扩展”，而是引入新执行面。

## The Default Safe Order

1. Define the operator boundary
2. Limit network exposure
3. Keep channels minimal
4. Keep tools and plugins minimal
5. Expand only after the baseline is stable

## What This Means In Practice

### Operator boundary

一个 Gateway 最稳的默认理解是：

- 一个 trusted operator boundary
- 一个主要操作者
- 一组在同一信任边界内的 agents

如果你需要多个互不信任的使用者，不要先想着怎么在一个 Gateway 上做精细隔离，先拆 trust boundary。

### Network exposure

官方安全页反复强调 bind、auth、firewall、remote access、websocket 和 local auth。默认做法应该是：

- 先本地
- 先最小暴露
- 先强认证
- 确认必要性后再开放远程面

### Tool and plugin scope

OpenClaw 的很多价值来自 tools、skills、plugins、remote execution 和 workflow automation，但这些能力同时也是风险面。

默认思路应该是：

- 先最小工具集
- 先最小文件权限
- 先最小渠道能力
- 先只安装你真正审过、信过的插件和 skills

## Common Security Mistakes

- 把 OpenClaw 当成普通聊天机器人，所以先接很多入口
- 先共享给多人，再回头思考 trust boundary
- 把 `sessionKey` 或会话隔离误当成完整授权边界
- 先装很多 plugins 和 skills，再考虑哪些代码值得信任
- 先让 agent 有执行能力，再去想 scope 和 approval

## A Better Mental Checklist

每次扩系统前先问这五个问题：

1. 谁现在可以接触到这个 Gateway
2. 他们和我是否在同一个 trust boundary
3. 这个入口是不是必须公开
4. 这个 plugin 或 skill 我是否真的信任
5. 如果它被误用，最坏能碰到什么

## Read Next

1. [Quick Start Recipe](../cookbook/quick-start.md)
2. [Safe Setup Recipe](../cookbook/safe-setup.md)
3. [For Humans / Configuration Strategy](../for-humans/configuration-strategy.md)
4. [For Agents / Execution Rules](../for-agents/execution-rules.md)

## Primary Sources

- [Gateway Security](https://docs.openclaw.ai/gateway/security)
- [For Humans / Configuration Strategy](../for-humans/configuration-strategy.md)
- [For Agents / Execution Rules](../for-agents/execution-rules.md)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
