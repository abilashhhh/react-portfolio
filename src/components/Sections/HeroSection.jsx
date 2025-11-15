// components/HeroSection.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Download, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import abi from "../../assets/images/abi2.jpeg";
import abi2 from "../../assets/images/abi.jpeg";
import abi3 from "../../assets/images/abi3.jpeg";
import { containerVariants, itemVariants } from "../../utils/helper";
import RESUME1 from "../../assets/resume/abilash_resume2.pdf";
import { useState, useEffect } from "react";
import ImageModal from "../ImageModal";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [abi, abi2, abi3];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  // Button hover states
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  // Auto-rotate images
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

  // Lightbox functions
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
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

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  };

  // Social icon variants
  const socialIconVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  };

  // Floating badge variants
  const floatingBadgeVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatReverse: {
      y: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  // Button content variants
  const buttonContentVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  // Particle effect for resume button
  const ParticleEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={
            isResumeHovered
              ? {
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                }
              : {}
          }
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="absolute w-1 h-1 bg-white rounded-full left-1/2 top-1/2"
        />
      ))}
    </div>
  );

  // Ripple effect for contact button
  const RippleEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isContactHovered
            ? {
                scale: [1, 2, 3],
                opacity: [0.3, 0.1, 0],
              }
            : {}
        }
        transition={{ duration: 1 }}
        className={`absolute w-4 h-4 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isDarkMode ? "bg-blue-400" : "bg-blue-500"
        }`}
      />
    </div>
  );

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
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 cursor-pointer ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl ${
                      isDarkMode ? "shadow-blue-500/20" : "shadow-blue-400/20"
                    }`}
                    onClick={() => openLightbox(currentImageIndex)}
                  >
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt="Abi"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Animated ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border-2 border-blue-500/30 pointer-events-none"
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
                {/* Resume Button with Particle Effect */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsResumeHovered(true)}
                  onHoverEnd={() => setIsResumeHovered(false)}
                  onClick={handleDownload}
                  className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium shadow-lg shadow-blue-500/30 overflow-hidden"
                >
                  <ParticleEffect />
                  <motion.div
                    variants={buttonContentVariants}
                    className="flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download Resume
                  </motion.div>

                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: isResumeHovered ? ["0%", "200%"] : "0%",
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                </motion.button>

                {/* Contact Button with Ripple Effect */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsContactHovered(true)}
                  onHoverEnd={() => setIsContactHovered(false)}
                  onClick={() => scrollToSection("contact")}
                  className={`relative border rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 overflow-hidden ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <RippleEffect />
                  <motion.div
                    variants={buttonContentVariants}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Get in touch
                  </motion.div>
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
                    variants={socialIconVariants}
                    initial="initial"
                    whileHover="hover"
                    className={`p-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 hover:border-gray-700"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <social.icon size={20} />

                    {/* Social icon glow effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className={`absolute inset-0 rounded-full ${
                        isDarkMode ? "bg-blue-400" : "bg-blue-500"
                      }`}
                    />
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
                {/* Resume Button with Enhanced Effects */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsResumeHovered(true)}
                  onHoverEnd={() => setIsResumeHovered(false)}
                  onClick={handleDownload}
                  className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium shadow-lg shadow-blue-500/30 overflow-hidden group"
                >
                  <ParticleEffect />
                  <motion.div
                    variants={buttonContentVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      animate={{ rotate: isResumeHovered ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Download size={18} />
                    </motion.div>
                    Download Resume
                  </motion.div>

                  {/* Enhanced shine effect */}
                  <motion.div
                    animate={{
                      x: isResumeHovered ? ["-100%", "200%"] : "-100%",
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                  />
                </motion.button>

                {/* Contact Button with Enhanced Effects */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsContactHovered(true)}
                  onHoverEnd={() => setIsContactHovered(false)}
                  onClick={() => scrollToSection("contact")}
                  className={`relative border rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 overflow-hidden group ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <RippleEffect />
                  <motion.div
                    variants={buttonContentVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      animate={{ x: isContactHovered ? [0, 5, 0] : 0 }}
                      transition={{
                        duration: 0.6,
                        repeat: isContactHovered ? Infinity : 0,
                      }}
                    >
                      <ExternalLink size={18} />
                    </motion.div>
                    Get in touch
                  </motion.div>

                  {/* Border glow effect */}
                  <motion.div
                    animate={{
                      opacity: isContactHovered ? [0, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isContactHovered ? Infinity : 0,
                    }}
                    className={`absolute inset-0 rounded-full border-2 ${
                      isDarkMode ? "border-blue-400" : "border-blue-500"
                    }`}
                  />
                </motion.button>
              </motion.div>

              {/* Social Links with Enhanced Effects */}
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
                    variants={socialIconVariants}
                    initial="initial"
                    whileHover="hover"
                    className={`p-3 rounded-full transition-all duration-300 relative overflow-hidden group ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 hover:border-gray-700"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <social.icon size={22} />

                    {/* Enhanced glow effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0, 0.4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.7,
                      }}
                      className={`absolute inset-0 rounded-full ${
                        isDarkMode ? "bg-blue-400" : "bg-blue-500"
                      }`}
                    />

                    {/* Pulse ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`absolute inset-0 rounded-full border ${
                        isDarkMode ? "border-blue-400" : "border-blue-500"
                      }`}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image - Desktop with Enhanced Effects */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-80 h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden border-4 cursor-pointer ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  } group`}
                  onClick={() => openLightbox(currentImageIndex)}
                >
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="Abi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500" />
                </motion.div>

                {/* Enhanced decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border-2 border-blue-500/30 pointer-events-none"
                ></motion.div>

                {/* Second ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-6 rounded-3xl border border-blue-500/10 pointer-events-none"
                ></motion.div>

                {/* Floating badges with enhanced animations */}
                <motion.div
                  variants={floatingBadgeVariants}
                  animate="float"
                  className={`absolute -bottom-6 -left-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-2xl px-6 py-4 shadow-xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Let's Connect
                      {/* Available for work */}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={floatingBadgeVariants}
                  animate="floatReverse"
                  className={`absolute -top-6 -right-6 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-2xl px-6 py-4 shadow-xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl font-bold text-blue-500"
                    >
                      2+
                    </motion.div>
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

      {/* Reusable Image Modal */}
      <ImageModal
        images={images}
        initialIndex={lightboxImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default HeroSection;
