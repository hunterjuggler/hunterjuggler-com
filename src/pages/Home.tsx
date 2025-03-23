
import { ArrowRight, Star, Diamond, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { useEffect } from "react";
import PressKit from "@/components/PressKit";
import { Helmet } from "react-helmet-async";
import RotatingTestimonials from "@/components/RotatingTestimonials";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import FunIcon from "@/components/FunIcon";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
}, {
  quote: "Not just a performer, but a true entertainer who connects with the audience on a personal level.",
  author: "Emma Thompson",
  company: "Luxury Resorts International"
}];

// Specialized skills with imagery
const skills = [
  { name: "Juggling", image: "https://images.unsplash.com/photo-1624556110854-e6b6f371fedd?q=80&w=1974&auto=format&fit=crop", icon: "juggle" },
  { name: "Unicycling", image: "https://images.unsplash.com/photo-1604154976984-2c029e372f1a?q=80&w=1974&auto=format&fit=crop", icon: "unicycle" },
  { name: "Balancing", image: "https://images.unsplash.com/photo-1599828586774-997f16e5280e?q=80&w=1974&auto=format&fit=crop", icon: "diamond" },
  { name: "Ball Spinning", image: "https://images.unsplash.com/photo-1564119204587-6c1782b66f7f?q=80&w=1974&auto=format&fit=crop", icon: "juggle" },
  { name: "Comedy", image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?q=80&w=1974&auto=format&fit=crop", icon: "diamond" },
  { name: "Audience Participation", image: "https://images.unsplash.com/photo-1545128485-c400ce7b23d2?q=80&w=1974&auto=format&fit=crop", icon: "diamond" },
  { name: "Fire", image: "https://images.unsplash.com/photo-1599204606395-ede983886ce8?q=80&w=1974&auto=format&fit=crop", icon: "fire" },
  { name: "LED", image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1974&auto=format&fit=crop", icon: "fire" }
];

// Press clippings - more subtle presentation
const pressClippings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop",
    title: "Hunter Way Amazes Crowd at International Festival",
    source: "Entertainment Weekly"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=2",
    title: "The Art of Balance: Interview with Hunter Way",
    source: "Performance Arts Magazine"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=3",
    title: "Top 10 Performers to Watch This Year",
    source: "The Daily Telegraph"
  }
];

// Social media posts
const socialPosts = [
  {
    id: "yt1",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop",
    title: "Extreme Juggling Challenge - 7 Balls on a Unicycle!",
    likes: 15430,
    comments: 342,
    url: "https://youtube.com"
  },
  {
    id: "yt3",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1599904215055-716eb956d604?q=80&w=1974&auto=format&fit=crop",
    title: "Backstage Preparation - Getting Ready for the Big Show",
    likes: 9870,
    comments: 526,
    url: "https://youtube.com"
  },
  {
    id: "yt2",
    platform: "youtube" as const,
    thumbnail: "https://images.unsplash.com/photo-1578377375341-c2e54cb62eac?q=80&w=1974&auto=format&fit=crop",
    title: "Fire Juggling Gone Wrong (but not really) - Corporate Show Highlights",
    likes: 8720,
    comments: 456,
    url: "https://youtube.com"
  }
];

const HomePage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <title>Hunter Way | Professional Comedy Juggler & Unicyclist for Events</title>
        <meta name="description" content="Hunter Way - Professional comedy juggler and unicyclist available for corporate events, festivals, and private celebrations. Book now for your next event!" />
        <meta name="keywords" content="comedy juggler for hire, professional juggler for events, circus performer for hire, unicyclist entertainer for events, festival entertainment, variety show performer, corporate event juggler, cruise ship entertainer for hire, family-friendly comedy act" />
      </Helmet>
      
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
              <Button asChild size="lg" variant="gradient" rounded="pill" className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
                <Link to="/gallery">Explore Performances</Link>
              </Button>
              <Button asChild variant="outline" size="lg" rounded="pill" className="group border-2 hover:border-accent">
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
              
              {/* Media mentions - Now with diamond icons */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <FunIcon name="diamond" className="text-accent" />
                  </div>
                  <p className="font-medium">10 Million+ views - Youtube</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <FunIcon name="diamond" className="text-accent" />
                  </div>
                  <p className="font-medium">As seen on BBC, Guardian, Dailymail</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <FunIcon name="diamond" className="text-accent" />
                  </div>
                  <p className="font-medium">Internationally performed over 1000 shows in 8 countries and counting</p>
                </div>
              </div>
              
              <Button asChild className="rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300" variant="gradient">
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

      {/* Press Mentions & Press Kit - More subtle integration */}
      <section className="py-10 bg-black/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <p className="text-sm text-accent/90 uppercase tracking-wider font-medium">Featured In</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {pressClippings.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/1 sm:basis-1/2 md:basis-1/3">
                      <div className="bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/10 transition-colors">
                        <BlurImage
                          src={item.image}
                          alt={item.title}
                          aspectRatio="video"
                          className="w-full"
                          noBg={true}
                        />
                        <div className="p-3">
                          <p className="text-xs text-accent/90 font-medium mb-1">{item.source}</p>
                          <p className="text-sm line-clamp-2">{item.title}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            <div className="md:col-span-4">
              <PressKit />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-16 bg-black/15">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-medium">Follow Along</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Latest Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my latest performances on YouTube
            </p>
          </div>
          
          <SocialMediaFeed posts={socialPosts} />
          
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" rounded="pill" className="group border-2 hover:border-accent">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                See More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Auto-Rotating Testimonials */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-medium">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What People Say</h2>
          </div>
          
          <RotatingTestimonials testimonials={testimonials} interval={7000} />
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
              <Button asChild size="lg" variant="gradient" rounded="pill" className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" rounded="pill" className="group border-2 hover:border-accent">
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
