
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullImage?: string;
  videoUrl?: string;
  photographer?: string;
  orientation?: 'portrait' | 'landscape';
}

export interface PerformanceCategory {
  id: number;
  name: string;
  description: string;
  images: GalleryItem[];
  coverImage: string;
  photographer?: string;
}
