import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInDown } from "../../utils/animations";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import logoIcon from "../../assets/logo_icon.svg";
import logoText from "../../assets/logo_text.svg";

const productItems = [
  {
    label: "CKYC",
    href: "/products/CKYC",
  },
  {
    label: "Bank Account Verification",
    href: "/products/BAV",
  },
  {
    label: "DigiLocker",
    href: "/products/digilocker-3.0",
  },
  {
    label: "Mobile Intelligence",
    href: "/products/mobile-intelligence",
  },
];

const solutionItems = [
  {
    label: "Fintech & Lending",
    href: "/solutions/fintech-and-lending",
  },
  {
    label: "Banking & NBFCs",
    href: "/solutions/banking-and-nbfcs",
  },
  {
    label: "Insurance",
    href: "/solutions/insurance",
  },
  {
    label: "Crypto & Web3",
    href: "/solutions/crypto-and-web3",
  },
  {
    label: "Marketplaces",
    href: "/solutions/marketplaces",
  },
  {
    label: "Social & Community",
    href: "/solutions/social-and-community-platforms",
  },
  {
    label: "Gig Economy",
    href: "/solutions/gig-economy",
  },
  {
    label: "Background Verification",
    href: "/solutions/background-verification",
  },
  {
    label: "Merchant Onboarding & KYB",
    href: "/solutions/merchant-onboarding-kyb",
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
                          <div className={`bg-white rounded-[12px] p-[30px] shadow-[0px_8px_32px_rgba(0,0,0,0.12)] ${item.dropdown === "products" ? "w-[702px]" : "w-[360px]"}`}>
                            <div className={`grid gap-x-[30px] gap-y-[30px] ${item.dropdown === "products" ? "grid-cols-2" : "grid-cols-1"}`}>
                              {getDropdownItems(item.dropdown).map((product) => (
                                <Link
                                  key={product.href}
                                  to={product.href}
                                  onClick={() => setDropdownOpen(item.dropdown, false)}
                                  className="group flex items-center gap-[12px]"
                                >
                                  <div className="w-[4px] h-[42px] rounded-r-[6px] bg-transparent group-hover:bg-[#1d68f4] transition-colors duration-200 shrink-0" />
                                  <div className="flex items-center justify-between flex-1 min-w-0">
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
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 pt-6 pb-4">
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
                            <div className="flex flex-col gap-3 pt-4">
                              {getDropdownItems(item.dropdown).map((product) => (
                                <Link
                                  key={product.href}
                                  to={product.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileProductsOpen(false);
                                    setMobileSolutionsOpen(false);
                                  }}
                                  className="flex items-center justify-between active:bg-[#F6F6F0] rounded-2xl px-5 py-4 transition-colors"
                                >
                                  <span className="text-base font-medium text-[#353535]">{product.label}</span>
                                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" className="shrink-0">
                                    <path d="M1 7H14M14 7L8 1M14 7L8 13" stroke="#5B5FC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
