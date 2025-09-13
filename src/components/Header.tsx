import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-corporate-gray-light shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NEC</span>
            </div>
            <span className="font-bold text-corporate-text text-lg">N.E.C GENIE CIVIL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-corporate-text hover:text-corporate-blue transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-corporate-text hover:text-corporate-blue transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-corporate-text hover:text-corporate-blue transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-corporate-text hover:text-corporate-blue transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-corporate-text hover:text-corporate-blue transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="cta" 
              onClick={() => scrollToSection("contact")}
              className="ml-4"
            >
              Demander un devis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-corporate-gray-light">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-left text-corporate-text hover:text-corporate-blue transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("a-propos")}
                className="text-left text-corporate-text hover:text-corporate-blue transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-corporate-text hover:text-corporate-blue transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("temoignages")}
                className="text-left text-corporate-text hover:text-corporate-blue transition-colors"
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-corporate-text hover:text-corporate-blue transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="cta" 
                onClick={() => scrollToSection("contact")}
                className="self-start"
              >
                Demander un devis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;