
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="py-16 md:py-24 bg-black/40 bg-gradient-to-b from-black/40 to-black/20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Let's Create Something Extraordinary
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you have questions or just want to say hello, I'd love to hear from you.
          </p>
          
          {/* Booking notice */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-lg mx-auto mb-8 border border-white/10">
            <p className="text-white/90 mb-4">
              For full booking inquiries, please go to the Book Now page.
            </p>
            <Button asChild variant="gradient" size="lg" rounded="pill" className="shadow-lg">
              <Link to="/booking" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
