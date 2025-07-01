
import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EventTimeSectionProps {
  form: any;
}

const EventTimeSection = ({ form }: EventTimeSectionProps) => {
  const [amPm, setAmPm] = useState("AM");

  const handleTimeChange = (timeValue: string) => {
    const fullTime = timeValue ? `${timeValue} ${amPm}` : "";
    form.setValue("eventTime", fullTime);
  };

  const handleAmPmToggle = (period: string) => {
    setAmPm(period);
    const currentTime = form.getValues("eventTime");
    if (currentTime) {
      const timeOnly = currentTime.replace(/ (AM|PM)$/, "");
      form.setValue("eventTime", `${timeOnly} ${period}`);
    }
  };

  return (
    <FormField
      control={form.control}
      name="eventTime"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Event Time *</FormLabel>
          <FormControl>
            <div className="flex gap-2">
              <Input 
                placeholder="e.g., 7:30"
                onChange={(e) => handleTimeChange(e.target.value)}
                className="flex-1"
              />
              <div className="flex rounded-md border">
                <Button
                  type="button"
                  variant={amPm === "AM" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-r-none px-3"
                  onClick={() => handleAmPmToggle("AM")}
                >
                  AM
                </Button>
                <Button
                  type="button"
                  variant={amPm === "PM" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-l-none px-3"
                  onClick={() => handleAmPmToggle("PM")}
                >
                  PM
                </Button>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EventTimeSection;
