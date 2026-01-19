
import { Mail, MapPin } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="space-y-6 mb-8">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
        Get in Touch
      </h2>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-[#ff4742] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">hunterjuggler@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-[#ff4742] mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Based in</h3>
            <p className="text-muted-foreground">Bay Area, California</p>
            <p className="text-sm text-muted-foreground">Available for performances worldwide</p>
          </div>
        </div>
        
      </div>
      
      <div className="bg-black/40 p-6 rounded-lg border border-white/10">
        <h3 className="font-semibold mb-3">Event Types</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Corporate Events</li>
          <li>• Festivals & Street Performances</li>
          <li>• Private Parties</li>
          <li>• Theatres & Cabarets</li>
          <li>• Fairs & Public Events</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoSection;
