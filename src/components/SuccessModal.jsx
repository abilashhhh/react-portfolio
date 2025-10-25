import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const SuccessModal = ({ isDarkMode, message, onClose, name }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.5,
          }}
          className={`relative p-8 rounded-2xl max-w-md w-full shadow-2xl transition-all duration-300 ${
            isDarkMode
              ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-700/50"
              : "bg-linear-to-br from-white via-gray-50 to-white text-gray-900 border border-gray-200"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDarkMode
                ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
            }`}
          >
            <FiX size={20} />
          </motion.button>

          {/* Animated Icon with pulsing effect */}
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 200,
                delay: 0.2,
              }}
              className="relative"
            >
              {/* Pulsing rings */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-400"
                }`}
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className={`absolute inset-0 rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-400"
                }`}
              />

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${
                  isDarkMode
                    ? "bg-linear-to-br from-blue-500 to-emerald-600"
                    : "bg-linear-to-br from-blue-400 to-emerald-500"
                }`}
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <FiCheckCircle
                    size={40}
                    className="text-white drop-shadow-md"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Main Message with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-center mb-3 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Message Sent!
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`text-base text-center mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thank you for reaching out {name}! <br />
            I'll get back to you within 24 hours.
          </motion.p>

          {/* Animated Close Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="relative px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium shadow-lg overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Close</span>
            </motion.button>
          </motion.div>

          {/* Decorative particles */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? "bg-blue-400/30" : "bg-blue-500/30"
              }`}
              style={{
                left: `${20 + index * 15}%`,
                top: `${10 + (index % 2) * 70}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SuccessModal;
