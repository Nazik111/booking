interface ChipProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type: "date" | "time";
}

export const Chip: React.FC<ChipProps> = ({
  selected = false,
  disabled = false,
  onClick,
  children,
  className = "",
  type,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={[
      "border px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      selected
        ? "border-[#DE3A6B] bg-brand-600 text-[#DE3A6B] bg-[#F7F7FC]"
        : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
      disabled ? "cursor-not-allowed opacity-40 hover:bg-white" : "",
      className,
      type === "date" ? "rounded-lg w-16" : "rounded-[72px]",
    ].join(" ")}
  >
    {children}
  </button>
);
