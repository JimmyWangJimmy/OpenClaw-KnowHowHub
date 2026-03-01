# Best Practices

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

面向人类总结使用 OpenClaw 时最值得优先建立的习惯。这里优先采用官方文档能支持的做法，再用高讨论度社区经验补足日常操作层面的细节。

## Core Practices

### 1. Access control before intelligence

- Official source: <https://docs.openclaw.ai/security>
- Why it matters: 官方安全文档明确强调顺序应当是 `identity first`, `scope next`, `model last`。也就是先决定谁能接触 agent、agent 能动哪里，再谈模型有多聪明。
- Practical takeaway: 不要先把 bot 暴露出去，再回头补权限。

### 2. Treat plugins and skills as trusted code unless proven otherwise

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/security>
- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 官方文档明确写了 `Plugins run in-process with the Gateway`，并提醒把 skill folders 当作 trusted code。高票社区经验也把“不要乱装 ClawHub skills”列为第一条。
- Practical takeaway: 能自己写的 skill 就自己写；第三方 skill 如果带脚本，先逐行审。

### 3. Run the security audit regularly

- Official source: <https://docs.openclaw.ai/security>
- Why it matters: 官方已经给出 `openclaw security audit`、`--deep` 和 `--fix`，并明确指出它会检查 Gateway auth 暴露、browser control 暴露、权限过宽和敏感信息日志等常见问题。
- Practical takeaway: 每次改配置、加插件、开放新渠道后都跑一次。

### 4. Prefer clear task framing over vague prompting

- Supporting source: <https://docs.openclaw.ai/prose>
- Why it matters: OpenProse 的价值就在于把复杂任务变成显式流程、并行研究和可重复程序。这个方向说明 OpenClaw 更适合清晰流程，而不是模糊聊天。
- Practical takeaway: 先定义目标、交付物和限制，再让 agent 行动。

### 5. Write durable context to files, not just session memory

- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 高票实践总结明确把“Write Everything to Files”列为日常使用的关键经验，因为 session memory 会压缩或丢失。
- Practical takeaway: 重要上下文、阶段结果、约束和决定，要落到文件里。

## Common Failures

- 把 OpenClaw 当成万能聊天机器人
- 先开放访问和权限，再回头补安全边界
- 安装来源不清楚的技能或插件
- 没有输入边界，却期待稳定输出
- 让它同时追多个目标，结果信息结构崩掉

## Recommended First Moves

1. 先建立访问控制和最小权限
2. 跑一次 `openclaw security audit`
3. 只启用自己理解的插件和技能
4. 用文件沉淀长期上下文
5. 把重复流程整理成 playbook 或 skill
