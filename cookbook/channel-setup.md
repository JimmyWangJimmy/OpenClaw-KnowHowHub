# Channel Setup Recipe

Status: Verified
Last Updated: 2026-03-02
Source: curated web research

## Goal

帮助用户理解渠道接入的默认顺序和常见摩擦。

## What This Recipe Is Really About

这篇不是列所有渠道，而是告诉你：

- 为什么 channels 只是入口，不是系统本身
- 第一次接渠道时该按什么顺序
- 哪些渠道应该后接，而不是先接

## The Default Order

1. Understand the channel model
2. Start with the one channel you actually use
3. Confirm the Gateway baseline is stable
4. Pair and test with a minimal audience
5. Only then add a second channel

## Step 1: Read the channel overview first

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: 官方把各类 chat apps 都放在 Gateway 之下。先理解这个结构，才能避免把渠道误当主系统。

## Step 2: Pick one real channel, not five

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: OpenClaw 支持很多渠道，但第一次接入的目标不是“覆盖所有入口”，而是验证一个最小可用入口。

## Step 3: Prefer the path with the clearest official support

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: 官方频道页会标明哪些是 core、哪些依赖 plugin、哪些是 legacy。第一次接入优先选官方路径更清晰的渠道。

## Step 4: Pair and test with the smallest audience

- Official source: <https://docs.openclaw.ai/channels/index>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 渠道上线不是“能发消息就行”，还涉及 pairing、allowlist、group behavior 和提及策略。

## Step 5: Add more channels only after the first one is boring

“boring” 的意思是：

- 能稳定收发
- 权限边界清楚
- 你知道它会把谁带进系统
- 你知道日志、记忆、路由和工具会怎么表现

在这之前，不要急着扩第二个渠道。

## Common Mistakes

- 一开始就接多个 channels，导致排障面过大
- 把 group / mention / routing 行为留到后面再看
- 先接 plugin-only 渠道，再回头学习核心渠道模型
- 还没完成安全基线，就让很多人能接触到 agent

## A Better First-Week Path

1. [Quick Start Recipe](quick-start.md)
2. [Safe Setup Recipe](safe-setup.md)
3. Read [Chat Channels](https://docs.openclaw.ai/channels/index)
4. 只接一个你最常用的入口
5. 稳定后再考虑第二个 channel

## Read Next

- [Chat Channels](https://docs.openclaw.ai/channels/index)
- [Deployment Ecosystem](../reference/deployment-ecosystem.md)
- [Channel And Deployment Signals](../research/channel-deployment-signals.md)
- [Safe Setup Recipe](safe-setup.md)

## Primary Sources

- [Chat Channels](https://docs.openclaw.ai/channels/index)
- [Deployment Ecosystem](../reference/deployment-ecosystem.md)
- [Channel And Deployment Signals](../research/channel-deployment-signals.md)
- [Gateway Security](https://docs.openclaw.ai/gateway/security)
