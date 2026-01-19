
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { performanceCategories } from "@/data/gallery/performanceCategories";
// import { videos } from "@/data/gallery/videos";
import { PerformanceCategory, GalleryItem } from "@/types/gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryItemComponent from "@/components/gallery/GalleryItem";
import PerformanceLightbox from "@/components/gallery/PerformanceLightbox";

const GalleryPage = () => {
  const [selectedPerformance, setSelectedPerformance] = useState<PerformanceCategory | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (performance: PerformanceCategory) => {
    setSelectedPerformance(performance);
    setIsLightboxOpen(true);
  };

  // const handleVideoClick = (video: GalleryItem) => {
  //   // Handle video click - could open in modal or redirect to video
  //   console.log("Video clicked:", video);
  // };

  return (
    <div className="pt-20 w-full">
      <Helmet>
        <title>Performance Gallery | Hunter Way - Professional Comedy Juggler & Unicyclist</title>
        <meta name="description" content="Browse stunning performances by Hunter Way, professional comedy juggler and unicyclist. Available for hire for corporate events, festivals, and private celebrations." />
        <meta name="keywords" content="professional comedy juggler, unicyclist entertainer for events, circus performer for hire, festival entertainment, corporate event juggler" />
      </Helmet>
      
      <GalleryHero />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Images Section - Videos tab hidden for now, uncomment Tabs below to re-enable */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Performance Categories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any category to view the full collection of images from that performance or event.
              </p>
            </div>
            <GalleryGrid performances={performanceCategories} onPerformanceClick={openLightbox} />
          </div>
          
          {/* VIDEOS TAB - Uncomment this entire Tabs section to re-enable videos
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="images" className="text-foreground">Images</TabsTrigger>
              <TabsTrigger value="videos" className="text-foreground">Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="images" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  Performance Categories
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Click on any category to view the full collection of images from that performance or event.
                </p>
              </div>
              <GalleryGrid performances={performanceCategories} onPerformanceClick={openLightbox} />
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
                  Performance Videos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Performance videos are coming soon! Check back later for highlights from various performances and events.
                </p>
              </div>
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="text-center p-8 bg-black/20 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Coming Soon</h3>
                  <p className="text-muted-foreground">Performance videos will be available here soon.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          */}
        </div>
      </section>
      
      <PerformanceLightbox 
        isOpen={isLightboxOpen} 
        onOpenChange={setIsLightboxOpen} 
        performance={selectedPerformance} 
      />
    </div>
  );
};

export default GalleryPage;
