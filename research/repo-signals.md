# Repository Signals

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

这页记录 OpenClaw 官方 GitHub 仓库本身释放出的高价值信号。相比单纯看 stars，这一层更适合判断项目现在真正处在哪个阶段。

## Official Repository Snapshot

### OpenClaw Repository

- Link: <https://github.com/openclaw/openclaw>
- Why it matters: 官方仓库不只是代码源，也是 issue、PR、release 和真实维护负荷的集中入口。
- Signal as of 2026-03-01: issues 页面显示约 `243k` stars、`27.7k` forks、`1.9k` issues、`2.1k` pull requests、`5` security entries。

## What The Issue Stream Currently Signals

### Operational friction is real

- Official source: <https://github.com/openclaw/openclaw/issues>
- Recent examples visible on 2026-03-01:
  - cron scheduler timer never fires
  - Telegram intermittent out-of-order delivery
  - compaction summaries hitting context limits
  - reminders set for wrong times
  - web fetch timeout requests
- What it means: OpenClaw 已经不是“没人用所以很干净”的阶段，而是进入了真实复杂使用场景快速暴露摩擦点的阶段。

### Channels and delivery are a major pressure surface

- Official source: <https://docs.openclaw.ai/channels/index>
- Official source: <https://github.com/openclaw/openclaw/issues>
- What it means: 官方 docs 强调多渠道是核心价值，而 issue 流也反复出现 Telegram、WhatsApp、delivery、ordering、filename 之类问题。这说明 channel layer 是产品价值来源，也是维护压力来源。

### Memory and context management are still moving targets

- Official source: <https://github.com/openclaw/openclaw/issues>
- What it means: issue 列表里能看到 compaction summaries、dirty flag、session status 等主题，说明长任务与 memory ergonomics 仍然是重要痛点。

### Scheduling and timing are high-value, high-risk features

- Official source: <https://github.com/openclaw/openclaw/issues>
- What it means: cron timers、reminders、time awareness 这些问题说明“自动化”是 OpenClaw 的强吸引力之一，但也是信任最容易出问题的区域之一。

## How This Repository Should Use Repo Signals

### For documentation priorities

- 优先写 channel troubleshooting
- 优先写 memory / compaction 相关最佳实践
- 优先写 scheduling / reminders 的风险提醒

### For product interpretation

- 不把高 star 数误解成“已经稳定”
- 不把 issue 多误解成“项目不行”
- 把 issue 流看作真实采用率和复杂度上升的证据

## Best Companion Sources

- [OpenClaw Docs](https://docs.openclaw.ai/)
- [OpenClaw Channels](https://docs.openclaw.ai/channels/index)
- [OpenClaw Releases](https://github.com/openclaw/openclaw/releases)
- [Source Landscape](../reference/source-landscape.md)
- [Source Intelligence](source-intelligence.md)
