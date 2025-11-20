import profileImg from "@/features/booking/assets/girl.png";

export const ProfileSection = () => {
  return (
    <div className="sm:flex w-full sm:px-8 gap-4 justify-center items-center">
      <div className="hidden sm:block relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full">
        <img
          src={profileImg}
          alt="Profile"
          className="hidden sm:block absolute inset-0 h-full w-full object-cover object-right"
          draggable={false}
        />
      </div>
      <div className="pt-1 whitespace-pre-wrap">
        <h1 className="text-[28px] leading-tight font-semibold text-slate-900">
          Book a Session
        </h1>
        <p className="mt-2 max-w-[460px] text-[14px] leading-6 text-slate-500">
          Choose a date and time that is convenient for you to e-meet your
          stylist
        </p>
      </div>
    </div>
  );
};
