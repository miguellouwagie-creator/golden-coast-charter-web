import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sunset, PartyPopper, Heart, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import sunsetImg from "@/assets/experience-sunset.jpg";
import partyImg from "@/assets/experience-party.jpg";
import fondoExperiencias from "@/assets/FondoExperiencias.jpg";

const Experiencias = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      id: "sunset",
      icon: Sunset,
      title: t("exp.sunset.title"),
      image: sunsetImg,
      description: t("exp.sunset.desc"),
      highlights: [
        t("exp.sunset.highlight1"),
        t("exp.sunset.highlight2"),
        t("exp.sunset.highlight3"),
        t("exp.sunset.highlight4"),
      ],
      price: t("exp.sunset.price"),
      ideal: t("exp.sunset.ideal"),
    },
    {
      id: "celebrations",
      icon: PartyPopper,
      title: t("exp.celebrations.title"),
      image: partyImg,
      description: t("exp.celebrations.desc"),
      highlights: [
        t("exp.celebrations.highlight1"),
        t("exp.celebrations.highlight2"),
        t("exp.celebrations.highlight3"),
        t("exp.celebrations.highlight4"),
      ],
      price: t("exp.celebrations.price"),
      ideal: t("exp.celebrations.ideal"),
    },
    {
      id: "family",
      icon: Users,
      title: t("exp.family.title"),
      image: sunsetImg,
      description: t("exp.family.desc"),
      highlights: [
        t("exp.family.highlight1"),
        t("exp.family.highlight2"),
        t("exp.family.highlight3"),
        t("exp.family.highlight4"),
      ],
      price: t("exp.family.price"),
      ideal: t("exp.family.ideal"),
    },
    {
      id: "custom",
      icon: Sparkles,
      title: t("exp.custom.title"),
      image: partyImg,
      description: t("exp.custom.desc"),
      highlights: [
        t("exp.custom.highlight1"),
        t("exp.custom.highlight2"),
        t("exp.custom.highlight3"),
        t("exp.custom.highlight4"),
      ],
      price: t("exp.custom.price"),
      ideal: t("exp.custom.ideal"),
    },
  ];

  const customExperienceMessage = language === 'es'
    ? "Hola, me gustaría crear una experiencia personalizada."
    : "Hello, I would like to create a customized experience.";

  const customExperienceLink = `https://wa.me/34676262628?text=${encodeURIComponent(customExperienceMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <HeroSection
        backgroundImage={fondoExperiencias}
        title={t("exp.heroTitle")}
        titleHighlight={t("exp.heroHighlight")}
        description={t("exp.heroDesc")}
      />

      {/* Experiences Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp) => {
              const infoMessage = language === 'es'
                ? `Hola, quisiera información sobre la experiencia '${exp.title}'.`
                : `Hello, I would like information about the '${exp.title}' experience.`;
              
              return (
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
                        {t("exp.includes")}
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
                      <p className="text-sm text-muted-foreground mb-1">{t("exp.idealFor")}</p>
                      <p className="text-foreground font-medium">{exp.ideal}</p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div>
                        <p className="font-heading text-2xl font-bold text-gold">{exp.price}</p>
                      </div>
                      <Button className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold" asChild>
                        <a href={`https://wa.me/34676262628?text=${encodeURIComponent(infoMessage)}`} target="_blank" rel="noopener noreferrer">
                          {t("exp.requestInfo")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                {t("exp.cta.title")}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                {t("exp.cta.desc")}
              </p>
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold px-12" asChild>
                <a href={customExperienceLink} target="_blank" rel="noopener noreferrer">
                  {t("exp.cta.button")}
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
