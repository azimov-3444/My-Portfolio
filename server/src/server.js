const express = require('express');
const cors = require('cors');
const path = require('path');
const https = require('https');
const http = require('http');
const env = require('./config/env');
const apiRoutes = require('./routes/apiRoutes');
const { initTelegramBot } = require('./services/telegramBot');

const app = express();

// Security & Middleware Configuration
app.use(cors({
  origin: '*', // Allow all origins for dev/portfolio showcase flexibility
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Healthcheck Route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route '${req.originalUrl}' not found.`
  });
});

// Start Express Server
const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 Portfolio Express Server running on port ${PORT}`);
  console.log(`🌐 Base API URL: http://localhost:${PORT}/api`);
  console.log(`=================================================`);

  // Initialize Telegram Bot if configured
  initTelegramBot();

  // Self-Ping Keep-Alive mechanism for cloud hosting (Render Free Tier)
  const externalUrl = process.env.RENDER_EXTERNAL_URL || process.env.SERVER_URL;
  if (externalUrl) {
    console.log(`[KEEP-ALIVE] Auto-ping initialized for: ${externalUrl}`);
    setInterval(() => {
      const client = externalUrl.startsWith('https') ? https : http;
      client.get(`${externalUrl}/health`, (res) => {
        console.log(`[KEEP-ALIVE PING] Auto-pinged ${externalUrl}/health - Status: ${res.statusCode}`);
      }).on('error', (err) => {
        console.warn(`[KEEP-ALIVE PING ERROR]:`, err.message);
      });
    }, 10 * 60 * 1000); // Ping every 10 minutes to prevent sleep
  }
});
