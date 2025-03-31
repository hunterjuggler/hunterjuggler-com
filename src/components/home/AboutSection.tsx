
import React from 'react';
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import FunIcon from "@/components/FunIcon";

const AboutSection: React.FC = () => {
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
            <span className="text-[#ff4742] font-medium">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              Bringing Art to Life Through Movement
            </h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in performing arts, I've dedicated my life to perfecting my craft
              and creating unforgettable experiences for audiences around the world.
            </p>
            <p className="text-muted-foreground mb-8">
              My performances combine technical precision with emotional storytelling,
              creating moments that resonate long after the show ends.
            </p>
            
            {/* Media mentions - Now with diamond icons */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">10 Million+ views - Youtube</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">As seen on BBC, Guardian, Dailymail</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FunIcon name="diamond" className="text-[#ff4742]" />
                </div>
                <p className="font-medium">Internationally performed over 1000 shows in 8 countries and counting</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <BlurImage src="https://images.unsplash.com/photo-1599904215055-716eb956d604?q=80&w=1974&auto=format&fit=crop" alt="Hunter Way performing" aspectRatio="portrait" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
