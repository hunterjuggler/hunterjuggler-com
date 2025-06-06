
import PerformanceSlot from "./PerformanceSlot";
import { PerformanceCategory } from "@/types/gallery";

interface GalleryGridProps {
  performances: PerformanceCategory[];
  onPerformanceClick: (performance: PerformanceCategory) => void;
}

const GalleryGrid = ({ performances, onPerformanceClick }: GalleryGridProps) => {
  return (
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
  );
};

export default GalleryGrid;
