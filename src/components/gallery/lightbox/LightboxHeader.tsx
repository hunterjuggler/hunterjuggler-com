
import { X, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {viewMode === 'single' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBackToGrid}
              className="text-white hover:bg-white/20"
            >
              <Grid className="h-5 w-5" />
            </Button>
          )}
          <div>
            <h2 className="text-lg font-semibold text-white">{performance.name}</h2>
            {performance.description && (
              <p className="text-sm text-white/70">{performance.description}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {viewMode === 'single' && (
            <span className="text-sm text-white/70">
              {currentImageIndex + 1} of {performance.images.length}
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LightboxHeader;
