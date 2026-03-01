# Interaction Patterns

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

解释人类如何与 OpenClaw 高效交互。这里优先使用官方产品定位和安全边界，再结合社区高互动经验总结什么样的协作方式更稳定。

## Good Patterns

### 1. Start with the outcome, not the tool

- Official source: <https://docs.openclaw.ai/index>
- Why it matters: 官方首页把 OpenClaw 描述为一个 multi-channel gateway 和 runtime，所以更好的交互方式不是“你会什么”，而是“我要完成什么”。
- Practical pattern: 先说目标、交付物和限制，再决定是否需要 shell、browser、Slack、Telegram 或插件。

### 2. Use channels for reach, use files for memory

- Official source: <https://docs.openclaw.ai/index>
- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 官方强调它能接入 Slack、Discord、Telegram、GitHub、email 等渠道，但高票社区经验明确指出长期上下文不要只留在会话里，应写入文件。
- Practical pattern: 用聊天渠道触发、通知和协作；用文件保存长期目标、约束、阶段结果和 decisions。

### 3. Give enough scope to act, but not unlimited authority

- Official source: <https://docs.openclaw.ai/security>
- Why it matters: 官方安全文档强调顺序应是 identity, scope, model。好的交互不是完全放手，而是给明确权限边界。
- Practical pattern: 说清它能读什么、能改什么、不能碰什么。

### 4. Prefer iterative execution over giant one-shot prompts

- Official source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenProse 的官方定位就是把复杂任务变成分阶段、可重复、可并行的执行流程。
- Practical pattern: 先让它完成一个清晰子目标，再继续下一段，而不是一次要求一个模糊的大而全结果。

### 5. Turn repeated interactions into playbooks

- Official source: <https://docs.openclaw.ai/prose>
- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 官方强调 reusable programs，社区经验强调 templates 和 file-based workflows。两边的共同结论都是：重复任务应该产品化。
- Practical pattern: 当某个流程做到第二次，就开始考虑写成 playbook、skill 或固定模板。

## Anti-Patterns

- 把 OpenClaw 当作纯聊天窗口，而不是执行系统
- 只靠会话记忆保存长期上下文
- 一次扔进太多目标、格式和限制
- 权限和边界不清楚，就要求它直接动手

## A Good Default Interaction Loop

1. 定义目标
2. 说明限制和边界
3. 指定期望输出
4. 让 agent 先做第一阶段
5. 把稳定流程沉淀成文件、playbook 或 skill
