
import React from 'react';
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaFeed from "@/components/SocialMediaFeed";

// Live Instagram posts from @hunterjuggler - Note: In a real implementation, 
// this would connect to Instagram's API to fetch live posts
const socialPosts = [
  {
    id: "ig_live_1",
    platform: "instagram" as const,
    thumbnail: "/lovable-uploads/35c17724-6cfa-43bb-ad74-15be052c7511.png",
    title: "Amazing crowd in the town square! Nothing beats that street performance energy 🎪✨ #StreetPerformance #Juggling",
    likes: 2450,
    comments: 87,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig_live_2", 
    platform: "instagram" as const,
    thumbnail: "/lovable-uploads/87ec8b89-db73-4902-b630-077f3c2cdfb1.png",
    title: "When the audience becomes part of the show! Love these interactive moments 🤹‍♂️❤️",
    likes: 3200,
    comments: 125,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig_live_3",
    platform: "instagram" as const,
    thumbnail: "/lovable-uploads/d471b964-5ae1-419f-a146-aa59678bbe97.png",
    title: "The giraffe unicycle finale always gets the biggest cheers! 🦒🚴‍♂️ What's your favorite circus act?",
    likes: 4100,
    comments: 203,
    url: "https://instagram.com/hunterjuggler"
  }
];

const SocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#ff4742] font-medium">Follow Along</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Latest from Instagram</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my latest performances and behind-the-scenes content @hunterjuggler
          </p>
        </div>
        
        <SocialMediaFeed posts={socialPosts} />
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" rounded="pill" className="group border-2 hover:border-[#ff4742]">
            <a 
              href="https://instagram.com/hunterjuggler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram size={16} className="text-[#ff4742]" />
              Follow @hunterjuggler <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#ff4742]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
