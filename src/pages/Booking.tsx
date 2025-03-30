
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, DollarSign, Theatrical, Send, VolumeX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { motion } from "@/lib/motion";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    venueType: "",
    audienceSize: "",
    stageSize: "",
    ceilingHeight: "",
    performanceDuration: "60",
    performanceType: "standard",
    specialRequests: "",
    soundSystemProvided: false,
    soundSystemType: "",
    referralSource: "",
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your booking request! I'll review your details and get back to you within 48 hours.");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        venueType: "",
        audienceSize: "",
        stageSize: "",
        ceilingHeight: "",
        performanceDuration: "60",
        performanceType: "standard",
        specialRequests: "",
        soundSystemProvided: false,
        soundSystemType: "",
        referralSource: "",
        agreeToTerms: false
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return <div className="pt-20 w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Book a Performance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below with your event details, and I'll create a custom performance that will leave your audience amazed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Booking Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-black/40 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Performance Types</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
                        <Theatrical size={16} />
                      </span>
                      <div>
                        <p className="font-medium">Standard Performance</p>
                        <p className="text-sm text-muted-foreground">Classic 45-60 minute show featuring signature acts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
                        <Theatrical size={16} />
                      </span>
                      <div>
                        <p className="font-medium">Custom Show</p>
                        <p className="text-sm text-muted-foreground">Tailored performance designed for your specific event</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
                        <Theatrical size={16} />
                      </span>
                      <div>
                        <p className="font-medium">Roaming Entertainment / Ambience</p>
                        <p className="text-sm text-muted-foreground">Wandering performance that creates atmosphere throughout your venue</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-black/40 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Planning Timeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For the best experience, I recommend booking:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-[#ff4742]" />
                      <span>At least 6-8 weeks in advance for standard shows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-[#ff4742]" />
                      <span>3-6 months for custom performances</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-[#ff4742]" />
                      <span>6+ months for international bookings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8 bg-black/30 p-8 rounded-xl shadow-sm border border-white/10">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization/Company</Label>
                      <Input id="organization" name="organization" placeholder="Your organization (if applicable)" value={formData.organization} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                
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
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Performance Details</h3>
                  
                  <div className="space-y-4">
                    <Label>Performance Type</Label>
                    <RadioGroup value={formData.performanceType} onValueChange={value => handleSelectChange("performanceType", value)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests or Theme</Label>
                    <Textarea id="specialRequests" name="specialRequests" placeholder="Describe any specific themes, acts, or elements you'd like included in the performance" className="min-h-[100px]" value={formData.specialRequests} onChange={handleChange} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="soundSystemProvided" checked={formData.soundSystemProvided} onCheckedChange={checked => handleCheckboxChange("soundSystemProvided", checked as boolean)} />
                      <Label htmlFor="soundSystemProvided" className="cursor-pointer">
                        Sound system provided
                      </Label>
                    </div>
                    
                    {formData.soundSystemProvided && <div className="ml-6 space-y-2">
                        <Label htmlFor="soundSystemType">What kind of sound system?</Label>
                        <Input id="soundSystemType" name="soundSystemType" placeholder="Describe your sound system" value={formData.soundSystemType} onChange={handleChange} />
                      </div>}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Additional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referralSource">How did you hear about me?</Label>
                    <Select value={formData.referralSource} onValueChange={value => handleSelectChange("referralSource", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="referral">Personal Referral</SelectItem>
                        <SelectItem value="event">Saw a Live Performance</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="agreeToTerms" checked={formData.agreeToTerms} onCheckedChange={checked => handleCheckboxChange("agreeToTerms", checked as boolean)} className="mt-1" />
                    <Label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                      I understand that this is a booking inquiry and not a confirmed booking. 
                      A final quote will be provided after reviewing the details, and a contract 
                      will be required to secure the booking.
                    </Label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <span className="flex items-center">
                      Submitting Request
                      <span className="ml-2 animate-pulse">...</span>
                    </span> : <span className="flex items-center">
                      Submit Booking Request
                      <Send className="ml-2 h-4 w-4" />
                    </span>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};

export default BookingPage;
