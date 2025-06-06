
import PerformanceSlot from "./PerformanceSlot";
import { PerformanceCategory } from "@/types/gallery";

interface GalleryGridProps {
  performances: PerformanceCategory[];
  onPerformanceClick: (performance: PerformanceCategory) => void;
}

const GalleryGrid = ({ performances, onPerformanceClick }: GalleryGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Performance Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore different performances from various events and venues. Click on any performance to view the full photo collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <PerformanceSlot
              key={performance.id}
              performance={performance}
              index={index}
              onClick={onPerformanceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
