import { Header } from "@/shared/ui/components/Header";

export const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(168deg,#f2b24a_0%,#e0941a_28%,#b86b12_62%,#8e4f10_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_0px,rgba(255,255,255,0.36),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,transparent_60%,rgba(0,0,0,0.20)_100%)]" />
      </div>

      <div className="relative z-10 hidden sm:block">
        <div className="h-[74px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(0,0,0,0.08)_100%)]/20 border-b border-white/20 backdrop-blur-[0.5px]">
          <Header />
        </div>
      </div>

      <main className="relative z-10">
        <div className="w-full sm:max-w-[1320px] sm:px-6 sm:py-12 sm:flex sm:justify-center mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
