
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaFeed from "@/components/SocialMediaFeed";

// Social media posts
const socialPosts = [
  {
    id: "yt1",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
    title: "Extreme Juggling Challenge - 7 Balls on a Unicycle!",
    likes: 15430,
    comments: 342,
    url: "https://youtube.com"
  },
  {
    id: "yt3",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1599904215055-716eb956d604?q=80&w=1974&auto=format&fit=crop",
    title: "Backstage Preparation - Getting Ready for the Big Show",
    likes: 9870,
    comments: 526,
    url: "https://youtube.com"
  },
  {
    id: "yt2",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1578377375341-c2e54cb62eac?q=80&w=1974&auto=format&fit=crop",
    title: "Fire Juggling Gone Wrong (but not really) - Corporate Show Highlights",
    likes: 8720,
    comments: 456,
    url: "https://youtube.com"
  }
];

const SocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-black/15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-medium">Follow Along</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Latest Videos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my latest performances on YouTube
          </p>
        </div>
        
        <SocialMediaFeed posts={socialPosts} />
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" rounded="pill" className="group border-2 hover:border-accent">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              See More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
