# Failure Recovery

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

定义 agent 遇到失败时该如何恢复。

## Typical Recovery Path

### 1. Classify the failure first

- Typical classes:
  - 来源不足
  - 网络失败
  - 权限或范围不足
  - 结构冲突
  - 任务定义不清

### 2. For security-sensitive failures, contain before retrying

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方安全文档提供了 incident response 的基本顺序：contain, rotate, audit, collect。
- Rule: 如果问题涉及 secrets、插件、远程暴露或高权限工具，先收缩暴露面，再重试。

### 3. For workflow failures, reduce scope and retry locally

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenProse 的设计说明本身偏向分阶段和可重复执行，因此恢复时也应先缩小范围、拆小步骤，而不是整段重跑。

### 4. For memory failures, persist to files

- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Rule: 如果失败来自上下文漂移、阶段信息丢失或历史决策不可见，优先把状态写回文件。

### 5. When evidence is incomplete, mark uncertainty explicitly

- Official source: <https://docs.openclaw.ai/gateway/security>
- Rule: 不要用猜测伪装成恢复。应明确记录什么已知、什么未知、下一步需要什么证据。

## Minimal Recovery Loop

1. 分类失败类型
2. 判断是否涉及安全或权限边界
3. 缩小任务范围
4. 把关键状态写入文件
5. 在更小范围内重试
