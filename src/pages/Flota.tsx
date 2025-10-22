import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Anchor, Waves, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import yachtMotor from "@/assets/yacht-motor-1.jpg";
import yachtSail from "@/assets/yacht-sail-1.jpg";
import fondoFlota from "@/assets/FondoFlota.jpg";

const Flota = () => {
  const whatsappLink = "https://wa.me/34676262628?text=Hola,%20quisiera%20consultar%20la%20disponibilidad%20de%20un%20barco.";
  const whatsappHelpLink = "https://wa.me/34676262628?text=Hola,%20necesito%20ayuda%20para%20encontrar%20un%20barco.";
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    {
      id: 4,
      name: "Serenity",
      type: "Vela",
      image: yachtSail,
      capacity: 8,
      withCaptain: true,
      price: "desde 600€/día",
      features: ["Baño completo", "Solárium", "Nevera", "Equipo de música"],
      description: "Velero clásico ideal para puestas de sol románticas y explorar calas escondidas por la costa",
    },
    {
      id: 5,
      name: "Adrenaline",
      type: "Motor",
      image: yachtMotor,
      capacity: 6,
      withoutCaptain: true,
      price: "desde 450€/día",
      features: ["Solárium", "Nevera", "Equipo de música", "Chalecos salvavidas"],
      description: "Lancha rápida y potente para los que buscan aventura. Perfecta para deportes acuáticos y rutas rápidas",
    },
    {
      id: 6,
      name: "La Familia",
      type: "Motor",
      image: yachtMotor,
      capacity: 12,
      withCaptain: true,
      price: "desde 950€/día",
      features: ["Baño completo", "Solárium", "Paddleboard", "Equipo de snorkel", "Nevera"],
      description: "Catamarán estable y espacioso diseñado para salidas familiares. Una plataforma perfecta para disfrutar del mar",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 520;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const BoatCard = ({ boat }: { boat: typeof boats[0] }) => (
    <Card className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-all duration-500 h-full flex flex-col">
      <div className="relative h-80">
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

      <CardContent className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            {boat.name}
          </h2>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            {boat.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2 text-foreground">
              <Users className="h-5 w-5 text-gold" />
              <span className="font-semibold text-sm">Hasta {boat.capacity} personas</span>
            </div>
            {boat.withCaptain && (
              <div className="flex items-center space-x-2 text-foreground">
                <Anchor className="h-5 w-5 text-gold" />
                <span className="text-sm">Con patrón</span>
              </div>
            )}
            {boat.withoutCaptain && (
              <div className="flex items-center space-x-2 text-foreground">
                <Waves className="h-5 w-5 text-gold" />
                <span className="text-sm">Sin patrón disponible</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h4 className="font-heading font-semibold text-primary mb-3 text-sm">Comodidades incluidas:</h4>
            <div className="flex flex-wrap gap-2">
              {boat.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="border-primary/30 text-foreground text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Precio orientativo</p>
            <p className="font-heading text-2xl font-bold text-gold">{boat.price}</p>
          </div>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold w-full group"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <span>Consultar Disponibilidad</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <HeroSection
        backgroundImage={fondoFlota}
        title="Nuestra"
        titleHighlight="Flota"
        description="Barcos de motor y vela cuidadosamente seleccionados para ofrecerte la mejor experiencia en el Mediterráneo."
      >
        {!isMobile && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <ChevronLeft className="w-6 h-6 text-gold animate-pulse-slow drop-shadow-lg" />
            <p className="text-sm text-gold font-semibold drop-shadow-lg">
              Desliza horizontalmente para explorar nuestra flota
            </p>
            <ChevronRight className="w-6 h-6 text-gold animate-pulse-slow drop-shadow-lg" />
          </div>
        )}
      </HeroSection>

      {/* DESKTOP: Horizontal Scroll con botones */}
      {!isMobile ? (
        <section className="py-12 relative">
          {/* Botón izquierdo */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gold/90 hover:bg-gold text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Botón derecho */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gold/90 hover:bg-gold text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth px-8 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {boats.map((boat) => (
              <div key={boat.id} style={{ minWidth: "500px", maxWidth: "500px" }}>
                <BoatCard boat={boat} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* MOBILE: Swiper Carousel */
        <section className="py-12">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
            style={{
              paddingTop: "20px",
              paddingBottom: "60px",
            }}
          >
            {boats.map((boat) => (
              <SwiperSlide key={boat.id} style={{ width: "350px", height: "auto" }}>
                <BoatCard boat={boat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="bg-secondary border-none">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tenemos más opciones disponibles y podemos personalizar cualquier experiencia según tus necesidades. Contáctanos y te ayudaremos a encontrar el barco perfecto.
              </p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={whatsappHelpLink} target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
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

export default Flota;
