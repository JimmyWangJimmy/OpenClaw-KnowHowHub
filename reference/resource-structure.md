# Resource Structure

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页用于帮助读者分清三种容易混淆的“资源结构”：

- 这个 GitHub 仓库自己的目录结构
- Captain Claw / OpenClaw 游戏资源的组织方式
- 编辑器和工具工作流里的文件路径语境

## 1. Repository Structure

这是你现在正在浏览的知识库结构，主要是为了让人更快找到信息：

- `docs/`: 面向第一次访问者的入口文档
- `guides/`: 任务型教程和操作路径
- `reference/`: 查阅型资料入口
- `research/`: 历史、实验、归档和研究过程
- `community/`: 社区入口和外部生态
- `assets/`: 截图、示意图、示例资源
- `tools/`: 仓库未来放脚本和工具的地方

## 2. Game Resource Context

在游戏和旧工具语境里，资源结构通常不是“很多散开的普通文件夹”，而是围绕核心资源文件和关卡文件来理解。

### `CLAW.REZ`

- Why it matters: 它是最核心的资源容器语境之一。
- Best next pages:
  - [File Formats](file-formats.md)
  - [Asset Extraction](../guides/asset-extraction.md)

### `.WWD`

- Why it matters: 它是关卡数据语境的核心格式之一。
- Best next pages:
  - [Level Editing](../guides/level-editing.md)
  - [File Formats](file-formats.md)

## 3. Tool Workflow Context

工具不会只是“打开一个文件”这么简单，不同工具背后的目录和路径假设也不同。

### WapMap Workflow

- Best source: <https://github.com/Zax37/WapMap>
- Context: 当前主线关卡编辑工作流

### Legacy WapWorld Workflow

- Best source: <https://captainclaw.net/es/edytor.html>
- Context: 旧教程和旧编辑语境

## Safe Questions To Ask First

- 我现在说的“目录”，是在说 GitHub 仓库结构，还是游戏资源结构？
- 我现在遇到的是格式问题，还是工具工作流问题？
- 我看的教程默认使用的是 WapMap，还是旧 WapWorld？

## Related Pages

- [File Formats](file-formats.md)
- [Tool List](tool-list.md)
- [Configuration](configuration.md)
- [Asset Extraction](../guides/asset-extraction.md)
