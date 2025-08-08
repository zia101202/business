import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWatchDemo = () => {
    navigate('/demo');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DigitalCraft
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/websites"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/websites' ? 'text-primary font-medium' : ''}`}
            >
              Websites
            </Link>
            <Link
              to="/about"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : ''}`}
            >
              About
            </Link>
            <Button variant="gradient" size="lg" onClick={handleWatchDemo}>
              Watch Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/websites"
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/websites' ? 'text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Websites
              </Link>
              <Link
                to="/about"
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button variant="gradient" size="lg" className="w-full" onClick={handleWatchDemo}>
                Watch Demo
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;