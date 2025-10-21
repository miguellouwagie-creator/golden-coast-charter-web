import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Shield, Heart, Star, Anchor, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import fondoNosotros from "@/assets/FondoSobreNosotros.jpg";
import captainImg from "@/assets/Captain5.jpg";

const Nosotros = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasión por el Mar",
      description: "Cada salida es una oportunidad para compartir nuestra pasión por la navegación y el Mediterráneo.",
    },
    {
      icon: Shield,
      title: "Seguridad Primero",
      description: "Todos nuestros barcos cuentan con certificaciones al día, seguros completos y equipamiento de seguridad profesional.",
    },
    {
      icon: Star,
      title: "Excelencia en Servicio",
      description: "Nuestro objetivo es superar tus expectativas en cada experiencia, cuidando cada detalle.",
    },
    {
      icon: Users,
      title: "Trato Personalizado",
      description: "No somos una gran corporación. Somos un equipo que te acompaña desde la reserva hasta el desembarque.",
    },
  ];

  const certifications = [
    "Licencias náuticas profesionales",
    "Seguros todo riesgo",
    "Certificados de navegabilidad",
    "Formación en primeros auxilios",
    "Mantenimiento certificado",
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Madrid",
      rating: 5,
      text: "Una experiencia inolvidable. El atardecer desde el barco fue mágico y el equipo súper profesional y atento. ¡Totalmente recomendable!",
    },
    {
      name: "John Smith",
      location: "UK",
      rating: 5,
      text: "Best boat charter experience in Costa Blanca! Beautiful yacht, amazing crew, and the hidden coves were spectacular. Will definitely return!",
    },
    {
      name: "Carlos Ruiz",
      location: "Valencia",
      rating: 5,
      text: "Celebramos mi cumpleaños a bordo y fue perfecto. La decoración, la comida, todo estaba cuidado al detalle. Gracias por hacer este día tan especial.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-40 pb-16 px-4 relative overflow-hidden">
        {/* Imagen de fondo SIN blur */}
        <div 
          className="absolute inset-0 bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${fondoNosotros})`,
            backgroundPosition: 'center 35%',
          }}
        />
        
        {/* Overlay moderado - 40% oscuro */}
        <div className="absolute inset-0 bg-[#0A192F]/40" />
        
        {/* Contenido */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
            Sobre <span className="text-gradient-gold">Nosotros</span>
          </h1>
          <p className="text-xl text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de apasionados por el mar con más de 10 años creando experiencias náuticas únicas en la Costa Blanca.
          </p>
        </div>
      </section>

      {/* Our Story - CON IMAGEN DEL CAPITÁN CORREGIDA */}
<section className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <Card className="border-none shadow-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[700px]">
          {/* Contenido de texto - 3 columnas */}
          <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="flex items-center justify-start mb-8">
              <Anchor className="h-16 w-16 text-gold" />
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
              Nuestra Historia
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Golden Coast Charter nació del sueño de compartir la belleza incomparable del Mediterráneo con personas de todo el mundo. Fundada por marineros experimentados y amantes del mar, nuestra misión desde el primer día ha sido clara: ofrecer experiencias náuticas de lujo que combinen seguridad, confort y momentos inolvidables.
              </p>
              
              <p>
                Con base en los puertos de Dénia y Jávea, dos de los rincones más espectaculares de la Costa Blanca, navegamos estas aguas con profundo conocimiento y respeto. Conocemos cada cala secreta, cada punto de puesta de sol perfecto, cada ruta que te dejará sin aliento.
              </p>
              
              <p>
                Nuestra flota está compuesta por barcos cuidadosamente seleccionados y mantenidos con los más altos estándares. Porque entendemos que tu experiencia comienza mucho antes de zarpar y termina mucho después de llegar a puerto, cuidamos cada detalle con dedicación.
              </p>
              
              <p className="font-semibold text-primary text-xl">
                En Golden Coast Charter, no solo alquilamos barcos. Creamos recuerdos que duran toda la vida.
              </p>
            </div>
          </div>

          {/* Imagen del capitán - 2 columnas */}
          <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-full overflow-hidden">
            <img
              src={captainImg}
              alt="Capitán Golden Coast Charter"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
  objectPosition: '88% center', // ← Prueba con 'right', 'left', o '60% center'
}}

            />
            {/* Sombra sutil para dar profundidad */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%)',
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

{/* Values - Premium con degradado azul y detalles dorados */}
<section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2557 0%, #1a3a5c 50%, #0a192f 100%)' }}>
  {/* Detalles decorativos dorados de fondo */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
  <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
  
  <div className="container mx-auto relative z-10">
    {/* Título con sombra dorada */}
    <h2 
      className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-4"
      style={{
        textShadow: '0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)'
      }}
    >
      Nuestros Valores
    </h2>
    
    {/* Línea decorativa dorada */}
    <div className="flex justify-center mb-16">
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <Card 
          key={index} 
          className="border-none shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.15)] transition-all duration-500 hover:scale-105 text-center bg-white/95 backdrop-blur-sm"
          style={{
            boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 1px rgba(255,215,0,0.2)'
          }}
        >
          <CardContent className="p-8 relative">
            {/* Acento dorado superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative"
              style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%)',
                boxShadow: '0 4px 20px rgba(255,215,0,0.2), inset 0 0 20px rgba(255,215,0,0.1)'
              }}
            >
              <value.icon className="h-8 w-8 text-gold" />
            </div>
            
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              {value.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Certificados y Licencias
            </h2>
            <p className="text-xl text-muted-foreground">
              Tu seguridad y tranquilidad son nuestra prioridad
            </p>
          </div>

          <Card className="border-none shadow-card bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8 lg:p-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-gold flex-shrink-0" />
                    <span className="text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
                <p className="text-primary-foreground/90">
                  Todos nuestros patrones cuentan con titulación profesional y años de experiencia navegando en estas aguas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiencias reales de personas que navegaron con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-card">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold text-primary mb-6">
            ¿Listo para tu aventura en el mar?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Únete a cientos de clientes satisfechos que ya han vivido la experiencia Golden Coast
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold px-12"
            asChild
          >
            <Link to="/reserva">Solicita tu Presupuesto</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
