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
  { number: "1.5+", label: "Years Experience" },
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
    featured: true,
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
];

// Journey Timeline
export const JOURNEY_STEPS = [
  {
    year: "2019-23",
    title: "B.Tech - Computer Science",
    company: "Nehru College of Engineering, KTU",
    description:
      "Began my journey in Computer Science and Engineering at APJ Abdul Kalam Technological University, for building a strong foundation in programming and software development.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  // {
  //   year: "2023",
  //   title: "Completed B.Tech",
  //   company: "KTU, Thrissur",
  //   description:
  //     "Graduated with a Bachelor's degree in Computer Science and Engineering, specializing in web technologies and full-stack development.",
  //   icon: Award,
  //   color: "bg-blue-500",
  // },
  {
    year: "2023-24",
    title: "MERN Stack Training",
    company: "Brototype Institute",
    description:
      "Intensive training in MERN stack technologies, learning modern web development practices, Clean Architecture, and building production-ready applications.",
    icon: Code,
    color: "bg-green-500",
  },
  {
    year: "2024 - Present",
    title: "Software Engineer",
    company: "AFC Digital Pvt Ltd",
    description:
      "Joined as a Software Engineer, working on enterprise applications with multi-tenant architecture, dynamic UI components, and automated workflows for healthcare and checkpoint systems.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Published NPM Package : db-connections-util",
    company: "Open Source",
    description:
      "Released db-connections-util, a secure database connection utility supporting multiple database types with AES-256 encryption, available on NPM for the developer community.",
    icon: Package,
    color: "bg-pink-500",
  },
  // {
  //   year: "2025",
  //   title: "Full Stack Innovation",
  //   company: "Present",
  //   description:
  //     "Currently building cutting-edge solutions with Clean Architecture, integrating AI capabilities, real-time communications, and exploring advanced web technologies to push the boundaries of innovation.",
  //   icon: Rocket,
  //   color: "bg-cyan-500",
  // },
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
    // value: "abilashnarayanan2001@gmail.com",
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
