import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  MessageCircle
} from "lucide-react";
import wellspringLogo from "@/assets/wellspring-logo.png";

const Footer = () => {
  const phoneNumber1 = "+233500758665";
  const phoneNumber2 = "+233247920656";
  const whatsappLink1 = `https://wa.me/${phoneNumber1.replace(/\s/g, '')}`;
  const whatsappLink2 = `https://wa.me/${phoneNumber2.replace(/\s/g, '')}`;

  return (
    <footer id="contact" className="bg-gradient-to-br from-accent via-primary-dark to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={wellspringLogo} 
                alt="Wellspring Speech Therapy & Rehabilitation Centre" 
                className="h-16 w-auto bg-white/90 rounded-lg p-2"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering communication and transforming lives through evidence-based speech therapy and rehabilitation services in Ghana.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/wellspring-speech-and-language-therapy-rehabilitation-centre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/wellspringghana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/wellspringghana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappLink1}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Teletherapy", href: "#teletherapy" },
                { label: "Resources", href: "#resources" },
                { label: "Book Appointment", href: "#book" },
                { label: "Location", href: "#location" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Our Services</h4>
            <ul className="space-y-3">
              {["Speech Therapy", "Language Development", "Swallowing Therapy", "Fluency Training", "Voice Therapy", "AAC Services"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  HapaSpace, Danyame<br />
                  Kumasi, Ghana<br />
                  <span className="text-sm text-primary-foreground/60">GPS: AK-132-4568</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+233500758665" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    +233 50 075 8665
                  </a>
                  <a href="tel:+233247920656" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    +233 24 792 0656
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href={whatsappLink1}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@wellspringghana.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@wellspringghana.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Wellspring Speech Therapy & Rehabilitation Centre. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary" /> for better communication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
