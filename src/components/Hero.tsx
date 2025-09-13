import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Votre partenaire de confiance en{" "}
            <span className="text-corporate-blue-light">génie civil</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Construction et solutions techniques complètes pour vos projets immobiliers et industriels à Abidjan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4"
            >
              Demandez un devis
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="cta-outline" 
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-corporate-blue"
            >
              Nos services
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Expertise</div>
                <div className="text-white/80">Reconnue</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Équipe</div>
                <div className="text-white/80">Qualifiée</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Délais</div>
                <div className="text-white/80">Respectés</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;