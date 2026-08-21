const { skillsData } = require('../data/backendData');

// GET /api/skills
exports.getAllSkills = (req, res) => {
  res.status(200).json({
    success: true,
    data: skillsData
  });
};
