import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Facebook, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text mb-4">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-corporate-gray max-w-3xl mx-auto">
              Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour obtenir 
              un devis personnalisé et découvrir comment nous pouvons vous accompagner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-corporate-text mb-6">
                    Demandez votre devis
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-corporate-text mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-corporate-gray-light focus:border-corporate-blue"
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-corporate-text mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-corporate-gray-light focus:border-corporate-blue"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-corporate-text mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border-corporate-gray-light focus:border-corporate-blue resize-none"
                        placeholder="Décrivez votre projet, vos besoins et toute information utile..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="cta" 
                      className="w-full text-lg py-3"
                    >
                      <Send className="mr-2" size={20} />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-corporate-text mb-2">Nos adresses</h4>
                      <div className="text-corporate-gray space-y-1">
                        <div>
                          <strong>Géographique :</strong><br />
                          Abidjan Marcory Résidentiel, Rue des Sipos
                        </div>
                        <div>
                          <strong>Postale :</strong><br />
                          13 BP 1798 Abidjan 13
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-corporate-text mb-2">Email</h4>
                      <a 
                        href="mailto:n.e.c.genie.civile@gmail.com"
                        className="text-corporate-blue hover:underline"
                      >
                        n.e.c.genie.civile@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Facebook className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-corporate-text mb-2">Réseaux sociaux</h4>
                      <a 
                        href="#"
                        className="text-corporate-blue hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Page NEC Genie Civil
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="bg-corporate-blue-light rounded-xl p-6">
                <h4 className="font-bold text-corporate-text mb-4">Pourquoi nous choisir ?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full"></div>
                    <span className="text-corporate-gray">Devis gratuit sous 48h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full"></div>
                    <span className="text-corporate-gray">Équipe d'experts qualifiés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full"></div>
                    <span className="text-corporate-gray">Garantie sur tous nos travaux</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full"></div>
                    <span className="text-corporate-gray">Respect des délais convenus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;