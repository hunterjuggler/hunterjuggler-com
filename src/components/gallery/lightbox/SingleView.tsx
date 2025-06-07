
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PerformanceCategory, GalleryItem } from "@/types/gallery";

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
  return (
    <div className="flex items-center justify-center h-full w-full px-6 bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
        <BlurImage
          src={currentImage.fullImage || currentImage.thumbnail}
          alt={currentImage.title}
          objectFit="contain"
          className="max-h-full max-w-full w-auto h-auto"
          aspectRatio="auto"
          noBg={true}
        />
      </div>
      
      {/* Navigation arrows */}
      {performance.images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}
    </div>
  );
};

export default SingleView;
