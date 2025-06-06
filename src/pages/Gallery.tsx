
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { performanceCategories } from "@/data/gallery/performanceCategories";
import { PerformanceCategory } from "@/types/gallery";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import PerformanceLightbox from "@/components/gallery/PerformanceLightbox";

const GalleryPage = () => {
  const [selectedPerformance, setSelectedPerformance] = useState<PerformanceCategory | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (performance: PerformanceCategory) => {
    setSelectedPerformance(performance);
    setIsLightboxOpen(true);
  };

  return (
    <div className="pt-20 w-full">
      <Helmet>
        <title>Performance Gallery | Hunter Way - Professional Comedy Juggler & Unicyclist</title>
        <meta name="description" content="Browse stunning performances by Hunter Way, professional comedy juggler and unicyclist. Available for hire for corporate events, festivals, and private celebrations." />
        <meta name="keywords" content="professional comedy juggler, unicyclist entertainer for events, circus performer for hire, festival entertainment, corporate event juggler" />
      </Helmet>
      
      <GalleryHero />
      <GalleryGrid 
        performances={performanceCategories} 
        onPerformanceClick={openLightbox} 
      />
      <PerformanceLightbox 
        isOpen={isLightboxOpen} 
        onOpenChange={setIsLightboxOpen} 
        performance={selectedPerformance} 
      />
    </div>
  );
};

export default GalleryPage;
