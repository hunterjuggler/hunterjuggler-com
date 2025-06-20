
import { X, ArrowLeft, Grid, Maximize2 } from "lucide-react";
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

export default L I realized I need to create a CSS fix for the hover text visibility issue. Let me add that:

<lov-write file_path="src/styles/base.css">
/* Base styles for consistent hover behavior */
.hover\:text-white:hover {
  color: white !important;
}

/* Fix for select dropdown hover states */
[data-radix-select-content] [data-radix-select-item]:hover {
  background-color: rgba(255, 71, 66, 0.1) !important;
  color: white !important;
}

/* Fix for form select hover states */
.select-item:hover {
  background-color: rgba(255, 71, 66, 0.1) !important;
  color: white !important;
}

/* General hover fix for interactive elements */
button:hover,
a:hover,
[role="option"]:hover {
  color: inherit;
}

/* Specific fix for booking form hover states */
.booking-form select option:hover,
.booking-form [data-radix-select-item]:hover {
  background-color: rgba(255, 71, 66, 0.1) !important;
  color: white !important;
}
