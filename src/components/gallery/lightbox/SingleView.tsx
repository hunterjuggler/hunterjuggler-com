
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PerformanceCategory, GalleryItem } from "@/types/gallery";
import { useState, useEffect } from "react";

interface SingleViewProps {
  performance: PerformanceCategory;
  currentImage: GalleryItem;
  currentImageIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onImageSelect: (index: number) => void;
}

const SingleView = ({ 
  performance, 
  currentImage, 
  currentImageIndex, 
  onNext, 
  onPrev, 
  onImageSelect 
}: SingleViewProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance images with instant transitions
    const interval = setInterval(() => {
      if (performance.images.length <= 1) return;
      
      const nextIndex = (currentImageIndex + 1) % performance.images.length;
      setNextImageIndex(nextIndex);
      setIsTransitioning(true);
      
      // Instant transition
      setTimeout(() => {
        onNext();
        setIsTransitioning(false);
      }, 0);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, onNext, performance.images.length]);

  const nextImage = performance.images[nextImageIndex] || currentImage;

  return (
    <div className="flex items-center justify-center w-full h-full bg-black relative min-h-[calc(100vh-120px)]">
      {/* Main image container with instant transition */}
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Current image */}
          <img
            src={currentImage.fullImage || currentImage.thumbnail}
            alt={currentImage.title}
            className="max-w-full max-h-[95vh] w-auto h-auto object-contain"
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
      
      {/* Navigation arrows */}
      {performance.images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}
    </div>
  );
};

export default SingleView;
