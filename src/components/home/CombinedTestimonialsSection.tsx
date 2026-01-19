
import React from 'react';
import { motion } from "@/lib/motion";
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
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium">Client Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-2">What People Say</h2>
          </motion.div>
        </div>
        
        <RotatingTestimonials testimonials={testimonials} interval={7000} />
      </div>
    </section>
  );
};

export default CombinedTestimonialsSection;
