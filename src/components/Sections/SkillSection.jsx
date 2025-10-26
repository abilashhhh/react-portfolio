import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, TECH_STACK, STATS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Code2, Server, Database, Award, Cloud, Heart } from "lucide-react";

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (width) => ({
      width: `${width}%`,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    }),
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case "Advanced":
        return 100;
      case "Intermediate":
        return 70;
      case "Beginner":
        return 40;
      default:
        return 50;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
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
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
      </motion.div>

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
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills & <span className="text-blue-500">Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            I have a diverse skill set that includes expertise in various
            programming languages, frameworks, and tools. My goal is to
            continuously learn and adapt to new technologies to deliver the best
            solutions for my clients.
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {SKILLS_CATEGORY.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800  hover:shadow-2xl hover:shadow-blue-500/20"
                  : "bg-white border-gray-200  hover:shadow-2xl hover:shadow-blue-400/20"
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${
                  isDarkMode
                    ? "from-blue-500/5 to-purple-500/5"
                    : "from-blue-400/5 to-purple-400/5"
                }`}
              />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2 rounded-lg ${
                    isDarkMode ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <category.icon
                    size={24}
                    className={`${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <p
                className={`text-sm mb-6 relative z-10 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {category.description}
              </p>

              {/* Skills with progress bars */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        className={`h-full rounded-full relative ${
                          skill.color ||
                          "bg-gradient-to-r from-blue-500 to-purple-500"
                        }`}
                        custom={getLevelWidth(skill.level)}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 text-blue-500"
          >
            Also Familiar With
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-3 rounded-full text-sm font-medium cursor-default transition-all duration-300 border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-blue-500  hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-blue-500  hover:text-white hover:shadow-lg hover:shadow-blue-400/25"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800  hover:shadow-2xl hover:shadow-blue-500/20"
                  : "bg-white border-gray-200  hover:shadow-2xl hover:shadow-blue-400/20"
              }`}
            >
              <motion.h4
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  delay: index * 0.1,
                }}
                className="text-3xl md:text-4xl font-bold text-blue-500 mb-2"
              >
                {stat.number}
              </motion.h4>
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
