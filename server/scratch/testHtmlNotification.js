const TelegramBot = require('node-telegram-bot-api');

const token = '8606138156:AAHvnm_9lcPRFfKOCm-4mZZnpN_FkneC-lM';
const chatId = '7760587318';

const bot = new TelegramBot(token, { polling: false });

const testHtmlMessage = 
`🚀 <b>TEST BUYURTMA (PORTFOLIO LEAD REQUEST)</b>
━━━━━━━━━━━━━━━━━━━━━━

📌 <b>Turi:</b> Web sayt buyurtmasi (HTML Mode Test)
👤 <b>Mijoz / Recruiter:</b> Humoyun Azimov (Test Client)
🏢 <b>Kompaniya:</b> Digital Systems LLC
🌐 <b>Loyiha:</b> Full-Stack E-commerce & Telegram Bot System
📝 <b>Funksiyalar:</b> Fast loading, Dark/Light theme, Interactive Bot
⏱ <b>Deadline:</b> 1 hafta
💰 <b>Budjet:</b> $500–$1000
📞 <b>Kiritilgan Aloqa:</b> +998 90 123 45 67 / test@portfolio.uz
💬 <b>Qo'shimcha:</b> Telegram HTML formatda 100% yetib keldi!

━━━━━━━━━━━━━━━━━━━━━━
💬 <b>Telegram Profile:</b> @totkogotiiskala
🕐 <b>Qabul vaqti:</b> ${new Date().toLocaleString()}`;

async function runTest() {
  console.log(`Sending HTML test notification to Chat ID: ${chatId}...`);
  try {
    const res = await bot.sendMessage(chatId, testHtmlMessage, { parse_mode: 'HTML' });
    console.log('SUCCESS! HTML test notification successfully sent to Telegram user.');
    console.log('Message ID:', res.message_id);
  } catch (err) {
    console.error('FAILED to send HTML notification:', err.message);
  }
}

runTest();
