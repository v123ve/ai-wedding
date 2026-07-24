# 将 ai-wedding-studio skill 精华转化为默认配置与模板

## Goal

将 `ai-wedding-studio` skill 中的专业婚纱摄影知识体系转化为项目的持久化资产，提升 AI 生成婚纱照的质量。

## Deliverables

### D1: 增强 DEFAULT_CONFIGS 中的 wedding 域配置

将 skill 中的专业婚纱摄影知识（身份保持规则、质量约束、镜头语言、组图结构、负面提示词）注入 `app/lib/prompt-strategies/prompt-builder.ts` 的 wedding 域默认配置，使系统 prompt 和分析 prompt 生成更高质量的输出。

**具体增强：**
- `role`：从"婚纱摄影风格分析师"升级为更专业的角色
- `photoType`：保持不变
- `requirements`：融入 skill 的核心质量规则 — 身份一致性、情感可信度、服饰完整性、场景连贯性、灯光质量、构图多样性、多镜头组图结构
- `getSystemPrompt()`：扩展为包含角色Jan医身份和输出标准的完整系统提示
- `getAnalysisPrompt()`：融入身份保持约束、负面提示词指引、8 张组图结构要求
- `styleMap[wedding]`：更新为更丰富的风格描述

### D2: 将 skill 的 3 个 YAML 包转化为数据库种子模板

将 `ai-wedding-studio` 的 3 个完整婚纱照套系包转化为 `prisma/seed-data/templates.ts` 中的 `TemplateSeed` 条目：

1. **马尔代夫海边黄昏婚纱照**（来自 `maldives-sunset.yml`）
2. **大理苍山日照金山婚纱照**（来自 `dali-sunrise.yml`）
3. **中式棚拍秀禾婚纱照**（来自 `chinese-xiuhe-studio.yml`）

每个模板包含：
- `prompt_config.basePrompt` — 套系的 base prompt（从 YAML 的 base_prompt 提取）
- `prompt_config.negativePrompt` — 套系的 negative prompt（从 YAML 的 negative_prompt 提取）
- `prompt_list` — 8 张组图的具体 prompt（从 YAML 的 frames 提取）

## Acceptance Criteria

- [ ] D1: wedding 域的系统 prompt 包含身份保持、质量约束、组图结构等专业指引
- [ ] D1: 生成的 analysis prompt 要求 8 张组图，涵盖远景、中景、特写、互动、动态等多种镜头功能
- [ ] D1: lint + typecheck 通过
- [ ] D2: 3 个新模板存在于 `templatesSeedData` 的 wedding 数组中
- [ ] D2: 每个模板的 prompt_config 包含完整的 basePrompt 和 negativePrompt
- [ ] D2: 每个模板的 prompt_list 包含 8 张组图 prompt
- [ ] D2: lint + typecheck 通过

## Constraints

- 不修改现有模板的名称、ID 和排序
- 新模板的 sort_order 从现有最大排序号（8）之后开始
- 不修改 prompt-builder.ts 中非 wedding 域的配置
- 遵循现有代码风格（TypeScript, 2 空格缩进）