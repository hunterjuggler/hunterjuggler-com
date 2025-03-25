
import React from 'react';
import { motion } from "@/lib/motion";
import BlurImage from "@/components/BlurImage";

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

const SkillsSection: React.FC = () => {
  return (
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
  );
};

export default SkillsSection;
