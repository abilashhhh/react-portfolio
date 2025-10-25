import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-5 pb-[100vh] ">
        <Navbar />
        <HeroSection />
        <SkillSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
