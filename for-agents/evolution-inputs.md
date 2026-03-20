# Evolution Inputs

Status: Verified
Last Updated: 2026-03-21
Source: repository design

## Goal

说明什么材料值得被沉淀为 OpenClaw 的自我进化输入。

## High-Value Inputs

- 高质量任务复盘
- 成功工作流
- 失败案例与修复方式
- 新技能与技能组合模式
- 高价值来源和长期有效约束

## Input Quality Standard

一个输入要进入演化层，至少满足：

1. 可复现：别人能按描述复跑
2. 可验证：有来源或运行证据
3. 可迁移：不只适用于一次性场景
4. 可边界化：明确适用条件和禁用条件

## Recommended Input Template

1. Context: 背景与触发条件
2. Action: 执行步骤或规则
3. Outcome: 结果与指标
4. Failure mode: 失败方式
5. Guardrail: 边界和风险控制

## Anti-Patterns

- 只记录“成功故事”，不记录失败与恢复
- 只记录结论，不记录触发条件
- 把一次性技巧当长期规则
- 没有来源支撑就沉淀为默认策略
