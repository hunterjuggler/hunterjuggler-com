
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "corporate",
    date: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div>
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
              <Send className="ml-2 h-4 w-4 text-white" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
