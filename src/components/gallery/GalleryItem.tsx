
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { Play } from "lucide-react";
import { GalleryItem as GalleryItemType } from "@/types/gallery";

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onClick: (item: GalleryItemType) => void;
}

const GalleryItem = ({ item, index, onClick }: GalleryItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer ${
        item.orientation === "portrait" ? "sm:row-span-2" : ""
      }`}
      onClick={() => onClick(item)}
    >
      <div className="relative h-full">
        <BlurImage
          src={item.thumbnail}
          alt={item.title}
          aspectRatio={item.orientation === "portrait" ? "auto" : "auto"}
          objectFit="cover"
          className="h-full w-full"
        />
        {item.category === "videos" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 text-xs rounded">
          {item.category === "videos" ? "Video" : "Photo"}: {item.photographer}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
