# How To Choose APIs And Models

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Goal

给 OpenClaw 用户一个稳定的 API / model 选型框架，避免“看到新模型就换、出问题才补规则”。

## The Core Principle

先按任务和风险选接口，再按预算和速度选模型。

## A Practical Decision Stack

### 1. Task shape first

- Official source: <https://docs.openclaw.ai/start/getting-started>
- Official source: <https://docs.openclaw.ai/prose>
- Question: 这是一次性问答，还是可复用工作流？
- Rule: 一次性任务优先简单路径，重复任务优先可流程化路径。

### 2. Risk level second

- Official source: <https://docs.openclaw.ai/gateway/security>
- Question: 任务是否涉及执行权限、外部系统或敏感数据？
- Rule: 风险越高，越要优先稳定性、可审计和边界控制。

### 3. Interaction mode third

- Official source: <https://docs.openclaw.ai/web/webchat>
- Official source: <https://docs.openclaw.ai/channels/index>
- Question: 这是 web 交互、消息渠道，还是后台流程？
- Rule: 入口形态不同，延迟、上下文长度和失败恢复策略也应不同。

### 4. Cost and latency fourth

- Official source: <https://docs.openclaw.ai/concepts/models>
- Question: 预算优先、质量优先，还是速度优先？
- Rule: 先定义 SLA 再选模型，不要反过来。

## Recommended Default Strategy

### Phase 1: Stable baseline

目标：先跑通、先稳定。

- 使用官方推荐路径
- 先选稳定模型组合
- 不急着追最新模型

### Phase 2: Tiered routing

目标：把不同任务分层。

- cheap model for low-risk routine tasks
- stronger model for high-value synthesis
- keep fallback when primary model is unavailable

### Phase 3: Policy-driven optimization

目标：把选型变成规则，不依赖个人记忆。

- 为不同任务定义 model policy
- 定期复盘成本和失败率
- 把异常路径写进 playbook

## Common Selection Mistakes

- 把“最新”当“最好”
- 不区分任务类型，所有任务一个模型
- 高风险任务只看速度不看可控性
- 没有 fallback provider 或 fallback model
- 成本超标后才临时补策略

## API/Model Review Checklist

每次调整前先问：

1. 这次改动解决的是什么任务问题
2. 风险等级有没有变化
3. fallback 是否存在
4. 成本上限是否定义
5. 回滚条件是否明确

## Read Next

1. [How To Think About Configuration](configuration.md)
2. [Interaction Patterns](interaction-patterns.md)
3. [Build Your First Playbook](../cookbook/first-playbook.md)
4. [For Humans / API Selection](../for-humans/api-selection.md)

## Primary Sources

- [Models](https://docs.openclaw.ai/concepts/models)
- [OpenProse](https://docs.openclaw.ai/prose)
- [Gateway Security](https://docs.openclaw.ai/gateway/security)
- [WebChat](https://docs.openclaw.ai/web/webchat)
- [Chat Channels](https://docs.openclaw.ai/channels/index)
