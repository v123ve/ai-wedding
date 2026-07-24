import type { Prisma } from '../../generated/prisma/client';

type TemplateSeed = {
  name: string;
  description: string;
  category: string;
  domain: string;
  preview_image_url: string | null;
  prompt_config: Prisma.InputJsonValue;
  prompt_list: Prisma.InputJsonValue;
  prompt_descriptions: Prisma.InputJsonValue;
  price_credits: number;
  is_active: boolean;
  sort_order: number;
};

// ============================================================
// Anime domain
// ============================================================
const animeTemplates: TemplateSeed[] = [
  {
    name: '日系动漫',
    description: '日本动漫风格转换',
    category: 'japanese',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'Japanese anime style character' },
    prompt_list: [
      'Japanese anime style character with vibrant colors and detailed eyes',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '国漫风格',
    description: '中国动漫风格转换',
    category: 'chinese',
    domain: 'anime',
    preview_image_url:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'Chinese anime style character' },
    prompt_list: [
      'Chinese anime style character, elegant flowing hair, traditional-inspired outfit, soft watercolor aesthetic, gentle expression',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: 'Q版卡通',
    description: '可爱Q版卡通风格',
    category: 'chibi',
    domain: 'anime',
    preview_image_url:
      'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'cute chibi cartoon style' },
    prompt_list: [
      'Cute chibi cartoon style character, oversized head, big sparkling eyes, adorable proportions, pastel colors, kawaii aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '美式漫画',
    description: '美式漫画风格',
    category: 'western',
    domain: 'anime',
    preview_image_url:
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'American comic book style' },
    prompt_list: [
      'American comic book style character, bold outlines, vibrant colors, dynamic pose, halftone shading, superhero aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '像素风格',
    description: '复古像素艺术风格',
    category: 'pixel',
    domain: 'anime',
    preview_image_url:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'pixel art style' },
    prompt_list: [
      'Retro pixel art style character, 8-bit aesthetic, vibrant colors, nostalgic gaming vibe',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '水彩插画风格',
    description: '水彩画风格动漫头像,柔和色彩与手绘质感,艺术感十足',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394318/pexels-photo-3394318.jpeg',
    prompt_config: {
      color: 'soft pastel watercolor tones',
      style: 'watercolor art style',
      texture: 'watercolor paper texture, brush strokes visible',
      basePrompt:
        'watercolor illustration anime portrait, soft colors, hand-painted texture',
    },
    prompt_list: [
      'Watercolor illustration anime portrait, soft pastel colors, hand-painted texture, delicate brush strokes, artistic watercolor style, gentle and dreamy atmosphere',
      'Anime character watercolor art, flowing colors, transparent watercolor effect, artistic illustration style, soft and beautiful',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 108,
  },
  {
    name: '蒸汽朋克风格',
    description:
      '蒸汽朋克主题动漫头像,维多利亚时代与机械美学融合,独特复古未来感',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394319/pexels-photo-3394319.jpeg',
    prompt_config: {
      color: 'brass, copper, brown tones with steam effects',
      style: 'steampunk illustration',
      elements: 'gears, goggles, mechanical parts, steam',
      basePrompt:
        'steampunk anime portrait, Victorian era meets mechanical aesthetics',
    },
    prompt_list: [
      'Steampunk anime portrait, Victorian costume with mechanical accessories, brass and copper tones, gears and goggles, steam effects, retro-futuristic atmosphere',
      'Steampunk character illustration, mechanical aesthetic, Victorian era fashion, industrial elements, warm sepia tones with metallic accents',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 109,
  },
  {
    name: '魔幻奇幻风格',
    description:
      '西方奇幻风格动漫头像,精灵、魔法师等奇幻角色,充满魔幻色彩',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394320/pexels-photo-3394320.jpeg',
    prompt_config: {
      color: 'magical glowing colors, ethereal tones',
      style: 'western fantasy illustration',
      elements: 'magic effects, fantasy costume, mystical atmosphere',
      basePrompt:
        'fantasy anime portrait, elf or mage character, magical elements',
    },
    prompt_list: [
      'Fantasy anime portrait, elf character with pointed ears, magical costume, glowing magical effects, ethereal atmosphere, western fantasy illustration style',
      'Anime mage character, fantasy robes, magical staff, mystical glowing effects, enchanted background, high fantasy illustration',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 110,
  },
  {
    name: '像素艺术升级版',
    description:
      '高清像素艺术风格动漫头像,复古游戏美学与现代色彩的完美结合',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394321/pexels-photo-3394321.jpeg',
    prompt_config: {
      color: 'vibrant retro game colors',
      style: 'pixel art illustration',
      texture: 'visible pixel grid, 16-bit or 32-bit style',
      basePrompt:
        'HD pixel art anime portrait, retro game aesthetic, vibrant colors',
    },
    prompt_list: [
      'HD pixel art anime portrait, retro video game aesthetic, vibrant colors, visible pixel grid, 32-bit style character design, nostalgic gaming atmosphere',
      'Pixel art character portrait, colorful retro game style, detailed pixel work, classic gaming aesthetic, bright and vivid colors',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 111,
  },
  {
    name: '韩系漫画风格',
    description:
      '韩国网络漫画风格头像,清新柔和的线条与色彩,现代时尚感',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394311/pexels-photo-3394311.jpeg',
    prompt_config: {
      color: 'soft pastel colors, gentle shading',
      style: 'Korean manhwa/webtoon art style',
      features:
        'large expressive eyes, soft facial features, modern fashion',
      basePrompt:
        'Korean webtoon style anime portrait, soft lines, pastel colors',
    },
    prompt_list: [
      'Korean webtoon style anime portrait, soft and clean lines, pastel color palette, large expressive eyes, gentle shading, modern fashion style, fresh and trendy aesthetic',
      'Korean manhwa art style avatar, delicate linework, soft colors, beautiful facial features, contemporary clothing, romantic and elegant mood',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 400,
  },
  {
    name: '赛博朋克动漫',
    description: '赛博朋克风格动漫头像,霓虹色彩与科技元素,未来感十足',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394312/pexels-photo-3394312.jpeg',
    prompt_config: {
      color: 'neon colors, high contrast, glowing effects',
      style: 'cyberpunk anime art style',
      features:
        'tech accessories, futuristic clothing, urban background',
      basePrompt:
        'cyberpunk anime portrait, neon colors, futuristic tech elements',
    },
    prompt_list: [
      'Cyberpunk anime portrait, neon color scheme with pink and blue, futuristic tech accessories, glowing effects, urban night cityscape background, high-tech and edgy aesthetic',
      'Futuristic anime style avatar, cyberpunk fashion, neon lighting, tech implants or accessories, dark urban setting with neon signs, cool and rebellious mood',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 401,
  },
  {
    name: '古风仙侠动漫',
    description:
      '中国古风仙侠动漫头像,飘逸服饰与仙气氛围,东方美学韵味',
    category: 'style',
    domain: 'anime',
    preview_image_url:
      'https://images.pexels.com/photos/3394313/pexels-photo-3394313.jpeg',
    prompt_config: {
      color: 'elegant traditional colors, soft gradients',
      style: 'Chinese xianxia anime art style',
      features:
        'traditional Chinese clothing, long flowing hair, mystical elements',
      basePrompt:
        'Chinese ancient style xianxia anime portrait, flowing robes, ethereal atmosphere',
    },
    prompt_list: [
      'Chinese ancient style xianxia anime portrait, elegant flowing robes, long hair with traditional ornaments, ethereal and mystical atmosphere, soft traditional color palette, graceful and immortal aesthetic',
      'Traditional Chinese fantasy anime avatar, hanfu or xianxia costume, delicate facial features, mystical background with clouds or mountains, elegant and otherworldly mood',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 402,
  },
];

// ============================================================
// Artistic domain
// ============================================================
const artisticTemplates: TemplateSeed[] = [
  {
    name: '油画风格',
    description: '经典油画艺术风格',
    category: 'painting',
    domain: 'artistic',
    preview_image_url:
      'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'oil painting style portrait' },
    prompt_list: [
      'Classical oil painting style portrait with rich colors and dramatic lighting',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '国风水墨',
    description: '中国传统水墨画风格',
    category: 'traditional',
    domain: 'artistic',
    preview_image_url:
      'https://images.unsplash.com/photo-1528991435120-e73e05a58897?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'Chinese ink painting style portrait' },
    prompt_list: [
      'Portrait in traditional Chinese ink painting style, flowing brushstrokes, monochrome with subtle color accents, ethereal atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '赛博朋克',
    description: '未来科幻赛博朋克风格',
    category: 'scifi',
    domain: 'artistic',
    preview_image_url:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'cyberpunk style portrait' },
    prompt_list: [
      'Cyberpunk style portrait, neon lights, futuristic cityscape background, high-tech aesthetic, vibrant purple and blue tones',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '复古胶片',
    description: '80年代复古胶片风格',
    category: 'vintage',
    domain: 'artistic',
    preview_image_url:
      'https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'vintage film photography style' },
    prompt_list: [
      'Vintage 1980s film photography style, grainy texture, warm faded colors, nostalgic atmosphere, analog camera aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '梦幻插画',
    description: '梦幻童话插画风格',
    category: 'illustration',
    domain: 'artistic',
    preview_image_url:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'dreamy illustration style' },
    prompt_list: [
      'Dreamy illustration style portrait, soft pastel colors, whimsical atmosphere, fairy tale aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 5,
  },
];

// ============================================================
// Children domain
// ============================================================
const childrenTemplates: TemplateSeed[] = [
  {
    name: '可爱童趣',
    description: '温馨可爱的儿童摄影风格',
    category: 'outdoor',
    domain: 'children',
    preview_image_url:
      'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'cute children photo in a garden' },
    prompt_list: [
      'A cute child playing in a sunny garden with flowers',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '百天纪念照',
    description: '宝宝百天纪念，温馨可爱风格',
    category: 'milestone',
    domain: 'children',
    preview_image_url: null,
    prompt_config: { basePrompt: 'adorable baby 100-day milestone photo' },
    prompt_list: [
      'A cute baby in soft pastel outfit, lying on fluffy white blanket, natural window light, gentle smile',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '周岁抓周',
    description: '宝宝周岁抓周仪式照',
    category: 'milestone',
    domain: 'children',
    preview_image_url: null,
    prompt_config: { basePrompt: 'first birthday celebration photo' },
    prompt_list: [
      'A happy one-year-old baby sitting with colorful toys, birthday cake, bright studio lighting, joyful expression',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '亲子互动',
    description: '温馨亲子时光记录',
    category: 'family',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'warm family moment with children' },
    prompt_list: [
      'Parents playing with young child in park, golden hour sunlight, natural candid moment, genuine smiles',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '户外探险',
    description: '儿童户外活动记录',
    category: 'outdoor',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1503516459261-40c66117780a?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'children outdoor adventure photo' },
    prompt_list: [
      'Child exploring nature, running in meadow, bright sunny day, playful energy, vibrant colors',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '新生儿写真',
    description: '新生儿满月纪念照',
    category: 'newborn',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'newborn baby portrait' },
    prompt_list: [
      'Peaceful newborn baby sleeping, wrapped in soft blanket, gentle natural light, tender moment',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 6,
  },
  {
    name: '儿童派对',
    description: '生日派对欢乐时刻',
    category: 'party',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'children birthday party photo' },
    prompt_list: [
      'Joyful children at birthday party, colorful balloons and decorations, happy celebration moment',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 7,
  },
  {
    name: '校园时光',
    description: '校园生活记录',
    category: 'school',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'school children photo' },
    prompt_list: [
      'Children in school uniform, classroom or playground setting, natural candid moment, bright daylight',
    ],
    prompt_descriptions: [],
    price_credits: 8,
    is_active: true,
    sort_order: 8,
  },
  {
    name: '兄弟姐妹',
    description: '兄弟姐妹温馨合照',
    category: 'siblings',
    domain: 'children',
    preview_image_url:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'siblings portrait' },
    prompt_list: [
      'Siblings together, warm interaction, natural smiles, soft lighting, family bond moment',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 9,
  },
  {
    name: '太空宇航员主题',
    description: '宇航员主题儿童照,星际探索与宇宙梦想,激发孩子对科学的热爱',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'creative themed photography',
      lighting: 'dramatic space-inspired lighting',
      background: 'space, stars, planets',
      basePrompt: 'astronaut theme children portrait, space exploration, cosmic background',
    },
    prompt_list: [
      'Child astronaut portrait, space suit costume, cosmic background with stars and planets, dramatic lighting, space exploration theme, imaginative and inspiring',
      'Kids space theme photo, astronaut outfit, galaxy background, futuristic atmosphere, creative children photography',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 116,
  },
  {
    name: '魔法师/魔女主题',
    description: '魔法主题儿童照,神秘魔法世界与奇幻氛围,让孩子体验魔法的奇妙',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'fantasy themed photography',
      lighting: 'magical glowing light effects',
      background: 'enchanted forest or magical castle',
      basePrompt: 'wizard witch theme children portrait, magical fantasy world',
    },
    prompt_list: [
      'Child wizard portrait, magical costume with hat and wand, enchanted forest background, mystical glowing effects, fantasy photography style',
      'Little witch children photo, magical outfit, spellcasting pose, mysterious atmosphere, fantasy world background, creative themed photography',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 117,
  },
  {
    name: '运动员主题',
    description: '运动主题儿童照,足球、篮球、游泳等运动场景,培养孩子的运动精神',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'sports photography',
      lighting: 'bright outdoor or stadium lighting',
      background: 'sports field or gym',
      basePrompt: 'sports theme children portrait, athletic activities, energetic',
    },
    prompt_list: [
      'Child sports portrait, athletic outfit, dynamic action pose, sports field background, energetic and confident expression, sports photography style',
      'Kids athlete photo, sports uniform, active pose, stadium or field background, bright lighting, youthful energy and enthusiasm',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 118,
  },
  {
    name: '艺术家主题',
    description: '小画家、小音乐家等艺术主题儿童照,展现孩子的艺术天赋与创造力',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'artistic themed photography',
      lighting: 'warm creative studio lighting',
      background: 'art studio or music room',
      basePrompt: 'artist theme children portrait, painting or music, creative atmosphere',
    },
    prompt_list: [
      'Child artist portrait, painting smock with colorful paint, art studio background, creative atmosphere, warm lighting, artistic and imaginative',
      'Little musician children photo, instrument in hand, music room background, focused expression, warm studio lighting, artistic theme photography',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 119,
  },
  {
    name: '小王子/小公主主题',
    description: '童话故事主题儿童照,精致服装与梦幻场景,让孩子成为童话中的主角',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      props: 'crown, royal costume, fairy tale elements',
      style: 'fairy tale photography',
      lighting: 'soft dreamy lighting',
      basePrompt: 'little prince or princess themed children photo, fairy tale style',
    },
    prompt_list: [
      'Little prince or princess themed children portrait, royal costume with crown, fairy tale castle background, soft dreamy lighting, magical atmosphere, professional children photography',
      'Fairy tale themed kids photo, elegant royal attire, enchanted forest or castle setting, gentle lighting, whimsical and magical mood, high-quality children portrait',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 200,
  },
  {
    name: '超级英雄主题',
    description: '超级英雄主题儿童照,酷炫服装与动感场景,激发孩子的英雄梦想',
    category: 'theme',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      props: 'superhero costume, cape, mask',
      style: 'action photography',
      lighting: 'dramatic lighting with effects',
      basePrompt: 'superhero themed children photo, action pose, dynamic scene',
    },
    prompt_list: [
      'Superhero themed children portrait, cool superhero costume with cape, action pose, dramatic lighting with special effects, urban or sky background, dynamic and powerful mood',
      'Kids superhero photo, heroic costume and mask, confident pose, cinematic lighting, city skyline or action scene background, exciting and energetic atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 201,
  },
  {
    name: '春日樱花儿童照',
    description: '春季樱花主题儿童照,粉色花海与温暖阳光,记录春天的美好时光',
    category: 'seasonal',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'natural outdoor photography',
      season: 'spring, cherry blossom season',
      lighting: 'soft spring sunlight',
      basePrompt: 'spring cherry blossom children photo, pink flowers, warm sunlight',
    },
    prompt_list: [
      'Spring children portrait under cherry blossom trees, pink flower petals falling, warm soft sunlight, gentle breeze, joyful expression, natural outdoor photography',
      'Kids photo in cherry blossom garden, surrounded by pink flowers, golden hour lighting, spring atmosphere, happy and carefree mood, beautiful natural setting',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 202,
  },
  {
    name: '夏日海滩儿童照',
    description: '夏季海滩主题儿童照,蓝天碧海与金色沙滩,捕捉夏日欢乐时光',
    category: 'seasonal',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'outdoor beach photography',
      season: 'summer, beach vacation',
      lighting: 'bright summer sunlight',
      basePrompt: 'summer beach children photo, blue ocean, golden sand',
    },
    prompt_list: [
      'Summer beach children portrait, playing on golden sand, blue ocean and sky background, bright sunlight, joyful and energetic mood, vacation photography style',
      'Kids photo at the beach, seaside activities, clear blue water, sunny day, happy summer vibes, natural outdoor children photography',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 203,
  },
  {
    name: '秋日枫叶儿童照',
    description: '秋季枫叶主题儿童照,金黄红叶与温暖色调,记录秋天的诗意瞬间',
    category: 'seasonal',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'natural outdoor photography',
      season: 'autumn, fall colors',
      lighting: 'warm autumn sunlight',
      basePrompt: 'autumn maple leaves children photo, golden and red foliage',
    },
    prompt_list: [
      'Autumn children portrait in maple forest, golden and red leaves falling, warm sunlight filtering through trees, cozy atmosphere, natural outdoor photography',
      'Kids photo surrounded by fall foliage, colorful autumn leaves, soft warm lighting, peaceful and poetic mood, beautiful seasonal photography',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 204,
  },
  {
    name: '冬日雪景儿童照',
    description: '冬季雪景主题儿童照,纯白雪地与温暖服装,捕捉冬日童趣时刻',
    category: 'seasonal',
    domain: 'children',
    preview_image_url: null,
    prompt_config: {
      style: 'outdoor winter photography',
      season: 'winter, snowy day',
      lighting: 'soft winter light',
      basePrompt: 'winter snow children photo, white snow landscape, warm clothing',
    },
    prompt_list: [
      'Winter children portrait in snow, white snowy landscape, warm winter clothing, soft natural light, joyful playing in snow, cozy winter atmosphere',
      'Kids photo in winter wonderland, snow-covered ground, colorful winter outfits, gentle lighting, happy and playful mood, seasonal outdoor photography',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 205,
  },
];

// ============================================================
// Couple domain
// ============================================================
const coupleTemplates: TemplateSeed[] = [
  {
    name: '浪漫情侣照',
    description: '浪漫甜蜜情侣写真',
    category: 'romantic',
    domain: 'couple',
    preview_image_url: null,
    prompt_config: { basePrompt: 'romantic couple photography' },
    prompt_list: [
      'Romantic couple embracing at sunset, golden hour lighting, silhouette against colorful sky, intimate and loving atmosphere, dreamy mood',
      'Couple kissing in a beautiful outdoor setting, soft natural light, flowers or nature background, tender and romantic moment',
      'Loving couple holding hands and walking together, scenic background, warm lighting, natural and affectionate poses, connection and intimacy',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '约会情侣照',
    description: '日常约会场景情侣照',
    category: 'lifestyle',
    domain: 'couple',
    preview_image_url: null,
    prompt_config: { basePrompt: 'lifestyle couple photography' },
    prompt_list: [
      'Couple on a date at a cafe, sitting together, laughing and talking, natural candid moment, warm and cozy atmosphere',
      'Lifestyle couple photo, walking in the city, holding hands, casual clothing, urban background, relaxed and happy expressions',
      'Couple enjoying picnic in the park, sitting on blanket, natural outdoor setting, playful and fun interaction, sunny day',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '旅行情侣照',
    description: '旅行纪念情侣合照',
    category: 'travel',
    domain: 'couple',
    preview_image_url: null,
    prompt_config: { basePrompt: 'travel couple photography' },
    prompt_list: [
      'Couple traveling together, scenic destination background, mountains or beach, adventurous and joyful mood, vacation vibes',
      'Travel couple photo at famous landmark, holding hands, tourist destination, happy and excited expressions, memorable moment',
      'Couple on beach vacation, walking along shoreline, sunset lighting, relaxed and romantic atmosphere, tropical paradise',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '文艺情侣照',
    description: '文艺清新情侣写真',
    category: 'artistic',
    domain: 'couple',
    preview_image_url:
      'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'artistic couple photography' },
    prompt_list: [
      'Artistic couple portrait, soft focus and dreamy atmosphere, natural light, romantic and poetic mood, pastel colors',
      'Creative couple photo with interesting composition, artistic angles, unique perspective, sophisticated and elegant style',
      'Fine art couple portrait, black and white or muted tones, emotional and intimate, gallery-worthy quality',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '活力情侣照',
    description: '青春活力情侣照',
    category: 'dynamic',
    domain: 'couple',
    preview_image_url: null,
    prompt_config: { basePrompt: 'dynamic couple photography' },
    prompt_list: [
      'Energetic couple jumping together, holding hands in mid-air, joyful expressions, dynamic action shot, fun and playful mood',
      'Couple running or playing together, outdoor setting, motion and energy, laughing and having fun, youthful and vibrant',
      'Playful couple photo, piggyback ride or playful interaction, casual and fun atmosphere, genuine happiness and connection',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '居家情侣照',
    description: '温馨居家情侣照',
    category: 'home',
    domain: 'couple',
    preview_image_url: null,
    prompt_config: { basePrompt: 'home couple photography' },
    prompt_list: [
      'Cozy couple photo at home, cuddling on couch, natural window light, intimate and comfortable atmosphere, relaxed poses',
      'Domestic couple portrait, cooking or doing activities together at home, candid and authentic moments, warm lighting',
      'Couple in bedroom or living room, morning light, casual clothing, intimate and personal setting, genuine connection',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 6,
  },
];

// ============================================================
// Graduation domain
// ============================================================
const graduationTemplates: TemplateSeed[] = [
  {
    name: '经典学士服',
    description: '传统学士服毕业照',
    category: 'classic',
    domain: 'graduation',
    preview_image_url:
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'graduation photography' },
    prompt_list: [
      'Graduate in traditional black cap and gown, holding diploma, standing in front of university building, proud smile, professional graduation portrait',
      'Classic graduation photo, student in academic regalia, mortarboard cap, formal pose on campus, bright sunny day, celebratory atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '校园毕业照',
    description: '校园标志性建筑毕业照',
    category: 'campus',
    domain: 'graduation',
    preview_image_url:
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'campus graduation photography' },
    prompt_list: [
      'Graduate posing in front of iconic campus gate or entrance, wearing cap and gown, holding diploma, sunny day, memorable location',
      'Graduation photo on university campus lawn, student in academic regalia, historic buildings in background, natural outdoor lighting',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '活力毕业照',
    description: '青春活力毕业纪念照',
    category: 'dynamic',
    domain: 'graduation',
    preview_image_url:
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'dynamic graduation photography' },
    prompt_list: [
      'Graduate jumping in the air with joy, cap and gown flowing, campus background, energetic and celebratory moment, bright sunny day',
      'Group of graduates throwing caps in the air together, dynamic action shot, blue sky background, joyful celebration, friendship and achievement',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '怀旧毕业照',
    description: '复古怀旧风格毕业照',
    category: 'vintage',
    domain: 'graduation',
    preview_image_url:
      'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'vintage graduation photography' },
    prompt_list: [
      'Vintage style graduation photo, sepia or faded color tones, graduate in classic cap and gown, nostalgic and timeless atmosphere',
      'Retro graduation portrait, film photography aesthetic, graduate with diploma, old campus buildings, nostalgic mood',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 6,
  },
];

// ============================================================
// ID Photo domain
// ============================================================
const idPhotoTemplates: TemplateSeed[] = [
  {
    name: '标准证件照',
    description: '职业形象照片',
    category: 'resume',
    domain: 'id_photo',
    preview_image_url: null,
    prompt_config: { basePrompt: 'professional resume photo' },
    prompt_list: [
      'Professional resume photo, light blue background, confident smile, business casual attire, studio lighting',
    ],
    prompt_descriptions: [],
    price_credits: 7,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '护照照片',
    description: '国际护照标准照',
    category: 'passport',
    domain: 'id_photo',
    preview_image_url: null,
    prompt_config: { basePrompt: 'passport photo' },
    prompt_list: [
      'International passport photo, white background, neutral expression, formal attire, standard lighting',
    ],
    prompt_descriptions: [],
    price_credits: 6,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '彩色背景证件照',
    description: '红色、蓝色、白色等多种背景色可选的标准证件照',
    category: 'standard',
    domain: 'id_photo',
    preview_image_url: null,
    prompt_config: {
      style: 'standard ID photography',
      background: 'red, blue, or white solid color',
      basePrompt: 'ID photo with colored background, red or blue background options',
      requirements: 'front facing, no hat, standard ID photo format',
    },
    prompt_list: [
      'Standard ID photo, bright red background, front facing portrait, neutral expression, formal attire, sharp focus, official ID standard',
    ],
    prompt_descriptions: [],
    price_credits: 6,
    is_active: true,
    sort_order: 117,
  },
];

// ============================================================
// Landscape domain
// ============================================================
const landscapeTemplates: TemplateSeed[] = [
  {
    name: '壮丽山河',
    description: '壮观自然风景',
    category: 'nature',
    domain: 'landscape',
    preview_image_url:
      'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'majestic mountain landscape' },
    prompt_list: [
      'Majestic mountain landscape with dramatic sky and golden hour lighting',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '梦幻星空',
    description: '璀璨星空夜景',
    category: 'night',
    domain: 'landscape',
    preview_image_url:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'dreamy starry night sky' },
    prompt_list: [
      'Dreamy starry night sky, Milky Way visible, silhouette of mountains, deep blue and purple tones, peaceful atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '海滨日落',
    description: '浪漫海边日落',
    category: 'seascape',
    domain: 'landscape',
    preview_image_url:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'romantic beach sunset' },
    prompt_list: [
      'Romantic beach sunset, golden hour lighting, gentle waves, warm orange and pink sky, serene coastal scene',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '城市夜景',
    description: '现代都市夜景',
    category: 'urban',
    domain: 'landscape',
    preview_image_url:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'modern city night view' },
    prompt_list: [
      'Modern city night view, illuminated skyscrapers, light trails from traffic, vibrant urban energy, blue hour atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '四季更替',
    description: '四季风景变化',
    category: 'seasonal',
    domain: 'landscape',
    preview_image_url:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'seasonal landscape' },
    prompt_list: [
      'Beautiful seasonal landscape, autumn colors or spring blossoms, natural scenery, peaceful atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 5,
  },
];

// ============================================================
// Maternity domain
// ============================================================
const maternityTemplates: TemplateSeed[] = [
  {
    name: '温馨孕妇照',
    description: '室内温馨风格孕妇写真',
    category: 'indoor',
    domain: 'maternity',
    preview_image_url: null,
    prompt_config: { basePrompt: 'maternity photography' },
    prompt_list: [
      'A beautiful pregnant woman in a flowing white dress, standing by a window with soft natural light, gentle smile, serene atmosphere, professional maternity photography',
      'Elegant maternity portrait, expectant mother in a cream-colored gown, cradling her belly, warm studio lighting, soft focus background, intimate and peaceful mood',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '户外孕妇写真',
    description: '自然光线户外孕妇照',
    category: 'outdoor',
    domain: 'maternity',
    preview_image_url:
      'https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'outdoor maternity photography' },
    prompt_list: [
      'Pregnant woman in a flowing maxi dress standing in a field of wildflowers, gentle breeze, golden hour sunlight, peaceful and natural atmosphere, professional outdoor maternity photo',
      'Expectant mother walking barefoot on a beach at sunset, white linen dress, waves in background, romantic and serene mood, soft warm lighting',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '艺术孕妇照',
    description: '创意艺术风格孕妇摄影',
    category: 'artistic',
    domain: 'maternity',
    preview_image_url:
      'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'artistic maternity photography' },
    prompt_list: [
      'Black and white artistic maternity portrait, pregnant woman in profile, dramatic side lighting, minimalist composition, elegant and timeless',
      'Creative maternity photo with fabric flowing around pregnant woman, dynamic movement, studio setting, artistic and fashion-forward style',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '情侣孕妇照',
    description: '准爸妈温馨合照',
    category: 'couple',
    domain: 'maternity',
    preview_image_url:
      'https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'couple maternity photography' },
    prompt_list: [
      'Expecting couple embracing, man gently holding pregnant woman from behind, both hands on belly, soft natural light, intimate and loving atmosphere',
      'Maternity couple photoshoot outdoors, walking hand in hand in a park, golden hour lighting, casual and relaxed poses, joyful expressions',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '时尚孕妇照',
    description: '时尚杂志风格孕妇写真',
    category: 'fashion',
    domain: 'maternity',
    preview_image_url: null,
    prompt_config: { basePrompt: 'fashion maternity photography' },
    prompt_list: [
      'High fashion maternity portrait, pregnant woman in elegant designer dress, professional studio lighting, magazine editorial style, sophisticated and glamorous',
      'Fashion-forward maternity photo, expectant mother in stylish outfit, urban background, confident pose, modern and chic aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '居家孕妇照',
    description: '温馨居家生活孕妇照',
    category: 'lifestyle',
    domain: 'maternity',
    preview_image_url:
      'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=800',
    prompt_config: { basePrompt: 'lifestyle maternity photography' },
    prompt_list: [
      'Lifestyle maternity photo at home, pregnant woman in comfortable clothing, sitting in nursery, natural window light, intimate and personal atmosphere',
      'Casual home maternity session, expectant mother preparing baby clothes, soft natural lighting, candid and authentic moments',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 6,
  },
];

// ============================================================
// Portrait domain
// ============================================================
const portraitTemplates: TemplateSeed[] = [
  {
    name: '时尚写真',
    description: '专业时尚人像写真',
    category: 'fashion',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: { basePrompt: 'fashion portrait photography' },
    prompt_list: [
      'High-fashion portrait with professional studio lighting',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '职业形象照',
    description: '专业商务形象照',
    category: 'business',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: { basePrompt: 'professional business portrait' },
    prompt_list: [
      'Professional business portrait, neutral gray background, confident posture, formal business attire, studio lighting',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '艺术人像',
    description: '创意艺术人像摄影',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'artistic portrait photography' },
    prompt_list: [
      'Artistic portrait with dramatic lighting, creative composition, moody atmosphere, fine art photography style',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '户外自然光',
    description: '户外自然光人像',
    category: 'outdoor',
    domain: 'portrait',
    preview_image_url:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
    prompt_config: { basePrompt: 'outdoor natural light portrait' },
    prompt_list: [
      'Outdoor portrait with natural sunlight, golden hour glow, relaxed pose, nature background',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '复古胶片风写真',
    description: '80-90年代复古胶片质感人像,怀旧色调与颗粒感,展现时光沉淀的美感',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      color: 'warm vintage tones, faded colors',
      style: 'analog film photography',
      lighting: 'soft natural light',
      basePrompt: 'vintage film portrait, retro 80s-90s style, film grain texture',
    },
    prompt_list: [
      'Vintage film portrait, 1980s-1990s retro style, film grain texture, warm faded colors, soft natural lighting, nostalgic atmosphere, analog photography aesthetic',
      'Retro film photography portrait, vintage fashion, grainy texture, muted warm tones, natural light, nostalgic mood, classic film camera look',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 103,
  },
  {
    name: '日系小清新写真',
    description: '日系清新自然人像风格,柔和光线与淡雅色调,营造温柔治愈的氛围',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      color: 'pastel tones, light and airy',
      style: 'Japanese photography aesthetic',
      lighting: 'soft diffused natural light',
      basePrompt: 'Japanese fresh style portrait, soft pastel colors, natural light',
    },
    prompt_list: [
      'Japanese fresh style portrait, soft pastel colors, gentle natural lighting, light and airy atmosphere, minimalist background, delicate and peaceful mood',
      'Japanese aesthetic portrait, natural soft light, pastel color palette, serene expression, simple clean background, gentle and healing atmosphere',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 104,
  },
  {
    name: '中国风古装写真',
    description: '汉服、旗袍等中国传统服饰人像,融合古典美学与现代摄影技法',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      style: 'Chinese classical photography',
      lighting: 'soft natural light with warm tones',
      background: 'traditional Chinese garden or ancient architecture',
      basePrompt: 'Chinese traditional costume portrait, hanfu or qipao, classical aesthetics',
    },
    prompt_list: [
      'Chinese traditional hanfu portrait, elegant classical costume, ancient garden background, soft warm lighting, traditional Chinese aesthetics, graceful pose',
      'Qipao portrait, traditional Chinese dress, classical beauty, vintage photography style, elegant atmosphere, Chinese cultural heritage',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 105,
  },
  {
    name: '欧美时尚大片',
    description: '欧美时尚杂志风格人像,强烈视觉冲击与时尚感,展现个性与态度',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      color: 'high contrast, bold colors',
      style: 'fashion magazine photography',
      lighting: 'dramatic studio lighting',
      basePrompt: 'high fashion editorial portrait, dramatic lighting, bold style',
    },
    prompt_list: [
      'High fashion editorial portrait, dramatic studio lighting, bold makeup and styling, strong visual impact, magazine cover quality, professional fashion photography',
      'Fashion magazine style portrait, striking pose, dramatic lighting setup, bold colors and contrast, confident attitude, editorial photography aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 18,
    is_active: true,
    sort_order: 105,
  },
  {
    name: '森系自然风写真',
    description: '森林、花田等自然环境人像,清新脱俗的自然系风格',
    category: 'outdoor',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      style: 'nature photography',
      lighting: 'dappled natural sunlight',
      background: 'forest, flower field or natural scenery',
      basePrompt: 'forest nature portrait, natural environment, fresh and pure style',
    },
    prompt_list: [
      'Forest portrait, natural light through trees, fresh and pure atmosphere, casual outfit, dappled sunlight, nature photography style, serene and peaceful mood',
      'Flower field portrait, natural environment, soft golden hour light, flowing dress, fresh and romantic atmosphere, outdoor nature photography',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 106,
  },
  {
    name: '城市街拍风格',
    description: '都市街头人像,时尚感与城市气息融合,展现现代都市生活态度',
    category: 'urban',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      style: 'street photography',
      lighting: 'urban natural light',
      background: 'city streets, buildings, urban environment',
      basePrompt: 'urban street portrait, city background, modern fashion style',
    },
    prompt_list: [
      'Urban street portrait, modern city background, fashionable outfit, natural urban lighting, candid street photography style, contemporary lifestyle',
      'City street fashion portrait, metropolitan environment, trendy style, dynamic urban atmosphere, modern photography aesthetic',
    ],
    prompt_descriptions: [],
    price_credits: 12,
    is_active: true,
    sort_order: 107,
  },
  {
    name: '黑白艺术人像',
    description: '经典黑白人像摄影,强调光影对比与情感表达,永恒的艺术美感',
    category: 'artistic',
    domain: 'portrait',
    preview_image_url: null,
    prompt_config: {
      color: 'monochrome, high contrast',
      style: 'fine art black and white photography',
      lighting: 'dramatic chiaroscuro lighting',
      basePrompt: 'black and white artistic portrait, high contrast, emotional expression',
    },
    prompt_list: [
      'Black and white artistic portrait, dramatic lighting, strong contrast, emotional expression, fine art photography style, timeless aesthetic',
      'Monochrome portrait, chiaroscuro lighting, deep shadows and highlights, expressive face, classic black and white photography',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 108,
  },
];

// ============================================================
// Wedding domain
// ============================================================
const weddingTemplates: TemplateSeed[] = [
  {
    name: '韩式室内婚纱照风格',
    description: '韩式室内婚纱',
    category: 'classic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      steps: 1,
      basePrompt: 'Full body wedding portrait of a happy young Asian',
      negativePrompt: '',
      styleModifiers: ['韩式室内婚纱照风格'],
    },
    prompt_list: [
      'Full body wedding portrait of a happy young Asian couple. Groom in a classic black tuxedo with a bow tie, bride in an elegant white strapless ball gown with a tulle skirt. They are posing together in a studio against a minimalist textured gray background. Soft and romantic studio lighting, photorealistic, high detail.',
      'Korean-style wedding photography. A beautiful Asian bride in a voluminous white wedding dress holding a small bouquet, and a handsome groom in a sharp black tuxedo. Posing elegantly for a full-length shot in a photo studio. Clean and simple gray backdrop, gentle and warm lighting, timeless and classic feel, ultra realistic.',
      'A minimalist and chic wedding photo. Full shot of a smiling Asian couple. The groom wears a simple black suit, the bride is in a pure white ball gown. They stand close together in a bright, clean studio with a light gray concrete-textured background. Natural and sweet pose, soft lighting, high-quality professional photograph.',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 1,
  },
  {
    name: '中式传统婚服照',
    description: '',
    category: 'classic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A studio portrait of a Chinese couple in tradition',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A studio portrait of a Chinese couple in traditional Ming Dynasty wedding Hanfu. The groom wears an ornate red and gold robe with a formal black hat (wusha mao), and the bride wears a magnificent red gown with an elaborate phoenix corona headdress. They pose elegantly against a solid, vibrant red background, next to a classic Chinese paper lantern. Dramatic studio lighting, photorealistic, rich details.',
      'An opulent royal wedding portrait of an Asian couple dressed in historical Chinese attire. The scene is luxurious and formal. Their garments are intricately embroidered with gold thread. The bride is adorned with a stunning, jeweled headdress. The entire photo is set against a bold red studio backdrop, cinematic lighting, masterpiece, 8k.',
      'A timeless and elegant photo of a Chinese wedding ceremony. The groom lovingly looks down at the bride, who has a gentle, demure expression. They are wearing exquisite traditional red wedding robes. The scene is softly illuminated by a warm glow from a nearby antique lantern, creating an intimate and romantic atmosphere. Plain red background, high fashion photography.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 2,
  },
  {
    name: '韩式风格',
    description: '韩式风格',
    category: 'artistic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A playful Korean-style indoor wedding photo',
      negativePrompt: '',
      styleModifiers: ['韩式风格'],
    },
    prompt_list: [
      'A playful Korean-style indoor wedding photo. The bride wearing a modern off-the-shoulder short wedding dress, showing off her legs, with a birdcage veil. The groom in a light grey casual suit with an open collar shirt. Bright crimson background, lively, even lighting.',
      'A romantic Korean-style indoor wedding close-up. The bride in a classic sweetheart neckline gown with delicate crystal embellishments, her hair swept up. The groom in a crisp white shirt and dark vest, a patterned tie. Deep red background, soft, flattering spotlighting.',
      'A vibrant Korean-style indoor wedding portrait. The bride in a glittering princess ball gown and long cathedral veil, the groom in a classic black tuxedo with a white shirt and black bow tie. Bright red background, dramatic, soft lighting.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 3,
  },
  {
    name: '新中式外景婚纱照',
    description: '新中式外景婚纱照',
    category: 'location',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A romantic full-body photograph of a young Asian couple',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A romantic full-body photograph of a young Asian couple on their wedding day, walking along a stone path by a tranquil lake filled with lotus leaves. The groom, in a stylish light brown suit, holds a classic white paper umbrella over them. The bride, in an elegant off-the-shoulder white lace mermaid gown, holds a bouquet. Soft natural daylight, lush green background, photorealistic, cinematic shot.',
      'Neo-Chinese style wedding photography. A beautiful Asian couple strolling by a serene lakeside. The groom holds a traditional oil-paper umbrella. They are surrounded by the lush greenery of a lotus pond. The bride wears a delicate lace dress. The atmosphere is peaceful and romantic. Captured with a professional camera, high detail, soft focus background.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 4,
  },
  {
    name: '国潮"新中式风格"',
    description: '国潮"新中式风格"',
    category: 'classic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A joyful studio portrait of a young Asian couple',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A joyful studio portrait of a young Asian couple. The groom in a modern black tuxedo and the bride in a stylish white wedding dress with a veil. They are playfully posing, holding up red paper cutouts of the Chinese "Double Happiness" symbol. The background is a solid, vibrant red. Bright, high-key lighting, photorealistic, full of energy.',
      'Modern Chinoiserie style wedding photo. A happy Asian couple in Western wedding attire (tuxedo and white gown) celebrating with traditional elements. They are smiling broadly for the camera and holding red "Xi" characters against a minimalist red backdrop. Fun, vibrant, and contemporary feel, professional studio quality.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 5,
  },
  {
    name: '汉服婚纱照',
    description: '汉服婚纱照',
    category: 'fantasy',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A joyful young East Asian couple in a candid moment',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A joyful young East Asian couple in a candid moment, dressed in vibrant orange and mint green modern Hanfu wedding attire. They are smiling brightly for the camera, leaning against a warm terracotta wall under a traditional Chinese eave. The style is a blend of cinematic fashion photography and playful charm, with soft, warm lighting. The man holds a white folding fan.',
      'A vibrant, high-detail photo of a happy Chinese couple in stylized Tang Dynasty wedding Hanfu. The woman wears a flowing mint green and sheer orange dress with a traditional updo hairstyle. The man wears an orange robe and a scholar hat. They are laughing together against a minimalist orange wall, capturing a moment of pure joy.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 6,
  },
  {
    name: '室内棚拍轻婚纱风格',
    description: '室内棚拍轻婚纱风格',
    category: 'location',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A candid studio portrait of a joyful young East Asian couple',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A candid studio portrait of a joyful young East Asian couple. The woman in a white wedding dress leans her head sideways, smiling warmly, holding a bouquet of white roses. The man in a classic black suit and bow tie leans in playfully from behind her. The background is a solid, warm tan color. Soft, flattering studio lighting.',
      'A minimalist Korean-style wedding photo. A happy young Asian couple poses against a simple warm-toned studio backdrop. She is wearing an elegant white strapless gown and delicate earrings, he is in a sharp black suit. Their expressions are bright and full of love. The style is clean, modern, and romantic.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 7,
  },
  {
    name: '欧式复古或城堡婚纱照',
    description: '欧式复古或城堡婚纱照',
    category: 'artistic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: 'A grand, wide-angle shot of a young East Asian couple',
      negativePrompt: '',
      styleModifiers: [],
    },
    prompt_list: [
      'A grand, wide-angle shot of a young East Asian couple posing in a European plaza. In the background is a magnificent Renaissance-style building with a prominent red-roofed clock tower under a dramatic, cloudy sky. The woman wears an elegant black and textured light-blue ball gown with black gloves, holding a white lace parasol. The man wears a classic black three-piece tuxedo, holding a white bouquet. They are looking at each other lovingly. Cinematic, editorial style.',
      'A romantic, vintage-style wedding photo. An elegant Asian couple stands before a classic European chateau. The bride is in a sophisticated strapless gown with a black velvet bodice and a voluminous, patterned blue-gray skirt. She accessorizes with a pearl necklace, long black gloves, and a delicate lace umbrella. The groom looks dapper in a black tuxedo and bow tie. The atmosphere is timeless, elegant, and slightly moody.',
    ],
    prompt_descriptions: [],
    price_credits: 10,
    is_active: true,
    sort_order: 8,
  },
  {
    name: '马尔代夫海边黄昏婚纱照',
    description: '以马尔代夫海岛沙滩与黄昏海平线为核心背景的高端海边婚纱照套系。强调夕阳侧逆光、海风吹拂、湿沙反光与情侣间松弛自然的亲密互动，适合输出具有度假婚礼感、自由浪漫气质与轻奢海岛氛围的成组作品。',
    category: 'outdoor',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: '中国年轻情侣婚纱照，25-30岁，真实自然的中国面孔，新娘妆容通透精致，自然披发或低扎发，带轻微海风吹拂感；新郎保持原图发型与基础五官特征。新娘穿象牙白缎面鱼尾婚纱，搭配轻盈长款薄纱头纱；新郎穿米白色定制西装与白色衬衫，不系领结，整体自然高级。手捧花为白色与浅香槟色玫瑰搭配少量绿色叶材。拍摄地点为马尔代夫海边沙滩，黄昏日落时分，海平线沐浴在温暖落日余晖中，天空呈现金粉色与淡橙色层次，蓝绿色海面平静通透，细白沙滩与浅浅海浪在前景形成自然反光。整体氛围浪漫、自由、轻盈，带度假婚礼感。摄影风格为高端海岛婚纱摄影，Canon EOS R5，全画幅，50mm prime lens, f/1.4，sunset side backlight，温暖轮廓光与轻微海面反射光共同塑造人物，5200K warm tone，soft highlight rolloff，balanced environmental context，natural shallow depth of field，subtle filmic glow，ultra detailed, 8k, realistic skin texture, elegant satin texture, veil detail.要求人物互动自然亲密，情绪真实幸福，动作轻松松弛，避免僵硬摆拍，避免过度修容与塑料皮肤，保持高级海岛婚礼摄影质感。',
      negativePrompt: 'lowres, blurry face, asymmetrical eyes, distorted hands, extra fingers, broken wrists, warped veil, deformed wedding dress, melted satin texture, unnatural wet sand reflection, broken waves, bad feet, incorrect shoreline perspective, stiff pose, awkward expression, over-retouched skin, duplicated person, mismatched gaze, oversaturated sunset, cheap travel-photo look, cartoon style, low-detail fabric, incorrect body ratio, messy wind-blown hair, unnatural sea background',
      styleModifiers: ['马尔代夫海边黄昏婚纱照'],
    },
    prompt_list: [
      '在统一人物设定、服装、海边场景与摄影风格基础上，拍摄一张远景全身婚纱照。情侣站在细白沙滩与海浪交界处，完整呈现人物、海平线、落日余晖与湿沙反光。新娘轻提婚纱下摆，头纱随海风轻轻飘动；新郎站在身侧自然看向新娘。强调开阔海景、天空层次与温暖落日氛围，画面轻盈浪漫，适合作为海边婚纱照主视觉海报。',
      '拍摄一张中景竖版婚纱照，画面聚焦情侣上半身到膝部。新娘与新郎在海边面对面站立，微笑对望，距离亲近自然。夕阳侧逆光勾勒面部与肩部轮廓，海风轻拂发丝与头纱，背景保留海平线和晚霞虚化层次，突出轻松亲密与高级感。',
      '拍摄一张以新娘迎风动态为核心的婚纱照。新娘站在前方，微微转身，单手整理头纱或轻扶发丝，轻盈头纱在海风中展开；新郎站在她后侧半步，自然注视她。强调头纱线条、缎面鱼尾婚纱轮廓与夕阳轮廓光，画面轻快、通透、充满海岛空气感。',
      '拍摄一张自然互动婚纱照。情侣牵手沿浅浅海浪边缘缓慢行走，新娘婚纱轻触湿润沙面，新郎微微转头看向新娘，二人笑意自然。构图突出脚步、牵手动作、湿沙反光与细小海浪纹理，营造真实抓拍式海边婚礼氛围。',
      '拍摄一张近景特写婚纱照，情侣面部距离很近，轻轻靠近，眼神柔和，表情克制而幸福。重点刻画真实肤质、发丝细节、睫毛、唇妆、头纱边缘与海风带来的自然动态，背景虚化为落日暖光与海面色块，整体细腻、温柔、具有高端海边婚礼肖像感。',
      '拍摄一张沿海岸线行走的抓拍婚纱照。情侣并肩向前走，新娘一手轻提裙摆，新郎姿态自然放松，二人像在海边度假婚礼中散步。构图保留较多环境空间，让海平线、晚霞、湿沙和人物形成完整节奏，画面自然、有呼吸感。',
      '拍摄一张背影回头式婚纱照。情侣面向海平线站立，新娘站在靠海一侧，婚纱拖尾与头纱在风中自然铺开，两人微微回头看向镜头。强调背影线条、海面层次、落日天空与环境纵深，构图简洁大气，具有故事感与旅行婚礼气质。',
      '拍摄一张封面感半身婚纱肖像。情侣靠近站立，新娘轻微侧脸，新郎自然贴近，二人共同看向镜头，表情平静而幸福。夕阳暖光为面部与肩部提供柔和立体感，缎面婚纱纹理、头纱边缘、西装质感清晰，背景虚化成粉金色晚霞与海面散景，整体精致、克制、具有高级杂志封面感。',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 9,
  },
  {
    name: '大理苍山日照金山婚纱照',
    description: '以中国云南大理苍山日出日照金山景观为核心背景的高端户外婚纱照套系。强调清晨金色轮廓光、山间云雾、自然草坡与情侣间真实亲密互动，适合输出具有高级电影感、自然纪实感与主海报气质的组图。',
    category: 'outdoor',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: '中国年轻情侣婚纱照，25-30岁，真实自然的中国面孔，新娘妆容精致，长波浪卷发；新郎保持原图发型与基础五官特征。新娘穿无肩带白色蕾丝蓬蓬婚纱，搭配长款刺绣头纱；新郎穿黑色定制西装、白色衬衫、黑色领结。手捧花为15朵浅粉色玫瑰搭配绿叶。拍摄地点为中国云南大理苍山，日出时分，山峰被温暖金色晨光照亮，形成日照金山效果，山间云雾缭绕，天空澄澈湛蓝，前景为自然起伏的枯黄色草坡。整体氛围浪漫、真实、通透、电影感。摄影风格为高端户外婚纱摄影，Canon EOS R5，全画幅，85mm prime lens, f/1.8，golden hour backlight，柔和逆光勾勒人物轮廓，5500K warm tone，soft shadow，shallow depth of field，background creamy bokeh，subject tack sharp，vertical composition，rule of thirds，ultra detailed, 8k, realistic skin texture, elegant fabric detail, subtle 35mm film grain.要求人物互动自然亲昵，情绪真实幸福，眼神柔和，避免摆拍僵硬，避免过度修容与塑料皮肤，保持高级感与真实感。',
      negativePrompt: 'lowres, blurry face, asymmetrical eyes, distorted hands, extra fingers, fused arms, broken bouquet, deformed wedding dress, bad veil structure, unrealistic anatomy, stiff pose, awkward expression, over-retouched skin, heavy makeup, duplicated person, mismatched gaze, bad perspective, warped background, oversaturated colors, fake smile, cheap travel-photo look, cartoon style, low-detail fabric, incorrect body ratio',
      styleModifiers: ['大理苍山日照金山婚纱照'],
    },
    prompt_list: [
      '在统一人物设定、服装、场景与摄影风格基础上，拍摄一张远景全身婚纱照。情侣站在苍山草坡右侧三分之一位置，完整呈现人物与大理苍山日照金山背景。新娘轻轻提起头纱边缘，新郎手持手捧花微微侧身看向新娘，风吹动头纱和裙摆。强调山体金色晨光、云雾层次和开阔自然环境，人物比例协调，画面浪漫大气，适合作为婚纱照主视觉海报。',
      '拍摄一张中景竖版婚纱照，画面聚焦情侣上半身到膝部。新娘微笑望向新郎，新郎温柔凝视新娘，二人距离亲近但自然不过分贴合。头纱在侧后方被晨风吹起，柔和逆光勾勒面部与肩部轮廓，背景保留苍山和云雾虚化层次，突出情感交流与高级感。',
      '拍摄一张以新娘为视觉中心的婚纱照。新娘站在前方略偏右，单手轻撩头纱，笑容灿烂明亮；新郎站在她身后半步位置，目光温柔注视她。镜头略低机位，突出婚纱裙摆层次、头纱动态和晨光穿透薄纱的质感，画面轻盈浪漫。',
      '拍摄一张自然互动婚纱照。新郎手持浅粉色玫瑰手捧花递向新娘，新娘伸手去接，二人眼神交汇、笑意自然。构图偏近景，突出手捧花、手部动作、面部神态和衣料细节，背景保持柔焦散景，营造真实抓拍感。',
      '拍摄一张近景特写婚纱照，情侣面部距离很近，额头轻轻靠近但不接触，眼神温柔，表情克制而幸福。镜头重点刻画真实肤质、睫毛、唇妆、发丝、头纱刺绣和逆光轮廓，背景完全虚化，只留下金色晨光氛围，整体高级、细腻、适合相册内页特写。',
      '拍摄一张动态抓拍风格婚纱照。情侣在枯黄草坡上并肩缓慢行走，新娘一手扶婚纱裙摆，一手轻触头纱，新郎转头看向新娘微笑。头纱与裙摆随风飘动，动作自然，有瞬间纪实感。画面保留适度运动张力，但人物面部依然清晰，背景是晨光下的苍山与云雾。',
      '拍摄一张背影回头式婚纱照。情侣面向苍山远景站立，新娘站在外侧，头纱和裙摆在风中展开，两人微微回头看向镜头。重点表现人物背影线条、婚纱拖尾、环境纵深和日照金山效果，构图简洁大气，富有故事感。',
      '拍摄一张封面感半身婚纱肖像。情侣靠近站立，新娘轻微侧脸，新郎站在一旁自然贴近，二人共同看向镜头，表情平静而幸福。光线强调面部立体感与柔和高光，头纱刺绣、蕾丝纹理、西装质感清晰，背景虚化成金蓝色晨光散景，整体精致、克制、具有高级杂志封面感。',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 10,
  },
  {
    name: '中式棚拍秀禾婚纱照',
    description: '以中式影棚与秀禾婚礼服装为核心视觉语言的高端中式婚纱照套系。强调东方审美中的秩序感、仪式感、喜庆感与克制典雅，适合输出具有精品中式婚礼样片气质、端庄情绪与服饰细节表现力的成组作品。',
    category: 'classic',
    domain: 'wedding',
    preview_image_url: null,
    prompt_config: {
      basePrompt: '中国年轻情侣中式婚纱照，25-30岁，真实自然的中国面孔，新娘妆容精致端庄，中式低盘发或传统盘发，佩戴凤冠或中式金饰头饰；新郎保持原图发型与基础五官特征，整体利落正式。新娘穿红金色刺绣秀禾服，新郎穿与之匹配的红金色中式男款礼服，服装纹样精致、结构完整、具有高端中式婚礼样片质感。场景为高级中式影棚，采用深红或暖米色背景层、中式屏风、木质框景、少量喜字元素与中式案几，带有团扇、婚书、茶盏、红绸等克制点缀。整体氛围庄重、喜庆、典雅、具有仪式感。摄影风格为高端中式棚拍婚纱摄影，Canon EOS R5，全画幅，85mm prime lens, f/1.8，soft studio key light，gentle front-side lighting，layered background light，4300K warm tone，controlled studio depth of field，subject tack sharp，rich embroidery detail，ultra detailed, 8k, realistic skin texture, elegant red and gold fabric rendering. 要求人物情绪含蓄喜悦，姿态克制端庄，避免夸张摆拍、避免廉价舞台婚庆感、避免塑料修图感，保持高级中式婚礼肖像质感。',
      negativePrompt: 'lowres, blurry face, asymmetrical eyes, distorted hands, extra fingers, broken wrists, warped embroidery, deformed headdress, messy gold ornament, cheap banquet backdrop, stage-light look, over-saturated red, plastic skin, stiff western pose, vulgar expression, duplicated person, mismatched gaze, low-detail fabric, broken sleeve structure, cartoon style, incorrect body ratio, messy background clutter',
      styleModifiers: ['中式棚拍秀禾婚纱照'],
    },
    prompt_list: [
      '在统一人物设定、服装、棚拍场景与摄影风格基础上，拍摄一张正式双人中式婚纱主肖像。情侣并肩端正站立，姿态稳定克制，新娘双手自然交叠于身前，新郎姿态守护式站立。强调秀禾服纹样、头饰细节、人物神态与中式背景层次，画面庄重大气，适合作为中式婚礼主海报。',
      '拍摄一张对称式并肩全身婚纱照。情侣站在中式屏风或木质框景前，构图稳定、视觉中心清晰，完整呈现新娘秀禾服下摆、新郎中式礼服轮廓与整体配色关系。强调高级棚拍秩序感，避免过度装饰与背景杂乱。',
      '拍摄一张以新娘为视觉中心的半身婚纱照。新娘手持小型中式团扇，姿态端庄，微微侧身或轻微回眸，表情含蓄柔和。重点刻画凤冠头饰、妆容、秀禾刺绣与团扇细节，整体典雅、精致、具有东方新娘肖像感。',
      '拍摄一张以新郎守护感为核心的婚纱照。新郎站姿挺括自然，位于新娘身侧或后侧半步，神态温和稳重，新娘轻微侧向镜头或低头含笑。强调男款礼服结构、情侣关系感与中式礼仪氛围，画面克制而有情绪张力。',
      '拍摄一张双人对视互动婚纱照。情侣距离亲近但不过分贴合，新娘微微抬眼看向新郎，新郎温和含笑回应，动作克制自然。构图偏中景，突出面部神态、上半身服装纹样与东方礼仪美感，营造含蓄而温暖的喜庆氛围。',
      '拍摄一张端坐式中式婚礼肖像。新人端坐于中式案几或椅凳前后位置，姿态端正，双手动作得体，新娘可轻持婚书或团扇。重点表现服装下摆、袖口结构、案几道具与背景中式层次，整体沉稳、典雅、富有仪式感。',
      '拍摄一张屏风前回眸式婚纱照。新娘或情侣位于中式屏风与木质框景前，人物微微侧身回眸，动作轻柔克制。强调服装线条、头饰轮廓与背景结构秩序，画面带有东方美学中的含蓄叙事感。',
      '拍摄一张封面感近景中式婚礼肖像。情侣靠近站立或半身入镜，表情平静、喜悦、克制，重点刻画真实肤质、眼神、唇妆、凤冠头饰细节、秀禾刺绣纹样与暖色棚灯下的面部立体感。背景虚化为深红与暖金色层次，整体精致、端庄、具有高端中式杂志封面感。',
    ],
    prompt_descriptions: [],
    price_credits: 15,
    is_active: true,
    sort_order: 11,
  },
];

// ============================================================
// Export all templates
// ============================================================
export const templatesSeedData: TemplateSeed[] = [
  ...animeTemplates,
  ...artisticTemplates,
  ...childrenTemplates,
  ...coupleTemplates,
  ...graduationTemplates,
  ...idPhotoTemplates,
  ...landscapeTemplates,
  ...maternityTemplates,
  ...portraitTemplates,
  ...weddingTemplates,
];
