import { Globe, Award, Star, Clock, Music, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { useEffect } from "react";
import FunIcon from "@/components/FunIcon";
import RotatingTestimonials from "@/components/RotatingTestimonials";

const specializedSkills = [
  {
    name: "Juggling",
    description: "From classic ball juggling to clubs, rings, and unconventional objects.",
    image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Unicycling",
    description: "Skilled unicycle performances, including tricks and choreographed routines.",
    image: "https://images.unsplash.com/photo-1541278553099-ac0fd0449e1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Balancing",
    description: "Impressive feats of balance using various props and techniques.",
    image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Ball Spinning",
    description: "Contact juggling and ball manipulation with crystal-clear spheres.",
    image: "https://images.unsplash.com/photo-1603475688840-b97454e91a6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Comedy",
    description: "Engaging audience interaction with wit and humor woven into performances.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Audience Participation",
    description: "Interactive elements that involve and engage the audience throughout the show.",
    image: "https://images.unsplash.com/photo-1457131760772-7017c6180f05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Fire",
    description: "Mesmerizing fire manipulation including poi, staff, and other fire props.",
    image: "https://images.unsplash.com/photo-1629263048865-c8660c06a5c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "LED",
    description: "Stunning visual displays using cutting-edge LED technology and light manipulation.",
    image: "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

// Add testimonials data for the RotatingTestimonials component
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
}, {
  quote: "Hunter had our entire team laughing and amazed throughout the show. Definitely booking again!",
  author: "James Wilson",
  company: "Marketing Solutions Corp."
}];

const AboutPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <BlurImage src="https://images.unsplash.com/photo-1556085253-77543049e818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Hunter Way performing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 pt-20 md:px-6">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-shadow-md mb-6">About Me</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">A brief look into my journey, skills, and passion for performance arts.</p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
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
              <span className="text-accent font-medium">My Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                A Decade of Dedication to the Art of Performance
              </h2>
              <p className="text-muted-foreground mb-6">
                From a young age, I was captivated by the magic of live performance. I began my journey
                exploring various disciplines, from acrobatics to juggling, always seeking to push the boundaries
                of what's possible on stage.
              </p>
              <p className="text-muted-foreground mb-8">
                Over the past decade, I've had the privilege of performing for audiences around the world,
                honing my skills and developing a unique style that blends technical precision with artistic expression.
              </p>
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
              <BlurImage src="https://images.unsplash.com/photo-1523779917675-b6ed3a6ca517?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Hunter Way performing" aspectRatio="portrait" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Show Section - New section */}
      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <BlurImage 
                src="https://images.unsplash.com/photo-1543345207-0c8b8c87e2f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Hunter Way show performance" 
                aspectRatio="wide" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <span className="text-accent font-medium">The Show</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                A Captivating Performance
              </h2>
              <p className="text-muted-foreground mb-6">
                My performances blend technical skill with storytelling and humor, creating an engaging experience 
                for audiences of all ages. Each show is carefully crafted to build excitement, with moments of wonder 
                interspersed with laughter and audience participation.
              </p>
              <p className="text-muted-foreground mb-6">
                From the opening spectacular juggling routine to the finale featuring fire or LED props, 
                each segment flows seamlessly into the next. Interactive elements invite volunteers to become 
                part of the show, creating unique memories and ensuring no two performances are exactly alike.
              </p>
              <p className="text-muted-foreground mb-8">
                Show length is flexible, typically running 30-60 minutes depending on your event needs, with 
                customization available to match your specific theme or venue.
              </p>
              <Button asChild className="custom-button" variant="default" rounded="pill">
                <Link to="/booking">Book Your Show</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Skills Section - Made smaller and more compact */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Specialized Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
                A comprehensive toolkit of abilities for captivating performances.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {specializedSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-black/40 rounded-lg overflow-hidden border border-white/10 group hover:border-accent/40 transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <BlurImage
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <h3 className="absolute bottom-2 left-3 text-sm font-bold">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - MOVED UP from bottom to here */}
      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What People Say</h2>
            </motion.div>
          </div>
          
          <RotatingTestimonials testimonials={testimonials} interval={7000} />
        </div>
      </section>

      {/* Client Types Section - MOVED DOWN from above to here */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                My Diverse Clientele
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I've had the pleasure of working with a wide range of clients, each with unique needs.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-14 mb-3">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-base mb-1 text-center">International Festivals</h3>
              <p className="text-muted-foreground text-xs text-center">
                Bringing artistry to global celebrations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-14 mb-3">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-base mb-1 text-center">Corporate Events</h3>
              <p className="text-muted-foreground text-xs text-center">
                Elevating corporate gatherings with unique performances.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-14 mb-3">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-base mb-1 text-center">Private Celebrations</h3>
              <p className="text-muted-foreground text-xs text-center">
                Making personal milestones unforgettable.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl p-5 shadow-sm border border-white/10"
            >
              <div className="flex items-center justify-center h-14 mb-3">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-base mb-1 text-center">Themed Events</h3>
              <p className="text-muted-foreground text-xs text-center">
                Custom performances tailored to your theme.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Bring Your Event to Life?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can create a memorable and captivating performance for your audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="default" rounded="pill" className="custom-button">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" rounded="pill" className="custom-button">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
