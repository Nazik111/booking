import { BookingCard } from "./ui/BookingCard";
import { MobileHero } from "./ui/MobileHero";

export const Booking = () => (
  <div className="relative min-h-screen sm:min-h-0">
    <div className="flex sm:hidden h-[40vh] relative z-0">
      <MobileHero />
    </div>

    <div
      className="
        h-[calc(60vh+1.5rem)]
        -mt-4           
        relative z-10        
        sm:mt-0 sm:h-auto    
        sm:px-6 sm:py-6 
        sm:flex sm:justify-center
      "
    >
      <BookingCard />
    </div>
  </div>
);
