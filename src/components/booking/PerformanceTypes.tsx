
import { Theater } from "lucide-react";

const PerformanceTypes = () => {
  return (
    <div className="p-6 bg-black/40 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">Performance Types</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Theater size={16} />
          </span>
          <div>
            <p className="font-medium">Standard Performance</p>
            <p className="text-sm text-muted-foreground">Classic 30-45 minute show featuring signature acts</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Theater size={16} />
          </span>
          <div>
            <p className="font-medium">Custom Show</p>
            <p className="text-sm text-muted-foreground">Tailored performance designed for your specific event</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="bg-accent/20 p-1 rounded text-[#ff4742] mr-3 mt-0.5">
            <Theater size={16} />
          </span>
          <div>
            <p className="font-medium">Roaming Entertainment / Ambience</p>
            <p className="text-sm text-muted-foreground">Wandering performance that creates atmosphere throughout your venue</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PerformanceTypes;
