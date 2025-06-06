
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
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (performance.images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Update next image index immediately
      const next = (currentImageIndex + 1) % performance.images.length;
      setNextImageIndex(next);
      
      // After fade duration, update current image
      setTimeout(() => {
        setCurrentImageIndex(next);
        setIsTransitioning(false);
      }, 800); // Slower fade duration
    }, 4000); // Slower cycle time

    return () => clearInterval(interval);
  }, [performance.images.length, currentImageIndex]);

  const currentImage = performance.images[currentImageIndex];
  const nextImage = performance.images[nextImageIndex];

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
        {/* Current image */}
        <div 
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <BlurImage
            src={currentImage.thumbnail}
            alt={currentImage.title}
            aspectRatio="auto"
            objectFit="cover"
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Next image (for smooth transition) */}
        {performance.images.length > 1 && (
          <div 
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <BlurImage
              src={nextImage.thumbnail}
              alt={nextImage.title}
              aspectRatio="auto"
              objectFit="cover"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Image counter dots */}
        {performance.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex space-x-1">
            {performance.images.map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dotIndex === currentImageIndex 
                    ? "bg-white scale-110" 
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Performance label */}
        <div className="absolute bottom-4 right-4 text-right">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {performance.name}
          </h3>
          <p className="text-white/80 text-sm">
            {performance.images.length} {performance.images.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceSlot;
