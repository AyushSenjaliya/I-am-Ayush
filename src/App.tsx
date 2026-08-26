import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllProjectsPage from "./pages/AllProjectsPage";
import AllProductLabPage from "./pages/AllProductLabPage";
import NotFound from "./pages/NotFound";
import AIChatModal from "./components/AIChatModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

