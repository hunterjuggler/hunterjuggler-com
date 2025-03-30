
import { useState } from "react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import ContactInfoSection from "./ContactInfoSection";
import EventDetailsSection from "./EventDetailsSection";
import PerformanceDetailsSection from "./PerformanceDetailsSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    venueType: "",
    audienceSize: "",
    stageSize: "",
    ceilingHeight: "",
    performanceDuration: "60",
    performanceType: "standard",
    specialRequests: "",
    soundSystemProvided: false,
    soundSystemType: "",
    referralSource: "",
    agreeToTerms: false
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
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your booking request! I'll review your details and get back to you within 48 hours.");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        venueType: "",
        audienceSize: "",
        stageSize: "",
        ceilingHeight: "",
        performanceDuration: "60",
        performanceType: "standard",
        specialRequests: "",
        soundSystemProvided: false,
        soundSystemType: "",
        referralSource: "",
        agreeToTerms: false
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="lg:col-span-2"
    >
      <form 
        onSubmit={handleSubmit} 
        className="space-y-8 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10"
      >
        <ContactInfoSection 
          formData={formData} 
          handleChange={handleChange} 
        />
        
        <EventDetailsSection 
          formData={formData} 
          handleChange={handleChange} 
          handleSelectChange={handleSelectChange} 
        />
        
        <PerformanceDetailsSection 
          formData={formData} 
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AdditionalInfoSection 
          formData={formData}
          handleSelectChange={handleSelectChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center">
              Submitting Request
              <span className="ml-2 animate-pulse">...</span>
            </span>
          ) : (
            <span className="flex items-center">
              Submit Booking Request
              <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
