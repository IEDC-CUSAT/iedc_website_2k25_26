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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
  <div className="sticky top-0 z-50 bg-transparent shadow-md">
          <Header />
          <NavigationMenu />
        </div>
  <main className="pt-2 min-h-screen bg-transparent text-foreground">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About_us />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/incubation" element={<IncubationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/alumni" element={<AlumniPage />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
