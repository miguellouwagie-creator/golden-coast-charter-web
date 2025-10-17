import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "34600000000"; // Placeholder - replace with actual number
  const defaultMessage = "Hola, quiero información sobre alquiler de barcos";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-elegant text-white p-0 transition-bounce"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
