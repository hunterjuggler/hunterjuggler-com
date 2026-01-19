
import React from 'react';
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <BlurImage src="https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Hunter Way performing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-20 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-shadow-md mb-6">About Hunter</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">A brief look into Hunter's journey, skills, and passion for performance arts.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
