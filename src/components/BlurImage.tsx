
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  noBg?: boolean;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
  auto: 'aspect-auto'
};

const BlurImage = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'auto',
  objectFit = 'cover',
  noBg = false,
  ...props 
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
  }, [src]);

  return (
    <div className={cn(
      'overflow-hidden relative', 
      aspectRatioClasses[aspectRatio],
      className
    )}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' ? 'object-cover' : 
          objectFit === 'contain' ? 'object-contain' : 
          objectFit === 'fill' ? 'object-fill' : 
          objectFit === 'none' ? 'object-none' : 'object-scale-down',
          noBg ? '' : 'bg-black/10'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
        {...props}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <p className="text-sm text-muted-foreground">Failed to load image</p>
        </div>
      )}
    </div>
  );
};

export default BlurImage;
