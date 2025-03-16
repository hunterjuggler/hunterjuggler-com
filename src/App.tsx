
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "./components/AnimatePresence";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<Loading />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="gallery" element={
            <Suspense fallback={<Loading />}>
              <GalleryPage />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<Loading />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
