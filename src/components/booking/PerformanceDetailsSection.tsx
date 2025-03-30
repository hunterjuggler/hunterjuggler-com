
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface PerformanceDetailsSectionProps {
  formData: {
    performanceType: string;
    specialRequests: string;
    soundSystemProvided: boolean;
    soundSystemType: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const PerformanceDetailsSection = ({ 
  formData, 
  handleChange, 
  handleSelectChange, 
  handleCheckboxChange 
}: PerformanceDetailsSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b border-white/20 pb-2">Performance Details</h3>
      
      <div className="space-y-4">
        <Label>Performance Type</Label>
        <RadioGroup 
          value={formData.performanceType} 
          onValueChange={value => handleSelectChange("performanceType", value)} 
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
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequests">Special Requests or Theme</Label>
        <Textarea 
          id="specialRequests" 
          name="specialRequests" 
          placeholder="Describe any specific themes, acts, or elements you'd like included in the performance" 
          className="min-h-[100px]" 
          value={formData.specialRequests} 
          onChange={handleChange} 
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="soundSystemProvided" 
            checked={formData.soundSystemProvided} 
            onCheckedChange={checked => handleCheckboxChange("soundSystemProvided", checked as boolean)} 
          />
          <Label htmlFor="soundSystemProvided" className="cursor-pointer">
            Sound system provided
          </Label>
        </div>
        
        {formData.soundSystemProvided && (
          <div className="ml-6 space-y-2">
            <Label htmlFor="soundSystemType">What kind of sound system?</Label>
            <Input 
              id="soundSystemType" 
              name="soundSystemType" 
              placeholder="Describe your sound system" 
              value={formData.soundSystemType} 
              onChange={handleChange} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDetailsSection;
