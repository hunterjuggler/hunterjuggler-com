
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAnimation } from "./AnimatePresence";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const animationRef = useAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={animationRef} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
