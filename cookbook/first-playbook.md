# Build Your First Playbook

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Goal

帮助用户把第一次重复任务沉淀成 playbook。

## When You Should Write A Playbook

满足任意两条就应该写：

- 这件事一周会做两次以上
- 每次都在重复同样步骤
- 结果质量依赖“有没有记得某一步”
- 团队里不止一个人会做这件事

## What A Good First Playbook Looks Like

一个好的第一版不求复杂，但必须有这 5 部分：

1. Trigger: 什么时候启动
2. Inputs: 需要哪些输入
3. Steps: 固定执行步骤
4. Output contract: 输出要长什么样
5. Failure path: 失败时怎么处理

## The 30-Minute Template

### Step 1: Pick one narrow task

选择一个“边界清楚、能在 10 到 30 分钟完成”的任务，例如：

- issue triage
- release note draft
- weekly signal digest
- source quality check

### Step 2: Define input and output first

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: 如果输入输出不明确，步骤再多也不稳定。

最低要求：

- 输入来源（链接、文件、issue 列表）
- 输出格式（要点、表格、行动项）
- 完成标准（什么叫 done）

### Step 3: Write fixed steps with explicit order

每一步都用动词开头：

1. Gather
2. Filter
3. Analyze
4. Synthesize
5. Deliver

避免写“根据情况处理”这类模糊步骤。

### Step 4: Add one failure branch

至少定义一个失败分支：

- source unavailable
- permission denied
- output quality below threshold

并写清楚 fallback：重试、降级、还是人工接管。

### Step 5: Run twice and revise once

第一次运行看是否可执行，第二次运行看是否可复现。  
两次都能跑通，再改一轮文案和顺序，就能进入可复用状态。

## First Playbook Skeleton

```md
# Playbook: <task name>

## Trigger
- <when to run>

## Inputs
- <input 1>
- <input 2>

## Steps
1. <step 1>
2. <step 2>
3. <step 3>

## Output Contract
- Format: <markdown/table/json>
- Must include: <required sections>

## Failure Path
- If <condition>: <fallback action>
```

## Quality Checklist

发布前过一遍：

1. 新人能不能不问问题就跑一遍
2. 输出格式是否固定
3. 失败分支是否存在
4. 是否能在合理时间内完成
5. 是否有明显权限或安全风险

## Common Mistakes

- 第一个 playbook 就想覆盖所有情况
- 不写 output contract，只写“给个总结”
- 只写 happy path，不写失败路径
- 不复盘运行结果就直接投入常规使用

## Read Next

- [Playbooks](../playbooks/README.md)
- [OpenProse](https://docs.openclaw.ai/prose)
- [For Agents / Output Contracts](../for-agents/output-contracts.md)
- [For Agents / Failure Recovery](../for-agents/failure-recovery.md)
- [Best Practices](../red-book/best-practices.md)

## Primary Sources

- [OpenProse](https://docs.openclaw.ai/prose)
- [Architecture](https://docs.openclaw.ai/concepts/architecture)
