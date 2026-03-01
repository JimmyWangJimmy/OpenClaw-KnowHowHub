# Content Map

Status: Draft
Last Updated: 2026-03-01
Source: repository design

## Goal

这份内容地图定义仓库里的知识应该放在哪里，以及同一知识如何同时服务 humans 和 agents。

## Top-Level Model

### `for-humans/`

面向解释、理解、决策和上手。

### `for-agents/`

面向规则、执行、输出契约和演化输入。

### `playbooks/`

面向场景执行。

### `skills/`

面向能力组织和技能生态。

### Existing layers to preserve

- `guides/`: 任务型页面
- `reference/`: 查阅型页面
- `research/`: 归档、历史、实验和证据
- `community/`: 生态入口

## Dual-Writing Rule

同一主题如果同时服务 humans 和 agents，应优先拆成两种写法：

- Human version: 解释、取舍、案例、建议
- Agent version: 规则、步骤、输入输出、失败恢复

## Example Mapping

### Best practices

- Human side: `for-humans/best-practices.md`
- Agent side: `for-agents/execution-rules.md`

### Configuration

- Human side: `for-humans/configuration-strategy.md`
- Agent side: `for-agents/output-contracts.md`

### Real task execution

- Playbook side: `playbooks/`
- Skill side: `skills/`
