const express = require('express');
const cors = require('cors');
const path = require('path');
const env = require('./config/env');
const apiRoutes = require('./routes/apiRoutes');

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

// Local development only. Vercel imports this file as a serverless app.
if (require.main === module) {
  const PORT = env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Portfolio Express Server running on port ${PORT}`);
  });
}

module.exports = app;
