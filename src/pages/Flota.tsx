import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Anchor, Waves, Zap, Wine, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import yachtMotor from "@/assets/yacht-motor-1.jpg";
import yachtSail from "@/assets/yacht-sail-1.jpg";

const Flota = () => {
  const boats = [
    {
      id: 1,
      name: "Azure Dream",
      type: "Motor",
      image: yachtMotor,
      capacity: 12,
      withCaptain: true,
      price: "desde 800€/día",
      features: ["Baño completo", "Solárium", "Nevera", "Equipo de música", "Chalecos salvavidas"],
      description: "Elegante yate a motor perfecto para celebraciones y rutas rápidas por la costa",
    },
    {
      id: 2,
      name: "Mediterranean Star",
      type: "Vela",
      image: yachtSail,
      capacity: 8,
      withCaptain: true,
      withoutCaptain: true,
      price: "desde 600€/día",
      features: ["Cabina doble", "Cocina equipada", "Ducha", "Solárium", "GPS y navegación"],
      description: "Velero de lujo ideal para experiencias náuticas auténticas y relajantes",
    },
    {
      id: 3,
      name: "Golden Wave",
      type: "Motor",
      image: yachtMotor,
      capacity: 10,
      withCaptain: true,
      price: "desde 700€/día",
      features: ["Zona de sombra", "Plataforma de baño", "Nevera", "Altavoces Bluetooth", "Snorkel incluido"],
      description: "Motor yacht versátil para grupos, familias y puestas de sol románticas",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Nuestra <span className="text-gradient-gold">Flota</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Barcos de motor y vela cuidadosamente seleccionados para ofrecerte la mejor experiencia en el Mediterráneo. Con o sin patrón, tú decides.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {boats.map((boat) => (
              <Card key={boat.id} className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-smooth">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={boat.image}
                      alt={boat.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-accent-foreground text-sm px-4 py-2 shadow-gold">
                        {boat.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                      {boat.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {boat.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-foreground">
                        <Users className="h-5 w-5 text-gold" />
                        <span className="font-semibold">Hasta {boat.capacity} personas</span>
                      </div>
                      {boat.withCaptain && (
                        <div className="flex items-center space-x-2 text-foreground">
                          <Anchor className="h-5 w-5 text-gold" />
                          <span>Con patrón</span>
                        </div>
                      )}
                      {boat.withoutCaptain && (
                        <div className="flex items-center space-x-2 text-foreground">
                          <Waves className="h-5 w-5 text-gold" />
                          <span>Sin patrón disponible</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-primary mb-3">Comodidades incluidas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {boat.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="border-primary/30 text-foreground">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Precio orientativo</p>
                        <p className="font-heading text-2xl font-bold text-gold">{boat.price}</p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold w-full sm:w-auto"
                      >
                        Consultar Disponibilidad
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <Card className="mt-16 bg-secondary border-none">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tenemos más opciones disponibles y podemos personalizar cualquier experiencia según tus necesidades. Contáctanos y te ayudaremos a encontrar el barco perfecto.
              </p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contactar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flota;
