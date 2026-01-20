
import React from 'react';
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramEmbed from "./InstagramEmbed";

const SocialSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      {/* Header with container */}
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <span className="text-[#ED1C24] font-medium">Follow Along</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 mb-3">Latest from Instagram</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Check out Hunter's latest performances, tricks, and behind-the-scenes content @hunterjuggler</p>
        </div>
      </div>
      
      {/* Full-width Instagram embed */}
      <div className="w-full">
        <InstagramEmbed />
      </div>
      
      {/* Footer with container */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" rounded="pill" className="group border-2 hover:border-[#ED1C24]">
            <a href="https://instagram.com/hunterjuggler" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram size={16} className="text-[#ED1C24]" />
              Follow @hunterjuggler <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#ED1C24]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
