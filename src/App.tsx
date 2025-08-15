import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import IncubationPage from "./pages/IncubationPage";
import ContactPage from "./pages/ContactPage";
// import AlumniPage from "./pages/AlumniPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="sticky top-0 z-50 bg-white">
          <Header />
          <NavigationMenu />
        </div>
        <main className="pt-2">
          <Routes>
            <Route path="/" element={<Index />} />
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
