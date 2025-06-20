import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
interface EventDetailsSectionProps {
  form: any;
}
const EventDetailsSection = ({
  form
}: EventDetailsSectionProps) => {
  return <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Event Details</h3>
      
      <FormField control={form.control} name="eventType" render={({
      field
    }) => <FormItem>
            <FormLabel>Event Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="festival">Festival</SelectItem>
                <SelectItem value="private">Private Party</SelectItem>
                <SelectItem value="theatre">Theatre / Cabaret</SelectItem>
                <SelectItem value="fair">Fair or Public Event</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField control={form.control} name="eventDate" render={({
        field
      }) => <FormItem>
              <FormLabel>Event Date *</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="eventTime" render={({
        field
      }) => <FormItem>
              <FormLabel>Event Time *</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
      </div>
      
      <FormField control={form.control} name="eventLocation" render={({
      field
    }) => <FormItem>
            <FormLabel>Event Location *</FormLabel>
            <FormControl>
              <Input placeholder="City, State/Country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField control={form.control} name="venueType" render={({
        field
      }) => <FormItem>
              <FormLabel>Venue Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select venue type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="indoor">Indoor</SelectItem>
                  <SelectItem value="outdoor">Outdoor</SelectItem>
                  <SelectItem value="both">Both Indoor & Outdoor</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="audienceSize" render={({
        field
      }) => <FormItem>
              <FormLabel>Expected Audience Size</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="small">Small (1-50)</SelectItem>
                  <SelectItem value="medium">Medium (51-200)</SelectItem>
                  <SelectItem value="large">Large (201-500)</SelectItem>
                  <SelectItem value="xlarge">Very Large (500+)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField control={form.control} name="stageSize" render={({
        field
      }) => <FormItem>
              <FormLabel>Stage/Performance Area Size *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 20x20 feet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="ceilingHeight" render={({
        field
      }) => <FormItem>
              <FormLabel>Ceiling Height *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 12 feet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="performanceDuration" render={({
        field
      }) => <FormItem>
              <FormLabel>Performance Duration *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="20">20 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>} />
      </div>
      
      <FormField control={form.control} name="soundSystemProvided" render={({
      field
    }) => <FormItem className="space-y-2">
            <div className="flex items-center space-x-2">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="cursor-pointer">Will you provide a sound system?</FormLabel>
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
export default EventDetailsSection;