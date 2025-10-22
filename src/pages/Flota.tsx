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
import { useLanguage } from "@/contexts/LanguageContext";
import yachtMotor from "@/assets/yacht-motor-1.jpg";
import yachtSail from "@/assets/yacht-sail-1.jpg";
import fondoFlota from "@/assets/FondoFlota.jpg";

const Flota = () => {
  const { t, language } = useLanguage();
  
  const whatsappMessage = language === 'es' 
    ? "Hola, quisiera consultar la disponibilidad de un barco."
    : "Hello, I would like to inquire about boat availability.";
  
  const whatsappHelpMessage = language === 'es'
    ? "Hola, necesito ayuda para encontrar un barco."
    : "Hello, I need help finding a boat.";
  
  const whatsappLink = `https://wa.me/34676262628?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappHelpLink = `https://wa.me/34676262628?text=${encodeURIComponent(whatsappHelpMessage)}`;
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Función helper para mapear features
  const getFeatureKey = (feature: string): string => {
    const featureMap: Record<string, string> = {
      "Baño completo": "fleet.feature.bathroom",
      "Full bathroom": "fleet.feature.bathroom",
      "Solárium": "fleet.feature.solarium",
      "Solarium": "fleet.feature.solarium",
      "Nevera": "fleet.feature.fridge",
      "Fridge": "fleet.feature.fridge",
      "Equipo de música": "fleet.feature.music",
      "Music system": "fleet.feature.music",
      "Chalecos salvavidas": "fleet.feature.lifejackets",
      "Life jackets": "fleet.feature.lifejackets",
      "Cabina doble": "fleet.feature.cabin",
      "Double cabin": "fleet.feature.cabin",
      "Cocina equipada": "fleet.feature.kitchen",
      "Equipped kitchen": "fleet.feature.kitchen",
      "Ducha": "fleet.feature.shower",
      "Shower": "fleet.feature.shower",
      "GPS y navegación": "fleet.feature.gps",
      "GPS and navigation": "fleet.feature.gps",
      "Zona de sombra": "fleet.feature.shade",
      "Shade area": "fleet.feature.shade",
      "Plataforma de baño": "fleet.feature.platform",
      "Swimming platform": "fleet.feature.platform",
      "Altavoces Bluetooth": "fleet.feature.bluetooth",
      "Bluetooth speakers": "fleet.feature.bluetooth",
      "Snorkel incluido": "fleet.feature.snorkel",
      "Snorkel included": "fleet.feature.snorkel",
      "Paddleboard": "fleet.feature.paddleboard",
      "Equipo de snorkel": "fleet.feature.snorkelKit",
      "Snorkel equipment": "fleet.feature.snorkelKit",
    };
    return featureMap[feature] || feature;
  };

  const boats = [
    {
      id: 1,
      name: "Azure Dream",
      type: t("fleet.type.motor"),
      image: yachtMotor,
      capacity: 12,
      withCaptain: true,
      price: `${t("fleet.from")} 800€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.bathroom"),
        t("fleet.feature.solarium"),
        t("fleet.feature.fridge"),
        t("fleet.feature.music"),
        t("fleet.feature.lifejackets")
      ],
      description: t("fleet.azure.desc"),
    },
    {
      id: 2,
      name: "Mediterranean Star",
      type: t("fleet.type.sail"),
      image: yachtSail,
      capacity: 8,
      withCaptain: true,
      withoutCaptain: true,
      price: `${t("fleet.from")} 600€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.cabin"),
        t("fleet.feature.kitchen"),
        t("fleet.feature.shower"),
        t("fleet.feature.solarium"),
        t("fleet.feature.gps")
      ],
      description: t("fleet.mediterranean.desc"),
    },
    {
      id: 3,
      name: "Golden Wave",
      type: t("fleet.type.motor"),
      image: yachtMotor,
      capacity: 10,
      withCaptain: true,
      price: `${t("fleet.from")} 700€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.shade"),
        t("fleet.feature.platform"),
        t("fleet.feature.fridge"),
        t("fleet.feature.bluetooth"),
        t("fleet.feature.snorkel")
      ],
      description: t("fleet.golden.desc"),
    },
    {
      id: 4,
      name: "Serenity",
      type: t("fleet.type.sail"),
      image: yachtSail,
      capacity: 8,
      withCaptain: true,
      price: `${t("fleet.from")} 600€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.bathroom"),
        t("fleet.feature.solarium"),
        t("fleet.feature.fridge"),
        t("fleet.feature.music")
      ],
      description: t("fleet.serenity.desc"),
    },
    {
      id: 5,
      name: "Adrenaline",
      type: t("fleet.type.motor"),
      image: yachtMotor,
      capacity: 6,
      withoutCaptain: true,
      price: `${t("fleet.from")} 450€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.solarium"),
        t("fleet.feature.fridge"),
        t("fleet.feature.music"),
        t("fleet.feature.lifejackets")
      ],
      description: t("fleet.adrenaline.desc"),
    },
    {
      id: 6,
      name: "La Familia",
      type: t("fleet.type.motor"),
      image: yachtMotor,
      capacity: 12,
      withCaptain: true,
      price: `${t("fleet.from")} 950€${t("fleet.perDay")}`,
      features: [
        t("fleet.feature.bathroom"),
        t("fleet.feature.solarium"),
        t("fleet.feature.paddleboard"),
        t("fleet.feature.snorkelKit"),
        t("fleet.feature.fridge")
      ],
      description: t("fleet.familia.desc"),
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
              <span className="font-semibold text-sm">
                {t("fleet.capacity").replace("{count}", boat.capacity.toString())}
              </span>
            </div>
            {boat.withCaptain && (
              <div className="flex items-center space-x-2 text-foreground">
                <Anchor className="h-5 w-5 text-gold" />
                <span className="text-sm">{t("fleet.withCaptain")}</span>
              </div>
            )}
            {boat.withoutCaptain && (
              <div className="flex items-center space-x-2 text-foreground">
                <Waves className="h-5 w-5 text-gold" />
                <span className="text-sm">{t("fleet.withoutCaptain")}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h4 className="font-heading font-semibold text-primary mb-3 text-sm">
              {t("fleet.features")}
            </h4>
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
            <p className="text-sm text-muted-foreground mb-1">{t("fleet.priceLabel")}</p>
            <p className="font-heading text-2xl font-bold text-gold">{boat.price}</p>
          </div>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold w-full group"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <span>{t("fleet.checkAvailability")}</span>
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
        title={t("fleet.heroTitle")}
        titleHighlight={t("fleet.heroHighlight")}
        description={t("fleet.heroDesc")}
      >
        {!isMobile && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <ChevronLeft className="w-6 h-6 text-gold animate-pulse-slow drop-shadow-lg" />
            <p className="text-sm text-gold font-semibold drop-shadow-lg">
              {t("fleet.scrollHint")}
            </p>
            <ChevronRight className="w-6 h-6 text-gold animate-pulse-slow drop-shadow-lg" />
          </div>
        )}
      </HeroSection>

      {/* DESKTOP: Horizontal Scroll con botones */}
      {!isMobile ? (
        <section className="py-12 relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gold/90 hover:bg-gold text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

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
                {t("fleet.notFound.title")}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t("fleet.notFound.desc")}
              </p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={whatsappHelpLink} target="_blank" rel="noopener noreferrer">
                  {t("fleet.notFound.button")}
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
