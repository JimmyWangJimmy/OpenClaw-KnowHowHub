# Failure Recovery

Status: Draft
Last Updated: 2026-03-01
Source: repository design

## Goal

定义 agent 遇到失败时该如何恢复。

## Typical Recovery Path

- 识别失败类型：来源不足 / 网络失败 / 结构冲突 / 任务定义不清
- 尽量先局部修复，而不是推倒重来
- 不能验证时明确标注，而不是强行下结论
