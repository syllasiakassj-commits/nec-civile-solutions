import { Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-corporate-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NEC</span>
              </div>
              <span className="font-bold text-lg">N.E.C GENIE CIVIL</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance en génie civil, construction et solutions techniques complètes. 
              Basés à Abidjan, nous accompagnons vos projets avec expertise et professionnalisme.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:n.e.c.genie.civile@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("accueil")}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("a-propos")}
                  className="hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  Abidjan Marcory Résidentiel<br />
                  Rue des Sipos<br />
                  13 BP 1798 Abidjan 13
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="flex-shrink-0" size={16} />
                <a 
                  href="mailto:n.e.c.genie.civile@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  n.e.c.genie.civile@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} N.E.C GENIE CIVIL (SARL P). Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;