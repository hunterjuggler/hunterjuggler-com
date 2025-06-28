
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

  // Smooth cycling effect with 1.5s fade duration
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
        {/* Image container with smooth crossfade */}
        <div className="relative w-full h-full bg-black">
          {performance.images.map((image, imageIndex) => (
            <div
              key={image.thumbnail}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                imageIndex === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <BlurImage
                src={image.thumbnail}
                alt={image.title}
                aspectRatio="auto"
                objectFit="cover"
                className="h-full w-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
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
                className={`w-2 h-2 rounded-full transition-all duration-1500 ${
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
