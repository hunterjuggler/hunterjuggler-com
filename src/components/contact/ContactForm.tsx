
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "./ContactFormValidation";
import ContactFormFields from "./ContactFormFields";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdkzbknn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not provided',
          eventType: values.eventType,
          date: values.date || 'Not specified',
          replyUrgency: values.replyUrgency || 'Not specified',
          message: values.message,
          _replyto: values.email,
          _subject: `Contact Form Submission - ${values.eventType}`,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully. Hunter will get back to you soon!");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error sending your message. Please try again or email hunterjuggler@gmail.com directly.");
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
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
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
