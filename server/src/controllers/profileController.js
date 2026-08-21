const { profileData } = require('../data/backendData');

// GET /api/profile
exports.getProfile = (req, res) => {
  res.status(200).json({
    success: true,
    data: profileData
  });
};
