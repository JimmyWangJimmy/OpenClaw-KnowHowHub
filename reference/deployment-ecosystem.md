# Deployment Ecosystem

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页整理 OpenClaw 当前最值得关注的部署路线，不只看“能不能跑起来”，也看谁更接近官方基线、谁更适合生产、谁只是社区衍生方案。

## Tier 1: Official Baseline

### OpenClaw Docs Home

- Link: <https://docs.openclaw.ai/>
- Why it matters: 官方首页和 Quick Start 给出最核心的运行模型，包括 Gateway、默认 Control UI 地址和配置文件位置。
- Best for: 理解官方默认部署心智模型

### Chat Channels Docs

- Link: <https://docs.openclaw.ai/channels/index>
- Why it matters: 如果你的部署目标包括 WhatsApp、Telegram、Discord 等渠道，官方渠道文档是第一入口。
- Best for: 决定要暴露哪些渠道，以及它们各自的接入成本

### Gateway Security Docs

- Link: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 所有部署路线都应该先过安全基线，而不是先能连上再说。
- Best for: access control、pairing、allowlists、incident response 基线

## Tier 2: High-Signal Community Deployment Sources

### cloudflare/moltworker

- Link: <https://github.com/cloudflare/moltworker>
- Why it matters: 这是一个高信号部署实现，因为它不仅提供运行方式，还清楚写了多层认证、Workers 部署约束和常见故障点。
- Best for: 想走 Cloudflare 路线的用户
- Caveat: 这是围绕 OpenClaw 的部署实现，不是官方主仓库本体

### openclaw/nix-openclaw

- Link: <https://github.com/openclaw/nix-openclaw>
- Why it matters: 这是一个很有价值的包装层，因为它把 Gateway、skills、services 和 secrets 的组织方式写得很具体。
- Best for: Nix 用户、想要可重复部署的人
- Caveat: 它更像 packaging / operations 层，不是产品真相来源

### essamamdani/openclaw-coolify

- Link: <https://github.com/essamamdani/openclaw-coolify>
- Why it matters: 它反映了“零配置 / 生产就绪”这类需求在社区中的强度，并提供了很多实操型整合思路。
- Best for: 想快速获得一整套 VPS / Coolify 路线参考的人
- Caveat: 信息密度高，但包含较多作者自己的集成选择，应当视为 opinionated stack

## How To Choose

### If you want the official mental model

先看官方 docs，再决定是否需要社区部署方案。

### If you want repeatable system management

优先看 `nix-openclaw` 这类 packaging 路线。

### If you want edge / hosted platform deployment

优先看 `moltworker` 这类 Cloudflare 路线，但要特别关注认证层和 cold starts。

### If you want a batteries-included stack

可以参考 `openclaw-coolify`，但不要把它误认为官方推荐标准。

## Repository Use

后续这个仓库如果写部署类内容，应尽量遵守：

1. 官方 docs 定义基线
2. 社区部署项目补充实现路径
3. 明确标注哪些是官方基线，哪些是社区 opinionated stack
