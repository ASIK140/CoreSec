export const courses = [
  {
    id: 'python-beginner',
    title: 'Python for Beginners',
    shortDescription: 'Master Python programming fundamentals with hands-on projects',
    price: 1999,
    language: 'Bengali',
    duration: '6 Weeks',
    totalHours: 24,
    lectures: 18,
    assignments: 6,
    isFeatured: true,
    thumbnail: 'https://cdn.springpeople.com/media/python%20logo.png',
    description: 'This comprehensive Python course will take you from absolute beginner to proficient programmer. You\'ll learn core Python concepts, data structures, functions, and object-oriented programming through practical exercises and real-world projects. By the end, you\'ll be able to build your own Python applications and automate tasks.',
    learningOutcomes: [
      'Write clean and efficient Python code',
      'Work with lists, dictionaries, and other data structures',
      'Build reusable functions and modules',
      'Understand object-oriented programming concepts',
      'Read and write files',
      'Handle errors and exceptions',
      'Automate repetitive tasks'
    ],

  "syllabus": [
    {
      "week": 1,
      "title": "Python Basics",
      "topics": [
        "Installation & IDE Setup",
        "Variables & Data Types",
        "Basic Input/Output",
        "Writing First Python Program"
      ],
      "duration": "4 hours",
      "resources": ["Cheat Sheet", "3 Video Lectures", "5 Coding Exercises"]
    },
    {
      "week": 2,
      "title": "Control Flow",
      "topics": [
        "If-Else Statements",
        "For/While Loops",
        "Break/Continue",
        "List Comprehensions"
      ],
      "duration": "6 hours",
      "resources": ["2 Projects", "Quiz"]
    },
    {
      "week": 3,
      "title": "Functions & Modules",
      "topics": [
        "Defining Functions",
        "Parameters & Returns",
        "Lambda Functions",
        "Importing Modules"
      ],
      "duration": "5 hours"
    },
    {
      "week": 4,
      "title": "Data Structures",
      "topics": [
        "Lists & Tuples",
        "Dictionaries",
        "Sets",
        "Common Operations"
      ],
      "duration": "7 hours"
    },
    {
      "week": 5,
      "title": "File Handling & OOP",
      "topics": [
        "Reading/Writing Files",
        "Classes & Objects",
        "Inheritance",
        "Exception Handling"
      ],
      "duration": "8 hours"
    },
    {
      "week": 6,
      "title": "Final Project",
      "topics": [
        "Problem Analysis",
        "Code Implementation",
        "Debugging",
        "Project Submission"
      ],
      "duration": "10 hours"
    }
  ],
    features: [
      'Live interactive classes',
      'Recorded video lectures',
      'Weekly coding exercises',
      'Project-based learning',
      'Certificate of completion',
      'Q&A support'
    ],
    instructor: {
      name: 'Rajesh Sharma',
      bio: 'Senior Python Developer with 10+ years of experience building scalable applications. Trained over 1,000 students in Python programming.',
      image: '',
      rating: 4.9
    },
    prerequisites: ['Basic computer skills', 'No prior programming experience required']
  },
  {
    id: 'full-stack-web-dev',
    title: 'Full Stack Web Development',
    shortDescription: 'Build complete web applications with React, Node.js and MongoDB',
    price: 4999,
    language: 'Bengali',
    duration: '12 Weeks',
    totalHours: 60,
    lectures: 36,
    assignments: 12,
    isFeatured: true,
    thumbnail: 'https://ik.imagekit.io/mdzi40eohii/tsc/Full_Stack_Image_daa0e85929_mkCd6n2su.png',
    description: 'Become a full-stack developer by learning both frontend and backend technologies. This intensive course covers React for building interactive user interfaces, Node.js with Express for server-side development, and MongoDB for database management. You\'ll complete multiple projects including a full-fledged e-commerce application.',
    learningOutcomes: [
      'Build responsive frontends with React',
      'Create RESTful APIs with Node.js',
      'Design database schemas with MongoDB',
      'Implement user authentication',
      'Deploy full-stack applications',
      'Follow best practices in web development'
    ],

  "syllabus": [
    {
      "week": 1,
      "title": "HTML5 & CSS3 Fundamentals",
      "topics": [
        "Semantic HTML5 tags",
        "CSS Flexbox/Grid layouts",
        "Responsive design principles",
        "CSS animations and transitions"
      ],
      "project": "Build a responsive portfolio page",
      "resources": ["MDN Web Docs", "CSS-Tricks Guide", "3 Video Tutorials"]
    },
    {
      "week": 2,
      "title": "Modern JavaScript (ES6+)",
      "topics": [
        "Arrow functions & destructuring",
        "Async/await and promises",
        "DOM manipulation",
        "Fetch API with JSON"
      ],
      "project": "Weather application using OpenWeather API",
      "handsOn": ["5 Coding Exercises", "Debugging Challenge"]
    },
    {
      "week": 3,
      "title": "React Fundamentals",
      "topics": [
        "Components and props",
        "State management (useState)",
        "React Router v6",
        "Conditional rendering"
      ],
      "project": "Interactive todo list app",
      "resources": ["React Documentation", "2 Project Templates"]
    },
    {
      "week": 4,
      "title": "Advanced React Patterns",
      "topics": [
        "Context API",
        "useReducer hook",
        "Performance optimization",
        "Custom hooks"
      ],
      "project": "E-commerce product cart system",
      "handsOn": ["Code Review Session", "Optimization Lab"]
    },
    {
      "week": 5,
      "title": "Node.js & Express Basics",
      "topics": [
        "REST API design",
        "Middleware architecture",
        "Error handling",
        "Route organization"
      ],
      "project": "Bookstore management API",
      "resources": ["Postman Collection", "Express.js Docs"]
    },
    {
      "week": 6,
      "title": "MongoDB Database Integration",
      "topics": [
        "CRUD operations",
        "Mongoose ODM",
        "Data validation",
        "Aggregation pipeline"
      ],
      "project": "Blog API with database",
      "handsOn": ["Database Design Workshop", "Query Challenges"]
    },
    {
      "week": 7,
      "title": "Authentication & Security",
      "topics": [
        "JWT implementation",
        "Password hashing (bcrypt)",
        "Cookie/session management",
        "Role-based access control"
      ],
      "project": "User authentication system",
      "resources": ["Security Checklist", "OWASP Guidelines"]
    },
    {
      "week": 8,
      "title": "Full-Stack Integration",
      "topics": [
        "Axios for API calls",
        "CORS configuration",
        "Environment variables",
        "API documentation (Swagger)"
      ],
      "project": "Blog app with React frontend + Node backend",
      "handsOn": ["Integration Testing", "Debugging Session"]
    },
    {
      "week": 9,
      "title": "Testing & Debugging",
      "topics": [
        "Jest framework",
        "React Testing Library",
        "API testing with Postman",
        "Error logging"
      ],
      "project": "Write test suite for blog app",
      "resources": ["Testing Cheatsheet", "2 Live Debugging Videos"]
    },
    {
      "week": 10,
      "title": "DevOps & Deployment",
      "topics": [
        "Docker containerization",
        "CI/CD pipelines",
        "AWS/Heroku deployment",
        "Nginx configuration"
      ],
      "project": "Deploy full-stack application",
      "handsOn": ["Cloud Setup Walkthrough", "Performance Tuning"]
    },
    {
      "week": 11,
      "title": "Advanced Concepts",
      "topics": [
        "WebSockets (real-time)",
        "GraphQL basics",
        "Microservices architecture",
        "Serverless functions"
      ],
      "project": "Real-time chat application",
      "resources": ["Advanced Architecture Diagrams", "Case Studies"]
    },
    {
      "week": 12,
      "title": "Capstone Project",
      "topics": [
        "Agile development practice",
        "Team collaboration (Git)",
        "Presentation skills",
        "Code optimization"
      ],
      "project": "Build and present a SaaS application",
      "handsOn": ["Mentor Feedback Sessions", "Demo Day Preparation"]
    }
  ],

    features: [
      'Project-based curriculum',
      'Code reviews by instructors',
      'Career guidance sessions',
      'Portfolio project development',
      'Interview preparation',
      'Job placement assistance'
    ],
    instructor: {
      name: 'Priya Chatterjee',
      bio: 'Full-stack developer and tech lead with 8 years of experience at top IT companies. Specializes in MERN stack applications.',
      image: '/images/instructors/priya-chatterjee.jpg',
      rating: 4.8
    },
    prerequisites: ['Basic programming knowledge', 'Familiarity with HTML/CSS recommended']
  },
  {
    id: 'frontend-mastery',
    title: 'Frontend Web Development',
    shortDescription: 'Master modern frontend technologies including React and Redux',
    price: 2999,
    language: 'Bengali',
    duration: '8 Weeks',
    totalHours: 40,
    lectures: 24,
    assignments: 8,
    thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20240703163709/Frontend-Development-Courses.webp',
    description: 'This course focuses exclusively on frontend development, teaching you how to build beautiful, interactive user interfaces with React. You\'ll learn component-based architecture, state management with Redux, modern CSS techniques, and how to work with APIs. Includes multiple real-world projects to build your portfolio.',
    learningOutcomes: [
      'Build reusable React components',
      'Manage application state effectively',
      'Style applications with modern CSS',
      'Work with external APIs',
      'Optimize frontend performance',
      'Test and debug frontend code'
    ],

  "syllabus": [
    {
      "week": 1,
      "title": "HTML5 & CSS3 Mastery",
      "topics": [
        "Semantic HTML5 elements",
        "CSS Flexbox & Grid layouts",
        "Responsive design (mobile-first)",
        "CSS variables & custom properties",
        "CSS transitions & animations"
      ],
      "project": "Build a responsive portfolio website",
      "resources": ["MDN Web Docs", "CSS-Tricks Guide", "Figma Design File"]
    },
    {
      "week": 2,
      "title": "Modern JavaScript Fundamentals",
      "topics": [
        "ES6+ syntax (let/const, arrow functions)",
        "DOM manipulation",
        "Event handling",
        "Array methods (map, filter, reduce)",
        "Async JavaScript (callbacks, promises)"
      ],
      "project": "Interactive quiz application",
      "handsOn": ["5 Coding Exercises", "Debugging Challenges"]
    },
    {
      "week": 3,
      "title": "Advanced JavaScript",
      "topics": [
        "Closures & scope",
        "Prototypes & classes",
        "Fetch API & JSON handling",
        "LocalStorage & sessionStorage",
        "Error handling"
      ],
      "project": "Weather app with API integration",
      "resources": ["JavaScript.info", "2 Video Tutorials"]
    },
    {
      "week": 4,
      "title": "React Fundamentals",
      "topics": [
        "JSX syntax",
        "Components & props",
        "State management (useState)",
        "Lifecycle methods",
        "Conditional rendering"
      ],
      "project": "Task manager application",
      "handsOn": ["Code Review Session", "React Docs Exercises"]
    },
    {
      "week": 5,
      "title": "Advanced React Patterns",
      "topics": [
        "Hooks (useEffect, useReducer)",
        "Context API",
        "React Router",
        "Forms & form validation",
        "Custom hooks"
      ],
      "project": "E-commerce product listing page",
      "resources": ["React Documentation", "2 Project Templates"]
    },
    {
      "week": 6,
      "title": "State Management",
      "topics": [
        "Redux toolkit",
        "State normalization",
        "Middleware (thunk/saga)",
        "Performance optimization",
        "React Query basics"
      ],
      "project": "Shopping cart with Redux",
      "handsOn": ["Redux DevTools Lab", "Optimization Workshop"]
    },
    {
      "week": 7,
      "title": "Testing & Tooling",
      "topics": [
        "Jest & React Testing Library",
        "Component testing",
        "End-to-end testing (Cypress)",
        "Vite build tool",
        "Git & GitHub workflows"
      ],
      "project": "Add tests to task manager app",
      "resources": ["Testing Cheatsheet", "Git Best Practices"]
    },
    {
      "week": 8,
      "title": "Capstone Project",
      "topics": [
        "Project architecture",
        "API integration",
        "Accessibility (a11y)",
        "Performance optimization",
        "Deployment (Vercel/Netlify)"
      ],
      "project": "Build and deploy a social media dashboard",
      "handsOn": ["Mentor Code Reviews", "Final Presentation"]
    }
  ],
  "stats": {
    "totalWeeks": 8,
    "totalProjects": 6,
    "totalHours": 96,
    "certification": "Frontend Developer Certification",
    "technologies": ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Jest"]
  },

    features: [
      'Hands-on coding exercises',
      'Weekly live coding sessions',
      'Design system implementation',
      'Access to premium code templates',
      'Community support'
    ],
    instructor: {
      name: 'Amit Kumar',
      bio: 'Frontend architect with 7 years of experience building enterprise React applications. Passionate about UI/UX best practices.',
      image: '/images/instructors/amit-kumar.jpg',
      rating: 4.7
    },
    prerequisites: ['Basic HTML/CSS/JavaScript', 'Familiarity with ES6 syntax']
  },
  {
    id: 'backend-development',
    title: 'Backend Development with Node.js',
    shortDescription: 'Learn to build robust server-side applications with Node.js',
    price: 3499,
    language: 'Bengali',
    duration: '10 Weeks',
    totalHours: 50,
    lectures: 30,
    assignments: 10,
    thumbnail: 'https://images.shiksha.com/mediadata/images/articles/1717655243php7KA6Hu.jpeg',
    description: 'This course dives deep into backend development using Node.js. You\'ll learn to build RESTful APIs, work with databases, implement authentication, and deploy your applications. The curriculum covers Express.js, MongoDB, authentication with JWT, caching, and performance optimization techniques used in production applications.',
    learningOutcomes: [
      'Build RESTful APIs with Express',
      'Implement JWT authentication',
      'Work with MongoDB and Mongoose',
      'Handle file uploads and processing',
      'Implement caching strategies',
      'Deploy Node.js applications'
    ],

  "syllabus": [
    {
      "week": 1,
      "title": "Node.js Fundamentals",
      "topics": [
        "Node.js runtime architecture",
        "CommonJS vs ES Modules",
        "NPM package management",
        "File system operations",
        "Basic HTTP server"
      ],
      "project": "Build a CLI file organizer",
      "resources": ["Node.js Documentation", "3 Video Lectures"]
    },
    {
      "week": 2,
      "title": "Express.js Framework",
      "topics": [
        "Middleware architecture",
        "RESTful routing",
        "Request/response cycle",
        "Error handling",
        "Template engines (Pug/EJS)"
      ],
      "project": "Book management API",
      "handsOn": ["Postman Collection", "Debugging Exercises"]
    },
    {
      "week": 3,
      "title": "Database Fundamentals",
      "topics": [
        "SQL vs NoSQL comparison",
        "MongoDB CRUD operations",
        "Mongoose ODM",
        "Schema design",
        "Indexing basics"
      ],
      "project": "User database with Mongoose",
      "resources": ["MongoDB University", "2 Design Patterns"]
    },
    {
      "week": 4,
      "title": "Authentication & Security",
      "topics": [
        "JWT implementation",
        "Password hashing (bcrypt)",
        "Cookie/session management",
        "CSRF protection",
        "Rate limiting"
      ],
      "project": "Secure login system",
      "handsOn": ["OWASP Challenges", "Security Audit"]
    },
    {
      "week": 5,
      "title": "API Development",
      "topics": [
        "REST best practices",
        "API documentation (Swagger/OpenAPI)",
        "Error standardization",
        "Pagination",
        "Caching strategies"
      ],
      "project": "E-commerce API with documentation",
      "resources": ["API Style Guide", "Postman Examples"]
    },
    {
      "week": 6,
      "title": "Testing & Debugging",
      "topics": [
        "Unit testing with Jest",
        "Integration testing",
        "Mocking databases",
        "Debugging techniques",
        "Logging (Winston/Morgan)"
      ],
      "project": "Add tests to e-commerce API",
      "handsOn": ["Test Coverage Lab", "Debugging Workshop"]
    },
    {
      "week": 7,
      "title": "Performance Optimization",
      "topics": [
        "Database indexing",
        "Query optimization",
        "Connection pooling",
        "Load balancing basics",
        "Caching (Redis)"
      ],
      "project": "Optimize existing API performance",
      "resources": ["Performance Checklist", "2 Case Studies"]
    },
    {
      "week": 8,
      "title": "Microservices & Advanced Patterns",
      "topics": [
        "Microservices architecture",
        "Message queues (RabbitMQ)",
        "Containerization (Docker)",
        "API gateways",
        "Circuit breakers"
      ],
      "project": "Split monolith into microservices",
      "handsOn": ["Docker Labs", "Architecture Design"]
    },
    {
      "week": 9,
      "title": "DevOps & Deployment",
      "topics": [
        "CI/CD pipelines",
        "AWS EC2 deployment",
        "NGINX configuration",
        "PM2 process management",
        "Monitoring (New Relic)"
      ],
      "project": "Deploy API to cloud",
      "resources": ["AWS Docs", "Deployment Checklist"]
    },
    {
      "week": 10,
      "title": "Capstone Project",
      "topics": [
        "Project scoping",
        "Database architecture",
        "Authentication integration",
        "Performance testing",
        "Documentation"
      ],
      "project": "Build and deploy a social media API",
      "handsOn": ["Code Reviews", "Final Presentation"]
    }
  ],
  "stats": {
    "totalWeeks": 10,
    "totalProjects": 8,
    "totalHours": 120,
    "certification": "Backend Developer Certification",
    "technologies": ["Node.js", "Express", "MongoDB", "JWT", "Docker", "Redis"]
  },

    features: [
      'Real-world API development',
      'Database design principles',
      'Authentication implementation',
      'Performance optimization',
      'Deployment strategies'
    ],
    instructor: {
      name: 'Neha Gupta',
      bio: 'Backend specialist with 6 years of Node.js experience. Has built scalable APIs for fintech and e-commerce platforms.',
      image: '/images/instructors/neha-gupta.jpg',
      rating: 4.8
    },
    prerequisites: ['Basic JavaScript knowledge', 'Understanding of HTTP protocols']
  }
];