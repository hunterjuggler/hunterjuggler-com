
import { Instagram, Facebook, Youtube, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    // In a real app, we would submit to a backend
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Alex Morgan</h3>
            <p className="text-muted-foreground max-w-sm">
              Professional performing artist with a decade of experience in acrobatics,
              juggling, and captivating stage performances.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-foreground/80 hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-foreground/80 hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-foreground/80 hover:text-accent"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-foreground/80 hover:text-accent"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <a 
              href="mailto:contact@alexmorgan.com" 
              className="flex items-center text-sm text-foreground/80 hover:text-accent transition-colors"
            >
              <Mail size={16} className="mr-2" />
              contact@alexmorgan.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="contact-input bg-background/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
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
