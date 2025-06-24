
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EventDetailsSectionProps {
  form: any;
}

const EventDetailsSection = ({
  form
}: EventDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Event Details</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Date *</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="eventTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Time *</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="eventLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Event Location *</FormLabel>
            <FormControl>
              <Input placeholder="Enter venue name and address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="venueType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select venue type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="indoor-theater">Indoor Theater/Auditorium</SelectItem>
                  <SelectItem value="outdoor-stage">Outdoor Stage</SelectItem>
                  <SelectItem value="corporate-office">Corporate Office/Conference Room</SelectItem>
                  <SelectItem value="private-home">Private Home/Backyard</SelectItem>
                  <SelectItem value="restaurant-bar">Restaurant/Bar</SelectItem>
                  <SelectItem value="festival-fair">Festival/Fair</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="audienceSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Audience Size</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-25">1-25 people</SelectItem>
                  <SelectItem value="26-50">26-50 people</SelectItem>
                  <SelectItem value="51-100">51-100 people</SelectItem>
                  <SelectItem value="101-250">101-250 people</SelectItem>
                  <SelectItem value="251-500">251-500 people</SelectItem>
                  <SelectItem value="500+">500+ people</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="stageSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Performance Area Size *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="small">Small (10x10 ft)</SelectItem>
                  <SelectItem value="medium">Medium (15x15 ft)</SelectItem>
                  <SelectItem value="large">Large (20x20 ft or bigger)</SelectItem>
                  <SelectItem value="street">Street/Open Space</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ceilingHeight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ceiling Height *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ceiling height" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="12ft+">12+ feet (recommended)</SelectItem>
                  <SelectItem value="8-12ft">8-12 feet</SelectItem>
                  <SelectItem value="under-8ft">Under 8 feet</SelectItem>
                  <SelectItem value="outdoor">Outdoor/No ceiling</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="performanceDuration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Performance Duration *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select performance duration" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="45">45 min Comedy Juggling Show (recommended)</SelectItem>
                <SelectItem value="30">30 min Comedy Juggling Show (recommended)</SelectItem>
                <SelectItem value="20">20 min Comedy Juggling Show</SelectItem>
                <SelectItem value="4-10">4–10 min feature / showcase spot</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EventDetailsSection;
