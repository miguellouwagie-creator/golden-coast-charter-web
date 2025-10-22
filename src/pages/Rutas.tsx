import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Anchor, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import routeLasRotas from "@/assets/route-las-rotas.jpg";
import routeJaveaCoves from "@/assets/route-javea-coves.jpg";
import routeSunsetMontgo from "@/assets/route-sunset-montgo.jpg";
import fondoRutas from "@/assets/FondoRutas.jpg";

const Rutas = () => {
  const { t, language } = useLanguage();

  const routes = [
    {
      id: 1,
      name: t("routes.route1.name"),
      icon: Compass,
      image: routeLasRotas,
      location: t("routes.route1.location"),
      duration: t("routes.route1.duration"),
      description: t("routes.route1.desc"),
      highlights: [
        t("routes.route1.highlight1"),
        t("routes.route1.highlight2"),
        t("routes.route1.highlight3"),
        t("routes.route1.highlight4"),
      ],
    },
    {
      id: 2,
      name: t("routes.route2.name"),
      icon: MapPin,
      image: routeJaveaCoves,
      location: t("routes.route2.location"),
      duration: t("routes.route2.duration"),
      description: t("routes.route2.desc"),
      highlights: [
        t("routes.route2.highlight1"),
        t("routes.route2.highlight2"),
        t("routes.route2.highlight3"),
        t("routes.route2.highlight4"),
      ],
    },
    {
      id: 3,
      name: t("routes.route3.name"),
      icon: Anchor,
      image: routeSunsetMontgo,
      location: t("routes.route3.location"),
      duration: t("routes.route3.duration"),
      description: t("routes.route3.desc"),
      highlights: [
        t("routes.route3.highlight1"),
        t("routes.route3.highlight2"),
        t("routes.route3.highlight3"),
        t("routes.route3.highlight4"),
      ],
    },
  ];
  
  const customRouteMessage = language === 'es'
    ? "Hola, me gustaría crear una ruta personalizada."
    : "Hello, I would like to create a customized route.";

  const customRouteLink = `https://wa.me/34676262628?text=${encodeURIComponent(customRouteMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <HeroSection
        backgroundImage={fondoRutas}
        title={t("routes.heroTitle")}
        titleHighlight={t("routes.heroHighlight")}
        description={t("routes.heroDesc")}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {routes.map((route, index) => {
              const bookMessage = language === 'es'
                ? `Hola, quisiera reservar la ruta '${route.name}'.`
                : `Hello, I would like to book the '${route.name}' route.`;

              return (
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
                        <h4 className="font-heading font-semibold text-primary mb-3">
                          {t("routes.highlights")}
                        </h4>
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
                        <a href={`https://wa.me/34676262628?text=${encodeURIComponent(bookMessage)}`} target="_blank" rel="noopener noreferrer">
                          {t("routes.bookRoute")}
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-16 bg-gradient-ocean border-none">
            <CardContent className="p-12 text-center">
              <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                {t("routes.cta.title")}
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                {t("routes.cta.desc")}
              </p>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold"
                asChild
              >
                <a href={customRouteLink} target="_blank" rel="noopener noreferrer">
                  {t("routes.cta.button")}
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
