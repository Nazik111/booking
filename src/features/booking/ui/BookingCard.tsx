import { Button } from "@/shared/ui/kit/Button";
import { useBooking } from "../model/use-booking";
import { DateSlider } from "./DateSlider";
import { TimeSlider } from "./TimeSlider";
import { MonthRangeLabels } from "./MonthRangeLabels";
import { ProfileSection } from "./ProfileSection";

export function BookingCard() {
  const {
    dateRange,
    quarterMinutes,
    monthsInRange,
    state,
    setDate,
    setMinutes,
    isPastSlot,
    canConfirm,
    confirm,
  } = useBooking();

  return (
    <section className="relative z-20 sm:mx-auto w-full flex flex-col h-full sm:h-auto sm:max-w-[568px] sm:min-h-[620px] rounded-t-[22px] sm:rounded-[22px] bg-white p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.20)] ring-1 ring-black/5">
      <ProfileSection />

      <div className="mt-6 sm:mt-12 flex gap-8 ps-2 sm:ps-[54px] text-sm text-slate-400">
        <MonthRangeLabels monthInRange={monthsInRange} />
      </div>

      <div className="mt-1 sm:mt-2">
        <DateSlider dateRange={dateRange} state={state} setDate={setDate} />
      </div>

      <div className="mt-8 sm:mt-14">
        <TimeSlider
          quarterMinutes={quarterMinutes}
          isPastSlot={isPastSlot}
          setMinutes={setMinutes}
          state={state}
        />
      </div>

      <div className="w-full pt-4 sm:h-full flex justify-center items-end">
        <Button
          disabled={!canConfirm}
          onClick={() => {
            const res = confirm();
            if (res) console.log(res);
          }}
          className="h-14 w-full sm:max-w-[360px] rounded-full text-[16px] font-semibold bg-neutral-900 text-white disabled:opacity-50"
        >
          Confirm
        </Button>
      </div>
    </section>
  );
}
