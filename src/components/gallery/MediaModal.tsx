
import BlurImage from "@/components/BlurImage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryItem } from "@/types/gallery";

interface MediaModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem: GalleryItem | null;
}

const MediaModal = ({ isOpen, onOpenChange, selectedItem }: MediaModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-1 bg-background overflow-hidden">
        {selectedItem && (
          <div>
            {selectedItem.category === "images" ? (
              <div className="p-1">
                <div className="max-h-[80vh] flex items-center justify-center">
                  <BlurImage
                    src={selectedItem.fullImage || selectedItem.thumbnail}
                    alt={selectedItem.title}
                    objectFit="contain"
                    className="max-h-[75vh] max-w-full rounded-lg"
                    aspectRatio="auto"
                    noBg={true}
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-lg font-medium">{selectedItem.title}</h3>
                  <p className="text-sm text-muted-foreground">Photo: {selectedItem.photographer}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-lg font-medium">{selectedItem.title}</h3>
                  <p className="text-sm text-muted-foreground">Video: {selectedItem.photographer}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MediaModal;
