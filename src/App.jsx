import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";
import ProjectSection from "./components/Sections/ProjectSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-5 pb-[100vh] ">
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default App;



        // {
        //   /* Bottom CTA + Signature */
        // }
        // <motion.div
        //   initial="hidden"
        //   whileInView="visible"
        //   viewport={{ once: true }}
        //   variants={containerVariants}
        //   className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-16 border-t border-gray-700/20"
        // >
        //   <motion.div
        //     variants={itemVariants}
        //     className="text-center sm:text-right"
        //   >
        //     <p
        //       className={`text-base mb-2 ${
        //         isDarkMode ? "text-gray-300" : "text-gray-700"
        //       }`}
        //     >
        //       Ready to bring your ideas to life?
        //     </p>
        //     <a
        //       href="#contact"
        //       className="inline-block px-8 py-3 rounded-full text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        //     >
        //       LET'S WORK TOGETHER
        //     </a>
        //   </motion.div>

        //   <div
        //     className={`hidden sm:block h-10 w-px ${
        //       isDarkMode ? "bg-gray-700" : "bg-gray-300"
        //     }`}
        //   />

        //   <motion.div
        //     variants={itemVariants}
        //     className="text-center sm:text-left"
        //   >
        //     <p
        //       className={`text-sm mb-1 ${
        //         isDarkMode ? "text-gray-500" : "text-gray-600"
        //       }`}
        //     >
        //       Crafted with passion by
        //     </p>
        //     <h3
        //       className={`text-xl font-semibold ${
        //         isDarkMode ? "text-blue-400" : "text-blue-600"
        //       }`}
        //     >
        //       Abilash Narayanan
        //     </h3>
        //   </motion.div>
        // </motion.div>;
