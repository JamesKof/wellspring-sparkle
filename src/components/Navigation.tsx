import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Stethoscope, 
  Video, 
  BookOpen, 
  Calendar, 
  Phone,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About Us", href: "#about", icon: Users },
  { label: "Services", href: "#services", icon: Stethoscope },
  { label: "Teletherapy", href: "#teletherapy", icon: Video },
  { label: "Resources", href: "#resources", icon: BookOpen },
  { label: "Book Appointment", href: "#book", icon: Calendar },
  { label: "Contact", href: "#contact", icon: Phone },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 animate-float ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full glass-panel shadow-soft">
        <div className="flex items-center gap-2 px-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <span className="font-heading font-semibold text-foreground">Wellspring</span>
        </div>
        
        <div className="h-6 w-px bg-border mx-2" />
        
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary-light transition-all duration-300"
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden xl:inline">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-3 px-4 py-3 rounded-full glass-panel shadow-soft"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <span className="font-heading font-semibold text-foreground">Wellspring</span>
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl glass-panel shadow-lifted animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary-light transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
