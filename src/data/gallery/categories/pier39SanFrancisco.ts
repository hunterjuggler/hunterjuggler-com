
import { PerformanceCategory } from "@/types/gallery";

export const pier39SanFrancisco: PerformanceCategory = {
  id: 11,
  name: "Pier 39, San Francisco",
  description: "Street performances at the iconic Pier 39 on San Francisco's waterfront, featuring juggling, basketball tricks, and crowd interaction.",
  coverImage: "/lovable-uploads/pier39-sf-03.jpg",
  images: [
    {
      id: 1101,
      title: "Stage Setup at Pier 39",
      category: "images",
      thumbnail: "/lovable-uploads/pier39-sf-01.jpg",
      fullImage: "/lovable-uploads/pier39-sf-01.jpg",
      orientation: "landscape" as const
    },
    {
      id: 1102,
      title: "Basketball Juggling",
      category: "images",
      thumbnail: "/lovable-uploads/pier39-sf-02.jpg",
      fullImage: "/lovable-uploads/pier39-sf-02.jpg",
      orientation: "landscape" as const
    },
    {
      id: 1103,
      title: "Basketball Spin",
      category: "images",
      thumbnail: "/lovable-uploads/pier39-sf-03.jpg",
      fullImage: "/lovable-uploads/pier39-sf-03.jpg",
      orientation: "landscape" as const
    },
    {
      id: 1104,
      title: "Stacked Basketball Balance",
      category: "images",
      thumbnail: "/lovable-uploads/pier39-sf-04.jpg",
      fullImage: "/lovable-uploads/pier39-sf-04.jpg",
      orientation: "landscape" as const
    },
    {
      id: 1105,
      title: "Crowd Interaction",
      category: "images",
      thumbnail: "/lovable-uploads/pier39-sf-05.jpg",
      fullImage: "/lovable-uploads/pier39-sf-05.jpg",
      orientation: "landscape" as const
    }
  ]
};
