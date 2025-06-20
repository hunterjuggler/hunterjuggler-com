
import React from 'react';
import BlurImage from "@/components/BlurImage";
import PressKit from "@/components/PressKit";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Press clippings from uploaded images
const pressClippings = [
  {
    id: 1,
    image: "/lovable-uploads/38c30289-7a18-46a8-bdd8-909e77dac713.png",
    title: "Zirkus - Artisten performen im Schlossgarten",
    source: "Freiburger Nachrichten"
  },
  {
    id: 2,
    image: "/lovable-uploads/3bd9e9d4-9c08-4a9f-b3cf-339012b2acc9.png",
    title: "Marktredwitz – bunt und wild",
    source: "Marktredwitz Local News"
  },
  {
    id: 3,
    image: "/lovable-uploads/af922522-4713-4ef0-b964-863d8e75ba0e.png",
    title: "Juggling axes on fire and riding a large unicycle",
    source: "BBC Scotland"
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
                    <div className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/10 transition-colors integrated-image-container">
                      <BlurImage
                        src={item.image}
                        alt={item.title}
                        aspectRatio="video"
                        className="w-full integrated-image"
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
