import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInDown } from "../../utils/animations";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import logoIcon from "../../assets/logo_icon.svg";
import logoText from "../../assets/logo_text.svg";
import ckycIcon from "../../assets/header/productDropdowns/CKYC_2.0.svg?raw";
import digilockerIcon from "../../assets/header/productDropdowns/Digilocker_3.0.svg?raw";
import bavIcon from "../../assets/header/productDropdowns/Intelli BAV.svg?raw";
import mobileIntelligenceIcon from "../../assets/header/productDropdowns/mobile_intelligence.svg?raw";
import bankingNbfcsIcon from "../../assets/header/solutionsDropdowns/Banking_and_NBFCs.svg?raw";
import cryptoWeb3Icon from "../../assets/header/solutionsDropdowns/Crypto_and_Web3.svg?raw";
import employmentBgvIcon from "../../assets/header/solutionsDropdowns/employment_and_bgv.svg?raw";
import fintechLendingIcon from "../../assets/header/solutionsDropdowns/fintech_and_lending.svg?raw";
import gigEconomyIcon from "../../assets/header/solutionsDropdowns/gig_economy.svg?raw";
import insuranceIcon from "../../assets/header/solutionsDropdowns/Insurance.svg?raw";
import marketplacesIcon from "../../assets/header/solutionsDropdowns/MarketPlaces.svg?raw";
import merchantOnboardingIcon from "../../assets/header/solutionsDropdowns/merchant_onboarding.svg?raw";
import socialCommunityIcon from "../../assets/header/solutionsDropdowns/social_and_community.svg?raw";

const withCurrentColor = (svg: string) =>
  svg.replace(/(stroke|fill)="(?:#1D68F4|white)"/g, '$1="currentColor"');

const dropdownIconAssets = {
  ckyc: withCurrentColor(ckycIcon),
  bav: withCurrentColor(bavIcon),
  digilocker: withCurrentColor(digilockerIcon),
  mobileIntelligence: withCurrentColor(mobileIntelligenceIcon),
  fintechLending: withCurrentColor(fintechLendingIcon),
  bankingNbfcs: withCurrentColor(bankingNbfcsIcon),
  insurance: withCurrentColor(insuranceIcon),
  cryptoWeb3: withCurrentColor(cryptoWeb3Icon),
  marketplaces: withCurrentColor(marketplacesIcon),
  socialCommunity: withCurrentColor(socialCommunityIcon),
  gigEconomy: withCurrentColor(gigEconomyIcon),
  backgroundVerification: withCurrentColor(employmentBgvIcon),
  merchantKyb: withCurrentColor(merchantOnboardingIcon),
} as const;

const dropdownIconPaths = {
  ckyc: [
    "M6.75 5.25h10.5v13.5H6.75V5.25Z",
    "M9.75 8.5h4.5",
    "M10 12.15a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
    "M8.9 17c.7-1.25 1.75-1.9 3.1-1.9s2.4.65 3.1 1.9",
    "M15.25 17.5l1.15 1.1 2.35-2.65",
  ],
  bav: [
    "M5 9.25 12 5l7 4.25",
    "M6 18.75h7.25",
    "M7.25 10.75v5.75",
    "M10.2 10.75v5.75",
    "M13.15 10.75v3",
    "M14.75 16.2l1.35 1.35 2.9-3.3",
    "M15.45 10.9c1.45.55 2.45 1.45 3 2.7",
  ],
  digilocker: [
    "M6.25 10h11.5v8.5H6.25V10Z",
    "M9 10V8a3 3 0 0 1 6 0v2",
    "M10.25 13.25h3.25",
    "M10.25 15.25h2.25",
    "M15 12.9l1.1 1.1 2.35-2.65",
    "M15.25 16.25h.01",
  ],
  mobileIntelligence: [
    "M8.25 3.75h7.5v16.5h-7.5V3.75Z",
    "M11.25 17.75h1.5",
    "M10.25 8.9c1.15-.95 2.35-.95 3.5 0",
    "M9.25 6.8c1.9-1.45 3.6-1.45 5.5 0",
    "M11.05 12.2a.95.95 0 1 0 1.9 0 .95.95 0 0 0-1.9 0Z",
    "M7 8.25c-.9.85-1.35 1.95-1.35 3.25S6.1 13.9 7 14.75",
    "M17 8.25c.9.85 1.35 1.95 1.35 3.25S17.9 13.9 17 14.75",
  ],
  fintechLending: [
    "M5.5 14.5h8.5v4H5.5v-4Z",
    "M7.25 12h8.5v2.5h-8.5V12Z",
    "M9 9.5h8.5V12H9V9.5Z",
    "M13 7.15h5.5V9.5H13V7.15Z",
    "M6.25 7.5c1.35-1.45 3.1-2.25 5.25-2.25",
    "M9.8 5.25h1.7v1.7",
    "M14.8 17.6l1.35 1.25 2.85-3.25",
  ],
  bankingNbfcs: [
    "M5 8.6 12 4.75l7 3.85",
    "M6 18.75h12",
    "M7.25 10.5v5.75",
    "M10.4 10.5v5.75",
    "M13.55 10.5v5.75",
    "M16.7 10.5v5.75",
    "M8.25 8.85h7.5",
    "M5.75 13.4h12.5",
  ],
  insurance: [
    "M5 11.5c1.7-3.45 4-5.15 7-5.15s5.3 1.7 7 5.15",
    "M5 11.5c1-.85 2-.85 3 0 1-.85 2-.85 3 0 1-.85 2-.85 3 0 1-.85 2-.85 3 0 1-.85 2-.85 3 0",
    "M12 6.35v11.25",
    "M12 17.6c0 1.1.8 1.9 1.9 1.9.9 0 1.6-.45 1.9-1.2",
    "M9 15.15l1.4 1.4 3-3.45",
  ],
  cryptoWeb3: [
    "M12 4.5 18 8v8l-6 3.5L6 16V8l6-3.5Z",
    "M8.7 9.55 12 7.65l3.3 1.9",
    "M8.7 9.55v4.9l3.3 1.9 3.3-1.9v-4.9",
    "M8.7 14.45 12 12.55l3.3 1.9",
    "M6 8l-1.75-.95",
    "M18 8l1.75-.95",
    "M6 16l-1.75.95",
    "M18 16l1.75.95",
  ],
  marketplaces: [
    "M6.25 6h11.5l1.1 4H5.15l1.1-4Z",
    "M6.25 10v8.25h11.5V10",
    "M8.35 13h3.2v5.25",
    "M13.4 13h2.25",
    "M5.15 10c.45 1.35 2.15 1.35 2.65 0 .55 1.35 2.1 1.35 2.65 0 .55 1.35 2.1 1.35 2.65 0 .55 1.35 2.2 1.35 2.75 0 .5 1.35 2.15 1.35 2.6 0",
    "M15.1 16.55l3.1-3.1",
    "M15.15 13.55h3v3",
  ],
  socialCommunity: [
    "M6.25 8.4a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v2.85a3 3 0 0 1-3 3h-2.35L9.25 17v-2.75a3 3 0 0 1-3-3V8.4Z",
    "M9 9.15h4.5",
    "M9 11.2h2.7",
    "M14.35 17.2c.55-.65 1.35-1 2.35-1 1.45 0 2.5.75 3.1 2.3",
    "M16.7 13.55a1.65 1.65 0 1 0 .01 0",
  ],
  gigEconomy: [
    "M8.4 8.25v-1.7A1.55 1.55 0 0 1 9.95 5h4.1a1.55 1.55 0 0 1 1.55 1.55v1.7",
    "M5.25 8.25h13.5v9.5H5.25v-9.5Z",
    "M5.25 12c4.4 1.45 9.1 1.45 13.5 0",
    "M10.05 11.75h3.9",
    "M7.25 18.85c2.55 1.05 6.85 1.05 9.5 0",
    "M16.9 6.25c1.15.7 1.8 1.65 1.95 2.85",
  ],
  backgroundVerification: [
    "M5.75 5.5h8v9.75h-8V5.5Z",
    "M8 8h3.5",
    "M8 10.25h2.25",
    "M9.75 13.1a1.6 1.6 0 1 0 .01 0",
    "M16.1 15.35l3.15 3.15",
    "M14.65 13.9a3.25 3.25 0 1 0 .01 0",
    "M15.45 13.75l1.05 1 2-2.25",
  ],
  merchantKyb: [
    "M6.2 7h11.6l1 3.3H5.2l1-3.3Z",
    "M6.2 10.3v8.2h11.6v-8.2",
    "M8.2 13h3.2v5.5",
    "M13.2 13h2.6",
    "M5.2 10.3c.5 1.25 2 1.25 2.5 0 .55 1.25 2 1.25 2.55 0 .55 1.25 2 1.25 2.55 0 .55 1.25 2 1.25 2.55 0 .5 1.25 1.95 1.25 2.45 0",
    "M14.2 16.25l1.15 1.15 2.45-2.8",
  ],
} as const;

type AssetDropdownIconName = keyof typeof dropdownIconAssets;
type PathDropdownIconName = keyof typeof dropdownIconPaths;
type DropdownIconName = AssetDropdownIconName | PathDropdownIconName;

type DropdownItem = {
  label: string;
  href: string;
  icon: DropdownIconName;
  
  description?: string;
};

const DESKTOP_DROPDOWN_MAX_WIDTH = 1313;
const DESKTOP_DROPDOWN_GUTTER = 16;

type DropdownPlacement = {
  left: number;
  top: number;
  width: number;
};

function DropdownIcon({
  name,
  className = "h-7 w-7",
}: {
  name: DropdownIconName;
  className?: string;
}) {
  if (name in dropdownIconAssets) {
    const iconSvg = dropdownIconAssets[name as AssetDropdownIconName];

    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center ${className} [&>svg]:h-full [&>svg]:w-full`}
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {dropdownIconPaths[name as PathDropdownIconName].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

function DefaultPreviewGraphic({
  variant,
  className = "",
}: {
  variant: "products" | "solutions";
  className?: string;
}) {
  const icons: DropdownIconName[] =
    variant === "products"
      ? ["ckyc", "digilocker", "bav", "mobileIntelligence"]
      : ["fintechLending", "bankingNbfcs", "merchantKyb", "backgroundVerification", "insurance"];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative w-full overflow-hidden rounded-[20px] border border-white/50 bg-white/20 ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 398 96"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M33 58C83 18 142 80 199 44C256 8 313 78 365 38"
          stroke="#1D68F4"
          strokeWidth="1.5"
          strokeDasharray="7 8"
          opacity="0.45"
        />
      </svg>

      <div
        className={`relative flex h-full items-center ${
          variant === "products" ? "justify-between px-[16px]" : "justify-between px-[18px]"
        }`}
      >
        {icons.map((icon, index) => (
          <span
            key={icon}
            className={`flex shrink-0 items-center justify-center rounded-[24px] bg-white text-[#1d68f4] opacity-100 shadow-[0px_10px_24px_-16px_rgba(4,10,28,0.55)] ${
              variant === "products"
                ? index % 2 === 0
                  ? "size-[42px] translate-y-[4px]"
                  : "size-[42px] -translate-y-[4px]"
                : index % 2 === 0
                  ? "size-[48px] -translate-y-[8px]"
                  : "size-[48px] translate-y-[8px]"
            }`}
          >
            <DropdownIcon
              name={icon}
              className={`${variant === "products" ? "size-[20px]" : "size-[22px]"} opacity-100`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

const productItems: DropdownItem[] = [
  {
    label: "CKYC 2.0",
    href: "/products/CKYC",
    icon: "ckyc",
    
    description:
      "Search, download, update, and create CKYC records through a single intelligent flow tuned for high success rates.",
  },
  {
    label: "DigiLocker 3.0",
    href: "/products/digilocker-3.0",
    icon: "digilocker",
    
    description:
      "Unlock higher conversions with DigiLocker 3.0: adaptive, compliant, and AI-powered.",
  },
  {
    label: "Intelli Bank Account Verification",
    href: "/products/BAV",
    icon: "bav",
    
    description:
      "Verify bank accounts with higher coverage, better uptime, and consistent API response.",
  },
  {
    label: "Mobile Intelligence",
    href: "/products/mobile-intelligence",
    icon: "mobileIntelligence",
    
    description:
      "Streamline sign-ups, auto-fill user details, and protect against fraud.",
  },
];

const solutionItems: DropdownItem[] = [
  {
    label: "Fintech & Lending",
    href: "/solutions/fintech-and-lending",
    icon: "fintechLending",
   
    description: "Verify users, reduce onboarding drop-offs, enrich risk signals, and support collections.",
  },
  {
    label: "Banking & NBFCs",
    href: "/solutions/banking-and-nbfcs",
    icon: "bankingNbfcs",
    
    description: "Run compliant KYC, CKYC, bank verification, and customer intelligence workflows.",
  },
  {
    label: "Insurance",
    href: "/solutions/insurance",
    icon: "insurance",
    
    description: "Simplify policy onboarding, CKYC checks, payout validation, and customer personalization.",
  },
  {
    label: "Crypto & Web3",
    href: "/solutions/crypto-and-web3",
    icon: "cryptoWeb3",
    
    description: "Build safer onboarding, wallet-linked compliance, user verification, and payout checks.",
  },
  {
    label: "Marketplaces",
    href: "/solutions/marketplaces",
    icon: "marketplaces",
    
    description: "Verify buyers, sellers, service providers, and payouts with one trust stack.",
  },
  {
    label: "Social & Community",
    href: "/solutions/social-and-community-platforms",
    icon: "socialCommunity",
    
    description: "Reduce fake users, duplicate accounts, abuse, and unsafe payouts across communities.",
  },
  {
    label: "Gig Economy",
    href: "/solutions/gig-economy",
    icon: "gigEconomy",
    
    description: "Verify gig workers, bank accounts, documents, and contactability in under 10 minutes.",
  },
  {
    label: "Employment & BGV",
    href: "/solutions/background-verification",
    icon: "backgroundVerification",
    
    description: "Verify candidates, documents, bank accounts, and contactability faster.",
  },
  {
    label: "Merchant Onboarding / KYB",
    href: "/solutions/merchant-onboarding-kyb",
    icon: "merchantKyb",
    
    description: "Onboard merchants, verify businesses, validate bank accounts, and reduce manual ops.",
  },
];

const defaultProductPreview = {
  label: "Everything your onboarding stack needs",
  description:
    "Access powerful verification products with simple APIs, clean docs, and standardized outputs.",
};

const defaultSolutionPreview = {
  label: "Find your identity workflow",
  description:
    "Explore how idto fits into onboarding, verification, compliance, and fraud journeys across industries.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#", dropdown: "products" },
  { label: "Solutions", href: "#", dropdown: "solutions" },
  { label: "Documentation", href: "https://idtoai.readme.io/reference/idtoai-verification-apis", external: true },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/idto", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [activeProductHref, setActiveProductHref] = useState<string | null>(null);
  const [activeSolutionHref, setActiveSolutionHref] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [dropdownPlacement, setDropdownPlacement] = useState<DropdownPlacement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      const clickedProductsDropdown = productsDropdownRef.current?.contains(target) ?? false;
      const clickedSolutionsDropdown = solutionsDropdownRef.current?.contains(target) ?? false;

      if (clickedProductsDropdown || clickedSolutionsDropdown) return;

      setProductsOpen(false);
      setSolutionsOpen(false);
      setDropdownPlacement(null);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const getDropdownItems = (dropdown: string) =>
    dropdown === "products" ? productItems : solutionItems;

  const isDropdownOpen = (dropdown: string) =>
    dropdown === "products" ? productsOpen : solutionsOpen;

  const getDropdownRef = (dropdown: string) =>
    dropdown === "products" ? productsDropdownRef : solutionsDropdownRef;

  const measureDropdownPlacement = useCallback((dropdown: string): DropdownPlacement | null => {
    if (typeof window === "undefined") return null;

    const trigger = dropdown === "products" ? productsDropdownRef.current : solutionsDropdownRef.current;
    if (!trigger) return null;

    const triggerRect = trigger.getBoundingClientRect();
    const width = Math.min(
      DESKTOP_DROPDOWN_MAX_WIDTH,
      window.innerWidth - DESKTOP_DROPDOWN_GUTTER * 2
    );
    const headerRect = headerInnerRef.current?.getBoundingClientRect();
    const dropdownCenter = headerRect
      ? headerRect.left + headerRect.width / 2
      : window.innerWidth / 2;
    const viewportLeft = Math.min(
      Math.max(dropdownCenter - width / 2, DESKTOP_DROPDOWN_GUTTER),
      window.innerWidth - width - DESKTOP_DROPDOWN_GUTTER
    );

    return {
      left: viewportLeft - triggerRect.left,
      top: trigger.offsetHeight + 18,
      width,
    };
  }, []);

  const setDropdownOpen = (dropdown: string, value: boolean) => {
    setDropdownPlacement(value ? measureDropdownPlacement(dropdown) : null);

    if (dropdown === "products") {
      if (value) setActiveProductHref(null);
      setProductsOpen(value);
      setSolutionsOpen(false);
      return;
    }
    if (value) setActiveSolutionHref(null);
    setSolutionsOpen(value);
    setProductsOpen(false);
  };

  const cancelHoverClose = () => {
    if (hoverCloseTimeoutRef.current === null) return;

    window.clearTimeout(hoverCloseTimeoutRef.current);
    hoverCloseTimeoutRef.current = null;
  };

  const openDropdownOnHover = (dropdown: string) => {
    cancelHoverClose();
    setDropdownOpen(dropdown, true);
  };

  const closeDropdownOnHover = () => {
    cancelHoverClose();

    hoverCloseTimeoutRef.current = window.setTimeout(() => {
      setProductsOpen(false);
      setSolutionsOpen(false);
      setDropdownPlacement(null);
      hoverCloseTimeoutRef.current = null;
    }, 150);
  };

  const updateDropdownPlacement = useCallback(() => {
    const openDropdown = productsOpen ? "products" : solutionsOpen ? "solutions" : null;
    if (!openDropdown) {
      setDropdownPlacement(null);
      return;
    }

    const nextPlacement = measureDropdownPlacement(openDropdown);
    if (nextPlacement) setDropdownPlacement(nextPlacement);
  }, [measureDropdownPlacement, productsOpen, solutionsOpen]);

  useEffect(() => {
    if (!productsOpen && !solutionsOpen) return;

    window.addEventListener("resize", updateDropdownPlacement);
    window.addEventListener("scroll", updateDropdownPlacement, true);
    return () => {
      window.removeEventListener("resize", updateDropdownPlacement);
      window.removeEventListener("scroll", updateDropdownPlacement, true);
    };
  }, [productsOpen, solutionsOpen, updateDropdownPlacement]);

  useEffect(
    () => () => {
      if (hoverCloseTimeoutRef.current !== null) {
        window.clearTimeout(hoverCloseTimeoutRef.current);
      }
    },
    []
  );

  const activeProduct =
    productItems.find((product) => product.href === activeProductHref);

  const activeSolution =
    solutionItems.find((solution) => solution.href === activeSolutionHref);
  const productPreview = activeProduct ?? defaultProductPreview;
  const solutionPreview = activeSolution ?? defaultSolutionPreview;

  return (
    <header className="bg-white px-5 lg:px-[112.5px] py-4 lg:py-[27px] sticky top-0 z-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={createFadeInDown(0.05)}
      >
        <div ref={headerInnerRef} className="max-w-[1215px] mx-auto flex items-center justify-between lg:border-0 border-[0.4px] border-[#10dda8] rounded-full lg:rounded-none h-[40px] lg:h-auto px-3 lg:px-0">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 shrink-0">
            <div className="relative w-13 h-7 lg:w-[61.367px] lg:h-[33.072px]">
              <img
                src={logoIcon}
                alt=""
                className="absolute top-[14%] left-[8%] w-[23%] h-[71%] object-contain"
              />
              <img
                src={logoText}
                alt="idto"
                className="absolute top-[29%] left-[39%] w-[54%] h-[43%] object-contain"
              />
            </div>
          </a>

          {/* Navigation - pill shaped container */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 min-[1440px]:mx-8">
            <div className="flex items-center backdrop-blur-[11.25px] bg-white/80 border-[1.125px] border-white rounded-full">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    ref={getDropdownRef(item.dropdown)}
                    onMouseEnter={() => openDropdownOnHover(item.dropdown)}
                    onMouseLeave={closeDropdownOnHover}
                  >
                    <button
                      type="button"
                      onMouseDown={(event) => event.stopPropagation()}
                      onClick={() => setDropdownOpen(item.dropdown, !isDropdownOpen(item.dropdown))}
                      className="px-[27px] py-[9px] text-[16px] text-black/70 hover:text-black transition-colors rounded-full cursor-pointer flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen(item.dropdown) ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen(item.dropdown) && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50"
                          style={{
                            left: dropdownPlacement?.left ?? 0,
                            top: dropdownPlacement?.top ?? 0,
                            width: dropdownPlacement?.width ?? 0,
                            visibility: dropdownPlacement ? "visible" : "hidden",
                          }}
                        >
                          {/* Dropdown body */}
                          {item.dropdown === "solutions" ? (
                            <div className="flex w-full flex-col items-center justify-center overflow-x-auto rounded-[12px] bg-white px-[16px] py-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                              <div className="flex w-[1281px] shrink-0 items-center gap-[12px]">
                                <div className="grid h-[339px] w-[789px] shrink-0 grid-cols-3 grid-rows-3 gap-[12px]">
                                {solutionItems.map((solution) => {
                                  const isActive = solution.href === activeSolution?.href;

                                  return (
                                    <Link
                                      key={solution.href}
                                      to={solution.href}
                                      onMouseEnter={() => setActiveSolutionHref(solution.href)}
                                      onFocus={() => setActiveSolutionHref(solution.href)}
                                      onMouseDown={(event) => event.stopPropagation()}
                                      onClick={() => setDropdownOpen(item.dropdown, false)}
                                      className={`group flex items-center gap-[12px] rounded-[18px] py-[30.4px] pl-[17px] pr-[17px] transition-all duration-200 ${
                                        isActive
                                          ? "border border-[#1d68f4] bg-white shadow-[0px_10px_40px_-15px_rgba(48,97,239,0.4)]"
                                          : "border border-transparent bg-[#f9fbff] hover:border-[#1d68f4] hover:bg-white hover:shadow-[0px_10px_40px_-15px_rgba(48,97,239,0.4)]"
                                      }`}
                                    >
                                      <span
                                        className={`flex size-[44px] shrink-0 items-center justify-center rounded-[30px] transition-all duration-200 ${
                                          isActive
                                            ? "bg-[#1d68f4] text-white shadow-[0px_8px_20px_-6px_rgba(48,97,239,0.6)]"
                                            : "bg-[#ebf2ff] text-[#1d68f4] group-hover:bg-[#1d68f4] group-hover:text-white group-hover:shadow-[0px_8px_20px_-6px_rgba(48,97,239,0.6)]"
                                        }`}
                                      >
                                        <DropdownIcon name={solution.icon} className="size-[20px]" />
                                      </span>
                                      <span className="flex min-w-0 flex-col items-start gap-px">
                                        <span className="whitespace-nowrap text-[14px] font-normal leading-[20px] tracking-[-0.35px] text-[#020618]">
                                          {solution.label}
                                        </span>
                                        
                                      </span>
                                    </Link>
                                  );
                                })}
                                </div>

                                <div className="relative flex h-[338px] w-[480px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[22px] border border-[#d7deec] bg-white/70 p-[41px] text-[#040a1c] shadow-[0px_30px_80px_-30px_rgba(128,71,225,0.25)] backdrop-blur-[12px]">
                                  <div className="pointer-events-none absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(145deg, rgba(159,95,255,0.6) 0%, rgba(159,95,255,0) 50%, rgba(0,177,195,0.6) 100%)" }} />
                                  <div className="pointer-events-none absolute -right-[95px] -top-[96px] size-[288px] rounded-full bg-[#bb89ff] opacity-30 blur-[32px]" />
                                  <div className="pointer-events-none absolute -bottom-[96px] -left-[64px] size-[256px] rounded-full bg-[#00d7e4] opacity-25 blur-[32px]" />

                                  <div className="relative flex h-[265px] w-full flex-col items-start">
                                    {activeSolution && (
                                      <span className="relative flex size-[64px] shrink-0 items-center justify-center rounded-[30px] text-white">
                                        <span className="absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,#ae70ff_0%,#3d72ff_100%)] opacity-50 blur-[6px]" />
                                        <span className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,#914dff_0%,#2351de_100%)] shadow-[0px_10px_40px_-10px_rgba(134,37,254,0.7)]" />
                                        <DropdownIcon name={activeSolution.icon} className="relative size-[28px]" />
                                      </span>
                                    )}

                                    <div className={`${activeSolution ? "mt-[28px]" : "mt-0"} flex w-full flex-col items-start gap-[20px]`}>
                                      <h3 className="m-0 w-full text-[30px] font-normal leading-[36px] tracking-[-0.75px] text-[#040a1c]">
                                        {solutionPreview.label}
                                      </h3>
                                      <p className="m-0 w-full text-[15px] font-normal leading-[24.38px] text-[#404858]">
                                        {solutionPreview.description}
                                      </p>
                                    </div>

                                    {!activeSolution && (
                                      <DefaultPreviewGraphic variant="solutions" className="mt-auto h-[96px]" />
                                    )}

                                    {activeSolution && (
                                      <Link
                                        to={activeSolution.href}
                                        onMouseDown={(event) => event.stopPropagation()}
                                        onClick={() => setDropdownOpen(item.dropdown, false)}
                                        className="absolute bottom-0 left-0 z-10 inline-flex items-center gap-[8px] rounded-full bg-[linear-gradient(167deg,#744ef6_0%,#0019ff_100%)] px-[20px] py-[10px] text-center text-[14px] font-normal leading-[20px] text-white shadow-[0px_8px_24px_-8px_rgba(11,21,44,0.5)]"
                                      >
                                        Explore product
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                          <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </Link>
                                    )}
                                  </div>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex w-full flex-col items-center justify-center overflow-x-auto rounded-[12px] bg-white px-[16px] py-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                              <div className="flex h-[264px] w-[1281px] shrink-0 items-start gap-[12px]">
                                <div className="grid h-[264px] w-[784px] shrink-0 grid-cols-2 grid-rows-2 gap-[12px]">
                                  {productItems.map((product) => {
                                    const isActive = product.href === activeProduct?.href;

                                    return (
                                      <Link
                                        key={product.href}
                                        to={product.href}
                                        onMouseEnter={() => setActiveProductHref(product.href)}
                                        onFocus={() => setActiveProductHref(product.href)}
                                        onMouseDown={(event) => event.stopPropagation()}
                                        onClick={() => setDropdownOpen(item.dropdown, false)}
                                        className={`group flex items-center gap-[12px] rounded-[18px] py-[40.4px] pl-[17px] pr-[17px] transition-all duration-200 ${
                                          isActive
                                            ? "border border-[#1d68f4] bg-white shadow-[0px_10px_40px_-15px_rgba(48,97,239,0.4)]"
                                            : "border border-transparent bg-[#f9fbff] hover:border-[#1d68f4] hover:bg-white hover:shadow-[0px_10px_40px_-15px_rgba(48,97,239,0.4)]"
                                        }`}
                                      >
                                        <span
                                          className={`flex size-[44px] shrink-0 items-center justify-center rounded-[30px] transition-all duration-200 ${
                                            isActive
                                              ? "bg-[#1d68f4] text-white shadow-[0px_8px_20px_-6px_rgba(48,97,239,0.6)]"
                                              : "bg-[#ebf2ff] text-[#1d68f4] group-hover:bg-[#1d68f4] group-hover:text-white group-hover:shadow-[0px_8px_20px_-6px_rgba(48,97,239,0.6)]"
                                          }`}
                                        >
                                          <DropdownIcon name={product.icon} className="size-[20px]" />
                                        </span>
                                        <span className="flex min-w-0 flex-col items-start gap-px">
                                          <span className="whitespace-nowrap text-[14px] font-normal leading-[20px] tracking-[-0.35px] text-[#020618]">
                                            {product.label}
                                          </span>
                                          
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>

                                <div className={`relative flex h-[264px] w-[480px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[22px] border border-[#d7deec] bg-white/70 px-[41px] text-[#040a1c] shadow-[0px_30px_80px_-30px_rgba(128,71,225,0.25)] backdrop-blur-[12px] ${activeProduct ? "py-[31px]" : "py-[22px]"}`}>
                                    <div className="pointer-events-none absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(151deg, rgba(159,95,255,0.6) 0%, rgba(159,95,255,0) 50%, rgba(0,177,195,0.6) 100%)" }} />
                                    <div className="pointer-events-none absolute -right-[95px] -top-[96px] size-[288px] rounded-full bg-[#bb89ff] opacity-30 blur-[32px]" />
                                    <div className="pointer-events-none absolute -bottom-[96px] -left-[64px] size-[256px] rounded-full bg-[#00d7e4] opacity-25 blur-[32px]" />

                                    <div className={`relative flex w-full flex-col items-start ${activeProduct ? "h-[202px]" : "h-[220px]"}`}>
                                        {activeProduct ? (
                                          <div className="flex w-full items-center gap-[10px]">
                                            <span className="relative flex size-[64px] shrink-0 items-center justify-center rounded-[30px] text-white">
                                              <span className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,#ae70ff_0%,#3d72ff_100%)] opacity-50 blur-[6px]" />
                                              <span className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,#914dff_0%,#2351de_100%)] shadow-[0px_10px_40px_-10px_rgba(134,37,254,0.7)]" />
                                              <DropdownIcon name={activeProduct.icon} className="relative size-[32px]" />
                                            </span>
                                            <span className="flex min-w-0 flex-col items-start">
                                              <h3 className="m-0 min-w-0 text-[30px] font-normal leading-[36px] tracking-[-0.75px] text-[#040a1c]">
                                                {productPreview.label}
                                              </h3>
                                            </span>
                                          </div>
                                        ) : (
                                          <h3 className="m-0 w-full text-[30px] font-normal leading-[34px] tracking-[-0.75px] text-[#040a1c]">
                                            {productPreview.label}
                                          </h3>
                                        )}

                                        <p className={`m-0 w-full text-[15px] font-normal leading-[24.38px] text-[#404858] ${activeProduct ? "mt-[12px]" : "mt-[22px]"}`}>
                                          {productPreview.description}
                                        </p>

                                        {!activeProduct && (
                                          <DefaultPreviewGraphic variant="products" className="mt-[22px] h-[58px] shrink-0" />
                                        )}

                                        {activeProduct && (
                                          <Link
                                            to={activeProduct.href}
                                            onMouseDown={(event) => event.stopPropagation()}
                                            onClick={() => setDropdownOpen(item.dropdown, false)}
                                            className="absolute bottom-0 left-0 z-10 inline-flex items-center gap-[8px] rounded-full bg-[linear-gradient(167deg,#744ef6_0%,#0019ff_100%)] px-[20px] py-[10px] text-center text-[14px] font-normal leading-[20px] text-white shadow-[0px_8px_24px_-8px_rgba(11,21,44,0.5)]"
                                          >
                                            Explore product
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                              <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          </Link>
                                        )}
                                      </div>
                                  </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="px-[27px] py-[9px] text-[16px] text-black/70 hover:text-black transition-colors rounded-full"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              title="Sign-up"
              href="https://dashboard.idto.ai/signup/"
              variant="primary"
              size="md"
            />
            <Button
              title="Login"
              href="https://dashboard.idto.ai/login/"
              variant="outline"
              size="md"
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative flex h-9 w-9 items-center justify-center cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`absolute w-5 h-0.5 bg-black rounded transition-transform duration-200 ${mobileOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute w-5 h-0.5 bg-black rounded transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute w-5 h-0.5 bg-black rounded transition-transform duration-200 ${mobileOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain"
            >
              <nav className="flex flex-col gap-3 pt-5 pb-4">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.dropdown === "products") {
                            setMobileProductsOpen(!mobileProductsOpen);
                            setMobileSolutionsOpen(false);
                            return;
                          }
                          setMobileSolutionsOpen(!mobileSolutionsOpen);
                          setMobileProductsOpen(false);
                        }}
                        className="text-base text-black/70 hover:text-black transition-colors py-1 flex items-center gap-1 cursor-pointer"
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            (item.dropdown === "products" ? mobileProductsOpen : mobileSolutionsOpen) ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {(item.dropdown === "products" ? mobileProductsOpen : mobileSolutionsOpen) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2 pt-3">
                              {getDropdownItems(item.dropdown).map((product) => (
                                <Link
                                  key={product.href}
                                  to={product.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileProductsOpen(false);
                                    setMobileSolutionsOpen(false);
                                  }}
                                  className="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 transition-colors active:bg-[#F6F6F0]"
                                >
                                  <span className="flex min-w-0 items-center gap-2.5">
                                    <span
                                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_6px_14px_rgba(0,25,255,0.14)]"
                                    >
                                      <DropdownIcon name={product.icon} className="h-5 w-5" />
                                    </span>
                                    <span className="text-[14px] font-medium leading-[20px] text-[#353535]">{product.label}</span>
                                  </span>
                                  <svg width="13" height="12" viewBox="0 0 15 14" fill="none" className="shrink-0">
                                    <path d="M1 7H14M14 7L8 1M14 7L8 13" stroke="#0019FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-base text-black/70 hover:text-black transition-colors py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                )}
                <div className="flex gap-3 pt-2">
                  <Button
                    title="Sign-up"
                    href="https://dashboard.idto.ai/signup/"
                    variant="primary"
                    size="sm"
                  />
                  <Button
                    title="Login"
                    href="https://dashboard.idto.ai/login/"
                    variant="outline"
                    size="sm"
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
