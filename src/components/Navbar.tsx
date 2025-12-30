
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-background/95 backdrop-blur-lg shadow-md border-b border-primary/10"
          : "py-5 bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-display font-bold tracking-tight transition-opacity hover:opacity-90 red-gradient-text relative z-50"
          >
            Hunter Way
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "nav-link font-medium text-sm transition-colors",
                    isActive ? "text-primary active" : "text-foreground/80 hover:text-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild variant="gradient" rounded="pill" className="shine-effect shimmer-animation shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FF6314] hover:scale-[1.125]">
              <NavLink to="/booking" className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Book Now
              </NavLink>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="gradient"
            rounded="pill"
            className="md:hidden relative z-50 p-2 h-10 w-10 shine-effect"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed positioning and proper z-index */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-2xl font-medium transition-colors py-2",
                  isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button 
            asChild 
            variant="gradient" 
            rounded="pill"
            className="mt-8 px-8 py-3 text-lg shine-effect shimmer-animation shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FF6314] hover:scale-[1.125]"
          >
            <NavLink to="/booking" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Book Now
            </NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
