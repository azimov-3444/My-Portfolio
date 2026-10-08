const env = require('../config/env');
const { profileData, projectsData, skillsData } = require('../data/backendData');
const { getSession, resetSession } = require('../bot/stateManager');
const { mainMenuKeyboard } = require('../bot/keyboards');

const { handleProjectStep, PROJECT_STEPS } = require('../bot/flows/projectFlow');
const { handleHireStep, HIRE_STEPS } = require('../bot/flows/hireFlow');
const { handleCollabStep, COLLAB_STEPS } = require('../bot/flows/collabFlow');
const { getServiceConfig, handleServiceStep } = require('../bot/flows/serviceFlow');

let bot = null;
let handlersRegistered = false;
const pendingTelegramRequests = new Set();

const escapeHtml = (text) => {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

const initTelegramBot = () => {
  if (bot) return bot;

  if (!env.BOT_TOKEN) {
    console.warn('[TELEGRAM BOT] BOT_TOKEN is not configured.');
    return null;
  }

  try {
    const TelegramBot = require('node-telegram-bot-api');
    // Webhook/serverless mode: Telegram pushes updates to the Vercel function.
    bot = new TelegramBot(env.BOT_TOKEN, { polling: false });

    // Keep Vercel's serverless function alive until Telegram API requests finish.
    const originalSendMessage = bot.sendMessage.bind(bot);
    bot.sendMessage = (...args) => {
      const request = originalSendMessage(...args);
      if (request && typeof request.then === 'function') {
        pendingTelegramRequests.add(request);
        request.then(
          () => pendingTelegramRequests.delete(request),
          () => pendingTelegramRequests.delete(request)
        );
      }
      return request;
    };

    console.log('[TELEGRAM BOT] Bot initialized in webhook mode.');

    // 1. Welcome / Start Handler
    bot.onText(/\/(start|help)/, (msg) => {
      const chatId = msg.chat.id;
      resetSession(chatId);

      const welcomeText = 
        `👋 *Salom, ${msg.from.first_name || 'Foydalanuvchi'}!*\n\n` +
        `Men *${profileData.name}* ning rasmiy Portfolio Assistant Botiman. 🚀\n\n` +
        `Agar siz:\n` +
        `🌐 *Web sayt buyurtma qilmoqchi bo'lsangiz*,\n` +
        `💼 *Meni ishga taklif qilmoqchi bo'lsangiz*,\n` +
        `🤝 *Hamkorlik qilmoqchi bo'lsangiz*,\n\n` +
        `quyidagi menyudan o'zingizga kerakli bo'limni tanlang:`;

      bot.sendMessage(chatId, welcomeText, { parse_mode: 'Markdown', ...mainMenuKeyboard });
    });

    // 2. Global Text Routing
    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text ? msg.text.trim() : '';

      if (!text || text.startsWith('/start') || text.startsWith('/help')) return;

      // Handle Cancel (/cancel or "❌ Bekor qilish")
      if (text.toLowerCase() === '/cancel' || text === '❌ Bekor qilish') {
        resetSession(chatId);
        return bot.sendMessage(
          chatId,
          "❌ *Jarayon bekor qilindi.* Asosiy menyudasiz. Qanday yordam bera olaman? 🚀",
          { parse_mode: 'Markdown', ...mainMenuKeyboard }
        );
      }

      const session = getSession(chatId);

      // Check if user clicked a Main Menu Trigger
      if (text === '🌐 Web sayt buyurtma qilish' || text === '🚀 Start a Project') {
        session.flow = 'PROJECT';
        session.step = 0;
        session.data = {};
        session.history = [];
        return handleProjectStep(bot, chatId, session, null);
      }

      if (text === '💼 Ish taklifi' || text === '💼 Hire Me') {
        session.flow = 'HIRE';
        session.step = 0;
        session.data = {};
        session.history = [];
        return handleHireStep(bot, chatId, session, null);
      }

      if (text === '🤝 Hamkorlik' || text === '🤝 Collaboration') {
        session.flow = 'COLLAB';
        session.step = 0;
        session.data = {};
        session.history = [];
        return handleCollabStep(bot, chatId, session, null);
      }

      const serviceButtons = {
        '💻 Веб-Сайты': 'website',
        '📲 Различные Приложения': 'app',
        '📱 Телеграм Боты': 'telegram',
        '🎥 ИИ-Видео': 'aiVideo',
        '🖼 Логотипы': 'logo',
        '🎞️ Презентации': 'presentation'
      };

      if (serviceButtons[text]) {
        session.flow = 'SERVICE';
        session.serviceType = serviceButtons[text];
        session.step = 0;
        session.data = {};
        session.history = [];
        return handleServiceStep(bot, chatId, session, null);
      }

      if (text === '👨‍💻 Men haqimda' || text === '👨‍💻 About Me') {
        resetSession(chatId);
        const aboutText = 
          `👨‍💻 *About ${profileData.name}*\n` +
          `🎯 *Yo'nalish:* ${profileData.title}\n` +
          `🟢 *Holat:* ${profileData.status}\n\n` +
          `${profileData.bio}\n\n` +
          `📍 *Joylashuv:* ${profileData.location}`;

        return bot.sendMessage(chatId, aboutText, { parse_mode: 'Markdown', ...mainMenuKeyboard });
      }

      if (text === '🚀 Loyihalarim' || text === '🚀 My Projects') {
        resetSession(chatId);
        let projectsText = `📂 *Real Web Loyihalarim*\n\n`;
        projectsData.forEach((p, idx) => {
          projectsText += `*${idx + 1}. ${p.title}*\n`;
          projectsText += `📌 _${p.subtitle}_\n`;
          projectsText += `🛠 *Tech:* ${p.technologies.join(', ')}\n`;
          projectsText += `🌐 [Live Demo](${p.liveUrl})\n\n`;
        });
        return bot.sendMessage(chatId, projectsText, { parse_mode: 'Markdown', disable_web_page_preview: true, ...mainMenuKeyboard });
      }

      if (text === '📞 Bog\'lanish' || text === '📩 Contact') {
        resetSession(chatId);
        const contactText = 
          `📬 *Bog'lanish Ma'lumotlari*\n\n` +
          `📧 *Email:* ${profileData.socials.email}\n` +
          `✈️ *Telegram:* ${profileData.socials.telegram}\n` +
          `🐙 *GitHub:* ${profileData.socials.github}`;

        return bot.sendMessage(chatId, contactText, { parse_mode: 'Markdown', disable_web_page_preview: true, ...mainMenuKeyboard });
      }

      // Handle Back button ("⬅️ Orqaga")
      if (text === '⬅️ Orqaga') {
        if (session.flow && session.step > 1) {
          session.step = Math.max(0, session.step - 2);
          if (session.flow === 'PROJECT') return handleProjectStep(bot, chatId, session, null);
          if (session.flow === 'HIRE') return handleHireStep(bot, chatId, session, null);
          if (session.flow === 'COLLAB') return handleCollabStep(bot, chatId, session, null);
          if (session.flow === 'SERVICE') return handleServiceStep(bot, chatId, session, null);
        } else {
          resetSession(chatId);
          return bot.sendMessage(chatId, "Asosiy menyuga qaytdingiz.", { ...mainMenuKeyboard });
        }
      }

      // Handle Confirmation Response ("✅ Yuborish", "✏️ Qayta kiritish")
      if (session.step === 99) {
        if (text === '✅ Yuborish' || text === '✅ Отправить') {
          // Send formatted lead to Admin Telegram in HTML format for 100% reliability
          const username = msg.from.username ? `@${msg.from.username}` : `User ID: ${msg.from.id}`;
          const flowName = session.flow === 'PROJECT'
            ? 'Web sayt buyurtmasi'
            : session.flow === 'HIRE'
              ? 'Ish taklifi (Job Offer)'
              : session.flow === 'COLLAB'
                ? 'Hamkorlik (Collaboration)'
                : `Xizmat buyurtmasi: ${getServiceConfig(session.serviceType)?.label || 'Xizmat'}`;

          let adminMessage = 
            `🚀 <b>YANGI PORTFOLIO LEAD REQUEST</b>\n` +
            `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `📌 <b>Turi:</b> ${escapeHtml(flowName)}\n` +
            `👤 <b>Mijoz / Recruiter:</b> ${escapeHtml(session.data.name || '-')}\n`;

          if (session.data.company) adminMessage += `🏢 <b>Kompaniya:</b> ${escapeHtml(session.data.company)}\n`;
          if (session.data.projectType) adminMessage += `🌐 <b>Loyiha:</b> ${escapeHtml(session.data.projectType)}\n`;
          if (session.data.position) adminMessage += `🎯 <b>Lavozim:</b> ${escapeHtml(session.data.position)}\n`;
          if (session.data.collabType) adminMessage += `💡 <b>Hamkorlik turi:</b> ${escapeHtml(session.data.collabType)}\n`;
          if (session.data.features) adminMessage += `📝 <b>Funksiyalar:</b> ${escapeHtml(session.data.features)}\n`;
          if (session.data.workType) adminMessage += `📍 <b>Ish shakli:</b> ${escapeHtml(session.data.workType)}\n`;
          if (session.data.description) adminMessage += `📝 <b>Tavsif:</b> ${escapeHtml(session.data.description)}\n`;
          if (session.data.deadline) adminMessage += `⏱ <b>Deadline:</b> ${escapeHtml(session.data.deadline)}\n`;
          if (session.data.budget) adminMessage += `💰 <b>Budjet / Maosh:</b> ${escapeHtml(session.data.budget)}\n`;
          if (session.data.salaryDetails) adminMessage += `💰 <b>Maosh / Tavsif:</b> ${escapeHtml(session.data.salaryDetails)}\n`;
          adminMessage += `📞 <b>Kiritilgan Aloqa:</b> ${escapeHtml(session.data.contact || '-')}\n`;
          if (session.data.additional) adminMessage += `💬 <b>Qo'shimcha:</b> ${escapeHtml(session.data.additional)}\n`;

          if (session.flow === 'SERVICE') {
            const serviceConfig = getServiceConfig(session.serviceType);
            adminMessage = `🛒 <b>YANGI XIZMAT BUYURTMASI</b>\n` + adminMessage;
            adminMessage += '\n📋 <b>Xizmat tafsilotlari:</b>\n';
            for (const [key, question] of serviceConfig.fields) {
              if (session.data[key]) {
                const fieldName = question.split(/[?\n]/)[0];
                adminMessage += `• <b>${escapeHtml(fieldName)}:</b> ${escapeHtml(session.data[key])}\n`;
              }
            }
          }

          adminMessage += 
            `\n━━━━━━━━━━━━━━━━━━━━━━\n` +
            `💬 <b>Telegram Profile:</b> ${escapeHtml(username)}\n` +
            `🕐 <b>Qabul vaqti:</b> ${new Date().toLocaleString()}`;

          // Dispatch to Admin
          await sendNotification(adminMessage);

          // Confirmation to Client
          resetSession(chatId);
          return bot.sendMessage(
            chatId,
            "🎉 *Tayyor! So'rovingiz muvaffaqiyatli yuborildi.*\n\nImkon qadar tezroq siz bilan bog'lanaman. Rahmat! 🚀",
            { parse_mode: 'Markdown', ...mainMenuKeyboard }
          );
        } else if (text === '✏️ Qayta kiritish') {
          session.step = 0;
          session.data = {};
          if (session.flow === 'PROJECT') return handleProjectStep(bot, chatId, session, null);
          if (session.flow === 'HIRE') return handleHireStep(bot, chatId, session, null);
          if (session.flow === 'COLLAB') return handleCollabStep(bot, chatId, session, null);
        }
      }

      // Execute current active wizard flow
      if (session.flow === 'PROJECT') {
        return handleProjectStep(bot, chatId, session, text);
      } else if (session.flow === 'HIRE') {
        return handleHireStep(bot, chatId, session, text);
      } else if (session.flow === 'COLLAB') {
        return handleCollabStep(bot, chatId, session, text);
      } else if (session.flow === 'SERVICE') {
        return handleServiceStep(bot, chatId, session, text);
      } else {
        // Fallback for unhandled input
        return bot.sendMessage(
          chatId,
          "Quyidagi menyudan o'zingizga kerakli bo'limni tanlang: 🚀",
          { ...mainMenuKeyboard }
        );
      }

    });

    handlersRegistered = true;

  } catch (err) {
    console.error('[TELEGRAM BOT INIT ERROR]:', err.message);
    bot = null;
  }

  return bot;
};

const processTelegramUpdate = async (update) => {
  const telegramBot = initTelegramBot();
  if (!telegramBot || !handlersRegistered) {
    throw new Error('Telegram bot is not configured.');
  }
  telegramBot.processUpdate(update);
  await Promise.allSettled([...pendingTelegramRequests]);
};

const sendNotification = async (text) => {
  const chatIdEnv = process.env.TELEGRAM_CHAT_ID || env.TELEGRAM_CHAT_ID;

  if (!bot || !chatIdEnv) {
    console.error('[TELEGRAM NOTIFICATION] Bot or TELEGRAM_CHAT_ID is not configured.');
    return;
  }

  // Support multiple admin chat IDs separated by comma, semicolon or space
  const chatIds = chatIdEnv.split(/[,;\s]+/).map(id => id.trim()).filter(Boolean);
  console.log(`[TELEGRAM NOTIFICATION] Sending notification to ${chatIds.length} admin chat(s).`);

  for (const adminId of chatIds) {
    try {
      await bot.sendMessage(adminId, text, { parse_mode: 'HTML' });
      console.log(`[TELEGRAM NOTIFICATION] Successfully dispatched to admin chat: ${adminId}`);
    } catch (err) {
      console.warn(`[TELEGRAM NOTIFICATION HTML RETRY] Retrying plain text for ID ${adminId}:`, err.message);
      try {
        const plainText = text.replace(/<[^>]*>/g, '');
        await bot.sendMessage(adminId, plainText);
        console.log(`[TELEGRAM NOTIFICATION FALLBACK SUCCESS] Dispatched to admin ID: ${adminId}`);
      } catch (fallbackErr) {
        console.error(`[TELEGRAM NOTIFICATION ERROR] Failed for ID ${adminId}:`, fallbackErr.message);
      }
    }
  }
};

module.exports = {
  initTelegramBot,
  processTelegramUpdate,
  sendNotification
};
