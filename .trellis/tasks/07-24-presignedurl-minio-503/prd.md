# 修复 presignedUrl 使用 minio 内网主机名导致的 503 错误

## Goal

修复非 Docker 部署环境下，前端上传图片后构筑接口返回 503 的问题。根因是上传接口返回的 `presignedUrl` 包含 `minio:9000`（Docker 内部主机名），前端将其传给构筑接口，后端 fetch 该 URL 时无法解析 `minio` 主机名。

## Root Cause

1. `minio-client.ts` 的 `presignedGetObject()` 使用 SDK 连接时的 `MINIO_INTERNAL_ENDPOINT`（默认含 `minio` 主机名）生成预签名 URL
2. 前端 `useImageUpload.ts:39` 和 `useStreamImageGeneration.ts:39,67` 优先使用 `presignedUrl` 而非 `url`
3. 构筑接口（`generate-single/route.ts`、`generate-stream/route.ts`）收到 `presignedUrl` 后调用 `convertUrlToBase64()` fetch 该 URL，无法解析 `minio` 主机名 → fetch 失败 → 503

## Requirements

- 服务器端之间访问 MinIO 时必须能正常工作（包括 `localhost:9000` 和 `minio:9000` 两种场景）
- 前端生成的 `image_inputs` 必须使用服务器端可访问的 URL
- 兼容 Docker 部署（不改 `minio` 主机名这种行为）

## Acceptance Criteria

- [ ] 非 Docker 部署下上传图片后构筑接口不再返回 503
- [ ] Docker 部署下行为不受影响
- [ ] `isPrivateOrSensitiveUrl` 允许 `localhost` 访问（或通过环境变量控制）
