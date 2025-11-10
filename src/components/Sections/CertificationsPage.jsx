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
import { CERTIFICATIONS } from "../../utils/data";
import CertificationCard from "../../components/CertificationCard";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../../utils/helper";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const CertificationsPage = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);

  const headerInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const [selectedIssuer, setSelectedIssuer] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique issuers
  const issuers = useMemo(
    () => ["All", ...new Set(CERTIFICATIONS.map((cert) => cert.issuer))],
    []
  );

  // Pre-process certifications data for faster search
  const preProcessedCerts = useMemo(
    () =>
      CERTIFICATIONS.map((cert) => ({
        ...cert,
        searchableText: (
          cert.title +
          " " +
          cert.issuer +
          " " +
          cert.year +
          " " +
          (cert.skills || []).join(" ") +
          " " +
          (cert.description || "")
        ).toLowerCase(),
      })),
    []
  );

  // Optimized filter function
  const filteredCerts = useMemo(() => {
    if (selectedIssuer === "All" && !searchQuery.trim()) {
      return preProcessedCerts;
    }

    let results = preProcessedCerts;

    // Filter by issuer
    if (selectedIssuer !== "All") {
      results = results.filter((cert) => cert.issuer === selectedIssuer);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter((cert) => cert.searchableText.includes(query));
    }

    return results;
  }, [selectedIssuer, searchQuery, preProcessedCerts]);

  // Stats for all certifications (not filtered)
  const allCertsStats = useMemo(() => {
    const total = CERTIFICATIONS.length;
    const featured = CERTIFICATIONS.filter((c) => c.featured).length;
    const issuersCount = new Set(CERTIFICATIONS.map((c) => c.issuer)).size;

    return { total, featured, issuersCount };
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedIssuer("All");
    setSearchQuery("");
  }, []);

  const handleIssuerChange = useCallback((issuer) => {
    setSelectedIssuer(issuer);
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
            All <span className="text-blue-500">Certifications</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto font-light`}
          >
            Explore my complete collection of certifications. Each represents
            dedication to continuous learning and professional growth.
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
                placeholder="Search certifications by title, issuer, or skills..."
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

          {/* Issuer Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-3 mt-8"
          >
            <div className="flex items-center gap-2 text-sm">
              <Filter size={16} />
              <span className="font-medium">Filter by:</span>
            </div>
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => handleIssuerChange(issuer)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedIssuer === issuer
                    ? isDarkMode
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-blue-500 text-white shadow-lg shadow-blue-400/25"
                    : isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
                }`}
              >
                {issuer}
              </button>
            ))}
            {(selectedIssuer !== "All" || searchQuery) && (
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
          {(selectedIssuer !== "All" || searchQuery) && (
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
                Showing {filteredCerts.length} certification
                {filteredCerts.length !== 1 ? "s" : ""}
                {selectedIssuer !== "All" && ` from ${selectedIssuer}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </motion.div>
          )}
        </motion.header>

        {/* Certifications Grid */}
        {filteredCerts.length > 0 ? (
          <motion.section
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={containerVariants}
            key={`${selectedIssuer}-${searchQuery}`}
          >
            {filteredCerts.map((cert) => {
              const slug = slugify(cert.title);
              return (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full"
                >
                  <Link to={`/certifications/${slug}`} className="block h-full">
                    <div className="h-full">
                      <CertificationCard
                        certification={cert}
                        isDarkMode={isDarkMode}
                      />
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
              No certifications found
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

        {/* Stats - Always show total certification stats */}
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
                {allCertsStats.total}+
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Certifications
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {allCertsStats.issuersCount}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Issuers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                {allCertsStats.featured}
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

export default CertificationsPage;
