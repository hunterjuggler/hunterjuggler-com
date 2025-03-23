
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "@/lib/motion";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return (
    <div className="max-w-4xl mx-auto relative min-h-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
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
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-accent" : "bg-white/20"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTestimonials;
