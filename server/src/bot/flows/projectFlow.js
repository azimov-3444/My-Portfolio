const { navKeyboard, budgetKeyboard, confirmKeyboard } = require('../keyboards');

const PROJECT_STEPS = [
  {
    key: 'name',
    prompt: "🚀 *Ajoyib! Web sayt buyurtmasi berish jarayonini boshlaymiz.*\n\n*1/7 — Ismingiz yoki Kompaniyangiz nomi?*\n\n_Masalan: Humoyun / Tech Start LLC_",
    keyboard: navKeyboard
  },
  {
    key: 'projectType',
    prompt: "🌐 *2/7 — Qanday loyiha yoki website kerak?*\n\n_Masalan: E-commerce internet do'kon, Landing Page, Ta'lim portali, Korporativ sayt..._",
    keyboard: navKeyboard
  },
  {
    key: 'features',
    prompt: "📝 *3/7 — Website'da qanday asosiy funksiyalar bo'lishi kerak?*\n\n_Masalan: To'lov tizimlari (Click/Payme), Admin panel, Qidiruv, Dark mode, Telegram bot integratsiyasi..._",
    keyboard: navKeyboard
  },
  {
    key: 'deadline',
    prompt: "⏱ *4/7 — Taxminiy topshirish muddati (Deadline) qancha?*\n\n_Masalan: 10 kun, 2 hafta, 1 oy..._",
    keyboard: navKeyboard
  },
  {
    key: 'budget',
    prompt: "💰 *5/7 — Bu loyiha uchun taxminiy budjetingiz qancha?*\n\n_Quyidagi tayyor variantlardan tanlang yoki o'zingiz yozing:_ ",
    keyboard: budgetKeyboard
  },
  {
    key: 'contact',
    prompt: "📞 *6/7 — Siz bilan qanday bog'lanish mumkin?*\n\n_Telefon raqamingiz, Telegram username yoki Email manzilingizni qoldiring._",
    keyboard: navKeyboard
  },
  {
    key: 'additional',
    prompt: "💬 *7/7 — Qo'shimcha ma'lumot yoki alohida talablaringiz bormi?*\n\n_Agar bo'lmasa 'Yo'q' deb yozishingiz mumkin._",
    keyboard: navKeyboard
  }
];

const handleProjectStep = (bot, chatId, session, text) => {
  const stepIndex = session.step;

  if (stepIndex > 0 && text) {
    const prevStep = PROJECT_STEPS[stepIndex - 1];
    session.data[prevStep.key] = text;
  }

  if (stepIndex < PROJECT_STEPS.length) {
    const currentStep = PROJECT_STEPS[stepIndex];
    bot.sendMessage(chatId, currentStep.prompt, {
      parse_mode: 'Markdown',
      ...currentStep.keyboard
    });
    session.step += 1;
  } else {
    // Confirmation Screen
    session.step = 99; // Final state
    const summary = 
      `📋 *So'rovingiz tayyor! Ma'lumotlarni tekshiring:*\n\n` +
      `📌 *Turi:* Web sayt buyurtmasi\n` +
      `👤 *Ism / Kompaniya:* ${session.data.name || '-'}\n` +
      `🌐 *Loyiha turi:* ${session.data.projectType || '-'}\n` +
      `📝 *Funksiyalar:* ${session.data.features || '-'}\n` +
      `⏱ *Deadline:* ${session.data.deadline || '-'}\n` +
      `💰 *Budjet:* ${session.data.budget || '-'}\n` +
      `📞 *Aloqa:* ${session.data.contact || '-'}\n` +
      `💬 *Qo'shimcha:* ${session.data.additional || '-'}\n\n` +
      `*Hammasi to'g'rimi?*`;

    bot.sendMessage(chatId, summary, {
      parse_mode: 'Markdown',
      ...confirmKeyboard
    });
  }
};

module.exports = {
  PROJECT_STEPS,
  handleProjectStep
};
