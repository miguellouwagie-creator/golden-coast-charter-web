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

const Reserva = () => {
  const { toast } = useToast();
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

  const whatsappLink = "https://wa.me/34676262628?text=Hola,%20quiero%20información%20sobre%20la%20página%20de%20reservas.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
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
    "Respuesta en menos de 24h",
    "Presupuesto sin compromiso",
    "Asesoramiento personalizado",
    "Flexibilidad de fechas",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-32 pb-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Solicita tu <span className="text-gradient-gold">Presupuesto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Completa el formulario y te enviaremos un presupuesto personalizado. También puedes contactarnos directamente por WhatsApp para una respuesta inmediata.
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
                        Nombre completo *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        required
                        className="border-input focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        required
                        className="border-input focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 676 26 26 28"
                      required
                      className="border-input focus:border-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-semibold">
                        Fecha preferida
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
                        Número de personas
                      </Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="20"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        placeholder="Ej: 8"
                        className="border-input focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="boatType" className="text-foreground font-semibold">
                        Tipo de barco
                      </Label>
                      <Select value={formData.boatType} onValueChange={(value) => setFormData({ ...formData, boatType: value })}>
                        <SelectTrigger className="border-input focus:border-gold">
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor">Motor (con patrón)</SelectItem>
                          <SelectItem value="vela-con">Vela (con patrón)</SelectItem>
                          <SelectItem value="vela-sin">Vela (sin patrón)</SelectItem>
                          <SelectItem value="cualquiera">Cualquiera</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-foreground font-semibold">
                        Experiencia deseada
                      </Label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                        <SelectTrigger className="border-input focus:border-gold">
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sunset">Puesta de sol</SelectItem>
                          <SelectItem value="party">Despedida/Cumpleaños</SelectItem>
                          <SelectItem value="family">Aventura familiar</SelectItem>
                          <SelectItem value="custom">Personalizada</SelectItem>
                          <SelectItem value="other">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold">
                      Mensaje adicional
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos más sobre lo que buscas..."
                      rows={5}
                      className="border-input focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold"
                  >
                    Enviar Solicitud
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-none shadow-card bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    ¿Por qué reservar con nosotros?
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
                    ¿Prefieres contacto directo?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <MessageSquare className="h-5 w-5 text-gold" />
                      <span className="font-medium">WhatsApp directo</span>
                    </a>

                    <a
                      href="tel:+34676262628"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <Phone className="h-5 w-5 text-gold" />
                      <span className="font-medium">+34 676 26 26 28</span>
                    </a>

                    <a
                      href="mailto:info@goldencoastcharter.com"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                    >
                      <Mail className="h-5 w-5 text-gold" />
                      <span className="font-medium">Email</span>
                    </a>
                  </div>

                  <p className="text-sm text-primary-foreground/80 mt-4">
                    Horario: Lun-Dom 9:00-21:00
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

