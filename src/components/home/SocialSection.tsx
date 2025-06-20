
import React from 'react';
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaFeed from "@/components/SocialMediaFeed";

// Social media posts - now connecting to Instagram
const socialPosts = [
  {
    id: "ig1",
    platform: "instagram" as const,
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
    title: "Extreme Juggling Challenge - 7 Balls on a Unicycle!",
    likes: 15430,
    comments: 342,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig2",
    platform: "instagram" as const,
    thumbnail: "https://images.unsplash.com/photo-1599904215055-716eb956d604?q=80&w=1974&auto=format&fit=crop",
    title: "Backstage Preparation - Getting Ready for the Big Show",
    likes: 9870,
    comments: 526,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig3",
    platform: "instagram" as const,
    thumbnail: "https://images.unsplash.com/photo-1578377375341-c2e54cb62eac?q=80&w=1974&auto=format&fit=crop",
    title: "Fire Juggling Gone Wrong (but not really) - Corporate Show Highlights",
    likes: 8720,
    comments: 456,
    url: "https://instagram.com/hunterjuggler"
  }
];

const SocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#ff4742] font-medium">Follow Along</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Latest Videos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my latest performances on Instagram
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
              See More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#ff4742]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
