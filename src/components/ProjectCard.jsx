import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 border ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-blue-500"
          : "bg-white border-gray-200 hover:border-blue-400"
      }`}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p
            className={`text-sm mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isDarkMode
                ? "text-green-400 hover:text-green-300"
                : "text-green-600 hover:text-green-500"
            }`}
          >
            <Globe size={16} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
