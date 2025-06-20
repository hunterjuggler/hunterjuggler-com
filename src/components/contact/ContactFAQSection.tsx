
import { motion } from "@/lib/motion";

const ContactFAQSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/30 to-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">How far in advance should I book?</h3>
            <p className="text-muted-foreground">
              6–8 weeks for most events, 3+ months for major international events/festivals.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">Do you travel for performances?</h3>
            <p className="text-muted-foreground">
              Yes, I perform at events worldwide. Travel expenses are typically added to the
              performance fee for locations outside of the Bay Area.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">What technical requirements do you have?</h3>
            <p className="text-muted-foreground">
              My show is fully self-contained. I'll provide any space, sound, or setup details once we confirm your event.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">Can you customize performances?</h3>
            <p className="text-muted-foreground">
              Absolutely — I'm happy to adapt the show for your audience, whether it's a family festival, corporate event, or special occasion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;
