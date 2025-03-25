
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
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-lg shadow-md border-b border-primary/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-display font-bold tracking-tight transition-opacity hover:opacity-90 red-gradient-text"
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
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated to fixed position that covers the screen */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ease-in-out overflow-auto pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-4 p-4">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant="gradient"
              rounded="pill"
              className="w-full max-w-xs shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FF6314] hover:scale-[1.125]"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "w-full py-3 text-center",
                    isActive ? "font-bold" : ""
                  )
                }
              >
                {item.name}
              </NavLink>
            </Button>
          ))}
          <Button 
            asChild 
            variant="gradient" 
            rounded="pill"
            className="w-full max-w-xs shine-effect shimmer-animation mt-4 shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FF6314] hover:scale-[1.125]"
          >
            <NavLink to="/booking" className="flex items-center justify-center gap-1 py-3">
              <Sparkles className="h-4 w-4" />
              Book Now
            </NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
