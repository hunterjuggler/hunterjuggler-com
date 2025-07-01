
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
import SpecialRequestsSection from "./SpecialRequestsSection";

// Validation schema
const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number"
  }),
  organization: z.string().optional(),
  eventType: z.string().optional(),
  eventDate: z.string().min(1, {
    message: "Event date is required"
  }),
  eventTime: z.string().min(1, {
    message: "Event time is required"
  }),
  eventLocation: z.string().min(1, {
    message: "Event location is required"
  }),
  venueType: z.string().optional(),
  audienceSize: z.string().optional(),
  stageSize: z.string().min(1, {
    message: "Stage size is required"
  }),
  ceilingHeight: z.string().min(1, {
    message: "Ceiling height is required"
  }),
  exactCeilingHeight: z.string().optional(),
  performanceDuration: z.string().min(1, {
    message: "Performance duration is required"
  }),
  specialRequests: z.string().optional(),
  referralSource: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
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
      eventType: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      venueType: "",
      audienceSize: "",
      stageSize: "",
      ceilingHeight: "",
      exactCeilingHeight: "",
      performanceDuration: "30",
      specialRequests: "",
      referralSource: "",
      agreeToTerms: false
    }
  });

  const onSubmit = async (values: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mgvydegl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          organization: values.organization || 'Not provided',
          eventType: values.eventType || 'Not specified',
          eventDate: values.eventDate,
          eventTime: values.eventTime,
          eventLocation: values.eventLocation,
          venueType: values.venueType || 'Not specified',
          audienceSize: values.audienceSize || 'Not specified',
          stageSize: values.stageSize,
          ceilingHeight: values.ceilingHeight,
          exactCeilingHeight: values.exactCeilingHeight || 'Not specified',
          performanceDuration: values.performanceDuration,
          specialRequests: values.specialRequests || 'None',
          referralSource: values.referralSource || 'Not specified',
          _replyto: values.email,
          _subject: `Booking Request - ${values.eventType} - ${values.eventDate}`,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Your booking request has been submitted successfully. I'll review the details and get back to you with a quote soon!");
        form.reset();
      } else {
        throw new Error("Failed to send booking request");
      }
    } catch (error) {
      console.error("Booking form submission error:", error);
      toast.error("There was an error submitting your booking request. Please try again or email hunterjuggler@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="lg:col-span-2"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10">
          <ContactInfoSection form={form} />
          <EventDetailsSection form={form} />
          <SpecialRequestsSection form={form} />
          
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
