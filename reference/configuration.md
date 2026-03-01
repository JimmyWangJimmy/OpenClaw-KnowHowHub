# Configuration

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页用于帮助读者分清 OpenClaw / Captain Claw 生态里的几类“配置”问题。它不是配置项大全，而是一个安全入口页。

## Why Configuration Gets Confusing

在这个生态里，用户常说的“改配置”可能是在说：

- 游戏运行设置
- 现代兼容层或社区增强层设置
- 编辑器或工具工作流设置
- 操作系统级兼容与权限设置

如果不先分层，很多排障和教程都会显得互相矛盾。

## Main Configuration Layers

### Runtime Game Setup

- Best sources:
  - [Install And Run](../guides/install-and-run.md)
  - [Troubleshooting](../guides/troubleshooting.md)
  - <https://captainclaw.net/en/support.html>
- What belongs here:
  - 基础运行环境
  - 输入方式
  - 帧率和兼容性相关设置
  - 存档权限等运行期问题

### Community Baseline / CrazyHook Layer

- Best sources:
  - <https://captainclaw.net/en/downloads.html>
  - <https://captainclaw.net/en/archive.html>
  - [Tools Comparison](../guides/tools-comparison.md)
- What belongs here:
  - 当前社区默认增强功能
  - 现代兼容包和行为基线
  - 影响游玩与测试结果的额外层

### Editing And Tooling Setup

- Best sources:
  - [Level Editing](../guides/level-editing.md)
  - [Asset Extraction](../guides/asset-extraction.md)
  - <https://github.com/Zax37/WapMap>
  - <https://captainclaw.net/es/edytor.html>
- What belongs here:
  - 编辑器安装与打开方式
  - `CLAW.REZ`、`.WWD` 等资源路径语境
  - 新旧工具工作流差异

## Safe Questions To Ask First

- 我改的是游戏运行设置，还是工具设置？
- 这个问题来自原版、CrazyHook 层，还是操作系统兼容层？
- 我看到的教程是在说 WapMap，还是旧的 WapWorld 工作流？

## Related Pages

- [Troubleshooting](../guides/troubleshooting.md)
- [Tools Comparison](../guides/tools-comparison.md)
- [File Formats](file-formats.md)
- [Engine Behavior](engine-behavior.md)
