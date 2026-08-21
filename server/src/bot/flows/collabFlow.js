const { navKeyboard, confirmKeyboard } = require('../keyboards');

const COLLAB_STEPS = [
  {
    key: 'name',
    prompt: "🤝 *Ajoyib! Hamkorlik bo'yicha taklif yuborishni boshlaymiz.*\n\n*1/5 — Ismingiz va Kompaniya/Loyiha nomi?*\n\n_Masalan: Jasur / StartupX_",
    keyboard: navKeyboard
  },
  {
    key: 'collabType',
    prompt: "💡 *2/5 — Qanday turdagi hamkorlik taklif etyapsiz?*\n\n_Masalan: Birgalikda loyiha yaratish, Open source, Tech Partnership, Sub-contract..._",
    keyboard: navKeyboard
  },
  {
    key: 'description',
    prompt: "📝 *3/5 — Loyiha va taklifingiz haqida qisqacha ma'lumot?*",
    keyboard: navKeyboard
  },
  {
    key: 'budget',
    prompt: "💰 *4/5 — Budjet yoki resurslar (agar mavjud bo'lsa)?*\n\n_Masalan: Equity share, fixed budget, profit split..._",
    keyboard: navKeyboard
  },
  {
    key: 'contact',
    prompt: "📞 *5/5 — Siz bilan bog'lanish uchun Telegram, Email yoki Telefon raqamingiz?*",
    keyboard: navKeyboard
  }
];

const handleCollabStep = (bot, chatId, session, text) => {
  const stepIndex = session.step;

  if (stepIndex > 0 && text) {
    const prevStep = COLLAB_STEPS[stepIndex - 1];
    session.data[prevStep.key] = text;
  }

  if (stepIndex < COLLAB_STEPS.length) {
    const currentStep = COLLAB_STEPS[stepIndex];
    bot.sendMessage(chatId, currentStep.prompt, {
      parse_mode: 'Markdown',
      ...currentStep.keyboard
    });
    session.step += 1;
  } else {
    // Confirmation Screen
    session.step = 99; // Final state
    const summary = 
      `📋 *Hamkorlik taklifi tayyor! Ma'lumotlarni tekshiring:*\n\n` +
      `📌 *Turi:* Hamkorlik (Collaboration)\n` +
      `👤 *Ism / Loyiha:* ${session.data.name || '-'}\n` +
      `💡 *Hamkorlik turi:* ${session.data.collabType || '-'}\n` +
      `📝 *Tavsif:* ${session.data.description || '-'}\n` +
      `💰 *Budjet / Resurs:* ${session.data.budget || '-'}\n` +
      `📞 *Aloqa:* ${session.data.contact || '-'}\n\n` +
      `*Hammasi to'g'rimi?*`;

    bot.sendMessage(chatId, summary, {
      parse_mode: 'Markdown',
      ...confirmKeyboard
    });
  }
};

module.exports = {
  COLLAB_STEPS,
  handleCollabStep
};
