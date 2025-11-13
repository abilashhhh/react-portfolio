import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, TECH_STACK, STATS } from "../../utils/data";
import { Code2, Server, Database, Award, Cloud, Heart } from "lucide-react";

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6,
      },
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
      {/* Simple Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills & <span className="text-blue-500">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILLS_CATEGORY.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4 + categoryIndex * 0.15,
              }}
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
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
                </div>
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
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
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
                        className={`h-full rounded-full ${
                          skill.color ||
                          "bg-gradient-to-r from-blue-500 to-purple-500"
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
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-blue-500">
            Also Familiar With
          </h3>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.9 + index * 0.02,
                }}
                className={`px-3 py-2 rounded-full text-sm font-medium cursor-default border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 1.1 + index * 0.1,
              }}
              className={`p-4 rounded-xl border ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-blue-500 mb-1">
                {stat.number}
              </h4>
              <p
                className={`text-xs font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
