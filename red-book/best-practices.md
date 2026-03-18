# Best Practices

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Goal

给 OpenClaw 用户一组可以长期复用的默认做法，减少“能跑但不稳”的情况。

## The One-Sentence Rule

先把边界和流程设计清楚，再追求能力和速度。

## Core Practices

### 1. Start with an operating model, not with tools

- Official source: <https://docs.openclaw.ai/concepts/architecture>
- Why it matters: OpenClaw 是 gateway-centered system。先定义系统如何运行，再谈接什么渠道、装什么 skill。

### 2. Access control before intelligence

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 默认先管“谁能接触系统”，再管“系统能做什么”。

### 3. Keep channels minimal in the first phase

- Official source: <https://docs.openclaw.ai/channels/index>
- Why it matters: 渠道越多，排障和治理面越大。第一阶段一个渠道就够。

### 4. Treat plugins and skills as trust decisions

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Why it matters: 插件和技能不是“装饰层”，而是执行面的一部分。

### 5. Build repeatable workflows, not heroic prompting

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: 能重复执行、能审查、能回滚的流程，才适合长期系统。

### 6. Optimize after the baseline is stable

- Official source: <https://docs.openclaw.ai/start/getting-started>
- Why it matters: 先稳定，再优化 provider、模型、并发和自动化。

## A Practical 3-Phase Model

| Phase | Focus | Success signal |
| --- | --- | --- |
| Phase 1: Baseline | 跑通最小路径 + 安全边界 | 单渠道稳定、权限清晰 |
| Phase 2: Reliability | 固化流程 + 减少人工随机操作 | 重复任务可复现 |
| Phase 3: Scale | 增加渠道/skills/playbooks | 扩展后仍可控 |

## Anti-Patterns To Avoid

- 一开始追求“全渠道 + 全技能”
- 把 OpenClaw 当成单次聊天工具
- 还没建立 trust boundary 就多人共享
- 只调模型参数，不做流程沉淀
- 出问题后没有回滚路径

## Weekly Review Checklist

每周复盘一次这 6 项：

1. 我们的访问边界还清晰吗
2. 新增了哪些暴露面
3. 新装的 skill/plugin 是否经过审查
4. 哪些任务可以固化成 playbook
5. 哪些失败可以被标准化处理
6. 下一周要删掉哪些“临时 workaround”

## Read Next

1. [Security First](security-first.md)
2. [How To Think About Configuration](configuration.md)
3. [Build Your First Playbook](../cookbook/first-playbook.md)
4. [For Humans / Best Practices](../for-humans/best-practices.md)

## Primary Sources

- [OpenClaw Docs](https://docs.openclaw.ai/)
- [Architecture](https://docs.openclaw.ai/concepts/architecture)
- [Gateway Security](https://docs.openclaw.ai/gateway/security)
- [Channels](https://docs.openclaw.ai/channels/index)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
- [OpenProse](https://docs.openclaw.ai/prose)
