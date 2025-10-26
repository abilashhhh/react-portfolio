import React from "react";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";
import ProjectSection from "./components/Sections/ProjectSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Sections/Footer";
import CertificationsSection from "./components/Sections/CertificationsSection";

const Home = () => {
  return (
    <>
      <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-5">
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
