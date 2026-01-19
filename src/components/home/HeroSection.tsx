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
          src="/lovable-uploads/hero-crowd-performance.jpg"
          alt="Hunter Way performing in front of a large crowd"
          className="w-full h-full object-cover"
          style={{ 
            minHeight: '100vh',
            width: '100%',
            objectFit: 'cover',
            objectPosition: '75% center'
          }}
        />
        {/* Radial gradient overlay - brightens center while keeping dark edges */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/40 to-black/70"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-32 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-3xl"
        >
          <span 
            className="inline-block px-5 py-3 rounded-full text-2xl md:text-3xl font-display tracking-wider bg-black/50 text-[#ff4742] mb-8"
            style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
          >
            Circus Entertainer
          </span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-shadow-md mb-10">Hunter Way</h1>
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
