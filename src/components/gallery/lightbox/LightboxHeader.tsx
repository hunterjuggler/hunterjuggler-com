
import { Button } from "@/components/ui/button";
import { Grid, X } from "lucide-react";
import { PerformanceCategory } from "@/types/gallery";

interface LightboxHeaderProps {
  performance: PerformanceCategory;
  viewMode: 'grid' | 'single';
  currentImageIndex: number;
  onClose: () => void;
  onBackToGrid: () => void;
}

const LightboxHeader = ({ 
  performance, 
  viewMode, 
  currentImageIndex, 
  onClose, 
  onBackToGrid 
}: LightboxHeaderProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-1">{performance.name}</h2>
          {viewMode === 'grid' ? (
            <p className="text-white/80">{performance.images.length} photos</p>
          ) : (
            <p className="text-white/80">
              {currentImageIndex + 1} of {performance.images.length}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {viewMode === 'single' ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBackToGrid}
              className="text-white hover:bg-white/20"
            >
              <Grid className="h-6 w-6" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LightboxHeader;
