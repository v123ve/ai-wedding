import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth-admin';

export async function POST(req: NextRequest) {
  const authResult = await requireAdmin(req);
  if (authResult instanceof Response) return authResult;

  const body = await req.json();
  const { api_base_url, api_key } = body;

  if (!api_base_url || !api_key) {
    return NextResponse.json(
      { error: '缺少必填字段: api_base_url, api_key' },
      { status: 400 }
    );
  }

  const baseUrl = api_base_url.replace(/\/$/, '');
  const modelsUrl = `${baseUrl}/v1/models`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(modelsUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${api_key}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      return NextResponse.json(
        { error: `请求失败 (${response.status}): ${errorText || response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const models = (data.data || []).map((m: { id: string }) => ({
      id: m.id,
      name: m.id,
    }));

    return NextResponse.json({ models });
  } catch (error) {
    clearTimeout(timeoutId);
    const message = error instanceof Error
      ? (error.name === 'AbortError' ? '请求超时（10秒）' : error.message)
      : '未知错误';
    return NextResponse.json({ error: `连接失败: ${message}` }, { status: 502 });
  }
}
