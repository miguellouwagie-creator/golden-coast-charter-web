import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Sparkles, MessageSquare, Star, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-yacht.jpg";

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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Descubre la Costa Blanca<br />
            <span className="text-gradient-gold">desde el mar</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
            Alquiler de barcos de lujo en Dénia y Jávea.<br className="hidden md:block" />
            Experiencias náuticas inolvidables en el Mediterráneo.
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-accent-foreground text-lg px-12 py-6 h-auto shadow-gold transition-bounce"
            asChild
          >
            <Link to="/flota">Reserva tu Experiencia</Link>
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 px-4 bg-gradient-ocean">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 cursor-pointer bg-card"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                    <feature.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-accent-foreground" asChild>
                    <Link to={feature.link}>Más información</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              ¿Por qué Golden Coast Charter?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tu experiencia náutica perfecta en la Costa Blanca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-gold/10 transition-smooth">
                  <item.icon className="h-10 w-10 text-primary group-hover:text-gold transition-smooth" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-10 shadow-elegant"
              asChild
            >
              <Link to="/nosotros">Conócenos mejor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para zarpar?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Consulta disponibilidad, solicita presupuesto personalizado o habla directamente con nosotros por WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-accent-foreground px-10 shadow-gold"
              asChild
            >
              <Link to="/reserva">Solicitar Presupuesto</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10"
              asChild
            >
              <Link to="/precios">Ver Precios</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
