import { useState, useEffect } from "react";
import { Calendar, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { motion } from "@/lib/motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "corporate",
    date: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "corporate",
        date: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions or just want to say hello, I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black/20 to-black/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hunterjuggler@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Based in</h3>
                    <p className="text-muted-foreground">Los Angeles, CA</p>
                    <p className="text-sm text-muted-foreground">Available for performances worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Booking Timeline</h3>
                    <p className="text-muted-foreground">Please contact at least 6-8 weeks in advance for event bookings</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 p-6 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-3">Performance Types</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Corporate Events & Galas</li>
                  <li>• Festivals & Public Performances</li>
                  <li>• Private Celebrations</li>
                  <li>• Theater Shows & Productions</li>
                  <li>• Brand Activations & Launch Events</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        className="contact-input" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="contact-input" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Your phone number" 
                        className="contact-input" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date (if applicable)</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date" 
                        className="contact-input" 
                        value={formData.date} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Reason for Contact</Label>
                    <RadioGroup 
                      value={formData.eventType} 
                      onValueChange={value => handleSelectChange("eventType", value)} 
                      className="flex flex-wrap gap-4 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="corporate" id="corporate" />
                        <Label htmlFor="corporate" className="cursor-pointer">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="festival" id="festival" />
                        <Label htmlFor="festival" className="cursor-pointer">Media Request</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="private" id="private" />
                        <Label htmlFor="private" className="cursor-pointer">Collaboration</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="How can I help you?" 
                      className="contact-input min-h-[120px]" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending
                      <span className="ml-2 animate-pulse">...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
    </div>
  );
};

export default ContactPage;
