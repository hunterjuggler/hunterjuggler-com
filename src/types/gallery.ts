
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullImage?: string;
  videoUrl?: string;
  photographer: string;
  orientation?: 'portrait' | 'landscape';
}
