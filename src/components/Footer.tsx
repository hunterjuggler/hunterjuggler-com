import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Hunter Way</h3>
            <p className="text-muted-foreground max-w-sm">Professional comedy juggler and variety performer, known for world-class juggling, circus stunts, and audience participation at festivals and events worldwide.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-6 mb-6 px-0 mx-0">
              <a href="https://instagram.com/hunterjuggler" target="_blank" rel="noopener noreferrer" className="footer-social-icon text-[#ff4742] hover:text-accent" aria-label="Instagram">
                <Instagram size={28} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon text-[#ff4742] hover:text-accent" aria-label="YouTube">
                <Youtube size={28} />
              </a>
            </div>
            <a href="mailto:hunterjuggler@gmail.com" className="flex items-center text-base text-[#ff4742] hover:text-accent transition-colors">
              <Mail size={28} className="mr-2" />
              hunterjuggler@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              <a href="/booking" className="text-muted-foreground hover:text-foreground transition-colors">Book a Show</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
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
