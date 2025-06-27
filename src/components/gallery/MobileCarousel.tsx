
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import BlurImage from "@/components/BlurImage";
import { PerformanceCategory } from "@/types/gallery";

interface MobileCarouselProps {
  performance: PerformanceCategory;
  currentImageIndex: number;
  onImageChange: (index: number) => void;
}

const MobileCarousel = ({ performance, currentImageIndex, onImageChange }: MobileCarouselProps) => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent>
        {performance.images.map((image, index) => (
          <CarouselItem key={image.id}>
            <div className="p-1">
              <BlurImage
                src={image.fullImage || image.thumbnail}
                alt={image.title}
                className="w-full aspect-square object-cover rounded-lg"
                onClick={() => onImageChange(index)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MobileCarousel;
