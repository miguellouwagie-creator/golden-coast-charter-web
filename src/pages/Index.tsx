import { Link } from "react-router-dom";
import { Anchor, ArrowRight, Compass, Award, ShieldCheck } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import listoZarparBg from "@/assets/Listo-zarpar.webp";
import verFlotaImg from "@/assets/Ver la Flota-min.webp";
import experienciaImg from "@/assets/Experiencia-min.webp";
import contactoImg from "@/assets/Contacto.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const videoEntrada = "/FondoRenderizado.mp4";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  const whyChooseUsValues = [
    {
      Icon: Compass,
      title: t("index.whyItem1Title"),
      description: t("index.whyItem1Desc"),
    },
    {
      Icon: Award,
      title: t("index.whyItem2Title"),
      description: t("index.whyItem2Desc"),
    },
    {
      Icon: ShieldCheck,
      title: t("index.whyItem3Title"),
      description: t("index.whyItem3Desc"),
    },
  ];

  const ctaStats = [
    { value: "+600", label: t("index.statRoutes") || "rutas realizadas" },
    { value: "4.9 ★", label: t("index.statRating") || "valoración media" },
    { value: "+10", label: t("index.statYears") || "años de experiencia" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.9) {
        if (!video.paused) video.pause();
      } else {
        if (video.paused) video.play().catch(() => {});
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (isMobile || !heroContentRef.current) return;
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    if (!isMobile) window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const prefetchPage = (page: string) => {
    const routes: Record<string, () => Promise<unknown>> = {
      flota:        () => import("./Flota"),
      experiencias: () => import("./Experiencias"),
      reserva:      () => import("./Reserva"),
    };
    routes[page]?.();
  };

  return (
    <div className="relative bg-background">
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Navbar />
      </div>

      {/* HERO VIDEO */}
      <section
        className="relative flex items-center w-screen h-screen"
        style={{
          backgroundColor: "#101a2a",
          overflow: "hidden",
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            zIndex: 0,
            willChange: "transform",
            transform: "scale(1.05)",
            transformOrigin: "center center",
          }}
          onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
        >
          <source src={videoEntrada} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>

        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }}
        />

        <div
          ref={heroContentRef}
          className="relative w-full container mx-auto px-8 md:px-16"
          style={{ zIndex: 5, transition: 'transform 0.1s ease-out' }}
        >
          <div className="max-w-4xl">
            <h1
              className="text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 500,
                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                animationDelay: "0.2s",
                animationFillMode: "backwards",
                letterSpacing: "-0.02em",
              }}
            >
              {t("hero.title1")}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  fontSize: "0.65em",
                }}
              >
                {t("hero.title2")}
              </span>
            </h1>

            <p
              className="text-white/90 max-w-4xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                fontWeight: 400,
                lineHeight: 1.7,
                letterSpacing: "0.02em",
                textShadow: "0 2px 20px rgba(0,0,0,0.7)",
                animationDelay: "0.4s",
                animationFillMode: "backwards",
                fontStyle: "italic",
                whiteSpace: "nowrap",
              }}
            >
              {t("hero.subtitle")}
            </p>

            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
            >
              <Link
                to="/flota"
                onMouseEnter={() => prefetchPage('flota')}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Anchor className="w-6 h-6" strokeWidth={2} />
                <span>{t("hero.cta")}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section
        className="py-24 px-4"
        style={{
          background: "linear-gradient(110deg,#f7fafc 60%,#e5ecfa 100%)",
          position: "relative",
          boxShadow: "0 24px 56px rgb(255 215 0 / 0.15)",
          marginTop: "100vh",
          paddingTop: "72px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          zIndex: 2,
        }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* VER LA FLOTA */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={verFlotaImg}
              alt={t("index.verFlota")}
              loading="lazy"
              decoding="async"
              width={448}
              height={384}
              sizes="(max-width: 767px) 100vw, 448px"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(1.05) saturate(1.15)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "linear-gradient(to top,rgba(25,38,76,0.20) 60%, rgba(243,229,180,0.06) 100%)", zIndex: 1 }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{ textShadow: "0 6px 24px #000,0 2px 10px #FFD70065" }}
              >
                {t("index.verFlota")}
              </span>
              <Link
                to="/flota"
                onMouseEnter={() => prefetchPage('flota')}
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{ backdropFilter: "blur(6px)", border: "1.5px solid #FFD700" }}
              >
                {t("index.descubrirBarcos")}
              </Link>
            </div>
          </div>

          {/* EXPERIENCIAS */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={experienciaImg}
              alt={t("index.experiencias")}
              loading="lazy"
              decoding="async"
              width={448}
              height={384}
              sizes="(max-width: 767px) 100vw, 448px"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(0.99) saturate(1.22)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "linear-gradient(to top,rgba(30,58,138,0.13) 60%, rgba(241,215,100,0.07) 100%)", zIndex: 1 }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{ textShadow: "0 6px 24px #000,0 2px 10px #FFD70065" }}
              >
                {t("index.experiencias")}
              </span>
              <Link
                to="/experiencias"
                onMouseEnter={() => prefetchPage('experiencias')}
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{ backdropFilter: "blur(6px)", border: "1.5px solid #FFD700" }}
              >
                {t("index.verRutas")}
              </Link>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={contactoImg}
              alt={t("index.contacto")}
              loading="lazy"
              decoding="async"
              width={448}
              height={384}
              sizes="(max-width: 767px) 100vw, 448px"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(1.04) saturate(1.1)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "linear-gradient(to top,rgba(19,20,50,0.21) 55%, rgba(255,214,108,0.08) 100%)", zIndex: 1 }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{ textShadow: "0 6px 24px #000,0 2px 10px #FFD70065" }}
              >
                {t("index.contacto")}
              </span>
              <a
                href="https://wa.me/34676262628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{ backdropFilter: "blur(6px)", border: "1.5px solid #FFD700" }}
              >
                {t("index.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US — redesigned */}
      <section
        style={{ background: "#0A192F", marginTop: "-36px", zIndex: 2, position: "relative" }}
        className="py-28 px-4 relative rounded-t-3xl shadow-lg"
      >
        <div className="container mx-auto max-w-5xl">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 tracking-tight text-center px-4"
            style={{ color: "#FFD700", letterSpacing: "-0.01em" }}
          >
            {t("index.whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUsValues.map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center px-8 py-10 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 215, 0, 0.14)",
                  boxShadow: "0 4px 32px rgba(0, 0, 0, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,215,0,0.38)";
                  e.currentTarget.style.boxShadow = "0 8px 48px rgba(255,215,0,0.09), 0 4px 32px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,215,0,0.14)";
                  e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,0,0,0.25)";
                }}
              >
                <div
                  className="mb-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 88, height: 88,
                    background: "rgba(255, 215, 0, 0.07)",
                    border: "1.5px solid rgba(255, 215, 0, 0.32)",
                    boxShadow: "0 0 28px rgba(255, 215, 0, 0.11)",
                  }}
                >
                  <Icon
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "#FFD700", width: 36, height: 36, strokeWidth: 1.5 }}
                  />
                </div>
                <h3
                  className="text-white font-bold mb-3 leading-tight"
                  style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p
                  className="text-center leading-relaxed"
                  style={{ color: "rgba(203,213,225,0.82)", fontSize: "0.9rem", lineHeight: 1.7 }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTO PARA ZARPAR — redesigned */}
      <section
        className="relative overflow-hidden rounded-t-3xl"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <style>{`
          .listo-bg {
            background-image: url(${listoZarparBg});
            background-attachment: fixed;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          }
          @media (max-width: 768px) {
            .listo-bg {
              background-attachment: scroll !important;
              background-size: cover !important;
              background-position: center center !important;
            }
          }
        `}</style>

        {/* Background */}
        <div className="listo-bg absolute inset-0 rounded-t-3xl" style={{ zIndex: 0 }} />

        {/* Overlay layer 1: radial vignette — focus on center, dark edges */}
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{
            background: "radial-gradient(ellipse 85% 70% at 50% 42%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.60) 100%)",
            zIndex: 1,
          }}
        />

        {/* Overlay layer 2: dark navy gradient from bottom — grounds the text */}
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{
            background: "linear-gradient(to top, rgba(10,25,47,0.72) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="container mx-auto text-center relative z-10 max-w-4xl px-6 py-28">

          {/* Decorative anchor + gold lines */}
          <div className="flex items-center justify-center gap-5 mb-10">
            <div
              style={{
                height: 1,
                width: 72,
                background: "linear-gradient(to right, transparent, rgba(255,215,0,0.75))",
              }}
            />
            <Anchor
              strokeWidth={1.5}
              style={{ color: "#FFD700", width: 18, height: 18, opacity: 0.9 }}
            />
            <div
              style={{
                height: 1,
                width: 72,
                background: "linear-gradient(to left, transparent, rgba(255,215,0,0.75))",
              }}
            />
          </div>

          {/* Title */}
          <h2
            className="font-bold text-white mb-5 tracking-tight"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.08,
              textShadow: "0 4px 30px rgba(0,0,0,0.7)",
            }}
          >
            {t("index.ctaTitle")}
          </h2>

          {/* Gold underline accent */}
          <div
            className="mx-auto mb-8"
            style={{
              width: 56,
              height: 2,
              background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
            }}
          />

          {/* Subtitle — italic serif */}
          <p
            className="text-white/90 max-w-2xl mx-auto mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.65,
              textShadow: "0 2px 16px rgba(0,0,0,0.75)",
            }}
          >
            {t("index.ctaSubtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            {/* Primary — gold pill */}
            <Link
              to="/reserva"
              onMouseEnter={() => prefetchPage('reserva')}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.45)] transition-all duration-300 hover:scale-105 group"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.97rem" }}
            >
              <span>{t("index.ctaButton")}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary — ghost pill */}
            <Link
              to="/flota"
              onMouseEnter={(e) => {
                prefetchPage('flota');
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.65)";
                e.currentTarget.style.color = "#FFD700";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.42)";
                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
              }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.97rem",
                color: "rgba(255,255,255,0.9)",
                border: "1.5px solid rgba(255,255,255,0.42)",
                backdropFilter: "blur(6px)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t("index.verFlota")}
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.11)" }}
          >
            {ctaStats.map((stat, i, arr) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center px-8 sm:px-14 py-4 sm:py-0">
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      color: "#FFD700",
                      textShadow: "0 0 24px rgba(255,215,0,0.28)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="mt-2 text-white/55 uppercase tracking-widest"
                    style={{ fontSize: "0.65rem", letterSpacing: "0.13em" }}
                  >
                    {stat.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="hidden sm:block flex-shrink-0"
                    style={{ width: 1, height: 40, background: "rgba(255,255,255,0.14)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ position: "relative", zIndex: 5 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
