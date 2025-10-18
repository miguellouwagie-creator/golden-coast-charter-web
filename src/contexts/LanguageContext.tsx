import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.fleet": "Flota",
    "nav.experiences": "Experiencias",
    "nav.about": "Nosotros",
    "nav.bookNow": "Reserva Ya",
    "nav.changeLanguage": "Cambiar idioma",
    
    // Hero
    "hero.title": "Descubre la Costa Blanca desde el mar",
    "hero.subtitle": "Vive experiencias únicas en barcos de lujo en Dénia y Jávea",
    "hero.cta": "Reserva tu experiencia",
    
    // Quick Access
    "quick.fleet.title": "Ver la Flota",
    "quick.fleet.desc": "Explora nuestra selección de yates de lujo",
    "quick.experiences.title": "Experiencias",
    "quick.experiences.desc": "Descubre nuestras excursiones personalizadas",
    "quick.contact.title": "Contacto WhatsApp",
    "quick.contact.desc": "Habla con nosotros directamente",
    
    // Values
    "values.title": "¿Por qué elegirnos?",
    "values.luxury.title": "Lujo y Confort",
    "values.luxury.desc": "Barcos premium equipados con todas las comodidades",
    "values.safety.title": "Seguridad Garantizada",
    "values.safety.desc": "Certificados y cumplimiento de todas las normativas",
    "values.experience.title": "Experiencia",
    "values.experience.desc": "Años navegando por la Costa Blanca",
    "values.personalized.title": "Servicio Personalizado",
    "values.personalized.desc": "Rutas y experiencias adaptadas a ti",
    
    // Footer
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.email": "Email",
    "footer.phone": "Teléfono",
    "footer.social": "Síguenos",
    "footer.rights": "Todos los derechos reservados",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",
    
    // Fleet
    "fleet.title": "Nuestra Flota",
    "fleet.subtitle": "Selecciona el barco perfecto para tu aventura",
    "fleet.motorYacht": "Yate a Motor",
    "fleet.sailingYacht": "Yate de Vela",
    "fleet.withCaptain": "Con Patrón",
    "fleet.capacity": "Capacidad",
    "fleet.people": "personas",
    "fleet.from": "Desde",
    "fleet.perDay": "/día",
    "fleet.features": "Características",
    "fleet.checkAvailability": "Consultar Disponibilidad",
    
    // Experiences
    "exp.title": "Experiencias Personalizadas",
    "exp.subtitle": "Crea recuerdos inolvidables en el Mediterráneo",
    "exp.sunset.title": "Puestas de Sol Románticas",
    "exp.sunset.desc": "Navega mientras el sol se pone sobre el Mediterráneo, experiencia perfecta para parejas",
    "exp.party.title": "Despedidas y Cumpleaños",
    "exp.party.desc": "Celebra tus momentos especiales navegando con amigos y música",
    "exp.family.title": "Aventuras Familiares",
    "exp.family.desc": "Descubre calas secretas y disfruta del snorkel en familia",
    "exp.custom.title": "Excursiones a Medida",
    "exp.custom.desc": "Diseñamos la ruta perfecta según tus preferencias",
    "exp.learnMore": "Más Información",
    
    // Booking
    "booking.title": "Reserva tu Experiencia",
    "booking.subtitle": "Completa el formulario y nos pondremos en contacto contigo",
    "booking.name": "Nombre completo",
    "booking.email": "Email",
    "booking.phone": "Teléfono",
    "booking.date": "Fecha preferida",
    "booking.selectDate": "Selecciona una fecha",
    "booking.boatType": "Tipo de barco",
    "booking.selectBoat": "Selecciona un barco",
    "booking.motor": "Yate a Motor",
    "booking.sailing": "Yate de Vela",
    "booking.catamaran": "Catamarán",
    "booking.people": "Número de personas",
    "booking.experience": "Experiencia deseada",
    "booking.selectExp": "Selecciona una experiencia",
    "booking.sunset": "Puesta de Sol",
    "booking.party": "Celebración",
    "booking.family": "Aventura Familiar",
    "booking.customRoute": "Ruta Personalizada",
    "booking.message": "Mensaje adicional",
    "booking.tellUs": "Cuéntanos más sobre tu plan...",
    "booking.send": "Enviar Solicitud",
    "booking.whatsapp": "O escríbenos por WhatsApp",
    "booking.why.title": "¿Por qué reservar con nosotros?",
    "booking.why.direct": "Contacto Directo",
    "booking.why.directDesc": "Sin intermediarios, habla directamente con nosotros",
    "booking.why.flexible": "Cancelación Flexible",
    "booking.why.flexibleDesc": "Políticas de cancelación adaptadas",
    "booking.why.best": "Mejor Precio",
    "booking.why.bestDesc": "Garantía del mejor precio directo",
    
    // About
    "about.title": "Sobre Nosotros",
    "about.subtitle": "Tu partner de confianza para experiencias náuticas en la Costa Blanca",
    "about.story.title": "Nuestra Historia",
    "about.story.text": "Golden Coast Charter nace de la pasión por el mar Mediterráneo y el deseo de compartir las mejores experiencias náuticas. Con años de experiencia navegando por la Costa Blanca, conocemos cada rincón, cada cala escondida y los mejores momentos para disfrutar del mar.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.text": "Ofrecer experiencias náuticas de lujo accesibles, donde cada cliente viva momentos únicos e inolvidables. Nos comprometemos con la seguridad, el servicio personalizado y la satisfacción total de nuestros clientes.",
    "about.certs.title": "Certificaciones y Licencias",
    "about.certs.text": "Todos nuestros barcos cumplen con la normativa vigente y nuestros patrones están certificados y cuentan con amplia experiencia.",
    "about.test.title": "Lo Que Dicen Nuestros Clientes",
    "about.test.1": "Una experiencia inolvidable. El barco impecable y el patrón super amable. Repetiremos seguro.",
    "about.test.2": "Celebramos nuestro aniversario viendo el atardecer desde el barco. Simplemente mágico.",
    "about.test.3": "Profesionales de principio a fin. Todo perfecto, muy recomendable para familias.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.fleet": "Fleet",
    "nav.experiences": "Experiences",
    "nav.about": "About Us",
    "nav.bookNow": "Book Now",
    "nav.changeLanguage": "Change language",
    
    // Hero
    "hero.title": "Discover the Costa Blanca from the Sea",
    "hero.subtitle": "Live unique experiences on luxury boats in Dénia and Jávea",
    "hero.cta": "Book Your Experience",
    
    // Quick Access
    "quick.fleet.title": "View Fleet",
    "quick.fleet.desc": "Explore our selection of luxury yachts",
    "quick.experiences.title": "Experiences",
    "quick.experiences.desc": "Discover our personalized excursions",
    "quick.contact.title": "WhatsApp Contact",
    "quick.contact.desc": "Talk to us directly",
    
    // Values
    "values.title": "Why Choose Us?",
    "values.luxury.title": "Luxury & Comfort",
    "values.luxury.desc": "Premium boats equipped with all amenities",
    "values.safety.title": "Safety Guaranteed",
    "values.safety.desc": "Certified and compliant with all regulations",
    "values.experience.title": "Experience",
    "values.experience.desc": "Years sailing the Costa Blanca",
    "values.personalized.title": "Personalized Service",
    "values.personalized.desc": "Routes and experiences tailored to you",
    
    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.email": "Email",
    "footer.phone": "Phone",
    "footer.social": "Follow Us",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    
    // Fleet
    "fleet.title": "Our Fleet",
    "fleet.subtitle": "Select the perfect boat for your adventure",
    "fleet.motorYacht": "Motor Yacht",
    "fleet.sailingYacht": "Sailing Yacht",
    "fleet.withCaptain": "With Captain",
    "fleet.capacity": "Capacity",
    "fleet.people": "people",
    "fleet.from": "From",
    "fleet.perDay": "/day",
    "fleet.features": "Features",
    "fleet.checkAvailability": "Check Availability",
    
    // Experiences
    "exp.title": "Personalized Experiences",
    "exp.subtitle": "Create unforgettable memories in the Mediterranean",
    "exp.sunset.title": "Romantic Sunsets",
    "exp.sunset.desc": "Sail as the sun sets over the Mediterranean, perfect experience for couples",
    "exp.party.title": "Parties & Birthdays",
    "exp.party.desc": "Celebrate your special moments sailing with friends and music",
    "exp.family.title": "Family Adventures",
    "exp.family.desc": "Discover secret coves and enjoy snorkeling with family",
    "exp.custom.title": "Custom Excursions",
    "exp.custom.desc": "We design the perfect route according to your preferences",
    "exp.learnMore": "Learn More",
    
    // Booking
    "booking.title": "Book Your Experience",
    "booking.subtitle": "Complete the form and we'll get in touch with you",
    "booking.name": "Full name",
    "booking.email": "Email",
    "booking.phone": "Phone",
    "booking.date": "Preferred date",
    "booking.selectDate": "Select a date",
    "booking.boatType": "Boat type",
    "booking.selectBoat": "Select a boat",
    "booking.motor": "Motor Yacht",
    "booking.sailing": "Sailing Yacht",
    "booking.catamaran": "Catamaran",
    "booking.people": "Number of people",
    "booking.experience": "Desired experience",
    "booking.selectExp": "Select an experience",
    "booking.sunset": "Sunset",
    "booking.party": "Celebration",
    "booking.family": "Family Adventure",
    "booking.customRoute": "Custom Route",
    "booking.message": "Additional message",
    "booking.tellUs": "Tell us more about your plan...",
    "booking.send": "Send Request",
    "booking.whatsapp": "Or write to us on WhatsApp",
    "booking.why.title": "Why book with us?",
    "booking.why.direct": "Direct Contact",
    "booking.why.directDesc": "No intermediaries, talk directly with us",
    "booking.why.flexible": "Flexible Cancellation",
    "booking.why.flexibleDesc": "Adapted cancellation policies",
    "booking.why.best": "Best Price",
    "booking.why.bestDesc": "Best direct price guarantee",
    
    // About
    "about.title": "About Us",
    "about.subtitle": "Your trusted partner for nautical experiences on the Costa Blanca",
    "about.story.title": "Our Story",
    "about.story.text": "Golden Coast Charter is born from a passion for the Mediterranean Sea and the desire to share the best nautical experiences. With years of experience sailing the Costa Blanca, we know every corner, every hidden cove, and the best moments to enjoy the sea.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "To offer accessible luxury nautical experiences, where each client lives unique and unforgettable moments. We are committed to safety, personalized service, and total customer satisfaction.",
    "about.certs.title": "Certifications and Licenses",
    "about.certs.text": "All our boats comply with current regulations and our captains are certified and have extensive experience.",
    "about.test.title": "What Our Clients Say",
    "about.test.1": "An unforgettable experience. The boat was impeccable and the captain super friendly. We'll definitely repeat.",
    "about.test.2": "We celebrated our anniversary watching the sunset from the boat. Simply magical.",
    "about.test.3": "Professionals from start to finish. Everything perfect, highly recommended for families.",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
