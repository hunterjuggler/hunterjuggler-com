
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";
import { useEffect } from "react";

// Define skill data with images
const skills = [
  { 
    name: "Juggling", 
    image: "https://images.unsplash.com/photo-1541904845547-0eaf866de232?q=80&w=1976&auto=format&fit=crop" 
  },
  { 
    name: "Unicycling", 
    image: "https://images.unsplash.com/photo-1576856497337-4f2be24683a4?q=80&w=1976&auto=format&fit=crop" 
  },
  { 
    name: "Fire Performance", 
    image: "https://images.unsplash.com/photo-1600252278397-5fe47c86d3aa?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    name: "Ball Spinning", 
    image: "https://images.unsplash.com/photo-1587899897871-776c11929eb0?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    name: "Comedy", 
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    name: "Balancing", 
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    name: "LED Performance", 
    image: "https://images.unsplash.com/photo-1637419850431-0dd1956fbb37?q=80&w=1974&auto=format&fit=crop" 
  }
];

const timeline = [
  {
    year: "2023",
    title: "International Tour",
    description: "Headlined performances across Europe and Asia, collaborating with renowned circus companies.",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    year: "2020",
    title: "Award Winning Performance",
    description: "Received the 'Outstanding Solo Performance' award at the International Performing Arts Festival.",
    icon: <Award className="w-4 h-4" />
  },
  {
    year: "2018",
    title: "Founded Performance Studio",
    description: "Established a studio for training and mentoring emerging performing artists.",
    icon: <Users className="w-4 h-4" />
  },
  {
    year: "2015",
    title: "Advanced Certification",
    description: "Completed advanced certification in physical theater and circus arts in Montreal.",
    icon: <GraduationCap className="w-4 h-4" />
  },
  {
    year: "2012",
    title: "Professional Debut",
    description: "First professional performance with the National Circus Company.",
    icon: <Briefcase className="w-4 h-4" />
  },
];

const AboutPage = () => {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <span className="text-accent font-medium">About Me</span>
              <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">
                The Journey Behind the Performance
              </h1>
              <p className="text-muted-foreground mb-4">
                I'm Hunter Way, a professional performing artist with over a decade of experience
                specializing in acrobatics, juggling, and fire performances. My journey began
                with a fascination for movement and a desire to create experiences that inspire wonder.
              </p>
              <p className="text-muted-foreground">
                Today, I travel the world bringing my unique performances to audiences of all kinds,
                from intimate private events to major international festivals. Each performance is
                crafted to create moments of connection, inspiration, and awe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-8 rounded-2xl bg-accent/5 -z-10"></div>
                <BlurImage
                  src="https://images.unsplash.com/photo-1622367536944-4872bb438ed6?q=80&w=1974&auto=format&fit=crop"
                  alt="Hunter Way portrait"
                  className="rounded-xl shadow-lg"
                  aspectRatio="portrait"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Specialized Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Years of training and practice have enabled me to master a diverse range of performance disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl bg-black/40 border border-white/10"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Career Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey as a performing artist has been shaped by these key moments.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-4 flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-full bg-white/10 mt-3"></div>
                  )}
                </div>
                <div className="pt-1.5">
                  <span className="text-sm font-medium text-accent">{item.year}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
