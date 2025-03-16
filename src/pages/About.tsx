
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";
import BlurImage from "@/components/BlurImage";
import { motion } from "@/lib/motion";

const skills = [
  "Acrobatics", "Juggling", "Fire Performance", 
  "Aerial Arts", "Dance", "Physical Comedy", 
  "Stage Combat", "Stilt Walking", "Object Manipulation"
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
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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
                I'm Alex Morgan, a professional performing artist with over a decade of experience
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
                  alt="Alex Morgan portrait"
                  className="rounded-xl shadow-lg"
                  aspectRatio="portrait"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Performance Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I believe that performance art is about creating connections – between 
              artist and audience, between the physical and emotional, between tradition and innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Every show is an opportunity to transcend the ordinary and create 
              moments that stay with the audience long after the final bow. My approach 
              combines technical precision with authentic emotional expression to deliver 
              performances that are both spectacular and moving.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Specialized Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Years of training and practice have enabled me to master a diverse range of performance disciplines.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
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
                    <div className="w-px h-full bg-border mt-3"></div>
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

      {/* Training Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Training & Education</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                The Foundation of Excellence
              </h2>
              <p className="text-muted-foreground mb-4">
                My formal training began at the National School of Circus Arts, where I 
                studied under master performers from around the world. This foundation in 
                classical techniques provided the platform for my career.
              </p>
              <p className="text-muted-foreground mb-4">
                I continued my education with specialized training in physical theater in 
                Paris and completed advanced certifications in various movement disciplines. 
                My approach to continuous learning keeps my performances fresh and innovative.
              </p>
              <p className="text-muted-foreground">
                Today, I regularly participate in masterclasses and workshops to expand my 
                repertoire and refine my craft, believing that a performing artist's education 
                never truly ends.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <BlurImage
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=1974&auto=format&fit=crop"
                alt="Aerial training"
                className="rounded-lg shadow-md"
                aspectRatio="square"
              />
              <BlurImage
                src="https://images.unsplash.com/photo-1519925610903-381054cc2a1c?q=80&w=1974&auto=format&fit=crop"
                alt="Fire performance training"
                className="rounded-lg shadow-md translate-y-8"
                aspectRatio="square"
              />
              <BlurImage
                src="https://images.unsplash.com/photo-1584120073944-012801588295?q=80&w=1974&auto=format&fit=crop"
                alt="Juggling practice"
                className="rounded-lg shadow-md translate-y-4"
                aspectRatio="square"
              />
              <BlurImage
                src="https://images.unsplash.com/photo-1483117451344-12a4932947ba?q=80&w=1974&auto=format&fit=crop"
                alt="Physical theater training"
                className="rounded-lg shadow-md"
                aspectRatio="square"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
