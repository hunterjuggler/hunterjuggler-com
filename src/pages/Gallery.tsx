
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { performances } from "@/data/galleryData";
import { useImageOrientation } from "@/hooks/useImageOrientation";
import { GalleryItem } from "@/types/gallery";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import MediaModal from "@/components/gallery/MediaModal";

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const processedItems = useImageOrientation(performances);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="pt-20 w-full">
      <Helmet>
        <title>Performance Gallery | Hunter Way - Professional Comedy Juggler & Unicyclist</title>
        <meta name="description" content="Browse stunning performances by Hunter Way, professional comedy juggler and unicyclist. Available for hire for corporate events, festivals, and private celebrations." />
        <meta name="keywords" content="professional comedy juggler, unicyclist entertainer for events, circus performer for hire, festival entertainment, corporate event juggler" />
      </Helmet>
      
      <GalleryHero />
      <GalleryGrid items={processedItems} onItemClick={openModal} />
      <MediaModal 
        isOpen={isOpen} 
        onOpenChange={setIsOpen} 
        selectedItem={selectedItem} 
      />
    </div>
  );
};

export default GalleryPage;
