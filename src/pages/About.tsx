
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/about/HeroSection";
import BioSection from "@/components/about/BioSection";
import ShowSection from "@/components/about/ShowSection";
import SkillsSection from "@/components/about/SkillsSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import CallToAction from "@/components/about/CallToAction";

const AboutPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 w-full">
      <Helmet>
        <title>About Hunter Way | Professional Comedy Juggler & Circus Entertainer</title>
        <meta name="description" content="Meet Hunter Way, a professional comedy juggler and unicyclist with over twenty years of experience. Delivering high-energy, family-friendly entertainment for corporate events, festivals, and private celebrations." />
      </Helmet>
      <HeroSection />
      <BioSection />
      <ShowSection />
      <SkillsSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
