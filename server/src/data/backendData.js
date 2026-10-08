const profileData = {
  name: "Humoyun Azimov",
  title: "Frontend / Full-Stack Developer",
  status: "Available for Projects & Opportunities",
  tagline: "I build modern, fast, and scalable digital experiences.",
  location: "Tashkent, Uzbekistan / Remote",
  bio: "Passionate Full-Stack Developer specialized in building responsive, high-performance web applications with React, JavaScript, and Node.js. Committed to writing modern, scalable, and maintainable code with exceptional UI/UX standards.",
  socials: {
    github: "https://github.com/azimov-3444/",
    telegram: "https://t.me/KyroX_org",
    telegramUsername: "@KyroX_org",
    telegramBot: "https://t.me/kyrox_portfoliobot",
    telegramBotUsername: "@kyrox_portfoliobot",
    email: "azimovhumoyun3444@gmail.com",
    linkedin: null
  }
};

const projectsData = [
  {
    id: "999-premium-tools",
    title: "999 Premium Tools",
    subtitle: "Commercial Jewelry Equipment & Tools Platform",
    description: "A high-performance commercial web platform engineered for professional jewelry manufacturing tools and equipment. Built with focus on elegant product presentation, fast search capabilities, and responsive customer experience.",
    category: "Commercial / Full-Stack",
    featured: true,
    liveUrl: "https://999premiumtools.com/",
    githubUrl: null,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind", "Node.js", "REST API"],
    highlights: [
      "Commercial product catalog layout with visual highlights",
      "Optimized load times and high resolution media rendering",
      "Seamless responsive navigation tailored for mobile & desktop users"
    ],
    role: "Lead Full-Stack Developer"
  },
  {
    id: "lumos-school",
    title: "LUMOS SCHOOL",
    subtitle: "Modern Educational Platform Concept",
    description: "An interactive, student-centric web platform designed for modern educational institutions. Features structured course pathways, intuitive navigation, clean aesthetic, and engaging interactive elements.",
    category: "Education / Web App",
    featured: true,
    liveUrl: "https://lumos-school.vercel.app/",
    githubUrl: null,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JSX", "JavaScript", "CSS Modules / Tailwind", "Vite"],
    highlights: [
      "Modern dashboard & curriculum navigation UX",
      "Dynamic interactive components and smooth visual transitions",
      "Fully accessible mobile-first responsive architecture"
    ],
    role: "Frontend Architect"
  },
  {
    id: "fateleaf-tea-destiny",
    title: "FateLeaf: Tea & Destiny",
    subtitle: "Interactive Themed Web Experience",
    description: "A captivating themed web application built around the concept of tea leaves and destiny. Blends atmospheric UI design with interactive storytelling elements and micro-interactions.",
    category: "Creative / Interactive",
    featured: false,
    liveUrl: "https://frontend-six-mu-9i5b5beol6.vercel.app/",
    githubUrl: null,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "UI/UX Animations"],
    highlights: [
      "Atmospheric dark mode visuals & custom animation cues",
      "Interactive multi-step user engagement flow",
      "State-managed interactive tea leaf reading journey"
    ],
    role: "Frontend Developer & UI Designer"
  },
  {
    id: "frontend-showcase",
    title: "Frontend Showcase",
    subtitle: "Interactive UI/UX & Component Laboratory",
    description: "A comprehensive frontend application demonstrating modern UI patterns, component reusability, complex layout structures, and fluid micro-interactions.",
    category: "Frontend Showcase",
    featured: false,
    liveUrl: "https://magenta-conkies-e014b0.netlify.app/",
    githubUrl: null,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Layouts"],
    highlights: [
      "Demonstration of advanced React state management & layout grids",
      "Performant component rendering and micro-interaction states",
      "Cross-browser and multi-device optimized layout system"
    ],
    role: "Frontend Developer"
  }
];

const skillsData = [
  {
    category: "Frontend Core",
    description: "Building responsive, modern, and scalable user interfaces",
    items: [
      { name: "React", level: "Advanced", icon: "react" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript" },
      { name: "JSX", level: "Advanced", icon: "jsx" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "html" },
      { name: "Tailwind CSS", level: "Intermediate", icon: "tailwind" }
    ]
  },
  {
    category: "Backend Architecture",
    description: "Designing RESTful APIs and server-side workflows",
    items: [
      { name: "Node.js", level: "Intermediate", icon: "nodejs" },
      { name: "Express.js", level: "Intermediate", icon: "express" },
      { name: "REST APIs", level: "Intermediate", icon: "api text" },
      { name: "Nodemon & Dev Tools", level: "Intermediate", icon: "tools" }
    ]
  },
  {
    category: "Development Tools & Workflow",
    description: "Version control, deployment platforms, and code quality",
    items: [
      { name: "Git & GitHub", level: "Intermediate", icon: "git" },
      { name: "Vite", level: "Intermediate", icon: "vite" },
      { name: "Netlify & Vercel", level: "Intermediate", icon: "cloud" },
      { name: "Responsive UI/UX", level: "Advanced", icon: "design" }
    ]
  }
];

module.exports = {
  profileData,
  projectsData,
  skillsData
};
