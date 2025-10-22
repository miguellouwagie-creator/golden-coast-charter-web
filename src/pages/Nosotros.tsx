import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Shield, Heart, Star, Anchor, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import fondoNosotros from "@/assets/FondoSobreNosotros.jpg";
import captainImg from "@/assets/Captain5.jpg";

const Nosotros = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("about.value1.title"),
      description: t("about.value1.desc"),
    },
    {
      icon: Shield,
      title: t("about.value2.title"),
      description: t("about.value2.desc"),
    },
    {
      icon: Star,
      title: t("about.value3.title"),
      description: t("about.value3.desc"),
    },
    {
      icon: Users,
      title: t("about.value4.title"),
      description: t("about.value4.desc"),
    },
  ];

  const certifications = [
    t("about.cert1"),
    t("about.cert2"),
    t("about.cert3"),
    t("about.cert4"),
    t("about.cert5"),
  ];

  const testimonials = [
    {
      name: t("about.test1.name"),
      location: t("about.test1.location"),
      rating: 5,
      text: t("about.test1.text"),
    },
    {
      name: t("about.test2.name"),
      location: t("about.test2.location"),
      rating: 5,
      text: t("about.test2.text"),
    },
    {
      name: t("about.test3.name"),
      location: t("about.test3.location"),
      rating: 5,
      text: t("about.test3.text"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <HeroSection
        backgroundImage={fondoNosotros}
        title={t("about.heroTitle")}
        titleHighlight={t("about.heroHighlight")}
        description={t("about.heroDesc")}
      />

      {/* Our Story */}
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
                    {t("about.story.title")}
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>{t("about.story.p1")}</p>
                    <p>{t("about.story.p2")}</p>
                    <p>{t("about.story.p3")}</p>
                    <p className="font-semibold text-primary text-xl">
                      {t("about.story.p4")}
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
                      objectPosition: '88% center',
                    }}
                  />
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

      {/* Values */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2557 0%, #1a3a5c 50%, #0a192f 100%)' }}>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <h2 
            className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-4"
            style={{
              textShadow: '0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)'
            }}
          >
            {t("about.values.title")}
          </h2>
          
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
              {t("about.certs.title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("about.certs.subtitle")}
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
                  {t("about.certs.footer")}
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
              {t("about.testimonials.title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("about.testimonials.subtitle")}
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
            {t("about.cta.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            {t("about.cta.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold px-12"
            asChild
          >
            <Link to="/reserva">{t("about.cta.button")}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
