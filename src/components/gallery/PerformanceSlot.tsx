
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showNext, setShowNext] = useState(false);

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
        setImagesLoaded(true); // Still allow cycling even if some images fail
      });
  }, [performance.images, performance.name]);

  useEffect(() => {
    if (!imagesLoaded || performance.images.length <= 1) return;

    const interval = setInterval(() => {
      console.log(`Cycling images for ${performance.name}, current: ${currentImageIndex}`);
      
      // Start the crossfade
      setShowNext(true);
      
      // After the fade duration, update the indices
      setTimeout(() => {
        const newCurrentIndex = (currentImageIndex + 1) % performance.images.length;
        const newNextIndex = (newCurrentIndex + 1) % performance.images.length;
        
        setCurrentImageIndex(newCurrentIndex);
        setNextImageIndex(newNextIndex);
        setShowNext(false);
      }, 2000); // 2 second crossfade duration
      
    }, 8000); // 8 second total cycle time

    return () => clearInterval(interval);
  }, [imagesLoaded, performance.images.length, currentImageIndex, performance.name]);

  const currentImage = performance.images[currentImageIndex];
  const nextImage = performance.images[nextImageIndex % performance.images.length];

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
        {/* Current image - always visible when not transitioning */}
        <div 
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            showNext ? 'opacity-0' : 'opacity-100'
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
        
        {/* Next image - fades in during transition */}
        {performance.images.length > 1 && imagesLoaded && (
          <div 
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              showNext ? 'opacity-100' : 'opacity-0'
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
