import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { CERTIFICATIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import CertificationCard from "../CertificationCard";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const CertificationsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featuredCertifications = CERTIFICATIONS.filter(
    (cert) => cert.featured
  ).slice(0, 6);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
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
            Achievements
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-blue-500">Certifications</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A collection of certifications that showcase my continuous learning
            journey and expertise in full-stack development and modern
            technologies.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {featuredCertifications.map((cert) => {
            const slug = slugify(cert.title);
            return (
              <motion.div key={cert.id} variants={itemVariants}>
                <Link to={`/certifications/${slug}`} className="block">
                  <CertificationCard
                    certification={cert}
                    isDarkMode={isDarkMode}
                  />
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
              to="/certifications"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <span>View All Certifications</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
