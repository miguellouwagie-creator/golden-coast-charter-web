import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  backgroundImage: string;
  titleKey?: string; // Clave de traducción para el título
  titleHighlightKey?: string; // Clave de traducción para el highlight
  descriptionKey?: string; // Clave de traducción para la descripción
  title?: string; // Título estático (fallback)
  titleHighlight?: string; // Highlight estático (fallback)
  description?: string; // Descripción estática (fallback)
  children?: ReactNode;
}

const HeroSection = ({ 
  backgroundImage, 
  titleKey,
  titleHighlightKey,
  descriptionKey,
  title, 
  titleHighlight, 
  description, 
  children 
}: HeroSectionProps) => {
  const { t } = useLanguage();

  // Usar traducción si existe la key, sino usar el texto estático
  const displayTitle = titleKey ? t(titleKey) : title || "";
  const displayHighlight = titleHighlightKey ? t(titleHighlightKey) : titleHighlight || "";
  const displayDescription = descriptionKey ? t(descriptionKey) : description || "";

  return (
    <section className="pt-40 pb-16 px-4 relative overflow-hidden">
      {/* Imagen de fondo - fixed en desktop, scroll en móvil */}
      <div 
        className="absolute inset-0 bg-cover lg:bg-fixed bg-scroll"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
        }}
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#0A192F]/40" />
      
      {/* Contenido SIN caja blur */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6 px-4">
          {displayTitle} {displayHighlight && <span className="text-gradient-gold">{displayHighlight}</span>}
        </h1>
        <p 
          className="text-lg sm:text-xl text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {displayDescription}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
