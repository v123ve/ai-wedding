'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Image as ImageIcon, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface PromptConfig {
  basePrompt?: string;
  negativePrompt?: string;
  styleModifiers?: string[];
  [key: string]: unknown;
}

interface TemplateCardWithPromptsProps {
  template: {
    id: string;
    name: string;
    description: string | null;
    category: string;
    preview_image_url: string | null;
    prompt_config: unknown;
    prompt_list: unknown;
    price_credits: number;
    is_active: boolean;
    sort_order: number;
  };
  domain: string;
}

export function TemplateCardWithPrompts({ template, domain }: TemplateCardWithPromptsProps) {
  const [expanded, setExpanded] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const promptConfig = (typeof template.prompt_config === 'object' && template.prompt_config !== null
    ? template.prompt_config
    : {}) as PromptConfig;
  const promptList = Array.isArray(template.prompt_list) ? template.prompt_list as string[] : [];

  const basePrompt = typeof promptConfig.basePrompt === 'string' ? promptConfig.basePrompt : '';
  const negativePrompt = typeof promptConfig.negativePrompt === 'string' ? promptConfig.negativePrompt : '';

  const hasPrompts = basePrompt || negativePrompt || promptList.length > 0;

  const copyToClipboard = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 1500);
    } catch {
      // Clipboard API not available
    }
  }, []);

  const handleCopyAll = useCallback(() => {
    const parts: string[] = [];

    if (basePrompt) {
      parts.push('=== Base Prompt ===');
      parts.push(basePrompt);
      parts.push('');
    }

    if (negativePrompt) {
      parts.push('=== Negative Prompt ===');
      parts.push(negativePrompt);
      parts.push('');
    }

    promptList.forEach((prompt, index) => {
      parts.push(`=== Shot ${index + 1} ===`);
      parts.push(prompt);
      if (index < promptList.length - 1) {
        parts.push('');
      }
    });

    copyToClipboard(parts.join('\n'), 'all');
  }, [basePrompt, negativePrompt, promptList, copyToClipboard]);

  return (
    <div className="group bg-black/40 border border-white/10 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-gold/30">
      <div className="relative aspect-[3/4] overflow-hidden">
        {template.preview_image_url ? (
          <Image
            src={template.preview_image_url}
            alt={template.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-pearl/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <h3 className="font-medium font-display text-alabaster tracking-wide mb-1 line-clamp-1">
          {template.name}
        </h3>
        {template.description && (
          <p className="text-xs text-pearl/50 font-light mb-4 line-clamp-2">
            {template.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xs text-pearl/40 tracking-wider">
            {template.price_credits} 积分
          </span>
          <div className="flex items-center gap-2">
            {hasPrompts && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs tracking-wider uppercase font-medium text-gold hover:text-alabaster border border-gold/30 hover:border-gold/60 rounded-sm transition-all duration-300"
                aria-label={expanded ? '收起提示词' : '查看提示词'}
              >
                {expanded ? (
                  <>
                    收起提示词
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    查看提示词
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
            <Link
              href={`/create?domain=${domain}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-obsidian rounded-sm text-xs font-medium tracking-wider uppercase hover:shadow-glow transition-all duration-500"
            >
              <Sparkles className="w-3 h-3" />
              使用模板
            </Link>
          </div>
        </div>

        {expanded && hasPrompts && (
          <div className="mt-4 bg-white/5 border border-white/10 rounded-sm p-4 space-y-3">
            {/* Copy All Button */}
            <button
              onClick={handleCopyAll}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gold/30 text-gold hover:bg-gold/10 rounded-sm text-xs font-medium tracking-wider uppercase transition-all duration-300"
            >
              {copiedLabel === 'all' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">已复制全部</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  复制全部
                </>
              )}
            </button>

            <div className="border-t border-white/5 my-1" />

            {/* Base Prompt */}
            {basePrompt && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-gold tracking-wider uppercase font-medium">
                    基础提示词 (Base Prompt)
                  </span>
                  <button
                    onClick={() => copyToClipboard(basePrompt, 'basePrompt')}
                    className="flex items-center gap-1 text-xs text-gold hover:text-alabaster transition-colors"
                  >
                    {copiedLabel === 'basePrompt' ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        <span className="text-green-400">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        复制
                      </>
                    )}
                  </button>
                </div>
                <p className="font-mono text-sm leading-relaxed text-white/80 whitespace-pre-wrap break-words">
                  {basePrompt}
                </p>
              </div>
            )}

            {/* Negative Prompt */}
            {negativePrompt && (
              <>
                <div className="border-t border-white/5 my-2" />
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gold tracking-wider uppercase font-medium">
                      负面提示词 (Negative Prompt)
                    </span>
                    <button
                      onClick={() => copyToClipboard(negativePrompt, 'negativePrompt')}
                      className="flex items-center gap-1 text-xs text-gold hover:text-alabaster transition-colors"
                    >
                      {copiedLabel === 'negativePrompt' ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          复制
                        </>
                      )}
                    </button>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white/80 whitespace-pre-wrap break-words">
                    {negativePrompt}
                  </p>
                </div>
              </>
            )}

            {/* Prompt List */}
            {promptList.length > 0 && (
              <>
                <div className="border-t border-white/5 my-2" />
                {promptList.map((prompt, index) => (
                  <div key={index}>
                    {index > 0 && <div className="border-t border-white/5 my-2" />}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gold tracking-wider uppercase font-medium">
                          组图 {index + 1}/{promptList.length}
                        </span>
                        <button
                          onClick={() => copyToClipboard(prompt, `prompt-${index}`)}
                          className="flex items-center gap-1 text-xs text-gold hover:text-alabaster transition-colors"
                        >
                          {copiedLabel === `prompt-${index}` ? (
                            <>
                              <Check className="w-3 h-3 text-green-400" />
                              <span className="text-green-400">已复制</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              复制
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-white/80 whitespace-pre-wrap break-words">
                        {prompt}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
