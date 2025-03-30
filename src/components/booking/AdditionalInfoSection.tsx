
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface AdditionalInfoSectionProps {
  formData: {
    referralSource: string;
    agreeToTerms: boolean;
  };
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const AdditionalInfoSection = ({ 
  formData, 
  handleSelectChange, 
  handleCheckboxChange 
}: AdditionalInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Additional Information</h3>
      
      <div className="space-y-2">
        <Label htmlFor="referralSource">How did you hear about me?</Label>
        <Select 
          value={formData.referralSource} 
          onValueChange={value => handleSelectChange("referralSource", value)}
        >
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
        <Checkbox 
          id="agreeToTerms" 
          checked={formData.agreeToTerms} 
          onCheckedChange={checked => handleCheckboxChange("agreeToTerms", checked as boolean)} 
          className="mt-1" 
        />
        <Label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
          I understand that this is a booking inquiry and not a confirmed booking. 
          A final quote will be provided after reviewing the details, and a contract 
          will be required to secure the booking.
        </Label>
      </div>
    </div>
  );
};

export default AdditionalInfoSection;
