import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // ============= NAVBAR =============
    "nav.home": "Inicio",
    "nav.fleet": "Flota",
    "nav.experiences": "Experiencias",
    "nav.routes": "Rutas",
    "nav.about": "Nosotros",
    "nav.bookNow": "Reserva Ya",
    "nav.changeLanguage": "Cambiar idioma",
    
    // ============= INDEX PAGE =============
    // Hero
    "hero.title1": "El Mediterráneo,",
    "hero.title2": "como nunca lo has vivido.",
    "hero.subtitle": "Experiencias náuticas exclusivas en el corazón de la Costa Blanca",
    "hero.cta": "Ver Flota",
    
    // Quick Access
    "index.verFlota": "Ver la Flota",
    "index.descubrirBarcos": "Descubrir barcos",
    "index.experiencias": "Experiencias Únicas",
    "index.verRutas": "Ver rutas y eventos",
    "index.contacto": "Contacta Directo",
    "index.whatsapp": "Habla por WhatsApp",
    
    // Why Choose Us
    "index.whyTitle": "¿Por qué Golden Coast Charter?",
    "index.whyItem1Title": "Experiencia y Tradición",
    "index.whyItem1Desc": "Más de 10 años navegando la Costa Blanca, con patrones que conocen cada cala secreta y la historia del Mediterráneo.",
    "index.whyItem2Title": "Calidad y Excelencia",
    "index.whyItem2Desc": "Flota propia mantenida a la perfección. Cada detalle, desde la limpieza hasta el equipamiento, está pensado para una experiencia de 5 estrellas.",
    "index.whyItem3Title": "Seguridad y Confianza",
    "index.whyItem3Desc": "Tu tranquilidad es nuestra prioridad. Todos nuestros barcos cuentan con las máximas certificaciones de seguridad, seguros a todo riesgo y el mejor equipo.",
    
    // CTA
    "index.ctaTitle": "¿Listo para zarpar?",
    "index.ctaSubtitle": "Reserva tu experiencia náutica exclusiva en la Costa Blanca",
    "index.ctaButton": "Solicitar Presupuesto",
    
    // ============= FLEET PAGE =============
    "fleet.heroTitle": "Nuestra",
    "fleet.heroHighlight": "Flota",
    "fleet.heroDesc": "Barcos de motor y vela cuidadosamente seleccionados para ofrecerte la mejor experiencia en el Mediterráneo.",
    "fleet.scrollHint": "Desliza horizontalmente para explorar nuestra flota",
    "fleet.type.motor": "Motor",
    "fleet.type.sail": "Vela",
    "fleet.capacity": "Hasta {count} personas",
    "fleet.withCaptain": "Con patrón",
    "fleet.withoutCaptain": "Sin patrón disponible",
    "fleet.features": "Comodidades incluidas:",
    "fleet.priceLabel": "Precio orientativo",
    "fleet.from": "desde",
    "fleet.perDay": "/día",
    "fleet.checkAvailability": "Consultar Disponibilidad",
    "fleet.notFound.title": "¿No encuentras lo que buscas?",
    "fleet.notFound.desc": "Tenemos más opciones disponibles y podemos personalizar cualquier experiencia según tus necesidades. Contáctanos y te ayudaremos a encontrar el barco perfecto.",
    "fleet.notFound.button": "Contactar por WhatsApp",
    
    // Boat Descriptions
    "fleet.azure.desc": "Elegante yate a motor perfecto para celebraciones y rutas rápidas por la costa",
    "fleet.mediterranean.desc": "Velero de lujo ideal para experiencias náuticas auténticas y relajantes",
    "fleet.golden.desc": "Motor yacht versátil para grupos, familias y puestas de sol románticas",
    "fleet.serenity.desc": "Velero clásico ideal para puestas de sol románticas y explorar calas escondidas por la costa",
    "fleet.adrenaline.desc": "Lancha rápida y potente para los que buscan aventura. Perfecta para deportes acuáticos y rutas rápidas",
    "fleet.familia.desc": "Catamarán estable y espacioso diseñado para salidas familiares. Una plataforma perfecta para disfrutar del mar",
    
    // Boat Features
    "fleet.feature.bathroom": "Baño completo",
    "fleet.feature.solarium": "Solárium",
    "fleet.feature.fridge": "Nevera",
    "fleet.feature.music": "Equipo de música",
    "fleet.feature.lifejackets": "Chalecos salvavidas",
    "fleet.feature.cabin": "Cabina doble",
    "fleet.feature.kitchen": "Cocina equipada",
    "fleet.feature.shower": "Ducha",
    "fleet.feature.gps": "GPS y navegación",
    "fleet.feature.shade": "Zona de sombra",
    "fleet.feature.platform": "Plataforma de baño",
    "fleet.feature.bluetooth": "Altavoces Bluetooth",
    "fleet.feature.snorkel": "Snorkel incluido",
    "fleet.feature.paddleboard": "Paddleboard",
    "fleet.feature.snorkelKit": "Equipo de snorkel",
    
    // ============= EXPERIENCES PAGE =============
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
    
    // ============= BOOKING PAGE =============
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
    
    // ============= ABOUT PAGE =============
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
    
    // ============= FOOTER =============
    "footer.slogan": "Experiencias náuticas de lujo en la Costa Blanca. Alquiler de barcos en Dénia y Jávea para momentos inolvidables.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.experiences": "Experiencias",
    "footer.contact": "Contacto",
    "footer.email": "Email",
    "footer.phone": "Teléfono",
    "footer.social": "Síguenos",
    "footer.rights": "Todos los derechos reservados",
    "footer.legal.privacy": "Política de Privacidad",
    "footer.legal.terms": "Términos y Condiciones",
    "footer.legal.cookies": "Cookies",
    "footer.legal.notice": "Aviso Legal",
    "footer.exp.sunset": "Puestas de Sol",
    "footer.exp.celebrations": "Celebraciones",
    "footer.exp.family": "Rutas Familiares",
    "footer.exp.custom": "Charter Personalizado",
    "footer.location": "Puerto de Dénia\nMarina de Jávea\nCosta Blanca, España",
  },
  en: {
    // ============= NAVBAR =============
    "nav.home": "Home",
    "nav.fleet": "Fleet",
    "nav.experiences": "Experiences",
    "nav.routes": "Routes",
    "nav.about": "About Us",
    "nav.bookNow": "Book Now",
    "nav.changeLanguage": "Change language",
    
    // ============= INDEX PAGE =============
    // Hero
    "hero.title1": "The Mediterranean,",
    "hero.title2": "like you've never experienced it.",
    "hero.subtitle": "Exclusive nautical experiences in the heart of Costa Blanca",
    "hero.cta": "View Fleet",
    
    // Quick Access
    "index.verFlota": "View Fleet",
    "index.descubrirBarcos": "Discover boats",
    "index.experiencias": "Unique Experiences",
    "index.verRutas": "View routes and events",
    "index.contacto": "Direct Contact",
    "index.whatsapp": "Chat on WhatsApp",
    
    // Why Choose Us
    "index.whyTitle": "Why Golden Coast Charter?",
    "index.whyItem1Title": "Experience and Tradition",
    "index.whyItem1Desc": "Over 10 years sailing the Costa Blanca, with captains who know every secret cove and Mediterranean history.",
    "index.whyItem2Title": "Quality and Excellence",
    "index.whyItem2Desc": "Our own fleet maintained to perfection. Every detail, from cleanliness to equipment, is designed for a 5-star experience.",
    "index.whyItem3Title": "Safety and Trust",
    "index.whyItem3Desc": "Your peace of mind is our priority. All our boats have the highest safety certifications, comprehensive insurance, and the best equipment.",
    
    // CTA
    "index.ctaTitle": "Ready to set sail?",
    "index.ctaSubtitle": "Book your exclusive nautical experience in Costa Blanca",
    "index.ctaButton": "Request Quote",
    
    // ============= FLEET PAGE =============
    "fleet.heroTitle": "Our",
    "fleet.heroHighlight": "Fleet",
    "fleet.heroDesc": "Carefully selected motor and sailboats to offer you the best experience in the Mediterranean.",
    "fleet.scrollHint": "Swipe horizontally to explore our fleet",
    "fleet.type.motor": "Motor",
    "fleet.type.sail": "Sail",
    "fleet.capacity": "Up to {count} people",
    "fleet.withCaptain": "With Captain",
    "fleet.withoutCaptain": "Without captain available",
    "fleet.features": "Included amenities:",
    "fleet.priceLabel": "Estimated price",
    "fleet.from": "from",
    "fleet.perDay": "/day",
    "fleet.checkAvailability": "Check Availability",
    "fleet.notFound.title": "Can't find what you're looking for?",
    "fleet.notFound.desc": "We have more options available and can customize any experience according to your needs. Contact us and we'll help you find the perfect boat.",
    "fleet.notFound.button": "Contact via WhatsApp",
    
    // Boat Descriptions
    "fleet.azure.desc": "Elegant motor yacht perfect for celebrations and fast coastal routes",
    "fleet.mediterranean.desc": "Luxury sailboat ideal for authentic and relaxing nautical experiences",
    "fleet.golden.desc": "Versatile motor yacht for groups, families and romantic sunsets",
    "fleet.serenity.desc": "Classic sailboat ideal for romantic sunsets and exploring hidden coves along the coast",
    "fleet.adrenaline.desc": "Fast and powerful speedboat for those seeking adventure. Perfect for water sports and quick routes",
    "fleet.familia.desc": "Stable and spacious catamaran designed for family outings. A perfect platform to enjoy the sea",
    
    // Boat Features
    "fleet.feature.bathroom": "Full bathroom",
    "fleet.feature.solarium": "Solarium",
    "fleet.feature.fridge": "Fridge",
    "fleet.feature.music": "Music system",
    "fleet.feature.lifejackets": "Life jackets",
    "fleet.feature.cabin": "Double cabin",
    "fleet.feature.kitchen": "Equipped kitchen",
    "fleet.feature.shower": "Shower",
    "fleet.feature.gps": "GPS and navigation",
    "fleet.feature.shade": "Shade area",
    "fleet.feature.platform": "Swimming platform",
    "fleet.feature.bluetooth": "Bluetooth speakers",
    "fleet.feature.snorkel": "Snorkel included",
    "fleet.feature.paddleboard": "Paddleboard",
    "fleet.feature.snorkelKit": "Snorkel equipment",
    
    // ============= EXPERIENCES PAGE =============
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
    
    // ============= BOOKING PAGE =============
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
    
    // ============= ABOUT PAGE =============
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
    
    // ============= FOOTER =============
    "footer.slogan": "Luxury nautical experiences on the Costa Blanca. Boat rentals in Dénia and Jávea for unforgettable moments.",
    "footer.quickLinks": "Quick Links",
    "footer.experiences": "Experiences",
    "footer.contact": "Contact",
    "footer.email": "Email",
    "footer.phone": "Phone",
    "footer.social": "Follow Us",
    "footer.rights": "All rights reserved",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms & Conditions",
    "footer.legal.cookies": "Cookies",
    "footer.legal.notice": "Legal Notice",
    "footer.exp.sunset": "Sunset Cruises",
    "footer.exp.celebrations": "Celebrations",
    "footer.exp.family": "Family Routes",
    "footer.exp.custom": "Custom Charter",
    "footer.location": "Port of Dénia\nMarina of Jávea\nCosta Blanca, Spain",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  // Cargar idioma desde localStorage al iniciar
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  // Guardar en localStorage al cambiar idioma
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
