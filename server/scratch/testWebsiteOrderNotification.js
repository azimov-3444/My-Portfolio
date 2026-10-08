const { submitContactForm } = require('../src/controllers/contactController');
const env = require('../src/config/env');

// Set env TELEGRAM_CHAT_ID locally for test
process.env.TELEGRAM_CHAT_ID = '7760587318';

// Initialize telegram bot instance inside telegramBot service first
const { initTelegramBot } = require('../src/services/telegramBot');
initTelegramBot();

async function testWebsiteOrder() {
  console.log('Simulating web site inquiry submission...');

  const mockReq = {
    body: {
      name: 'Test Client (Website User)',
      email: '@testclient_telegram',
      subject: '[KyroX Inquiry] Commercial Web Application',
      message: `🚀 KYROX PORTFOLIO PROJECT BRIEF
━━━━━━━━━━━━━━━━━━━━━━
📌 Project Type: Commercial Web Application
👤 Client Name: Test Client
📞 Contact: Telegram @testclient_telegram
🛠 Desired Features: Responsive UI, Telegram Bot Integration, Fast Node.js API
📝 Requirements: Men zargarlik buyumlari uchun yangi sayt va telegram bot yaratmoqchiman.
━━━━━━━━━━━━━━━━━━━━━━`
    }
  };

  const mockRes = {
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      console.log(`[RESPONSE ${this.statusCode}]:`, data);
      return this;
    }
  };

  setTimeout(async () => {
    await submitContactForm(mockReq, mockRes);
    console.log('Test execution completed.');
    process.exit(0);
  }, 1000);
}

testWebsiteOrder();
