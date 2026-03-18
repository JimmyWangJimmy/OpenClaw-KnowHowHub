# Source Landscape

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Goal

本页定义这个仓库当前最值得信任、最值得持续跟踪的 OpenClaw 来源面。它的目的不是列尽所有链接，而是把“哪些来源优先读、哪些来源适合补充、哪些来源更适合当风险信号”讲清楚。

## Tier 1: Official Sources

### OpenClaw Docs

- Link: <https://docs.openclaw.ai/>
- Why it matters: 这是当前最核心的一手来源。官方文档明确覆盖了产品定位、安装、架构、channels、Gateway、安全、plugins、OpenProse 和参考资料。
- Best for: 任何需要可信默认答案的主题

### Docs Hubs

- Link: <https://docs.openclaw.ai/start/hubs>
- Why it matters: 这是官方的“文档导航总入口”，覆盖了很多左侧导航不显式展示的 deep dive 页面。
- Best for: 系统化找资料，而不是靠站内搜索碰运气

### Gateway Network Model

- Link: <https://docs.openclaw.ai/gateway/network-model>
- Why it matters: 官方把 Gateway 作为唯一长期进程和控制平面来定义，这页是理解网络拓扑和远程访问的关键节点。
- Best for: 部署架构、远程接入、节点连接模型

### WebChat

- Link: <https://docs.openclaw.ai/web/webchat>
- Why it matters: WebChat 行为说明非常具体，包含 gateway auth、history truncation、tool catalog、remote mode 等真实运行细节。
- Best for: UI 行为理解、运维排障、权限与可见性边界

### OpenClaw GitHub Repository

- Link: <https://github.com/openclaw/openclaw>
- Why it matters: 官方源码仓库不仅是代码源，也是 issue、PR、release 和安全公告的集中信号面。仓库快照应按“采集日期”记录，避免长期写死数字。
- Best for: 研究实现、判断项目活跃度、跟踪源码和讨论密度

### OpenClaw GitHub Releases

- Link: <https://github.com/openclaw/openclaw/releases>
- Why it matters: 适合跟踪版本节奏和最近变动，不必只依赖二手解读。
- Best for: 判断版本新鲜度、升级和兼容性关注点

## Tier 2: High-Signal Community Sources

### OpenClaw Skills Directory

- Link: <https://openclawskills.io/>
- Why it matters: 目录页持续更新，并明确作为 skills 发现与安装入口。对理解生态很有价值，但不能替代官方插件与安全文档。
- Best for: 观察技能生态、发现高频能力类别、理解安装分发方式

### Moltbook

- Link: <https://www.moltbook.com/>
- Why it matters: 这是 agent-native 分发与社交入口；首页明确提供 `skill.md` 引导给 agent 加入网络。
- Best for: 观察 agent identity、分发行为和社区活动形态

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
4. 所有“数字型信号”必须带采集日期，避免长期失真
