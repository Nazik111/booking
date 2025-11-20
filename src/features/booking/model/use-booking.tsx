import { useCallback, useMemo, useState } from "react";
import {
  addDays,
  startOfDay,
  generateQuarterHours,
  combineDateAndMinutes,
  toUnixSeconds,
  isSameDay,
} from "@/shared/lib/date";

export interface SelectionState {
  selectedDate: Date | null;
  selectedMinutes: number | null;
}

export interface BookingResult {
  dateRange: Date[];
  quarterMinutes: number[];
  state: SelectionState;
  setDate: (d: Date) => void;
  setMinutes: (m: number) => void;
  isPastSlot: (date: Date, minutes: number) => boolean;
  canConfirm: boolean;
  confirm: () => { timestamp: number } | null;
  monthsInRange: { key: string; label: string }[];
}

const TOTAL_DAYS_AHEAD = 42;
const QUARTER_MINUTES = generateQuarterHours();

export const useBooking = (): BookingResult => {
  const [dateRange] = useState<Date[]>(() => {
    const today0 = startOfDay(new Date());
    return Array.from({ length: TOTAL_DAYS_AHEAD + 1 }, (_, i) =>
      addDays(today0, i),
    );
  });

  const [state, setState] = useState<SelectionState>({
    selectedDate: null,
    selectedMinutes: null,
  });

  const monthsInRange = useMemo(() => {
    const firsts: { key: string; label: string }[] = [];
    let lastKey = "";
    for (const d of dateRange) {
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (key !== lastKey) {
        lastKey = key;
        const short = d.toLocaleString(undefined, { month: "short" });
        firsts.push({ key, label: short });
      }
    }
    return firsts;
  }, [dateRange]);

  const setDate = (d: Date) =>
    setState((s) => ({ ...s, selectedDate: d, selectedMinutes: null }));

  const setMinutes = (m: number) =>
    setState((s) => ({ ...s, selectedMinutes: m }));

  const isPastSlot = useCallback((date: Date, minutes: number) => {
    const now = new Date();

    if (isSameDay(date, now)) {
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      return minutes < nowMinutes;
    }

    if (date.getTime() < startOfDay(now).getTime()) return true;

    return false;
  }, []);

  const canConfirm =
    !!state.selectedDate &&
    state.selectedMinutes !== null &&
    !isPastSlot(state.selectedDate, state.selectedMinutes);

  const confirm = (): { timestamp: number } | null => {
    if (!canConfirm || !state.selectedDate || state.selectedMinutes == null) {
      return null;
    }
    const dt = combineDateAndMinutes(state.selectedDate, state.selectedMinutes);
    return { timestamp: toUnixSeconds(dt) };
  };

  return {
    dateRange,
    quarterMinutes: QUARTER_MINUTES,
    state,
    setDate,
    setMinutes,
    isPastSlot,
    canConfirm,
    confirm,
    monthsInRange,
  };
};
