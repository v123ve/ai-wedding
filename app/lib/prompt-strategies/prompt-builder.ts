import type { PromptStrategy } from './types';

/**
 * Domain-specific prompt configuration
 */
interface DomainPromptConfig {
  role: string;              // 角色描述，如 "婚纱摄影风格分析师"
  photoType: string;         // 照片类型，如 "婚纱照"
  requirements: string[];    // 关键要求列表（5条）
}

/**
 * Default domain configurations
 * These can be overridden by database configurations in the future
 */
const DEFAULT_CONFIGS: Record<string, DomainPromptConfig> = {
  wedding: {
    role: '高端婚纱摄影导演与视觉品质总监',
    photoType: '婚纱照',
    requirements: [
      '身份一致性 — 必须保留上传人物的真实五官特征、脸型、年龄感、肤色连续性，确保跨张一致性，禁止漂移到网红脸或陌生模特脸',
      '情感可信度 — 追求自然亲密、克制喜悦、真实眼神交流，避免僵硬摆拍、夸张表情或虚假情绪',
      '服饰完整性 — 保证婚纱轮廓、头纱结构、蕾丝细节、西装版型完整合理，避免变形、塌陷、飘浮',
      '解剖准确性 — 严格检查手部手指数量、手腕姿势、手臂比例，婚纱照常见的捧花、牵手、搭腰动作尤其需要准确',
      '场景连贯性 — 前景/中景/背景逻辑一致，光线方向与环境匹配，人物自然融入场景',
      '灯光质量 — 优先柔和的定向光、自然轮廓光，避免平光死光或混杂色温',
      '构图多样性 — 8张图需覆盖远景定调、中景互动、特写情绪、动态抓拍、封面肖像等不同镜头功能，避免重复构图',
      '品质底线 — 拒绝低分辨率、模糊面部、塑料磨皮、卡通化、廉价旅拍感、过度饱和',
    ],
  },
  children: {
    role: '儿童摄影风格分析师',
    photoType: '儿童照片',
    requirements: [
      '保持儿童五官特征不变',
      '场景温馨可爱（公园、游乐场、花园等）',
      '色彩明亮温暖',
      '表情自然活泼',
      '返回JSON格式',
    ],
  },
  id_photo: {
    role: '证件照处理专家',
    photoType: '照片',
    requirements: [
      '保持人物五官特征不变',
      '生成不同底色（白色、蓝色、红色等）的证件照',
      '确保光线均匀、表情自然、姿势端正',
      '符合标准证件照规格',
      '返回JSON格式',
    ],
  },
  artistic: {
    role: '艺术摄影创意总监',
    photoType: '照片',
    requirements: [
      '保持人物基本特征',
      '融入不同艺术风格（油画、水彩、赛博朋克、超现实等）',
      '注重创意表达和视觉冲击力',
      '5个提示词风格差异明显',
      '返回JSON格式',
    ],
  },
  portrait: {
    role: '人像摄影风格分析师',
    photoType: '人像照片',
    requirements: [
      '保持人物五官特征不变',
      '不同风格（商务、文艺、复古、时尚、自然）',
      '注重光影、构图、色调',
      '5个提示词风格各异',
      '返回JSON格式',
    ],
  },
  anime: {
    role: '动漫风格转换专家',
    photoType: '照片中的人物特征',
    requirements: [
      '保持人物基本特征（发型、五官比例等）',
      '转换为不同动漫风格（日系、韩系、吉卜力、新海诚等）',
      '包含背景、服装、色调等细节',
      '5个提示词风格各异',
      '返回JSON格式',
    ],
  },
  landscape: {
    role: '风景摄影风格分析师',
    photoType: '风景照片',
    requirements: [
      '保持原始场景的核心元素',
      '不同时间段和天气（日出、黄昏、星空、雨后等）',
      '不同风格（写实、梦幻、HDR、极简等）',
      '注重色彩和氛围',
      '返回JSON格式',
    ],
  },
  product: {
    role: '商品摄影风格分析师',
    photoType: '商品图片',
    requirements: [
      '保持商品外观特征不变',
      '不同场景（纯色背景、生活场景、创意摆拍等）',
      '专业的商品摄影光线',
      '提升商品质感和吸引力',
      '返回JSON格式',
    ],
  },
  maternity: {
    role: '孕妇摄影风格分析师',
    photoType: '孕妇照片',
    requirements: [
      '保持人物五官特征不变',
      '温馨柔和的场景（室内、户外花园、海边等）',
      '突出孕期美感和母性光辉',
      '5个提示词风格各异（温馨、艺术、自然等）',
      '返回JSON格式',
    ],
  },
  graduation: {
    role: '毕业照摄影风格分析师',
    photoType: '毕业照片',
    requirements: [
      '保持人物五官特征不变',
      '学士服或校园场景（图书馆、操场、教学楼等）',
      '青春活力的氛围，展现毕业喜悦',
      '5个提示词风格各异（正式、活泼、怀旧等）',
      '返回JSON格式',
    ],
  },
  couple: {
    role: '情侣摄影风格分析师',
    photoType: '情侣照片',
    requirements: [
      '保持双方人物五官特征不变',
      '浪漫甜蜜的场景（约会地点、旅行景点、咖啡馆等）',
      '互动姿势自然（牵手、拥抱、对视等）',
      '5个提示词风格各异（浪漫、文艺、活泼等）',
      '返回JSON格式',
    ],
  },
};

/**
 * Unified PromptBuilder class
 * Replaces 8 separate strategy files with a single configurable builder
 */
export class PromptBuilder {
  private domain: string;
  private config: DomainPromptConfig;

  constructor(domain: string, customConfig?: Partial<DomainPromptConfig>) {
    // Store domain explicitly
    this.domain = domain;

    // Get default config or use fallback
    const defaultConfig = DEFAULT_CONFIGS[domain] || DEFAULT_CONFIGS.wedding;

    // Merge with custom config if provided
    this.config = {
      ...defaultConfig,
      ...customConfig,
    };
  }

  /**
   * Build system prompt
   */
  getSystemPrompt(): string {
    if (this.domain === 'wedding') {
      return `你是一个专业的${this.config.role}。

你的核心任务是生成一套完整、高级、有情感感染力的婚纱照提示词套系。

【品质标准】
- 输出必须满足高端婚纱摄影的审美品质，视觉语言克制、精致、有意图
- 每张图都应该看起来像是经验丰富的婚纱摄影师用心拍摄的成果，而不是随机生成的AI图像
- 拒绝低分辨率、塑料磨皮、廉价旅拍感、过度饱和、卡通化、夸张网红感

【输出要求】
- 整体套系需要有连贯性，观者应能相信这对情侣真实存在于这个视觉世界中
- 每张图在保持统一人物身份的前提下，通过构图、景别、互动方式的差异形成组图节奏`;
    }
    return `你是一个专业的${this.config.role}。`;
  }

  /**
   * Build analysis prompt
   */
  getAnalysisPrompt(imageDescription?: string): string {
    const requirementsList = this.config.requirements
      .map((req, index) => `${index + 1}. ${req}`)
      .join('\n');

    if (this.domain === 'wedding') {
      return `分析这张${this.config.photoType}，生成8张一组、构成完整婚纱照套系的AI图像生成提示词。

【身份保持约束】
每个提示词都必须包含"保持人物真实五官特征"这一核心要求，确保跨张身份一致性。

【8张组图结构要求】
套系必须覆盖以下8种镜头功能，构成完整组图节奏：
1. 远景定调 — 建立场景与环境氛围
2. 中景互动 — 表现情侣关系感与情感交流
3. 动态抓拍 — 捕捉自然动作与真实瞬间
4. 特写情绪 — 细腻刻画表情与亲密感
5. 互动细节 — 聚焦牵手、捧花等局部动作
6. 叙事背影 — 增强故事感与画面纵深
7. 动态婚纱 — 突出头纱、裙摆等动态美感
8. 封面肖像 — 高质量主视觉用于封面或海报

【质量要求】
${requirementsList}

【语言规则】
请根据对话使用的语言输出对应语言的提示词。

JSON格式：
{
  "prompts": [
    { "index": 1, "chinese": "...", "english": "..." }
  ]
}`;
    }

    return `分析这张${this.config.photoType}，生成5个${this.getStyleDescription()}的AI图像生成提示词。

关键要求：
${requirementsList}

JSON格式：
{
  "prompts": [
    { "index": 1, "chinese": "...", "english": "..." }
  ]
}`;
  }

  /**
   * Get style description based on domain
   */
  private getStyleDescription(): string {
    const styleMap: Record<string, string> = {
      wedding: '高端婚纱摄影套系',
      children: '可爱童趣风格',
      id_photo: '证件照风格',
      artistic: '创意艺术风格',
      portrait: '专业人像写真风格',
      anime: '动漫风格',
      landscape: '不同风格的风景',
      product: '专业商品展示风格',
      maternity: '温馨孕妇照风格',
      graduation: '毕业纪念照风格',
      couple: '浪漫情侣照风格',
    };

    return styleMap[this.domain] || '同类型';
  }

  /**
   * Convert to PromptStrategy interface
   */
  toStrategy(): PromptStrategy {
    return {
      systemPrompt: this.getSystemPrompt(),
      generateAnalysisPrompt: (imageDescription?: string) =>
        this.getAnalysisPrompt(imageDescription),
    };
  }
}

/**
 * Create a PromptStrategy for a given domain
 */
export function createPromptStrategy(
  domain: string,
  customConfig?: Partial<DomainPromptConfig>
): PromptStrategy {
  const builder = new PromptBuilder(domain, customConfig);
  return builder.toStrategy();
}
