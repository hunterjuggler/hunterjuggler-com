
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Full-width Instagram widget */}
      <div className="w-full">
        <div 
          className="elfsight-app-18dfd03d-ae41-4c21-b271-4c83a7707d36 w-full" 
          data-elfsight-app-lazy
        ></div>
      </div>
      
      {/* Direct link to Instagram with container */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center py-4 text-muted-foreground">
          <a 
            href="https://instagram.com/hunterjuggler" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram size={20} className="text-[#ff4742]" />
            <span className="font-medium">@hunterjuggler</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramEmbed;
