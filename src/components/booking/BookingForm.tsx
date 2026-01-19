
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
import TurnstileWidget from "@/components/TurnstileWidget";
import { useTurnstile } from "@/hooks/useTurnstile";
import { supabase } from "@/integrations/supabase/client";

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
  const { 
    turnstileToken, 
    turnstileError, 
    onTurnstileVerify, 
    onTurnstileError, 
    onTurnstileExpire,
    resetTurnstile 
  } = useTurnstile();

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
    if (!turnstileToken) {
      toast.error("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('submit-booking-form', {
        body: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          organization: values.organization || 'Not provided',
          eventType: values.eventType || 'Not specified',
          eventDate: values.eventDate,
          eventTime: values.eventTime,
          eventTimeAmPm: '', // Will be parsed from eventTime if needed
          eventLocation: values.eventLocation,
          venueType: values.venueType || 'Not specified',
          stageSpace: values.stageSize,
          ceilingHeight: values.ceilingHeight,
          ceilingHeightUnit: 'ft',
          outdoorCeiling: values.ceilingHeight === 'unlimited' ? 'unlimited' : undefined,
          performanceDuration: values.performanceDuration,
          specialRequests: values.specialRequests || 'None',
          referralSource: values.referralSource || 'Not specified',
          agreeToTerms: values.agreeToTerms,
          turnstileToken: turnstileToken,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to send booking request");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      toast.success("Thank you! Your booking request has been submitted successfully. Hunter will review the details and get back to you with a quote soon!");
      form.reset();
      resetTurnstile();
    } catch (error) {
      console.error("Booking form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      if (errorMessage.includes("Security verification failed")) {
        toast.error("Security verification failed. Please refresh the page and try again.");
      } else {
        toast.error("There was an error submitting your booking request. Please try again or email hunterjuggler@gmail.com directly.");
      }
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
          
          <TurnstileWidget
            onVerify={onTurnstileVerify}
            onError={onTurnstileError}
            onExpire={onTurnstileExpire}
          />
          
          {turnstileError && (
            <p className="text-red-500 text-sm text-center">
              Security verification failed. Please refresh and try again.
            </p>
          )}
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !turnstileToken}
          >
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
