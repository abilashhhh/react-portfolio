// components/ImageGallery.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  RotateCw,
} from "lucide-react";

const ImageGallery = ({ images = [], title = "", isDarkMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);

  if (!images || images.length === 0) return null;

  // Reset transformations when image changes
  const resetTransformations = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    resetTransformations();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    resetTransformations();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setSelectedIndex(null);
    resetTransformations();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedIndex(null);
      resetTransformations();
    }
  };

  const handleThumbnailClick = (index) => {
    resetTransformations();
    setSelectedIndex(index);
  };

  // Zoom functionality
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    resetTransformations();
  };

  const handleRotate = (e) => {
    e.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  // Drag to pan when zoomed
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  // Download image
  const handleDownload = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(images[selectedIndex]);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}-image-${selectedIndex + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          handleClose(e);
          break;
        case "ArrowLeft":
          handlePrev(e);
          break;
        case "ArrowRight":
          handleNext(e);
          break;
        case "+":
        case "=":
          handleZoomIn(e);
          break;
        case "-":
          handleZoomOut(e);
          break;
        case "0":
          handleResetZoom(e);
          break;
        case "r":
          handleRotate(e);
          break;
        default:
          break;
      }
    },
    [selectedIndex, zoomLevel]
  );

  // Add keyboard event listener
  useState(() => {
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedIndex, handleKeyDown]);

  return (
    <div
      className={`rounded-2xl border backdrop-blur-sm overflow-hidden transition-all ${
        isDarkMode
          ? "bg-gray-800/40 border-gray-700/50 shadow-2xl"
          : "bg-white/80 border-gray-200/50 shadow-md"
      }`}
    >
      {/* Main Image - Larger Size */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <img
          src={images[0]}
          alt={`${title} main`}
          className="w-full h-80 md:h-96 object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
          onClick={() => handleThumbnailClick(0)}
        />
        <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-lg text-sm">
          View Gallery ({images.length})
        </div>
      </motion.div>

      {/* Thumbnails Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 p-4">
          {images.slice(1, 5).map((img, idx) => {
            const absoluteIndex = idx + 1;
            const isLastVisible = idx === 3 && images.length > 5;
            const remainingCount = images.length - 5;

            return (
              <motion.div
                key={idx}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleThumbnailClick(absoluteIndex)}
              >
                <img
                  src={img}
                  alt={`${title} thumbnail ${absoluteIndex}`}
                  className="w-full h-24 md:h-28 object-cover transition-all duration-300 group-hover:brightness-110"
                />
                {isLastVisible && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-sm font-semibold backdrop-blur-sm">
                    +{remainingCount}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Enhanced Lightbox / Carousel */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 backdrop-blur-lg ${
                isDarkMode ? "bg-black/95" : "bg-black/90"
              }`}
            />

            {/* Top Controls Bar */}
            <div className="absolute top-4 left-4 right-4 z-[10000] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isDarkMode
                      ? "bg-gray-800/90 text-white"
                      : "bg-white/90 text-gray-800"
                  }`}
                >
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Control Buttons */}
                <button
                  onClick={handleDownload}
                  className="p-3 text-white/90 hover:text-white transition-all bg-black/50 rounded-xl hover:bg-black/70 backdrop-blur-sm"
                  title="Download"
                >
                  <Download size={20} />
                </button>

                <button
                  onClick={handleResetZoom}
                  className="p-3 text-white/90 hover:text-white transition-all bg-black/50 rounded-xl hover:bg-black/70 backdrop-blur-sm"
                  title="Reset"
                >
                  <RotateCcw size={20} />
                </button>

                <button
                  onClick={handleClose}
                  className="p-3 text-white/90 hover:text-white transition-all bg-black/50 rounded-xl hover:bg-black/70 backdrop-blur-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-[10000] p-4 text-white/90 hover:text-white transition-all bg-black/50 rounded-xl hover:bg-black/70 backdrop-blur-sm transform hover:scale-110"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-[10000] p-4 text-white/90 hover:text-white transition-all bg-black/50 rounded-xl hover:bg-black/70 backdrop-blur-sm transform hover:scale-110"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[10000] flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-xl p-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className={`p-2 rounded-lg transition-all ${
                  zoomLevel <= 1
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </button>

              <span className="text-white text-sm font-medium min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 5}
                className={`p-2 rounded-lg transition-all ${
                  zoomLevel >= 5
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </button>

              <button
                onClick={handleRotate}
                className="p-2 text-white/90 hover:text-white rounded-lg transition-all hover:bg-white/20"
                title="Rotate"
              >
                <RotateCw size={20} />
              </button>
            </div>

            {/* Enhanced Image Container with Zoom and Drag */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative z-[9999] max-h-[85vh] max-w-[90vw] flex items-center justify-center cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <img
                ref={imageRef}
                src={images[selectedIndex]}
                alt={`${title} image ${selectedIndex + 1}`}
                className="max-h-full max-w-full object-contain select-none"
                style={{
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  transformOrigin: "center",
                  cursor: zoomLevel > 1 ? "grab" : "default",
                  ...(zoomLevel > 1 && {
                    position: "relative",
                    left: position.x,
                    top: position.y,
                  }),
                }}
                draggable={false}
              />
            </motion.div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-[10000]">
                <div className="flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl max-w-[80vw] overflow-x-auto">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-12 h-12 object-cover rounded-lg cursor-pointer transition-all border-2 ${
                        index === selectedIndex
                          ? "border-white scale-110"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThumbnailClick(index);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
