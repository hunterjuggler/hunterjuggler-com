
import React, { useEffect } from 'react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* LightWidget Instagram Embed */}
      <iframe 
        src="https://cdn.lightwidget.com/widgets/fc1f99fd36455bcfb0e68ff2103b0d29.html" 
        scrolling="no" 
        allowTransparency={true} 
        className="lightwidget-widget w-full h-[600px] border-0"
        style={{ 
          width: '100%', 
          border: '0', 
          overflow: 'hidden',
          background: 'transparent'
        }}
      />
      
      {/* Fallback content while loading */}
      <div className="text-center py-8 text-muted-foreground">
        <p>Loading Instagram feed from @hunterjuggler...</p>
        <p className="text-sm mt-2">
          Follow{' '}
          <a 
            href="https://instagram.com/hunterjuggler" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ff4742] hover:underline"
          >
            @hunterjuggler
          </a>
          {' '}for the latest updates!
        </p>
      </div>
    </div>
  );
};

export default InstagramEmbed;
