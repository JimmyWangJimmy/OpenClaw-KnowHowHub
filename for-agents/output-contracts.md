# Output Contracts

Status: Verified
Last Updated: 2026-03-01
Source: curated web research

## Goal

定义 agent 输出应该满足的基本契约。

## Contracts

### 1. Human-facing outputs explain decisions

- Supporting source: <https://docs.openclaw.ai/index>
- Contract: 人类页应优先帮助人理解是什么、为什么、何时使用，而不是只给内部规则。

### 2. Agent-facing outputs define boundaries

- Official source: <https://docs.openclaw.ai/gateway/security>
- Contract: agent 页应明确权限、边界、风险、恢复路径，避免含糊建议。

### 3. Reusable programs should be explicit and repeatable

- Official source: <https://docs.openclaw.ai/prose>
- Contract: 如果输出目标是 reusable workflow，就应包含阶段、输入、输出、并行或审批边界，而不是散乱提示词。

### 4. Tool or plugin guidance must include trust assumptions

- Official source: <https://docs.openclaw.ai/tools/plugin>
- Contract: 只要输出涉及插件、skill、脚本或执行面，就必须写明 trust boundary 和安装/启用前提。

### 5. Claims must stay proportional to evidence

- Official source: <https://docs.openclaw.ai/gateway/security>
- Contract: 无法验证时降低断言强度；涉及安全、权限、共享使用时优先写限制条件。

## Format Guidance

- 人类页：解释、取舍、案例、推荐动作
- agent 页：规则、步骤、输入输出边界、失败恢复
- playbook：前提、步骤、交付物、检查点
- skills：触发条件、能力边界、组合方式、信任要求
