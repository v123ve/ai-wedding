import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { TemplateCardWithPrompts } from '@/components/templates/TemplateCardWithPrompts';

interface TemplateDomainPageProps {
  params: Promise<{ domain: string }>;
}

export default async function TemplateDomainPage({ params }: TemplateDomainPageProps) {
  const { domain } = await params;

  const domainInfo = await prisma.domains.findUnique({
    where: { slug: domain },
  });

  if (!domainInfo || !domainInfo.is_active) {
    notFound();
  }

  const templates = await prisma.templates.findMany({
    where: { domain, is_active: true },
    orderBy: { sort_order: 'asc' },
  });

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 text-pearl/60 hover:text-alabaster mb-8 transition-colors text-sm tracking-wider uppercase font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          返回模板库
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-display font-medium text-alabaster mb-3 tracking-wider">
            {domainInfo.name} 模板
          </h1>
          <p className="text-pearl/60 font-light max-w-2xl">
            {domainInfo.description || `浏览 ${domainInfo.name} 风格的精选模板，选择心仪的风格开始创作`}
          </p>
        </div>

        {templates.length === 0 ? (
          <div className="py-20 text-center">
            <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full bg-white/5 border border-white/10">
              <ImageIcon className="w-10 h-10 text-pearl/60" />
            </div>
            <h3 className="mb-2 text-xl font-medium font-display text-alabaster tracking-wider">
              暂无模板
            </h3>
            <p className="mb-6 text-pearl/60 font-light">
              该领域暂时没有可用模板，请查看其他领域
            </p>
            <Link
              href="/templates"
              className="inline-flex gap-2 items-center px-8 py-4 text-sm tracking-widest uppercase font-medium bg-gold rounded-sm transition-all duration-700 text-obsidian hover:shadow-glow"
            >
              浏览全部模板
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template) => (
              <TemplateCardWithPrompts
                key={template.id}
                template={template}
                domain={domain}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
