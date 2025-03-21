import { ArrowRight, Star, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { useEffect } from "react";

const testimonials = [{
  quote: "Hunter's performance was the highlight of our corporate event. The audience was completely mesmerized!",
  author: "Sarah Johnson",
  company: "Tech Innovations Inc."
}, {
  quote: "Working with Hunter was a dream. Professional, punctual, and the performance exceeded all expectations.",
  author: "Michael Chen",
  company: "Global Events"
}, {
  quote: "The combination of skill, artistry, and stage presence is something I've rarely seen in my 20 years in this industry.",
  author: "Diana Rodriguez",
  company: "Festival Director"
}];

// Specialized skills with imagery
const skills = [
  { name: "Juggling", image: "https://images.unsplash.com/photo-1624556110854-e6b6f371fedd?q=80&w=1974&auto=format&fit=crop" },
  { name: "Unicycling", image: "https://images.unsplash.com/photo-1604154976984-2c029e372f1a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Balancing", image: "https://images.unsplash.com/photo-1599828586774-997f16e5280e?q=80&w=1974&auto=format&fit=crop" },
  { name: "Ball Spinning", image: "https://images.unsplash.com/photo-1564119204587-6c1782b66f7f?q=80&w=1974&auto=format&fit=crop" },
  { name: "Comedy", image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?q=80&w=1974&auto=format&fit=crop" },
  { name: "Audience Participation", image: "https://images.unsplash.com/photo-1545128485-c400ce7b23d2?q=80&w=1974&auto=format&fit=crop" },
  { name: "Fire", image: "https://images.unsplash.com/photo-1599204606395-ede983886ce8?q=80&w=1974&auto=format&fit=crop" },
  { name: "LED", image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1974&auto=format&fit=crop" }
];

const HomePage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - More breathing space */}
      <section className="relative min-h-[100vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <BlurImage src="https://images.unsplash.com/photo-1595531175927-169ca1a12af1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Hunter Way performing" className="w-full h-full object-cover hero-mask" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 pt-32 md:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-8">
              International Performing Artist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-shadow-md mb-10">Hunter Way</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12">Shows | Festivals | Events</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/gallery">Explore Performances</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full group">
                <Link to="/booking">
                  Book a Show
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Image Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <span className="text-accent font-medium">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Bringing Art to Life Through Movement
              </h2>
              <p className="text-muted-foreground mb-6">
                With over a decade of experience in performing arts, I've dedicated my life to perfecting my craft
                and creating unforgettable experiences for audiences around the world.
              </p>
              <p className="text-muted-foreground mb-8">
                My performances combine technical precision with emotional storytelling,
                creating moments that resonate long after the show ends.
              </p>
              
              {/* Media mentions - Updated format and standardized size */}
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-4">
                  <Diamond size={20} className="text-accent" />
                  <p className="font-medium">10 Million+ views - Youtube</p>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond size={20} className="text-accent" />
                  <p className="font-medium">As seen on BBC, Guardian, Dailymail</p>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond size={20} className="text-accent" />
                  <p className="font-medium">Internationally performed over 1000 shows in 8 countries and counting</p>
                </div>
              </div>
              
              <Button asChild className="rounded-full">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="rounded-2xl overflow-hidden shadow-xl">
              <BlurImage src="https://images.unsplash.com/photo-1599904215055-716eb956d604?q=80&w=1974&auto=format&fit=crop" alt="Hunter Way performing" aspectRatio="portrait" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Reorganized */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-medium">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What People Say</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 rounded-2xl p-8 shadow-sm border border-white/10 mb-6"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground/90 mb-6 italic text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Section - New section */}
      <section className="py-16 bg-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-accent font-medium">Press Coverage</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Featured In</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <BlurImage
                  src={`https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${item}`}
                  alt="Newspaper clipping"
                  aspectRatio="video"
                  className="w-full rounded-md mb-3"
                />
                <p className="text-sm text-accent font-medium">Press Coverage {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black/15">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Create an Unforgettable Experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're planning a corporate event, festival, or private celebration,
              let's collaborate to create a performance that will leave your audience amazed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
