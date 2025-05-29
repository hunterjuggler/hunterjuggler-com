
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryItem from "./GalleryItem";
import { GalleryItem as GalleryItemType } from "@/types/gallery";

interface GalleryGridProps {
  items: GalleryItemType[];
  onItemClick: (item: GalleryItemType) => void;
}

const GalleryGrid = ({ items, onItemClick }: GalleryGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="images" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="images" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
              {items
                .filter((item) => item.category === "images")
                .map((item, index) => (
                  <GalleryItem
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={onItemClick}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items
                .filter((item) => item.category === "videos")
                .map((item, index) => (
                  <GalleryItem
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={onItemClick}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GalleryGrid;
