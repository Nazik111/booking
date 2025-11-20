import { formatDayName, formatMonthDay, isSameDay } from "@/shared/lib/date";
import { Slider } from "@/shared/ui/components/Slider";
import { Chip } from "@/shared/ui/kit/Chip";
import type { SelectionState } from "../model/use-booking";

interface DateSliderProps {
  dateRange: Date[];
  state: SelectionState;
  setDate: (d: Date) => void;
}

export const DateSlider = ({ dateRange, state, setDate }: DateSliderProps) => {
  return (
    <Slider ariaLabel="Select a date" className="sm:ps-10 sm:pe-10">
      {dateRange.map((d) => {
        const selected =
          !!state.selectedDate && isSameDay(state.selectedDate, d);
        return (
          <Chip
            type="date"
            selected={selected}
            key={d.toISOString()}
            onClick={() => setDate(d)}
          >
            <div className="text-[16px] tracking-wide opacity-80">
              {formatDayName(d)}
            </div>
            <div className="text-[16px]">{formatMonthDay(d)}</div>
          </Chip>
        );
      })}
    </Slider>
  );
};
