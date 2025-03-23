
import { useState, useEffect } from "react";
import BlurImage from "@/components/BlurImage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "@/lib/motion";
import { Play } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Gallery items - with photographer credits
const performances = [
  // New uploaded images at the beginning
  {
    id: 101,
    title: "Unicycle Street Performance with Jester Hat",
    category: "images",
    thumbnail: "/lovable-uploads/5396231e-fbc5-44f2-9cc1-5157bfdca64d.png",
    fullImage: "/lovable-uploads/5396231e-fbc5-44f2-9cc1-5157bfdca64d.png",
    photographer: "Street Performance Photography",
  },
  {
    id: 102,
    title: "Juggling Performance on Unicycle",
    category: "images",
    thumbnail: "/lovable-uploads/e02196d0-2ad1-4b44-98ef-31fceafec0bc.png",
    fullImage: "/lovable-uploads/e02196d0-2ad1-4b44-98ef-31fceafec0bc.png",
    photographer: "Street Performance Photography",
  },
  {
    id: 103,
    title: "Street Performer with Juggling Clubs",
    category: "images",
    thumbnail: "/lovable-uploads/760cb4d4-27b6-4a4c-95ed-08266e59a245.png",
    fullImage: "/lovable-uploads/760cb4d4-27b6-4a4c-95ed-08266e59a245.png",
    photographer: "Street Performance Photography",
  },
  {
    id: 104,
    title: "Interactive Unicycle Performance",
    category: "images",
    thumbnail: "/lovable-uploads/740ed31e-2009-4cb9-9ea8-2ecb320ce495.png",
    fullImage: "/lovable-uploads/740ed31e-2009-4cb9-9ea8-2ecb320ce495.png",
    photographer: "Street Performance Photography",
  },
  // Original gallery items
  {
    id: 1,
    title: "Aerial Silk Performance",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1564119923066-cb68c681ebd2?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1564119923066-cb68c681ebd2?q=80&w=1974&auto=format&fit=crop",
    photographer: "Alex Smith",
  },
  {
    id: 2,
    title: "Fire Dancing",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1599204606395-ede983886ce8?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1599204606395-ede983886ce8?q=80&w=1974&auto=format&fit=crop",
    photographer: "Maria Johnson",
  },
  {
    id: 3,
    title: "Juggling Act",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1522079185018-1766e5689e74?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1522079185018-1766e5689e74?q=80&w=1974&auto=format&fit=crop",
    photographer: "Chris Davis",
  },
  {
    id: 4,
    title: "Acrobatic Display",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1587219872855-8f3194ffc505?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1587219872855-8f3194ffc505?q=80&w=1974&auto=format&fit=crop",
    photographer: "Jamie Lee",
  },
  {
    id: 5,
    title: "Stage Performance",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1594285799155-d1d298e3df37?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1594285799155-d1d298e3df37?q=80&w=1974&auto=format&fit=crop",
    photographer: "Sarah Thompson",
  },
  {
    id: 6,
    title: "Character Work",
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1508921108053-9f757ead871c?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1508921108053-9f757ead871c?q=80&w=1974&auto=format&fit=crop",
    photographer: "Robert Chen",
  },
  // Adding placeholder entries for future expansion - these can be replaced with actual photos later
  // Note: We're preparing for 60+ photos as requested
  ...[...Array(54)].map((_, index) => ({
    id: 7 + index,
    title: `Performance ${7 + index}`,
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop",
    photographer: "Photographer TBD",
  })),
  {
    id: 61,
    title: "Fire and Light Show",
    category: "videos",
    thumbnail: "https://images.unsplash.com/photo-1446743050395-1a21eef78944?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/YE7VzlLtp-4",
    photographer: "Michael Wong",
  },
  {
    id: 62,
    title: "Juggling Performance",
    category: "videos",
    thumbnail: "https://images.unsplash.com/photo-1615264208436-5116830e25f7?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/YE7VzlLtp-4",
    photographer: "Emma Clark",
  },
  {
    id: 63,
    title: "Aerial Performance",
    category: "videos",
    thumbnail: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/YE7VzlLtp-4",
    photographer: "David Williams",
  },
];

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullImage?: string;
  videoUrl?: string;
  photographer: string;
  orientation?: 'portrait' | 'landscape';  // Add orientation property
}

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [processedItems, setProcessedItems] = useState<GalleryItem[]>([]);

  // Detect image orientation for all items
  useEffect(() => {
    const checkOrientation = async () => {
      const processed = await Promise.all(
        performances.map((item) => {
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
  }, []);

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
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Performance Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through a collection of images and videos showcasing performances from various 
              events, festivals, and venues around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Ensuring proper orientation display */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="mx-auto mb-10 flex justify-center">
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="images" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                {processedItems
                  .filter((item) => item.category === "images")
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer ${
                        item.orientation === "portrait" ? "sm:row-span-2" : ""
                      }`}
                      onClick={() => openModal(item)}
                    >
                      <div className="relative h-full">
                        <BlurImage
                          src={item.thumbnail}
                          alt={item.title}
                          aspectRatio={item.orientation === "portrait" ? "auto" : "auto"}
                          objectFit="contain"
                          className="h-full"
                          noBg={true}
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 text-xs rounded">
                          Photo: {item.photographer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedItems
                  .filter((item) => item.category === "videos")
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <div className="relative">
                        <BlurImage
                          src={item.thumbnail}
                          alt={item.title}
                          aspectRatio="video"
                          objectFit="contain"
                          noBg={true}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 text-xs rounded">
                          Video: {item.photographer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
    </div>
  );
};

export default GalleryPage;
