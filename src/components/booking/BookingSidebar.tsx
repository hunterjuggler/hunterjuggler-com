
import { motion } from "@/lib/motion";
import PlanningTimeline from "./PlanningTimeline";

const BookingSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }} 
      className="lg:col-span-1"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        Booking Information
      </h2>
      
      <div className="space-y-6 mb-8">
        <PlanningTimeline />
      </div>
    </motion.div>
  );
};

export default BookingSidebar;
