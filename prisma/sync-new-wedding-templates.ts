import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

interface TemplateData {
  name: string;
  description: string;
  category: string;
  domain: string;
  prompt_config: Record<string, unknown>;
  prompt_list: string[];
  price_credits: number;
  is_active: boolean;
  sort_order: number;
}

const newTemplates: TemplateData[] = [
  {
    name: '马尔代夫海边黄昏婚纱照',
    description: '以马尔代夫海岛沙滩与黄昏海平线为核心背景的高端海边婚纱照套系。强调夕阳侧逆光、海风吹拂、湿沙反光与情侣间松弛自然的亲密互动，适合输出具有度假婚礼感、自由浪漫气质与轻奢海岛氛围的成组作品。',
    category: 'outdoor',
    domain: 'wedding',
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
    price_credits: 15,
    is_active: true,
    sort_order: 9,
  },
  {
    name: '大理苍山日照金山婚纱照',
    description: '以中国云南大理苍山日出日照金山景观为核心背景的高端户外婚纱照套系。强调清晨金色轮廓光、山间云雾、自然草坡与情侣间真实亲密互动，适合输出具有高级电影感、自然纪实感与主海报气质的组图。',
    category: 'outdoor',
    domain: 'wedding',
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
    price_credits: 15,
    is_active: true,
    sort_order: 10,
  },
  {
    name: '中式棚拍秀禾婚纱照',
    description: '以中式影棚与秀禾婚礼服装为核心视觉语言的高端中式婚纱照套系。强调东方审美中的秩序感、仪式感、喜庆感与克制典雅，适合输出具有精品中式婚礼样片气质、端庄情绪与服饰细节表现力的成组作品。',
    category: 'classic',
    domain: 'wedding',
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
    price_credits: 15,
    is_active: true,
    sort_order: 11,
  },
];

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  console.log(`Syncing ${newTemplates.length} new wedding templates...`);

  let created = 0;
  let skipped = 0;

  for (const tpl of newTemplates) {
    const existing = await prisma.templates.findFirst({
      where: { name: tpl.name, domain: 'wedding' },
    });

    if (existing) {
      skipped++;
      console.log(`  [SKIP] ${tpl.name} (already exists, id: ${existing.id})`);
      continue;
    }

    await prisma.templates.create({
      data: tpl as any,
    });

    created++;
    console.log(`  [NEW] ${tpl.name}`);
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}, Total: ${newTemplates.length}`);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Sync failed:', e);
  process.exit(1);
});
