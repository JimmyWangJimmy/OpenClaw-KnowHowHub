# Asset Extraction

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

如果你的目标是查看、分析或复用 Captain Claw 的游戏资源，这一页给出当前最合理的入门路径。

## What "Asset Extraction" Usually Means Here

在 OpenClaw / Captain Claw 社区语境里，资源提取通常包括：

- 查看或引用 `CLAW.REZ` 中的原始资源
- 读取或研究 `.WWD` 关卡数据
- 在地图编辑器或旧工具里加载已有资源
- 为关卡设计和研究准备素材，而不是无上下文地导出全部文件

## Recommended Path

### 1. Start With The Current Tooling Hub

- Downloads: <https://captainclaw.net/en/downloads.html>
- Why first: 下载页集中列出当前社区仍在使用的工具和设计资料，是理解提取工作流的现实入口。

### 2. Learn The Editing Context Before Extracting Blindly

- Level Designer's Guide source: <https://captainclaw.net/en/downloads.html>
- Why second: 资源提取不是独立动作，它通常服务于关卡研究、地图编辑、逻辑扩展和视觉复用。先理解设计工作流，比直接导出文件更有效。

### 3. Use Modern Tools First, Legacy Tools Second

- WapMap: <https://github.com/Zax37/WapMap>
- Legacy WapWorld docs: <https://captainclaw.net/es/edytor.html>
- Why this order: 当前工作流应优先围绕 WapMap；WapWorld 主要用于理解旧教程和旧格式背景。

## Common Use Cases

### I want to inspect level data

1. Start with the current editing workflow
2. Open relevant custom levels and study how they are structured
3. Use old WapWorld documentation only when you need historical format context

### I want assets for custom levels

1. Read the Level Designer's Guide first
2. Review how the community handles imported or reused assets
3. Use existing custom levels as reference samples before building your own asset pipeline

### I want to understand original game resources

1. Use the legacy WapWorld documentation as background
2. Compare that knowledge with the modern WapMap workflow
3. Treat extraction as analysis, not just file dumping

## Important Notes

- 不要把资源提取理解成“先把所有文件导出来再说”
- 先理解工具链，再做提取，效率更高
- 涉及原版游戏资源时，需要注意版权和分发边界

## Next Pages

- [Level Editing](level-editing.md)
- [Technical Sources](../reference/technical-sources.md)
- [Learning Resources](learning-resources.md)
