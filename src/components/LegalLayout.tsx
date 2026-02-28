import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="space-y-3">
    <h2 className="font-heading text-lg font-bold text-primary border-b border-border pb-2">
      {title}
    </h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export const Pending = ({ label }: { label: string }) => (
  <span
    style={{
      display: "inline-block",
      background: "#fef3c7",
      color: "#92400e",
      border: "1px solid #fcd34d",
      padding: "1px 6px",
      borderRadius: "4px",
      fontSize: "11px",
      fontFamily: "monospace",
      fontWeight: 600,
    }}
  >
    ⚠ {label}
  </span>
);

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />
    <section
      className="pt-32 pb-12 text-white"
      style={{ background: "linear-gradient(135deg, #0a1929 0%, #1a2332 100%)" }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          Última actualización: {lastUpdated}
        </p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="container mx-auto" style={{ maxWidth: "780px" }}>
        <div className="bg-card rounded-2xl shadow-card p-8 lg:p-12 space-y-10">
          {children}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default LegalLayout;
