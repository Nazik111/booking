export const MonthRangeLabels = ({
  monthInRange,
}: {
  monthInRange: { key: string; label: string }[];
}) => {
  return monthInRange.map((m) => <span key={m.key}>{m.label}</span>);
};
