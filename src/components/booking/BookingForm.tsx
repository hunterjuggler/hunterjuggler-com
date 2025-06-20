
import { useState } from "react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import ContactInfoSection from "./ContactInfoSection";
import EventDetailsSection from "./EventDetailsSection";
import PerformanceDetailsSection from "./PerformanceDetailsSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

// Validation schema
const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  organization: z.string().optional(),
  eventDate: z.string().min(1, { message: "Event date is required" }),
  eventTime: z.string().min(1, { message: "Event time is required" }),
  eventLocation: z.string().min(1, { message: "Event location is required" }),
  eventType: z.string().optional(),
  venueType: z.string().optional(),
  audienceSize: z.string().optional(),
  stageSize: z.string().min(1, { message: "Stage size is required" }),
  ceilingHeight: z.string().min(1, { message: "Ceiling height is required" }),
  performanceDuration: z.string().min(1, { message: "Performance duration is required" }),
  performanceType: z.string().min(1, { message: "Performance type is required" }),
  specialRequests: z.string().optional(),
  soundSystemProvided: z.boolean().default(false),
  soundSystemType: z.string().optional(),
  referralSource: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventType: "",
      venueType: "",
      audienceSize: "",
      stageSize: "",
      ceilingHeight: "",
      performanceDuration: "30",
      performanceType: "comedy-juggling",
      specialRequests: "",
      soundSystemProvided: false,
      soundSystemType: "",
      referralSource: "",
      agreeToTerms: false
    },
  });
  
  const onSubmit = (values: BookingFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your booking request! I'll review your details and get back to you within 48 hours.");
      // Reset form after successful submission
      form.reset();
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
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10"
        >
          <ContactInfoSection form={form} />
          
          <EventDetailsSection form={form} />
          
          <PerformanceDetailsSection form={form} />
          
          <AdditionalInfoSection form={form} />
          
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
      </Form>
    </motion.div>
  );
};

export default BookingForm;
