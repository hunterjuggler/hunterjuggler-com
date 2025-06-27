
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load SnapWidget script
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
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
          <div 
            onClick={handleInstagramClick}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <iframe 
              src="https://snapwidget.com/embed/1100951" 
              className="snapwidget-widget w-full h-96 border-none overflow-hidden rounded-lg" 
              allowTransparency="true"
              frameBorder="0" 
              scrolling="no" 
              title="Posts from Instagram"
            />
          </div>
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
