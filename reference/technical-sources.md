# Technical Sources

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Purpose

本页收录偏技术、偏工具链、偏实现细节的来源。它们更适合开发者、制作者和研究者，不是面向普通新用户的第一入口。

## Engine And Reimplementation

### OpenClaw

- Link: <https://github.com/pjasicek/OpenClaw>
- Type: 开源重实现
- Why it matters: 仓库明确说明这是 Captain Claw 的跨平台 C++ 重实现，支持 Windows、Linux、Android 和 Emscripten/WebAssembly。它是研究现代实现路径的核心来源。
- Best for: 引擎实现、构建、跨平台移植、资源组织研究
- Verified on: 2026-03-01

## Editing And Content Production

### WapMap

- Project: <https://github.com/Zax37/WapMap>
- Releases: <https://github.com/Zax37/WapMap/releases>
- Type: 地图编辑器
- Why it matters: 这是当前主线关卡编辑工具，且 2026-01-18 仍有新版本发布。对于任何想做自定义关卡的人，学习价值都高于旧编辑器说明。
- Best for: 关卡编辑、现代工作流、地图资产实验
- Verified on: 2026-03-01

### Legacy WapWorld Documentation

- Link: <https://captainclaw.net/es/edytor.html>
- Type: 旧编辑器文档
- Why it matters: 该页面保留了 WapWorld 的实际使用说明，包括如何指定 `CLAW.REZ`、如何打开 `.WWD`、平面和 tile 操作基础。虽然是旧工具文档，但对理解关卡格式和旧教程仍然很有价值。
- Best for: 旧工具考证、WWD 格式背景、对照新旧编辑流程
- Verified on: 2026-03-01

## Design And Documentation

### Level Designer's Guide

- Primary source: <https://captainclaw.net/en/downloads.html>
- Type: 关卡设计指南
- Why it matters: 下载页说明这是完整的八部分设计指南，覆盖 WapWorld、WapMap、CrazyHook 自定义逻辑和外部资产导入，是当前最重要的实践型技术资料之一。
- Best for: 地图设计、逻辑扩展、自定义资源导入
- Verified on: 2026-03-01

### Claw Design Document

- Primary source: <https://captainclaw.net/en/downloads.html>
- Type: 历史设计文档
- Why it matters: 虽然页面明确说明它基于预发布版本、内容已过时，但它对研究原始设计思路、关卡意图和系统设定仍有价值。
- Best for: 设计史、设定对比、原始文档研究
- Verified on: 2026-03-01

## Utility Plugins And Experiments

### CrazyHook Updates

- Primary evidence: <https://captainclaw.net/en/archive.html>
- Downloads page: <https://captainclaw.net/en/downloads.html>
- Type: 社区维护扩展
- Why it matters: 归档页可用于追踪 CrazyHook 的版本演变，下载页则说明其在现代 Claw 生态中的核心地位。很多高阶设计和学习资源都默认以 CrazyHook 为基础。
- Best for: 现代游玩、扩展功能、理解社区工具链基线
- Verified on: 2026-03-01

## Recommended Use In This Repository

- `reference/technical-sources.md` 用于给开发者和制作者提供入口
- 后续具体工具说明应拆到独立页面，而不是继续堆在这里
- 真正的实操教程应继续放在 `guides/`
