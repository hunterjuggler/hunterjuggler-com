
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PerformanceCategory } from "@/types/gallery";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LightboxHeader from "./lightbox/LightboxHeader";
import GridView from "./lightbox/GridView";
import SingleView from "./lightbox/SingleView";
import LightboxFooter from "./lightbox/LightboxFooter";

interface PerformanceLightboxProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  performance: PerformanceCategory | null;
}

const PerformanceLightbox = ({ isOpen, onOpenChange, performance }: PerformanceLightboxProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset when performance changes
  useEffect(() => {
    if (performance) {
      console.log(`Opening lightbox for ${performance.name} with ${performance.images.length} images`);
      setViewMode('grid');
      setCurrentImageIndex(0);
    }
  }, [performance]);

  // Navigation functions
  const nextImage = useCallback(() => {
    if (!performance) return;
    const newIndex = (currentImageIndex + 1) % performance.images.length;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, performance]);

  const prevImage = useCallback(() => {
    if (!performance) return;
    const newIndex = (currentImageIndex - 1 + performance.images.length) % performance.images.length;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, performance]);

  const openSingleView = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setViewMode('single');
  }, []);

  const backToGrid = useCallback(() => {
    setViewMode('grid');
  }, []);

  const selectImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen || !performance) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (viewMode === 'single') {
            prevImage();
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (viewMode === 'single') {
            nextImage();
          }
          break;
        case 'Escape':
          event.preventDefault();
          if (viewMode === 'single') {
            backToGrid();
          } else {
            onOpenChange(false);
          }
          break;
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, viewMode, performance, nextImage, prevImage, backToGrid, onOpenChange]);

  if (!performance) return null;

  const currentImage = performance.images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none p-0 bg-black border-none [&>button]:hidden overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{performance.name}</DialogTitle>
        </VisuallyHidden>
        
        <div className="relative w-full h-full flex flex-col">
          <LightboxHeader
            performance={performance}
            viewMode={viewMode}
            currentImageIndex={currentImageIndex}
            onClose={() => onOpenChange(false)}
            onBackToGrid={backToGrid}
          />

          {/* Content - Maximized for fullscreen viewing */}
          <div className="flex-1 pt-16 pb-16 min-h-0 overflow-y-auto">
            {viewMode === 'grid' ? (
              <div className="p-4">
                <GridView 
                  performance={performance} 
                  onImageClick={openSingleView} 
                />
              </div>
            ) : (
              <SingleView
                performance={performance}
                currentImage={currentImage}
                currentImageIndex={currentImageIndex}
                onNext={nextImage}
                onPrev={prevImage}
                onImageSelect={selectImage}
              />
            )}
          </div>

          <LightboxFooter
            performance={performance}
            viewMode={viewMode}
            currentImage={currentImage}
            currentImageIndex={currentImageIndex}
            onImageSelect={selectImage}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PerformanceLightbox;
