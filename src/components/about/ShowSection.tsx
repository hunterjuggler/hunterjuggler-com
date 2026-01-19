
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
            className="rounded-2xl overflow-hidden order-2 md:order-1"
          >
            <BlurImage 
              src="/lovable-uploads/87ec8b89-db73-4902-b630-077f3c2cdfb1.png" 
              alt="Hunter Way performing with audience participation" 
              className="w-full h-full object-cover" 
              aspectRatio="auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="order-1 md:order-2"
          >
            <span className="text-[#ff4742] font-medium">The Show</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 mb-6">
              A Captivating Performance
            </h2>
            <p className="text-muted-foreground mb-6">
              This is a fast-paced comedy juggling show built for momentum and sustained crowd focus.
            </p>
            
            <p className="text-muted-foreground mb-6">
              The show combines high-level circus skills with self-aware, sometimes ironic humor and is delivered with adaptable, controlled pacing designed to keep attention locked in from the first moment to the final stunt. No two shows are exactly the same. Each performance responds to the audience and environment while maintaining a tight structure that builds toward a show-stopping giraffe unicycle finale, where Hunter juggles dangerous objects high in the sky in a controlled, high-stakes finale that keeps audiences on the edge of their seats.
            </p>

            <p className="text-muted-foreground mb-6">
              Performances run from 10 to 60 minutes and are customized to fit the event, from family-friendly shows to cheeky adult humor.
            </p>

            <div className="mb-6">
              <p className="text-muted-foreground font-medium mb-3">Perfect for:</p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Corporate events</li>
                <li>• Festivals</li>
                <li>• Private parties</li>
                <li>• Weddings</li>
                <li>• Halftime shows</li>
                <li>• Parades</li>
                <li>• Cabarets</li>
                <li>• Street fairs</li>
                <li>• County and state fairs</li>
              </ul>
            </div>

            <div className="mb-6 space-y-3">
              <p className="text-muted-foreground">
                Engaging for audiences of all ages, from kids to corporate crowds.
              </p>
              <p className="text-muted-foreground">
                Fully self-contained and flexible. Indoor or outdoor capable, Hunter can provide his own amplification.
              </p>
              <p className="text-muted-foreground">
                Fully insured, fire performance available by request (subject to venue approval and safety requirements). Certificates available on request.
              </p>
            </div>
            
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
