// components/ImageModal.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RefreshCcw,
} from "lucide-react";
 

const ImageModal = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  isDarkMode = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const imageRef = useRef < HTMLDivElement > null;

  // Reset state when modal opens/closes or image changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(initialIndex);
      handleReset();
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (images.length > 1) prevImage();
          break;
        case "ArrowRight":
          if (images.length > 1) nextImage();
          break;
        case " ":
          e.preventDefault();
          handleReset();
          break;
        case "+":
        case "=":
          e.preventDefault();
          handleZoomIn();
          break;
        case "-":
          e.preventDefault();
          handleZoomOut();
          break;
        case "r":
        case "R":
          e.preventDefault();
          handleRotate();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImageIndex, zoomLevel, images.length]);

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    handleReset();
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    handleReset();
  };

  // Zoom and transform functions
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const hasMultipleImages = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 backdrop-blur-lg ${
              isDarkMode ? "bg-black/80" : "bg-white/90"
            }`}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-50 p-3 rounded-full backdrop-blur-sm transition-all ${
                isDarkMode
                  ? "bg-black/50 text-white hover:bg-black/70"
                  : "bg-white/50 text-gray-800 hover:bg-white/70"
              }`}
            >
              <X size={24} />
            </button>

            {/* Navigation buttons - Only show if multiple images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-sm transition-all z-10 ${
                    isDarkMode
                      ? "bg-black/50 text-white hover:bg-black/70"
                      : "bg-white/50 text-gray-800 hover:bg-white/70"
                  }`}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full backdrop-blur-sm transition-all z-10 ${
                    isDarkMode
                      ? "bg-black/50 text-white hover:bg-black/70"
                      : "bg-white/50 text-gray-800 hover:bg-white/70"
                  }`}
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Zoom controls */}
            <div
              className={`absolute top-4 left-1 flex gap-0 p-1 rounded-2xl backdrop-blur-sm z-10 ${
                isDarkMode
                  ? "bg-black/50 text-white"
                  : "bg-white/50 text-gray-800"
              }`}
            >
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className={`p-2 rounded-lg transition-all ${
                  zoomLevel <= 1
                    ? "opacity-50 cursor-not-allowed"
                    : isDarkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 5}
                className={`p-2 rounded-lg transition-all ${
                  zoomLevel >= 5
                    ? "opacity-50 cursor-not-allowed"
                    : isDarkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleRotate}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                <RotateCw size={20} />
              </button>
              <button
                onClick={handleReset}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                <RefreshCcw size={20} />
              </button>
            </div>

            {/* Image counter - Only show if multiple images */}
            {hasMultipleImages && (
              <div
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm z-10 ${
                  isDarkMode
                    ? "bg-black/50 text-white"
                    : "bg-white/50 text-gray-800"
                }`}
              >
                {currentImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Zoom level indicator */}
            <div
              className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm z-10 ${
                isDarkMode
                  ? "bg-black/50 text-white"
                  : "bg-white/50 text-gray-800"
              }`}
            >
              {Math.round(zoomLevel * 100)}%
            </div>

            {/* Image container */}
            <motion.div
              ref={imageRef}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              style={{
                cursor: zoomLevel > 1 ? "grab" : "default",
              }}
            >
              <motion.img
                src={images[currentImageIndex]}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain select-none"
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                  transition: isDragging ? "none" : "transform 0.2s ease",
                }}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
