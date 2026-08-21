export const skillsCategories = [
  {
    title: "Frontend Core",
    icon: "Layout",
    description: "Building responsive, fast, and modern client-side user interfaces",
    skills: [
      { name: "React", badge: "Core Stack", description: "Hooks, Context API, Component Architecture, State Management", highlight: true },
      { name: "JavaScript (ES6+)", badge: "Core Language", description: "Async/Await, Promises, Closures, DOM, ES Modules", highlight: true },
      { name: "JSX", badge: "Templating", description: "Declarative UI rendering, dynamic components, conditional logic", highlight: true },
      { name: "HTML5 & CSS3", badge: "Foundational", description: "Semantic markup, Flexbox, Grid, CSS Variables, Animations", highlight: false },
      { name: "Tailwind CSS", badge: "Styling", description: "Utility-first design, dark mode implementation, custom themes", highlight: true }
    ]
  },
  {
    title: "Backend Architecture",
    icon: "Server",
    description: "Designing RESTful APIs and server-side backend logic",
    skills: [
      { name: "Node.js", badge: "Runtime", description: "Server-side JavaScript execution, file system, module system", highlight: true },
      { name: "Express.js", badge: "Framework", description: "REST API routing, controllers, middleware, error handling", highlight: true },
      { name: "REST APIs", badge: "Architecture", description: "JSON data exchange, status codes, CORS, endpoint design", highlight: true },
      { name: "Nodemon & Dev Tools", badge: "Workflows", description: "Development server reloading, environment configuration", highlight: false }
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: "Cpu",
    description: "Version control, build tools, and cloud hosting platforms",
    skills: [
      { name: "Git", badge: "Version Control", description: "Branching strategies, commits, conflict resolution", highlight: false },
      { name: "GitHub", badge: "Collaboration", description: "Repository management, open-source workflow, pull requests", highlight: true },
      { name: "Vite", badge: "Build Tool", description: "Fast HMR dev server, optimized production bundling", highlight: true },
      { name: "Netlify & Vercel", badge: "Deployment", description: "Continuous deployment, static hosting, environment variables", highlight: false }
    ]
  }
];
