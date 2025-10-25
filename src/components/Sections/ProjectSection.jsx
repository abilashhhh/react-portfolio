import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "../ProjectCard";
import { containerVariants, itemVariants } from "../../utils/helper";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
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
            className="text-4xl font-bold mb-6"
          >
            Featured <span className="text-blue-500">Projects</span>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} isDarkMode={isDarkMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.a
            variants={itemVariants}
            href="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            View All Projects <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
