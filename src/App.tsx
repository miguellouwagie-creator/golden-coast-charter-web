import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // ← Añade esta importación

// Lazy loading de páginas para code splitting
const Index = lazy(() => import("./pages/Index"));
const Flota = lazy(() => import("./pages/Flota"));
const Experiencias = lazy(() => import("./pages/Experiencias"));
const Rutas = lazy(() => import("./pages/Rutas"));
const Reserva = lazy(() => import("./pages/Reserva"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* ← Añade este componente aquí */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/flota" element={<Flota />} />
              <Route path="/experiencias" element={<Experiencias />} />
              <Route path="/rutas" element={<Rutas />} />
              <Route path="/reserva" element={<Reserva />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
