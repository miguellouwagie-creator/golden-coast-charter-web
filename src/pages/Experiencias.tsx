import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sunset, PartyPopper, Heart, Users, Sparkles, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import sunsetImg from "@/assets/experience-sunset.jpg";
import partyImg from "@/assets/experience-party.jpg";

const Experiencias = () => {
  const experiences = [
    {
      id: "sunset",
      icon: Sunset,
      title: "Puestas de Sol Románticas",
      image: sunsetImg,
      description: "Vive la magia del atardecer mediterráneo desde la cubierta de un barco de lujo. Incluye copa de cava, música ambiente y los mejores puntos de vista de la Costa Blanca.",
      highlights: ["2-3 horas de navegación", "Copa de bienvenida", "Música personalizada", "Snacks gourmet"],
      price: "desde 450€",
      ideal: "Parejas, aniversarios, peticiones de mano",
    },
    {
      id: "celebrations",
      icon: PartyPopper,
      title: "Despedidas y Cumpleaños",
      image: partyImg,
      description: "Celebra tus momentos especiales navegando por las aguas cristalinas. Packs personalizados con decoración, catering, música y actividades acuáticas.",
      highlights: ["Decoración temática", "Catering a medida", "Sistema de sonido profesional", "Actividades incluidas"],
      price: "desde 800€",
      ideal: "Grupos de amigos, despedidas, cumpleaños",
    },
    {
      id: "family",
      icon: Users,
      title: "Aventuras Familiares",
      image: sunsetImg,
      description: "Rutas diseñadas para disfrutar en familia, con paradas en calas secretas, snorkel, paddle surf y pesca. Seguridad total y diversión garantizada para todas las edades.",
      highlights: ["Equipo de snorkel", "Paddle surf", "Zonas de sombra", "Seguridad infantil"],
      price: "desde 600€",
      ideal: "Familias con niños, grupos multigeneracionales",
    },
    {
      id: "custom",
      icon: Sparkles,
      title: "Excursiones a Medida",
      image: partyImg,
      description: "Diseñamos la experiencia perfecta según tus preferencias: rutas gastronómicas, yoga en el mar, fotografía profesional, eventos corporativos o lo que imagines.",
      highlights: ["Totalmente personalizable", "Rutas exclusivas", "Servicios premium", "Atención VIP"],
      price: "Presupuesto personalizado",
      ideal: "Cualquier ocasión especial",
    },
  ];

  const destinations = [
    { name: "Cova Tallada", icon: Compass },
    { name: "Cabo San Antonio", icon: Compass },
    { name: "Cala Porticholl", icon: Compass },
    { name: "Las Rotas", icon: Compass },
    { name: "Cala Ambolo", icon: Compass },
  ];

  const customExperienceLink = "https://wa.me/34676262628?text=Hola,%20me%20gustaría%20crear%20una%20experiencia%20personalizada.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Experiencias <span className="text-gradient-gold">Inolvidables</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada navegación es única. Crea recuerdos que durarán para siempre en las aguas más hermosas del Mediterráneo.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <Card key={exp.id} id={exp.id} className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-smooth group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold mb-3">
                      <exp.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-primary-foreground">{exp.title}</h2>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-primary mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-gold" />
                      Incluye:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-foreground">
                          <span className="text-gold mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Ideal para:</p>
                    <p className="text-foreground font-medium">{exp.ideal}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="font-heading text-2xl font-bold text-gold">{exp.price}</p>
                    </div>
                    <Button className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold" asChild>
                      <a href={`https://wa.me/34676262628?text=Hola,%20quisiera%20información%20sobre%20la%20experiencia%20'${exp.title}'.`} target="_blank" rel="noopener noreferrer">
                        Solicitar Info
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Strip */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h3 className="font-heading text-3xl font-bold text-center mb-8">
            Destinos que visitamos
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="flex items-center space-x-2 text-primary-foreground/90">
                <dest.icon className="h-5 w-5 text-gold" />
                <span className="font-medium">{dest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero text-primary-foreground border-none shadow-elegant">
            <CardContent className="p-12 text-center">
              <Heart className="h-16 w-16 text-gold mx-auto mb-6" />
              <h2 className="font-heading text-4xl font-bold mb-4">
                ¿Tienes una idea especial en mente?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Creamos experiencias completamente personalizadas. Cuéntanos tu visión y la haremos realidad.
              </p>
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold px-12" asChild>
                <a href={customExperienceLink} target="_blank" rel="noopener noreferrer">
                  Crear Mi Experiencia
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiencias;

