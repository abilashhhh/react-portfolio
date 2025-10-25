import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../utils/helper";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Get unique categories
  const categories = [...new Set(PROJECTS.map((project) => project.category))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <Link
              to="/"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
              }`}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            All <span className="text-blue-500">Projects</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto font-light`}
          >
            Browse through my complete portfolio of projects. Each one
            represents unique challenges and innovative solutions.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-2 text-sm">
              <Filter size={16} />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.header>

        {/* Projects Grid */}
        <motion.section
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {PROJECTS.map((project) => {
            const slug = slugify(project.title);
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group h-full" // Added h-full here
              >
                <Link to={`/projects/${slug}`} className="block h-full">
                  {" "}
                  {/* Added h-full here */}
                  <div className="h-full">
                    {" "}
                    {/* Wrapper div with h-full */}
                    <ProjectCard project={project} isDarkMode={isDarkMode} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-flex flex-wrap justify-center gap-8 p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {PROJECTS.length}+
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {categories.length}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {PROJECTS.filter((p) => p.featured).length}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Featured
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
