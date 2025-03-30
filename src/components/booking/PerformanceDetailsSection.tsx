
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PerformanceDetailsSectionProps {
  form: any;
}

const PerformanceDetailsSection = ({ form }: PerformanceDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Performance Details</h3>
      
      <FormField
        control={form.control}
        name="performanceType"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel>Performance Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-md bg-black/30">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="cursor-pointer">Standard Show</Label>
                </div>
                <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-md bg-black/30">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom" className="cursor-pointer">Custom Show</Label>
                </div>
                <div className="flex items-center space-x-2 border border-white/10 p-3 rounded-md bg-black/30">
                  <RadioGroupItem value="roaming" id="roaming" />
                  <Label htmlFor="roaming" className="cursor-pointer">Roaming Entertainment / Ambience</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="specialRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Special Requests or Theme</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe any specific themes, acts, or elements you'd like included in the performance" 
                className="min-h-[100px]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
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
    </div>
  );
};

export default PerformanceDetailsSection;
