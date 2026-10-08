// Reusable Keyboards for Telegram Portfolio Bot

// 1. Main Menu Keyboard
const mainMenuKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '🌐 Web sayt buyurtma qilish' }, { text: '💼 Ish taklifi' }],
      [{ text: '🤝 Hamkorlik' }, { text: '👨‍💻 Men haqimda' }],
      [{ text: '💻 Веб-Сайты' }, { text: '📲 Различные Приложения' }],
      [{ text: '📱 Телеграм Боты' }, { text: '🎥 ИИ-Видео' }],
      [{ text: '🖼 Логотипы' }, { text: '🎞️ Презентации' }],
      [{ text: '🚀 Loyihalarim' }, { text: '📞 Bog\'lanish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};

// 2. Budget Selection Keyboard (for Project Flow)
const budgetKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '💰 $100–$300' }, { text: '💰 $300–$500' }],
      [{ text: '💰 $500–$1000' }, { text: '💰 $1000+' }],
      [{ text: '✏️ Boshqa / Kelishamiz' }],
      [{ text: '⬅️ Orqaga' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
};

// 3. Work Type Keyboard (for Hire Flow)
const workTypeKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '🏡 Remote' }, { text: '🏢 On-site' }, { text: '⚡ Hybrid' }],
      [{ text: '⬅️ Orqaga' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
};

// 4. Standard Navigation Keyboard (Back & Cancel)
const navKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '⬅️ Orqaga' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  }
};

// Quick answer for optional additional requirements.
const noReplyKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: 'Нет' }],
      [{ text: '⬅️ Orqaga' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
};

const choiceKeyboard = (options) => ({
  reply_markup: {
    keyboard: [
      ...options.reduce((rows, option, index) => {
        if (index % 2 === 0) rows.push([]);
        rows[rows.length - 1].push({ text: option });
        return rows;
      }, []),
      [{ text: '✏️ Другое / Напишу сам' }],
      [{ text: '⬅️ Orqaga' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
});

const websiteTypeKeyboard = choiceKeyboard([
  '🌐 Лендинг', '🛒 Интернет-магазин', '🏢 Корпоративный сайт', '🎓 Образовательный сайт', '⚙️ Web-приложение'
]);

const appPlatformKeyboard = choiceKeyboard([
  '🤖 Android', '🍎 iOS', '🤖🍎 Android + iOS', '🌐 Web App'
]);

const appTypeKeyboard = choiceKeyboard([
  '🛒 Магазин', '📚 Обучение', '💼 Бизнес-сервис', '👥 Социальное приложение', '⚙️ Другое приложение'
]);

const commonFeatureKeyboard = choiceKeyboard([
  '🔐 Авторизация', '💳 Платежи', '💬 Чат', '📍 Карта/геолокация', '🔔 Уведомления', '🛠 Админ-панель'
]);

const designKeyboard = choiceKeyboard([
  '✅ Дизайн уже есть', '🎨 Нужен дизайн', '🔗 Есть референсы', '🤝 Нужна консультация'
]);

const botPurposeKeyboard = choiceKeyboard([
  '🛒 Продажи', '📝 Приём заявок', '🎧 Поддержка', '📚 Обучение', '⚙️ Автоматизация'
]);

const integrationKeyboard = choiceKeyboard([
  '❌ Интеграции не нужны', '🌐 Сайт/CRM', '📊 Google Sheets', '🤖 OpenAI/API', '💳 Платёжная система'
]);

const yesNoUnknownKeyboard = choiceKeyboard(['✅ Да', '❌ Нет', '🤔 Не знаю']);

const videoPurposeKeyboard = choiceKeyboard([
  '📣 Реклама', '📱 Reels/TikTok', '▶️ YouTube', '🎓 Обучение', '🧑‍💼 Презентация'
]);

const videoStyleKeyboard = choiceKeyboard([
  '🎬 Cinematic', '🧍 Реалистичное', '🧊 3D', '🤖 AI-аватар', '🎨 Мультфильм'
]);

const videoFormatKeyboard = choiceKeyboard(['📱 Вертикальное 9:16', '🖥 Горизонтальное 16:9', '⬛ Квадрат 1:1']);
const materialsKeyboard = choiceKeyboard(['✅ Всё есть', '🧩 Есть часть материалов', '🆕 Всё с нуля']);

const logoStyleKeyboard = choiceKeyboard(['✨ Минимализм', '💎 Luxury', '⚡ Modern/Tech', '🎨 Creative', '😊 Playful']);
const logoFormatsKeyboard = choiceKeyboard(['🖼 PNG/JPG', '🔷 SVG', '📦 Исходник', '📘 Брендбук', '🌐 Favicon']);

const presentationStyleKeyboard = choiceKeyboard(['◻️ Minimal', '🏢 Corporate', '🎨 Creative', '💎 Premium', '🎞️ С анимацией']);
const slideCountKeyboard = choiceKeyboard(['📄 До 10 слайдов', '📑 10–20 слайдов', '📚 Более 20 слайдов']);

// 5. Confirmation Screen Keyboard
const confirmKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '✅ Yuborish' }, { text: '✅ Отправить' }],
      [{ text: '✏️ Qayta kiritish' }, { text: '❌ Bekor qilish' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
};

module.exports = {
  mainMenuKeyboard,
  budgetKeyboard,
  workTypeKeyboard,
  navKeyboard,
  noReplyKeyboard,
  choiceKeyboard,
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
  slideCountKeyboard,
  confirmKeyboard
};
