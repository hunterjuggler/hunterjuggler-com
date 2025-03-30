
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventDetailsSectionProps {
  form: any;
}

const EventDetailsSection = ({ form }: EventDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Event Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Date *</FormLabel>
              <FormControl>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="date" className="pl-10" {...field} />
                </div>
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
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="time" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="eventLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Location *</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="City, State/Country" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="venueType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select venue type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="theater">Theater</SelectItem>
                  <SelectItem value="outdoor">Outdoor Stage</SelectItem>
                  <SelectItem value="corporate">Corporate Space</SelectItem>
                  <SelectItem value="private">Private Venue</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="audienceSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Audience Size</FormLabel>
              <FormControl>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Number of attendees" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="stageSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Stage/Performance Area Dimensions *</FormLabel>
              <FormControl>
                <Input placeholder="Dimensions (meters or feet)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ceilingHeight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Ceiling Height *</FormLabel>
              <FormControl>
                <Input placeholder="Height (meters or feet)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="performanceDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Performance Duration</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="90">90 minutes</SelectItem>
                  <SelectItem value="custom">Custom duration</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default EventDetailsSection;
