const env = require('../config/env');
const { profileData, projectsData, skillsData } = require('../data/backendData');

let bot = null;

const initTelegramBot = () => {
  if (!env.BOT_TOKEN) {
    console.log('[TELEGRAM BOT] BOT_TOKEN is not set in .env. Bot initialization skipped.');
    return;
  }

  try {
    const TelegramBot = require('node-telegram-bot-api');
    bot = new TelegramBot(env.BOT_TOKEN, { polling: true });

    console.log('[TELEGRAM BOT] Bot successfully initialized and polling started.');

    // Main Keyboard Menu
    const mainMenuKeyboard = {
      reply_markup: {
        keyboard: [
          [{ text: '🚀 Projects' }, { text: '⚡ Skills' }],
          [{ text: '👨‍💻 About Me' }, { text: '📬 Contact Info' }]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    };

    // Handler for /start and /help
    bot.onText(/\/(start|help)/, (msg) => {
      const chatId = msg.chat.id;
      const welcomeText = 
        `👋 *Hello, ${msg.from.first_name || 'Visitor'}!*\n\n` +
        `Welcome to *${profileData.name}*'s Portfolio Assistant Bot.\n` +
        `I can provide detailed information about projects, technical skills, developer bio, and contact links.\n\n` +
        `Please choose an option below or use menu buttons:`;

      bot.sendMessage(chatId, welcomeText, { parse_mode: 'Markdown', ...mainMenuKeyboard });
    });

    // Handler for "Projects" / "/projects"
    bot.onText(/(🚀 Projects|\/projects|Projects)/i, (msg) => {
      const chatId = msg.chat.id;
      let text = `📂 *Featured Developer Projects*\n\n`;

      projectsData.forEach((project, index) => {
        text += `*${index + 1}. ${project.title}*\n`;
        text += `📌 _${project.subtitle}_\n`;
        text += `📝 ${project.description}\n`;
        text += `🛠 *Tech:* ${project.technologies.join(', ')}\n`;
        text += `🌐 [Live Demo](${project.liveUrl})\n\n`;
      });

      bot.sendMessage(chatId, text, { parse_mode: 'Markdown', disable_web_page_preview: true });
    });

    // Handler for "Skills" / "/skills"
    bot.onText(/(⚡ Skills|\/skills|Skills)/i, (msg) => {
      const chatId = msg.chat.id;
      let text = `🛠 *Technical Skills & Competencies*\n\n`;

      skillsData.forEach((cat) => {
        text += `*${cat.category}*\n`;
        text += `${cat.items.map(i => `• ${i.name} _(${i.level})_`).join('\n')}\n\n`;
      });

      bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    });

    // Handler for "About Me" / "/about"
    bot.onText(/(👨‍💻 About Me|\/about|About)/i, (msg) => {
      const chatId = msg.chat.id;
      const text = 
        `👨‍💻 *About ${profileData.name}*\n` +
        `🎯 *Role:* ${profileData.title}\n` +
        `🟢 *Status:* ${profileData.status}\n\n` +
        `${profileData.bio}\n\n` +
        `📍 *Location:* ${profileData.location}`;

      bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    });

    // Handler for "Contact Info" / "/contact"
    bot.onText(/(📬 Contact Info|\/contact|Contact)/i, (msg) => {
      const chatId = msg.chat.id;
      const text = 
        `📬 *Get In Touch*\n\n` +
        `📧 *Email:* ${profileData.socials.email}\n` +
        `✈️ *Telegram:* ${profileData.socials.telegram}\n` +
        `🐙 *GitHub:* ${profileData.socials.github}\n` +
        `💼 *LinkedIn:* ${profileData.socials.linkedin}`;

      bot.sendMessage(chatId, text, { parse_mode: 'Markdown', disable_web_page_preview: true });
    });

    // Fallback error logging
    bot.on('polling_error', (error) => {
      console.warn('[TELEGRAM BOT POLLING WARNING]:', error.message || error);
    });

  } catch (err) {
    console.error('[TELEGRAM BOT INIT ERROR]:', err.message);
  }
};

const sendNotification = async (text) => {
  if (!bot || !env.TELEGRAM_CHAT_ID) {
    console.log('[TELEGRAM NOTIFICATION] Bot or TELEGRAM_CHAT_ID is not configured. Notification omitted.');
    return;
  }

  try {
    await bot.sendMessage(env.TELEGRAM_CHAT_ID, text, { parse_mode: 'Markdown' });
    console.log('[TELEGRAM NOTIFICATION] Notification successfully sent to Telegram chat.');
  } catch (err) {
    console.error('[TELEGRAM NOTIFICATION ERROR]:', err.message);
  }
};

module.exports = {
  initTelegramBot,
  sendNotification
};
