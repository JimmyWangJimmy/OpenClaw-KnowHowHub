# What Is OpenClaw

Status: Verified
Last Updated: 2026-03-02
Source: curated web research

## Goal

给第一次认真接触 OpenClaw 的人一个统一心智模型。

## Core Idea

OpenClaw 不是单纯聊天工具。

更准确地说，它是一个 self-hosted、multi-channel、agent-native Gateway 和 runtime，用来把人类、渠道、工具、工作流和长期运行的 agent 连接到同一个系统里。

## The Short Definition

如果只用一句话解释：

OpenClaw 是一个让 AI agent 以更可控、更可扩展、更接近真实工作流的方式运行起来的系统，而不是一个只在单个聊天窗口里回答问题的 bot。

## What It Is

### 1. A gateway, not just a chat box

- Official source: <https://docs.openclaw.ai/>
- Official source: <https://docs.openclaw.ai/concepts/architecture>
- Why it matters: 官方文档强调 Gateway、clients、nodes、routing 和 remote access，这说明 OpenClaw 的核心是长期运行的系统，而不是一次性对话。

### 2. Multi-channel by design

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: WhatsApp、Telegram、Discord、iMessage 等渠道在官方体系里是入口面，而不是不同产品。这意味着一个 agent 可以通过多个入口被访问，但背后仍是同一套系统。

### 3. Tool-using and workflow-oriented

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenClaw 不只关心回答质量，也关心 tool use、skills、plugins、workflow programs 和 repeatable execution。

### 4. Self-hosted with operator control

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方安全文档的重点是 access control、scope、permissions 和 exposed surfaces。这说明 OpenClaw 更像一个“由操作者负责边界的系统”，不是无边界公共聊天入口。

## What It Is Not

- 不是单一聊天 UI
- 不是“只选个模型就结束”的轻量 wrapper
- 不是默认适合公开暴露给任何人的公共 bot
- 不是只靠 prompt improvisation 维持质量的系统

## The Core Mental Model

理解 OpenClaw，最稳的方式是记住这四层：

1. Human or operator sets the goal
2. Gateway defines access and routing
3. Channels provide entry points
4. Tools, skills, and workflows do the real work

如果这四层没有分清，后面的配置、排障、扩展和安全判断都会混乱。

## Why People Misunderstand It

常见误解不是“不会安装”，而是把 OpenClaw 误看成：

- 一个更复杂的聊天机器人
- 一个模型切换器
- 一个插件市场
- 一个渠道转发层

这些都只是一部分，不是整体。

## Read Next

1. [Best Practices](best-practices.md)
2. [Security First](security-first.md)
3. [Quick Start Recipe](../cookbook/quick-start.md)
4. [For Humans / Use Cases](../for-humans/use-cases.md)
5. [For Agents / Operating Model](../for-agents/operating-model.md)

## Primary Sources

- [OpenClaw Docs](https://docs.openclaw.ai/)
- [Architecture](https://docs.openclaw.ai/concepts/architecture)
- [Channels](https://docs.openclaw.ai/channels/index)
- [Gateway Security](https://docs.openclaw.ai/gateway/security)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
- [OpenProse](https://docs.openclaw.ai/prose)
