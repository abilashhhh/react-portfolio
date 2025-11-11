import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 border h-full flex flex-col ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-blue-500"
          : "bg-white border-gray-200 hover:border-blue-400"
      }`}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 min-h-80">
        {" "}
        {/* Added flex-1 and min-h-0 */}
        {/* Title and Description */}
        <div className="flex-1 mb-4">
          {" "}
          {/* Added flex-1 for flexible space */}
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p
            className={`text-sm line-clamp ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
        </div>
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
        {/* Links - Pushed to bottom */}
        <div className="flex items-center justify-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              /* Add your click handler here */
            }}
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <Eye size={16} /> Click to view in detail
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
