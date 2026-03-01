# Tools Comparison

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

如果你刚进入 OpenClaw / Captain Claw 社区，最容易混淆的不是链接太少，而是工具太多。这一页用最短方式说明每个核心工具各自负责什么。

## Quick Summary

### CrazyHook

- Primary source: <https://captainclaw.net/en/downloads.html>
- Role: 现代游玩与扩展功能基线
- Use it when: 你想在现代系统上稳定游玩，或使用当前社区默认的增强功能
- Do not treat it as: 地图编辑器或源码项目

### WapMap

- Project: <https://github.com/Zax37/WapMap>
- Releases: <https://github.com/Zax37/WapMap/releases>
- Role: 当前主线关卡编辑器
- Use it when: 你想做或研究自定义关卡
- Do not treat it as: 游戏运行时本体替代品

### WapWorld

- Legacy docs: <https://captainclaw.net/es/edytor.html>
- Role: 旧时代编辑工具和历史文档背景
- Use it when: 你在读旧教程、研究旧工作流、理解 `.WWD` 相关背景
- Do not treat it as: 当前优先学习入口

### OpenClaw

- Project: <https://github.com/pjasicek/OpenClaw>
- Role: 开源跨平台重实现
- Use it when: 你想研究实现、构建、引擎结构或跨平台路径
- Do not treat it as: 普通新用户的第一学习入口

## Which Tool Should You Start With?

### I just want to play

从 `CrazyHook` 和社区下载页开始，而不是从源码仓库开始。

### I want to make levels

从 `WapMap` 开始，再配合 `Level Designer's Guide`。

### I want to understand old tutorials

把 `WapWorld` 当作历史背景资料使用，而不是默认主工具。

### I want to study engine implementation

从 `OpenClaw` 开始。

## Practical Mapping

| Goal | Best First Tool | Why |
| --- | --- | --- |
| 现代系统稳定运行 | CrazyHook | 当前社区默认基线 |
| 自定义关卡制作 | WapMap | 当前主线编辑工作流 |
| 旧教程和格式背景 | WapWorld | 主要用于历史语境 |
| 源码和引擎研究 | OpenClaw | 开源实现入口 |

## Common Mistakes

- 把 `OpenClaw` 当成地图编辑器
- 把 `WapWorld` 当成当前唯一正确工具
- 把 `CrazyHook` 误解成单纯补丁，而忽略它在现代社区里的基线地位
- 不先分清“游玩工具”和“制作工具”

## Related Pages

- [Install And Run](install-and-run.md)
- [Troubleshooting](troubleshooting.md)
- [Level Editing](level-editing.md)
- [Technical Sources](../reference/technical-sources.md)
