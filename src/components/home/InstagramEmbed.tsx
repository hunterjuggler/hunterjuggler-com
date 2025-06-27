
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

  const handleInstagramClick = () => {
    window.open('https://instagram.com/hunterjuggler', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-4xl">
          {/* Remove click override to allow default widget behavior */}
          <div 
            className="elfsight-app-18dfd03d-ae41-4c21-b271-4c83a7707d36" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      
      {/* Direct link to Instagram */}
      <div className="text-center py-4 text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Instagram size={20} className="text-[#ff4742]" />
          <span className="font-medium">@hunterjuggler</span>
        </div>
        <p className="text-sm">
          Follow my latest performances and behind-the-scenes content on{' '}
          <a 
            href="https://instagram.com/hunterjuggler" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ff4742] hover:underline font-medium"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default InstagramEmbed;
