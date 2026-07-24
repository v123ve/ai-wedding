# 将 ai-wedding-studio skill 精华转化为默认配置与模板 — 技术设计

## D1: prompt-builder.ts wedding 域增强

### 当前状态

wedding 域的 DEFAULT_CONFIGS 很简略：
```typescript
wedding: {
  role: '婚纱摄影风格分析师',
  photoType: '婚纱照',
  requirements: [
    '每个提示词都要包含"保持人物五官特征"这个核心要求',
    '中文和英文必须表达完全相同的意思',
    '描述要包含：场景、服装、姿势、光线、氛围等关键元素',
    '5个提示词要有细微差异',
    '必须返回完整的JSON格式',
  ],
}
```

### 增强后的要求

| # | 当前 | 增强后 |
|---|------|--------|
| role | 婚纱摄影风格分析师 | 高端婚纱摄影导演与视觉品质总监 |
| requirements | 5 条通用要求 | 8 条覆盖身份、品质、组图结构的专业要求 |

### 增强的 requirements 内容来源

| requirement | skill 来源 |
|-------------|-----------|
| 身份一致性（五官特征、年龄感、肤色连续、跨张稳定性） | `quality-rules.md` Identity Consistency |
| 情感可信度（自然亲密、克制喜悦、真实眼神交流） | `quality-rules.md` Emotional Credibility |
| 服饰完整性（婚纱轮廓、头纱结构、蕾丝细节、西装版型） | `quality-rules.md` Wardrobe Integrity |
| 解剖准确性（手部、手指、手腕、比例） | `quality-rules.md` Anatomy and Hands |
| 场景连贯性（前景/中景/背景一致、光线方向合理） | `quality-rules.md` Scene Coherence |
| 灯光质量（柔和的定向光、自然的轮廓光、高级影调） | `quality-rules.md` Light Quality |
| 构图多样性（远景定调、中景互动、特写情绪、动态抓拍、封面肖像） | `quality-rules.md` Package-Level Variety |
| 品质底线（拒绝低分辨率、塑料皮肤、廉价旅拍感、卡通化） | `quality-rules.md` Premium vs Cheap |

### getSystemPrompt() 增强

从 `"你是一个专业的${this.config.role}。"` 扩展为包含输出方向和品质标准的完整系统 prompt。

### getAnalysisPrompt() 增强

从 5 张图扩展到 8 张图，并加入：
- 身份保持约束
- 负面提示词陈述
- 8 张组图的镜头功能分布指引
- 输出语言规则

## D2: YAML → TemplateSeed 转换

### 映射规则

| YAML 字段 | TemplateSeed 字段 | 处理方式 |
|-----------|-------------------|----------|
| `name_zh` | `name` | 直接使用 |
| `summary` | `description` | 直接使用 |
| `category` | `category` | 映射：`outdoor_wedding`→`outdoor`、`chinese_traditional_wedding`→`classic` |
| — | `domain` | 固定为 `'wedding'` |
| — | `preview_image_url` | `null` |
| `base_prompt` | `prompt_config.basePrompt` | 保留完整文本 |
| `negative_prompt` | `prompt_config.negativePrompt` | 保留完整文本 |
| — | `prompt_config.styleModifiers` | `[name_zh]` |
| `frames[].prompt` | `prompt_list[]` | 按 frames 顺序填充 |
| — | `prompt_descriptions` | `[]` |
| — | `price_credits` | 15（高端套系） |
| — | `is_active` | `true` |
| — | `sort_order` | 9, 10, 11 |

### 文件修改范围

- 仅修改 `prisma/seed-data/templates.ts`
- 在 `weddingTemplates` 数组末尾追加 3 个新条目
- 保持现有 8 个模板不变

### 新模板数据

#### 模板 9: 马尔代夫海边黄昏婚纱照
- category: `outdoor`
- basePrompt: 从 maldives-sunset.yml 的 base_prompt 提取
- negativePrompt: 从 maldives-sunset.yml 的 negative_prompt 提取
- prompt_list: 8 个 frames 的 prompt

#### 模板 10: 大理苍山日照金山婚纱照
- category: `outdoor`
- basePrompt: 从 dali-sunrise.yml 的 base_prompt 提取
- negativePrompt: 从 dali-sunrise.yml 的 negative_prompt 提取
- prompt_list: 8 个 frames 的 prompt

#### 模板 11: 中式棚拍秀禾婚纱照
- category: `classic`
- basePrompt: 从 chinese-xiuhe-studio.yml 的 base_prompt 提取
- negativePrompt: 从 chinese-xiuhe-studio.yml 的 negative_prompt 提取
- prompt_list: 8 个 frames 的 prompt

### 不修改的文件

- `prompt-builder.ts` 中非 wedding 域的其他 10 个域配置
- `sync-wedding-templates.ts`（仅用于生产环境的 8 个同步模板）
- 其他 seed data 文件