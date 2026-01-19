
import { useFormContext } from "react-hook-form";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider } from "react-hook-form";

interface ContactInfoSectionProps {
  form: any;
}

const ContactInfoSection = ({ form }: ContactInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
                <Input type="email" placeholder="Your email" {...field} />
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
              <FormLabel>Phone *</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input 
                    placeholder="+1" 
                    className="w-20 flex-shrink-0" 
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
                    className="flex-1" 
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
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization/Company</FormLabel>
              <FormControl>
                <Input placeholder="Your organization (if applicable)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;
