// Basic in-memory rate limiter for contact endpoint protection
const submissions = new Map();

const rateLimiter = (options = { windowMs: 15 * 60 * 1000, max: 5 }) => {
  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const now = Date.now();
    
    if (!submissions.has(ip)) {
      submissions.set(ip, []);
    }

    const timestamps = submissions.get(ip).filter(time => now - time < options.windowMs);
    
    if (timestamps.length >= options.max) {
      return res.status(429).json({
        success: false,
        message: "Too many messages sent from this IP. Please wait a few minutes before trying again."
      });
    }

    timestamps.push(now);
    submissions.set(ip, timestamps);
    next();
  };
};

module.exports = rateLimiter;
