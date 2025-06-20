
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
            className="integrated-image-container rounded-2xl overflow-hidden order-2 md:order-1"
          >
            <BlurImage 
              src="/lovable-uploads/e13a9646-7eb6-4a9a-9583-ef2856fc61fe.png" 
              alt="Hunter Way show performance" 
              className="w-full h-full object-cover integrated-image" 
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
            <span className="text-accent font-medium">The Show</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              A Captivating Performance
            </h2>
            <p className="text-muted-foreground mb-6">
              Get ready for a fast-paced, laugh-out-loud comedy juggling show with big stunts and audience participation. 
              Blending sharp humor with high-level circus skills — and topped with a spectacular giraffe unicycle finale — 
              this show keeps crowds of all ages entertained from start to finish.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Customizable for any event, performances can run from 10 to 60 minutes, and are tailored to suit the vibe — 
              from family-friendly fun to cheeky adult humor.
            </p>

            <div className="mb-6">
              <p className="text-muted-foreground font-medium mb-4">Perfect for:</p>
              <div className="grid grid-cols-2 gap-3 text-muted-foreground">
                <div className="space-y-2">
                  <p>• Corporate events</p>
                  <p>• Festivals</p>
                  <p>• Private parties</p>
                  <p>• Weddings</p>
                  <p>• Halftime shows</p>
                </div>
                <div className="space-y-2">
                  <p>• Parades</p>
                  <p>• Cabarets</p>
                  <p>• Street fairs</p>
                  <p>• County and state fairs</p>
                  <p>• Even backyard gatherings!</p>
                </div>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <p className="text-muted-foreground">
                Engaging for audiences of all ages — from kids to corporate crowds.
              </p>
              <p className="text-muted-foreground">
                Fully self-contained and flexible — can be performed indoors or outdoors, with or without amplification.
              </p>
              <p className="text-muted-foreground">
                Fully insured — certificates available on request.
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
