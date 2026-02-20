import { useState } from "react";
import { CONTACT } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Phone, Mail, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Reserva = () => {
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
    _honey: "",
  });

  const sidebarWhatsappMessage = language === 'es'
    ? "Hola, quiero información sobre la página de reservas."
    : "Hello, I want information about the booking page.";

  const sidebarWhatsappLink = CONTACT.getWhatsAppLink(sidebarWhatsappMessage);

  const boatLabel: Record<string, string> = {
    motor: language === 'es' ? 'Barco a motor' : 'Motor boat',
    'vela-con': language === 'es' ? 'Vela con patrón' : 'Sailboat with skipper',
    'vela-sin': language === 'es' ? 'Vela sin patrón' : 'Sailboat without skipper',
    cualquiera: language === 'es' ? 'Sin preferencia' : 'No preference',
  };

  const expLabel: Record<string, string> = {
    sunset: language === 'es' ? 'Puesta de sol' : 'Sunset cruise',
    party: language === 'es' ? 'Fiesta / celebración' : 'Party / celebration',
    family: language === 'es' ? 'Familiar' : 'Family trip',
    custom: language === 'es' ? 'Personalizada' : 'Custom experience',
    other: language === 'es' ? 'Otra' : 'Other',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, silently abort (bot detected)
    if (formData._honey) return;

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+\d\s\-()]{7,20}$/;

    if (!formData.name.trim() || formData.name.trim().length > 100) return;
    if (!emailRegex.test(formData.email)) return;
    if (!phoneRegex.test(formData.phone)) return;

    // Build structured WhatsApp message
    const isEs = language === 'es';
    const lines = [
      isEs
        ? '🛥️ *SOLICITUD DE RESERVA — Golden Coast Charter*'
        : '🛥️ *BOOKING REQUEST — Golden Coast Charter*',
      '',
      `👤 ${isEs ? 'Nombre' : 'Name'}: ${formData.name.trim()}`,
      `📧 ${isEs ? 'Email' : 'Email'}: ${formData.email.trim()}`,
      `📱 ${isEs ? 'Teléfono' : 'Phone'}: ${formData.phone.trim()}`,
      `📅 ${isEs ? 'Fecha' : 'Date'}: ${formData.date || (isEs ? 'Por confirmar' : 'To be confirmed')}`,
      `👥 ${isEs ? 'Personas' : 'Guests'}: ${formData.guests || (isEs ? 'No indicado' : 'Not specified')}`,
      `⛵ ${isEs ? 'Embarcación' : 'Boat'}: ${boatLabel[formData.boatType] ?? (isEs ? 'No indicada' : 'Not specified')}`,
      `🌅 ${isEs ? 'Experiencia' : 'Experience'}: ${expLabel[formData.experience] ?? (isEs ? 'No indicada' : 'Not specified')}`,
      formData.message.trim()
        ? `💬 ${isEs ? 'Mensaje' : 'Message'}: ${formData.message.trim().slice(0, 500)}`
        : null,
    ].filter((line): line is string => line !== null);

    const message = lines.join('\n');
    window.open(CONTACT.getWhatsAppLink(message), '_blank');

    setFormData({
      name: "", email: "", phone: "", date: "",
      guests: "", boatType: "", experience: "", message: "", _honey: "",
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
                        autoComplete="name"
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
                        autoComplete="email"
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
                      autoComplete="tel"
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
                        min={new Date().toISOString().split('T')[0]}
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
                      maxLength={500}
                      className="border-input focus:border-gold resize-none"
                    />
                  </div>

                  <input
                    name="_honey"
                    value={formData._honey}
                    onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

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
                      href={sidebarWhatsappLink}
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
                      href={`mailto:${CONTACT.getEmail()}`}
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
