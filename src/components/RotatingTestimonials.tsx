
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface RotatingTestimonialsProps {
  testimonials: Testimonial[];
  interval?: number;
}

const RotatingTestimonials = ({ testimonials, interval = 5000 }: RotatingTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval, isPaused]);

  return (
    <div 
      className="max-w-4xl mx-auto relative min-h-[200px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? -20 : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 rounded-2xl p-8 shadow-sm border border-white/10"
      >
        <div className="flex text-accent mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        <p className="text-foreground/90 mb-6 italic text-lg">"{testimonials[currentIndex].quote}"</p>
        <div>
          <p className="font-medium">{testimonials[currentIndex].author}</p>
          <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-accent" : "bg-white/20"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Navigation arrows */}
      <Button 
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 rounded-full bg-white/80 border-accent text-black hover:bg-white"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 rounded-full bg-white/80 border-accent text-black hover:bg-white"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default RotatingTestimonials;
