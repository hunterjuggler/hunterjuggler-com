
import { useState, useEffect } from "react";
import { GalleryItem } from "@/types/gallery";

export const useImageOrientation = (items: GalleryItem[]) => {
  const [processedItems, setProcessedItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const checkOrientation = async () => {
      const processed = await Promise.all(
        items.map((item) => {
          return new Promise<GalleryItem>((resolve) => {
            if (item.category === "images") {
              const img = new Image();
              img.onload = () => {
                const isPortrait = img.height > img.width;
                resolve({
                  ...item,
                  orientation: isPortrait ? "portrait" : "landscape"
                });
              };
              img.onerror = () => {
                resolve({
                  ...item,
                  orientation: "landscape" // Default to landscape on error
                });
              };
              img.src = item.thumbnail;
            } else {
              resolve({
                ...item,
                orientation: "landscape" // Videos default to landscape
              });
            }
          });
        })
      );
      setProcessedItems(processed);
    };

    checkOrientation();
  }, [items]);

  return processedItems;
};
