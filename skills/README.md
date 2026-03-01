# Skills

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

这一层用于整理 OpenClaw 技能生态，而不是只列出零散技能名。

## This Layer Should Cover

- 技能分类
- 技能质量标准
- 技能编写规范
- 技能组合方式
- 推荐技能栈

## Why This Layer Matters

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Community source: <https://www.reddit.com/r/cybersecurity/comments/1r9cuew/the_1_most_downloaded_skill_on_openclaw/>
- Why it matters: 官方已经明确把插件和 skill 目录视为 trusted code surfaces；高讨论度社区案例也表明 marketplace 下载量不能当作安全信号。

## Core Skill Rules

- 优先自写 skill，而不是盲装热门 skill
- 无脚本、零依赖 skill 默认更安全
- 带 `scripts/` 的 skill 必须逐行审查
- 技能说明要写清触发条件、工具依赖和信任边界

## What This Repository Should Eventually Add

- 技能分类法
- 最小安全标准
- 推荐 skill stack
- skill 评估清单
- human-readable + agent-readable 双版本规范
