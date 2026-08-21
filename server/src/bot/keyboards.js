// Reusable Keyboards for Telegram Portfolio Bot

// 1. Main Menu Keyboard
const mainMenuKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '🌐 Web sayt buyurtma qilish' }, { text: '💼 Ish taklifi' }],
      [{ text: '🤝 Hamkorlik' }, { text: '👨‍💻 Men haqimda' }],
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

// 5. Confirmation Screen Keyboard
const confirmKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '✅ Yuborish' }],
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
  confirmKeyboard
};
