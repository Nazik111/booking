export const startOfDay = (d: Date): Date => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

export const addDays = (d: Date, days: number): Date => {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
};

export const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const formatDayName = (d: Date): string =>
  new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(d);

export const formatMonthDay = (d: Date): string =>
  new Intl.DateTimeFormat(undefined, { day: "numeric" }).format(d);

export const toUnixSeconds = (d: Date): number =>
  Math.floor(d.getTime() / 1000);

export const minutesToLabel12h = (mins: number): string => {
  const hh = Math.floor(mins / 60);
  const mm = mins % 60;
  const h12 = ((hh + 11) % 12) + 1;
  const ampm = hh < 12 ? "AM" : "PM";
  const mmStr = mm.toString().padStart(2, "0");
  return `${h12}:${mmStr} ${ampm}`;
};

export const generateQuarterHours = (): number[] => {
  const slots: number[] = [];
  for (let m = 0; m < 24 * 60; m += 15) slots.push(m);
  return slots;
};

export const combineDateAndMinutes = (
  date: Date,
  minutesFromMidnight: number,
): Date => {
  const d = startOfDay(date);
  const hours = Math.floor(minutesFromMidnight / 60);
  const minutes = minutesFromMidnight % 60;
  d.setHours(hours, minutes, 0, 0);
  return d;
};
