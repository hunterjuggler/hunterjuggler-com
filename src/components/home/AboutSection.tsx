
import React from 'react';
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import FunIcon from "@/components/FunIcon";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
          >
            <span className="text-[#ff4742] font-medium">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">What I Do</h2>
            <p className="text-muted-foreground mb-6">
              With over two decades of circus arts experience — and more than a decade performing professionally — I've dedicated my life to creating unforgettable live shows that wow audiences around the world.
            </p>
            <p className="text-muted-foreground mb-8">
              Blending award-winning juggling, daring stunts, big laughs, and audience interaction, my performances bring high-energy entertainment to festivals, corporate events, theaters, and street stages alike.
            </p>
            
            {/* Media mentions - Now with diamond icons */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">11M+ views on YouTube</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">As seen on BBC, Guardian, and more</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">1,000+ shows across 8 countries</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="rounded-2xl overflow-hidden"
          >
            <BlurImage 
              src="/lovable-uploads/caccdc20-e85d-443a-93d6-8500b3024c84.png" 
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

export default AboutSection;
