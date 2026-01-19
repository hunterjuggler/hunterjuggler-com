
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "./ContactFormValidation";
import ContactFormFields from "./ContactFormFields";
import TurnstileWidget from "@/components/TurnstileWidget";
import { useTurnstile } from "@/hooks/useTurnstile";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { 
    turnstileToken, 
    turnstileError, 
    onTurnstileVerify, 
    onTurnstileError, 
    onTurnstileExpire,
    resetTurnstile 
  } = useTurnstile();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "corporate",
      date: "",
      replyUrgency: "",
      message: ""
    },
  });
  
  const onSubmit = async (values: ContactFormValues) => {
    if (!turnstileToken) {
      toast.error("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not provided',
          eventType: values.eventType,
          date: values.date || 'Not specified',
          replyUrgency: values.replyUrgency || 'Not specified',
          message: values.message,
          turnstileToken: turnstileToken,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      toast.success("Thank you! Your message has been sent successfully. Hunter will get back to you soon!");
      form.reset();
      resetTurnstile();
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      if (errorMessage.includes("Security verification failed")) {
        toast.error("Security verification failed. Please refresh the page and try again.");
      } else {
        toast.error("There was an error sending your message. Please try again or email hunterjuggler@gmail.com directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
        Send a Message
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10">
          <ContactFormFields form={form} />
          
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
                Sending Message
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
      </Form>
    </div>
  );
};

export default ContactForm;
