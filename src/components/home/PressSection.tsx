
import React from 'react';
import BlurImage from "@/components/BlurImage";
import PressKit from "@/components/PressKit";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Press clippings - more subtle presentation
const pressClippings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop",
    title: "Hunter Way Amazes Crowd at International Festival",
    source: "Entertainment Weekly"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=2",
    title: "The Art of Balance: Interview with Hunter Way",
    source: "Performance Arts Magazine"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=3",
    title: "Top 10 Performers to Watch This Year",
    source: "The Daily Telegraph"
  }
];

const PressSection: React.FC = () => {
  return (
    <section className="py-10 bg-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <p className="text-sm text-accent/90 uppercase tracking-wider font-medium">Featured In</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {pressClippings.map((item) => (
                  <CarouselItem key={item.id} className="basis-1/1 sm:basis-1/2 md:basis-1/3">
                    <div className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/10 transition-colors">
                      <BlurImage
                        src={item.image}
                        alt={item.title}
                        aspectRatio="video"
                        className="w-full"
                        noBg={true}
                      />
                      <div className="p-3">
                        <p className="text-xs text-accent/90 font-medium mb-1">{item.source}</p>
                        <p className="text-sm line-clamp-2">{item.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="md:col-span-4">
            <PressKit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
