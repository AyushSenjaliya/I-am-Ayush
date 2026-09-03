import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AllProjectsPage from "./pages/AllProjectsPage";
import AllProductLabPage from "./pages/AllProductLabPage";
import NotFound from "./pages/NotFound";
import AIChatModal from "./components/AIChatModal";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/product-lab" element={<AllProductLabPage />} />
          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* AI Website Sales Agent Floating Drawer (Visible on all pages) */}
        <AIChatModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

