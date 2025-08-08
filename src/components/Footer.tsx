import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "03296286508";
    const message = "Hi! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/92${phoneNumber.slice(1)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-card via-card/95 to-secondary/30 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              DigitalCraft
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Your trusted partner for digital solutions and website development.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <Link 
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/websites"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Websites
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Services</h3>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <div className="space-y-2 mb-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground text-sm">+92 329 628 6508</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground text-sm">info@digitalcraft.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground text-sm">Karachi, Pakistan</span>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              className="w-full text-xs py-2"
              onClick={handleWhatsAppClick}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-6 pt-4 text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 DigitalCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;