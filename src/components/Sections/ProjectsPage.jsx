import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Filter, Search, X } from "lucide-react";
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
  const gridRef = useRef(null);
  const statsRef = useRef(null);

  // Use separate inView hooks for different sections
  const headerInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = useMemo(
    () => ["All", ...new Set(PROJECTS.map((project) => project.category))],
    []
  );

  // Pre-process projects data for faster search
  const preProcessedProjects = useMemo(
    () =>
      PROJECTS.map((project) => ({
        ...project,
        searchableText: (
          project.title +
          " " +
          project.description +
          " " +
          project.tags.join(" ") +
          " " +
          project.category
        ).toLowerCase(),
      })),
    []
  );

  // Optimized filter function
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All" && !searchQuery.trim()) {
      return preProcessedProjects;
    }

    let results = preProcessedProjects;

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter((project) =>
        project.searchableText.includes(query)
      );
    }

    return results;
  }, [selectedCategory, searchQuery, preProcessedProjects]);

  // Stats for all projects (not filtered)
  const allProjectsStats = useMemo(() => {
    const total = PROJECTS.length;
    const featured = PROJECTS.filter((p) => p.featured).length;
    const categoriesCount = new Set(PROJECTS.map((p) => p.category)).size;

    return { total, featured, categoriesCount };
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategory("All");
    setSearchQuery("");
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
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
          animate={headerInView ? "visible" : "hidden"}
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

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto mt-8 relative"
          >
            <div className="relative">
              <Search
                size={20}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search projects by title, description, or tech..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`w-full pl-10 pr-10 py-3 rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                }`}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-3 mt-8"
          >
            <div className="flex items-center gap-2 text-sm">
              <Filter size={16} />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? isDarkMode
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-blue-500 text-white shadow-lg shadow-blue-400/25"
                    : isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={clearFilters}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                <X size={14} />
                Clear Filters
              </button>
            )}
          </motion.div>

          {/* Active Filters Info */}
          {(selectedCategory !== "All" || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Showing {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </motion.div>
          )}
        </motion.header>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.section
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={containerVariants}
            key={`${selectedCategory}-${searchQuery}`}
          >
            {filteredProjects.map((project) => {
              const slug = slugify(project.slug);
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <Link to={`/projects/${slug}`} className="block h-full">
                    <div className="h-full">
                      <ProjectCard project={project} isDarkMode={isDarkMode} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.section>
        ) : (
          // No results state
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div
              className={`text-6xl mb-4 ${
                isDarkMode ? "text-gray-700" : "text-gray-300"
              }`}
            >
              🔍
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              No projects found
            </h3>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearFilters}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-400/25"
              } hover:scale-105`}
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Stats - Always show total project stats */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
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
                {allProjectsStats.total}+
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {allProjectsStats.categoriesCount}
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
                {allProjectsStats.featured}
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
