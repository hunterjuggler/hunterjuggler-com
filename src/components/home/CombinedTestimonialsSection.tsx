
import React from 'react';
import { motion } from "@/lib/motion";
import { Globe, Award, Star, Clock } from "lucide-react";
import RotatingTestimonials from "@/components/RotatingTestimonials";

// Testimonials data
const testimonials = [{
  quote: "Hunter's performance was the highlight of our corporate event. The audience was completely mesmerized!",
  author: "Sarah Johnson",
  company: "Tech Innovations Inc."
}, {
  quote: "Working with Hunter was a dream. Professional, punctual, and the performance exceeded all expectations.",
  author: "Michael Chen",
  company: "Global Events"
}, {
  quote: "The combination of skill, artistry, and stage presence is something I've rarely seen in my 20 years in this industry.",
  author: "Diana Rodriguez",
  company: "Festival Director"
}, {
  quote: "Hunter had our entire team laughing and amazed throughout the show. Definitely booking again!",
  author: "James Wilson",
  company: "Marketing Solutions Corp."
}, {
  quote: "Not just a performer, but a true entertainer who connects with the audience on a personal level.",
  author: "Emma Thompson",
  company: "Luxury Resorts International"
}];

const CombinedTestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Testimonials Section (Larger) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What People Say</h2>
            </motion.div>
          </div>
          
          <RotatingTestimonials testimonials={testimonials} interval={7000} />
        </div>
        
        {/* Clients Section (Smaller) */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                My Diverse Clientele
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                I've had the pleasure of working with a wide range of clients, each with unique needs.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-4 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-12 mb-2">
                <Globe className="w-6 h-6 text-[#ff4742]" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">International Festivals</h3>
              <p className="text-muted-foreground text-xs text-center">
                Bringing artistry to global celebrations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-4 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-12 mb-2">
                <Award className="w-6 h-6 text-[#ff4742]" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">Corporate Events</h3>
              <p className="text-muted-foreground text-xs text-center">
                Elevating corporate gatherings with unique performances.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-4 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-12 mb-2">
                <Star className="w-6 h-6 text-[#ff4742]" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">Private Celebrations</h3>
              <p className="text-muted-foreground text-xs text-center">
                Making personal milestones unforgettable.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-4 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-12 mb-2">
                <Clock className="w-6 h-6 text-[#ff4742]" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">Themed Events</h3>
              <p className="text-muted-foreground text-xs text-center">
                Custom performances tailored to your theme.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedTestimonialsSection;
