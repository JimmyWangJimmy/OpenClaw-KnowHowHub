# Troubleshooting

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

如果 Captain Claw 在现代系统上运行不正常，这一页给出当前最值得优先尝试的排障路径。

## Best Primary Source

### The Claw Recluse Technical Support

- Link: <https://captainclaw.net/en/support.html>
- Why it matters: 这是当前最完整、最贴近现代系统环境的公开支持页，覆盖启动失败、性能问题、0xc0000022、跳跃异常、电梯速度、存档丢失、背景音乐、截图、过场动画、WASD、旧版本兼容以及 Linux/macOS 建议。
- Verified on: 2026-03-01

## Recommended Triage Order

### 1. Confirm You Are Using The Current Community Package

- Downloads: <https://captainclaw.net/en/downloads.html>
- Why first: 下载页明确把 `Claw v1.4.5.4 'CrazyHook'` 作为默认推荐版本，并说明它包含 `cnc-ddraw`，用于修复现代系统上的帧率和兼容性问题。

### 2. Check Whether Your Problem Matches A Known Category

常见问题通常落在这些类别里：

- 游戏无法启动或性能极差
- 启动时报错 `0xc0000022`
- 跳跃或移动手感异常
- 电梯移动过慢
- 存档或进度丢失
- 没有背景音乐
- 想加过场动画
- 想用 WASD
- 想运行旧版或无 CrazyHook 版本
- Linux/macOS 运行支持

### 3. Only After That, Try Manual Workarounds

不要一开始就随便改兼容模式、复制旧 DLL、或者下载来源不明的补丁。先比对支持页里的已知解法。

## High-Value Fixes

### Launch Or Performance Problems

- Primary source: <https://captainclaw.net/en/support.html>
- Recommended action: 优先改用当前 `v1.4.5.4` 社区包，它已内置 `cnc-ddraw`，并且无需安装。

### Want WASD Controls

- Primary source: <https://captainclaw.net/en/support.html>
- Recommended action: 支持页说明截至 2025 年，CrazyHook 已可直接在游戏设置中配置该功能；旧版本才需要 Lua 或 AutoHotkey 方案。

### Old Version Problems

- Primary source: <https://captainclaw.net/en/support.html>
- Recommended action: 如果你坚持使用早年的 CD/DVD/RealArcade 版本，很多问题本来就来自这些版本过旧。优先切换到当前社区包，而不是在旧版本上硬修。

### Linux Or macOS

- Primary source: <https://captainclaw.net/en/support.html>
- Recommended action: 支持页说明 Linux 和 macOS 都不是官方支持平台，但仍有可行路径。Linux 优先看 Lutris 路线；macOS 可尝试社区提供的 CrazyHook App。

## When To Ask The Community

如果你已经：

1. 确认在用当前社区包
2. 对照支持页检查了同类问题
3. 仍然无法解决

那时再去社区入口求助效率最高：

- [Community Hubs](../community/community-hubs.md)
- [External Links](../community/links.md)

## Related Pages

- [Install And Run](install-and-run.md)
- [Learning Resources](learning-resources.md)
- [Community Hubs](../community/community-hubs.md)
