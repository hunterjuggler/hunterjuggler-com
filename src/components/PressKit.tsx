
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PressKit = () => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-5 border border-accent/20">
      <h3 className="text-xl font-display font-bold mb-3">Press Kit</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Download our press kit containing high-resolution images, biography, and 
        show details for event planners and media.
      </p>
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2 rounded-full hover:bg-accent/10"
        asChild
      >
        <a href="/hunter-way-press-kit.pdf" download>
          <FileDown className="h-4 w-4 text-[#ff4742]" />
          <span>Download Press Kit</span>
        </a>
      </Button>
    </div>
  );
};

export default PressKit;
