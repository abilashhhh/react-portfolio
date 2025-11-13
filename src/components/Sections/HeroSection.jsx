import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Mail,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RefreshCcw,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import abi from "../../assets/images/abi2.jpeg";
import abi2 from "../../assets/images/abi.jpeg";
import abi3 from "../../assets/images/abi3.jpeg";
import { containerVariants, itemVariants } from "../../utils/helper";
import RESUME1 from "../../assets/resume/abilash_resume2.pdf";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [abi, abi2, abi3];

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const imageRef = useRef(null);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLightboxOpen) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isLightboxOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          prevLightboxImage();
          break;
        case "ArrowRight":
          nextLightboxImage();
          break;
        case " ":
          e.preventDefault();
          handleReset();
          break;
        case "+":
        case "=":
          e.preventDefault();
          handleZoomIn();
          break;
        case "-":
          e.preventDefault();
          handleZoomOut();
          break;
        case "r":
        case "R":
          e.preventDefault();
          handleRotate();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxImageIndex, zoomLevel]);

  // Lightbox functions
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    setZoomLevel(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    handleReset();
  };

  const prevLightboxImage = () => {
    setLightboxImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    handleReset();
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME1;
    link.download = "Abilash_Resume.pdf";
    link.click();
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-white/30" : "bg-blue-400/40"
            }`}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          ></motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          {/* Mobile layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile image - Mobile view */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 cursor-pointer ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    }`}
                    onClick={() => openLightbox(currentImageIndex)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt="Abi"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                  </motion.div>

                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20 pointer-events-none"
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Crafting
                </span>
                <span className="ml-2 text-blue-500">Digital</span> <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Excellence.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                Transforming ideas into seamless digital experiences with modern
                technology and innovative solutions.
              </motion.p>

              {/* CTA Buttons - Mobile view */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-lg shadow-blue-500/30"
                >
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                  } rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile view */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 justify-center items-center mb-12"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/abilashhhh" },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/abilash2001",
                  },
                  { icon: Mail, href: "mailto:abilashnarayanan2001@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 hover:border-gray-700"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Crafting
                </span>
                <br />
                <span className="text-blue-500">Digital</span>
                <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg xl:text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-lg font-light leading-relaxed`}
              >
                Transforming ideas into seamless digital experiences with modern
                technology and innovative solutions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-lg shadow-blue-500/30"
                >
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                  } rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center pt-4"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/abilashhhh" },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/abilash2001",
                  },
                  { icon: Mail, href: "mailto:abilashnarayanan2001@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 hover:border-gray-700"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image - Desktop */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden border-4 cursor-pointer ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  }`}
                  onClick={() => openLightbox(currentImageIndex)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt="Abi"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </motion.div>

                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border-2 border-blue-500/20 pointer-events-none"
                ></motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute -bottom-6 -left-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-2xl px-6 py-4 shadow-xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Available for work
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className={`absolute -top-6 -right-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-2xl px-6 py-4 shadow-xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">2+</div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Years Experience
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={24}
            className={`${isDarkMode ? "text-gray-600" : "text-gray-400"}`}
          />
        </motion.div>
      </motion.section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div
              className={`absolute inset-0 backdrop-blur-lg ${
                isDarkMode ? "bg-black/80" : "bg-white/90"
              }`}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className={`absolute top-4 right-4 z-50 p-3 rounded-full backdrop-blur-sm transition-all ${
                  isDarkMode
                    ? "bg-black/50 text-white hover:bg-black/70"
                    : "bg-white/50 text-gray-800 hover:bg-white/70"
                }`}
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevLightboxImage}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-sm transition-all z-10 ${
                      isDarkMode
                        ? "bg-black/50 text-white hover:bg-black/70"
                        : "bg-white/50 text-gray-800 hover:bg-white/70"
                    }`}
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextLightboxImage}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-sm transition-all z-10 ${
                      isDarkMode
                        ? "bg-black/50 text-white hover:bg-black/70"
                        : "bg-white/50 text-gray-800 hover:bg-white/70"
                    }`}
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Zoom controls */}
              <div
                className={`absolute top-4 left-1 flex  p-1 rounded-2xl backdrop-blur-sm z-10 ${
                  isDarkMode
                    ? "bg-black/50 text-white"
                    : "bg-white/50 text-gray-800"
                }`}
              >
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className={`p-2 rounded-lg transition-all ${
                    zoomLevel <= 1
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <ZoomOut size={20} />
                </button>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 5}
                  className={`p-2 rounded-lg transition-all ${
                    zoomLevel >= 5
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={handleRotate}
                  className={`p-2 rounded-lg transition-all ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <RotateCw size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className={`p-2 rounded-lg transition-all ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <RefreshCcw size={20} />
                </button>
              </div>

              {/* Image counter */}
              {images.length > 1 && (
                <div
                  className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm z-10 ${
                    isDarkMode
                      ? "bg-black/50 text-white"
                      : "bg-white/50 text-gray-800"
                  }`}
                >
                  {lightboxImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Zoom level indicator */}
              <div
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm z-10 ${
                  isDarkMode
                    ? "bg-black/50 text-white"
                    : "bg-white/50 text-gray-800"
                }`}
              >
                {Math.round(zoomLevel * 100)}%
              </div>

              {/* Image container */}
              <motion.div
                ref={imageRef}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                style={{
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
              >
                <motion.img
                  src={images[lightboxImageIndex]}
                  alt="Abi"
                  className="max-w-full max-h-full object-contain select-none"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                    transition: isDragging ? "none" : "transform 0.2s ease",
                  }}
                  draggable={false}
                />
              </motion.div>

             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
