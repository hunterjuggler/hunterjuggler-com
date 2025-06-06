import { motion } from "@/lib/motion";
const GalleryHero = () => {
  return <section className="py-16 bg-secondary md:py-[64px]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Performance Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through a collection of images and videos showcasing performances from various 
            events, festivals, and venues around the world.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default GalleryHero;