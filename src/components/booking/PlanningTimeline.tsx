
import { Clock } from "lucide-react";

const PlanningTimeline = () => {
  return (
    <div className="p-6 bg-black/40 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">Planning Timeline</h3>
      <p className="text-sm text-muted-foreground mb-4">
        For the best experience, I recommend booking:
      </p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <Clock size={16} className="text-[#ff4742]" />
          <span>At least 6-8 weeks in advance for standard shows</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock size={16} className="text-[#ff4742]" />
          <span>3-6 months for custom performances</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock size={16} className="text-[#ff4742]" />
          <span>6+ months for international bookings</span>
        </li>
      </ul>
    </div>
  );
};

export default PlanningTimeline;
