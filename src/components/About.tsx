import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Target, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Des projets menés avec rigueur et professionnalisme pour garantir votre satisfaction."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Adoption des dernières technologies et méthodes pour des solutions optimales."
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Une équipe qualifiée avec de nombreuses années d'expérience dans le génie civil."
    },
    {
      icon: Handshake,
      title: "Engagement",
      description: "Un partenariat durable basé sur la confiance et la transparence."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-corporate-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text mb-4">
              À propos de N.E.C GENIE CIVIL
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-corporate-gray max-w-3xl mx-auto">
              Depuis sa création, N.E.C GENIE CIVIL accompagne ses clients dans leurs projets 
              immobiliers et industriels avec professionnalisme et engagement.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-card p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-corporate-text mb-4">
                  Notre Mission
                </h3>
                <p className="text-corporate-gray leading-relaxed mb-6">
                  Nous nous engageons à fournir des solutions de génie civil complètes et innovantes, 
                  en mettant l'accent sur la qualité, la sécurité et la satisfaction client. 
                  Notre expertise couvre tous les aspects de la construction, de la conception à la réalisation.
                </p>
                <p className="text-corporate-gray leading-relaxed">
                  Basée à Abidjan, notre entreprise contribue au développement urbain et industriel 
                  de la Côte d'Ivoire en proposant des services techniques de haute qualité.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-corporate-blue-light rounded-lg">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">10+</div>
                  <div className="text-sm text-corporate-gray">Services spécialisés</div>
                </div>
                <div className="text-center p-4 bg-corporate-blue-light rounded-lg">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">100%</div>
                  <div className="text-sm text-corporate-gray">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-corporate-text mb-3">
                    {value.title}
                  </h4>
                  <p className="text-corporate-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;