
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface AdditionalInfoSectionProps {
  form: any;
}

const AdditionalInfoSection = ({ form }: AdditionalInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Technical & Additional Information</h3>
      
      <FormField
        control={form.control}
        name="soundSystemProvided"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <div className="flex items-center space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange} 
                />
              </FormControl>
              <FormLabel className="cursor-pointer">
                Sound system provided
              </FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {form.watch("soundSystemProvided") && (
        <FormField
          control={form.control}
          name="soundSystemType"
          render={({ field }) => (
            <FormItem className="ml-6 space-y-2">
              <FormLabel>What kind of sound system?</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Describe your sound system" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      
      <FormField
        control={form.control}
        name="referralSource"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How did you hear about me?</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="referral">Friend / Colleague</SelectItem>
                <SelectItem value="show">Saw your show</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="agreeToTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-2 pt-4">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange} 
                className="mt-1" 
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-sm cursor-pointer">
                I understand that this is a booking inquiry and not a confirmed booking. 
                A final quote will be provided after reviewing the details, and a contract 
                will be required to secure the booking.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AdditionalInfoSection;
