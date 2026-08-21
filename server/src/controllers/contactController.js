const telegramBot = require('../services/telegramBot');

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
      subject: subject ? subject.trim() : 'General Portfolio Inquiry',
      message: message.trim(),
      receivedAt: timestamp
    };

    console.log(`[CONTACT FORM SUBMISSION] From: ${contactData.name} <${contactData.email}>`);

    // Notify Telegram Admin if Bot Service is available
    if (telegramBot && telegramBot.sendNotification) {
      const notificationText = 
        `📬 *New Portfolio Inquiry*\n\n` +
        `👤 *Name:* ${contactData.name}\n` +
        `📧 *Email:* ${contactData.email}\n` +
        `📌 *Subject:* ${contactData.subject}\n\n` +
        `💬 *Message:*\n${contactData.message}\n\n` +
        `⏰ _Received at: ${new Date().toLocaleString()}_`;

      await telegramBot.sendNotification(notificationText);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
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
