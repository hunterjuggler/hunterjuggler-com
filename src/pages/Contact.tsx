
import { useEffect } from "react";
import { motion } from "@/lib/motion";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQSection from "@/components/contact/ContactFAQSection";

const ContactPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactInfoSection />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQSection />
    </div>
  );
};

export default ContactPage;
