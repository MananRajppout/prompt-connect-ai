import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AICallInterface from "./components/AICallInterface";
import CommunicationHub from "./pages/CommunicationHub";
import CRMIntegration from "./pages/CRMIntegration";
import Analytics from "./pages/Analytics";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* App routes with layout */}
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/voice-calls" element={<AppLayout><AICallInterface /></AppLayout>} />
          <Route path="/communication" element={<AppLayout><CommunicationHub /></AppLayout>} />
          <Route path="/crm" element={<AppLayout><CRMIntegration /></AppLayout>} />
          <Route path="/analytics" element={<AppLayout><Analytics /></AppLayout>} />
          <Route path="/bookings" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">Bookings - Coming Soon</h1></div></AppLayout>} />
          <Route path="/admin" element={<AppLayout><AdminPanel /></AppLayout>} />
          <Route path="/white-label" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">White Label - Coming Soon</h1></div></AppLayout>} />
          <Route path="/users" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">User Management - Coming Soon</h1></div></AppLayout>} />
          <Route path="/settings" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div></AppLayout>} />
          <Route path="/onboarding" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">Onboarding - Coming Soon</h1></div></AppLayout>} />
          <Route path="/training" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">Training - Coming Soon</h1></div></AppLayout>} />
          <Route path="/support" element={<AppLayout><div className="p-6"><h1 className="text-2xl font-bold">Support - Coming Soon</h1></div></AppLayout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
