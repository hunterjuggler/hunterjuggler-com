
import { motion } from "@/lib/motion";
import { Link } from "react-router-dom";

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Whether you have questions or just want to say hello, Hunter would love to hear from you.
          </p>
          
          <p className="text-base text-foreground/90 mb-8">
            For full booking inquiries, please go to the{' '}
            <Link 
              to="/booking" 
              className="text-[#ED1C24] hover:underline font-medium"
            >
              Book Now page
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
