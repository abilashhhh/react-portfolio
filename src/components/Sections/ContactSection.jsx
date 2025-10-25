import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import SuccessModal from "../SuccessModal";

const ContactSection = () => {
  const { isDarkMode } = useTheme();

  // State for the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); // Store the submitted name

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Store the name before clearing the form
    setSubmittedName(formData.name);

    // Simulate form submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowModal(true);
    }, 2000);
  };

  return (
    <section
      id="contact"
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
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
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
            Get in Touch
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Contact <span className="text-blue-500">Me</span>
          </motion.h2>
        </motion.div>

        {/* Split layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section (Contact Information & Social Links) */}
          <div className="flex-1">
            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
              {CONTACT_INFO.map((contact, index) => (
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
                      <contact.icon
                        size={22}
                        className={`${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                    </div>

                    {/* Content on the right */}
                    <div className="ml-4">
                      <h4 className="text-base font-semibold mb-2">
                        {contact.label}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center mb-24">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold mb-6"
              >
                Connect with Me
              </motion.h3>
              <div className="flex justify-center gap-6">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.div key={index} className="relative group">
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
                        social.bgColor
                      } ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      <social.icon size={24} />
                    </motion.a>

                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all duration-300 ease-out pointer-events-none">
                      <div
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${
                          isDarkMode
                            ? "bg-gray-800 text-white"
                            : "bg-gray-900 text-white"
                        } shadow-lg`}
                      >
                        {social.name}
                        {/* Arrow */}
                        <div
                          className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-900"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="flex-1">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 text-center"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`mt-2 p-3 w-full border-2 rounded-md ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`mt-2 p-3 w-full border-2 rounded-md ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className={`mt-2 p-3 w-full border-2 rounded-md ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  }`}
                />
              </div>

              {formStatus && (
                <div
                  className={`text-center text-sm font-semibold ${
                    formStatus.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {formStatus}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {showModal && (
          <SuccessModal
            isDarkMode={isDarkMode}
            name={submittedName}
            message="Your message has been sent successfully!"
            onClose={() => setShowModal(false)}
          />
        )}
      </div>

      {/* Background */}
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

export default ContactSection;
