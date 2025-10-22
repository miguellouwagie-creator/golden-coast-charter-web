import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import videoEntrada from "@/assets/FondoRenderizado.mp4";
import timonImg from "@/assets/Timón.png";
import medallaImg from "@/assets/Medalla.png";
import escudoImg from "@/assets/Escudo.png";
import listoZarparBg from "@/assets/Listo-zarpar.jpg";
import verFlotaImg from "@/assets/Ver la Flota-min.jpg";
import experienciaImg from "@/assets/Experiencia-min.png";
import contactoImg from "@/assets/Contacto.png";


const whyChooseUsValues = [
  {
    image: timonImg,
    title: "Experiencia y Tradición",
    description:
      "Más de 10 años navegando la Costa Blanca, con patrones que conocen cada cala secreta y la historia del Mediterráneo.",
  },
  {
    image: medallaImg,
    title: "Calidad y Excelencia",
    description:
      "Flota propia mantenida a la perfección. Cada detalle, desde la limpieza hasta el equipamiento, está pensado para una experiencia de 5 estrellas.",
  },
  {
    image: escudoImg,
    title: "Seguridad y Confianza",
    description:
      "Tu tranquilidad es nuestra prioridad. Todos nuestros barcos cuentan con las máximas certificaciones de seguridad, seguros a todo riesgo y el mejor equipo.",
  },
];


const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;


    video.muted = true;
    
    // Intentar reproducir inmediatamente
    const playAttempt = setInterval(() => {
      if (video.paused && video.readyState >= 2) {
        video.play().catch(() => {});
      }
    }, 100);


    return () => {
      clearInterval(playAttempt);
    };
  }, []);


  // Detect mobile and setup parallax effect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };


    checkMobile();
    window.addEventListener('resize', checkMobile);


    // Parallax effect only on desktop
    const handleScroll = () => {
      if (isMobile || !heroContentRef.current) return;


      const scrolled = window.scrollY;
      const parallaxSpeed = 0.3;


      if (scrolled < window.innerHeight) {
        heroContentRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };


    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }


    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);


  // Prefetch de páginas al pasar el mouse
  const prefetchPage = (page: string) => {
    const routes: Record<string, () => Promise<any>> = {
      flota: () => import("./Flota"),
      experiencias: () => import("./Experiencias"),
      reserva: () => import("./Reserva"),
    };
    routes[page]?.();
  };


  return (
    <div className="relative bg-background">
      {/* NAVBAR INDEPENDIENTE Y FIJO */}
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {/* VIDEO DE FONDO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            willChange: "transform",
          }}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.play().catch(err => console.log("Autoplay prevented:", err));
          }}
          onEnded={(e) => {
            const video = e.currentTarget;
            video.currentTime = 0;
            video.play().catch(err => console.log("Loop restart prevented:", err));
          }}
        >
          <source src={videoEntrada} type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>


        {/* OVERLAY OSCURO */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }}
        />


        {/* CONTENIDO DEL HERO CON PARALLAX */}
        <div 
          ref={heroContentRef}
          className="relative w-full container mx-auto px-8 md:px-16" 
          style={{ 
            zIndex: 5,
            transition: 'transform 0.1s ease-out'
          }}
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
              El Mediterráneo,
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
                como nunca lo has vivido.
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
              Experiencias náuticas exclusivas en el corazón de la Costa Blanca
            </p>



            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{
                animationDelay: "0.6s",
                animationFillMode: "backwards",
              }}
            >
              <Link
                to="/flota"
                onMouseEnter={() => prefetchPage('flota')}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Anchor className="w-6 h-6" strokeWidth={2} />
                <span>Ver Flota</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* RESTO DEL CONTENIDO */}
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
          zIndex: 2
        }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* VER LA FLOTA */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={verFlotaImg}
              alt="Ver la Flota"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(1.05) saturate(1.15)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top,rgba(25,38,76,0.20) 60%, rgba(243,229,180,0.06) 100%)",
                zIndex: 1,
              }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{
                  textShadow: "0 6px 24px #000,0 2px 10px #FFD70065",
                }}
              >
                Ver la Flota
              </span>
              <Link
                to="/flota"
                onMouseEnter={() => prefetchPage('flota')}
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{
                  backdropFilter: "blur(6px)",
                  border: "1.5px solid #FFD700",
                }}
              >
                Descubrir barcos
              </Link>
            </div>
          </div>
          {/* EXPERIENCIAS */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={experienciaImg}
              alt="Experiencias"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(0.99) saturate(1.22)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top,rgba(30,58,138,0.13) 60%, rgba(241,215,100,0.07) 100%)",
                zIndex: 1,
              }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{
                  textShadow: "0 6px 24px #000,0 2px 10px #FFD70065",
                }}
              >
                Experiencias Únicas
              </span>
              <Link
                to="/experiencias"
                onMouseEnter={() => prefetchPage('experiencias')}
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{
                  backdropFilter: "blur(6px)",
                  border: "1.5px solid #FFD700",
                }}
              >
                Ver rutas y eventos
              </Link>
            </div>
          </div>
          {/* CONTACTO */}
          <div className="relative group flex-1 max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <img
              src={contactoImg}
              alt="Contacto"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              style={{ zIndex: 0, filter: "brightness(1.04) saturate(1.1)" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top,rgba(19,20,50,0.21) 55%, rgba(255,214,108,0.08) 100%)",
                zIndex: 1,
              }}
            />
            <div className="relative z-10 flex flex-col justify-end items-start h-full w-full p-8">
              <span
                className="block text-xl md:text-2xl font-extrabold text-white drop-shadow mb-8"
                style={{
                  textShadow: "0 6px 24px #000,0 2px 10px #FFD70065",
                }}
              >
                Contacta Directo
              </span>
              <a
                href="https://wa.me/34676262628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-[#FFD700d8] to-[#FFA500cf] font-semibold text-black text-md px-8 py-4 shadow-2xl hover:scale-105 hover:shadow-yellow-400 transition-all duration-400 hover:bg-[#FFD700] focus:outline-none focus:ring-4 focus:ring-yellow-200/50"
                style={{
                  backdropFilter: "blur(6px)",
                  border: "1.5px solid #FFD700",
                }}
              >
                Habla por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      <section
        style={{
          background: "#0A192F",
          marginTop: "-36px",
          zIndex: 2,
          position: "relative"
        }}
        className="py-36 px-4 relative rounded-t-3xl shadow-lg"
      >
        <div className="container mx-auto max-w-6xl">
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 tracking-tight text-center px-4"
            style={{ color: "#FFD700", letterSpacing: "-0.01em" }}
          >
            ¿Por qué <span className="block sm:inline">Golden Coast Charter</span>?
          </h2>
          <div className="relative w-full flex flex-col items-center">
            <div className="hidden md:flex flex-row w-full justify-between items-center relative mb-10">
              {whyChooseUsValues.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-white rounded-full shadow-xl flex items-center justify-center border-4 mb-6"
                    style={{
                      borderColor: "#FFD700",
                      boxShadow: "0 6px 32px 0 #FFD70033",
                      width: 130,
                      height: 130,
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        maxWidth: 70,
                        maxHeight: 70,
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div
                className="absolute w-[90%] left-[5%] right-[5%] top-[50%] h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg,#FFD70055,#FFD700cc,#FFD70055)",
                  zIndex: 0,
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 px-4">
              {whyChooseUsValues.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-2 md:px-6"
                >
                  <div className="md:hidden bg-white rounded-full shadow-xl flex items-center justify-center border-4 mb-6"
                    style={{
                      borderColor: "#FFD700",
                      boxShadow: "0 6px 32px 0 #FFD70033",
                      width: 110,
                      height: 110,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        maxWidth: 60,
                        maxHeight: 60,
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                  <h3
                    className="text-yellow-400 text-xl font-bold mb-2 text-center leading-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-100/90 text-center text-base leading-relaxed mb-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section
        className="py-32 px-4 relative overflow-hidden rounded-t-3xl"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{
            backgroundImage: `url(${listoZarparBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          }}
        />
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <h2
            className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
            style={{
              textShadow:
                "0 6px 25px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            ¿Listo para{" "}
            <span className="text-white">zarpar?</span>
          </h2>
          
          <p
            className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-light"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Reserva tu experiencia náutica exclusiva en la Costa Blanca
          </p>


          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-14 py-8 h-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 text-lg group"
              asChild
            >
              <Link 
                to="/reserva" 
                onMouseEnter={() => prefetchPage('reserva')}
                className="flex items-center gap-3"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
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
