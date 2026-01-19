
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Ready to Bring Your Event to Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can create a memorable and captivating performance for your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default" rounded="pill" className="custom-button">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" rounded="pill" className="custom-button">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
