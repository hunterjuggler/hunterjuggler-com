
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const ContactPage = lazy(() => import("./pages/Contact"));
const BookingPage = lazy(() => import("./pages/Booking"));
const PressKitPage = lazy(() => import("./pages/PressKit"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/press-kit" element={<PressKitPage />} />
                  <Route path="/index" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
