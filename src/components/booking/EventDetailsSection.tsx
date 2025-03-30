
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventDetailsSectionProps {
  formData: {
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    venueType: string;
    audienceSize: string;
    stageSize: string;
    ceilingHeight: string;
    performanceDuration: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const EventDetailsSection = ({ formData, handleChange, handleSelectChange }: EventDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Event Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="eventDate" name="eventDate" type="date" className="pl-10" value={formData.eventDate} onChange={handleChange} required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="eventTime">Event Time *</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="eventTime" name="eventTime" type="time" className="pl-10" value={formData.eventTime} onChange={handleChange} required />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventLocation">Event Location *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="eventLocation" name="eventLocation" placeholder="City, State/Country" className="pl-10" value={formData.eventLocation} onChange={handleChange} required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="venueType">Venue Type</Label>
          <Select value={formData.venueType} onValueChange={value => handleSelectChange("venueType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select venue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="theater">Theater</SelectItem>
              <SelectItem value="outdoor">Outdoor Stage</SelectItem>
              <SelectItem value="corporate">Corporate Space</SelectItem>
              <SelectItem value="private">Private Venue</SelectItem>
              <SelectItem value="festival">Festival</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="audienceSize">Estimated Audience Size</Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="audienceSize" name="audienceSize" placeholder="Number of attendees" className="pl-10" value={formData.audienceSize} onChange={handleChange} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="stageSize">Estimated Stage/Performance Area Dimensions *</Label>
          <Input id="stageSize" name="stageSize" placeholder="Dimensions (meters or feet)" value={formData.stageSize} onChange={handleChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ceilingHeight">Estimated Ceiling Height *</Label>
          <Input id="ceilingHeight" name="ceilingHeight" placeholder="Height (meters or feet)" value={formData.ceilingHeight} onChange={handleChange} required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="performanceDuration">Performance Duration</Label>
          <Select value={formData.performanceDuration} onValueChange={value => handleSelectChange("performanceDuration", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="45">45 minutes</SelectItem>
              <SelectItem value="60">60 minutes</SelectItem>
              <SelectItem value="90">90 minutes</SelectItem>
              <SelectItem value="custom">Custom duration</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSection;
