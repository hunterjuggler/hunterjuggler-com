
import React from 'react';
import { motion } from "@/lib/motion";
import { Globe, Award, Star, Clock } from "lucide-react";

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My Diverse Clientele
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've had the pleasure of working with a wide range of clients, each with unique needs.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
          >
            <div className="flex items-center justify-center h-14 mb-3">
              <Globe className="w-7 h-7 text-[#ff4742]" />
            </div>
            <h3 className="font-semibold text-base mb-1 text-center">International Festivals</h3>
            <p className="text-muted-foreground text-xs text-center">
              Bringing artistry to global celebrations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
          >
            <div className="flex items-center justify-center h-14 mb-3">
              <Award className="w-7 h-7 text-[#ff4742]" />
            </div>
            <h3 className="font-semibold text-base mb-1 text-center">Corporate Events</h3>
            <p className="text-muted-foreground text-xs text-center">
              Elevating corporate gatherings with unique performances.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
          >
            <div className="flex items-center justify-center h-14 mb-3">
              <Star className="w-7 h-7 text-[#ff4742]" />
            </div>
            <h3 className="font-semibold text-base mb-1 text-center">Private Celebrations</h3>
            <p className="text-muted-foreground text-xs text-center">
              Making personal milestones unforgettable.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
          >
            <div className="flex items-center justify-center h-14 mb-3">
              <Clock className="w-7 h-7 text-[#ff4742]" />
            </div>
            <h3 className="font-semibold text-base mb-1 text-center">Themed Events</h3>
            <p className="text-muted-foreground text-xs text-center">
              Custom performances tailored to your theme.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
