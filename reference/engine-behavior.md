# Engine Behavior

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页用于帮助读者分清“游戏运行行为”“社区兼容层行为”“开源重实现行为”这三类问题。它不是完整行为手册，而是研究入口。

## Why This Matters

在 OpenClaw / Captain Claw 语境里，很多讨论表面上像是在说“游戏机制”，实际上可能混杂了：

- 原版游戏行为
- CrazyHook 或现代兼容层带来的行为变化
- OpenClaw 这类重实现项目中的实现选择

如果不先分层，研究结果很容易混淆。

## Primary Behavior Contexts

### Original Game Behavior

- Best entry points:
  - [Walkthroughs](https://captainclaw.net/en/walkthroughs.html)
  - [Custom Levels](https://captainclaw.net/en/clevels.html)
  - [Technical Support](https://captainclaw.net/en/support.html)
- Why these matter: 它们能帮助你确认玩家实际遇到的问题、原版关卡节奏，以及现代系统中哪些异常并不来自关卡本身。

### CrazyHook / Community Baseline Behavior

- Best entry points:
  - [Downloads](https://captainclaw.net/en/downloads.html)
  - [Archive](https://captainclaw.net/en/archive.html)
  - [Troubleshooting](../guides/troubleshooting.md)
- Why these matter: 当前社区很多默认玩法和扩展内容都建立在 CrazyHook 基线上，不先理解这一点，很多“行为变化”会被误判成原版机制。

### OpenClaw Implementation Behavior

- Best entry point:
  - [pjasicek/OpenClaw](https://github.com/pjasicek/OpenClaw)
- Why this matters: 这是研究跨平台实现和引擎结构的核心来源，但它代表的是重实现路径，不应自动等同于历史原版行为。

## Safe Research Questions To Start With

- 某个现象是原版行为，还是现代兼容层带来的差异？
- 某个自定义关卡是否默认依赖 CrazyHook？
- 某个实现细节在 OpenClaw 中是否被重新建模？
- 玩家报告的异常是引擎行为、平台兼容问题，还是内容本身的问题？

## Related Pages

- [Technical Sources](technical-sources.md)
- [File Formats](file-formats.md)
- [Tools Comparison](../guides/tools-comparison.md)
- [Troubleshooting](../guides/troubleshooting.md)
