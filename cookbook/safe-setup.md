# Safe Setup Recipe

Status: Verified
Last Updated: 2026-03-02
Source: curated web research

## Goal

给第一次部署 OpenClaw 的人一个安全优先的默认顺序。

## Core Rule

先决定谁能进来、能做什么、哪些代码值得信任，再去追求更强能力。

如果顺序反过来，OpenClaw 很容易从“有用系统”变成“高权限风险面”。

## Safe Default Order

1. Define who can access the system
2. Minimize what is exposed
3. Decide which channels are really needed
4. Treat plugins and skills as trusted code only if reviewed
5. Add more power only after the boundary is clear

## Step 1: Access before intelligence

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方安全文档的核心不是“模型安全”，而是先把 access control 放在前面。

## Step 2: Keep the exposed surface small

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 公开暴露的入口越多，验证越弱，系统风险越高。先小，再扩。

## Step 3: Add channels deliberately

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: 渠道是入口，不是目标。只开真正需要的入口，避免把每个可接渠道都接上。

## Step 4: Treat plugins and skills as trust decisions

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方明确提醒 plugins run in-process。对 operator 来说，这不是“小扩展”，而是信任决策。

## Step 5: Expand after the baseline works

- Official source: <https://docs.openclaw.ai/start/getting-started>
- Why it matters: 先让最小系统稳定、可控，再去加 skills、playbooks、automation 和更多渠道。

## Common Unsafe Moves

- 先公开入口，再补认证
- 先装第三方扩展，再理解权限边界
- 先接多个 channels，再考虑统一治理
- 先给高权限工具，再考虑 scope

## Read Next

1. [Quick Start Recipe](quick-start.md)
2. [Channel Setup Recipe](channel-setup.md)
3. [For Humans / Configuration Strategy](../for-humans/configuration-strategy.md)
4. [Research / Channel And Deployment Signals](../research/channel-deployment-signals.md)

## Primary Sources

- [Gateway Security](https://docs.openclaw.ai/gateway/security)
- [Channels](https://docs.openclaw.ai/channels/index)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
- [Getting Started](https://docs.openclaw.ai/start/getting-started)
