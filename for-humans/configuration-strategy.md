# Configuration Strategy

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

解释人类应该怎样理解 OpenClaw 的配置问题，而不是陷入零散参数。

## Main Configuration Layers

### 1. Access and exposure

- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方安全文档把 access control 放在第一位，并且明确列出不该暴露的高风险面，例如 unauthenticated browser control 和 overly broad permissions。

### 2. Runtime and channel surface

- Official source: <https://docs.openclaw.ai/index>
- Why it matters: OpenClaw 的价值之一是 multi-channel gateway，所以配置不只是模型参数，还包括你开放了哪些渠道，哪些渠道只是触发，哪些渠道能执行。

### 3. Plugins and trusted code

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Official source: <https://docs.openclaw.ai/gateway/security>
- Why it matters: 官方明确提醒 plugins run in-process，skill folders 应视为 trusted code。这一层配置直接决定系统的攻击面和可靠性。

### 4. Workflow and persistence

- Official source: <https://docs.openclaw.ai/prose>
- Community source: <https://www.reddit.com/r/openclaw/comments/1r4t9q8/openclaw_best_practices_what_actually_works_after/>
- Why it matters: 官方强调 reusable workflows，社区高票经验强调 file-based memory。也就是说，配置不只是在 UI 里改参数，还包括你如何组织长期工作流和上下文存放。

## A Safer Configuration Order

1. Decide who can access the system
2. Decide what surfaces are exposed
3. Decide which plugins and skills are trusted
4. Decide how durable context is stored
5. Only then optimize model/API choices

## Common Mistakes

- 先开通渠道，再回头补权限
- 装很多插件，却不清楚它们的信任边界
- 把“配置”理解成只调模型参数
- 依赖聊天历史，而不配置持久化上下文
