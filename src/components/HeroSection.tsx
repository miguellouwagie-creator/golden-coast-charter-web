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
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#0A192F]/40" />
      
      {/* Contenido con backdrop blur */}
      <div className="container mx-auto text-center relative z-10">
        {/* Caja con blur de fondo */}
        <div className="inline-block backdrop-blur-md bg-black/30 rounded-2xl px-8 py-10 sm:px-12 sm:py-12 shadow-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title} <span className="text-gradient-gold">{titleHighlight}</span>
          </h1>
          <p 
            className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
