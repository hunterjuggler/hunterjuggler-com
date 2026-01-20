import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 py-16">
      <div className="w-full mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid gap-10 md:grid-cols-3 justify-items-center md:justify-items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-4">Hunter Way</h3>
            <p className="text-muted-foreground max-w-sm">High-skill circus entertainer delivering world-class juggling, big tricks, and tightly paced comedy for events and festivals worldwide.</p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-display font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://instagram.com/hunterjuggler" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#ED1C24] hover:text-accent transition-colors">
                <Instagram className="w-5 h-5 flex-shrink-0 mr-2" />
                Instagram
              </a>
              <a href="https://youtube.com/@hunterjuggler" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#ED1C24] hover:text-accent transition-colors">
                <Youtube className="w-5 h-5 flex-shrink-0 mr-2" />
                YouTube
              </a>
              <a href="mailto:contact@hunterjuggler.com" className="flex items-center text-[#ED1C24] hover:text-accent transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mr-2" />
                Email
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/hunter-chicken-logo.png" 
              alt="Hunter Juggler Logo" 
              className="w-48 h-auto"
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hunter Way. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
