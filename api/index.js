const { processTelegramUpdate } = require('../server/src/services/telegramBot');

// Vercel serverless webhook handler. Telegram sends one JSON update per request.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid Telegram update.' });
  }

  try {
    await processTelegramUpdate(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[TELEGRAM WEBHOOK ERROR]', error.message);
    return res.status(500).json({ ok: false });
  }
};
