import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "gcc_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_KEY, "dismissed");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] animate-slide-up"
    >
      <div
        className="border-t px-4 py-4"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          background: "rgba(10, 25, 41, 0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.8)" }}>
            🍪 Utilizamos{" "}
            <strong className="text-white">cookies técnicas</strong>{" "}
            necesarias para el funcionamiento del sitio web. No usamos cookies publicitarias ni de seguimiento de terceros.{" "}
            <Link
              to="/cookies"
              className="font-medium hover:underline"
              style={{ color: "#FFD700", textUnderlineOffset: "2px" }}
            >
              Más información
            </Link>
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold hover:scale-105 transition-transform text-xs px-5 h-9"
            >
              Aceptar
            </Button>
            <button
              onClick={handleDismiss}
              className="p-2 rounded-md transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              aria-label="Cerrar aviso de cookies"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
