import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Pages (relative imports)
import { LandingPage } from "./pages/Landing";
import { SignUpPage } from "./pages/SignUp";
import { LoginPage } from "./pages/Login";
import { ForgotPasswordPage } from "./pages/ForgotPassword";
import { OTPVerificationPage } from "./pages/OTPVerification";
import { OnboardingPage } from "./pages/Onboarding";
import { DiscoverPage } from "./pages/Discover";
import { SearchPage } from "./pages/Search";
import { MatchesPage } from "./pages/Matches";
import { ChatPage } from "./pages/Chat";
import { ProfileViewPage } from "./pages/ProfileView";
import { MyProfilePage } from "./pages/MyProfile";
import { SettingsPage } from "./pages/Settings";
import { ReportUserPage } from "./pages/ReportUser";
import { SafetyCenterPage } from "./pages/SafetyCenter";
import { AdminDashboard } from "./pages/AdminDashboard";
import { DesignSystemPage } from "./pages/DesignSystem";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/chat/:id?" element={<ChatPage />} />
        <Route path="/profile/:id" element={<ProfileViewPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/report/:id" element={<ReportUserPage />} />
        <Route path="/safety" element={<SafetyCenterPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
