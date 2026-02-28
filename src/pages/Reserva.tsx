import { useState } from "react";
import { CONTACT } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Phone, Mail, Check, ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Reserva = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'es';

  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    email: "",
    boatType: "",
    experience: "",
    message: "",
    _honey: "",
  });

  const sidebarWhatsappLink = CONTACT.getWhatsAppLink(
    isEs
      ? "Hola, quiero informaci\u00f3n sobre la p\u00e1gina de reservas."
      : "Hello, I want information about the booking page."
  );

  const boatLabel: Record<string, string> = {
    motor:      isEs ? 'Barco a motor'        : 'Motor boat',
    'vela-con': isEs ? 'Vela con patr\u00f3n' : 'Sailboat with skipper',
    'vela-sin': isEs ? 'Vela sin patr\u00f3n' : 'Sailboat without skipper',
    cualquiera: isEs ? 'Sin preferencia'      : 'No preference',
  };

  const expLabel: Record<string, string> = {
    sunset: isEs ? 'Puesta de sol'          : 'Sunset cruise',
    party:  isEs ? 'Fiesta / celebraci\u00f3n' : 'Party / celebration',
    family: isEs ? 'Familiar'              : 'Family trip',
    custom: isEs ? 'Personalizada'          : 'Custom experience',
    other:  isEs ? 'Otra'                  : 'Other',
  };

  const phoneRegex = /^[+\d\s\-()]{7,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ---- Step 1 validation ----
  const validateStep1 = (): boolean => {
    const next: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length > 100)
      next.name = isEs ? 'Introduce tu nombre.' : 'Please enter your name.';
    if (!phoneRegex.test(formData.phone))
      next.phone = isEs ? 'Tel\u00e9fono no v\u00e1lido.' : 'Invalid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  // ---- Final submit ----
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honey) return;

    // Re-validate step 1 fields defensively
    if (!formData.name.trim() || !phoneRegex.test(formData.phone)) {
      setStep(1);
      return;
    }

    const lines = [
      isEs
        ? '\uD83D\uDEE5\uFE0F *SOLICITUD DE RESERVA \u2014 Golden Coast Charter*'
        : '\uD83D\uDEE5\uFE0F *BOOKING REQUEST \u2014 Golden Coast Charter*',
      '',
      `\uD83D\uDC64 ${isEs ? 'Nombre' : 'Name'}: ${formData.name.trim()}`,
      `\uD83D\uDCF1 ${isEs ? 'Tel\u00e9fono' : 'Phone'}: ${formData.phone.trim()}`,
      formData.date
        ? `\uD83D\uDCC5 ${isEs ? 'Fecha' : 'Date'}: ${formData.date}`
        : `\uD83D\uDCC5 ${isEs ? 'Fecha' : 'Date'}: ${isEs ? 'Por confirmar' : 'To be confirmed'}`,
      `\uD83D\uDC65 ${isEs ? 'Personas' : 'Guests'}: ${formData.guests || (isEs ? 'No indicado' : 'Not specified')}`,
      formData.email.trim()
        ? `\uD83D\uDCE7 ${isEs ? 'Email' : 'Email'}: ${formData.email.trim()}`
        : null,
      `\u26F5 ${isEs ? 'Embarcaci\u00f3n' : 'Boat'}: ${boatLabel[formData.boatType] ?? (isEs ? 'Sin preferencia' : 'No preference')}`,
      `\uD83C\uDF05 ${isEs ? 'Experiencia' : 'Experience'}: ${expLabel[formData.experience] ?? (isEs ? 'No indicada' : 'Not specified')}`,
      formData.message.trim()
        ? `\uD83D\uDCAC ${isEs ? 'Mensaje' : 'Message'}: ${formData.message.trim().slice(0, 500)}`
        : null,
    ].filter((l): l is string => l !== null);

    window.open(CONTACT.getWhatsAppLink(lines.join('\n')), '_blank');

    setFormData({ name: '', phone: '', date: '', guests: '', email: '', boatType: '', experience: '', message: '', _honey: '' });
    setStep(1);
    setErrors({});
  };

  const benefits = [
    t("booking.benefit1"),
    t("booking.benefit2"),
    t("booking.benefit3"),
    t("booking.benefit4"),
  ];

  // ---- Step indicator ----
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-8" aria-label={isEs ? `Paso ${step} de 2` : `Step ${step} of 2`}>
      {[1, 2].map((n) => (
        <div key={n} className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              step === n
                ? 'bg-gold text-accent-foreground shadow-gold'
                : step > n
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
            aria-current={step === n ? 'step' : undefined}
          >
            {step > n ? <Check className="w-4 h-4" aria-hidden="true" /> : n}
          </div>
          <span className={`text-xs font-semibold hidden sm:block ${
            step === n ? 'text-primary' : 'text-muted-foreground'
          }`}>
            {n === 1
              ? (isEs ? 'Tus datos' : 'Your details')
              : (isEs ? 'Preferencias' : 'Preferences')}
          </span>
          {n < 2 && <div className={`w-12 h-0.5 transition-all duration-300 ${
            step > 1 ? 'bg-primary' : 'bg-border'
          }`} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
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

            {/* ---- FORM CARD ---- */}
            <Card className="lg:col-span-2 border-none shadow-card">
              <CardContent className="p-8 lg:p-12">

                <StepIndicator />

                {/* Honeypot */}
                <input
                  name="_honey"
                  value={formData._honey}
                  onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* ---- STEP 1 ---- */}
                {step === 1 && (
                  <div
                    className="space-y-6 animate-fade-in"
                    aria-label={isEs ? 'Paso 1: Tus datos' : 'Step 1: Your details'}
                  >
                    <div>
                      <h2 className="font-heading text-xl font-semibold text-primary mb-1">
                        {isEs ? '\u00bfCu\u00e9ntanos sobre tu reserva?' : 'Tell us about your booking'}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {isEs ? 'Solo los esenciales \u2014 r\u00e1pido y sin complicaciones.' : 'Just the essentials \u2014 quick and easy.'}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-semibold">
                        {t("booking.form.name")} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("booking.form.namePlaceholder")}
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        className={`border-input focus:border-gold ${errors.name ? 'border-destructive' : ''}`}
                        style={{ minHeight: '44px' }}
                      />
                      {errors.name && (
                        <p id="error-name" role="alert" className="text-destructive text-xs mt-1">{errors.name}</p>
                      )}
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
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        className={`border-input focus:border-gold ${errors.phone ? 'border-destructive' : ''}`}
                        style={{ minHeight: '44px' }}
                      />
                      {errors.phone && (
                        <p id="error-phone" role="alert" className="text-destructive text-xs mt-1">{errors.phone}</p>
                      )}
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
                          style={{ minHeight: '44px' }}
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
                          style={{ minHeight: '44px' }}
                        />
                      </div>
                    </div>

                    {/* Primary CTA — single action per screen */}
                    <Button
                      type="button"
                      size="lg"
                      onClick={handleNext}
                      className="w-full bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold font-bold text-base group"
                      style={{ minHeight: '52px' }}
                    >
                      <span>{isEs ? 'Continuar' : 'Continue'}</span>
                      <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      {t("booking.form.privacy")}
                    </p>
                  </div>
                )}

                {/* ---- STEP 2 ---- */}
                {step === 2 && (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 animate-fade-in"
                    aria-label={isEs ? 'Paso 2: Preferencias' : 'Step 2: Preferences'}
                    noValidate
                  >
                    <div>
                      <h2 className="font-heading text-xl font-semibold text-primary mb-1">
                        {isEs ? 'Personaliza tu experiencia' : 'Personalise your experience'}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {isEs ? 'Todo opcional \u2014 cu\u00e9ntanos lo que quieras.' : 'All optional \u2014 share what you\'d like.'}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold">
                        {t("booking.form.email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("booking.form.emailPlaceholder")}
                        autoComplete="email"
                        className="border-input focus:border-gold"
                        style={{ minHeight: '44px' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="boatType" className="text-foreground font-semibold">
                          {t("booking.form.boatType")}
                        </Label>
                        <Select value={formData.boatType} onValueChange={(value) => setFormData({ ...formData, boatType: value })}>
                          <SelectTrigger id="boatType" className="border-input focus:border-gold" style={{ minHeight: '44px' }}>
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
                          <SelectTrigger id="experience" className="border-input focus:border-gold" style={{ minHeight: '44px' }}>
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
                        rows={4}
                        maxLength={500}
                        className="border-input focus:border-gold resize-none"
                      />
                    </div>

                    {/* Action row: back (ghost) + submit (primary) */}
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setStep(1)}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-shrink-0"
                        style={{ minHeight: '52px', minWidth: '52px' }}
                        aria-label={isEs ? 'Volver al paso anterior' : 'Go back to previous step'}
                      >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                      </Button>

                      {/* Single dominant CTA */}
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold font-bold text-base"
                        style={{ minHeight: '52px' }}
                      >
                        {t("booking.form.submit")}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      {t("booking.form.privacy")}
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* ---- SIDEBAR ---- */}
            <div className="space-y-6">
              <Card className="border-none shadow-card bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    {t("booking.benefits.title")}
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-gold-readable flex-shrink-0 mt-0.5" aria-hidden="true" />
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
                      aria-label={isEs ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                      style={{ minHeight: '44px' }}
                    >
                      <MessageSquare className="h-5 w-5 text-gold" aria-hidden="true" />
                      <span className="font-medium">{t("booking.contact.whatsapp")}</span>
                    </a>
                    <a
                      href="tel:+34676262628"
                      aria-label={isEs ? 'Llamar por tel\u00e9fono' : 'Call by phone'}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                      style={{ minHeight: '44px' }}
                    >
                      <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                      <span className="font-medium">{t("booking.contact.phone")}</span>
                    </a>
                    <a
                      href={`mailto:${CONTACT.getEmail()}`}
                      aria-label={isEs ? 'Enviar correo electr\u00f3nico' : 'Send email'}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                      style={{ minHeight: '44px' }}
                    >
                      <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
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
