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
      className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
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
            className="text-4xl font-bold mb-6"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {SKILLS_CATEGORY.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <category.icon
                  size={28}
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <p
                className={`text-sm mb-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {category.description}
              </p>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
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
                        className={`h-full rounded-full ${
                          skill.color || "bg-blue-500"
                        }`}
                        custom={getLevelWidth(skill.level)}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      />
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
            also familiar with
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-default transition-all ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.h4
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  delay: index * 0.2,
                }}
                className="text-3xl md:text-4xl font-bold text-blue-500 mb-2"
              >
                {stat.number}
              </motion.h4>
              <p
                className={`text-sm ${
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
