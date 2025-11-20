import { minutesToLabel12h } from "@/shared/lib/date";
import { Slider } from "@/shared/ui/components/Slider";
import { Chip } from "@/shared/ui/kit/Chip";
import type { SelectionState } from "../model/use-booking";

interface TimeSliderProps {
  quarterMinutes: number[];
  isPastSlot: (date: Date, minutes: number) => boolean;
  setMinutes: (m: number) => void;
  state: SelectionState;
}

export const TimeSlider = ({
  quarterMinutes,
  isPastSlot,
  setMinutes,
  state,
}: TimeSliderProps) => {
  return (
    <Slider ariaLabel="Select a time" className="sm:ps-10 sm:pe-10">
      {quarterMinutes.map((m) => (
        <Chip
          type="time"
          key={m}
          disabled={
            state.selectedDate ? isPastSlot(state.selectedDate, m) : true
          }
          selected={state.selectedMinutes === m}
          onClick={() => setMinutes(m)}
        >
          {minutesToLabel12h(m)}
        </Chip>
      ))}
    </Slider>
  );
};
