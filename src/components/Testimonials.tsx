import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Kouassi",
      company: "Directrice Générale, Entreprise KOFFI & Associés",
      content: "N.E.C GENIE CIVIL a réalisé l'installation électrique complète de notre nouveau siège social. Un travail impeccable, respectant les délais et notre budget.",
      rating: 5
    },
    {
      name: "Jean-Baptiste Traoré",
      company: "Promoteur immobilier",
      content: "Excellent partenaire pour nos projets de construction métallique. L'équipe est professionnelle et les finitions sont de très haute qualité.",
      rating: 5
    },
    {
      name: "Aminata Diallo",
      company: "Propriétaire, Résidence Les Palmiers",
      content: "Travaux d'étanchéité et de peinture réalisés avec soin. Je recommande vivement N.E.C GENIE CIVIL pour leur sérieux et leur expertise.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Quels sont vos délais de livraison moyens ?",
      answer: "Nos délais varient selon la complexité du projet. Pour les travaux standard, comptez 2 à 4 semaines. Pour les projets plus importants, nous établissons un planning détaillé lors de l'étude préliminaire."
    },
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer: "Nous intervenons principalement sur Abidjan et ses environs. Pour des projets d'envergure, nous pouvons étendre notre zone d'intervention à toute la Côte d'Ivoire."
    },
    {
      question: "Proposez-vous des garanties sur vos travaux ?",
      answer: "Oui, tous nos travaux sont garantis. La durée de garantie varie selon le type de prestation : 1 an pour les travaux de finition, 2 ans pour les installations techniques, et jusqu'à 10 ans pour les ouvrages structurels."
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "Contactez-nous par téléphone, email ou via notre formulaire de contact. Nous organiserons une visite sur site pour évaluer vos besoins et vous fournir un devis détaillé sous 48h."
    },
    {
      question: "Acceptez-vous les paiements échelonnés ?",
      answer: "Oui, nous proposons des solutions de paiement adaptées à chaque projet. Les modalités sont définies lors de la signature du contrat."
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-corporate-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text mb-4">
              Témoignages & FAQ
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-corporate-gray max-w-3xl mx-auto">
              Découvrez ce que nos clients pensent de nos services et trouvez les réponses 
              aux questions les plus fréquentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-corporate-text mb-8">
                Ce que disent nos clients
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Quote className="text-corporate-blue mt-1 flex-shrink-0" size={24} />
                        <div className="flex-1">
                          <p className="text-corporate-gray italic mb-4">
                            "{testimonial.content}"
                          </p>
                          <div className="flex items-center space-x-2 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-yellow-400 fill-current" size={16} />
                            ))}
                          </div>
                          <div>
                            <div className="font-semibold text-corporate-text">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-corporate-gray">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-corporate-text mb-8">
                Questions fréquentes
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-corporate-gray-light rounded-lg bg-white shadow-card"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-corporate-text hover:text-corporate-blue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-corporate-gray">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;