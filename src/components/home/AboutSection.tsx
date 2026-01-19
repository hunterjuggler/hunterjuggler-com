
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
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6">What I Do</h2>
            <p className="text-muted-foreground mb-6">
              I'm a high-skill circus entertainer with the energy of a golden retriever who got really good at juggling different things.
            </p>
            <p className="text-muted-foreground mb-6">
              With over two decades in circus arts and more than a decade performing professionally, my shows blend real technical skill with earnest, slightly ridiculous comedy. I'm not trying to be cool or intimidating. I'm the performer who's genuinely excited to be there, rooting for the audience as much as they're rooting for me.
            </p>
            <p className="text-muted-foreground mb-6">
              Expect award-winning juggling, big stunts, and a lot of smiling through the chaos. I lean into playful confidence, self-aware humor, and honest audience connection, the kind where people feel like they're part of the show, not just watching it.
            </p>
            <p className="text-muted-foreground mb-8">
              The result is high-energy entertainment that feels impressive without ever feeling distant, and funny without being mean, whether it's on the street or a theater stage.
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
