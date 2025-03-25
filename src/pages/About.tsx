
import { useEffect } from "react";
import HeroSection from "@/components/about/HeroSection";
import BioSection from "@/components/about/BioSection";
import ShowSection from "@/components/about/ShowSection";
import SkillsSection from "@/components/about/SkillsSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import ClientsSection from "@/components/about/ClientsSection";
import CallToAction from "@/components/about/CallToAction";

const AboutPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 w-full">
      <HeroSection />
      <BioSection />
      <ShowSection />
      <SkillsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
