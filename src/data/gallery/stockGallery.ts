
import { GalleryItem } from "@/types/gallery";

export const stockGallery: GalleryItem[] = [
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
  // Placeholder entries for future expansion
  ...[...Array(54)].map((_, index) => ({
    id: 7 + index,
    title: `Performance ${7 + index}`,
    category: "images",
    thumbnail: "https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop",
    photographer: "Photographer TBD",
  })),
];
