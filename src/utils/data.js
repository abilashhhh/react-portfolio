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

// Tech Stack - Categorized Version
export const TECH_STACK_DETAILED = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Angular",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "SASS/SCSS",
    "Styled Components",
    "Material-UI",
    "Redux",
    "Zustand",
  ],
  backend: ["Node.js", "Express.js", "REST API", "Socket.io", "JWT"],
  database: [
    "MongoDB",
    "Mongoose",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Firebase",
    "SQLite",
    "Sequelize",
  ],
  cloud_devops: [
    "AWS",
    "AWS EC2",
    "Docker",
    "Kubernetes",
    "NGINX",
    "PM2",
    "Vercel",
    "GitHub Actions",
  ],
  tools: ["Git", "VS Code", "Vite", "Postman", "Figma", "Jest"],
  services: ["Razorpay", "Stripe", "Twilio"],
};

// Flattened version for easy display
export const TECH_STACK = Object.values(TECH_STACK_DETAILED).flat();

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
    title: "Trend Trove - Social Media & News Platform",
    slug: "trend-trove",
    description:
      "Trend Trove - A comprehensive social media and news feed platform built with Clean Architecture, featuring high-quality video/audio calls, instant messaging, ephemeral stories, and AI-powered image captioning using Clarifai.",
    detailedDescription:
      "A full-featured social media and news feed platform combining real-time news with core social features. Includes high-quality video/audio calls (Zego Cloud), instant messaging, ephemeral stories, and AI-powered image captioning (Clarifai). Integrated Razorpay for secure payments and premium features.",
    image: PROJECT_IMG_1,
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
    tagsDetailed: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Clarifai",
      "Zego Cloud",
      "Razorpay",
      "JWT",
      "Nodemailer",
      "Socket.io",
      "DaisyUI",
      "Clean Architecture",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
    features: [
      "Token-based authentication & Google login",
      "Profile management & privacy controls",
      "Explore and feed pages with real-time news",
      "High-quality video/audio calls via Zego Cloud",
      "Instant messaging & real-time notifications",
      "Ephemeral stories and highlights",
      "AI-powered image captioning (Clarifai)",
      "Post tagging, saving, and hashtag support",
      "User blocking/unblocking functionality",
      "Admin dashboard with user management",
      "Dark mode support & ReCAPTCHA protection",
      "Secure payments via Razorpay integration",
      "Premium subscription features",
    ],
    technicalHighlights: [
      "Clean Architecture implementation",
      "Real-time communication with Socket.io",
      "JWT token authentication system",
      "Google OAuth integration",
      "AI integration for image processing",
      "Payment gateway integration",
      "Responsive design with Tailwind CSS",
    ],
    role: "Full Stack Developer",
    duration: "3 months",
    status: "Completed",
    projectType: "Personal Project",
  },
  {
    id: 2,
    title: "Zigma Watches - E-commerce Platform",
    slug: "zigma-watches",
    description:
      "Zigma Watches - An e-commerce web application for selling smartwatches built using MVC architecture, featuring coupon support, referral systems, order tracking, and secure payments via Razorpay integration.",
    detailedDescription:
      "An online smartwatch store built using MVC architecture offering a smooth shopping experience with features like coupon support, referral systems, order tracking, and secure payments via Razorpay. Includes comprehensive admin tools for sales reporting and inventory management.",
    image: PROJECT_IMG_2,
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    tagsDetailed: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Nginx",
      "PM2",
      "AWS",
      "Razorpay",
      "Nodemailer",
    ],
    liveUrl: "https://www.zigmawatches.shop",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
    features: [
      "User authentication and authorization",
      "Product catalog with category management",
      "Shopping cart and wishlist functionality",
      "Secure payment processing via Razorpay",
      "Coupon system and referral program",
      "Wallet system for payments",
      "Order tracking and invoice generation",
      "Return and cancel order options",
      "Product rating and review system",
      "Banner management for marketing",
      "OTP confirmation via email",
      "Product image zoom functionality",
    ],
    technicalHighlights: [
      "MVC Architecture pattern",
      "AWS EC2 deployment with Nginx",
      "PM2 process management",
      "SSL certificate integration",
      "RESTful API design",
      "Responsive Bootstrap design",
      "Session-based authentication",
    ],
    adminFeatures: [
      "Sales reporting with charts and graphs",
      "User management (block/unblock)",
      "Product and category management",
      "Order management system",
      "Coupon and offer management",
    ],
    role: "Full Stack Developer",
    duration: "2 months",
    status: "Live Production",
    projectType: "Personal Project",
  },
  {
    id: 3,
    title: "Checkpoint Systems - Multi-tenant SaaS",
    slug: "checkpoint",
    description:
      "A robust multi-tenant architecture application with isolated customer data through separate MongoDB databases, featuring dynamic database switching, connection pooling, and tenant-specific UI customizations.",
    detailedDescription:
      "Enterprise multi-tenant application designed with robust architecture to isolate customer data by provisioning separate MongoDB databases for each client. Features dynamic database switching, connection pooling, and AG Grid components for optimal performance.",
    image: PROJECT_IMG_3,
    tags: ["React", "AG Grid", "MongoDB", "Node.js", "TypeScript"],
    tagsDetailed: [
      "React",
      "AG Grid",
      "MongoDB",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Multi-tenant Architecture",
      "Connection Pooling",
      "Dynamic Database Switching",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Full Stack",
    features: [
      "Multi-tenant architecture with data isolation",
      "Dynamic database switching per client",
      "Connection pooling for performance optimization",
      "Modular and responsive UI components",
      "AG Grid integration for dynamic tables",
      "Tenant-specific customizations",
      "Secure resource allocation",
    ],
    technicalHighlights: [
      "Separate MongoDB databases per tenant",
      "High availability architecture",
      "Optimized performance across concurrent sessions",
      "Secure data isolation",
      "Dynamic component rendering",
    ],
    role: "Full Stack Developer",
    duration: "Ongoing",
    status: "",
    projectType: "Professional Project",
  },
  {
    id: 4,
    title: "ART HEALTH - Insurance Portal",
    slug: "art-health",
    description:
      "A healthcare platform with dynamic and responsive UI screens, featuring automated workflows for generating dynamic emails and PDFs, and implementing subscription-based dynamic tables for users.",
    detailedDescription:
      "Healthcare application featuring dynamic and responsive UI design with automated workflow systems for event confirmations and notifications through dynamic emails and PDF generation.",
    image: PROJECT_IMG_4,
    tags: ["React", "Node.js", "MongoDB", "PDF Generation", "Email Automation"],
    tagsDetailed: [
      "React",
      "Node.js",
      "MongoDB",
      "PDF Generation",
      "Email Automation",
      "Responsive Design",
      "Dynamic Tables",
      "Workflow Automation",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Full Stack",
    features: [
      "Dynamic and responsive UI screens",
      "Automated workflow systems",
      "Dynamic email generation and delivery",
      "PDF generation for event confirmations",
      "Subscription-based dynamic tables",
      "Customized user experiences by plan level",
    ],
    technicalHighlights: [
      "Seamless cross-device user experience",
      "Automated notification system",
      "Dynamic content rendering based on user subscription",
      "Responsive design implementation",
    ],
    role: "Frontend & Backend Developer",
    duration: "2 months",
    status: "",
    projectType: "Professional Project",
  },
  {
    id: 5,
    title: "db-connections-util - NPM Package",
    slug: "db-connections-util",
    description:
      "A security-first NPM package for parsing, encrypting, and reconstructing database connection strings. Supports MongoDB, PostgreSQL, MySQL, Redis, SQL Server, and Azure CosmosDB with AES-256 encryption.",
    detailedDescription:
      "A robust and security-first utility package designed to parse, encrypt, and reconstruct database connection strings for multiple database types, supporting both cloud and on-premise environments with AES-256 encryption.",
    image: PROJECT_IMG_5,
    tags: ["Node.js", "TypeScript", "Security", "NPM", "Database"],
    tagsDetailed: [
      "Node.js",
      "TypeScript",
      "Security",
      "NPM",
      "Database",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "SQL Server",
      "Azure CosmosDB",
      "AES-256 Encryption",
      "Connection Strings",
    ],
    liveUrl: "https://www.npmjs.com/package/db-connections-util",
    githubUrl: "#",
    featured: true,
    category: "Backend",
    features: [
      "Parse and reconstruct database connection strings",
      "AES-256 encryption of credentials",
      "Support for multiple database types",
      "Cloud and on-premise environment support",
      "Structured parsing and type detection",
      "Detailed reconstruction capabilities",
    ],
    technicalHighlights: [
      "Security-first design approach",
      "Multi-database support (MongoDB Atlas/Compass, PostgreSQL, MySQL, Redis cluster, SQL Server, Azure CosmosDB)",
      "AES-256 encryption implementation",
      "Public NPM module publication",
      "TypeScript implementation",
    ],
    role: "Package Author & Developer",
    duration: "1 month",
    status: "Published on NPM",
    projectType: "Personal Project",
  },
  {
    id: 6,
    title: "Hospital Management System",
    slug: "hospital-management-system",
    description:
      "A streamlined application for managing hospital operations with modules for receptionists and doctors, featuring automated token generation, appointment management, and prescription handling with 10-day SLA.",
    detailedDescription:
      "Comprehensive hospital management system with specialized modules for receptionists and doctors, featuring automated token generation based on appointment dates and doctors, with 10-day SLA accounting for holidays.",
    image: PROJECT_IMG_6,
    tags: ["React", "Node.js", "MongoDB", "Neutrinos Studio"],
    tagsDetailed: [
      "React",
      "Node.js",
      "MongoDB",
      "Neutrinos Studio",
      "Hospital Management",
      "Token System",
      "Appointment Scheduling",
      "Prescription Management",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
    features: [
      "Department and doctor management",
      "Appointment booking system",
      "Automated token generation",
      "10-day SLA with holiday consideration",
      "Prescription uploading and management",
      "Receptionist and doctor modules",
    ],
    modules: {
      receptionist: [
        "Department Management",
        "Doctor Management",
        "Booking Management",
        "Token Generation",
      ],
      doctor: ["Appointment Viewing", "Prescription Uploading"],
    },
    technicalHighlights: [
      "Automated token generation system",
      "SLA-based appointment scheduling",
      "Role-based access control",
      "Holiday-aware scheduling system",
    ],
    role: "Full Stack Developer",
    duration: "1 month",
    status: "Completed",
    projectType: "Personal Project",
  },
  {
    id: 7,
    title: "Event Registration System",
    slug: "event-registration-system",
    description:
      "A simple yet effective application designed to manage events with full CRUD functionality, search and filter features for easy event discovery and management.",
    detailedDescription:
      "Event management system with comprehensive CRUD operations, search functionality, and filtering capabilities for efficient event organization and discovery.",
    image: PROJECT_IMG_1,
    tags: ["React", "JavaScript", "CSS3", "CRUD", "Search"],
    tagsDetailed: [
      "React",
      "JavaScript",
      "CSS3",
      "CRUD Operations",
      "Search & Filter",
      "Event Management",
      "Neutrinos Studio",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
    features: [
      "Create, read, update, delete events",
      "Advanced search functionality",
      "Filter events by various criteria",
      "User-friendly interface",
    ],
    technicalHighlights: [
      "Full CRUD implementation",
      "Efficient search and filter algorithms",
      "Responsive design",
    ],
    role: "Full Stack Developer",
    duration: "2 weeks",
    status: "Completed",
    projectType: "Personal Project",
  },
  {
    id: 8,
    title: "Smart Task Manager",
    slug: "smart-task-manager",
    description:
      "A feature-rich todo application with drag-and-drop functionality, task categories, due dates, and progress tracking. Built with React and local storage persistence.",
    detailedDescription:
      "Advanced task management application with drag-and-drop interface, categorization system, due date tracking, and visual progress indicators with local storage for data persistence.",
    image: PROJECT_IMG_1,
    tags: ["React", "JavaScript", "CSS3", "Local Storage", "UI/UX"],
    tagsDetailed: [
      "React",
      "JavaScript",
      "CSS3",
      "Local Storage",
      "Drag & Drop",
      "Task Management",
      "Progress Tracking",
      "Due Dates",
      "Categories",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
    features: [
      "Drag-and-drop task organization",
      "Task categorization and tagging",
      "Due date tracking and reminders",
      "Progress tracking with visual indicators",
      "Local storage data persistence",
      "Responsive mobile-friendly design",
    ],
    technicalHighlights: [
      "Drag and drop implementation",
      "Local storage integration",
      "Progress visualization",
      "Responsive UI/UX design",
    ],
    role: "Frontend Developer",
    duration: "1 week",
    status: "Completed",
    projectType: "Personal Project",
  },
  {
    id: 9,
    title: "Weather Management Application",
    slug: "weather-management-application",
    description:
      "A real-time weather application with location detection, 5-day forecast, interactive charts, and weather alerts using OpenWeather API.",
    detailedDescription:
      "Comprehensive weather application providing real-time updates, extended forecasts, and weather-related news with location-based services and interactive data visualization.",
    image: PROJECT_IMG_4,
    tags: ["JavaScript", "API", "Chart.js", "Geolocation", "CSS3"],
    tagsDetailed: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "Geolocation API",
      "CSS3",
      "Weather Data",
      "Forecast",
      "Real-time Updates",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
    features: [
      "Real-time weather updates",
      "5-day weather forecast",
      "Location detection services",
      "Temperature, humidity, and condition display",
      "Interactive weather charts",
      "Weather event news and alerts",
    ],
    technicalHighlights: [
      "OpenWeather API integration",
      "Geolocation services",
      "Chart.js data visualization",
      "Responsive design",
    ],
    role: "Frontend Developer",
    duration: "1 week",
    status: "Completed",
    projectType: "Personal Project",
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
      PROJECT_IMG_6, // Hospital Management System
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
        "Hospital Management System: Full-stack application for hospital operations with role-based access control",
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
      PROJECT_IMG_1, // Trend Trove
      PROJECT_IMG_2, // Zigma Watches
    ],
    detailedInfo: {
      program: "Full Stack Development - MERN",
      duration: "12 Months",
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
        "Trend Trove: Comprehensive social media and news platform with real-time features",
        "Zigma Watches: Full-featured e-commerce platform with admin panel and payment integration",
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
      PROJECT_IMG_3, // Checkpoint Systems
      PROJECT_IMG_4, // ART HEALTH
      PROJECT_IMG_4, // Weather Management Application (using same image as ART HEALTH)
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
        "Checkpoint Systems: Multi-tenant SaaS application with isolated customer data",
        "ART HEALTH: Healthcare platform with dynamic UI and automated workflows",
        "Weather Management Application: Real-time weather app with interactive charts",
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
      PROJECT_IMG_5, // db-connections-util
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

// Certificate Images import
import CERT_IMG_1 from "../assets/certificates/wirelessCommunicationCertificate.jpg";
import CERT_IMG_2 from "../assets/certificates/zephyr.jpg";
import CERT_IMG_3 from "../assets/certificates/fortuneCampusVisit.jpg";
import CERT_IMG_4 from "../assets/certificates/J-Gate.jpg";
import CERT_IMG_5 from "../assets/certificates/4Bootcamp.jpg";
import CERT_IMG_6 from "../assets/certificates/symbioticrelationships.jpg";
import CERT_IMG_7 from "../assets/certificates/torcinfotech.jpg";
import CERT_IMG_8 from "../assets/certificates/tcsResume.jpg";
import CERT_IMG_9 from "../assets/certificates/electircalpowergeneration.jpg";
import CERT_IMG_10 from "../assets/certificates/python.jpg";
import CERT_IMG_11 from "../assets/certificates/spectrum.jpg";
import CERT_IMG_12 from "../assets/certificates/docker.jpg";
import CERT_IMG_13 from "../assets/certificates/zohocrm.jpg";
import CERT_IMG_14 from "../assets/certificates/gittraining.png";
import CERT_IMG_15 from "../assets/certificates/typescript.png";


export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Webinar on 5G Wireless Communications",
    issuer: "IEEE SB NCERC",
    year: "2021",
    date: "May 17, 2021",
    certificateUrl: "#",
    image: CERT_IMG_1, // wirelessCommunicationCertificate.jpg
    featured: false,
    description:
      "Actively participated in the Webinar on 5G Wireless Communications organized by IEEE SB NCERC as part of World Telecommunication Day.",
    skills: [
      "5G Technology",
      "Wireless Communications",
      "Telecommunications",
      "Network Infrastructure",
    ],
    learnings: [
      "Understood 5G network architecture and protocols",
      "Learned about wireless communication advancements",
      "Explored telecommunications industry trends",
      "Gained insights into future network technologies",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 2,
    title: "Industrial Visit - Data Science & AI",
    issuer: "Zephyr Technologies",
    year: "2021",
    date: "2021",
    certificateUrl: "#",
    image: CERT_IMG_2, // zephyr.jpg
    featured: false,
    description:
      "Attended One-day Industrial Visit Program at Zephyr Technologies focusing on Data Science, Artificial Intelligence & Machine Learning.",
    skills: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Industrial Exposure",
    ],
    learnings: [
      "Gained practical insights into AI/ML applications in industry",
      "Understood real-world data science workflows",
      "Learned about industry best practices in AI development",
      "Explored career opportunities in data science field",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 3,
    title: "Campus Industrial Visit",
    issuer: "Fortune Institute of Computer Education",
    year: "2022",
    date: "Jun 23, 2022",
    certificateUrl: "#",
    image: CERT_IMG_3, // fortuneCampusVisit.jpg
    featured: false,
    description:
      "Completed curriculum-based campus visit at Fortune Institute of Computer Education as part of industrial exposure program.",
    skills: [
      "Industry Exposure",
      "Curriculum Development",
      "Educational Technology",
      "Computer Education",
    ],
    learnings: [
      "Understood computer education institute operations",
      "Learned about curriculum development processes",
      "Gained insights into educational technology implementation",
      "Explored teaching methodologies in computer education",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 4,
    title: "Webinar on J-Gate Platform",
    issuer: "Nehru College of Engineering and Informatics Publishing",
    year: "2021",
    date: "Apr 27, 2021",
    certificateUrl: "#",
    image: CERT_IMG_4, // J-Gate.jpg
    featured: false,
    description:
      "Attended webinar on J-Gate scholarly platform covering electronic journal literature discovery and research tools.",
    skills: [
      "Research Methodology",
      "Academic Databases",
      "Literature Review",
      "Scholarly Resources",
    ],
    learnings: [
      "Learned to navigate J-Gate scholarly platform",
      "Understood electronic journal discovery methods",
      "Gained insights into academic research tools",
      "Explored digital library resources",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 5,
    title: "Industry 4.0 Tech Online Bootcamp",
    issuer: "NxtWave",
    year: "2021",
    date: "Sep 2021",
    certificateUrl: "#",
    image: CERT_IMG_5, // 4Bootcamp.jpg
    featured: false,
    description:
      "Intensive bootcamp covering transformative Industry 4.0 technologies including AI, IoT, Data Science, AR/VR, and Blockchain.",
    skills: [
      "AI & ML",
      "IoT",
      "Data Science",
      "Blockchain",
      "Full Stack",
      "AR & VR",
      "Cyber Security",
    ],
    learnings: [
      "Explored cutting-edge Industry 4.0 technologies",
      "Understood AI and machine learning fundamentals",
      "Learned IoT architecture and applications",
      "Gained insights into blockchain technology",
      "Covered full-stack development concepts",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 6,
    title: "National Workshop on IoT, Cloud Technologies and AI",
    issuer: "Department of Mechatronics, NCERC",
    year: "2020",
    date: "Nov 25, 2020",
    certificateUrl: "#",
    image: CERT_IMG_6, // symbioticrelationships.jpg
    featured: false,
    description:
      "One-day national level workshop exploring the symbiotic relationship between IoT, Cloud Technologies and Artificial Intelligence.",
    skills: [
      "IoT",
      "Cloud Technologies",
      "Artificial Intelligence",
      "Mechatronics",
      "System Integration",
    ],
    learnings: [
      "Explored integration of IoT with cloud platforms",
      "Understood AI applications in IoT systems",
      "Learned cloud computing fundamentals",
      "Gained insights into smart system design",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 7,
    title: "Webinar on Electric Vehicles",
    issuer: "Torc Infotech",
    year: "2021",
    date: "Sep 25, 2021",
    certificateUrl: "#",
    image: CERT_IMG_7, // torcinfotech.jpg
    featured: false,
    description:
      "Completed comprehensive webinar on Electric Vehicles covering technology, infrastructure, and future trends.",
    skills: [
      "Electric Vehicles",
      "Sustainable Technology",
      "EV Infrastructure",
      "Green Technology",
    ],
    learnings: [
      "Understood electric vehicle technology fundamentals",
      "Learned about EV charging infrastructure",
      "Explored sustainable transportation solutions",
      "Gained insights into future mobility trends",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 8,
    title: "Resume Writing and Cover Letter Mastery",
    issuer: "TCS",
    year: "2022",
    date: "2022",
    certificateUrl: "#",
    image: CERT_IMG_8, // tcsResume.jpg
    featured: false,
    description:
      "Comprehensive course on professional resume writing and cover letter creation techniques for career advancement.",
    skills: [
      "Resume Writing",
      "Cover Letters",
      "Professional Communication",
      "Career Development",
      "Job Application",
    ],
    learnings: [
      "Mastered professional resume structure and formatting",
      "Learned effective cover letter presentation techniques",
      "Understood do's and don'ts of resume creation",
      "Developed strategies for highlighting key achievements",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 9,
    title: "Webinar on Electrical Power Generation in Kerala",
    issuer: "NCERC Electronics & Communication Engineering",
    year: "2020",
    date: "Oct 31, 2020",
    certificateUrl: "#",
    image: CERT_IMG_9, // electircalpowergeneration.jpg
    featured: false,
    description:
      "Participated in webinar on Electrical Power Generation Scenario in Kerala covering energy infrastructure and power systems.",
    skills: [
      "Power Systems",
      "Electrical Engineering",
      "Energy Infrastructure",
      "Renewable Energy",
    ],
    learnings: [
      "Understood Kerala's power generation landscape",
      "Learned about electrical power distribution systems",
      "Explored energy infrastructure challenges",
      "Gained insights into regional power management",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 10,
    title: "Python Web Developer",
    issuer: "L&T EduTech",
    year: "2023",
    date: "May 2023",
    certificateUrl: "#",
    image: CERT_IMG_10, // python.jpg
    featured: false,
    description:
      "Comprehensive Python web development program covering backend development, database integration, and web frameworks.",
    skills: [
      "Python Programming",
      "SQLite Database",
      "Web Crawling",
      "Flask Web Framework",
      "Backend Development",
    ],
    learnings: [
      "Developed web applications using Python frameworks",
      "Designed and implemented SQLite database schemas",
      "Built RESTful APIs and web services",
      "Mastered web crawling with Beautiful Soup",
      "Applied Flask framework for web development",
    ],
    validThrough: null,
    credentialId: null,
  },
  {
    id: 11,
    title: "Data Science Internship",
    issuer: "Spectrum Softtech Solutions Pvt. Ltd.",
    year: "2021",
    date: "Nov 2021",
    certificateUrl: "#",
    image: CERT_IMG_11, // spectrum.jpg
    featured: false,
    description:
      "Curriculum-based industrial internship in Data Science involving real-world data analysis and machine learning projects.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Data Analysis",
      "Python",
      "Data Visualization",
    ],
    learnings: [
      "Applied data preprocessing and cleaning techniques",
      "Built and evaluated machine learning models",
      "Created data visualizations and dashboards",
      "Worked on real-world data science projects",
      "Gained industrial experience in data analytics",
    ],
    validThrough: "Expired",
    credentialId: "Spec/STC/70/12/021",
  },
  {
    id: 12,
    title: "Zoho CRM Certification",
    issuer: "Zoho",
    year: "2025",
    date: "Jul 21, 2025",
    certificateUrl: "#",
    image: CERT_IMG_13, // Using fallback project image
    featured: true,
    description:
      "Self-learning course on Zoho CRM covering comprehensive customer relationship management platform features and implementation.",
    skills: [
      "Zoho CRM",
      "Customer Relationship Management",
      "Sales Automation",
      "Business Process Management",
    ],
    learnings: [
      "Mastered Zoho CRM platform configuration and customization",
      "Implemented sales automation and workflow management",
      "Designed customer relationship management strategies",
      "Applied business process optimization techniques",
    ],
    validThrough: "1 Year",
    credentialId: null,
  },
  {
    id: 13,
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM Cognitive Class",
    year: "2025",
    date: "Jul 26, 2025",
    certificateUrl:
      "https://courses.cognitiveclass.ai/certificates/70b5722ce4f34400af6cf12016d22a8e",
    image: CERT_IMG_12, // Using fallback project image
    featured: false,
    description:
      "IBM certification covering Docker containerization fundamentals, image management, and container orchestration basics.",
    skills: [
      "Docker",
      "Containerization",
      "Docker Images",
      "Container Management",
      "IBM Cloud",
    ],
    learnings: [
      "Mastered Docker container creation and management",
      "Built and optimized Docker images using Dockerfiles",
      "Implemented container networking and storage solutions",
      "Applied Docker Compose for multi-container applications",
      "Understood container orchestration fundamentals",
    ],
    validThrough: null,
    credentialId: "f12016d22a8e",
  },
  {
    id: 14,
    title: "Git Training",
    issuer: "Simplilearn",
    year: "2024",
    date: "Apr 21, 2024",
    certificateUrl: "#",
    image: CERT_IMG_14,
    featured: true,
    description:
      "Professional Git version control training covering repository management, branching strategies, and collaborative workflows.",
    skills: [
      "Git",
      "Version Control",
      "GitHub",
      "Branching",
      "Code Collaboration",
    ],
    learnings: [
      "Mastered Git commands and repository management",
      "Implemented effective branching and merging strategies",
      "Collaborated using pull requests and code reviews",
      "Resolved merge conflicts and managed project history",
    ],
    validThrough: null,
    credentialId: "5064488",
  },
  {
    id: 15,
    title: "TypeScript: The New JavaScript for Web Development",
    issuer: "Simplilearn",
    year: "2024",
    date: "May 1, 2024",
    certificateUrl: "#",
    image: CERT_IMG_15,
    featured: true,
    description:
      "Comprehensive TypeScript course covering type systems, modern JavaScript features, and web development applications.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Type Systems",
      "Frontend Development",
    ],
    learnings: [
      "Mastered TypeScript syntax and type annotations",
      "Applied object-oriented programming in TypeScript",
      "Integrated TypeScript with modern frameworks",
      "Implemented type-safe JavaScript applications",
    ],
    validThrough: null,
    credentialId: "5105075",
  },
];

export const PROJECT_SLUG_MAPPING = {
  // B.Tech Computer Science Projects
  "Hospital Management System: Full-stack application for hospital operations with role-based access control":
    "hospital-management-system",

  // MERN Stack Training Projects
  "Trend Trove: Comprehensive social media and news platform with real-time features":
    "trend-trove",
  "Zigma Watches: Full-featured e-commerce platform with admin panel and payment integration":
    "zigma-watches",

  // Software Engineer AFC Digital Projects
  "Checkpoint Systems: Multi-tenant SaaS application with isolated customer data":
    "checkpoint-systems",
  "ART HEALTH: Healthcare platform with dynamic UI and automated workflows":
    "art-health",
  "Weather Management Application: Real-time weather app with interactive charts":
    "weather-management-application",

  // Personal Projects
  "db-connections-util: Secure database connection utility for multiple database types":
    "db-connections-util",
  "Event Registration System: Simple yet effective event management application":
    "event-registration-system",
  "Smart Task Manager: Feature-rich todo application with drag-and-drop functionality":
    "smart-task-manager",
};
