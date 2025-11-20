import profileImg from "@/features/booking/assets/girl.png";

export const MobileHero = () => {
  return (
    <div
      className="
        sm:hidden relative h-full overflow-hidden z-1
        bg-[linear-gradient(170deg,#7a430f_0%,#c37412_40%,#eaa21d_78%,#f0ae38_100%)]
      "
    >
      <img
        src={profileImg}
        alt=""
        className="
          select-none pointer-events-none object-cover h-full"
        draggable={false}
      />

      <div className="absolute top-[15%] z-10 px-6 pt-10 text-white">
        <div className="text-[26px] font-semibold leading-tight">
          Cool session
        </div>
        <p className="mt-1 text-white/85">Additional type</p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 backdrop-blur">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
          >
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
            <path
              d="M12 7v5l3 2"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[13px] leading-none">30 min</span>
        </div>
      </div>
    </div>
  );
};
