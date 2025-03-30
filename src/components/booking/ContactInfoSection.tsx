
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContactInfoSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    organization: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactInfoSection = ({ formData, handleChange }: ContactInfoSectionProps) => {
  return (
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
  );
};

export default ContactInfoSection;
