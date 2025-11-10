
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gallery1 from "./pages/Gallery1";
import Gallery2 from "./pages/Gallery2";
import Gallery3 from "./pages/Gallery3";
import Gallery4 from "./pages/Gallery4";
import Gallery5 from "./pages/Gallery5";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/gallery-1" replace />} />
          <Route path="/gallery-1" element={<Gallery1 />} />
          <Route path="/gallery-2" element={<Gallery2 />} />
          <Route path="/gallery-3" element={<Gallery3 />} />
          <Route path="/gallery-4" element={<Gallery4 />} />
          <Route path="/gallery-5" element={<Gallery5 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;