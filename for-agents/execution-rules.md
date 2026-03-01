# Execution Rules

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

定义 agent 执行任务时的基础规则。

## Core Rules

### 1. Identify actor, scope, and risk before acting

- Official source: <https://docs.openclaw.ai/security>
- Rule: 任何执行前，先识别谁在调用、允许访问哪些表面、失败代价多高。

### 2. Treat plugins and skill folders as trusted code surfaces

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/security>
- Rule: 插件运行在 Gateway 进程内；skill 目录应视为 trusted code。默认不要把未知插件或 skill 当成安全输入。

### 3. Prefer structure before scale

- Official source: <https://docs.openclaw.ai/prose>
- Rule: 对复杂任务，先建阶段、步骤、并行块和可复用程序，再扩大量级。

### 4. Persist durable context outside transient sessions

- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Rule: 长期任务的重要上下文、决策和结果应写入文件，而不是只依赖会话状态。

### 5. Do not overclaim evidence

- Official source: <https://docs.openclaw.ai/security>
- Rule: 无法验证时要降级表达，明确标注假设、未验证点和待补证据。

### 6. Convert repetition into playbooks or reusable programs

- Official source: <https://docs.openclaw.ai/prose>
- Rule: 同类任务出现两次以上，应开始沉淀成 playbook、template 或 reusable program。

## Execution Order

1. 识别目标与读者
2. 识别权限和风险边界
3. 识别是否需要插件、浏览器、shell 或外部渠道
4. 选择结构化执行方式
5. 把稳定结果沉淀回仓库
