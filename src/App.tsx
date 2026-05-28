import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import DigiLockerProductPage from "./pages/DigiLockerProductPage";
import CKYCProductPage from "./pages/CKYCProductPage";
import BAVProductPage from "./pages/BAVProductPage";
import MobileIntelligenceProductPage from "./pages/MobileIntelligenceProductPage";
import FintechLendingSolutionPage from "./pages/FintechLendingSolutionPage";
import BankingNbfcsSolutionPage from "./pages/BankingNbfcsSolutionPage";
import InsuranceSolutionPage from "./pages/InsuranceSolutionPage";
import CryptoWeb3SolutionPage from "./pages/CryptoWeb3SolutionPage";
import MarketplacesSolutionPage from "./pages/MarketplacesSolutionPage";
import SocialCommunityPlatformsSolutionPage from "./pages/SocialCommunityPlatformsSolutionPage";
import GigEconomySolutionPage from "./pages/GigEconomySolutionPage";
import BGVSolutionPage from "./pages/BGVSolutionPage";
import KYBSolutionPage from "./pages/KYBSolutionPage";
import NotFoundPage from "./pages/NotFoundPage";
import DemoRequestModal, {
  DEMO_REQUEST_MODAL_EVENT,
} from "./components/DemoRequestModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function OpenDemoModalRoute({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return <Navigate to="/" replace />;
}

function AppShell() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = useCallback(() => {
    setIsDemoModalOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  useEffect(() => {
    function handleOpenDemoModal() {
      openDemoModal();
    }

    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a");

      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");

      if (href !== "/contact-us" && href !== "/demo") return;

      event.preventDefault();
      openDemoModal();
    }

    window.addEventListener(DEMO_REQUEST_MODAL_EVENT, handleOpenDemoModal);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener(DEMO_REQUEST_MODAL_EVENT, handleOpenDemoModal);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openDemoModal]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/digilocker-3.0" element={<DigiLockerProductPage />} />
        <Route path="/products/CKYC" element={<CKYCProductPage />} />
        <Route path="/products/BAV" element={<BAVProductPage />} />
        <Route path="/products/mobile-intelligence" element={<MobileIntelligenceProductPage />} />
        <Route path="/solutions/fintech-and-lending" element={<FintechLendingSolutionPage />} />
        <Route path="/solutions/banking-and-nbfcs" element={<BankingNbfcsSolutionPage />} />
        <Route path="/solutions/insurance" element={<InsuranceSolutionPage />} />
        <Route path="/solutions/crypto-and-web3" element={<CryptoWeb3SolutionPage />} />
        <Route path="/solutions/marketplaces" element={<MarketplacesSolutionPage />} />
        <Route path="/solutions/social-and-community-platforms" element={<SocialCommunityPlatformsSolutionPage />} />
        <Route path="/solutions/gig-economy" element={<GigEconomySolutionPage />} />
        <Route path="/solutions/background-verification" element={<BGVSolutionPage />} />
        <Route path="/solutions/merchant-onboarding-kyb" element={<KYBSolutionPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route
          path="/contact-us"
          element={<OpenDemoModalRoute onOpen={openDemoModal} />}
        />
        <Route
          path="/demo"
          element={<OpenDemoModalRoute onOpen={openDemoModal} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
