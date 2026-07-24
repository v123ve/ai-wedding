# 模板卡片查看与复制完整提示词 — 技术设计

## 数据流

当前 `app/templates/[domain]/page.tsx` 是服务端组件，直接用 Prisma 查询模板：

```tsx
const templates = await prisma.templates.findMany({
  where: { domain: domainSlug, is_active: true },
  orderBy: { sort_order: 'asc' },
});
```

**修改：** 在 Prisma 查询中添加 `prompt_config` 和 `prompt_list` 字段。

## 组件拆分

为支持展开/收起和剪贴板交互，需要客户端组件。

### 新增组件：`TemplateCardWithPrompts.tsx`

位置：`app/components/templates/TemplateCardWithPrompts.tsx`

功能：
- 接收完整模板数据（含 prompt_config、prompt_list）
- 显示模板卡片（名称、描述、积分）
- "查看提示词"按钮 → 切换展开状态
- 展开区域渲染提示词内容 + 复制按钮

### 修改：`app/templates/[domain]/page.tsx`

- Prisma 查询增加 `prompt_config` 和 `prompt_list`
- 用 `TemplateCardWithPrompts` 替代现有卡片渲染

## UI 展开区域设计

```
┌─────────────────────────────────────┐
│ [模板名]         [积分] [查看提示词▼] │  ← 卡片头部（始终显示）
├─────────────────────────────────────┤
│ [复制全部]                          │  ← 展开后显示
│                                     │
│ 📝 基础提示词 (Base Prompt)  [复制]  │
│ 中国年轻情侣婚纱照...                │
│                                     │
│ ⛔ 负面提示词 (Negative Prompt)[复制] │
│ lowres, blurry face...              │
│                                     │
│ 🖼️ 组图 1/8 — 远景定调       [复制] │
│ 在统一人物设定...                    │
│ 🖼️ 组图 2/8 — 中景互动       [复制] │
│ 拍摄一张中景...                      │
│ ...                                 │
└─────────────────────────────────────┘
```

## 复制逻辑

```typescript
const copyToClipboard = async (text: string, label: string) => {
  await navigator.clipboard.writeText(text);
  setCopiedLabel(label);
  setTimeout(() => setCopiedLabel(null), 1500);
};
```

"复制全部"合并格式：
```
=== Base Prompt ===
{basePrompt}

=== Negative Prompt ===
{negativePrompt}

=== Shot 1 ===
{prompt_list[0]}

=== Shot 2 ===
{prompt_list[1]}
...
```

## 样式要点

- 展开区域：`bg-white/5 border border-white/10 rounded-sm p-4 mt-3`
- 提示词文本：`font-mono text-sm leading-relaxed text-white/80`
- 标签：`text-xs text-gold tracking-wider uppercase`
- 复制按钮：`text-gold hover:text-white transition-colors`
- 已复制状态：`text-green-400`
- 分隔线：`border-t border-white/5 my-3`

## 不修改的文件

- `app/api/templates/route.ts`（公共 API 保持提示词隐藏）
- `app/types/database.ts`（公共 Template 类型不变）
- 其他模板页面（首页 templates/page.tsx 不加此功能）
- 管理端页面