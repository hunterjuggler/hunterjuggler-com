
import { motion } from "@/lib/motion";

const ContactFAQSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/30 to-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
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
            <p className="text-muted-foreground mb-3">
              Most events should be booked at least 4 weeks in advance.
            </p>
            <p className="text-muted-foreground mb-3">
              Major international events and festivals should be booked 2+ months in advance to allow for travel and planning.
            </p>
            <p className="text-muted-foreground">
              If your event falls inside these time frames, please still get in touch. Availability sometimes opens up, and last-minute bookings may be possible depending on location and schedule.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">Does Hunter travel for performances?</h3>
            <p className="text-muted-foreground">
              Yes, Hunter performs at events worldwide. Travel expenses are typically added to the
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
            <h3 className="font-semibold mb-3">What technical requirements are there?</h3>
            <p className="text-muted-foreground">
              The show is fully self-contained. Space, sound, and setup details will be provided once the event is confirmed.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-lg p-6 shadow-sm border border-white/10"
          >
            <h3 className="font-semibold mb-3">Can performances be customized?</h3>
            <p className="text-muted-foreground">
              Absolutely! Hunter is happy to adapt the show for any audience, whether it's a family festival, corporate event, or special occasion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;
