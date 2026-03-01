# OpenClaw KnowHowHub

OpenClaw 的 human + agent knowledge OS。

这个仓库不只是资料库。它的目标是同时服务两类读者：

- 人类：理解 OpenClaw 的最佳实践、使用案例、应用场景、配置方式、API 选择和交互模式
- OpenClaw agent：读取技能索引、执行规则、输出契约、playbook 和自我演化输入

如果你希望这个生态更容易被发现、被理解、被延续，并且更容易被人和 agent 共同使用，这个仓库就是为此而建。

## What You Can Find Here

- `for-humans/`: 面向人类的指南、最佳实践、案例和决策材料
- `for-agents/`: 面向 OpenClaw agent 的规则、契约、恢复策略和演化输入
- `playbooks/`: 面向具体任务的执行手册
- `skills/`: 面向能力组织和技能生态的索引层
- `guides/`, `reference/`, `research/`: 保留现有知识库层

## Why This Repository Exists

- 让人类可以更快理解和使用 OpenClaw
- 让 agent 可以读取结构化知识并持续复用
- 把最佳实践、技能生态、执行方式和演化材料沉淀在同一个地方

## Why Star This Repo

- 你会得到一个持续整理中的 OpenClaw knowledge OS，而不是零散笔记
- 这里不仅有文档入口，还会逐步沉淀 skills、playbooks 和 agent 可读规则
- Star 也是在给这个方向一个公开信号：这套知识系统值得继续演化

## Start Here

- [For Humans](for-humans/README.md): 给使用者、操作者和设计者
- [For Agents](for-agents/README.md): 给 OpenClaw agent 的执行知识层
- [Content Map](docs/content-map.md): 理解整个仓库的信息架构

## Pinned Rankings

- [Top 10 For Humans](reference/top-10-for-humans.md): 人类最值得先看的 10 个高价值入口
- [Top 10 For Agents](reference/top-10-for-agents.md): agent 最适合读取的 10 个高信号来源

## Human Paths

### For Operators

- [Use Cases](for-humans/use-cases.md): OpenClaw 适合落在哪些真实任务上
- [Best Practices](for-humans/best-practices.md): 官方原则与高信号社区经验
- [Configuration Strategy](for-humans/configuration-strategy.md): 配置顺序和权限边界
- [Interaction Patterns](for-humans/interaction-patterns.md): 怎么与 OpenClaw 稳定协作

### For Builders

- [API Selection](for-humans/api-selection.md): 如何按任务选择接口和执行方式
- [Playbooks](playbooks/README.md): 把重复任务沉淀成执行手册
- [Skills](skills/README.md): 组织技能生态，而不是堆零散 skill

### For Researchers

- [Source Landscape](reference/source-landscape.md): 官方、社区和风险信号来源地图
- [Deployment Ecosystem](reference/deployment-ecosystem.md): 官方基线与社区部署路线
- [Source Intelligence](research/source-intelligence.md): 当前高信号来源流和监控面
- [Repository Signals](research/repo-signals.md): 官方 GitHub 仓库释放的真实产品信号
- [Channel And Deployment Signals](research/channel-deployment-signals.md): 渠道接入与部署运维信号

## Agent Layers

- [For Agents](for-agents/README.md): agent 规则与契约入口
- [Playbooks](playbooks/README.md): 面向任务执行的手册层
- [Skills](skills/README.md): 面向技能生态的组织层

## Knowledge Layers

- [For Humans](for-humans/README.md): 面向人类的操作、配置和协作层
- [For Agents](for-agents/README.md): 面向 agent 的规则、契约和恢复层
- [Playbooks](playbooks/README.md): 面向执行的手册层
- [Skills](skills/README.md): 面向技能生态的组织层
- [Reference](reference/README.md): 面向来源和部署的查阅层
- [Research](research/README.md): 面向来源监控和产品信号分析

## Popular Entry Points

- [Best Practices](for-humans/best-practices.md): 最适合第一次建立正确使用习惯的入口
- [Configuration Strategy](for-humans/configuration-strategy.md): 最适合理解安全和配置顺序的入口
- [Source Landscape](reference/source-landscape.md): 最适合判断哪些来源值得信的入口
- [Repository Signals](research/repo-signals.md): 最适合理解项目真实状态的入口

## Contribute Signal

如果这个仓库帮你更快找到资料、解决问题，或者更清楚地理解了 OpenClaw 生态，欢迎：

- Star 这个仓库
- 提交更好的来源和修正
- 补充教程、截图、索引和历史线索

## Repository Structure

```text
for-humans/  面向人类的指南、案例、最佳实践和决策材料
for-agents/  面向 agent 的规则、契约、恢复和演化输入
playbooks/   面向具体任务的执行手册
skills/      面向技能生态的组织层
guides/      面向操作和实战的教程目录
reference/   面向查阅的资料入口
research/    面向来源监控、信号分析和研究过程
docs/        元文档和内容地图
assets/      截图、示意图、示例资源
tools/       脚本、转换工具、辅助程序
```

## Content Status

为了让内容可信、可维护，建议每篇文档在开头标明状态：

- `Draft`: 初稿，可能不完整
- `Verified`: 已验证，可作为稳定参考
- `In Progress`: 正在整理或研究中
- `Deprecated`: 过时内容，保留仅供历史参考

## Contributing

欢迎补充资料、修正文档、提交工具和实验结果。开始前请先阅读 [Contributing](CONTRIBUTING.md)。

## Roadmap

当前优先目标见 [Roadmap](ROADMAP.md)。

## Curated Resources

- [Source Landscape](reference/source-landscape.md): 当前最重要的官方、社区和风险信号来源
- [Deployment Ecosystem](reference/deployment-ecosystem.md): 官方部署基线与社区路线
- [Source Intelligence](research/source-intelligence.md): 持续监控的高信号来源流
- [Repository Signals](research/repo-signals.md): 从官方 GitHub 仓库读产品状态
- [Channel And Deployment Signals](research/channel-deployment-signals.md): 渠道与部署摩擦面
- [Source Criteria](research/source-criteria.md): 本仓库的来源筛选标准
