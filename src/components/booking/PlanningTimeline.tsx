
import { Clock } from "lucide-react";

const PlanningTimeline = () => {
  return (
    <div className="p-6 bg-black/40 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">Planning Timeline</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Clock size={16} />
          </span>
          <div>
            <p className="font-medium">Local Events</p>
            <p className="text-sm text-muted-foreground">Book 6-8 weeks in advance</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Clock size={16} />
          </span>
          <div>
            <p className="font-medium">Custom Shows</p>
            <p className="text-sm text-muted-foreground">Book 2+ months in advance</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Clock size={16} />
          </span>
          <div>
            <p className="font-medium">International Bookings</p>
            <p className="text-sm text-muted-foreground">Book 3+ months in advance</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PlanningTimeline;
