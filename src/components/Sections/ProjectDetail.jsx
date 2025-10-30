import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  Zap,
  Code,
  Shield,
  Database,
  Smartphone,
  Globe,
  Layers,
} from "lucide-react";
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

  const project = PROJECTS.find((p) => slug === slugify(p.slug)) || null;

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

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "live production":
        return "bg-green-500";
      case "published on npm":
        return "bg-blue-500";
      case "ongoing":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "Completed";
      case "live production":
        return "Live";
      case "published on npm":
        return "Published";
      case "ongoing":
        return "In Progress";
      default:
        return status || "Not Specified";
    }
  };

  const getProjectTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "personal project":
        return isDarkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-800";
      case "professional project":
        return isDarkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-800";
      default:
        return isDarkMode
          ? "bg-gray-800 text-gray-200"
          : "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
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
          <div className="flex flex-wrap items-center gap-3 mb-6">
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
                ⭐ Featured
              </span>
            )}
            {project.status && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(
                    project.status
                  )}`}
                />
                {getStatusText(project.status)}
              </span>
            )}
            {project.projectType && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getProjectTypeColor(
                  project.projectType
                )}`}
              >
                {project.projectType}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <p
            className={`text-lg sm:text-xl leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-8`}
          >
            {project.detailedDescription || project.description}
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium transition-all hover:bg-blue-600 shadow-lg"
              >
                <ExternalLink size={18} />
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
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
                    : "bg-white border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm"
                }`}
              >
                <Github size={18} />
                Source Code
              </motion.a>
            )}
          </div>
        </motion.header>

        {/* Project Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="text-yellow-500" size={24} />
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          isDarkMode ? "bg-blue-400" : "bg-blue-500"
                        }`}
                      />
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Technical Highlights */}
            {project.technicalHighlights &&
              project.technicalHighlights.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`p-6 rounded-2xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Code className="text-green-500" size={24} />
                    Technical Highlights
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technicalHighlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.section>
              )}

            {/* Admin Features */}
            {project.adminFeatures && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="text-red-500" size={24} />
                  Admin Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.adminFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          isDarkMode ? "bg-red-400" : "bg-red-500"
                        }`}
                      />
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Modules */}
            {project.modules && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={`p-6 rounded-2xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="text-purple-500" size={24} />
                  System Modules
                </h2>
                {Object.entries(project.modules).map(
                  ([moduleName, features]) => (
                    <div key={moduleName} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-semibold mb-3 capitalize">
                        {moduleName} Module
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-3 p-3 rounded-lg ${
                              isDarkMode ? "bg-gray-700" : "bg-gray-50"
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isDarkMode ? "bg-purple-400" : "bg-purple-500"
                              }`}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </motion.section>
            )}
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-6">
       
            {/* Technologies Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className={`p-6 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code size={20} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tagsDetailed && project.tagsDetailed.length > 0
                  ? project.tagsDetailed.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))
                  : project.tags.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`p-6 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Visit Live Site
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    <Github size={16} />
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Project Information */}
        {(project.role || project.duration || project.status) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.role && (
                <div className="text-center">
                  <User
                    size={32}
                    className={`mx-auto mb-2 ${
                      isDarkMode ? "text-blue-400" : "text-blue-500"
                    }`}
                  />
                  <p className="text-sm font-medium">Role</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                    {project.role}
                  </p>
                </div>
              )}
              {project.duration && (
                <div className="text-center">
                  <Clock
                    size={32}
                    className={`mx-auto mb-2 ${
                      isDarkMode ? "text-green-400" : "text-green-500"
                    }`}
                  />
                  <p className="text-sm font-medium">Duration</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                    {project.duration}
                  </p>
                </div>
              )}
              {project.status && (
                <div className="text-center">
                  <div
                    className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${getStatusColor(
                      project.status
                    )}`}
                  />
                  <p className="text-sm font-medium">Status</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                    {getStatusText(project.status)}
                  </p>
                </div>
              )}
              {project.projectType && (
                <div className="text-center">
                  <Globe
                    size={32}
                    className={`mx-auto mb-2 ${
                      isDarkMode ? "text-purple-400" : "text-purple-500"
                    }`}
                  />
                  <p className="text-sm font-medium">Type</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                    {project.projectType}
                  </p>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
