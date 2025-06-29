
import { useState, useEffect } from "react";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { PerformanceCategory } from "@/types/gallery";

interface PerformanceSlotProps {
  performance: PerformanceCategory;
  index: number;
  onClick: (performance: PerformanceCategory) => void;
}

const PerformanceSlot = ({ performance, index, onClick }: PerformanceSlotProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    if (performance.images.length <= 1) {
      setImagesLoaded(true);
      return;
    }

    const imagePromises = performance.images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = image.thumbnail;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        console.log(`All images loaded for ${performance.name}`);
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error(`Error loading images for ${performance.name}:`, error);
        setImagesLoaded(true);
      });
  }, [performance.images, performance.name]);

  // Smooth cycling effect with proper crossfade
  useEffect(() => {
    if (!imagesLoaded || performance.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % performance.images.length);
    }, 4000); // 4 second cycle time

    return () => clearInterval(interval);
  }, [imagesLoaded, performance.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="performance-slot cursor-pointer group"
      onClick={() => onClick(performance)}
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        {/* Image container with smooth crossfade using slower CSS transitions */}
        <div className="relative w-full h-full bg-black">
          {performance.images.map((image, imageIndex) => (
            <img
              key={image.thumbnail}
              src={image.thumbnail}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ${
                imageIndex === currentImageIndex 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
              style={{
                transition: 'opacity 2.5s ease-in-out, transform 0.3s ease-in-out'
              }}
            />
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Image counter dots */}
        {performance.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex space-x-1">
            {performance.images.map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`w-2 h-2 rounded-full transition-all duration-2500 ${
                  dotIndex === currentImageIndex 
                    ? "bg-white scale-110" 
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Performance label - ensuring it's visible */}
        <div className="absolute bottom-4 right-4 text-right z-20">
          <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
            {performance.name}
          </h3>
          <p className="text-white/90 text-sm drop-shadow-md">
            {performance.images.length} {performance.images.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceSlot;
