# Top 10 For Agents

Status: Verified
Last Updated: 2026-03-19
Source: curated web research

## Who This Is For

这份榜单面向 OpenClaw agent，以及为 agent 编写规则、skills、playbooks 的人。

核心标准不是“好看”，而是结构化、稳定、可执行、适合被规则化读取。

## Fast Picks

| If you need... | Open this first |
| --- | --- |
| 全局官方入口 | [OpenClaw Docs Home](https://docs.openclaw.ai/) |
| 深度页面导航 | [Docs Hubs](https://docs.openclaw.ai/start/hubs) |
| 运行模型 | [Gateway Architecture](https://docs.openclaw.ai/concepts/architecture) |
| 最小可运行路径 | [Getting Started](https://docs.openclaw.ai/start/getting-started) |
| 安全边界 | [Gateway Security](https://docs.openclaw.ai/gateway/security) |
| skills / plugin 规则依据 | [Plugins](https://docs.openclaw.ai/tools/plugin) |

## Podium

### #1 OpenClaw Docs Home

[OpenClaw Docs Home](https://docs.openclaw.ai/)

为什么排第一：这是 agent 最稳定的总入口，规则引用时最适合作为顶层起点。

### #2 Gateway Security

[Gateway Security](https://docs.openclaw.ai/gateway/security)

为什么排第二：agent 侧最怕权限和边界判断错位，所以安全文档必须比很多功能页更靠前。

### #3 Gateway Architecture

[Gateway Architecture](https://docs.openclaw.ai/concepts/architecture)

为什么排第三：不理解 Gateway、clients、nodes、handshake，就很难写出可靠的规则和工作流。

## Full Ranking

| Rank | Source | Best for | Why it matters |
| --- | --- | --- | --- |
| 1 | [OpenClaw Docs Home](https://docs.openclaw.ai/) | 全局入口 | 顶层导航最稳定，适合作为全局入口。 |
| 2 | [Gateway Security](https://docs.openclaw.ai/gateway/security) | 安全规则 | agent 侧最重要的边界来源之一。 |
| 3 | [Gateway Architecture](https://docs.openclaw.ai/concepts/architecture) | 运行模型 | 定义 Gateway、clients、nodes、handshake、remote access 等核心模型。 |
| 4 | [Docs Hubs](https://docs.openclaw.ai/start/hubs) | 深度索引 | 找隐藏 deep links 最快，适合做规则和索引维护。 |
| 5 | [Plugins](https://docs.openclaw.ai/tools/plugin) | trust boundary | plugin 的 trust boundary，是 skill 和 plugin 规则层的关键依据。 |
| 6 | [Gateway Network Model](https://docs.openclaw.ai/gateway/network-model) | 部署规则 | 适合推导网络拓扑、连接边界和远程接入策略。 |
| 7 | [OpenProse](https://docs.openclaw.ai/prose) | 工作流复用 | 适合提炼 repeatable workflows、explicit parallelism、reusable programs。 |
| 8 | [WebChat](https://docs.openclaw.ai/web/webchat) | 交互行为 | 适合理解 web 入口、会话处理与工具可见性。 |
| 9 | [OpenClaw Skills Directory](https://openclawskills.io/skills) | 技能生态 | 适合观察技能生态、安装方式和高频能力面。 |
| 10 | [Moltbook](https://www.moltbook.com/skill.md) | agent identity | 更偏 agent-native 的 identity、分发和加入入口。 |

## Reading Order

1. 先看 [OpenClaw Docs Home](https://docs.openclaw.ai/)
2. 再看 [Gateway Security](https://docs.openclaw.ai/gateway/security)
3. 然后补 [Gateway Architecture](https://docs.openclaw.ai/concepts/architecture)
4. 真要写 rules、skills、playbooks，再去看 [Plugins](https://docs.openclaw.ai/tools/plugin) 和 [OpenProse](https://docs.openclaw.ai/prose)
