// Lucide React Icons
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Code,
  Lightbulb,
  Users,
  Palette,
  Calendar,
  Package,
} from "lucide-react";

// React Icons
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiCode,
} from "react-icons/fi";

// Project Images
import PROJECT_IMG_1 from "../assets/images/Focus.jpg";
import PROJECT_IMG_2 from "../assets/images/lufffy.jpg";
import PROJECT_IMG_3 from "../assets/images/luffy2.jpg";
import PROJECT_IMG_4 from "../assets/images/panda.jpg";
import PROJECT_IMG_5 from "../assets/images/racecar.jpg";
import PROJECT_IMG_6 from "../assets/images/racecar1.jpg";

// Skills Categories
export const SKILLS_CATEGORY = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Code2,
    description:
      "Building sophisticated and responsive user interfaces with modern frameworks.",
    skills: [
      { name: "React", level: "Advanced", color: "bg-blue-700" },
      { name: "Redux", level: "Advanced", color: "bg-blue-700" },
      { name: "TypeScript", level: "Advanced", color: "bg-blue-700" },
      { name: "HTML", level: "Advanced", color: "bg-blue-700" },
      { name: "CSS", level: "Advanced", color: "bg-blue-700" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-blue-700" },
      { name: "Bootstrap", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description:
      "Architecting scalable and resilient server-side infrastructures.",
    skills: [
      { name: "Node.js", level: "Advanced", color: "bg-blue-700" },
      { name: "Express.js", level: "Advanced", color: "bg-blue-700" },
      { name: "JavaScript", level: "Advanced", color: "bg-blue-700" },
      { name: "REST API", level: "Advanced", color: "bg-blue-700" },
      { name: "JWT", level: "Advanced", color: "bg-blue-700" },
      { name: "Mongoose", level: "Advanced", color: "bg-blue-700" },
      { name: "EJS", level: "Intermediate", color: "bg-blue-500" },
    ],
  },
  {
    id: 3,
    title: "Database Management",
    icon: Database,
    description:
      "Designing and managing efficient database solutions for various applications.",
    skills: [
      { name: "MongoDB", level: "Advanced", color: "bg-blue-700" },
      { name: "MySQL", level: "Intermediate", color: "bg-blue-500" },
      { name: "Firebase", level: "Intermediate", color: "bg-blue-500" },
    ],
  },
  {
    id: 4,
    title: "Architecture & Design",
    icon: Award,
    description:
      "Implementing robust architectural patterns and design principles.",
    skills: [
      { name: "MVC Architecture", level: "Advanced", color: "bg-blue-700" },
      { name: "Clean Architecture", level: "Advanced", color: "bg-blue-700" },
      { name: "Multi-tenant Design", level: "Advanced", color: "bg-blue-700" },
      { name: "Figma", level: "Intermediate", color: "bg-blue-500" },
    ],
  },
  {
    id: 5,
    title: "DevOps & Deployment",
    icon: Cloud,
    description:
      "Deploying and managing applications with modern DevOps practices.",
    skills: [
      { name: "AWS EC2", level: "Advanced", color: "bg-blue-700" },
      { name: "Route 53", level: "Intermediate", color: "bg-blue-500" },
      { name: "NGINX", level: "Advanced", color: "bg-blue-700" },
      { name: "PM2", level: "Intermediate", color: "bg-blue-500" },
      { name: "Git", level: "Advanced", color: "bg-blue-700" },
      { name: "Postman", level: "Advanced", color: "bg-blue-700" },
      { name: "VS Code", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 6,
    title: "Algorithms & Problem Solving",
    icon: Lightbulb,
    description:
      "Strong foundation in data structures and algorithmic thinking.",
    skills: [
      { name: "Data Structures", level: "Intermediate", color: "bg-blue-500" },
      { name: "Algorithms", level: "Intermediate", color: "bg-blue-500" },
      { name: "Problem Solving", level: "Advanced", color: "bg-blue-700" },
      { name: "SQL", level: "Intermediate", color: "bg-blue-500" },
    ],
  },
];

// Tech Stack
export const TECH_STACK = [
  "React",
  "Redux",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "AWS",
  "NGINX",
  "Git",
  "JWT",
  "Firebase",
  "Figma",
  "Socket.io",
  "Razorpay",
  "REST API",
];

// Statistics
export const STATS = [
  { number: "6+", label: "Major Projects" },
  { number: "2+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Code Quality" },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "Trend Trove",
    description:
      "A comprehensive social media and news feed platform built with Clean Architecture, featuring high-quality video/audio calls, instant messaging, ephemeral stories, and AI-powered image captioning using Clarifai.",
    image: PROJECT_IMG_1,
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Zigma Watches",
    description:
      "An e-commerce web application for selling smartwatches built using MVC architecture, featuring coupon support, referral systems, order tracking, and secure payments via Razorpay integration.",
    image: PROJECT_IMG_2,
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    liveUrl: "https://www.zigmawatches.shop",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Checkpoint Systems",
    description:
      "A robust multi-tenant architecture application with isolated customer data through separate MongoDB databases, featuring dynamic database switching, connection pooling, and tenant-specific UI customizations.",
    image: PROJECT_IMG_3,
    tags: ["React", "AG Grid", "MongoDB", "Node.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "ART HEALTH",
    description:
      "A healthcare platform with dynamic and responsive UI screens, featuring automated workflows for generating dynamic emails and PDFs, and implementing subscription-based dynamic tables for users.",
    image: PROJECT_IMG_4,
    tags: ["React", "Node.js", "MongoDB", "PDF Generation", "Email Automation"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "db-connections-util",
    description:
      "A security-first NPM package for parsing, encrypting, and reconstructing database connection strings. Supports MongoDB, PostgreSQL, MySQL, Redis, SQL Server, and Azure CosmosDB with AES-256 encryption.",
    image: PROJECT_IMG_5,
    tags: ["Node.js", "TypeScript", "Security", "NPM", "Database"],
    liveUrl: "https://www.npmjs.com/package/db-connections-util",
    githubUrl: "#",
    featured: true,
    category: "Backend",
  },
  {
    id: 6,
    title: "Hospital Management System",
    description:
      "A streamlined application for managing hospital operations with modules for receptionists and doctors, featuring automated token generation, appointment management, and prescription handling with 10-day SLA.",
    image: PROJECT_IMG_6,
    tags: ["React", "Node.js", "MongoDB", "Neutrinos Studio"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  // Minor Projects (not featured)
  {
    id: 7,
    title: "Smart Task Manager",
    description:
      "A feature-rich todo application with drag-and-drop functionality, task categories, due dates, and progress tracking. Built with React and local storage persistence.",
    image: PROJECT_IMG_1,
    tags: ["React", "JavaScript", "CSS3", "Local Storage", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 8,
    title: "OLX Clone UI",
    description:
      "A pixel-perfect UI clone of OLX marketplace with responsive design, product listings, search functionality, and user authentication screens.",
    image: PROJECT_IMG_2,
    tags: ["React", "CSS3", "Responsive Design", "UI Clone", "Frontend"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 9,
    title: "Netflix UI Clone",
    description:
      "A responsive Netflix interface clone with movie banners, category rows, hover effects, and modal components for movie details.",
    image: PROJECT_IMG_3,
    tags: ["React", "CSS3", "API Integration", "UI Clone", "Entertainment"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 10,
    title: "Weather Dashboard",
    description:
      "A real-time weather application with location detection, 5-day forecast, interactive charts, and weather alerts using OpenWeather API.",
    image: PROJECT_IMG_4,
    tags: ["JavaScript", "API", "Chart.js", "Geolocation", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 11,
    title: "Expense Tracker",
    description:
      "A personal finance management app with expense categorization, monthly budgets, spending analytics, and export functionality.",
    image: PROJECT_IMG_5,
    tags: ["React", "Chart.js", "Local Storage", "JavaScript", "Finance"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 12,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website with dark mode toggle, smooth animations, project showcase, and contact form.",
    image: PROJECT_IMG_1,
    tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive", "Portfolio"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
];

// Journey Timeline
export const JOURNEY_STEPS = [
  {
    id: 1,
    slug: "btech-computer-science",
    year: "2019-2023",
    title: "B.Tech - Computer Science",
    company: "Nehru College",
    company2: "Nehru College of Engineering",
    location: "Pambady, Thrissur, Kerala, India",
    website: "https://www.ncerc.ac.in/",
    description:
      "Began my journey in Computer Science and Engineering at APJ Abdul Kalam Technological University, building a strong foundation in programming and software development.",
    icon: GraduationCap,
    color: "bg-purple-500",
    image: [
      PROJECT_IMG_1,
      PROJECT_IMG_2,
      
    ],
    detailedInfo: {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      university: "Kerala Technological University (KTU)",
      duration: "4 Years",
      highlights: [
        "Graduated with strong fundamentals in Data Structures and Algorithms",
        "Completed multiple projects in web development and software engineering",
        "Participated in coding competitions and hackathons",
        "Learned programming languages: C, C++, Java, Python, JavaScript",
        "Built academic projects using modern web technologies",
        "Developed strong problem-solving and analytical skills",
        "Worked on team projects fostering collaboration and communication",
        "Gained exposure to software development lifecycle",
      ],
      keyProjects: [
        "Final Year Project: Full-stack web application for college management system with role-based access control",
        "Mini Project: E-commerce platform using MERN stack with payment gateway integration",
        "Database Project: Library management system with advanced SQL queries and triggers",
        "Web Development: Responsive portfolio website with modern UI/UX principles",
      ],
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies",
        "Object-Oriented Programming",
        "Design and Analysis of Algorithms",
        "Compiler Design",
        "Artificial Intelligence",
      ],
      achievements: [
        "Consistently maintained good academic performance throughout the course",
        "Successfully completed all lab courses with practical implementations",
        "Presented technical seminars on emerging technologies",
        "Participated in inter-college technical events",
      ],
    },
  },
  {
    id: 2,
    slug: "mern-stack-training",
    year: "2023-2024",
    title: "MERN Stack Training",
    company: "Brototype Institute",
    location: "Kochi, Kerala, India",
    website: "https://www.brototype.com/",
    description:
      "Intensive training in MERN stack technologies, learning modern web development practices, Clean Architecture, and building production-ready applications.",
    icon: Code,
    color: "bg-green-500",
    image: [
      PROJECT_IMG_1,
      PROJECT_IMG_2,
      PROJECT_IMG_3,
      PROJECT_IMG_4,
      PROJECT_IMG_5,
      PROJECT_IMG_6,
    ],
    detailedInfo: {
      program: "Full Stack Development - MERN",
      duration: "12 Months (Intensive Bootcamp)",
      type: "Hands-on Professional Training",
      highlights: [
        "Mastered MongoDB, Express.js, React.js, and Node.js ecosystem",
        "Built 15+ full-stack projects from scratch with real-world complexity",
        "Learned Clean Architecture and SOLID principles for scalable code",
        "Implemented RESTful APIs and microservices architecture",
        "Gained expertise in state management with Redux and Context API",
        "Practiced Agile methodologies and Git workflows in team environments",
        "Developed real-time applications using Socket.io and WebSockets",
        "Deployed applications on AWS, Heroku, and Vercel with CI/CD pipelines",
        "Learned to write clean, maintainable, and testable code",
        "Worked on collaborative projects with version control best practices",
      ],
      majorProjects: [
        "E-commerce Platform: Full-featured online shopping system with admin panel, user authentication, cart management, payment integration (Stripe/Razorpay), and order tracking",
        "Social Media Application: Real-time chat, post sharing, likes, comments, friend requests, notifications using Socket.io",
        "Project Management Tool: Kanban-style task management with drag-and-drop, team collaboration, and deadline tracking",
        "Video Streaming Platform: Netflix-like streaming service with video upload, categorization, search, and user subscriptions",
        "Blog Platform: Content management system with rich text editor, categories, tags, and SEO optimization",
      ],
      technologiesLearned: [
        "React.js & Next.js",
        "Node.js & Express.js",
        "MongoDB & Mongoose ODM",
        "Redux Toolkit & Context API",
        "Socket.io for Real-time Communication",
        "JWT & OAuth Authentication",
        "Payment Integration (Stripe, Razorpay)",
        "AWS S3, EC2, CloudFront",
        "Docker & Container Orchestration",
        "Git, GitHub, GitLab",
        "RESTful API Design",
        "Postman & API Testing",
      ],
      learnings: [
        "Full-stack development workflow from design to deployment",
        "Building scalable applications with clean architecture",
        "Database design and optimization techniques",
        "Security best practices including authentication and authorization",
        "Performance optimization and code profiling",
        "Responsive design and mobile-first approach",
        "Team collaboration and code review processes",
        "Problem-solving and debugging complex applications",
      ],
    },
  },
  {
    id: 3,
    slug: "software-engineer-afc-digital",
    year: "2024 - Present",
    title: "Software Engineer",
    company: "AFC Digital Pvt Ltd",
    location: "Bengaluru, Karnataka, India",
    website: "https://www.afcdigital.in/",
    description:
      "Working as a Software Engineer on enterprise applications with multi-tenant architecture, dynamic UI components, and automated workflows for healthcare and checkpoint systems.",
    icon: Briefcase,
    color: "bg-orange-500",
    image: [
      PROJECT_IMG_1,
      PROJECT_IMG_2,
      PROJECT_IMG_3,
      PROJECT_IMG_4,
      PROJECT_IMG_5,
      PROJECT_IMG_6,
    ],
    detailedInfo: {
      role: "Software Engineer",
      department: "Product Development",
      type: "Full-time Position",
      duration: "Present",
      highlights: [
        "Developing enterprise-level multi-tenant applications from scratch",
        "Built dynamic form builders with drag-and-drop functionality for custom workflows",
        "Implemented automated workflow systems for complex business processes",
        "Created reusable component libraries for improved scalability and maintainability",
        "Working on healthcare management systems and checkpoint solutions",
        "Collaborating with cross-functional teams using Agile/Scrum methodology",
        "Optimized application performance for handling large datasets (10,000+ records)",
        "Mentoring junior developers and conducting thorough code reviews",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Participated in architecture discussions and technical decision-making",
      ],
      responsibilities: [
        "Full-stack development using React.js, Node.js, and modern frameworks",
        "Designing and implementing RESTful APIs with proper documentation",
        "Database design and optimization with PostgreSQL and MongoDB",
        "Implementing secure authentication and role-based authorization systems",
        "Writing clean, maintainable, and testable code following best practices",
        "Participating in sprint planning, daily standups, and retrospectives",
        "Deploying and monitoring applications in production environments",
        "Debugging and resolving production issues with minimal downtime",
        "Creating technical documentation for features and APIs",
        "Collaborating with designers, QA, and product managers",
      ],
      technologies: [
        "React.js & TypeScript",
        "Node.js & Express.js",
        "PostgreSQL & MongoDB",
        "Redis for Caching",
        "Docker & Kubernetes",
        "AWS Services (EC2, S3, RDS)",
        "Git, GitHub, Jira",
        "Jest & React Testing Library",
        "Nginx & Load Balancing",
        "Microservices Architecture",
      ],
      achievements: [
        "Reduced API response time by 40% through query optimization and caching",
        "Built a dynamic form builder that's now used across 3 different products",
        "Successfully delivered 5+ major features within tight deadlines",
        "Improved code coverage from 30% to 80% through comprehensive testing",
        "Resolved critical production bugs with 99.9% uptime maintained",
        "Implemented automated workflows saving 10+ hours of manual work per week",
      ],
      projects: [
        "Healthcare Management System: Patient records, appointments, billing, and reporting",
        "Checkpoint System: Multi-tenant access control with real-time monitoring",
        "Dynamic Form Builder: Drag-and-drop form creation with conditional logic",
        "Automated Workflow Engine: Business process automation with approval chains",
      ],
    },
  },
  {
    id: 4,
    slug: "npm-package-db-connections-util",
    year: "2024",
    title: "Published NPM Package: db-connections-util",
    company: "Open Source Contribution",
    location: "Remote",
    website: "https://www.npmjs.com/package/db-connections-util",
    description:
      "Released db-connections-util, a secure database connection utility supporting multiple database types with AES-256 encryption, available on NPM for the developer community.",
    icon: Package,
    color: "bg-pink-500",
    image: [
      PROJECT_IMG_1,
      PROJECT_IMG_2,
      PROJECT_IMG_3,
      PROJECT_IMG_4,
      PROJECT_IMG_5,
      PROJECT_IMG_6,
    ],
    detailedInfo: {
      packageName: "db-connections-util",
      type: "Open Source NPM Package",
      version: "Latest Stable Release",
      downloads: "500+ downloads",
      highlights: [
        "Created a production-ready database connection utility package from scratch",
        "Implemented AES-256 encryption for secure credential storage",
        "Supports multiple databases: PostgreSQL, MySQL, MongoDB, Redis",
        "Comprehensive documentation with usage examples and API reference",
        "Published to NPM registry for global developer community access",
        "Handles connection pooling and automatic reconnection logic",
        "Built with TypeScript for type safety and better developer experience",
        "Includes unit tests with 95% code coverage using Jest",
        "Semantic versioning and changelog for version tracking",
        "Active maintenance and community support",
      ],
      features: [
        "Secure credential encryption using AES-256-CBC algorithm",
        "Support for PostgreSQL, MySQL, MongoDB, and Redis",
        "Connection pooling for optimized database access",
        "Automatic retry and reconnection with exponential backoff",
        "Environment-based configuration with .env support",
        "TypeScript support with complete type definitions",
        "Comprehensive error handling with custom error types",
        "Easy integration with Express.js and other Node.js frameworks",
        "Minimal dependencies for lightweight package",
        "Cross-platform compatibility (Windows, Linux, macOS)",
      ],
      technologies: [
        "Node.js & TypeScript",
        "Crypto Module (AES-256)",
        "pg (PostgreSQL Driver)",
        "mysql2 (MySQL Driver)",
        "mongodb (MongoDB Driver)",
        "redis (Redis Client)",
        "Jest for Testing",
        "ESLint & Prettier",
        "NPM Publishing",
      ],
      impact: [
        "Simplified secure database connections for Node.js developers",
        "Improved application security with built-in encryption",
        "Saved development time across multiple projects and teams",
        "Contributing to the open-source ecosystem",
        "Helping developers avoid common database connection pitfalls",
        "Active community engagement with issue resolution",
      ],
      useCases: [
        "Express.js applications needing secure database connections",
        "Microservices requiring multiple database support",
        "Projects needing encrypted credential storage",
        "Applications requiring connection pooling and retry logic",
      ],
      futureEnhancements: [
        "Support for additional databases (SQL Server, Oracle)",
        "CLI tool for connection testing",
        "Performance monitoring and metrics",
        "Connection health checks and diagnostics",
      ],
    },
  },
];

// Passions
export const PASSIONS = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Building scalable and maintainable codebases",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Designing robust multi-tenant database solutions",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Creating intuitive and responsive interfaces",
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/abilashhhh",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/abilash2001",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900",
  },
  {
    name: "LeetCode",
    icon: FiCode,
    url: "https://leetcode.com/u/abilashn2001/",
    color: "hover:text-orange-400",
    bgColor: "hover:bg-orange-900",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://instagram.com/abilash_._",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900",
  },
  // {
  //   name: "Twitter",
  //   icon: FiTwitter,
  //   url: "https://twitter.com",
  //   color: "hover:text-sky-400",
  //   bgColor: "hover:bg-sky-900",
  // },
];

// Contact Information
export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mailto:abilashncty@gmail.com",
    value2: "abilashncty@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 79022 53958",
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Open to opportunities",
  },
];
// Updated CERTIFICATIONS array with enhanced structure

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    year: "2023",
    certificateUrl: "https://www.udemy.com/certificate/example1",
    image: PROJECT_IMG_1,
    featured: true,
    description:
      "Comprehensive full-stack development course covering modern web technologies, frontend frameworks, backend APIs, and deployment strategies.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Deployment",
    ],
    learnings: [
      "Built scalable full-stack applications from scratch using the MERN stack",
      "Implemented RESTful APIs with authentication and authorization",
      "Mastered modern JavaScript ES6+ features and async programming",
      "Created responsive user interfaces with React and CSS frameworks",
      "Deployed applications to cloud platforms like Heroku and Vercel",
      "Applied best practices for code organization and project structure",
    ],
  },
  {
    id: 2,
    title: "React Advanced Concepts",
    issuer: "Coursera",
    year: "2024",
    certificateUrl: "https://www.coursera.org/cert/example2",
    image: PROJECT_IMG_2,
    featured: true,
    description:
      "Deep dive into advanced React patterns, performance optimization, state management, and modern hooks implementation.",
    skills: [
      "React Hooks",
      "Context API",
      "Redux Toolkit",
      "Performance Optimization",
      "Custom Hooks",
      "React Router",
    ],
    learnings: [
      "Mastered advanced React patterns including Render Props and HOCs",
      "Implemented complex state management with Redux Toolkit",
      "Optimized application performance using React.memo and useMemo",
      "Built reusable custom hooks for common functionalities",
      "Handled complex routing scenarios with React Router v6",
      "Applied code-splitting and lazy loading techniques",
    ],
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    issuer: "LinkedIn Learning",
    year: "2023",
    certificateUrl: "https://www.linkedin.com/learning/cert/example3",
    image: PROJECT_IMG_3,
    featured: false,
    description:
      "Comprehensive backend development with Node.js, focusing on scalable APIs, security, and microservices architecture.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Middleware",
      "Error Handling",
    ],
    learnings: [
      "Developed secure and scalable RESTful APIs with Express.js",
      "Implemented JWT-based authentication and role-based authorization",
      "Created custom middleware for request validation and error handling",
      "Integrated third-party APIs and handled asynchronous operations",
      "Applied security best practices including input sanitization",
      "Structured applications following MVC architecture pattern",
    ],
  },
  {
    id: 4,
    title: "Database Design & MongoDB",
    issuer: "MongoDB University",
    year: "2024",
    certificateUrl: "https://university.mongodb.com/cert/example4",
    image: PROJECT_IMG_4,
    featured: false,
    description:
      "Expert-level training in MongoDB database design, aggregation framework, indexing strategies, and performance tuning.",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "Database Design",
      "Aggregation",
      "Indexing",
      "Query Optimization",
    ],
    learnings: [
      "Designed efficient NoSQL database schemas for complex applications",
      "Utilized the aggregation pipeline for advanced data processing",
      "Implemented indexing strategies to optimize query performance",
      "Managed database relationships using Mongoose ODM",
      "Applied data validation and schema design best practices",
      "Performed database migrations and handled data consistency",
    ],
  },
  {
    id: 5,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    certificateUrl: "https://www.freecodecamp.org/certification/example5",
    image: PROJECT_IMG_1,
    featured: false,
    description:
      "In-depth study of algorithms, data structures, and problem-solving techniques essential for technical interviews.",
    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Big O Notation",
      "Recursion",
      "Dynamic Programming",
    ],
    learnings: [
      "Implemented common data structures including trees, graphs, and hash tables",
      "Solved algorithmic challenges using various problem-solving patterns",
      "Analyzed time and space complexity using Big O notation",
      "Applied recursive and iterative approaches to complex problems",
      "Utilized dynamic programming for optimization problems",
      "Practiced technical interview preparation with LeetCode-style challenges",
    ],
  },
  {
    id: 6,
    title: "TypeScript Fundamentals",
    issuer: "Pluralsight",
    year: "2024",
    certificateUrl: "https://www.pluralsight.com/cert/example6",
    image: PROJECT_IMG_2,
    featured: false,
    description:
      "Comprehensive TypeScript training covering type systems, interfaces, generics, and integration with modern frameworks.",
    skills: [
      "TypeScript",
      "Type Systems",
      "Interfaces",
      "Generics",
      "Type Guards",
      "Decorators",
    ],
    learnings: [
      "Mastered TypeScript syntax and type annotation techniques",
      "Created reusable type-safe components with generics",
      "Designed complex type hierarchies using interfaces and unions",
      "Integrated TypeScript into existing JavaScript projects",
      "Applied advanced features like mapped types and conditional types",
      "Improved code quality and caught errors during development",
    ],
  },
  {
    id: 7,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    certificateUrl: "https://aws.amazon.com/cert/example7",
    image: PROJECT_IMG_3,
    featured: true,
    description:
      "Foundational AWS certification covering cloud concepts, services, security, and architectural best practices.",
    skills: [
      "Cloud Computing",
      "AWS Services",
      "EC2",
      "S3",
      "Lambda",
      "Cloud Security",
    ],
    learnings: [
      "Understood core AWS services and their use cases",
      "Deployed applications on EC2 instances and managed infrastructure",
      "Utilized S3 for scalable object storage and static website hosting",
      "Implemented serverless functions using AWS Lambda",
      "Applied cloud security best practices and IAM policies",
      "Estimated costs and optimized cloud resource usage",
    ],
  },
  {
    id: 8,
    title: "Git & GitHub Mastery",
    issuer: "Udemy",
    year: "2023",
    certificateUrl: "https://www.udemy.com/certificate/example8",
    image: PROJECT_IMG_4,
    featured: false,
    description:
      "Advanced version control techniques, collaborative workflows, and GitHub features for modern development teams.",
    skills: [
      "Git",
      "GitHub",
      "Version Control",
      "Branching Strategies",
      "Code Review",
      "CI/CD",
    ],
    learnings: [
      "Mastered advanced Git commands and workflows",
      "Implemented effective branching strategies like Git Flow",
      "Managed merge conflicts and performed complex rebases",
      "Utilized GitHub features including Actions, Issues, and Projects",
      "Set up continuous integration pipelines for automated testing",
      "Collaborated effectively in team environments using pull requests",
    ],
  },
];

export const PROJECT_SLUG_MAPPING = {
  // B.Tech Computer Science Projects
  "Final Year Project: Full-stack web application for college management system with role-based access control":
    "hospital-management-system",
  "Mini Project: E-commerce platform using MERN stack with payment gateway integration":
    "zigma-watches",
  "Database Project: Library management system with advanced SQL queries and triggers":
    "library-management-system",
  "Web Development: Responsive portfolio website with modern UI/UX principles":
    "portfolio-website",

  // MERN Stack Training Projects
  "E-commerce Platform: Full-featured online shopping system with admin panel, user authentication, cart management, payment integration (Stripe/Razorpay), and order tracking":
    "zigma-watches",
  "Social Media Application: Real-time chat, post sharing, likes, comments, friend requests, notifications using Socket.io":
    "trend-trove",
  "Project Management Tool: Kanban-style task management with drag-and-drop, team collaboration, and deadline tracking":
    "smart-task-manager",
  "Video Streaming Platform: Netflix-like streaming service with video upload, categorization, search, and user subscriptions":
    "netflix-ui-clone",
  "Blog Platform: Content management system with rich text editor, categories, tags, and SEO optimization":
    "blog-platform",

  // Software Engineer AFC Digital Projects
  "Healthcare Management System: Patient records, appointments, billing, and reporting":
    "art-health",
  "Checkpoint System: Multi-tenant access control with real-time monitoring":
    "checkpoint-systems",
  "Dynamic Form Builder: Drag-and-drop form creation with conditional logic":
    "dynamic-form-builder",
  "Automated Workflow Engine: Business process automation with approval chains":
    "workflow-engine",

  // NPM Package
  "db-connections-util: Secure database connection utility for multiple database types":
    "db-connections-util",
};