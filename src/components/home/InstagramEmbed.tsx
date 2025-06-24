
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load SociableKit script
    const script = document.createElement('script');
    script.src = 'https://www.sociablekit.com/app/embed/instagram-hashtag/widget.js';
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
      {/* SociableKit Instagram Feed */}
      <div className="w-full flex justify-center">
        <div 
          className="sk-instagram-feed" 
          data-embed-id="25463"
          style={{ width: '100%', maxWidth: '1000px' }}
        ></div>
      </div>
      
      {/* Fallback message */}
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
