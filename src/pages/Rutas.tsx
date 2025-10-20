import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Anchor, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import routeLasRotas from "@/assets/route-las-rotas.jpg";
import routeJaveaCoves from "@/assets/route-javea-coves.jpg";
import routeSunsetMontgo from "@/assets/route-sunset-montgo.jpg";

const Rutas = () => {
  const routes = [
    {
      id: 1,
      name: "Las Rotas & Reserva Marina del Cabo de San Antonio",
      icon: Compass,
      image: routeLasRotas,
      location: "Dénia - Cabo San Antonio",
      duration: "4-6 horas",
      description: "Navigate the stunning coastline of Las Rotas, discovering its hidden caves and snorkeling in the protected waters of the Cabo de San Antonio marine reserve. A journey into nature's heart.",
      highlights: ["Cuevas naturales", "Snorkel en reserva marina", "Aguas cristalinas", "Fondos rocosos"],
    },
    {
      id: 2,
      name: "The Coves of Jávea (Granadella, Portitxol, Ambolo)",
      icon: MapPin,
      image: routeJaveaCoves,
      location: "Jávea - Costa del Cabo",
      duration: "5-7 horas",
      description: "Explore the most famous coves of Jávea from a unique perspective. Anchor in the turquoise waters of Granadella, admire the blue-domed houses of Portitxol, and feel the magic of Ambolo.",
      highlights: ["Cala Granadella", "Portitxol", "Cala Ambolo", "Fondeo en calas vírgenes"],
    },
    {
      id: 3,
      name: "Sunset and Cliffs of Montgó",
      icon: Anchor,
      image: routeSunsetMontgo,
      location: "Dénia - Montgó",
      duration: "2-3 horas",
      description: "Experience an unforgettable sunset as the sun dips behind the majestic Montgó mountain. A moment of pure magic, perfect for a romantic evening or a peaceful end to the day.",
      highlights: ["Atardecer mágico", "Vistas del Montgó", "Momento romántico", "Cava incluido"],
    },
  ];
  
  const customRouteLink = "https://wa.me/34676262628?text=Hola,%20me%20gustaría%20crear%20una%20ruta%20personalizada.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-32 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Nuestras <span className="text-gradient-gold">Rutas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre los rincones más espectaculares de la Costa Blanca. Cada ruta es una aventura única diseñada para vivir el Mediterráneo en su máxima expresión.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {routes.map((route, index) => (
              <Card 
                key={route.id} 
                className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={route.image}
                      alt={route.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 text-white mb-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-semibold">{route.location}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 rounded-full bg-gold/10">
                        <route.icon className="h-6 w-6 text-gold" />
                      </div>
                      <Badge className="bg-secondary text-foreground text-sm px-4 py-2">
                        {route.duration}
                      </Badge>
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                      {route.name}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {route.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-heading font-semibold text-primary mb-3">Destacados de la ruta:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {route.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-gold" />
                            <span className="text-sm text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold w-full sm:w-auto"
                      asChild
                    >
                      <a href={`https://wa.me/34676262628?text=Hola,%20quisiera%20reservar%20la%20ruta%20'${route.name}'.`} target="_blank" rel="noopener noreferrer">
                        Reservar esta Ruta
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-gradient-ocean border-none">
            <CardContent className="p-12 text-center">
              <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                ¿Tienes una ruta en mente?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Podemos personalizar cualquier itinerario según tus preferencias. Ya sea una cala específica, una combinación de rutas, o un destino especial, diseñamos la experiencia perfecta para ti.
              </p>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold"
                asChild
              >
                <a href={customRouteLink} target="_blank" rel="noopener noreferrer">
                  Crear Ruta Personalizada
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

export default Rutas;
