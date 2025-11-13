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
  ExternalLink,
  ArrowRight,
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

  // Button hover states
  const [isCtaHovered, setIsCtaHovered] = React.useState(false);
  const [isTopHovered, setIsTopHovered] = React.useState(false);

  // Particle effect for CTA button
  const ParticleEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={
            isCtaHovered
              ? {
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                  x: Math.cos((i * 30 * Math.PI) / 180) * 40,
                  y: Math.sin((i * 30 * Math.PI) / 180) * 40,
                }
              : {}
          }
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="absolute w-1.5 h-1.5 bg-white rounded-full left-1/2 top-1/2"
        />
      ))}
    </div>
  );

  // Sparkle effect for CTA button
  const SparkleEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={
            isCtaHovered
              ? {
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }
              : {}
          }
          transition={{ duration: 1, delay: i * 0.2 }}
          className="absolute text-yellow-300 left-1/2 top-1/2"
          style={{
            left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 30}%`,
            top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 30}%`,
          }}
        >
          <Sparkles size={12} />
        </motion.div>
      ))}
    </div>
  );

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
  
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-blue-400/20" : "bg-blue-500/20"
            }`}
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
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
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-15 ${
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
          className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Enhanced CTA Section */}
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-500 shrink-0" size={18} />
            </motion.div>
            <span
              className={`text-xs sm:text-sm uppercase tracking-wider ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Let's Create Something Amazing
            </span>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-500 shrink-0" size={18} />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4"
          >
            Ready to bring your{" "}
            <motion.span
              className="text-blue-500 inline-block"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ideas to life?
            </motion.span>
          </motion.h2>

          <motion.a
            variants={itemVariants}
            href="#contact"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsCtaHovered(true)}
            onHoverEnd={() => setIsCtaHovered(false)}
            className="relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 overflow-hidden group"
          >
            <ParticleEffect />
            <SparkleEffect />

            {/* Shine effect */}
            <motion.div
              animate={{
                x: isCtaHovered ? ["-100%", "200%"] : "-100%",
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
            />

            {/* Border glow */}
            <motion.div
              animate={{
                opacity: isCtaHovered ? [0.5, 1, 0.5] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isCtaHovered ? Infinity : 0,
              }}
              className="absolute inset-0 rounded-full border-2 border-white/30"
            />

            <motion.div
              animate={{ x: isCtaHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 relative z-10"
            >
              <Mail size={20} className="sm:w-5 sm:h-5" />
              Let's Work Together
              <motion.div
                animate={{
                  x: isCtaHovered ? 5 : 0,
                  opacity: isCtaHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Enhanced Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Enhanced About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-blue-500" size={24} />
              </motion.div>
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
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: {
                      scale: 1.3,
                      rotate: 8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    },
                    tap: { scale: 0.9 },
                  }}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    social.bgColor
                  } ${isDarkMode ? "text-white" : "text-gray-900"} group`}
                >
                  {/* Social icon glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute inset-0 rounded-full ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-500"
                    }`}
                  />

                  <social.icon size={20} className="relative z-10" />

                  {/* Hover shine effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { x: 0 },
                    hover: {
                      x: 8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    className={`group flex items-center gap-2 text-sm transition-colors duration-300 hover:text-blue-500 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="text-blue-500"
                    >
                      ▸
                    </motion.span>
                    {link.name}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink size={12} />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { x: 0 },
                    hover: {
                      x: 8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    },
                  }}
                  className={`group flex items-center gap-2 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                    className="text-blue-500"
                  >
                    ▸
                  </motion.div>
                  {service}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "abilashncty@gmail.com" },
                { icon: Phone, text: "+91 7902253958" },
                { icon: MapPin, text: "Bengaluru, Karnataka, India" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { x: 0 },
                    hover: {
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    },
                  }}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <contact.icon
                      className={`mt-1 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                      size={18}
                    />
                  </motion.div>
                  <motion.p
                    whileHover={{ color: isDarkMode ? "#60a5fa" : "#2563eb" }}
                    className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {contact.text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
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
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`text-sm text-center md:text-left ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              © {new Date().getFullYear()} Abilash Narayanan. All rights
              reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className={isDarkMode ? "text-gray-500" : "text-gray-600"}>
                Crafted with
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="text-red-500 fill-red-500" size={16} />
              </motion.div>
              <span className={isDarkMode ? "text-gray-500" : "text-gray-600"}>
                and
              </span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-blue-500" size={16} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => setIsTopHovered(true)}
        onHoverEnd={() => setIsTopHovered(false)}
        viewport={{ once: true }}
        variants={{
          hover: {
            scale: 1.15,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          },
          tap: { scale: 0.9 },
        }}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
            : "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        }`}
      >

        {/* Border glow */}
        <motion.div
          animate={{
            opacity: isTopHovered ? [0.5, 1, 0.5] : 0,
          }}
          transition={{ duration: 1.5, repeat: isTopHovered ? Infinity : 0 }}
          className="absolute inset-0 rounded-full border-2 border-white/30"
        />

        <motion.div
          animate={{ y: isTopHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </motion.div>

        {/* Shine effect */}
        <motion.div
          animate={{
            x: isTopHovered ? ["-100%", "200%"] : "-100%",
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
        />
      </motion.button>
    </footer>
  );
};

export default Footer;
