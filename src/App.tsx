import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import About_us from "./components/About-us";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import IncubationPage from "./pages/IncubationPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        {/* Page container with fixed header + scrollable body */}
        <div className="flex flex-col h-screen overflow-hidden">
          {/* Transparent Header + Navbar */}
          <div className="shrink-0 sticky top-0 z-50 bg-transparent">
            <Header />
            <NavigationMenu />
          </div>

          {/* Scrollable content */}
          <main className="flex-1 overflow-y-auto bg-transparent text-foreground">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About_us />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/incubation" element={<IncubationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/alumni" element={<AlumniPage />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Footer will be inside body */}
          <Footer />
          </main>

          
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
