import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Sparkles, MessageSquare, Star, Award, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import videoEntrada from "@/assets/Video Entrada.mp4";

const Index = () => {
  const features = [
    {
      icon: Anchor,
      title: "Ver la Flota",
      description: "Descubre nuestros barcos de motor y vela, con y sin patrón",
      link: "/flota",
    },
    {
      icon: Sparkles,
      title: "Experiencias Personalizadas",
      description: "Puestas de sol, celebraciones, rutas exclusivas a medida",
      link: "/experiencias",
    },
    {
      icon: MessageSquare,
      title: "Contacto Directo",
      description: "WhatsApp instantáneo para reservas y consultas",
      link: "#contact",
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Experiencia Premium",
      description: "Más de 10 años navegando la Costa Blanca con excelencia",
    },
    {
      icon: Award,
      title: "Flota Propia",
      description: "Barcos cuidados y mantenidos a la perfección",
    },
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Certificaciones completas y seguros todo riesgo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section - Estilo Nicolai Palmkvist con tipografía premium */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Video Background con efecto parallax fijo */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              objectFit: 'cover'
            }}
          >
            <source src={videoEntrada} type="video/mp4" />
            Tu navegador no soporta vídeos HTML5.
          </video>
        </div>

        {/* Optimized Dark Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" 
          style={{ zIndex: 1 }} 
        />

        {/* Content - Alineado a la izquierda, estilo Nicolai */}
        <div className="relative z-10 container mx-auto px-8 md:px-16">
          <div className="max-w-4xl">
            <h1 
              className="text-white mb-8 leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{ 
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                fontWeight: 500,
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                animationDelay: '0.2s',
                animationFillMode: 'backwards',
                letterSpacing: '-0.02em'
              }}
            >
              El Mediterráneo,<br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block'
                }}
              >
                a tu ritmo.
              </span>
            </h1>
            
            <p 
  className="text-white/85 max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000"
  style={{ 
    fontFamily: "'Inter', sans-serif",
    fontSize: 'clamp(1.125rem, 2.2vw, 1.375rem)',
    fontWeight: 300,
    lineHeight: 1.8,
    letterSpacing: '0.03em',
    textShadow: '0 2px 20px rgba(0,0,0,0.6)',
    animationDelay: '0.4s',
    animationFillMode: 'backwards'
  }}
>
  Experiencias náuticas exclusivas en el corazón de la Costa Blanca
</p>


            {/* Botón Píldora Visible */}
            <div 
              className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{
                animationDelay: '0.6s',
                animationFillMode: 'backwards'
              }}
            >
              <Link
                to="/flota"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <Anchor className="w-6 h-6" strokeWidth={2} />
                <span>Ver Flota</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor con z-index alto para que las secciones aparezcan sobre el vídeo */}
      <div className="relative z-20 bg-background">
        
        {/* Quick Access Cards - Espaciado mejorado estilo Nicolai */}
        <section className="py-32 px-4 bg-gradient-ocean">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-card backdrop-blur-sm group"
                >
                  <CardContent className="p-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 mb-8 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-10 w-10 text-gold" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-5 text-primary group-hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-semibold px-8 py-5 h-auto" 
                      asChild
                    >
                      <Link to={feature.link}>Más información</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Espaciado generoso */}
        <section className="py-32 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
                ¿Por qué Golden Coast Charter?
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tu experiencia náutica perfecta en la Costa Blanca
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8 group-hover:bg-gold/20 transition-all duration-500 group-hover:scale-110">
                    <item.icon className="h-12 w-12 text-primary group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-3xl font-semibold mb-5 text-primary group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground px-12 py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold hover:scale-105"
                asChild
              >
                <Link to="/nosotros">Conócenos mejor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section - Mejorado con gradiente más sutil */}
        <section className="py-32 px-4 bg-gradient-to-br from-primary via-primary-light to-primary text-primary-foreground relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              ¿Listo para zarpar?
            </h2>
            <p className="text-2xl mb-12 text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
              Consulta disponibilidad, solicita presupuesto personalizado o habla directamente con nosotros por WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold px-12 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 text-lg"
                asChild
              >
                <Link to="/reserva">Solicitar Presupuesto</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-7 h-auto font-semibold transition-all duration-300 hover:scale-105 text-lg backdrop-blur-sm"
                asChild
              >
                <Link to="/precios">Ver Precios</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
      {/* Fin del contenedor con z-index alto */}
    </div>
  );
};

export default Index;
