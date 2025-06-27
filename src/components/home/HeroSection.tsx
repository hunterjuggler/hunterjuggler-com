
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a8b2440c-f48c-4e36-abfb-ca53b475c3ae.png" 
          alt="Hunter Way performing" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        />
        {/* Enhanced darker vignette overlay for depth and focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-32 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-8">
            Circus Entertainer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-shadow-md mb-10">Hunter Way</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12">Shows | Festivals | Events</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="gradient" rounded="pill" className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
              <Link to="/gallery">Explore Performances</Link>
            </Button>
            <Button asChild variant="outline" size="lg" rounded="pill" className="group border-2 hover:border-accent">
              <Link to="/booking">
                Book a Show
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
