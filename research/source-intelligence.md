# Source Intelligence

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

这页不是单纯列来源，而是记录当前 OpenClaw 来源生态里最值得持续监控的高信号信息流。

## Product Truth Signals

### Official Docs

- Link: <https://docs.openclaw.ai/>
- Why monitor it: 产品定位、架构、channels、Gateway、安全、plugins、OpenProse 都以这里为准。

### Official GitHub Repository

- Link: <https://github.com/openclaw/openclaw>
- Why monitor it: 它不仅是代码源，也是 issue、PR、release 和实际维护节奏的集中信号面。

### Official Releases

- Link: <https://github.com/openclaw/openclaw/releases>
- Why monitor it: 适合判断版本节奏、升级频率和兼容性变化。

## Operator Signals

### OpenClaw Skills Directory

- Link: <https://openclawskills.io/>
- Why monitor it: 技能目录会暴露社区最活跃的能力面和安装分发习惯，是技能生态的重要温度计。

### Best Practices Thread

- Link: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why monitor it: 这是目前高信号操作经验帖之一，覆盖 skills、memory、model routing、cron 和长期工作流。

### Security-First Hosting Discussion

- Link: <https://www.reddit.com/r/openclaw/comments/1qy93sy/i_built_an_easy_way_to_deploy_openclaw_bots_with/>
- Why monitor it: 虽然属于产品推广型帖子，但评论区和正文暴露了一个真实问题：很多用户对“如何安全部署 OpenClaw”有强需求。

### Secure Setup Checklist

- Link: <https://www.reddit.com/r/AskClaw/comments/1rh9k0j/steps_secure_your_openclaw_setup/>
- Why monitor it: 这类高互动 checklist 帖子能快速暴露社区普遍接受的 hardening 习惯，例如独立机器、非 root、Tailscale、SSH keys 等。

## Risk Signals

### Official Gateway Security

- Link: <https://docs.openclaw.ai/gateway/security>
- Why monitor it: 安全主题必须回到官方基线。

### Official Plugin Docs

- Link: <https://docs.openclaw.ai/tools/plugin>
- Why monitor it: 插件和 skills 的 trust boundary 在这里最明确。

### OpenClaw Skills Directory

- Link: <https://openclawskills.io/skills>
- Why monitor it: 技能目录不是风险文档，但它暴露了大量可安装技能和安装命令，因此也应被视为安全观察面，而不是纯发现页。

### Malicious Skill Discussion

- Link: <https://www.reddit.com/r/cybersecurity/comments/1r9cuew/the_1_most_downloaded_skill_on_openclaw/>
- Why monitor it: 这类讨论能提醒我们“下载量”和“热门程度”不是安全信号。

### OpenClaw Security Testing Discussion

- Link: <https://www.reddit.com/r/LocalLLaMA/comments/1qxkiy0/openclaw_security_testing_80_hijacking_success_on/>
- Why monitor it: 它反映了一个重要现实：即使 hardening 做得不错，agent 仍然需要持续安全测试。

## Repository Use

后续这个仓库如果继续扩写，应优先从这些信号面里找：

1. 官方新节点
2. 高讨论度操作经验
3. 安全风险案例
4. 版本与 issue 节奏变化
