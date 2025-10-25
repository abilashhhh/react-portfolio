import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // Only scroll if we're on the home page
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home and then scroll after a small delay
      navigate("/");
      // Use setTimeout to ensure the home page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
      }, 100);
    }
  };

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "Skills", path: "/", section: "skills" },
    { name: "Work", path: "/", section: "work" },
    // { name: "Projects", path: "/projects" },
    { name: "About", path: "/", section: "about" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  const isActiveSection = (section) => {
    if (location.pathname !== "/") return false;
    const hash = window.location.hash.replace("#", "");
    return hash === section;
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Code2 size={24} className="text-blue-500" />
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className={`text-lg font-semibold ml-1 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } hover:no-underline`}
          >
            Abilash Narayanan
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              {item.section ? (
                // Section links that scroll on home page
                <button
                  onClick={() => scrollToSection(item.section)}
                  className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } ${
                    isActiveSection(item.section)
                      ? "text-blue-500 font-medium"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                // Regular page links
                <Link
                  to={item.path}
                  className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } ${
                    isActivePage(item.path) ? "text-blue-500 font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-4 overflow-hidden ${
              isDarkMode ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-md rounded-lg border ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="p-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 5 }}
                  className="py-3 border-b last:border-b-0 border-gray-200 dark:border-gray-700"
                >
                  {item.section ? (
                    // Section links that scroll on home page
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className={`block w-full text-left text-sm uppercase tracking-wider transition-colors duration-200 ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } ${
                        isActiveSection(item.section)
                          ? "text-blue-500 font-medium"
                          : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    // Regular page links
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-left text-sm uppercase tracking-wider transition-colors duration-200 ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } ${
                        isActivePage(item.path)
                          ? "text-blue-500 font-medium"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
