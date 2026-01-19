
import React from 'react';
import { motion } from "@/lib/motion";
import BlurImage from "@/components/BlurImage";

const BioSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium">The Story</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6">
              A Decade of Dedication to the Art of Performance
            </h2>
            <p className="text-muted-foreground mb-6">
              From a young age, Hunter was captivated by the magic of live performance. He began his journey
              exploring various disciplines, from acrobatics to juggling, always seeking to push the boundaries
              of what's possible on stage.
            </p>
            <p className="text-muted-foreground mb-8">
              Over the past decade, Hunter has had the privilege of performing for audiences around the world,
              honing his skills and developing a unique style that blends technical precision with artistic expression.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <BlurImage 
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a6ca517?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Hunter Way performing" 
              aspectRatio="portrait" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
