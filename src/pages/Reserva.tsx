import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Phone, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Reserva = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    boatType: "",
    experience: "",
    message: "",
  });

  const whatsappMessage = language === 'es'
    ? "Hola, quiero información sobre la página de reservas."
    : "Hello, I want information about the booking page.";

  const whatsappLink = `https://wa.me/34676262628?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: t("booking.toast.error.title"),
        description: t("booking.toast.error.desc"),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t("booking.toast.success.title"),
      description: t("booking.toast.success.desc"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      boatType: "",
      experience: "",
      message: "",
    });
  };

  const benefits = [
    t("booking.benefit1"),
    t("booking.benefit2"),
    t("booking.benefit3"),
    t("booking.benefit4"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-32 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            {t("booking.heroTitle")} <span className="text-gradient-gold">{t("booking.heroHighlight")}</span>
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {t("booking.heroDesc")}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 border-none shadow-card">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-semibold">
                        {t("booking.form.name")} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("booking.form.namePlaceholder")}
                        required
                        className="border-input focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold">
                        {t("booking.form.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("booking.form.emailPlaceholder")}
                        required
                        className="border-input focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      {t("booking.form.phone")} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t("booking.form.phonePlaceholder")}
                      required
                      className="border-input focus:border-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-semibold">
                        {t("booking.form.date")}
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="border-input focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-foreground font-semibold">
                        {t("booking.form.guests")}
                      </Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="20"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        placeholder={t("booking.form.guestsPlaceholder")}
                        className="border-input focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="boatType" className="text-foreground font-semibold">
                        {t("booking.form.boatType")}
                      </Label>
                      <Select value={formData.boatType} onValueChange={(value) => setFormData({ ...formData, boatType: value })}>
                        <SelectTrigger className="border-input focus:border-gold">
                          <SelectValue placeholder={t("booking.form.selectBoat")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor">{t("booking.boat.motor")}</SelectItem>
                          <SelectItem value="vela-con">{t("booking.boat.sailWith")}</SelectItem>
                          <SelectItem value="vela-sin">{t("booking.boat.sailWithout")}</SelectItem>
                          <SelectItem value="cualquiera">{t("booking.boat.any")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-foreground font-semibold">
                        {t("booking.form.experience")}
                      </Label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                        <SelectTrigger className="border-input focus:border-gold">
                          <SelectValue placeholder={t("booking.form.selectBoat")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sunset">{t("booking.exp.sunset")}</SelectItem>
                          <SelectItem value="party">{t("booking.exp.party")}</SelectItem>
                          <SelectItem value="family">{t("booking.exp.family")}</SelectItem>
                          <SelectItem value="custom">{t("booking.exp.custom")}</SelectItem>
                          <SelectItem value="other">{t("booking.exp.other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold">
                      {t("booking.form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("booking.form.messagePlaceholder")}
                      rows={5}
                      className="border-input focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold"
                  >
                    {t("booking.form.submit")}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    {t("booking.form.privacy")}
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-none shadow-card bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    {t("booking.benefits.title")}
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-card bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    {t("booking.contact.title")}
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <MessageSquare className="h-5 w-5 text-gold" />
                      <span className="font-medium">{t("booking.contact.whatsapp")}</span>
                    </a>

                    <a
                      href="tel:+34676262628"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <Phone className="h-5 w-5 text-gold" />
                      <span className="font-medium">{t("booking.contact.phone")}</span>
                    </a>

                    <a
                      href="mailto:Goldencoastcharterdenia@gmail.com"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <Mail className="h-5 w-5 text-gold" />
                      <span className="font-medium">{t("booking.contact.email")}</span>
                    </a>
                  </div>

                  <p className="text-sm text-primary-foreground/80 mt-4">
                    {t("booking.contact.schedule")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reserva;
