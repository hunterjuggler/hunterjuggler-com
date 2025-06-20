import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
interface PerformanceDetailsSectionProps {
  form: any;
}
const PerformanceDetailsSection = ({
  form
}: PerformanceDetailsSectionProps) => {
  return <div className="space-y-6">
      
      
      <FormField control={form.control} name="performanceType" render={({
      field
    }) => <FormItem>
            
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                
              </FormControl>
              <SelectContent>
                <SelectItem value="comedy-juggling">Comedy Juggling Show</SelectItem>
                <SelectItem value="roaming">Roaming / Walkaround</SelectItem>
                <SelectItem value="special-request">Special Request</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>} />
      
      <FormField control={form.control} name="specialRequests" render={({
      field
    }) => <FormItem>
            <FormLabel>Special Requests or Theme</FormLabel>
            <FormControl>
              <Textarea placeholder="Describe any specific themes, acts, or elements you'd like included in the performance" className="min-h-[100px]" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>} />
      
      <FormField control={form.control} name="soundSystemProvided" render={({
      field
    }) => <FormItem className="space-y-2">
            <div className="flex items-center space-x-2">
              <FormControl>
                
              </FormControl>
              
            </div>
            <FormMessage />
          </FormItem>} />
      
      {form.watch("soundSystemProvided") && <FormField control={form.control} name="soundSystemType" render={({
      field
    }) => <FormItem className="ml-6 space-y-2">
              <FormLabel>What kind of sound system?</FormLabel>
              <FormControl>
                <Input placeholder="Describe your sound system" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />}
    </div>;
};
export default PerformanceDetailsSection;