# 模型配置页面增强 — 技术设计

## 1. 新 API 端点

### 1.1 `POST /api/admin/model-configs/fetch-models`

获取指定 API 地址下的可用模型列表。

**请求体：**
```json
{
  "api_base_url": "https://api.openai.com",
  "api_key": "sk-..."
}
```

**后端逻辑：**
- 调用 `{api_base_url}/v1/models`，携带 `Authorization: Bearer {api_key}`
- 从响应中提取 `data[].id` 作为模型 ID
- 返回 `{ models: [{ id: "gpt-4", name: "gpt-4" }] }`

**响应：**
```json
{
  "models": [
    { "id": "gpt-4", "name": "gpt-4" },
    { "id": "gpt-4o", "name": "gpt-4o" }
  ]
}
```

**错误响应：**
```json
{
  "error": "无法连接到API服务，请检查地址和密钥"
}
```

### 1.2 `POST /api/admin/model-configs/test-connection`

测试 API 连接有效性（复用 fetch-models 逻辑）。

**请求体：** 同 fetch-models

**响应：**
```json
{
  "success": true,
  "message": "连接成功"
}
```

**错误响应：**
```json
{
  "success": false,
  "message": "连接失败：401 Unauthorized"
}
```

## 2. 前端组件修改

### ModelConfigForm.tsx

**新增状态：**
- `models: { id: string; name: string }[]` — 拉取的模型列表
- `isFetchingModels: boolean` — 拉取中
- `isTestingConnection: boolean` — 测试中
- `connectionTestResult: { success: boolean; message: string } | null` — 测试结果
- `nameManuallyEdited: boolean` — 用户是否手动编辑过名称

**新增元素：**
- "获取模型列表" 按钮（在 model_name 输入框旁）
- 模型选择下拉框（替代原有 Input，加载后切换）
- "测试连接" 按钮 + 结果展示区域
- 类型变更时自动填充名称的逻辑

**交互流程：**
1. 用户输入 API Base URL + API Key
2. 点击"获取模型列表" → 显示 loading → 调用 fetch-models → 填充下拉框
3. 用户从下拉选择模型 → 自动填入 model_name
4. 点击"测试连接" → 调用 test-connection → 显示结果

### ModelConfigList.tsx
- 无需修改（纯展示组件）

## 3. 数据流

```
[用户输入 URL+Key]
       ↓
[获取模型列表] → POST /api/admin/model-configs/fetch-models
       ↓                    ↓ 成功           ↓ 失败
[显示下拉框] ← 填充 models    ←  显示错误
       ↓
[选择模型] → 自动填入 model_name
       ↓
[测试连接] → POST /api/admin/model-configs/test-connection
       ↓                    ↓ 成功/失败
[显示测试结果]
```

## 4. 安全考虑

- API Key 仅透传，不持久化在客户端
- 请求在服务端发出，不暴露给第三方
- SSRF 保护：新端点只调用外部 API，不访问内网地址
