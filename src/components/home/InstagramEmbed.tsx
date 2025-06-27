
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load SnapWidget script for Instagram feed
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* SnapWidget Instagram Feed */}
      <div className="w-full flex justify-center">
        <iframe 
          src="https://snapwidget.com/embed/1080534" 
          className="snapwidget-widget" 
          allowTransparency={true}
          frameBorder="0" 
          scrolling="no" 
          style={{ 
            border: 'none', 
            overflow: 'hidden', 
            width: '100%', 
            maxWidth: '1000px',
            height: '750px' 
          }}
          title="Instagram Feed"
        />
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
