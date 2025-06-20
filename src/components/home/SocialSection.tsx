
import React from 'react';
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaFeed from "@/components/SocialMediaFeed";

// Actual Instagram posts from @hunterjuggler
const socialPosts = [
  {
    id: "ig1",
    platform: "instagram" as const,
    thumbnail: "/lovable-uploads/db835459-55e7-4d4b-8d01-5efc4a256383.png",
    title: "Street Performance in Covent Garden - Amazing crowd interaction!",
    likes: 12500,
    comments: 285,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig2", 
    platform: "instagram" as const,
    thumbnail: "/lovable-uploads/e1726cd9-920f-4b9d-8d24-0761edb4001c.png",
    title: "Edinburgh Fringe Festival - Juggling on the Royal Mile",
    likes: 18200,
    comments: 432,
    url: "https://instagram.com/hunterjuggler"
  },
  {
    id: "ig3",
    platform: "instagram" as const,
    thumbnail: "https://images.unsplash.com/photo-1578377375341-c2e54cb62eac?q=80&w=1974&auto=format&fit=crop",
    title: "Behind the scenes prep for tonight's corporate show",
    likes: 9750,
    comments: 156,
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
