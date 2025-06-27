
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
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
      {/* Instructions for displaying real Instagram content */}
      <div className="bg-black/10 backdrop-blur-sm rounded-lg p-6 mb-6 text-center">
        <Instagram className="mx-auto mb-4 text-[#ff4742]" size={48} />
        <h3 className="text-xl font-semibold mb-2">Display Real Instagram Posts</h3>
        <p className="text-muted-foreground mb-4">
          To show your actual @hunterjuggler posts, you have a few options:
        </p>
        <div className="text-left max-w-2xl mx-auto space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#ff4742]">1.</span>
            <span>Use Instagram's official embed widget from your business account</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#ff4742]">2.</span>
            <span>Integrate with Instagram Basic Display API (requires app approval)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#ff4742]">3.</span>
            <span>Use a third-party service like SnapWidget or LightWidget</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-[#ff4742]">4.</span>
            <span>Manually update with your latest post URLs</span>
          </div>
        </div>
      </div>
      
      {/* Sample Instagram posts grid */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Instagram size={48} className="text-white" />
              </div>
              <div className="p-3">
                <p className="text-sm text-muted-foreground">Latest performance highlights</p>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Instagram size={48} className="text-white" />
              </div>
              <div className="p-3">
                <p className="text-sm text-muted-foreground">Behind the scenes content</p>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <Instagram size={48} className="text-white" />
              </div>
              <div className="p-3">
                <p className="text-sm text-muted-foreground">Festival performances</p>
              </div>
            </div>
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
