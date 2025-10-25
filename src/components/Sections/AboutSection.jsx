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
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-24"
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
            About <span className="text-blue-500">My Journey</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg leading-relaxed max-w-2xl mx-auto font-light ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I’m passionate about crafting beautiful, performant, and accessible
            web experiences. Here’s a look at how my journey has evolved — and
            what keeps me inspired.
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative border-l-2 border-blue-500/60 pr-6 mb-28 transition-all duration-700 ease-in-out"
        >
          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-14 relative group"
            >
              {/* Timeline Dot */}
              <div
                className={`ml-7 absolute -left-[46px] w-10 h-10 flex items-center justify-center rounded-full shadow-md ring-4 ring-blue-500/20 transition-transform duration-300 ease-in-out group-hover:scale-110 ${step.color}`}
              >
                <step.icon size={18} className="text-white" />
              </div>

              {/* Step Content */}
              <div className="ml-10 transition-all duration-500 ease-in-out hover:translate-x-1">
                <h4 className="text-lg font-semibold mb-1 flex items-center gap-2">
                  {step.title}
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    • {step.year}
                  </span>
                </h4>

                <p
                  className={`text-sm italic mb-2 ${
                    isDarkMode ? "text-gray-400/80" : "text-gray-500"
                  }`}
                >
                  {step.company}
                </p>

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

        {/* Passions Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PASSIONS.map((passion, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`p-8 rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-b from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700"
                  : "bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-white"
              }`}
            >
              <div
                className={`mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 ${
                  isDarkMode ? "bg-blue-500/20" : "bg-blue-100"
                }`}
              >
                <passion.icon
                  size={26}
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
              </div>

              <h4 className="text-lg font-semibold mb-2">{passion.title}</h4>
              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {passion.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Digital Signature Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center pt-24"
      >
        <p
          className={`text-sm mb-2 ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          Crafted with passion by
        </p>
        <h3
          className={`text-2xl font-semibold ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Abilash Narayanan
        </h3>
      </motion.div>

      {/* Soft gradient background overlay */}
      <div
        className={`absolute inset-0 -z-10 transition-colors duration-700 ease-in-out ${
          isDarkMode
            ? "bg-linear-to-b from-gray-950 via-gray-900 to-gray-950"
            : "bg-linear-to-b from-gray-50 via-white to-gray-50"
        }`}
      />
    </section>
  );
};

export default AboutSection;
