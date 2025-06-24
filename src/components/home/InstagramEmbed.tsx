
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  return (
    <div className="w-full">
      {/* Using SnapWidget as a reliable Instagram feed alternative */}
      <div className="w-full flex justify-center">
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe 
          src="https://snapwidget.com/embed/1078941" 
          className="snapwidget-widget w-full h-[400px] border-0 overflow-hidden bg-transparent"
          style={{ 
            width: '100%',
            height: '400px',
            border: '0',
            overflow: 'hidden',
            background: 'transparent'
          }}
          title="Instagram feed from @hunterjuggler"
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
