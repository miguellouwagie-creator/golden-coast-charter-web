import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/Logo.jpeg"; // Cambio de logo

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nuestra Flota", href: "/flota" },
    { name: "Experiencias", href: "/experiencias" },
    { name: "Rutas", href: "/rutas" },
  ];

  const legal = [
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Cookies", href: "/cookies" },
  ];

  const experiences = [
    { name: "Puestas de Sol", href: "/experiencias#sunset" },
    { name: "Celebraciones", href: "/experiencias#celebrations" },
    { name: "Rutas Familiares", href: "/experiencias#family" },
    { name: "Charter Personalizado", href: "/experiencias#custom" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-md">
                <img src={logo} alt="Golden Coast Charter" className="h-16 w-16" /> {/* Eliminado brightness-0 invert */}
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wide">GOLDEN COAST</span>
                <span className="font-heading text-xs text-gold tracking-widest">CHARTER</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Experiencias náuticas de lujo en la Costa Blanca. Alquiler de barcos en Dénia y Jávea para momentos inolvidables.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">Experiencias</h3>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp.name}>
                  <Link
                    to={exp.href}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-smooth inline-block"
                  >
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Puerto de Dénia<br />Marina de Jávea<br />Costa Blanca, España</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+34600000000" className="hover:text-gold transition-smooth">
                  +34 600 000 000
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:info@goldencoastcharter.com" className="hover:text-gold transition-smooth">
                  info@goldencoastcharter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-primary-foreground/60 hover:text-gold transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Golden Coast Charter. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
