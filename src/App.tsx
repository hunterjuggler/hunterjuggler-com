
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const ContactPage = lazy(() => import("./pages/Contact"));
const BookingPage = lazy(() => import("./pages/Booking"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><BookingPage /></PageTransition>} />
        <Route path="/index" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  // Create a new QueryClient instance for each component instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>
              <Suspense fallback={<Loading />}>
                <AnimatedRoutes />
              </Suspense>
            </Layout>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
