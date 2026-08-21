const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projectsController');
const skillsController = require('../controllers/skillsController');
const profileController = require('../controllers/profileController');
const contactController = require('../controllers/contactController');

const rateLimiter = require('../middleware/rateLimiter');
const { validateContactInput } = require('../middleware/validator');

// Profile endpoint
router.get('/profile', profileController.getProfile);

// Skills endpoint
router.get('/skills', skillsController.getAllSkills);

// Projects endpoints
router.get('/projects', projectsController.getAllProjects);
router.get('/projects/:id', projectsController.getProjectById);

// Contact submission endpoint (with rate limiting & validation)
router.post('/contact', rateLimiter({ windowMs: 15 * 60 * 1000, max: 5 }), validateContactInput, contactController.submitContactForm);

module.exports = router;
