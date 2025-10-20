import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "../assets/Logo 2.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();


  const leftNavigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.fleet"), href: "/flota" },
  ];


  const rightNavigation = [
    { name: t("nav.experiences"), href: "/experiencias" },
    { name: t("nav.routes"), href: "/rutas" },
    { name: t("nav.about"), href: "/nosotros" },
  ];


  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };


  const isActive = (path: string) => location.pathname === path;


  // Número de teléfono de Golden Coast Charter
  const phoneNumber = "+34 676 26 26 28";
  const whatsappNumber = "34676262628";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, me gustaría reservar o pedir información.")}`;



  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24 relative">


          {/* Left Side: Brand Name */}
          <Link
            to="/"
            className="flex flex-col transition-smooth hover:opacity-80 z-10"
          >
            <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-lg">
              GOLDEN COAST
            </span>
            <span className="font-heading text-xs text-[#FFD700] tracking-widest drop-shadow-md">
              CHARTER
            </span>
          </Link>


          {/* Center: Logo (Fixed in exact center) */}
          <Link
            to="/"
            className="hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-smooth hover:scale-110 z-20"
            style={{ top: '75%' }}
          >
            <img
              src={logo}
              alt="Golden Coast Charter Logo"
              className="h-36 w-auto drop-shadow-2xl rounded-md"
            />
          </Link>


          {/* Desktop Navigation - Left side (Next to logo) */}
          <div className="hidden xl:flex absolute left-1/2 transform -translate-x-full items-center space-x-2 pr-32">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-[#FFD700] bg-white/15 backdrop-blur-md shadow-lg"
                    : "text-white hover:text-[#FFD700] hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


          {/* Desktop Navigation - Right side (Next to logo) */}
          <div className="hidden xl:flex absolute left-1/2 items-center space-x-2 pl-32">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-[#FFD700] bg-white/15 backdrop-blur-md shadow-lg"
                    : "text-white hover:text-[#FFD700] hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


          {/* Right Side: Language Selector + CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            {/* Selector de Idioma */}
            <button
              onClick={toggleLanguage}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <span className={language === "es" ? "text-white font-semibold" : "text-white/50"}>
                ES
              </span>
              <span className="text-white/40 mx-1">/</span>
              <span className={language === "en" ? "text-white font-semibold" : "text-white/50"}>
                EN
              </span>
            </button>


            {/* Botón WhatsApp */}
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold shadow-2xl hover:shadow-[0_10px_30px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 px-6"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                {t("nav.bookNow")}
              </a>
            </Button>
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-md text-white hover:bg-white/10 transition-smooth backdrop-blur-sm z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>


        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden py-4 bg-black/80 backdrop-blur-xl rounded-b-lg animate-slide-up">
            <div className="flex flex-col space-y-2">
              {/* Mobile Logo */}
              <div className="flex justify-center pb-4 border-b border-white/10">
                <img src={logo} alt="Golden Coast Charter Logo" className="h-12 w-12 rounded-md" />
              </div>


              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-[#FFD700] bg-white/10"
                      : "text-white/90 hover:text-[#FFD700] hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                {/* Mobile Phone Number */}
                <a 
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="px-4 py-3 text-center text-white/90 hover:text-[#FFD700] transition-colors flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{phoneNumber}</span>
                </a>

                {/* Mobile Language Selector */}
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-3 text-center text-white/90 hover:text-white transition-colors"
                >
                  {t("nav.changeLanguage")} ({language.toUpperCase()})
                </button>


                {/* Mobile Botón WhatsApp */}
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold shadow-2xl"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    {t("nav.bookNow")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
