
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import PromoVideoSection from "@/components/home/PromoVideoSection";
import AboutSection from "@/components/home/AboutSection";
// import SocialSection from "@/components/home/SocialSection";
import CallToAction from "@/components/home/CallToAction";
import ShowSection from "@/components/about/ShowSection";
// import CombinedTestimonialsSection from "@/components/home/CombinedTestimonialsSection";

const HomePage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full overflow-hidden bg-gradient-smooth">
      <Helmet>
        <title>Hunter Way | Circus Entertainer & Comedy Juggler</title>
        <meta
          name="description"
          content="Official website of Hunter Way, a professional circus entertainer delivering world-class juggling, big tricks, and high-energy comedy for events and festivals worldwide."
        />
        <meta name="keywords" content="comedy juggler for hire, professional juggler for events, circus performer for hire, unicyclist entertainer for events, festival entertainment, variety show performer, corporate event juggler, cruise ship entertainer for hire, family-friendly comedy act" />
      </Helmet>
      
      <div className="flex flex-col">
        <HeroSection />
        <PromoVideoSection />
        <AboutSection />
        <ShowSection />
        {/* <CombinedTestimonialsSection /> */}
        {/* <SocialSection /> */}
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
