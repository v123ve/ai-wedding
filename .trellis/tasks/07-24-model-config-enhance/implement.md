# 模型配置页面增强 — 执行计划

## 前置条件

- [ ] 完成 07-24-presignedurl-minio-503 任务的状态清理

## 执行清单

### Step 1: 新增 API 端点

- [ ] 创建 `app/api/admin/model-configs/fetch-models/route.ts`
  - POST handler：接受 `{ api_base_url, api_key }`
  - 调用 `{api_base_url}/v1/models`（SSRF 防护，10s 超时）
  - 返回 `{ models: [{ id, name }] }`
- [ ] 创建 `app/api/admin/model-configs/test-connection/route.ts`
  - POST handler：接受 `{ api_base_url, api_key }`
  - 调用同一地址的 `/v1/models` 端点验证连通性
  - 返回 `{ success, message }`

### Step 2: 修改 ModelConfigForm

- [ ] 新增状态：`models`, `isFetchingModels`, `isTestingConnection`, `connectionTestResult`, `nameManuallyEdited`
- [ ] 修改默认 status 为 `'active'`
- [ ] 类型变更时自动填充名称（如果未手动编辑过）
- [ ] 添加"获取模型列表"按钮 + 加载状态
- [ ] 模型输入从 Input 改为条件渲染的 Select（有列表时用 Select，否则显示 Input）
- [ ] 添加"测试连接"按钮 + 结果展示
- [ ] 处理错误状态和边界情况

### Step 3: 验证

- [ ] lint 检查：`npm run lint`
- [ ] typecheck：`npm run typecheck`
- [ ] 构建验证：`npm run build`

## 回滚点

- 如果 Step 1 失败，删除新建的 route.ts 文件
- 如果 Step 2 导致编译错误，回退 ModelConfigForm.tsx 的修改
