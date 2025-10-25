import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";
import ProjectSection from "./components/Sections/ProjectSection";
import AboutSection from "./components/Sections/AboutSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-5 pb-[100vh] ">
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
