# 模板卡片查看与复制完整提示词 — 执行计划

## 前置条件

- [ ] 子任务 `07-24-template-prompt-viewer` 创建完成
- [ ] 父任务 `07-24-skill-to-template` 中已添加 3 个新模板

## 执行清单

### Step 1: 创建客户端组件 `TemplateCardWithPrompts`

- [ ] 创建 `app/components/templates/TemplateCardWithPrompts.tsx`
- [ ] Props：完整模板数据（含 prompt_config、prompt_list）
- [ ] 展开/收起状态管理
- [ ] 渲染：basePrompt、negativePrompt、prompt_list 逐条
- [ ] 每个段落的独立 "复制" 按钮，带 "已复制" 反馈
- [ ] "复制全部" 按钮，合并所有内容
- [ ] 样式：深色背景、等宽字体、金色强调色

### Step 2: 修改 domain 模板页

- [ ] 修改 `app/templates/[domain]/page.tsx`：Prisma 查询增加 `prompt_config` 和 `prompt_list`
- [ ] 用 `TemplateCardWithPrompts` 替代现有卡片渲染逻辑

### Step 3: 验证

- [ ] 检查展开/收起交互正常
- [ ] 检查复制功能（单段 + 全部）
- [ ] UI 样式符合设计

## 回滚点

- 如果 Step 1/2 导致编译错误，回退 `page.tsx` 到原始渲染方式
- 删除 `TemplateCardWithPrompts.tsx