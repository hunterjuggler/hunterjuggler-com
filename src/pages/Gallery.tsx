import { useState, useEffect } from "react";
import BlurImage from "@/components/BlurImage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "@/lib/motion";
import { Play } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Gallery items - with photographer credits
const performances = [
  // New uploaded images
  {
    id: 201,
    title: "Hunter Way Street Performance 1",
    category: "images",
    thumbnail: "/lovable-uploads/24e36c6c-0987-4e85-8b14-b6090b5bad77.png",
    fullImage: "/lovable-uploads/24e36c6c-0987-4e85-8b14-b6090b5bad77.png",
    photographer: "Professional Photography",
  },
  {
    id: 202,
    title: "Hunter Way Street Performance 2",
    category: "images",
    thumbnail: "/lovable-uploads/258c3e8a-bbe9-4d36-88b3-e5e73ce46ad5.png",
    fullImage: "/lovable-uploads/258c3e8a-bbe9-4d36-88b3-e5e73ce46ad5.png",
    photographer: "Professional Photography",
  },
  {
    id: 203,
    title: "Hunter Way Street Performance 3",
    category: "images",
    thumbnail: "/lovable-uploads/2df3a8fe-ee22-41e6-8afc-71c9acec0ad0.png",
    fullImage: "/lovable-uploads/2df3a8fe-ee22-41e6-8afc-71c9acec0ad0.png",
    photographer: "Professional Photography",
  },
  {
    id: 204,
    title: "Hunter Way Street Performance 4",
    category: "images",
    thumbnail: "/lovable-uploads/3a1ea24d-af62-4e74-b0ea-cb6de967ea96.png",
    fullImage: "/lovable-uploads/3a1ea24d-af62-4e74-b0ea-cb6de967ea96.png",
    photographer: "Professional Photography",
  },
  {
    id: 205,
    title: "Hunter Way Street Performance 5",
    category: "images",
    thumbnail: "/lovable-uploads/3a68a825-cf68-4ad7-a55b-db8ba37b2a8f.png",
    fullImage: "/lovable-uploads/3a68a825-cf68-4ad7-a55b-db8ba37b2a8f.png",
    photographer: "Professional Photography",
  },
  {
    id: 206,
    title: "Hunter Way Street Performance 6",
    category: "images",
    thumbnail: "/lovable-uploads/4b9b0648-ed09-4c20-8f60-48c98a3b7e25.png",
    fullImage: "/lovable-uploads/4b9b0648-ed09-4c20-8f60-48c98a3b7e25.png",
    photographer: "Professional Photography",
  },
  {
    id: 207,
    title: "Hunter Way Street Performance 7",
    category: "images",
    thumbnail: "/lovable-uploads/6062e5ba-6f54-4e96-bb6a-7ab2b1b5b9b7.png",
    fullImage: "/lovable-uploads/6062e5ba-6f54-4e96-bb6a-7ab2b1b5b9b7.png",
    photographer: "Professional Photography",
  },
  {
    id: 208,
    title: "Hunter Way Street Performance 8",
    category: "images",
    thumbnail: "/lovable-uploads/68b63ed7-5d96-4ad7-b0d7-7398b1dd7efe.png",
    fullImage: "/lovable-uploads/68b63ed7-5d96-4ad7-b0d7-7398b1dd7efe.png",
    photographer: "Professional Photography",
  },
  {
    id: 209,
    title: "Hunter Way Street Performance 9",
    category: "images",
    thumbnail: "/lovable-uploads/71b80aef-3f8b-4a26-82ba-b2c6de69d79c.png",
    fullImage: "/lovable-uploads/71b80aef-3f8b-4a26-82ba-b2c6de69d79c.png",
    photographer: "Professional Photography",
  },
  {
    id: 210,
    title: "Hunter Way Street Performance 10",
    category: "images",
    thumbnail: "/lovable-uploads/7bb1bdd1-6b11-4c65-a1a8-e994f63b5bda.png",
    fullImage: "/lovable-uploads/7bb1bdd1-6b11-4c65-a1a8-e994f63b5bda.png",
    photographer: "Professional Photography",
  },
  {
    id: 211,
    title: "Hunter Way Street Performance 11",
    category: "images",
    thumbnail: "/lovable-uploads/7da92f1b-e73c-4eef-b59f-1a40becc7d5c.png",
    fullImage: "/lovable-uploads/7da92f1b-e73c-4eef-b59f-1a40becc7d5c.png",
    photographer: "Professional Photography",
  },
  {
    id: 212,
    title: "Hunter Way Street Performance 12",
    category: "images",
    thumbnail: "/lovable-uploads/82b07c64-4b2e-4b84-a1fd-aaaf9a85bab9.png",
    fullImage: "/lovable-uploads/82b07c64-4b2e-4b84-a1fd-aaaf9a85bab9.png",
    photographer: "Professional Photography",
  },
  {
    id: 213,
    title: "Hunter Way Street Performance 13",
    category: "images",
    thumbnail: "/lovable-uploads/87c6bb01-e6dd-41ea-9c4c-1e7b24f53e70.png",
    fullImage: "/lovable-uploads/87c6bb01-e6dd-41ea-9c4c-1e7b24f53e70.png",
    photographer: "Professional Photography",
  },
  {
    id: 214,
    title: "Hunter Way Street Performance 14",
    category: "images",
    thumbnail: "/lovable-uploads/8e029edf-fa66-4577-ae99-8eceb9f7c1c9.png",
    fullImage: "/lovable-uploads/8e029edf-fa66-4577-ae99-8eceb9f7c1c9.png",
    photographer: "Professional Photography",
  },
  {
    id: 215,
    title: "Hunter Way Street Performance 15",
    category: "images",
    thumbnail: "/lovable-uploads/92b94c1a-7f7b-453c-8cd3-c20b51ad5b22.png",
    fullImage: "/lovable-uploads/92b94c1a-7f7b-453c-8cd3-c20b51ad5b22.png",
    photographer: "Professional Photography",
  },
  {
    id: 216,
    title: "Hunter Way Street Performance 16",
    category: "images",
    thumbnail: "/lovable-uploads/9a88b8c5-b0c6-4a5e-9b01-83ad58b7ae1b.png",
    fullImage: "/lovable-uploads/9a88b8c5-b0c6-4a5e-9b01-83ad58b7ae1b.png",
    photographer: "Professional Photography",
  },
  {
    id: 217,
    title: "Hunter Way Street Performance 17",
    category: "images",
    thumbnail: "/lovable-uploads/a5bcfb8a-1e4e-4a7f-8394-e6e3eab1ebef.png",
    fullImage: "/lovable-uploads/a5bcfb8a-1e4e-4a7f-8394-e6e3eab1ebef.png",
    photographer: "Professional Photography",
  },
  {
    id: 218,
    title: "Hunter Way Street Performance 18",
    category: "images",
    thumbnail: "/lovable-uploads/a982f728-47f0-4eb5-a623-ca8a03c31e91.png",
    fullImage: "/lovable-uploads/a982f728-47f0-4eb5-a623-ca8a03c31e91.png",
    photographer: "Professional Photography",
  },
  {
    id: 219,
    title: "Hunter Way Street Performance 19",
    category: "images",
    thumbnail: "/lovable-uploads/be75dc89-b1f6-40d9-8c47-e04c3cfcbf5a.png",
    fullImage: "/lovable-uploads/be75dc89-b1f6-40d9-8c47-e04c3cfcbf5a.png",
    photographer: "Professional Photography",
  },
  {
    id: 220,
    title: "Hunter Way Street Performance 20",
    category: "images",
    thumbnail: "/lovable-uploads/c09e37f3-9325-441e-b25e-b1b1c9ae5b36.png",
    fullImage: "/lovable-uploads/c09e37f3-9325-441e-b25e-b1b1c9ae5b36.png",
    photographer: "Professional Photography",
  },
  {
    id: 221,
    title: "Hunter Way Street Performance 21",
    category: "images",
    thumbnail: "/lovable-uploads/c28d5b9e-68be-4b64-a2de-d73e86b24399.png",
    fullImage: "/lovable-uploads/c28d5b9e-68be-4b64-a2de-d73e86b24399.png",
    photographer: "Professional Photography",
  },
  {
    id: 222,
    title: "Hunter Way Street Performance 22",
    category: "images",
    thumbnail: "/lovable-uploads/c3b18c7a-2aca-479e-a9bd-e3f3c3b00e8e.png",
    fullImage: "/lovable-uploads/c3b18c7a-2aca-479e-a9bd-e3f3c3b00e8e.png",
    photographer: "Professional Photography",
  },
  {
    id: 223,
    title: "Hunter Way Street Performance 23",
    category: "images",
    thumbnail: "/lovable-uploads/c73e1fca-c7ac-416a-9088-4a5b10090a51.png",
    fullImage: "/lovable-uploads/c73e1fca-c7ac-416a-9088-4a5b10090a51.png",
    photographer: "Professional Photography",
  },
  {
    id: 224,
    title: "Hunter Way Street Performance 24",
    category: "images",
    thumbnail: "/lovable-uploads/c8e2b8cb-b6f0-43e4-a64b-83b9a7b38fa7.png",
    fullImage: "/lovable-uploads/c8e2b8cb-b6f0-43e4-a64b-83b9a7b38fa7.png",
    photographer: "Professional Photography",
  },
  {
    id: 225,
    title: "Hunter Way Street Performance 25",
    category: "images",
    thumbnail: "/lovable-uploads/ca6d41f8-6c68-4d4a-8daa-bc0b8b2eafc3.png",
    fullImage: "/lovable-uploads/ca6d41f8-6c68-4d4a-8daa-bc0b8b2eafc3.png",
    photographer: "Professional Photography",
  },
  {
    id: 226,
    title: "Hunter Way Street Performance 26",
    category: "images",
    thumbnail: "/lovable-uploads/d0fc8b0d-b0f9-43a5-a8ea-6ac66b2a6577.png",
    fullImage: "/lovable-uploads/d0fc8b0d-b0f9-43a5-a8ea-6ac66b2a6577.png",
    photographer: "Professional Photography",
  },
  {
    id: 227,
    title: "Hunter Way Street Performance 27",
    category: "images",
    thumbnail: "/lovable-uploads/d1fd75a9-26c4-47a1-89b3-c9c8a983b0da.png",
    fullImage: "/lovable-uploads/d1fd75a9-26c4-47a1-89b3-c9c8a983b0da.png",
    photographer: "Professional Photography",
  },
  {
    id: 228,
    title: "Hunter Way Street Performance 28",
    category: "images",
    thumbnail: "/lovable-uploads/da52e0e7-40d9-4d26-a9ee-6c0cd23db05b.png",
    fullImage: "/lovable-uploads/da52e0e7-40d9-4d26-a9ee-6c0cd23db05b.png",
    photographer: "Professional Photography",
  },
  {
    id: 229,
    title: "Hunter Way Street Performance 29",
    category: "images",
    thumbnail: "/lovable-uploads/db4b1af7-de2f-4f67-8ab1-dd8c20aa6ad1.png",
    fullImage: "/lovable-uploads/db4b1af7-de2f-4f67-8ab1-dd8c20aa6ad1.png",
    photographer: "Professional Photography",
  },
  {
    id: 230,
    title: "Hunter Way Street Performance 30",
    category: "images",
    thumbnail: "/lovable-uploads/def3a8cf-b04a-44c9-8b10-5e57dd6fec35.png",
    fullImage: "/lovable-uploads/def3a8cf-b04a-44c9-8b10-5e57dd6fec35.png",
    photographer: "Professional Photography",
  },
  {
    id: 231,
    title: "Hunter Way Street Performance 31",
    category: "images",
    thumbnail: "/lovable-uploads/e6ed1eff-5c12-4b8a-b97b-d5a94b99b5b8.png",
    fullImage: "/lovable-uploads/e6ed1eff-5c12-4b8a-b97b-d5a94b99b5b8.png",
    photographer: "Professional Photography",
  },
  {
    id: 232,
    title: "Hunter Way Street Performance 32",
    category: "images",
    thumbnail: "/lovable-uploads/ebda5e47-f77c-42e9-ac40-d5a6a9e2ad26.png",
    fullImage: "/lovable-uploads/ebda5e47-f77c-42e9-ac40-d5a6a9e2ad26.png",
    photographer: "Professional Photography",
  },
  {
    id: 233,
    title: "Hunter Way Street Performance 33",
    category: "images",
    thumbnail: "/lovable-uploads/f2f0c966-0b5a-47f7-a96c-b2e7ba1af85c.png",
    fullImage: "/lovable-uploads/f2f0c966-0b5a-47f7-a96c-b2e7ba1af85c.png",
    photographer: "Professional Photography",
  },
  {
    id: 234,
    title: "Hunter Way Street Performance 34",
    category: "images",
    thumbnail: "/lovable-uploads/f3b38fe6-c7e9-4b6c-a9b0-e7b3a8d1c0e7.png",
    fullImage: "/lovable-uploads/f3b38fe6-c7e9-4b6c-a9b0-e7b3a8d1c0e7.png",
    photographer: "Professional Photography",
  },
  {
    id: 235,
    title: "Hunter Way Street Performance 35",
    category: "images",
    thumbnail: "/lovable-uploads/f69e0c5b-8b39-4e8b-a7d8-d5a94b99b5b8.png",
    fullImage: "/lovable-uploads/f69e0c5b-8b39-4e8b-a7d8-d5a94b99b5b8.png",
    photographer: "Professional Photography",
  },
  {
    id: 236,
    title: "Hunter Way Street Performance 36",
    category: "images",
    thumbnail: "/lovable-uploads/f6b0b7e3-5e9b-4a5e-8b7d-d5a94b99b5b8.png",
    fullImage: "/lovable-uploads/f6b0b7e3-5e9b-4a5e-8b7d-d5a94b99b5b8.png",
    photographer: "Professional Photography",
  },
  {
    id: 237,
    title: "Hunter Way Street Performance 37",
    category: "images",
    thumbnail: "/lovable-uploads/fd15e2e1-0df1-46da-8f89-a7f2b4dcdc8b.png",
    fullImage: "/lovable-uploads/fd15e2e1-0df1-46da-8f89-a7f2b4dcdc8b.png",
    photographer: "Professional Photography",
  },
  // Previously uploaded images
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

// ... keep existing code (interface definition and the rest of the component)
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
