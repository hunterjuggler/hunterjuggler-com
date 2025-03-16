
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAnimation } from "./AnimatePresence";

const Layout = () => {
  const animationRef = useAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={animationRef} className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
