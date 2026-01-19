
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./ContactFormValidation";

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  className="contact-input" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="contact-input" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input 
                    placeholder="+1" 
                    className="contact-input w-20 flex-shrink-0" 
                    onChange={(e) => {
                      const countryCode = e.target.value;
                      const currentPhone = field.value || '';
                      const phoneNumber = currentPhone.includes(' ') ? currentPhone.split(' ').slice(1).join(' ') : currentPhone;
                      field.onChange(countryCode + (phoneNumber ? ' ' + phoneNumber : ''));
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Input 
                    placeholder="Phone number" 
                    className="contact-input flex-1" 
                    onChange={(e) => {
                      const phoneNumber = e.target.value;
                      const currentPhone = field.value || '';
                      const countryCode = currentPhone.includes(' ') ? currentPhone.split(' ')[0] : '';
                      field.onChange((countryCode || '+1') + ' ' + phoneNumber);
                    }}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Date (if applicable)</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  className="contact-input" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="eventType"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel>Reason for Contact *</FormLabel>
            <FormControl>
              <RadioGroup 
                onValueChange={field.onChange} 
                defaultValue={field.value} 
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
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="replyUrgency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How soon do you need a reply? (optional)</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="contact-input">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="week">Within a week</SelectItem>
                <SelectItem value="month">Within a month</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message *</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="How can Hunter help you?" 
                className="contact-input min-h-[120px]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContactFormFields;
