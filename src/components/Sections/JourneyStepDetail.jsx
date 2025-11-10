// components/Sections/JourneyStepDetail.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS } from "../../utils/data";
import { PROJECT_SLUG_MAPPING } from "../../utils/data";
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Code,
  Briefcase,
  Package,
  Star,
  Award,
  BookOpen,
  Users,
  Zap,
  Target,
  Download,
  Globe,
  Cpu,
  Database,
  Shield,
  GitBranch,
  Clock,
  Layers,
  CheckCircle,
  TrendingUp,
  ArrowUpRight,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const JourneyStepDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const step = JOURNEY_STEPS.find((item) => item.slug === slug);

  // Scroll to top and handle loading
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [slug]);

  // Handle image click
  const handleImageClick = (image, index = 0) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  // Handle next/previous image in modal
  const handleNextImage = () => {
    if (step.image && step.image.length > 1) {
      const nextIndex = (selectedImageIndex + 1) % step.image.length;
      setSelectedImage(step.image[nextIndex]);
      setSelectedImageIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    if (step.image && step.image.length > 1) {
      const prevIndex =
        (selectedImageIndex - 1 + step.image.length) % step.image.length;
      setSelectedImage(step.image[prevIndex]);
      setSelectedImageIndex(prevIndex);
    }
  };

  if (!step) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Journey Step Not Found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  // Get icon component based on step type
  const getStepIcon = (iconName) => {
    const icons = {
      GraduationCap,
      Code,
      Briefcase,
      Package,
    };
    return icons[iconName] || Briefcase;
  };

  const StepIcon = getStepIcon(step.icon?.name || step.icon);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "bg-linear-to-br from-gray-900 via-gray-950 to-gray-900 text-white"
          : "bg-linear-to-br from-blue-50 via-white to-purple-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? "bg-blue-500/20" : "bg-blue-300/40"
          }`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-3xl ${
            isDarkMode ? "bg-purple-500/20" : "bg-purple-300/40"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? "bg-cyan-500/10" : "bg-cyan-200/30"
          }`}
        />
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative pt-24 pb-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mb-8"
          >
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                } else {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }, 100);
                }
              }}
              className={`group inline-flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 hover:gap-4 ${
                isDarkMode
                  ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200 backdrop-blur-sm border border-gray-700/50"
                  : "bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200/50 shadow-lg"
              }`}
            >
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span className="font-medium">Back to About</span>
            </Link>
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDarkMode
                      ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200 backdrop-blur-sm border border-gray-700/50"
                      : "bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200/50 shadow-lg"
                  }`}
                >
                  View All Projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDarkMode
                      ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200 backdrop-blur-sm border border-gray-700/50"
                      : "bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200/50 shadow-lg"
                  }`}
                >
                  Home
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Header Content */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <div
                className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${step.color} group hover:scale-105 transition-transform duration-500`}
              >
                <StepIcon size={28} className="text-white" />
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              {step.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-xl md:text-2xl font-semibold mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {step.company}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 text-base"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200 backdrop-blur-sm border border-gray-700/50"
                    : "bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200/50 shadow-lg"
                }`}
              >
                <Calendar size={18} className="text-blue-500" />
                <span className="font-medium">{step.year}</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-200 backdrop-blur-sm border border-gray-700/50"
                    : "bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm border border-gray-200/50 shadow-lg"
                }`}
              >
                {step.location !== "NPM Package Registry" ? (
                  <MapPin size={18} className="text-green-500" />
                ) : (
                  <Package size={18} className="text-green-500" />
                )}
                <span className="font-medium">{step.location}</span>
              </motion.div>

              {step.website && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={step.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur-sm text-blue-500 hover:text-blue-400 transition-colors group ${
                    isDarkMode
                      ? "bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm border border-gray-700/50"
                      : "bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-200/50 shadow-lg"
                  }`}
                >
                  <Globe size={18} />
                  <span className="font-medium">Visit Website</span>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative px-6 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Overview & Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Overview Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`rounded-2xl p-6 backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700/50 shadow-2xl"
                    : "bg-white/80 border-gray-200/50 shadow-xl"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={20} className="text-blue-500" />
                  <h3 className="text-xl font-bold">Overview</h3>
                </div>
                <p
                  className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>

              {/* Image Gallery */}
              {step.image && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="space-y-4"
                >
                  {/* Main Image */}
                  <div
                    className={`rounded-2xl overflow-hidden backdrop-blur-sm border cursor-pointer group ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700/50 shadow-2xl"
                        : "bg-white/80 border-gray-200/50 shadow-xl"
                    }`}
                    onClick={() => handleImageClick(step.image[0], 0)}
                  >
                    <div className="relative">
                      <img
                        src={step.image[0]}
                        alt={step.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                       
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  {step.image.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {step.image.slice(1).map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.2 + index * 0.1,
                          }}
                          className={`rounded-lg overflow-hidden cursor-pointer group ${
                            isDarkMode
                              ? "bg-gray-800/50 border border-gray-700/50"
                              : "bg-white/80 border border-gray-200/50"
                          }`}
                          onClick={() => handleImageClick(img, index + 1)}
                        >
                          <div className="relative aspect-square">
                            <img
                              src={img}
                              alt={`${step.title} ${index + 2}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                           </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className={`rounded-2xl p-6 backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700/50 shadow-2xl"
                    : "bg-white/80 border-gray-200/50 shadow-xl"
                }`}
              >
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <Zap size={20} className="text-yellow-500" />
                  Quick Stats
                </h4>
                <div className="space-y-3">
                  {renderQuickStats(step, isDarkMode)}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className={`rounded-2xl p-6 backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700/50 shadow-2xl"
                    : "bg-white/80 border-gray-200/50 shadow-xl"
                }`}
              >
                {renderDetailedContent(step, isDarkMode, navigate)}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            {/* Glass/Blurred Background */}
            <div
              className={`absolute inset-0 backdrop-blur-lg ${
                isDarkMode ? "bg-black/70" : "bg-white/70"
              }`}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className={`absolute -top-12 right-0 transition-colors z-10 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <X size={32} />
              </button>

              {/* Navigation Arrows */}
              {step.image && step.image.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-10 ${
                      isDarkMode
                        ? "bg-black/50 text-white hover:bg-black/70"
                        : "bg-white/50 text-gray-700 hover:bg-white/70"
                    }`}
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-10 ${
                      isDarkMode
                        ? "bg-black/50 text-white hover:bg-black/70"
                        : "bg-white/50 text-gray-700 hover:bg-white/70"
                    }`}
                  >
                    <ArrowLeft size={24} className="rotate-180" />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={selectedImage}
                alt={step.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Counter */}
              {step.image && step.image.length > 1 && (
                <div className="absolute top-4 left-4">
                  <p
                    className={`text-sm px-3 py-1 rounded-full inline-block backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-black/50 text-white border border-white/20"
                        : "bg-white/50 text-gray-700 border border-gray-200/50"
                    }`}
                  >
                    {selectedImageIndex + 1} / {step.image.length}
                  </p>
                </div>
              )}

              {/* Title
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p
                  className={`text-sm px-3 py-1 rounded-full inline-block backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-black/50 text-white border border-white/20"
                      : "bg-white/50 text-gray-700 border border-gray-200/50"
                  }`}
                >
                  {step.title}
                </p>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`p-3 rounded-2xl shadow-2xl backdrop-blur-sm border ${
            isDarkMode
              ? "bg-gray-800/80 border-gray-700/50 text-white"
              : "bg-white/80 border-gray-200/50 text-gray-700"
          }`}
        >
          <ArrowLeft size={18} className="rotate-90" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// ... (rest of the helper functions remain the same - renderQuickStats, getStepStats, renderDetailedContent, InfoItem, ProjectCard, TechBadge)

const renderQuickStats = (step, isDarkMode) => {
  const stats = getStepStats(step);

  return stats.map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
      className={`flex items-center justify-between p-3 rounded-lg backdrop-blur-sm ${
        isDarkMode
          ? "bg-gray-700/30 border border-gray-600/50 text-gray-200 hover:bg-gray-600/40"
          : "bg-white/50 border border-gray-200 text-gray-700 hover:bg-white/60 shadow-md"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${stat.color}`}>
          <stat.icon size={16} className="text-white" />
        </div>
        <span className="font-medium text-sm">{stat.label}</span>
      </div>
      <span className="font-bold">{stat.value}</span>
    </motion.div>
  ));
};

const getStepStats = (step) => {
  const baseStats = [
    {
      icon: Calendar,
      label: "Duration",
      value: step.detailedInfo?.duration || step.year,
      color: "bg-blue-500",
    },
  ];

  switch (step.slug) {
    case "btech-computer-science":
      return [
        ...baseStats,
        {
          icon: BookOpen,
          label: "Courses",
          value: step.detailedInfo.coursework.length,
          color: "bg-green-500",
        },
        {
          icon: Target,
          label: "Projects",
          value: step.detailedInfo.keyProjects.length,
          color: "bg-purple-500",
        },
        {
          icon: Award,
          label: "Achievements",
          value: step.detailedInfo.achievements.length,
          color: "bg-yellow-500",
        },
      ];

    case "mern-stack-training":
      return [
        ...baseStats,
        {
          icon: Code,
          label: "Technologies",
          value: step.detailedInfo.technologiesLearned.length,
          color: "bg-green-500",
        },
        {
          icon: Layers,
          label: "Projects Built",
          value: step.detailedInfo.majorProjects.length,
          color: "bg-orange-500",
        },
        {
          icon: Zap,
          label: "Key Learnings",
          value: step.detailedInfo.learnings.length,
          color: "bg-red-500",
        },
      ];

    case "software-engineer-afc-digital":
      return [
        ...baseStats,
        {
          icon: Cpu,
          label: "Technologies",
          value: step.detailedInfo.technologies.length,
          color: "bg-blue-500",
        },
        {
          icon: Users,
          label: "Projects",
          value: step.detailedInfo.projects.length,
          color: "bg-green-500",
        },
        {
          icon: TrendingUp,
          label: "Achievements",
          value: step.detailedInfo.achievements.length,
          color: "bg-purple-500",
        },
      ];

    case "npm-package-db-connections-util":
      return [
        ...baseStats,
        {
          icon: Download,
          label: "Downloads",
          value: step.detailedInfo.downloads,
          color: "bg-pink-500",
        },
        {
          icon: Database,
          label: "DB Types",
          value: "4",
          color: "bg-blue-500",
        },
        {
          icon: Shield,
          label: "Features",
          value: step.detailedInfo.features.length,
          color: "bg-green-500",
        },
      ];

    default:
      return baseStats;
  }
};

// Enhanced helper function to render different content based on step type
const renderDetailedContent = (step, isDarkMode, navigate) => {
  const { detailedInfo } = step;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const renderSectionHeader = (icon, title) => (
    <motion.div
      className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700"
      variants={sectionVariants}
    >
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </motion.div>
  );

  const renderHighlightList = (highlights) => (
    <div className="grid md:grid-cols-1 gap-3">
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`flex items-start gap-3 p-3 rounded-lg ${
            isDarkMode ? "bg-gray-700/30" : "bg-blue-50"
          }`}
        >
          <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
          <span className="text-sm leading-relaxed">{highlight}</span>
        </motion.div>
      ))}
    </div>
  );

  const renderTechGrid = (technologies) => (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <TechBadge
          key={index}
          tech={tech}
          index={index}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );

  // Function to handle project click
  const handleProjectClick = (projectName) => {
    const projectSlug = PROJECT_SLUG_MAPPING[projectName];
    if (projectSlug) {
      navigate(`/projects/${projectSlug}`);
    } else {
      // Fallback to projects page if specific project not found
      navigate("/projects");
    }
  };

  // Function to check if project is clickable
  const isProjectClickable = (projectName) => {
    return PROJECT_SLUG_MAPPING[projectName] !== undefined;
  };

  switch (step.slug) {
    case "btech-computer-science":
      return (
        <motion.div className="space-y-8" initial="hidden" animate="visible">
          {/* Degree Information */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <GraduationCap size={22} className="text-blue-500" />,
              "Degree Information"
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <InfoItem
                isDarkMode={isDarkMode}
                label="Degree"
                value={detailedInfo.degree}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Specialization"
                value={detailedInfo.specialization}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="University"
                value={detailedInfo.university}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Duration"
                value={detailedInfo.duration}
              />
            </div>
          </motion.section>

          {/* Key Highlights */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Star size={22} className="text-yellow-500" />,
              "Key Highlights"
            )}
            {renderHighlightList(detailedInfo.highlights)}
          </motion.section>

          {/* Key Projects */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Target size={22} className="text-green-500" />,
              "Key Projects"
            )}
            <div className="grid gap-4">
              {detailedInfo.keyProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  isDarkMode={isDarkMode}
                  isClickable={isProjectClickable(project)}
                  onProjectClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </motion.section>

          {/* Coursework & Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <BookOpen size={20} className="text-purple-500" />,
                "Coursework"
              )}
              {renderTechGrid(detailedInfo.coursework)}
            </motion.section>

            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Award size={20} className="text-orange-500" />,
                "Achievements"
              )}
              <div className="space-y-2">
                {detailedInfo.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                  >
                    <Award size={14} className="text-green-500 shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      );

    case "mern-stack-training":
      return (
        <motion.div className="space-y-8" initial="hidden" animate="visible">
          {/* Program Information */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Code size={22} className="text-green-500" />,
              "Program Information"
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <InfoItem
                isDarkMode={isDarkMode}
                label="Program"
                value={detailedInfo.program}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Duration"
                value={detailedInfo.duration}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Type"
                value={detailedInfo.type}
              />
            </div>
          </motion.section>

          {/* Key Highlights */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Zap size={22} className="text-yellow-500" />,
              "Key Highlights"
            )}
            {renderHighlightList(detailedInfo.highlights)}
          </motion.section>

          {/* Major Projects */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Layers size={22} className="text-orange-500" />,
              "Major Projects"
            )}
            <div className="grid gap-4">
              {detailedInfo.majorProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  isDarkMode={isDarkMode}
                  isClickable={isProjectClickable(project)}
                  onProjectClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </motion.section>

          {/* Technologies & Learnings */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Cpu size={20} className="text-blue-500" />,
                "Technologies Learned"
              )}
              {renderTechGrid(detailedInfo.technologiesLearned)}
            </motion.section>

            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <BookOpen size={20} className="text-purple-500" />,
                "Key Learnings"
              )}
              <div className="space-y-2">
                {detailedInfo.learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20"
                  >
                    <CheckCircle
                      size={14}
                      className="text-blue-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      );

    case "software-engineer-afc-digital":
      return (
        <motion.div className="space-y-8" initial="hidden" animate="visible">
          {/* Role Information */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Briefcase size={22} className="text-orange-500" />,
              "Role Information"
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <InfoItem
                isDarkMode={isDarkMode}
                label="Role"
                value={detailedInfo.role}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Department"
                value={detailedInfo.department}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Type"
                value={detailedInfo.type}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Duration"
                value={detailedInfo.duration}
              />
            </div>
          </motion.section>

          {/* Key Highlights */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Star size={22} className="text-yellow-500" />,
              "Key Highlights"
            )}
            {renderHighlightList(detailedInfo.highlights)}
          </motion.section>

          {/* Responsibilities */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Target size={22} className="text-green-500" />,
              "Key Responsibilities"
            )}
            <div className="grid gap-3">
              {detailedInfo.responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-700/30" : "bg-green-50"
                  }`}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed">
                    {responsibility}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies & Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Cpu size={20} className="text-blue-500" />,
                "Technologies"
              )}
              {renderTechGrid(detailedInfo.technologies)}
            </motion.section>

            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <TrendingUp size={20} className="text-purple-500" />,
                "Key Achievements"
              )}
              <div className="space-y-2">
                {detailedInfo.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  >
                    <Award
                      size={14}
                      className="text-purple-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Projects */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Layers size={22} className="text-cyan-500" />,
              "Projects"
            )}
            <div className="grid gap-3">
              {detailedInfo.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  isDarkMode={isDarkMode}
                  isClickable={isProjectClickable(project)}
                  onProjectClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </motion.section>
        </motion.div>
      );

    case "npm-package-db-connections-util":
      return (
        <motion.div className="space-y-8" initial="hidden" animate="visible">
          {/* Package Information */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Package size={22} className="text-pink-500" />,
              "Package Information"
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <InfoItem
                isDarkMode={isDarkMode}
                label="Package Name"
                value={detailedInfo.packageName}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Type"
                value={detailedInfo.type}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Version"
                value={detailedInfo.version}
              />
              <InfoItem
                isDarkMode={isDarkMode}
                label="Downloads"
                value={detailedInfo.downloads}
              />
            </div>
          </motion.section>

          {/* Key Highlights */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Star size={22} className="text-yellow-500" />,
              "Key Highlights"
            )}
            {renderHighlightList(detailedInfo.highlights)}
          </motion.section>

          {/* Features */}
          <motion.section variants={sectionVariants}>
            {renderSectionHeader(
              <Shield size={22} className="text-green-500" />,
              "Features"
            )}
            <div className="grid md:grid-cols-2 gap-3">
              {detailedInfo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-700/30" : "bg-green-50"
                  }`}
                >
                  <CheckCircle
                    size={16}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies & Impact */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Code size={20} className="text-blue-500" />,
                "Technologies"
              )}
              {renderTechGrid(detailedInfo.technologies)}
            </motion.section>

            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <GitBranch size={20} className="text-orange-500" />,
                "Impact"
              )}
              <div className="space-y-2">
                {detailedInfo.impact.map((impact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20"
                  >
                    <TrendingUp
                      size={14}
                      className="text-orange-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{impact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Use Cases & Future Enhancements */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Database size={20} className="text-purple-500" />,
                "Use Cases"
              )}
              <div className="space-y-2">
                {detailedInfo.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={sectionVariants}>
              {renderSectionHeader(
                <Zap size={20} className="text-cyan-500" />,
                "Future Enhancements"
              )}
              <div className="space-y-2">
                {detailedInfo.futureEnhancements.map((enhancement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                  >
                    <Target
                      size={14}
                      className="text-cyan-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{enhancement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      );

    default:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <h3 className="text-xl font-bold mb-3">Detailed Information</h3>
          <p className="text-gray-600 dark:text-gray-400">
            More details about this journey step will be available soon.
          </p>
        </motion.div>
      );
  }
};

const InfoItem = ({ label, value, isDarkMode }) => (
  <motion.div
    className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
      isDarkMode
        ? "bg-gray-800/40 border-gray-700/50 text-gray-100"
        : "bg-gray-50 border-gray-200/50 text-gray-800"
    }`}
    whileHover={{ scale: 1.02 }}
  >
    <span
      className={`font-medium text-sm ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      {label}:
    </span>
    <span className="font-semibold text-sm">{value}</span>
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
  isDarkMode,
  isClickable = false,
  onProjectClick,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`p-4 rounded-xl border-l-4 ${
      isClickable ? "border-blue-500 cursor-pointer group" : "border-gray-400"
    } ${isDarkMode ? "bg-gray-700/30" : "bg-white shadow-lg"} ${
      isClickable ? "hover:shadow-xl transition-all duration-300" : ""
    }`}
    onClick={isClickable ? onProjectClick : undefined}
  >
    <div className="flex items-start gap-3">
      <div
        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
          isClickable ? "bg-blue-500" : "bg-gray-400"
        }`}
      />
      <div className="flex-1">
        <p className="text-sm leading-relaxed">{project}</p>
        {isClickable && (
          <div className="flex items-center gap-1 mt-2 text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View project details</span>
            <ArrowUpRight size={12} />
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const TechBadge = ({ tech, index, isDarkMode }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className={`px-4 py-2 ${
      isDarkMode
        ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
    } rounded-full text-sm font-semibold shadow-sm transition-colors duration-200`}
  >
    {tech}
  </motion.span>
);

export default JourneyStepDetail;
