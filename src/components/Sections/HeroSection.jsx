import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import luffy from "../../assets/images/luffy.jng";
const HeroSection = () => {
  return (
    <div className="p-8">
      <img
        src={luffy}
        alt="Luffy"
        className="w-40 h-40 object-cover rounded-full"
      />
    </div>
  );
};

export default HeroSection;
