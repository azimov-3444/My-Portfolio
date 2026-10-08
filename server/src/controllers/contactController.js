const telegramBot = require('../services/telegramBot');

const escapeHtml = (text) => {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

// POST /api/contact
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Additional backend validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (name, email, message)."
      });
    }

    const timestamp = new Date().toISOString();
    const contactData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : 'Website Project Inquiry',
      message: message.trim(),
      receivedAt: timestamp
    };

    console.log(`[WEBSITE INQUIRY SUBMISSION] From: ${contactData.name} <${contactData.email}>`);

    // Notify Telegram Admin if Bot Service is configured
    if (telegramBot && telegramBot.sendNotification) {
      const notificationText = 
        `🚀 <b>YANGI WEB-SAYT BUYURTMASI (WEBSITE INQUIRY)</b>\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `👤 <b>Mijoz Nomi:</b> ${escapeHtml(contactData.name)}\n` +
        `📧 <b>Aloqa / Contact:</b> ${escapeHtml(contactData.email)}\n` +
        `📌 <b>Mavzu / Subject:</b> ${escapeHtml(contactData.subject)}\n\n` +
        `💬 <b>Buyurtma Tafsilotlari / Brief:</b>\n` +
        `${escapeHtml(contactData.message)}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n` +
        `🌐 <b>Manba:</b> Portfolio Web Platform\n` +
        `⏰ <b>Qabul vaqti:</b> ${new Date().toLocaleString()}`;

      await telegramBot.sendNotification(notificationText);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your inquiry has been sent successfully. I will get back to you soon.",
      data: {
        submittedAt: timestamp
      }
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while processing your message. Please try again later."
    });
  }
};
