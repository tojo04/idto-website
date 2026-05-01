import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Demo from "./pages/Demo";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import DigiLockerProductPage from "./pages/DigiLockerProductPage";
import CKYCProductPage from "./pages/CKYCProductPage";
import BAVProductPage from "./pages/BAVProductPage";
import MobileIntelligenceProductPage from "./pages/MobileIntelligenceProductPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/digilocker-3.0" element={<DigiLockerProductPage />} />
        <Route path="/products/CKYC" element={<CKYCProductPage />} />
        <Route path="/products/BAV" element={<BAVProductPage />} />
        <Route path="/products/mobile-intelligence" element={<MobileIntelligenceProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
