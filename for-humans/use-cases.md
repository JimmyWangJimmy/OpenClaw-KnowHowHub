# Use Cases

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

面向人类解释 OpenClaw 适合落在哪些真实任务上。

## Core Use Cases

### 1. Personal AI assistant across channels

- Official source: <https://docs.openclaw.ai/index>
- Why it matters: 官方首页把 OpenClaw 定位成一个 self-hosted gateway，连接 WhatsApp、Telegram、Discord、iMessage 等渠道到 AI agent。
- Best for: 希望在多个消息入口访问同一个 agent 的开发者和 power users。

### 2. Tool-using coding and operations assistant

- Official source: <https://docs.openclaw.ai/index>
- Why it matters: 官方明确写到 OpenClaw 是 agent-native，具备 tool use、sessions、memory 和 multi-agent routing。
- Best for: 代码探索、执行型支持、知识库维护、运维式自动化协作。

### 3. Repeatable workflows and multi-agent programs

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenProse 的官方能力说明包括 explicit parallelism、repeatable approval-safe workflows 和 reusable `.prose` programs。
- Best for: 代码审查、incident triage、内容流水线、研究与综合写作。

### 4. Structured self-hosted assistant with operator control

- Official source: <https://docs.openclaw.ai/index>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方文档一边强调 self-hosted，一边强调 access control before intelligence。这说明它更适合“有控制边界的执行系统”，而不是开放式公共 bot。
- Best for: 想自己控制数据、权限和渠道暴露面的团队或个人。

## Not Just "Chat"

OpenClaw 更适合被当作一个带工具、带工作流、带约束的执行系统，而不是一个纯问答聊天框。

## Weak Fit Cases

- 想给互不信任的多人共享一个高权限 agent
- 想完全依赖临时聊天上下文，而不沉淀文件和流程
- 只想要一个无配置、无权限设计的公共 AI 聊天入口
