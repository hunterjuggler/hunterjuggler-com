
import BlurImage from "@/components/BlurImage";
import { PerformanceCategory, GalleryItem } from "@/types/gallery";

interface LightboxFooterProps {
  performance: PerformanceCategory;
  viewMode: 'grid' | 'single';
  currentImage?: GalleryItem;
  currentImageIndex: number;
  onImageSelect: (index: number) => void;
}

const LightboxFooter = ({ 
  performance, 
  viewMode, 
  currentImage, 
  currentImageIndex, 
  onImageSelect 
}: LightboxFooterProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
      {viewMode === 'grid' ? (
        // Grid view footer - show photographer credit
        <div className="text-white text-center">
          {performance.photographer && (
            <p className="text-white/80 text-sm">Photography: {performance.photographer}</p>
          )}
        </div>
      ) : (
        // Single view footer
        <div className="text-white">
          <h3 className="text-lg font-medium mb-1">{currentImage?.title}</h3>
          {performance.photographer && (
            <p className="text-white/80 text-sm">Photography: {performance.photographer}</p>
          )}
          
          {/* Thumbnail strip */}
          {performance.images.length > 1 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {performance.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => onImageSelect(index)}
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
      )}
    </div>
  );
};

export default LightboxFooter;
