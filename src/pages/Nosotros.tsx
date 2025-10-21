import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Shield, Heart, Star, Anchor, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom"; // Importado para el enlace al formulario

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
      <section className="pt-40 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Sobre <span className="text-gradient-gold">Nosotros</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de apasionados por el mar con más de 10 años creando experiencias náuticas únicas en la Costa Blanca.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-none shadow-card">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-8">
                <Anchor className="h-16 w-16 text-gold" />
              </div>
              
              <h2 className="font-heading text-3xl font-bold text-primary text-center mb-8">
                Nuestra Historia
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Golden Coast Charter nació del sueño de compartir la belleza incomparable del Mediterráneo con personas de todo el mundo. Fundada por marineros experimentados y amantes del mar, nuestra misión desde el primer día ha sido clara: ofrecer experiencias náuticas de lujo que combinen seguridad, confort y momentos inolvidables.
                </p>
                
                <p>
                  Con base en los puertos de Dénia y Jávea, dos de los rincones más espectaculares de la Costa Blanca, navegamos estas aguas con profundo conocimiento y respeto. Conocemos cada cala secreta, cada punto de puesta de sol perfecto, cada ruta que te dejará sin aliento.
                </p>
                
                <p>
                  Nuestra flota está compuesta por barcos cuidadosamente seleccionados y mantenidos con los más altos estándares. Porque entendemos que tu experiencia comienza mucho antes de zarpar y termina mucho después de llegar a puerto, cuidamos cada detalle con dedicación.
                </p>
                
                <p className="font-semibold text-primary">
                  En Golden Coast Charter, no solo alquilamos barcos. Creamos recuerdos que duran toda la vida.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary text-center mb-16">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
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

