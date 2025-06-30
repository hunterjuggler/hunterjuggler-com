
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PerformanceDetailsSectionProps {
  form: any;
  watchCeilingHeight: string;
}

const PerformanceDetailsSection = ({ form, watchCeilingHeight }: PerformanceDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Performance Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField control={form.control} name="stageSize" render={({ field }) => (
          <FormItem>
            <FormLabel>Stage Size *</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 20ft x 15ft" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        
        <FormField control={form.control} name="ceilingHeight" render={({ field }) => (
          <FormItem>
            <FormLabel>Ceiling Height *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select ceiling height" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="20+ ft">20+ ft</SelectItem>
                <SelectItem value="15–20 ft">15–20 ft</SelectItem>
                <SelectItem value="12–15 ft">12–15 ft</SelectItem>
                <SelectItem value="Under 12 ft">Under 12 ft</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />
      </div>

      {watchCeilingHeight === "Under 12 ft" && (
        <FormField control={form.control} name="exactCeilingHeight" render={({ field }) => (
          <FormItem>
            <FormLabel>Please specify the exact ceiling height:</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 10 ft 6 inches" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
      )}

      <FormField control={form.control} name="performanceDuration" render={({ field }) => (
        <FormItem>
          <FormLabel>Performance Duration (minutes) *</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="45">45 minutes</SelectItem>
              <SelectItem value="60">60 minutes</SelectItem>
              <SelectItem value="custom">Custom duration</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
};

export default PerformanceDetailsSection;
