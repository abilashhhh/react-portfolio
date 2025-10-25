import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import abi from "../../assets/images/abi.jpeg";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      {/* Hero Section  */}
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
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          {/* Mobile layout - Centered */}
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
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    }`}
                  >
                    <img
                      src={abi}
                      alt="Abi"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Content - Mobile view */}
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
                  Building digital
                </span>
                <span className="ml-2 text-blue-500">experience</span> <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  that matters.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I create beautiful and functional web experiences. Let's build
                something amazing together.
              </motion.p>

              {/* CTA Buttons - Mobile view */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-lg shadow-blue-500/30"
                >
                  View work
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
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
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

              {/* Tech stack - Mobile view */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center items-center text-sm"
              >
                {["React", "Node.js", "TypeScript", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800/50 text-gray-400 border border-gray-800"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop layout - Split screen */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Content - Desktop view */}
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
                  Building digital
                </span>
                <br />
                <span className="text-blue-500">experience</span>
                <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  that matters.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg xl:text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-lg font-light leading-relaxed`}
              >
                I create beautiful and functional web experiences. Let's build
                something amazing together.
              </motion.p>

              {/* CTA Buttons - Desktop view */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 shadow-lg shadow-blue-500/30"
                >
                  View work
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

              {/* Social Links - Desktop view */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center pt-4"
              >
                {[
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
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

              {/* Tech stack - Desktop view */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 items-center text-sm pt-8"
              >
                {["React", "Node.js", "TypeScript", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800/50 text-gray-400 border border-gray-800"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image - Desktop view */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden border-4 ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-2xl ${
                    isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
                  }`}
                >
                  <img
                    src={abi}
                    alt="Abi"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border-2 border-blue-500/20"
                ></motion.div>

                {/* Floating badge */}
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

                {/* Stats badge */}
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
    </div>
  );
};

export default HeroSection;

// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, Mail, Code2, Sparkles } from "lucide-react";
// import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { useState } from "react";

// const HeroSection = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 500], [0, -100]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1, ease: "easeOut", delay: 0.5 },
//     },
//   };

//   return (
//     <div
//       className={`min-h-screen transition-all duration-500 ${
//         isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* Hero Section with proper spacing */}
//       <motion.section
//         id="home"
//         style={{ y: heroY, opacity }}
//         className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-16"
//       >
//         {/* Enhanced Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {/* Primary gradient orb */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//               x: [0, 50, 0],
//               y: [0, -30, 0]
//             }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className={`absolute top-20 right-10 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 ${
//               isDarkMode ? "bg-blue-500" : "bg-blue-400"
//             }`}
//           />

//           {/* Secondary gradient orb */}
//           <motion.div
//             animate={{
//               scale: [1, 1.3, 1],
//               rotate: [360, 180, 0],
//               x: [0, -40, 0],
//               y: [0, 40, 0]
//             }}
//             transition={{ duration: 30, ease: "linear", repeat: Infinity }}
//             className={`absolute bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-20 ${
//               isDarkMode ? "bg-purple-500" : "bg-purple-400"
//             }`}
//           />

//           {/* Accent orb */}
//           <motion.div
//             animate={{
//               scale: [1, 1.1, 1],
//               opacity: [0.1, 0.15, 0.1]
//             }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
//               isDarkMode ? "bg-cyan-500" : "bg-cyan-400"
//             }`}
//           />

//           {/* Floating particles */}
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{
//                 y: [0, -100, 0],
//                 x: [0, Math.random() * 50 - 25, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 5 + i,
//                 repeat: Infinity,
//                 delay: i * 0.8,
//                 ease: "easeInOut",
//               }}
//               className={`absolute w-1 h-1 rounded-full ${
//                 isDarkMode ? "bg-blue-400" : "bg-blue-500"
//               }`}
//               style={{
//                 left: `${20 + i * 15}%`,
//                 top: `${30 + i * 10}%`,
//               }}
//             />
//           ))}

//           {/* Grid pattern overlay */}
//           <div
//             className={`absolute inset-0 ${
//               isDarkMode
//                 ? "bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"
//                 : "bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)]"
//             } bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]`}
//           />
//         </div>

//         <div className="max-w-7xl mx-auto w-full z-10">
//           {/* Mobile layout - Centered */}
//           <div className="block lg:hidden">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="text-center"
//             >
//               {/* Profile image - Mobile view with enhanced styling */}
//               <motion.div variants={imageVariants} className="mb-10">
//                 <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto relative">
//                   <motion.div
//                     whileHover={{ scale: 1.05, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`w-full h-full rounded-2xl overflow-hidden border-4 ${
//                       isDarkMode ? "border-gray-800 shadow-2xl shadow-blue-500/20" : "border-gray-300 shadow-xl shadow-gray-400/30"
//                     } relative group`}
//                   >
//                     <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                       <Code2 size={48} className="text-white" />
//                     </div>

//                     {/* Hover overlay */}
//                     <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
//                   </motion.div>

//                   {/* Animated decorative rings */}
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 20,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="absolute -inset-2 rounded-2xl border-2 border-blue-500/30"
//                   />

//                   <motion.div
//                     animate={{ rotate: -360 }}
//                     transition={{
//                       duration: 15,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="absolute -inset-3 rounded-2xl border border-purple-500/20"
//                   />

//                   {/* Sparkle effect */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       opacity: [0.5, 1, 0.5]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -top-2 -right-2"
//                   >
//                     <Sparkles size={20} className="text-yellow-400" />
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Enhanced badge with animation */}
//               <motion.div
//                 variants={itemVariants}
//                 className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
//                   isDarkMode
//                     ? "bg-blue-500/10 border border-blue-500/20"
//                     : "bg-blue-100 border border-blue-200"
//                 }`}
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Code2 size={16} className="text-blue-500" />
//                 </motion.div>
//                 <span className={`text-xs uppercase tracking-widest font-medium ${
//                   isDarkMode ? "text-blue-400" : "text-blue-600"
//                 }`}>
//                   Full Stack Developer
//                 </span>
//               </motion.div>

//               {/* Enhanced heading with gradient text */}
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight"
//               >
//                 <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   Building{" "}
//                 </span>
//                 <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
//                   digital
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                   experiences
//                 </span>
//                 <br />
//                 <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   that matter.
//                 </span>
//               </motion.h1>

//               {/* Enhanced description */}
//               <motion.p
//                 variants={itemVariants}
//                 className={`text-base sm:text-lg ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
//               >
//                 Crafting elegant solutions through clean code and innovative design.
//                 <span className="block mt-2">
//                   <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
//                     Let's build something extraordinary together.
//                   </span>
//                 </span>
//               </motion.p>

//               {/* Enhanced CTA Buttons */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//               >
//                 <motion.button
//                   whileHover={{ y: -2, scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("work")}
//                   className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_100%] hover:bg-right text-white rounded-full px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-500 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 group overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     View Work
//                     <motion.span
//                       animate={{ x: [0, 4, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       →
//                     </motion.span>
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ y: -2, scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("contact")}
//                   className={`relative border-2 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white"
//                       : "border-gray-300 hover:border-blue-400 text-gray-700 hover:text-gray-900"
//                   } rounded-full px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 group overflow-hidden`}
//                 >
//                   <span className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-blue-50 to-purple-50'} translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
//                   <span className="relative z-10 flex items-center gap-2">
//                     Get in Touch
//                     <Mail size={16} />
//                   </span>
//                 </motion.button>
//               </motion.div>

//               {/* Enhanced Social Links */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-4 justify-center items-center mb-12"
//               >
//                 {[
//                   { icon: FiGithub, href: "#", color: "hover:text-purple-500", bg: "hover:bg-purple-500/10" },
//                   { icon: FiLinkedin, href: "#", color: "hover:text-blue-500", bg: "hover:bg-blue-500/10" },
//                   { icon: Mail, href: "#", color: "hover:text-cyan-500", bg: "hover:bg-cyan-500/10" },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ y: -4, scale: 1.15, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       isDarkMode
//                         ? `text-gray-400 ${social.color} border border-gray-800 hover:border-gray-700 ${social.bg}`
//                         : `text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-100`
//                     } backdrop-blur-sm`}
//                   >
//                     <social.icon size={22} />
//                   </motion.a>
//                 ))}
//               </motion.div>

//               {/* Enhanced Tech stack */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-wrap gap-3 justify-center items-center text-sm"
//               >
//                 {[
//                   { name: "React", color: "from-cyan-500 to-blue-500" },
//                   { name: "Node.js", color: "from-green-500 to-emerald-500" },
//                   { name: "TypeScript", color: "from-blue-600 to-blue-500" },
//                   { name: "MongoDB", color: "from-green-600 to-green-500" }
//                 ].map((tech, index) => (
//                   <motion.span
//                     key={tech.name}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className={`px-5 py-2.5 rounded-full relative overflow-hidden group cursor-default ${
//                       isDarkMode
//                         ? "bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600"
//                         : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm"
//                     } transition-all duration-300`}
//                   >
//                     <span className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
//                     <span className="relative z-10 font-medium">{tech.name}</span>
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Desktop layout - Split screen with enhanced styling */}
//           <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-24 lg:items-center">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="space-y-8"
//             >
//               {/* Enhanced badge */}
//               <motion.div
//                 variants={textVariants}
//                 className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
//                   isDarkMode
//                     ? "bg-blue-500/10 border border-blue-500/20"
//                     : "bg-blue-100 border border-blue-200"
//                 }`}
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Code2 size={16} className="text-blue-500" />
//                 </motion.div>
//                 <span className={`text-xs uppercase tracking-widest font-medium ${
//                   isDarkMode ? "text-blue-400" : "text-blue-600"
//                 }`}>
//                   Full Stack Developer
//                 </span>
//               </motion.div>

//               {/* Enhanced heading */}
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-6xl xl:text-7xl 2xl:text-8xl font-light leading-[1.1]"
//               >
//                 <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   Building
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//                   digital
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                   experiences
//                 </span>
//                 <br />
//                 <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   that matter.
//                 </span>
//               </motion.h1>

//               {/* Enhanced description */}
//               <motion.p
//                 variants={itemVariants}
//                 className={`text-xl xl:text-2xl ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 } max-w-xl font-light leading-relaxed`}
//               >
//                 Crafting elegant solutions through clean code and innovative design.
//                 <span className={`block mt-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"} font-normal`}>
//                   Let's build something extraordinary together.
//                 </span>
//               </motion.p>

//               {/* Enhanced CTA Buttons */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-5 items-center pt-4"
//               >
//                 <motion.button
//                   whileHover={{ y: -3, scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("work")}
//                   className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_100%] hover:bg-right text-white rounded-full px-10 py-5 text-sm uppercase tracking-wider font-medium transition-all duration-500 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 group"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     View Work
//                     <motion.span
//                       animate={{ x: [0, 4, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       →
//                     </motion.span>
//                   </span>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ y: -3, scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("contact")}
//                   className={`relative border-2 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white"
//                       : "border-gray-300 hover:border-blue-400 text-gray-700 hover:text-gray-900"
//                   } rounded-full px-10 py-5 text-sm uppercase tracking-wider font-medium transition-all duration-300 group overflow-hidden backdrop-blur-sm`}
//                 >
//                   <span className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-blue-50 to-purple-50'} translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
//                   <span className="relative z-10 flex items-center gap-2">
//                     Get in Touch
//                     <Mail size={18} />
//                   </span>
//                 </motion.button>
//               </motion.div>

//               {/* Enhanced Social Links */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-4 items-center pt-6"
//               >
//                 {[
//                   { icon: FiGithub, href: "#", color: "hover:text-purple-500", bg: "hover:bg-purple-500/10" },
//                   { icon: FiLinkedin, href: "#", color: "hover:text-blue-500", bg: "hover:bg-blue-500/10" },
//                   { icon: Mail, href: "#", color: "hover:text-cyan-500", bg: "hover:bg-cyan-500/10" },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ y: -4, scale: 1.15, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       isDarkMode
//                         ? `text-gray-400 ${social.color} border border-gray-800 hover:border-gray-700 ${social.bg}`
//                         : `text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-100`
//                     } backdrop-blur-sm`}
//                   >
//                     <social.icon size={24} />
//                   </motion.a>
//                 ))}
//               </motion.div>

//               {/* Enhanced Tech stack */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-wrap gap-3 items-center text-sm pt-8"
//               >
//                 {[
//                   { name: "React", color: "from-cyan-500 to-blue-500" },
//                   { name: "Node.js", color: "from-green-500 to-emerald-500" },
//                   { name: "TypeScript", color: "from-blue-600 to-blue-500" },
//                   { name: "MongoDB", color: "from-green-600 to-green-500" }
//                 ].map((tech) => (
//                   <motion.span
//                     key={tech.name}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className={`px-5 py-2.5 rounded-full relative overflow-hidden group cursor-default ${
//                       isDarkMode
//                         ? "bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600"
//                         : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm"
//                     } transition-all duration-300`}
//                   >
//                     <span className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
//                     <span className="relative z-10 font-medium">{tech.name}</span>
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Enhanced Profile image - Desktop view */}
//             <motion.div
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex justify-center lg:justify-end"
//             >
//               <div className="relative">
//                 <motion.div
//                   whileHover={{ scale: 1.03, rotate: 2 }}
//                   className={`w-[400px] h-[400px] xl:w-[480px] xl:h-[480px] 2xl:w-[520px] 2xl:h-[520px] rounded-3xl overflow-hidden border-4 ${
//                     isDarkMode ? "border-gray-800 shadow-2xl shadow-blue-500/20" : "border-gray-300 shadow-2xl shadow-gray-400/30"
//                   } relative group`}
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center">
//                     <Code2 size={120} className="text-white opacity-80" />
//                   </div>

//                   {/* Animated overlay on hover */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-500/20 to-purple-500/20' : 'from-blue-400/20 to-purple-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                 </motion.div>

//                 {/* Multiple decorative rings */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute -inset-4 rounded-3xl border-2 border-blue-500/30"
//                 />

//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{
//                     duration: 15,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute -inset-6 rounded-3xl border border-purple-500/20"
//                 />

//                 {/* Enhanced floating badge */}
//                 <motion.div
//                   animate={{ y: [0, -12, 0] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className={`absolute -bottom-6 -left-6 ${
//                     isDarkMode ? "bg-gray-800/90 backdrop-blur-xl" : "bg-white/90 backdrop-blur-xl"
//                   } rounded-2xl px-8 py-5 shadow-2xl ${
//                     isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
//                   } border-2 ${
//                     isDarkMode ? "border-gray-700" : "border-gray-200"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="relative">
//                       <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                       <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
//                     </div>
//                     <span
//                       className={`text-sm font-semibold ${
//                         isDarkMode ? "text-gray-200" : "text-gray-800"
//                       }`}
//                     >
//                       Available for work
//                     </span>
//                   </div>
//                 </motion.div>

//                 {/* Enhanced stats badge */}
//                 <motion.div
//                   animate={{ y: [0, 12, 0] }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1,
//                   }}
//                   className={`absolute -top-6 -right-6 ${
//                     isDarkMode ? "bg-gray-800/90 backdrop-blur-xl" : "bg-white/90 backdrop-blur-xl"
//                   } rounded-2xl px-8 py-5 shadow-2xl ${
//                     isDarkMode ? "shadow-black/50" : "shadow-gray-400/30"
//                   } border-2 ${
//                     isDarkMode ? "border-gray-700" : "border-gray-200"
//                   }`}
//                 >
//                   <div className="text-center">
//                     <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                       2+
//                     </div>
//                     <div
//                       className={`text-xs font-medium uppercase tracking-wider ${
//                         isDarkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       Years Experience
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Sparkle effects */}
//                 {[...Array(3)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [0.3, 1, 0.3],
//                       rotate: [0, 180, 360]
//                     }}
//                     transition={{
//                       duration: 2 + i,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       delay: i * 0.7
//                     }}
//                     className="absolute"
//                     style={{
//                       top: `${20 + i * 25}%`,
//                       right: `${-5 + i * 3}%`,
//                     }}
//                   >
//                     <Sparkles size={24} className="text-yellow-400" />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Enhanced scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
//           onClick={() => scrollToSection("work")}
//         >
//           <div className={`flex flex-col items-center gap-2 ${
//             isDarkMode ? "text-gray-500 hover:text-gray-400" : "text-gray-400 hover:text-gray-600"
//           } transition-colors duration-300`}>
//             <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
//             <div className={`w-6 h-10 rounded-full border-2 ${
//               isDarkMode ? "border-gray-700" : "border-gray-300"
//             } flex items-start justify-center p-2`}>
//               <motion.div
//                 animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 className={`w-1.5 h-1.5 rounded-full ${
//                   isDarkMode ? "bg-gray-500" : "bg-gray-400"
//                 }`}
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Theme toggle button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsDarkMode(!isDarkMode)}
//           className={`fixed top-6 right-6 z-50 p-4 rounded-full ${
//             isDarkMode
//               ? "bg-gray-800 text-yellow-400 border border-gray-700 hover:bg-gray-700"
//               : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
//           } shadow-lg transition-all duration-300`}
//         >
//           {isDarkMode ? (
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//             </svg>
//           ) : (
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//             </svg>
//           )}
//         </motion.button>
//       </motion.section>
//     </div>
//   );
// };

// export default HeroSection;
