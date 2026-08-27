const TelegramBot = require('node-telegram-bot-api');

const token = '8606138156:AAHvnm_9lcPRFfKOCm-4mZZnpN_FkneC-lM';
const chatId = '7760587318';

const bot = new TelegramBot(token, { polling: false });

const testMessage = 
`🚀 *TEST BUYURTMA (TEST PORTFOLIO LEAD REQUEST)*
━━━━━━━━━━━━━━━━━━━━━━

📌 *Turi:* Web sayt buyurtmasi (Test)
👤 *Mijoz / Recruiter:* AI Assistant (Antigravity Test)
🏢 *Kompaniya:* Portfolio System Test LLC
🌐 *Loyiha:* Full-Stack E-commerce & Telegram Bot System
📝 *Funksiyalar:* Fast loading, Dark/Light theme, Interactive Bot
⏱ *Deadline:* 1 hafta
💰 *Budjet:* $500–$1000
📞 *Kiritilgan Aloqa:* +998 90 123 45 67 / test@portfolio.uz
💬 *Qo'shimcha:* Bu botning xabar yuborish funksiyasini tekshirish uchun yuborilgan TEST BUYURTMA.

━━━━━━━━━━━━━━━━━━━━━━
💬 *Telegram Profile:* @test_user
🕐 *Qabul vaqti:* ${new Date().toLocaleString()}`;

async function runTest() {
  console.log(`Sending test notification to Chat ID: ${chatId}...`);
  try {
    const res = await bot.sendMessage(chatId, testMessage, { parse_mode: 'Markdown' });
    console.log('SUCCESS! Test notification successfully sent to Telegram user.');
    console.log('Message ID:', res.message_id);
  } catch (err) {
    console.error('FAILED to send Markdown notification:', err.message);
    try {
      console.log('Retrying plain text fallback...');
      const plainText = testMessage.replace(/\*/g, '').replace(/_/g, '');
      const res = await bot.sendMessage(chatId, plainText);
      console.log('SUCCESS! Plain text fallback message sent to Telegram user.');
      console.log('Message ID:', res.message_id);
    } catch (err2) {
      console.error('CRITICAL ERROR! Failed to send even plain text:', err2.message);
    }
  }
}

runTest();
