# Source Landscape

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页定义这个仓库当前最值得信任、最值得持续跟踪的 OpenClaw 来源面。它的目的不是列尽所有链接，而是把“哪些来源优先读、哪些来源适合补充、哪些来源更适合当风险信号”讲清楚。

## Tier 1: Official Sources

### OpenClaw Docs

- Link: <https://docs.openclaw.ai/>
- Why it matters: 这是当前最核心的一手来源。官方文档明确覆盖了产品定位、安装、架构、channels、Gateway、安全、plugins、OpenProse 和参考资料。
- Best for: 任何需要可信默认答案的主题

### OpenClaw GitHub Repository

- Link: <https://github.com/openclaw/openclaw>
- Why it matters: 官方源码仓库当前显示约 `243k` stars、`46.9k` forks、`4.5k` issues、`5k+` pull requests，说明它既是代码来源，也是高信号社区活动面。
- Best for: 研究实现、判断项目活跃度、跟踪源码和讨论密度

### OpenClaw GitHub Releases

- Link: <https://github.com/openclaw/openclaw/releases>
- Why it matters: 适合跟踪版本节奏和最近变动，不必只依赖二手解读。
- Best for: 判断版本新鲜度、升级和兼容性关注点

## Tier 2: High-Signal Community Sources

### OpenClaw Skills Directory

- Link: <https://openclawskills.io/>
- Why it matters: 首页明确把自己定位成 “The Largest Library of OpenClaw Skills”，并提供社区技能浏览和安装入口。对于理解 OpenClaw 的技能生态，这已经是高信号入口。
- Best for: 观察技能生态、发现高频能力类别、理解安装分发方式

### r/openclaw

- Link: <https://www.reddit.com/r/openclaw/>
- Why it matters: 当前 Reddit 社区已经形成相对稳定的问题、经验和踩坑交流层。对“实际怎么用”这类问题，社区往往比官方更快暴露真实摩擦点。
- Best for: 日常工作流、常见失败模式、社区偏好

### Best Practices Thread

- Link: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 这是目前我看到的高信号经验帖之一，内容集中在 skills 风险、文件化记忆、model routing、cron 和长期工作流，评论里也有不少实战反馈。
- Best for: 补足“官方原则”之外的操作经验

## Tier 3: Risk And Security Signal Sources

### Gateway Security Docs

- Link: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 这是安全主题的官方基线，不应被任何二手经验替代。
- Best for: 权限边界、trusted surfaces、incident response、hardening baseline

### Plugin Docs

- Link: <https://docs.openclaw.ai/tools/plugin>
- Why it matters: 任何有关 plugin / skill 的讨论都应回到这里确认 trust boundary，而不是只看社区推荐。
- Best for: 判断插件是不是“只是功能扩展”还是“安全执行面”

### OpenClaw Skills / Skills Directory

- Link: <https://openclawskills.io/skills>
- Why it matters: 目录页当前展示了大量社区技能和安装命令，这让它既是生态信号源，也是潜在风险面。它很有价值，但绝不能绕过官方 plugin / security 文档单独使用。
- Best for: 技能发现、生态观察、风险审查对象

### Cybersecurity Discussion On Malicious Skills

- Link: <https://www.reddit.com/r/cybersecurity/comments/1r9cuew/the_1_most_downloaded_skill_on_openclaw/>
- Why it matters: 这类讨论不能替代官方安全文档，但能作为风险信号层，提醒下载量和热度不能当安全信号。
- Best for: 风险教育、技能市场审慎原则

## How To Use These Sources

### For product truth

优先看官方 docs 和官方 GitHub。

### For day-to-day operator lessons

优先看高信号 Reddit 讨论，再回官方文档交叉验证。

### For safety decisions

先看官方 security / plugin docs，再看社区案例当补充，而不是反过来。

## Repository Policy

这个仓库后续写作应尽量遵守：

1. 官方来源先行
2. 社区经验用于补充，不用于替代
3. 风险案例用于提醒，不用于制造耸动结论
