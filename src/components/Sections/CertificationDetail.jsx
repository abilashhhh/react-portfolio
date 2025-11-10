import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Calendar,
  Building,
  Clock,
  IdCard,
  GraduationCap,
  Star,
  X,
  ZoomIn,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CERTIFICATIONS } from "../../utils/data";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const CertificationDetail = () => {
  const { slug } = useParams();
  const { isDarkMode } = useTheme();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certification =
    CERTIFICATIONS.find((c) => slug === slugify(c.title)) || null;

  if (!certification) {
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
          <h2 className="text-2xl font-bold mb-4">Certification not found</h2>
          <Link
            to="/certifications"
            className="text-blue-500 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to certifications
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
            to="/certifications"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 mb-8 ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
            }`}
          >
            <ArrowLeft size={16} />
            Back to Certifications
          </Link>
        </motion.div>

        {/* Certification Header */}
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
              {certification.issuer}
            </span>
            {certification.featured && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                  isDarkMode
                    ? "bg-yellow-900 text-yellow-200"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                <Star size={14} />
                Featured
              </span>
            )}
            {/* Degree Badge for Education */}
            {certification.cgpa && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                  isDarkMode
                    ? "bg-green-900 text-green-200"
                    : "bg-green-100 text-green-800"
                }`}
              >
                <GraduationCap size={14} />
                Degree
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {certification.title}
          </h1>

          <p
            className={`text-xl leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-8`}
          >
            {certification.description}
          </p>

          {/* Action Button */}
          <div className="flex flex-wrap gap-4">
            {certification.certificateUrl &&
              certification.certificateUrl !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium transition-all hover:bg-blue-600"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </motion.a>
              )}
          </div>
        </motion.header>
        {/* Certification Image with Modal */}
        {certification.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="relative group cursor-pointer">
                <div
                  className={`w-80 h-64 flex items-center justify-center   ${
                    isDarkMode ? "" : " "
                  } rounded-2xl overflow-hidden`}
                >
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setIsImageModalOpen(true)}
                  />
                </div>
              </div>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                      : "bg-white hover:bg-gray-100 text-gray-700 shadow-sm"
                  }
              `}
              >
                Click to view larger
              </button>
            </div>
          </motion.div>
        )}
        {/* Certification Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Skills */}
          {certification.skills && certification.skills.length > 0 && (
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Skills Acquired</h2>
              <div className="flex flex-wrap gap-3">
                {certification.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Certification Info */}
          <div
            className={`p-6 rounded-2xl h-fit ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Certification Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Building
                  size={16}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {certification.issuer}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar
                  size={16}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {certification.date}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Award
                  size={16}
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                />
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {certification.year}
                </span>
              </div>

              {/* Valid Through */}
              {certification.validThrough && (
                <div className="flex items-center gap-3">
                  <Clock
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  />
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    Valid: {certification.validThrough}
                  </span>
                </div>
              )}

              {/* Credential ID */}
              {certification.credentialId && (
                <div className="flex items-center gap-3">
                  <IdCard
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  />
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    ID: {certification.credentialId}
                  </span>
                </div>
              )}

              {/* CGPA for Degree */}
              {certification.cgpa && (
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  />
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    CGPA: {certification.cgpa}
                  </span>
                </div>
              )}

              {/* Classification for Degree */}
              {certification.classification && (
                <div className="flex items-center gap-3">
                  <Award
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  />
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    {certification.classification}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* My Learning Section */}
        {certification.learnings && certification.learnings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Key Learnings</h2>
            <div
              className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white shadow-sm"
              }`}
            >
              <ul className="space-y-4">
                {certification.learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-start gap-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Certification Highlights</h2>
          <div
            className={`prose max-w-none ${
              isDarkMode ? "prose-invert prose-gray" : "prose-gray"
            }`}
          >
            <p>
              This {certification.cgpa ? "academic degree" : "certification"}{" "}
              demonstrates a commitment to professional development and mastery
              of essential skills in the field. The comprehensive curriculum and{" "}
              {certification.cgpa ? "academic rigor" : "hands-on projects"}
              have significantly enhanced my technical expertise.
            </p>
            <ul>
              <li>
                {certification.cgpa
                  ? "University-accredited degree"
                  : "Industry-recognized credential"}
              </li>
              <li>
                {certification.cgpa
                  ? "Comprehensive academic foundation"
                  : "Hands-on practical experience"}
              </li>
              <li>Up-to-date with current industry standards</li>
              <li>Applicable real-world knowledge</li>
              {certification.featured && (
                <li>
                  Featured certification demonstrating exceptional achievement
                </li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {isImageModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setIsImageModalOpen(false)}
            >
               <div
                className={`absolute inset-0 backdrop-blur-lg ${
                  isDarkMode ? "bg-black/70" : "bg-white/70"
                }`}
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsImageModalOpen(false)}
                  className={`absolute -top-12 right-0 transition-colors z-10 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <X size={32} />
                </button>
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p
                    className={`text-sm px-3 py-1 rounded-full inline-block backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-black/50 text-white border border-white/20"
                        : "bg-white/50 text-gray-700 border border-gray-200/50"
                    }`}
                  >
                    {certification.title}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificationDetail;
