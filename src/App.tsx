import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import DigiLockerProductPage from "./pages/DigiLockerProductPage";
import CKYCProductPage from "./pages/CKYCProductPage";
import BAVProductPage from "./pages/BAVProductPage";
import MobileIntelligenceProductPage from "./pages/MobileIntelligenceProductPage";
import IDTOFlowProductPage from "./pages/IDTOFlowProductPage";
import BankStatementAnalysisProductPage from "./pages/BankStatementAnalysisProductPage";
import FaceMatchLivenessProductPage from "./pages/FaceMatchLivenessProductPage";
import DigitalCheckInProductPage from "./pages/DigitalCheckInProductPage";
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
import Demo from "./pages/Demo";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import { trackEvent, trackPageView } from "./lib/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView({
      route_path: location.pathname,
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
}

function OpenDemoModalRoute({
  onOpen,
}: {
  onOpen: (triggerSource: string, triggerHref?: string) => void;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    onOpen("route_redirect", pathname);
  }, [onOpen, pathname]);

  return <Navigate to="/" replace />;
}

const DEMO_CTA_HREFS = new Set(["/contact-us", "/demo"]);

const stripTrailingSlash = (path: string) =>
  path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;

function shouldOpenDemoModal(anchor: HTMLAnchorElement) {
  const href = stripTrailingSlash(anchor.getAttribute("href") ?? "");

  if (!href || !DEMO_CTA_HREFS.has(href)) {
    return false;
  }

  const label = [
    anchor.textContent,
    anchor.getAttribute("title"),
    anchor.getAttribute("aria-label"),
  ]
    .filter(Boolean)
    .join(" ")
    .trim()
    .toLowerCase();

  if (href === "/demo") {
    return label.includes("book") || label.includes("request");
  }

  if (label.includes("contact")) {
    return false;
  }

  return true;
}

export function AppShell() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const isDemoModalOpenRef = useRef(false);

  const openDemoModal = useCallback(
    (triggerSource = "custom_event", triggerHref?: string) => {
      if (!isDemoModalOpenRef.current) {
        trackEvent("Demo Modal Opened", {
          trigger_source: triggerSource,
          trigger_href: triggerHref,
        });
      }

      isDemoModalOpenRef.current = true;
      setIsDemoModalOpen(true);
    },
    []
  );

  const closeDemoModal = useCallback(() => {
    isDemoModalOpenRef.current = false;
    setIsDemoModalOpen(false);
  }, []);

  useEffect(() => {
    function handleOpenDemoModal() {
      openDemoModal("custom_event");
    }

    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a");

      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");

      if (!href || !shouldOpenDemoModal(anchor)) return;

      event.preventDefault();

      const ctaText =
        anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) ||
        anchor.getAttribute("aria-label") ||
        undefined;

      trackEvent("CTA Clicked", {
        cta_href: href,
        cta_text: ctaText,
        cta_source: "demo_request_link",
        source_path: window.location.pathname,
      });

      openDemoModal("link_click", href);
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
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/digilocker-3.0" element={<DigiLockerProductPage />} />
        <Route path="/products/CKYC" element={<CKYCProductPage />} />
        <Route path="/products/BAV" element={<BAVProductPage />} />
        <Route path="/products/mobile-intelligence" element={<MobileIntelligenceProductPage />} />
        <Route path="/products/idto-flow" element={<IDTOFlowProductPage />} />
        <Route path="/products/bank-statement-analysis" element={<BankStatementAnalysisProductPage />} />
        <Route path="/products/face-match-liveness" element={<FaceMatchLivenessProductPage />} />
        <Route path="/products/digital-check-in" element={<DigitalCheckInProductPage />} />
         <Route path="/demo" element={<Demo />} />
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
        <Route path="/contact_us" element={<Navigate to="/contact-us/" replace />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route
          path="/demoform"
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
