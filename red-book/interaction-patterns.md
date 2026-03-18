# Interaction Patterns

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Goal

给 OpenClaw 使用者一组稳定的人机交互模式，减少“今天能用、明天漂移”的体验。

## Core Idea

好的交互模式不是“问得更花”，而是：

- 输入稳定
- 输出可检验
- 失败可恢复
- 结果可复用

## The 4 Interaction Modes

### 1. Ask mode (fast question answering)

- Best for: 快速查证、单点问答
- Risk: 上下文漂移和输出格式不稳定
- Better pattern: 明确问题边界 + 指定输出格式

### 2. Execute mode (task completion)

- Best for: 需要明确步骤的任务
- Risk: 做了一半停住，或者跨边界执行
- Better pattern: 先定义输入/输出，再执行

### 3. Review mode (quality control)

- Best for: 代码审查、文档修订、来源筛选
- Risk: 只给意见不落地
- Better pattern: 要求“结论 + 证据 + 下一步动作”

### 4. Workflow mode (repeatable operations)

- Official source: <https://docs.openclaw.ai/prose>
- Best for: 高频重复任务
- Risk: 依赖个人习惯，无法复现
- Better pattern: 固化成 playbook 或 prose program

## Channel-Aware Interaction

- Official source: <https://docs.openclaw.ai/channels/index>
- Official source: <https://docs.openclaw.ai/web/webchat>

同一任务在不同入口的交互方式不应完全一样：

- Web: 适合长上下文、结构化输出、复盘
- Chat channels: 适合触发和状态更新，不适合承载全部复杂推理细节

默认建议：在渠道里触发，在可审阅环境里沉淀结果。

## A Reusable Prompt Contract

每个高价值任务都可以套这个最小契约：

1. Goal: 你要完成什么
2. Inputs: 你可以使用什么
3. Constraints: 不能做什么
4. Output format: 必须输出什么结构
5. Done criteria: 什么算完成

## Common Interaction Mistakes

- 目标不清晰，输入一股脑丢进去
- 不指定输出结构，结果无法复用
- 在高风险任务里不给边界约束
- 把一次成功当成可长期复现
- 出错后没有 fallback 交互路径

## Interaction Quality Checklist

每次重要任务开始前看这 5 条：

1. 目标是否一句话说清
2. 输入是否完整且最小化
3. 输出格式是否固定
4. 失败后是否有兜底路径
5. 结果是否能直接进入下一步流程

## Read Next

1. [How To Choose APIs And Models](api-selection.md)
2. [Build Your First Playbook](../cookbook/first-playbook.md)
3. [For Agents / Output Contracts](../for-agents/output-contracts.md)
4. [For Humans / Interaction Patterns](../for-humans/interaction-patterns.md)

## Primary Sources

- [OpenProse](https://docs.openclaw.ai/prose)
- [Chat Channels](https://docs.openclaw.ai/channels/index)
- [WebChat](https://docs.openclaw.ai/web/webchat)
- [Gateway Security](https://docs.openclaw.ai/gateway/security)
