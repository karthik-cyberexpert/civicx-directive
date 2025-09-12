import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import EditProfilePage from "./pages/EditProfilePage";
import LanguageSettingsPage from "./pages/settings/LanguageSettingsPage";
import NotificationSettingsPage from "./pages/settings/NotificationSettingsPage";
import PasswordSettingsPage from "./pages/settings/PasswordSettingsPage";
import HelpPage from "./pages/settings/HelpPage";
import IssuesPage from "./pages/IssuesPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ReportersPage from "./pages/ReportersPage";
import RecordsPage from "./pages/RecordsPage";
import AchievementsPage from "./pages/AchievementsPage";
import CivixHeroesPage from "./pages/CivixHeroesPage";
import SolvedIssuesPage from "./pages/SolvedIssuesPage"; // New import
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/settings/language" element={<LanguageSettingsPage />} />
            <Route path="/settings/notifications" element={<NotificationSettingsPage />} />
            <Route path="/settings/password" element={<PasswordSettingsPage />} />
            <Route path="/settings/help" element={<HelpPage />} />
            <Route path="/issues" element={<IssuesPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/reporters" element={<ReportersPage />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/civix-heroes" element={<CivixHeroesPage />} />
            <Route path="/solved-issues" element={<SolvedIssuesPage />} /> {/* New route */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;