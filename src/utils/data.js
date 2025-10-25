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
      "Skills related to the client-side development of web applications.",
    skills: [
      { name: "HTML", level: "Advanced", color: "bg-blue-700" },
      { name: "CSS", level: "Advanced", color: "bg-blue-700" },
      { name: "JavaScript", level: "Intermediate", color: "bg-blue-500" },
      { name: "React", level: "Intermediate", color: "bg-blue-500" },
      { name: "Tailwind CSS", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description:
      "Skills related to the server-side development of web applications.",
    skills: [
      { name: "Node.js", level: "Intermediate", color: "bg-blue-500" },
      { name: "Express", level: "Intermediate", color: "bg-blue-500" },
      { name: "MongoDB", level: "Intermediate", color: "bg-blue-500" },
      { name: "REST APIs", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 3,
    title: "Database Management",
    icon: Database,
    description:
      "Skills related to the management and manipulation of databases.",
    skills: [
      { name: "MySQL", level: "Intermediate", color: "bg-blue-500" },
      { name: "PostgreSQL", level: "Beginner", color: "bg-blue-300" },
      { name: "MongoDB", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 4,
    title: "UI / UX Design",
    icon: Award,
    description:
      "Skills related to designing user interfaces and enhancing user experience.",
    skills: [
      { name: "Figma", level: "Intermediate", color: "bg-blue-500" },
      { name: "Canva", level: "Advanced", color: "bg-blue-700" },
      { name: "Adobe XD", level: "Beginner", color: "bg-blue-300" },
    ],
  },
  {
    id: 5,
    title: "DevOps & Tools",
    icon: Cloud,
    description:
      "Skills related to development operations and essential tools.",
    skills: [
      { name: "Git / GitHub", level: "Advanced", color: "bg-blue-700" },
      { name: "Docker", level: "Beginner", color: "bg-blue-300" },
      { name: "Vite", level: "Intermediate", color: "bg-blue-500" },
      { name: "VS Code", level: "Advanced", color: "bg-blue-700" },
    ],
  },
  {
    id: 6,
    title: "Soft Skills",
    icon: Heart,
    description:
      "Essential interpersonal skills for effective collaboration and productivity.",
    skills: [
      { name: "Problem Solving", level: "Advanced", color: "bg-blue-700" },
      { name: "Teamwork", level: "Advanced", color: "bg-blue-700" },
      { name: "Communication", level: "Advanced", color: "bg-blue-700" },
      {
        name: "Time Management",
        level: "Intermediate",
        color: "bg-blue-500",
      },
    ],
  },
];

// Tech Stack
export const TECH_STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "Canva",
  "VS Code",
];

// Statistics
export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and progress tracking features.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.",
    image: PROJECT_IMG_3,
    tags: ["React", "API Integration", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media engagement, audience insights, and content performance metrics.",
    image: PROJECT_IMG_4,
    tags: ["React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "Personal fitness application with workout logging, calorie tracking, progress charts, and goal setting features.",
    image: PROJECT_IMG_5,
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Mobile",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop portfolio builder and client gallery.",
    image: PROJECT_IMG_6,
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
];

// Journey Timeline
export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to 3 major projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University",
    description:
      "Completed Bachelor's degree in Computer Science, focusing on algorithms, data structures, and software engineering principles.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Junior Developer",
    company: "WebCraft Solutions",
    description:
      "Joined as a junior full-stack developer. Built scalable web applications and collaborated with cross-functional teams.",
    icon: Code,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Launched 3 successful web applications for various clients.",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Senior Developer",
    company: "Present",
    description:
      "Currently building innovative solutions and exploring new technologies like AI integration and advanced web animations.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];

// Passions
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building amazing products with talented teams",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful and functional interfaces",
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-900",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://instagram.com",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900",
  },
  {
    name: "Dev.to",
    icon: FiCode,
    url: "https://dev.to",
    color: "hover:text-purple-400",
    bgColor: "hover:bg-purple-900",
  },
];

// Contact Information
export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alex@timetoprogram.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Open to opportunities",
  },
];
