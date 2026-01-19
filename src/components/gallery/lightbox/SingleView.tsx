
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

  // Auto-advance removed - full image view is now static until user manually navigates

  return (
    <div className="flex items-center justify-center w-full h-full bg-black relative min-h-[calc(100vh-120px)]">
      {/* Main image container with crossfade transition */}
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Render all images with slower crossfade transitions */}
          {performance.images.map((image, index) => (
            <img
              key={image.thumbnail}
              src={image.fullImage || image.thumbnail}
              alt={image.title}
              className={`absolute max-w-full max-h-[95vh] w-auto h-auto object-contain transition-opacity duration-[2500ms] ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                objectFit: 'contain'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation arrows */}
      {performance.images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-20"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-20"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}
    </div>
  );
};

export default SingleView;
