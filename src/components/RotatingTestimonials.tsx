
import { useEffect, useState, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const goToNext = () => {
    if (isTransitioning) return;
    setDirection("left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setDirection("right");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval, isPaused, isTransitioning]);

  return (
    <div 
      ref={containerRef}
      className="max-w-4xl mx-auto relative min-h-[200px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
        animate={{ opacity: isTransitioning ? 0 : 1, x: isTransitioning ? (direction === "right" ? 50 : -50) : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 rounded-2xl p-8 shadow-sm border border-white/10"
      >
        <div className="flex text-[#ED1C24] mb-4">
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
                setDirection(index > currentIndex ? "left" : "right");
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#ED1C24]" : "bg-white/20"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Navigation arrows - positioned on both sides */}
      <Button 
        variant="gradient"
        size="icon"
        rounded="pill"
        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 shadow-[0_-12px_6px_inset_#ED1C24] hover:bg-transparent hover:shadow-[0_-6px_8px_inset_#ED1C24] hover:scale-[1.125] z-10"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button 
        variant="gradient"
        size="icon"
        rounded="pill"
        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 shadow-[0_-12px_6px_inset_#ED1C24] hover:bg-transparent hover:shadow-[0_-6px_8px_inset_#ED1C24] hover:scale-[1.125] z-10"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default RotatingTestimonials;
