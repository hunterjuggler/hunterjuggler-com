import { useState } from "react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import ContactInfoSection from "./ContactInfoSection";
import EventDetailsSection from "./EventDetailsSection";

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
  performanceDuration: z.string().min(1, {
    message: "Performance duration is required"
  }),
  specialRequests: z.string().optional(),
  soundSystemProvided: z.boolean().default(false),
  soundSystemType: z.string().optional(),
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
      performanceDuration: "30",
      specialRequests: "",
      soundSystemProvided: false,
      soundSystemType: "",
      referralSource: "",
      agreeToTerms: false
    }
  });

  const onSubmit = async (values: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // Use Formspree endpoint for form submission
      const response = await fetch("https://formspree.io/f/YOUR_BOOKING_FORM_ID", {
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
          performanceDuration: values.performanceDuration,
          specialRequests: values.specialRequests || 'None',
          soundSystemProvided: values.soundSystemProvided ? 'Yes' : 'No',
          soundSystemType: values.soundSystemType || 'Not specified',
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
          
          {/* Special Requests field (without header) */}
          <FormField control={form.control} name="specialRequests" render={({
          field
        }) => <FormItem>
                <FormLabel>Special Requests or Additional Information</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe any specific themes, acts, or elements you'd like included in the performance" className="min-h-[100px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          
          {/* How did you hear about me field (without header) */}
          <FormField control={form.control} name="referralSource" render={({
          field
        }) => <FormItem>
                <FormLabel>How did you hear about me?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="friend">Friend / Colleague</SelectItem>
                    <SelectItem value="show">Saw your show</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>} />
          
          <FormField control={form.control} name="agreeToTerms" render={({
          field
        }) => <FormItem className="flex flex-row items-start space-x-2 pt-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm cursor-pointer">
                    I understand that this is a booking inquiry and not a confirmed booking. 
                    A final quote will be provided after reviewing the details, and a contract 
                    will be required to secure the booking.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>} />
          
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
