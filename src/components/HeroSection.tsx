import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  backgroundImage: string;
  titleKey?: string;
  titleHighlightKey?: string;
  descriptionKey?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  children?: ReactNode;
}

const HeroSection = ({
  backgroundImage,
  titleKey,
  titleHighlightKey,
  descriptionKey,
  title,
  titleHighlight,
  description,
  children,
}: HeroSectionProps) => {
  const { t } = useLanguage();

  const displayTitle       = titleKey       ? t(titleKey)       : title       || "";
  const displayHighlight   = titleHighlightKey ? t(titleHighlightKey) : titleHighlight || "";
  const displayDescription = descriptionKey ? t(descriptionKey) : description || "";

  return (
    <section className="pt-40 pb-16 px-4 relative overflow-hidden">
      {/*
        LCP image: <img> instead of CSS background-image so the browser can
        discover it in the HTML stream and apply fetchPriority="high".
        - loading="eager"      → never lazy-load the LCP element
        - fetchPriority="high" → elevates this resource in the browser priority queue
        - decoding="async"     → image decode happens off the main thread
        - bg-fixed removed     → background-attachment:fixed is a compositor-layer
                                  anti-pattern that breaks on iOS Safari and forces
                                  full-page GPU rasterization on every scroll tick.
      */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width={1920}
        height={1080}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A192F]/40" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container mx-auto text-center relative" style={{ zIndex: 10 }}>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6 px-4">
          {displayTitle}{" "}
          {displayHighlight && (
            <span className="text-gradient-gold">{displayHighlight}</span>
          )}
        </h1>
        <p
          className="text-lg sm:text-xl text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {displayDescription}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
