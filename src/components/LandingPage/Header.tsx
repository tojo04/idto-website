import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInDown } from "../../utils/animations";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import logoIcon from "../../assets/logo_icon.svg";
import logoText from "../../assets/logo_text.svg";

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

type DropdownIconName = keyof typeof dropdownIconPaths;

type DropdownItem = {
  label: string;
  href: string;
  icon: DropdownIconName;
};

function DropdownIcon({
  name,
  className = "h-7 w-7",
}: {
  name: DropdownIconName;
  className?: string;
}) {
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
      {dropdownIconPaths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

const productItems: DropdownItem[] = [
  {
    label: "CKYC",
    href: "/products/CKYC",
    icon: "ckyc",
  },
  {
    label: "Bank Account Verification",
    href: "/products/BAV",
    icon: "bav",
  },
  {
    label: "DigiLocker",
    href: "/products/digilocker-3.0",
    icon: "digilocker",
  },
  {
    label: "Mobile Intelligence",
    href: "/products/mobile-intelligence",
    icon: "mobileIntelligence",
  },
];

const solutionItems: DropdownItem[] = [
  {
    label: "Fintech & Lending",
    href: "/solutions/fintech-and-lending",
    icon: "fintechLending",
  },
  {
    label: "Banking & NBFCs",
    href: "/solutions/banking-and-nbfcs",
    icon: "bankingNbfcs",
  },
  {
    label: "Insurance",
    href: "/solutions/insurance",
    icon: "insurance",
  },
  {
    label: "Crypto & Web3",
    href: "/solutions/crypto-and-web3",
    icon: "cryptoWeb3",
  },
  {
    label: "Marketplaces",
    href: "/solutions/marketplaces",
    icon: "marketplaces",
  },
  {
    label: "Social & Community",
    href: "/solutions/social-and-community-platforms",
    icon: "socialCommunity",
  },
  {
    label: "Gig Economy",
    href: "/solutions/gig-economy",
    icon: "gigEconomy",
  },
  {
    label: "Background Verification",
    href: "/solutions/background-verification",
    icon: "backgroundVerification",
  },
  {
    label: "Merchant Onboarding & KYB",
    href: "/solutions/merchant-onboarding-kyb",
    icon: "merchantKyb",
  },
];

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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const getDropdownItems = (dropdown: string) =>
    dropdown === "products" ? productItems : solutionItems;

  const isDropdownOpen = (dropdown: string) =>
    dropdown === "products" ? productsOpen : solutionsOpen;

  const setDropdownOpen = (dropdown: string, value: boolean) => {
    if (dropdown === "products") {
      setProductsOpen(value);
      setSolutionsOpen(false);
      return;
    }
    setSolutionsOpen(value);
    setProductsOpen(false);
  };

  const getDropdownRef = (dropdown: string) =>
    dropdown === "products" ? productsDropdownRef : solutionsDropdownRef;

  return (
    <header className="bg-white px-5 lg:px-[112.5px] py-4 lg:py-[27px] sticky top-0 z-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={createFadeInDown(0.05)}
      >
        <div className="max-w-[1215px] mx-auto flex items-center justify-between lg:border-0 border-[0.4px] border-[#10dda8] rounded-full lg:rounded-none h-[40px] lg:h-auto px-3 lg:px-0">
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
                  <div key={item.label} className="relative" ref={getDropdownRef(item.dropdown)}>
                    <button
                      type="button"
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
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                        >
                          {/* Triangle caret */}
                          <div className="flex justify-center">
                            <div
                              className="w-0 h-0"
                              style={{
                                borderLeft: "18px solid transparent",
                                borderRight: "18px solid transparent",
                                borderBottom: "17.7px solid white",
                              }}
                            />
                          </div>
                          {/* Dropdown body */}
                          <div className={`rounded-[12px] bg-white p-[30px] shadow-[0px_8px_32px_rgba(0,0,0,0.12)] ${item.dropdown === "products" ? "w-[760px]" : "w-[1080px]"}`}>
                            <div className={`grid gap-x-[30px] gap-y-4 ${item.dropdown === "products" ? "grid-cols-2" : "grid-cols-3"}`}>
                              {getDropdownItems(item.dropdown).map((product) => (
                                <Link
                                  key={product.href}
                                  to={product.href}
                                  onClick={() => setDropdownOpen(item.dropdown, false)}
                                  className="group flex min-h-[54px] items-center gap-[12px] rounded-[10px] pr-2 transition-colors duration-200 hover:bg-[#F7FAFF]"
                                >
                                  <div className="w-[4px] h-[42px] rounded-r-[6px] bg-transparent group-hover:bg-[#1d68f4] transition-colors duration-200 shrink-0" />
                                  <span
                                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_18px_rgba(0,25,255,0.16)] transition-transform duration-200 group-hover:scale-105"
                                  >
                                    <DropdownIcon name={product.icon} />
                                  </span>
                                  <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                                    <span className="text-[16px] font-semibold text-[#353535] tracking-[-0.16px] whitespace-nowrap">
                                      {product.label}
                                    </span>
                                    <svg
                                      width="15"
                                      height="14"
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      className="shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                      <path
                                        d="M1 7H14M14 7L8 1M14 7L8 13"
                                        stroke="#1D68F4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </Link>
                              ))}
                            </div>
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
