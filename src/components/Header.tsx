import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigationMenu from "./MobileNavigationMenu";

const Header = () => {
  const isMobile = useIsMobile();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDay = (date: Date) => {
    return date.getDate().toString().padStart(2, "0");
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long" });
  };

  const formatYear = (date: Date) => {
    return date.getFullYear();
  };

  const formatWeekday = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const [time, ampm] = timeString.split(" ");
    return { time, ampm };
  };

  const { time, ampm } = formatTime(currentDate);

  return (
    <header className="px-6 sm:px-12 mb-2 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center h-24">
        {isMobile && <MobileNavigationMenu />}
        {!isMobile && (
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <div className="flex items-baseline gap-3">
              <div className="text-4xl md:text-5xl font-bold text-[#3d2a1a] leading-none">
                {formatDay(currentDate)}
              </div>
              <div className="text-left">
                <div className="text-sm md:text-xl font-semibold text-[#3d2a1a]">
                  {formatMonth(currentDate)}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-4 sm:mb-0">
          <img src="/images/IEDC Logo.svg" alt="IEDC CUSAT Logo" className="h-12 sm:h-20 w-auto mx-auto" />
        </div>

        {!isMobile && (
          <div className="text-center sm:text-right w-[140px]">
            <div className="flex items-baseline gap-1 text-3xl text-[#3d2a1a] font-mono">
              <span className="italic font-bold">{time}</span>
              <span className="italic text-xl self-end">{ampm}</span>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto mt-8 h-[2px] bg-[#3d2a1a]"></div>
    </header>
  );
};

export default Header;
