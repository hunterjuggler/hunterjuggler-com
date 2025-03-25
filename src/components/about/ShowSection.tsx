
import React from 'react';
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurImage from "@/components/BlurImage";

const ShowSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
          >
            <BlurImage 
              src="https://images.unsplash.com/photo-1543345207-0c8b8c87e2f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Hunter Way show performance" 
              aspectRatio="wide" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-accent font-medium">The Show</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              A Captivating Performance
            </h2>
            <p className="text-muted-foreground mb-6">
              My performances blend technical skill with storytelling and humor, creating an engaging experience 
              for audiences of all ages. Each show is carefully crafted to build excitement, with moments of wonder 
              interspersed with laughter and audience participation.
            </p>
            <p className="text-muted-foreground mb-6">
              From the opening spectacular juggling routine to the finale featuring fire or LED props, 
              each segment flows seamlessly into the next. Interactive elements invite volunteers to become 
              part of the show, creating unique memories and ensuring no two performances are exactly alike.
            </p>
            <p className="text-muted-foreground mb-8">
              Show length is flexible, typically running 30-60 minutes depending on your event needs, with 
              customization available to match your specific theme or venue.
            </p>
            <Button asChild className="custom-button" variant="default" rounded="pill">
              <Link to="/booking">Book Your Show</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowSection;
