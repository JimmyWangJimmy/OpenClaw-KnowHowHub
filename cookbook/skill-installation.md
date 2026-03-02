# Skill Installation Recipe

Status: Verified
Last Updated: 2026-03-02
Source: curated web research

## Goal

帮助用户以更安全的方式安装和评估 skills。

## The Core Rule

安装 skills 不是“多一个小功能”，而是“给系统增加新的能力和新的信任面”。

所以默认顺序应该是：

1. 先确认你为什么需要这个 skill
2. 再确认它来自哪里
3. 再确认它如何安装
4. 最后才让它进入你的长期工作流

## What The Sources Say

### OpenClaw official plugin model

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Why it matters: 官方插件页明确写了 plugins run in-process with the Gateway，并应视为 trusted code。

### Community skill ecosystem

- Community source: <https://openclawskills.io/>
- Community source: <https://openclawskills.io/skills>
- Why it matters: OpenClaw Skills 把自己定位成最大的技能目录，并给出大量技能和安装入口。这很有价值，但目录的存在不等于官方背书。

## A Safe Installation Order

1. Start from the problem, not the directory
2. Prefer official or clearly-maintained sources
3. Read what the skill actually does
4. Install one skill at a time
5. Test before making it part of your normal workflow

## Step 1: Know the job before the skill

不要先逛目录，再随机装一堆。

更稳的做法是先明确：

- 你要解决什么任务
- 这个任务是不是值得长期固化
- 你是否真的需要额外 skill，而不是现有能力就够

## Step 2: Check the trust story

对每个 skill，至少问这几个问题：

- 来源是谁
- 最近是否仍在维护
- 它会碰到哪些外部系统、文件或权限
- 它是在帮你节省时间，还是在引入新风险

## Step 3: Prefer narrow skills over vague mega-skills

一个“做一件具体事情”的 skill，通常比“什么都能做”的大而泛 skill 更容易评估、测试和回滚。

## Step 4: Install incrementally

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Community source: <https://openclawskills.io/skills>
- Why it matters: 官方插件模型强调控制和 allowlists；社区目录强调快速安装。最稳的组合方式是一次装一个，一次验证一个。

## Step 5: Promote to workflow only after trust is earned

只有在这几个条件都满足后，才把 skill 放进长期 playbook：

- 你知道它解决什么问题
- 你看过来源和维护状态
- 你验证过它的输出和副作用
- 你知道出问题时怎么停用它

## Common Mistakes

- 因为目录很大，就一次装很多
- 把“社区热门”误当成“官方推荐”
- 不区分插件、skills、脚本和工作流模板
- 不先验证边界，就把 skill 接进长期自动化

## Read Next

- [OpenClaw Skills](https://openclawskills.io/)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
- [Skills](../skills/README.md)
- [First Playbook](first-playbook.md)

## Primary Sources

- [OpenClaw Skills](https://openclawskills.io/)
- [OpenClaw Skills Directory](https://openclawskills.io/skills)
- [Plugins](https://docs.openclaw.ai/tools/plugin)
- [Skills](../skills/README.md)
