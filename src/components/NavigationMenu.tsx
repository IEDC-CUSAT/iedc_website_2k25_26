import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigationMenu from "./MobileNavigationMenu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Incubation", href: "/incubation" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const NavigationMenu = () => {
  const isMobile = useIsMobile();
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const currentPathname = location.pathname;
    const currentHash = location.hash;

    let foundItemName = "";

    // Handle Home page specifically
    if (currentPathname === "/" || currentPathname === "/index.html") { // Added /index.html for robustness
      if (currentHash) {
        // If on home page with an anchor, find the item matching the anchor
        const itemWithHash = navigationItems.find(item => item.href === `/${currentHash}`);
        if (itemWithHash) {
          foundItemName = itemWithHash.name;
        } else {
          // Default to Home if anchor not found
          foundItemName = "Home";
        }
      } else {
        foundItemName = "Home"; // On root path without hash
      }
    } else {
      // For other pages, find exact path match or startsWith match
      const itemMatch = navigationItems.find(item => {
        // Exact path match (e.g., /events)
        if (item.href === currentPathname) {
          return true;
        }
        // Path starts with item.href (e.g., /events/some-subpage should highlight Events)
        // Ensure it's not just a partial match of a longer path (e.g., /eventually should not highlight /events)
        if (item.href.length > 1 && currentPathname.startsWith(item.href + "/")) {
          return true;
        }
        return false;
      });

      if (itemMatch) {
        foundItemName = itemMatch.name;
      }
    }

    setActiveItem(foundItemName);
  }, [location]);

  if (isMobile) {
    return null;
  }

  return (
    <nav className="relative z-20 py-2 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full border-t border-[#3d2a1a] mx-auto"></div>

        {/* Responsive menu row: wraps on wider screens, allows horizontal scroll on narrow screens */}
        <div className="flex justify-center items-center py-2 gap-2 overflow-x-auto md:overflow-visible md:flex-wrap">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`relative whitespace-nowrap text-lg md:text-2xl font-bold text-[#3d2a1a] px-4 py-2 transition-all duration-300 rounded-md hover:text-yellow-700 hover:bg-[#f5ecd7] ${activeItem === item.name ? "text-yellow-900" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="w-full border-b border-[#3d2a1a] mx-auto"></div>
      </div>
    </nav>
  );
};

export default NavigationMenu;