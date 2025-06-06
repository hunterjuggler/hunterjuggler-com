
import { useState, useEffect } from "react";
import BlurImage from "@/components/BlurImage";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PerformanceCategory } from "@/types/gallery";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface PerformanceLightboxProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  performance: PerformanceCategory | null;
}

const PerformanceLightbox = ({ isOpen, onOpenChange, performance }: PerformanceLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset to first image when performance changes
  useEffect(() => {
    if (performance) {
      console.log(`Opening lightbox for ${performance.name} with ${performance.images.length} images`);
      setCurrentImageIndex(0);
    }
  }, [performance]);

  if (!performance) return null;

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % performance.images.length;
    console.log(`Next image: ${newIndex}`);
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + performance.images.length) % performance.images.length;
    console.log(`Previous image: ${newIndex}`);
    setCurrentImageIndex(newIndex);
  };

  const currentImage = performance.images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[95vh] p-0 bg-black border-none">
        <VisuallyHidden>
          <DialogTitle>{performance.name}</DialogTitle>
        </VisuallyHidden>
        
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
            <div className="flex justify-between items-start">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-1">{performance.name}</h2>
                <p className="text-white/80">
                  {currentImageIndex + 1} of {performance.images.length}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Main image */}
          <div className="flex-1 flex items-center justify-center p-6 pt-20 pb-16">
            <BlurImage
              src={currentImage.fullImage || currentImage.thumbnail}
              alt={currentImage.title}
              objectFit="contain"
              className="max-h-full max-w-full"
              aspectRatio="auto"
            />
          </div>

          {/* Navigation arrows */}
          {performance.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-white">
              <h3 className="text-lg font-medium mb-1">{currentImage.title}</h3>
              <p className="text-white/80 text-sm">Photo: {currentImage.photographer}</p>
            </div>
            
            {/* Thumbnail strip */}
            {performance.images.length > 1 && (
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {performance.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => {
                      console.log(`Clicking thumbnail ${index}`);
                      setCurrentImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? "border-white" 
                        : "border-transparent opacity-60 hover:opacity-80"
                    }`}
                  >
                    <BlurImage
                      src={image.thumbnail}
                      alt={image.title}
                      objectFit="cover"
                      className="w-full h-full"
                      aspectRatio="auto"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PerformanceLightbox;
