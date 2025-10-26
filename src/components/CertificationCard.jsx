import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CertificationCard = ({ certification, isDarkMode }) => {
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
      {/* Certification Image */}
      <div className="relative w-full h-48 overflow-hidden shrink-0">
        <img
          src={certification.image}
          alt={certification.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 min-h-0">
        {/* Title and Issuer */}
        <div className="flex-1 mb-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {certification.title}
          </h3>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {certification.issuer} • {certification.year}
          </p>
        </div>

        {/* Skills Tags */}
        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.skills.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {skill}
              </span>
            ))}
            {certification.skills.length > 3 && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                +{certification.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Links - Pushed to bottom */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-blue-500" />
            <span
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Verified
            </span>
          </div>
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <ExternalLink size={16} /> View
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
