import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "../ProjectCard";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const slugify = (text = "") =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <div
            className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
        </motion.div>

      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            My Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-blue-500">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Here are some of my favorite projects that showcase my skills,
            creativity, and ability to build functional, high-quality web
            applications.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => {
            const slug = slugify(project.slug);
            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Link to={`/projects/${slug}`} className="block">
                  <ProjectCard project={project} isDarkMode={isDarkMode} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants}>
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <span>View All Projects</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
