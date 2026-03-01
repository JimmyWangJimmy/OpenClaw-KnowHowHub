# Operating Model

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

定义 agent 在这个知识系统中的角色。

## Core Model

### 1. Gateway-centered runtime

- Official source: <https://docs.openclaw.ai/>
- Official source: <https://docs.openclaw.ai/architecture>
- Model: OpenClaw 的核心不是单次聊天，而是一个长期运行的 Gateway，统一承接渠道、session、routing 和 tool execution。

### 2. Human directs, agent executes within bounds

- Official source: <https://docs.openclaw.ai/gateway/security>
- Model: 人类负责方向、优先级和验收；agent 在已定义的 access / scope / tool boundaries 内搜索、结构化、执行和沉淀。

### 3. Multi-channel entry, single system of truth

- Official source: <https://docs.openclaw.ai/channels/index>
- Official source: <https://docs.openclaw.ai/architecture>
- Model: WhatsApp、Telegram、Discord 等渠道只是入口；真正的状态和路由中心是 Gateway。

### 4. Repeatability over improvisation

- Official source: <https://docs.openclaw.ai/prose>
- Model: 对重复或复杂任务，agent 应优先走可重放、可审阅、可并行的 workflow，而不是不断临场 improvisation。

### 5. Trusted surfaces must be explicit

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Model: 插件、skills、脚本和远程暴露面都必须被当作信任边界的一部分，而不是透明基础设施。
