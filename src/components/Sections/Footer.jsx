import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SOCIAL_LINKS } from "../../utils/data";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Code,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "API Integration",
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-gray-950 text-white border-t border-gray-800"
          : "bg-white text-gray-900 border-t border-gray-200"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-4 px-2"
          >
            <Sparkles className="text-blue-500 shrink-0" size={18} />
            <span
              className={`text-xs sm:text-sm uppercase tracking-wider ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Let's Create Something Amazing
            </span>
            <Sparkles className="text-blue-500 shrink-0" size={18} />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4"
          >
            Ready to bring your{" "}
            <span className="text-blue-500">ideas to life?</span>
          </motion.h2>

          <motion.a
            variants={itemVariants}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white text-sm sm:text-base font-semibold bg-linear-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            Let's Work Together
          </motion.a>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code className="text-blue-500" size={24} />
              Abilash Narayanan
            </h3>
            <p
              className={`text-sm leading-relaxed mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A passionate full-stack developer crafting beautiful and
              functional web experiences. Turning ideas into reality, one line
              of code at a time.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    social.bgColor
                  } ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-300 hover:text-blue-500 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="text-blue-500 mr-2">▸</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  className={`mt-1 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  size={18}
                />
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    abilashncty@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className={`mt-1 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  size={18}
                />
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    +91 7902253958
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className={`mt-1 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  size={18}
                />
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`pt-8 border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`text-sm text-center md:text-left ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              © {new Date().getFullYear()} Abilash Narayanan. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className={isDarkMode ? "text-gray-500" : "text-gray-600"}>
                Crafted with
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="text-red-500 fill-red-500" size={16} />
              </motion.div>
             
            </div>

            
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {/* <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          isDarkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        <ArrowUp size={20} />
      </motion.button> */}
    </footer>
  );
};

export default Footer;
