import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  Wrench, 
  Construction, 
  Droplets, 
  Zap, 
  PaintBucket, 
  Shield, 
  Video,
  Flame,
  Home
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Promotion immobilière",
      description: "Développement de projets immobiliers complets, de la conception à la livraison."
    },
    {
      icon: Wrench,
      title: "Quincaillerie",
      description: "Fourniture de matériaux et équipements de qualité pour tous vos projets."
    },
    {
      icon: Construction,
      title: "Construction métallique",
      description: "Structures métalliques sur mesure, charpentes et ouvrages industriels."
    },
    {
      icon: Droplets,
      title: "Canalisation & adduction d'eau",
      description: "Installation et maintenance de réseaux d'eau potable et d'assainissement."
    },
    {
      icon: Zap,
      title: "Électricité rurale & bâtiment",
      description: "Installations électriques complètes pour habitations et infrastructures rurales."
    },
    {
      icon: Home,
      title: "Plomberie bâtiment",
      description: "Travaux de plomberie pour constructions neuves et rénovations."
    },
    {
      icon: PaintBucket,
      title: "Peinture bâtiment & industrielle",
      description: "Revêtements et peintures spécialisées pour tous types de surfaces."
    },
    {
      icon: Shield,
      title: "Étanchéité",
      description: "Solutions d'étanchéité pour toitures, terrasses et ouvrages d'art."
    },
    {
      icon: Video,
      title: "Sécurité électronique",
      description: "Systèmes de surveillance et de sécurité électronique modernes."
    },
    {
      icon: Flame,
      title: "Pose de bouches d'incendie",
      description: "Installation de systèmes de sécurité incendie et équipements divers."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text mb-4">
              Nos Domaines d'Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-corporate-gray max-w-3xl mx-auto">
              Une gamme complète de services techniques pour répondre à tous vos besoins 
              en génie civil et construction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate-text mb-3 group-hover:text-corporate-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-corporate-gray leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-corporate-blue-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-corporate-text mb-4">
                Besoin d'un service spécifique ?
              </h3>
              <p className="text-corporate-gray mb-6">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-corporate hover:shadow-xl"
              >
                Demander un devis gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;