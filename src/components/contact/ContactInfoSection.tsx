
import { Mail, MapPin, Calendar } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="space-y-6 mb-8">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
        Get in Touch
      </h2>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-[#ff4742] mt-1" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">hunterjuggler@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-[#ff4742] mt-1" />
          <div>
            <h3 className="font-medium">Based in</h3>
            <p className="text-muted-foreground">Bay Area, California</p>
            <p className="text-sm text-muted-foreground">Available for performances worldwide</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Calendar className="w-6 h-6 text-[#ff4742] mt-1" />
          <div>
            <h3 className="font-medium">Booking Timeline</h3>
            <p className="text-muted-foreground">Please contact at least 6-8 weeks in advance for event bookings</p>
          </div>
        </div>
      </div>
      
      <div className="bg-black/40 p-6 rounded-lg border border-white/10">
        <h3 className="font-semibold mb-3">Performance Types</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Corporate Events & Galas</li>
          <li>• Festivals & Public Performances</li>
          <li>• Private Celebrations</li>
          <li>• Theater Shows & Productions</li>
          <li>• Brand Activations & Launch Events</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoSection;
