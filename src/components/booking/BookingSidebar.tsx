
import { motion } from "@/lib/motion";

const BookingSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }} 
      className="lg:col-span-1"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
        Booking Information
      </h2>
    </motion.div>
  );
};

export default BookingSidebar;
