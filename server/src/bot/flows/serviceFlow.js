const {
  navKeyboard,
  noReplyKeyboard,
  budgetKeyboard,
  confirmKeyboard,
  websiteTypeKeyboard,
  appPlatformKeyboard,
  appTypeKeyboard,
  commonFeatureKeyboard,
  designKeyboard,
  botPurposeKeyboard,
  integrationKeyboard,
  yesNoUnknownKeyboard,
  videoPurposeKeyboard,
  videoStyleKeyboard,
  videoFormatKeyboard,
  materialsKeyboard,
  logoStyleKeyboard,
  logoFormatsKeyboard,
  presentationStyleKeyboard,
  slideCountKeyboard
} = require('../keyboards');

const SERVICE_CONFIGS = {
  website: {
    label: '💻 Веб-Сайты',
    title: 'создание веб-сайта',
    fields: [
      ['name', 'Как вас зовут или как называется ваша компания?\n\nНапример: Humoyun / Tech Start LLC'],
      ['projectType', 'Какой сайт вам нужен?\n\nНапример: интернет-магазин, лендинг, корпоративный сайт, образовательная платформа.'],
      ['features', 'Какие основные функции нужны?\n\nНапример: оплата, каталог, личный кабинет, админ-панель, поиск, мультиязычность, Telegram-интеграция.'],
      ['style', 'Есть ли сайты-примеры или пожелания по дизайну?\n\nОтправьте ссылки или опишите желаемый стиль.'],
      ['deadline', 'Когда сайт должен быть готов?\n\nНапример: 10 дней, 2 недели, 1 месяц.'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Есть ли дополнительные требования? Если нет, напишите «Нет».']
    ]
  },
  app: {
    label: '📲 Различные Приложения',
    title: 'создание приложения',
    fields: [
      ['name', 'Как вас зовут или как называется ваша компания?'],
      ['platform', 'Для какой платформы нужно приложение?\n\nAndroid, iOS, Web или сразу несколько платформ?'],
      ['appType', 'Что должно делать приложение?\n\nОпишите идею, целевую аудиторию и основные функции.'],
      ['features', 'Какие функции обязательны?\n\nНапример: авторизация, платежи, карта, чат, уведомления, подписка, админ-панель.'],
      ['design', 'Есть ли готовый дизайн или нужны UX/UI-дизайн и прототип?\n\nМожно отправить ссылку на пример.'],
      ['deadline', 'Желаемый срок запуска приложения?'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Дополнительные требования или интеграции? Если нет, напишите «Нет».']
    ]
  },
  telegram: {
    label: '📱 Телеграм Боты',
    title: 'создание Telegram-бота',
    fields: [
      ['name', 'Как вас зовут или как называется компания/проект?'],
      ['purpose', 'Для чего нужен бот?\n\nНапример: продажи, приём заявок, поддержка, обучение, магазин или автоматизация.'],
      ['features', 'Какие функции нужны?\n\nНапример: меню, анкета, оплата, база данных, рассылка, роли администраторов, CRM-интеграция.'],
      ['integrations', 'Нужны ли интеграции?\n\nНапример: сайт, Google Sheets, CRM, платёжная система, OpenAI или API.'],
      ['hosting', 'Нужны ли настройка сервера, домена и постоянного запуска бота?'],
      ['deadline', 'Желаемый срок запуска бота?'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Дополнительные требования? Если нет, напишите «Нет».']
    ]
  },
  aiVideo: {
    label: '🎥 ИИ-Видео',
    title: 'создание ИИ-видео',
    fields: [
      ['name', 'Как вас зовут или как называется ваш бренд?'],
      ['purpose', 'Для чего нужно видео?\n\nРеклама, Reels/TikTok, презентация, обучение, YouTube или другое?'],
      ['style', 'Какой стиль и настроение нужны?\n\nРеалистичный, cinematic, 3D, мультфильм, avatar, product video и т.д.'],
      ['format', 'Укажите длительность, формат и язык видео.\n\nНапример: 30 секунд, вертикальное 9:16, русский язык.'],
      ['materials', 'У вас есть сценарий, логотип, фото, видео, голос или нужно подготовить всё с нуля?'],
      ['deadline', 'Когда нужно получить готовое видео?'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Дополнительные пожелания? Если нет, напишите «Нет».']
    ]
  },
  logo: {
    label: '🖼 Логотипы',
    title: 'создание логотипа',
    fields: [
      ['name', 'Как называется бренд или компания?'],
      ['business', 'Чем занимается ваш бренд и кто его целевая аудитория?'],
      ['style', 'Какой стиль предпочитаете?\n\nМинимализм, luxury, modern, tech, playful и т.д.'],
      ['colors', 'Какие цвета, символы или примеры вам нравятся?\n\nМожно отправить ссылки.'],
      ['formats', 'Какие материалы нужны?\n\nНапример: PNG, SVG, исходник, чёрно-белая версия, favicon, брендбук.'],
      ['deadline', 'Когда нужен готовый логотип?'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Дополнительные требования? Если нет, напишите «Нет».']
    ]
  },
  presentation: {
    label: '🎞️ Презентации',
    title: 'создание презентации',
    fields: [
      ['name', 'Как вас зовут или как называется компания?'],
      ['topic', 'Какая тема и цель презентации?\n\nНапример: презентация стартапа, коммерческое предложение, отчёт, обучение.'],
      ['audience', 'Для кого предназначена презентация и на каком языке она должна быть?'],
      ['content', 'Сколько примерно нужно слайдов и есть ли готовый текст/материалы?'],
      ['style', 'Какой стиль нужен?\n\nМинималистичный, corporate, creative, premium и т.д. Нужны ли анимации?'],
      ['deadline', 'Когда нужна готовая презентация?'],
      ['budget', 'Какой ориентировочный бюджет проекта?'],
      ['contact', 'Оставьте Telegram username, телефон или Email для связи.'],
      ['additional', 'Дополнительные пожелания? Если нет, напишите «Нет».']
    ]
  }
};

const getServiceConfig = (serviceType) => SERVICE_CONFIGS[serviceType];

const SERVICE_KEYBOARDS = {
  website: { projectType: websiteTypeKeyboard, features: commonFeatureKeyboard, style: designKeyboard },
  app: { platform: appPlatformKeyboard, appType: appTypeKeyboard, features: commonFeatureKeyboard, design: designKeyboard },
  telegram: { purpose: botPurposeKeyboard, features: commonFeatureKeyboard, integrations: integrationKeyboard, hosting: yesNoUnknownKeyboard },
  aiVideo: { purpose: videoPurposeKeyboard, style: videoStyleKeyboard, format: videoFormatKeyboard, materials: materialsKeyboard },
  logo: { style: logoStyleKeyboard, formats: logoFormatsKeyboard },
  presentation: { style: presentationStyleKeyboard, content: slideCountKeyboard }
};

const escapeHtml = (value) => String(value || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const handleServiceStep = (bot, chatId, session, text) => {
  const config = getServiceConfig(session.serviceType);
  if (!config) return;

  const stepIndex = session.step;
  if (stepIndex > 0 && text) {
    const previousField = config.fields[stepIndex - 1];
    session.data[previousField[0]] = text;
  }

  if (stepIndex < config.fields.length) {
    const [key, question] = config.fields[stepIndex];
    const keyboard = SERVICE_KEYBOARDS[session.serviceType]?.[key]
      || (key === 'budget'
      ? budgetKeyboard
      : key === 'additional'
        ? noReplyKeyboard
        : navKeyboard);
    const prompt = `🛒 *${config.title}*\n\n*${stepIndex + 1}/${config.fields.length} — ${question}*`;
    bot.sendMessage(chatId, prompt, { parse_mode: 'Markdown', ...keyboard });
    session.step += 1;
    return;
  }

  session.step = 99;
  let summary = `📋 <b>Заявка на ${escapeHtml(config.title)} готова!</b>\n\n`;
  summary += `📌 <b>Услуга:</b> ${escapeHtml(config.label)}\n`;
  for (const [key, question] of config.fields) {
    const fieldName = question.split(/[?\n]/)[0];
    summary += `• <b>${escapeHtml(fieldName)}:</b> ${escapeHtml(session.data[key] || '-')}\n`;
  }
  summary += '\n<b>Всё верно?</b>';
  bot.sendMessage(chatId, summary, { parse_mode: 'HTML', ...confirmKeyboard });
};

module.exports = {
  SERVICE_CONFIGS,
  getServiceConfig,
  handleServiceStep
};
