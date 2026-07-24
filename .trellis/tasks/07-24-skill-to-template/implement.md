# 将 ai-wedding-studio skill 精华转化为默认配置与模板 — 执行计划

## 前置条件

- [ ] 当前 task `07-24-skill-to-template` 状态为 `in_progress`

## 执行清单

### Step 1: 增强 prompt-builder.ts 的 wedding 域默认配置

- [ ] 修改 `DEFAULT_CONFIGS.wedding`：升级 role、扩充 requirements 到 8 条
- [ ] 修改 `getSystemPrompt()`：扩展 wedding 域的系统 prompt
- [ ] 修改 `getAnalysisPrompt()`：wedding 域增加 8 张组图结构、身份保持、负面提示词约束
- [ ] 修改 `styleMap[wedding]`：更新风格描述
- [ ] 验证：const/let 保持正确、类型检查通过

### Step 2: 将 3 个 YAML 套系转换为 TemplateSeed

- [ ] 读取 3 个 YAML 文件提取字段（base_prompt、negative_prompt、frames）
- [ ] 在 `prisma/seed-data/templates.ts` 的 weddingTemplates 数组末尾追加 3 个新条目
- [ ] 验证：sort_order 为 9/10/11、所有字段格式正确

### Step 3: 验证

- [ ] lint: `npm run lint`
- [ ] typecheck: `npm run typecheck`
- [ ] 构建: `npm run build`

## 回滚点

- 如果 Step 1 导致编译错误，恢复 `prompt-builder.ts` 到原始状态
- 如果 Step 2 导致编译错误，从 `templates.ts` 中移除新增的 3 个条目