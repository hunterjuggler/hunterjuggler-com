
import { GalleryItem } from "@/types/gallery";
import { newUploads } from "./gallery/newUploads";
import { previousUploads } from "./gallery/previousUploads";
import { stockGallery } from "./gallery/stockGallery";
import { videos } from "./gallery/videos";

export const performances: GalleryItem[] = [
  ...newUploads,
  ...previousUploads,
  ...stockGallery,
  ...videos,
];
