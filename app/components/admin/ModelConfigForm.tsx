"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ModelConfig, CreateModelConfigInput, ModelConfigType, ModelConfigStatus, ModelConfigSource } from '@/types/model-config';

const TYPE_LABELS: Record<ModelConfigType, string> = {
  'generate-image': '图片生成',
  'identify-image': '识别图片',
  'generate-prompts': '生成提示词',
  'other': '其他',
};

const TYPE_OPTIONS: { value: ModelConfigType; label: string }[] = [
  { value: 'generate-image', label: '图片生成' },
  { value: 'identify-image', label: '识别图片' },
  { value: 'generate-prompts', label: '生成提示词' },
  { value: 'other', label: '其他' },
];

interface ModelConfigFormProps {
  config?: ModelConfig | null;
  onSubmit: (input: CreateModelConfigInput) => Promise<void>;
  onCancel: () => void;
}

export function ModelConfigForm({ config, onSubmit, onCancel }: ModelConfigFormProps) {
  const [formData, setFormData] = useState({
    type: 'generate-image' as ModelConfigType,
    name: '',
    api_base_url: '',
    api_key: '',
    model_name: '',
    status: 'active' as ModelConfigStatus,
    source: 'openAi' as ModelConfigSource,
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [models, setModels] = useState<{ id: string; name: string }[]>([]);
  const [isFetchingModels, setIsFetchingModels] = useState(false);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [connectionTestResult, setConnectionTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [nameManuallyEdited, setNameManuallyEdited] = useState(false);

  const isEditing = !!config;

  useEffect(() => {
    if (config) {
      setFormData({
        type: config.type,
        name: config.name,
        api_base_url: config.api_base_url,
        api_key: config.api_key,
        model_name: config.model_name,
        status: config.status,
        source: config.source,
        description: config.description || '',
      });
    }
  }, [config]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.api_base_url || !formData.api_key || !formData.model_name) {
      alert('请填写所有必填字段');
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (field === 'type') {
      if (!isEditing && !nameManuallyEdited) {
        const label = TYPE_LABELS[value as ModelConfigType] || value;
        setFormData((prev) => ({ ...prev, type: value as ModelConfigType, name: label }));
        return;
      }
      setFormData((prev) => ({ ...prev, type: value as ModelConfigType }));
      return;
    }

    if (field === 'name') {
      setNameManuallyEdited(true);
    }

    if (field === 'api_base_url' || field === 'api_key') {
      setModels([]);
      setConnectionTestResult(null);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFetchModels = async () => {
    if (!formData.api_base_url || !formData.api_key) {
      alert('请先填写 API Base URL 和 API Key');
      return;
    }

    setIsFetchingModels(true);
    setModels([]);

    try {
      const response = await fetch('/api/admin/model-configs/fetch-models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_base_url: formData.api_base_url,
          api_key: formData.api_key,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModels(data.models || []);
        if (data.models?.length === 0) {
          alert('未获取到任何模型');
        }
      } else {
        alert(data.error || '获取模型列表失败');
      }
    } catch {
      alert('获取模型列表失败，请检查网络连接');
    } finally {
      setIsFetchingModels(false);
    }
  };

  const handleTestConnection = async () => {
    if (!formData.api_base_url || !formData.api_key) {
      alert('请先填写 API Base URL 和 API Key');
      return;
    }

    setIsTestingConnection(true);
    setConnectionTestResult(null);

    try {
      const response = await fetch('/api/admin/model-configs/test-connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_base_url: formData.api_base_url,
          api_key: formData.api_key,
        }),
      });

      const data = await response.json();
      setConnectionTestResult({ success: data.success, message: data.message });
    } catch {
      setConnectionTestResult({ success: false, message: '网络错误，请检查连接' });
    } finally {
      setIsTestingConnection(false);
    }
  };

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/60 backdrop-blur-sm">
      <div className="bg-card text-card-foreground border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">
            {config ? '编辑配置' : '新建配置'}
          </h2>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <Label>
              配置类型 <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleChange('type', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择类型" />
              </SelectTrigger>
              <SelectContent>
                {TYPE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>
              配置名称 <span className="text-destructive">*</span>
            </Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="例如：默认图片生成配置"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              API Base URL <span className="text-destructive">*</span>
            </Label>
            <Input
              type="url"
              value={formData.api_base_url}
              onChange={(e) => handleChange('api_base_url', e.target.value)}
              placeholder="https://api.openai.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              API Key <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              <Input
                type="password"
                value={formData.api_key}
                onChange={(e) => handleChange('api_key', e.target.value)}
                placeholder="sk-..."
                required
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleTestConnection}
                disabled={isTestingConnection || !formData.api_base_url || !formData.api_key}
              >
                {isTestingConnection ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  '测试连接'
                )}
              </Button>
            </div>
            {connectionTestResult && (
              <div className={`flex items-center gap-2 text-sm mt-1 ${connectionTestResult.success ? 'text-green-600' : 'text-destructive'}`}>
                {connectionTestResult.success ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                {connectionTestResult.message}
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              敏感信息，请妥善保管
            </p>
          </div>

          <div className="space-y-2">
            <Label>
              模型名称 <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              {models.length > 0 ? (
                <div className="flex-1">
                  <Select
                    value={formData.model_name}
                    onValueChange={(value) => handleChange('model_name', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择模型" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((m) => (
                        <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <Input
                  type="text"
                  value={formData.model_name}
                  onChange={(e) => handleChange('model_name', e.target.value)}
                  placeholder="例如：gemini-2.5-flash"
                  required
                  className="flex-1"
                />
              )}
              <Button
                type="button"
                variant="outline"
                onClick={handleFetchModels}
                disabled={isFetchingModels || !formData.api_base_url || !formData.api_key}
              >
                {isFetchingModels ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  '获取模型列表'
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>
              状态 <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.status}
              onValueChange={(value) => handleChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inactive">停用</SelectItem>
                <SelectItem value="active">激活</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              同一类型只能有一个激活配置，激活此配置将自动停用其他配置
            </p>
          </div>

          <div className="space-y-2">
            <Label>
              模型来源 <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.source}
              onValueChange={(value) => handleChange('source', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择来源" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openAi">OpenAI</SelectItem>
                <SelectItem value="openRouter">OpenRouter</SelectItem>
                <SelectItem value="302">302.AI</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              选择模型的API提供商
            </p>
          </div>

          <div className="space-y-2">
            <Label>
              描述
            </Label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="配置说明..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button type="button" variant="outline" onClick={onCancel}>
              取消
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? '提交中...' : config ? '更新' : '创建'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
