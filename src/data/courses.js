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
    syllabus: [
      {
        title: 'Introduction to Python',
        topics: [
          'Installing Python',
          'Python syntax basics',
          'Variables and data types',
          'Basic input/output'
        ]
      },
      {
        title: 'Control Flow',
        topics: [
          'Conditional statements',
          'Loops (for/while)',
          'List comprehensions',
          'Error handling'
        ]
      },
      // Add more weeks...
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
    syllabus: [
      {
        title: 'HTML5 & CSS3 Fundamentals',
        topics: [
          'Semantic HTML',
          'CSS Grid and Flexbox',
          'Responsive design principles',
          'CSS animations'
        ]
      },
      {
        title: 'JavaScript ES6+',
        topics: [
          'Modern JavaScript syntax',
          'Asynchronous programming',
          'DOM manipulation',
          'ES6 features'
        ]
      },
      // Add more weeks...
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
    syllabus: [
      {
        title: 'React Fundamentals',
        topics: [
          'JSX syntax',
          'Components and props',
          'State and lifecycle',
          'Handling events'
        ]
      },
      {
        title: 'Advanced React',
        topics: [
          'React hooks',
          'Context API',
          'Higher-order components',
          'Performance optimization'
        ]
      },
      // Add more weeks...
    ],
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
    syllabus: [
      {
        title: 'Node.js Fundamentals',
        topics: [
          'Node.js runtime',
          'NPM ecosystem',
          'Modules and require',
          'Event loop'
        ]
      },
      {
        title: 'Express Framework',
        topics: [
          'Routing',
          'Middleware',
          'Request handling',
          'Error handling'
        ]
      },
      // Add more weeks...
    ],
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