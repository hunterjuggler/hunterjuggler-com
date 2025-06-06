
import BlurImage from "@/components/BlurImage";
import { PerformanceCategory } from "@/types/gallery";

interface GridViewProps {
  performance: PerformanceCategory;
  onImageClick: (index: number) => void;
}

const GridView = ({ performance, onImageClick }: GridViewProps) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {performance.images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => onImageClick(index)}
            className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
          >
            <BlurImage
              src={image.thumbnail}
              alt={image.title}
              objectFit="cover"
              className="w-full h-full"
              aspectRatio="square"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GridView;
