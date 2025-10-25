import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-28 px-6 transition-colors duration-500 ease-in-out ${
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
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className={`text-sm uppercase tracking-[0.2em] mb-4 ${
              isDarkMode ? "text-blue-400/70" : "text-blue-600/80"
            }`}
          >
            Get to Know Me
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
        </motion.div>

        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Left Column: My Mission + Passions */}
          <div>
            {/* My Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`p-8 rounded-2xl mb-12 transition-all duration-500 ease-in-out hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-linear-to-b from-[#0d1628] to-[#0c1322] border border-gray-700/30 shadow-lg hover:shadow-blue-500/10"
                  : "bg-linear-to-b from-white to-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-semibold mb-5"
              >
                My Mission
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-base leading-relaxed mb-5 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion lies in crafting digital
                experiences that are not just functional, but delightful and
                accessible to everyone.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and the endless
                possibilities they bring to create meaningful digital
                experiences.
              </motion.p>
            </motion.div>

            {/* What I Love Building */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                What I Love Building
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-xl transition-all duration-500 ease-in-out hover:-translate-y-2 ${
                      isDarkMode
                        ? "bg-linear-to-b from-[#101a2f] to-[#0d1528] border border-gray-700/30 shadow-lg hover:shadow-blue-500/10"
                        : "bg-linear-to-b from-white to-gray-100 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center">
                      {/* Icon on the left */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 ${
                          isDarkMode ? "bg-blue-500/20" : "bg-blue-100"
                        }`}
                      >
                        <passion.icon
                          size={22}
                          className={`${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                      </div>

                      {/* Content on the right */}
                      <div className="ml-4">
                        <h4 className="text-base font-semibold mb-2">
                          {passion.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {passion.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Developer Journey */}
          <motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-10 pl-10"
            >
              My Developer Journey
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="relative border-l-2 border-blue-500/60 pr-6 transition-all duration-700 ease-in-out"
            >
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-5 relative group"
                >
                  <div
                    className={`ml-7 absolute -left-[46px] w-10 h-10 flex items-center justify-center rounded-full shadow-md ring-4 ring-blue-500/20 transition-transform duration-300 ease-in-out group-hover:scale-110 ${step.color}`}
                  >
                    <step.icon size={18} className="text-white" />
                  </div>

                  <div
                    className={`ml-10 relative p-5 rounded-xl transition-all duration-500 hover:-translate-y-1 ${
                      isDarkMode
                        ? "bg-linear-to-b from-[#0d1628] to-[#0c1322] border border-gray-700/30 shadow-lg hover:shadow-blue-500/10"
                        : "bg-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          isDarkMode
                            ? "bg-gray-700/50 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {step.company}
                      </span>
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>

                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
