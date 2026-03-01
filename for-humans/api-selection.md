# API Selection

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

解释人类如何根据任务类型选择合适的 API / 接口，而不是只看名字。这里的“API”既包括模型提供方，也包括 OpenClaw 自己暴露的运行方式和插件能力。

## Selection Questions

- 任务更偏问答，还是偏执行？
- 是否需要工具调用？
- 是否需要长任务、多步骤、持续状态？
- 是否更在意速度、成本、还是可操作性？

## Practical Selection Heuristics

### 1. If the task is operational, optimize for tools and control

- Official context: <https://docs.openclaw.ai/index>
- Why it matters: 官方首页把 OpenClaw 定位成多渠道 Gateway 和 agent runtime，而不是单纯聊天前端。这意味着执行型任务应优先考虑工具可用性、权限边界和状态管理，而不是只盯模型名。

### 2. If the task needs repeatability, prefer structured workflows

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenProse 的官方说明强调 repeatable workflows、explicit parallelism 和 reusable programs。这类任务不该只靠随手 prompt。

### 3. If the task depends on plugins, choose trust before breadth

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Why it matters: 官方文档明确指出 plugins run in-process with the Gateway，因此选插件时首先考虑可信度，而不是“功能最多”。

### 4. If the task touches sensitive surfaces, choose the safer path even if slower

- Official source: <https://docs.openclaw.ai/security>
- Why it matters: 安全文档的整体立场很明确，OpenClaw 应该被当作“有真实执行能力的系统”而不是普通聊天应用。涉及 shell、浏览器控制、消息发送时，优先收紧访问面。

## A Simple Decision Model

### Choose for speed when:

- 任务短
- 不需要长期状态
- 不需要复杂工具链

### Choose for control when:

- 任务会执行命令
- 任务会访问文件、浏览器、消息平台
- 任务失败代价高

### Choose for structure when:

- 任务会重复出现
- 任务需要多步骤和多人协作
- 你希望后续把它沉淀成 playbook 或 skill
