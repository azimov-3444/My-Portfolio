const { projectsData } = require('../data/backendData');

// GET /api/projects
exports.getAllProjects = (req, res) => {
  const { category, featured } = req.query;
  let result = [...projectsData];

  if (featured === 'true') {
    result = result.filter(p => p.featured);
  }

  if (category) {
    result = result.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  res.status(200).json({
    success: true,
    count: result.length,
    data: result
  });
};

// GET /api/projects/:id
exports.getProjectById = (req, res) => {
  const { id } = req.params;
  const project = projectsData.find(p => p.id === id || p.id === String(id));

  if (!project) {
    return res.status(404).json({
      success: false,
      message: `Project with ID '${id}' not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: project
  });
};
