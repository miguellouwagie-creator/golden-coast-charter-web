import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.fleet"), href: "/flota" },
    { name: t("nav.experiences"), href: "/experiencias" },
    { name: t("nav.routes"), href: "/rutas" },
    { name: t("nav.about"), href: "/nosotros" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
            <img src={logo} alt="Golden Coast Charter Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-primary tracking-wide">GOLDEN COAST</span>
              <span className="font-heading text-xs text-gold tracking-widest">CHARTER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "text-gold bg-gold/10"
                    : "text-foreground hover:text-gold hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button size="sm" className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold">
              <Phone className="h-4 w-4 mr-2" />
              {t("nav.bookNow")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-foreground hover:text-gold hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary text-primary"
                  onClick={toggleLanguage}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {t("nav.changeLanguage")} ({language.toUpperCase()})
                </Button>
                <Button size="sm" className="bg-gold hover:bg-gold-dark text-accent-foreground shadow-gold">
                  <Phone className="h-4 w-4 mr-2" />
                  {t("nav.bookNow")}
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
