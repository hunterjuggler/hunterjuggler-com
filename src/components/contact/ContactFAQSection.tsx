
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
              I recommend booking 6-8 weeks in advance for most events, and 3-6 months for major
              events or festivals to ensure availability and adequate preparation time.
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
              performance fee for locations outside of Los Angeles.
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
              Technical requirements vary by performance type. Once we discuss your event, I'll
              provide a detailed technical rider with space, lighting, and sound requirements.
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
              Absolutely! I enjoy creating customized performances that align with event themes,
              brand identities, or specific creative visions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;
