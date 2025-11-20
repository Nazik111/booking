import React, {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

type SliderProps = {
  className?: string;
  ariaLabel?: string;
  page?: number;
};

export const Slider = ({
  children,
  className = "",
  ariaLabel,
  page = 0.9,
}: PropsWithChildren<SliderProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 1);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const byPage = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const dx = Math.max(0, Math.floor(el.clientWidth * page));
    el.scrollTo({ left: el.scrollLeft + dir * dx, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <div aria-hidden />
        {React.Children.map(children, (child) => (
          <div className="shrink-0 snap-start">{child}</div>
        ))}
        <div aria-hidden />
      </div>

      <ArrowBtn
        side="left"
        disabled={!canLeft}
        onClick={() => byPage(-1)}
        className={"-left-0.5 hidden sm:block"}
      />
      <ArrowBtn
        side="right"
        disabled={!canRight}
        onClick={() => byPage(1)}
        className="-right-0.5 hidden sm:block"
      />
    </div>
  );
};

const ArrowBtn = ({
  side,
  disabled,
  onClick,
  className = "",
}: {
  side: "left" | "right";
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}) => {
  const rotate = side === "left" ? "rotate-180" : "";
  const pos = side === "left" ? "left-0" : "right-0";
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous" : "Next"}
      disabled={disabled}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-[58%] ${pos} ${className}
        grid h-9 w-9 place-items-center
      text-slate-700
        disabled:opacity-40 cursor-pointer`}
    >
      <svg
        className={`h-[18px] w-[18px] ${rotate}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};
