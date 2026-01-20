
import BlurImage from "@/components/BlurImage";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GalleryItem } from "@/types/gallery";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MediaModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem: GalleryItem | null;
}

const MediaModal = ({ isOpen, onOpenChange, selectedItem }: MediaModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-background overflow-hidden flex flex-col">
        <VisuallyHidden>
          <DialogTitle>{selectedItem?.title || "Gallery Item"}</DialogTitle>
        </VisuallyHidden>
        {selectedItem && (
          <>
            {selectedItem.category === "images" ? (
              <div className="flex-1 p-4 flex items-center justify-center min-h-0">
                <BlurImage
                  src={selectedItem.fullImage || selectedItem.thumbnail}
                  alt={selectedItem.title}
                  objectFit="contain"
                  className="max-h-[70vh] max-w-full rounded-lg"
                  aspectRatio="auto"
                />
              </div>
            ) : (
              <div className="flex-1 p-4">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
            <div className="p-4 border-t bg-background flex justify-between items-center flex-shrink-0">
              <h3 className="text-lg font-medium">{selectedItem.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedItem.category === "videos" ? "Video" : "Photo"}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MediaModal;
