import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  titleHighlight: string;
  description: string;
  children?: ReactNode;
}

const HeroSection = ({ backgroundImage, title, titleHighlight, description, children }: HeroSectionProps) => {
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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A192F]/40" />
      
      {/* Contenido */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6 px-4">
          {title} <span className="text-gradient-gold">{titleHighlight}</span>
        </h1>
        <p 
          className="text-lg sm:text-xl text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {description}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
