import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/Logo.jpeg";


const Footer = () => {
  const { t } = useLanguage();


  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.fleet"), href: "/flota" },
    { name: t("nav.experiences"), href: "/experiencias" },
    { name: t("nav.routes"), href: "/rutas" },
  ];


  const legal = [
    { name: t("footer.legal.notice"), href: "/aviso-legal" },
    { name: t("footer.legal.privacy"), href: "/privacidad" },
    { name: t("footer.legal.terms"), href: "/terminos" },
    { name: t("footer.legal.cookies"), href: "/cookies" },
  ];


  const experiences = [
    { name: t("footer.exp.sunset"), href: "/experiencias#sunset" },
    { name: t("footer.exp.celebrations"), href: "/experiencias#celebrations" },
    { name: t("footer.exp.family"), href: "/experiencias#family" },
    { name: t("footer.exp.custom"), href: "/experiencias#custom" },
  ];


  return (
    <footer 
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1929 0%, #1a2332 25%, #2d3748 50%, #1a2332 75%, #0a1929 100%)"
      }}
    >
      {/* Efecto de brillo sutil en la parte superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.3) 50%, transparent 100%)"
        }}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-4 group">
              <div 
                className="bg-white p-2 rounded-lg shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                <img 
                  src={logo} 
                  alt="Golden Coast Charter" 
                  className="h-24 w-24" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wide text-white whitespace-nowrap">
                  GOLDEN COAST
                </span>
                <span 
                  className="font-heading text-sm tracking-widest font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  CHARTER
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              {t("footer.slogan")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/goldencoastcharter?igsh=MXdoYWExbjZvM3U3Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white/80 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 
              className="font-heading text-lg font-semibold mb-6"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-[#FFD700] transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Experiences */}
          <div>
            <h3 
              className="font-heading text-lg font-semibold mb-6"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {t("footer.experiences")}
            </h3>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp.name}>
                  <Link
                    to={exp.href}
                    className="text-sm text-white/70 hover:text-[#FFD700] transition-colors duration-300 inline-block"
                  >
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 
              className="font-heading text-lg font-semibold mb-6"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/70">
                <MapPin className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span style={{ whiteSpace: 'pre-line' }}>{t("footer.location")}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <Phone className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <a href="tel:+34676262628" className="hover:text-[#FFD700] transition-colors duration-300">
                  +34 676 26 26 28
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <Mail className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <a href="mailto:Goldencoastcharterdenia@gmail.com" className="hover:text-[#FFD700] transition-colors duration-300">
                  [Goldencoastcharterdenia@gmail.com](mailto:Goldencoastcharterdenia@gmail.com)
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Legal Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-white/50 hover:text-[#FFD700] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Golden Coast Charter. {t("footer.rights")}.
            </p>
          </div>
        </div>

        {/* Footer Credit - Studio Pixelens */}
        <div className="absolute bottom-4 right-4">
          <a
            href="https://studiopixelens.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-[#FFD700] transition-colors duration-300"
          >
            Diseñado por Studio Pixelens
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
