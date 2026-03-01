# File Formats

Status: Draft
Last Updated: 2026-03-01
Source: curated web research

## Goal

本页不是完整规格书，而是 OpenClaw / Captain Claw 常见文件格式的安全入口页。目标是先帮读者分清哪些格式重要、它们大致负责什么、下一步该去哪里查。

## Most Important Formats

### `CLAW.REZ`

- Role: 原版游戏资源容器
- Why it matters: 很多资源查看、旧工具使用和历史工作流都会围绕这个文件展开。
- Best starting context:
  - [Asset Extraction](../guides/asset-extraction.md)
  - Legacy WapWorld docs: <https://captainclaw.net/es/edytor.html>

### `.WWD`

- Role: 关卡数据格式
- Why it matters: 无论是旧工具还是现代关卡研究，这都是最值得优先理解的格式之一。
- Best starting context:
  - [Level Editing](../guides/level-editing.md)
  - Legacy WapWorld docs: <https://captainclaw.net/es/edytor.html>

## How To Approach These Formats

### If you are a player

不需要先理解底层格式。优先看：

- [Install And Run](../guides/install-and-run.md)
- [Troubleshooting](../guides/troubleshooting.md)

### If you are a level creator

先理解工具链和现有工作流，再回来看格式：

- [Level Editing](../guides/level-editing.md)
- [Modding Basics](../guides/modding-basics.md)
- [Tools Comparison](../guides/tools-comparison.md)

### If you are doing technical research

从工具与历史文档双线进入：

- [Technical Sources](technical-sources.md)
- Legacy WapWorld docs: <https://captainclaw.net/es/edytor.html>
- [OpenClaw](https://github.com/pjasicek/OpenClaw)

## What This Page Does Not Claim

- 不声称已经给出了完整二进制规格
- 不声称已经覆盖所有社区使用过的格式
- 不建议在没有工作流上下文的前提下直接硬啃格式

## Next Expansion

后续这页可以继续拆成：

- `wwd-format.md`
- `rez-assets.md`
- `tooling-and-format-context.md`
