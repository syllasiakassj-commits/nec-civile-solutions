import { useState, useCallback, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

interface NECKnowledgeBase {
  [key: string]: string;
}

const necKnowledgeBase: NECKnowledgeBase = {
  "qui est nec genie civil": "N.E.C GENIE CIVIL est une SARL P basée à Abidjan, spécialisée dans le génie civil, la construction et les services techniques. Nous sommes votre partenaire de confiance pour tous vos projets immobiliers et industriels.",
  
  "services": "Nos services incluent : Promotion immobilière, Quincaillerie, Construction métallique, Canalisation & adduction d'eau, Électricité rurale et bâtiment, Plomberie bâtiment, Peinture bâtiment et industrielle, Étanchéité, Sécurité électronique, Pose de bouches d'incendie et divers.",
  
  "localisation": "Nous sommes situés à Abidjan Marcory Résidentiel, Rue des Sipos. Notre adresse postale : 13 BP 1798 Abidjan 13. Nous intervenons principalement à Abidjan et sur toute la Côte d'Ivoire.",
  
  "contact": "Vous pouvez nous contacter par email à n.e.c.genie.civile@gmail.com ou via notre page Facebook. Pour un devis personnalisé, utilisez notre formulaire de contact sur le site.",
  
  "devis": "Oui, nous proposons des devis gratuits et personnalisés pour tous vos projets. Vous pouvez faire une demande via notre formulaire de contact ou nous contacter directement.",
  
  "garanties": "Nous garantissons la conformité et la durabilité de tous nos ouvrages. Notre équipe professionnelle assure un suivi qualité rigoureux sur chaque projet.",
  
  "valeurs": "Nos valeurs fondamentales sont : la Fiabilité, l'Expertise, l'Innovation et la Sécurité. Nous nous engageons à livrer des projets de qualité dans les délais convenus."
};

const quickSuggestions = [
  { id: 'services', text: 'Vos services', query: 'services' },
  { id: 'devis', text: 'Demander un devis', query: 'devis' },
  { id: 'contact', text: 'Contact', query: 'contact' }
];

export const useChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { toast } = useToast();

  const generateResponse = useCallback((query: string): string => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Recherche directe dans la knowledge base
    for (const [key, value] of Object.entries(necKnowledgeBase)) {
      if (normalizedQuery.includes(key)) {
        return value;
      }
    }
    
    // Recherche par mots-clés
    if (normalizedQuery.includes('service') || normalizedQuery.includes('métier') || normalizedQuery.includes('activité')) {
      return necKnowledgeBase.services;
    }
    
    if (normalizedQuery.includes('où') || normalizedQuery.includes('adresse') || normalizedQuery.includes('situé') || normalizedQuery.includes('zone')) {
      return necKnowledgeBase.localisation;
    }
    
    if (normalizedQuery.includes('devis') || normalizedQuery.includes('prix') || normalizedQuery.includes('tarif') || normalizedQuery.includes('coût')) {
      return necKnowledgeBase.devis;
    }
    
    if (normalizedQuery.includes('contact') || normalizedQuery.includes('joindre') || normalizedQuery.includes('téléphone') || normalizedQuery.includes('email')) {
      return necKnowledgeBase.contact;
    }
    
    if (normalizedQuery.includes('garantie') || normalizedQuery.includes('qualité') || normalizedQuery.includes('fiabilité')) {
      return necKnowledgeBase.garanties;
    }
    
    if (normalizedQuery.includes('qui êtes-vous') || normalizedQuery.includes('présentation') || normalizedQuery.includes('entreprise')) {
      return necKnowledgeBase["qui est nec genie civil"];
    }
    
    // Réponse par défaut
    return "Je ne peux répondre qu'aux questions concernant N.E.C GENIE CIVIL et nos services. Pour des questions plus spécifiques, n'hésitez pas à nous contacter directement à n.e.c.genie.civile@gmail.com";
  }, []);

  const addMessage = useCallback((type: 'user' | 'bot', message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;
    
    setHasInteracted(true);
    addMessage('user', message);
    setIsTyping(true);
    
    // Simulation d'un délai de réponse
    setTimeout(() => {
      const response = generateResponse(message);
      addMessage('bot', response);
      setIsTyping(false);
    }, 1000);
  }, [addMessage, generateResponse]);

  const sendWelcomeMessage = useCallback(() => {
    const welcomeMessage = "Bonjour 👋 Bienvenue chez N.E.C GENIE CIVIL ! Avez-vous une question sur nos services ?";
    addMessage('bot', welcomeMessage);
  }, [addMessage]);

  const sendFollowUpMessage = useCallback(() => {
    const followUpMessage = "Vous pouvez poser votre question ici, nous sommes disponibles pour vous aider 🙂";
    addMessage('bot', followUpMessage);
  }, [addMessage]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        sendWelcomeMessage();
      }, 500);
    }
  }, [isOpen, messages.length, sendWelcomeMessage]);

  useEffect(() => {
    if (isOpen && !hasInteracted) {
      const timer = setTimeout(() => {
        sendFollowUpMessage();
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, hasInteracted, sendFollowUpMessage]);

  return {
    isOpen,
    setIsOpen,
    messages,
    isTyping,
    sendMessage,
    quickSuggestions
  };
};