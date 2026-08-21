const { navKeyboard, workTypeKeyboard, confirmKeyboard } = require('../keyboards');

const HIRE_STEPS = [
  {
    key: 'name',
    prompt: "💼 *Ajoyib! Ish taklifi yuborish jarayonini boshlaymiz.*\n\n*1/6 — Ismingiz va sharifingiz?*\n\n_Masalan: Aleksandr / Dilnoza_",
    keyboard: navKeyboard
  },
  {
    key: 'company',
    prompt: "🏢 *2/6 — Kompaniyangiz yoki tashkilotingiz nomi?*\n\n_Masalan: EPAM, IT Park, SuperTech LLC..._",
    keyboard: navKeyboard
  },
  {
    key: 'position',
    prompt: "🎯 *3/6 — Qaysi lavozim / vakansiya uchun taklif qilyapsiz?*\n\n_Masalan: Senior Frontend Developer, Full-Stack Engineer, React Tech Lead..._",
    keyboard: navKeyboard
  },
  {
    key: 'workType',
    prompt: "📍 *4/6 — Ish shakli qanday?*\n\n_Quyidagi tugmalardan birini tanlang:_ ",
    keyboard: workTypeKeyboard
  },
  {
    key: 'salaryDetails',
    prompt: "💰 *5/6 — Mo'ljallangan maosh (Salary / Budget) va qisqa ish tavsifi?*\n\n_Masalan: $1500–$2500/month, to'liq stavka, moslashuvchan grafik..._",
    keyboard: navKeyboard
  },
  {
    key: 'contact',
    prompt: "📞 *6/6 — Aloqa uchun Telegram username, Email yoki telefon raqamingiz?*",
    keyboard: navKeyboard
  }
];

const handleHireStep = (bot, chatId, session, text) => {
  const stepIndex = session.step;

  if (stepIndex > 0 && text) {
    const prevStep = HIRE_STEPS[stepIndex - 1];
    session.data[prevStep.key] = text;
  }

  if (stepIndex < HIRE_STEPS.length) {
    const currentStep = HIRE_STEPS[stepIndex];
    bot.sendMessage(chatId, currentStep.prompt, {
      parse_mode: 'Markdown',
      ...currentStep.keyboard
    });
    session.step += 1;
  } else {
    // Confirmation Screen
    session.step = 99; // Final state
    const summary = 
      `📋 *Ish taklifi tayyor! Ma'lumotlarni tekshiring:*\n\n` +
      `📌 *Turi:* Ish taklifi (Job Offer)\n` +
      `👤 *Ism:* ${session.data.name || '-'}\n` +
      `🏢 *Kompaniya:* ${session.data.company || '-'}\n` +
      `🎯 *Lavozim:* ${session.data.position || '-'}\n` +
      `📍 *Ish shakli:* ${session.data.workType || '-'}\n` +
      `💰 *Maosh / Tavsif:* ${session.data.salaryDetails || '-'}\n` +
      `📞 *Aloqa:* ${session.data.contact || '-'}\n\n` +
      `*Hammasi to'g'rimi?*`;

    bot.sendMessage(chatId, summary, {
      parse_mode: 'Markdown',
      ...confirmKeyboard
    });
  }
};

module.exports = {
  HIRE_STEPS,
  handleHireStep
};
