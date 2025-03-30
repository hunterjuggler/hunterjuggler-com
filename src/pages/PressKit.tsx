
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "@/lib/motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurImage from "@/components/BlurImage";

const PressKitPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <title>Press Kit | Hunter Way</title>
        <meta 
          name="description" 
          content="Download Hunter Way's press kit containing high-resolution images, biography, and show details for event planners and media." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black/40 bg-gradient-to-b from-black/40 to-black/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Press Kit & Media Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to promote and feature Hunter Way's performances in your publications and events.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Press Kit Download */}
            <div className="md:col-span-4">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-accent/20 h-full flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-4">Download Press Kit</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Download our comprehensive press kit containing high-resolution images, 
                  biography, performance details, and technical requirements for event 
                  planners and media professionals.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 rounded-full hover:bg-accent/10"
                  asChild
                >
                  <a href="/hunter-way-press-kit.pdf" download>
                    <FileDown className="h-4 w-4 text-[#ff4742]" />
                    <span>Download Press Kit</span>
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Media Photos */}
            <div className="md:col-span-8">
              <h3 className="text-2xl font-display font-bold mb-6">Media Photos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <BlurImage
                    src="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop"
                    alt="Hunter Way performance photo 1"
                    aspectRatio="video"
                    className="w-full transition-transform hover:scale-105"
                    noBg={true}
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <BlurImage
                    src="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=2"
                    alt="Hunter Way performance photo 2"
                    aspectRatio="video"
                    className="w-full transition-transform hover:scale-105"
                    noBg={true}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Press Coverage */}
          <div className="mt-12">
            <h3 className="text-2xl font-display font-bold mb-6">Press Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/10 transition-colors">
                  <BlurImage
                    src={`https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`}
                    alt={`Press clipping ${i}`}
                    aspectRatio="video"
                    className="w-full"
                    noBg={true}
                  />
                  <div className="p-4">
                    <p className="text-xs text-accent/90 font-medium mb-1">
                      {i === 1 ? "Entertainment Weekly" : i === 2 ? "Performance Arts Magazine" : "The Daily Telegraph"}
                    </p>
                    <p className="text-base font-medium line-clamp-2">
                      {i === 1 
                        ? "Hunter Way Amazes Crowd at International Festival" 
                        : i === 2 
                        ? "The Art of Balance: Interview with Hunter Way" 
                        : "Top 10 Performers to Watch This Year"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressKitPage;
