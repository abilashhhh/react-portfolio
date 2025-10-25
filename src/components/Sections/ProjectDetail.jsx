import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const ProjectDetail = () => {
  const { slug } = useParams();
  const { isDarkMode } = useTheme();

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const project = PROJECTS.find((p) => slug === slugify(p.title)) || null;

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-8 transition-colors duration-500 ${
          isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link
            to="/projects"
            className="text-blue-500 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 mb-8 ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
            }`}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-blue-900 text-blue-200"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {project.category}
            </span>
            {project.featured && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isDarkMode
                    ? "bg-yellow-900 text-yellow-200"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p
            className={`text-xl leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-8`}
          >
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium transition-all hover:bg-blue-600"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
                }`}
              >
                <Github size={16} />
                Source Code
              </motion.a>
            )}
          </div>
        </motion.header>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Technologies */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div
            className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Project Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar
                  size={16}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    project.featured
                      ? "bg-green-500"
                      : isDarkMode
                      ? "bg-gray-600"
                      : "bg-gray-400"
                  }`}
                />
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {project.featured ? "Featured Project" : "Project"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
          <div
            className={`prose max-w-none ${
              isDarkMode ? "prose-invert prose-gray" : "prose-gray"
            }`}
          >
            <p>
              This project demonstrates advanced technical skills and innovative
              problem-solving approaches. The implementation showcases best
              practices in modern web development and user experience design.
            </p>
            <ul>
              <li>Clean, maintainable code architecture</li>
              <li>Responsive design principles</li>
              <li>Performance optimization techniques</li>
              <li>User-centered design approach</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
