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
    label: "DigiLocker",
    href: "/products/digilocker-3.0",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Documentation", href: "https://idtoai.readme.io/reference/idtoai-verification-apis", external: true },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/idto", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="bg-white px-5 lg:px-37.5 py-4 lg:py-9 sticky top-0 z-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={createFadeInDown(0.05)}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between lg:border-0 border-[0.4px] border-[#10dda8] rounded-full lg:rounded-none h-[40px] lg:h-auto px-3 lg:px-0">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 shrink-0">
            <div className="relative w-13 h-7 lg:w-20.5 lg:h-11">
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
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center backdrop-blur-[15px] bg-white/80 border-[1.5px] border-white rounded-full">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="px-9 py-3 text-xl text-black/70 hover:text-black transition-colors rounded-full cursor-pointer flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {productsOpen && (
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
                                borderBottom: "17.7px solid #F6F6F6",
                              }}
                            />
                          </div>
                          {/* Dropdown body */}
                          <div className="w-[443px] bg-[#F6F6F6] rounded-[25px] px-[31px] py-[17px] flex items-start gap-[59px]">
                            {productItems.map((product) => (
                              <Link
                                key={product.href}
                                to={product.href}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-center gap-[30px] px-[20px] py-[15px] rounded-[10px] hover:bg-black/5 transition-colors"
                              >
                                <span className="text-[18px] font-semibold text-[#353535] tracking-[-0.01em] leading-[23px] whitespace-nowrap">
                                  {product.label}
                                </span>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" className="shrink-0">
                                  <path d="M1 7H14M14 7L8 1M14 7L8 13" stroke="#1D68F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    className="px-9 py-3 text-xl text-black/70 hover:text-black transition-colors rounded-full"
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
                  item.hasDropdown ? (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="text-base text-black/70 hover:text-black transition-colors py-1 flex items-center gap-1 cursor-pointer"
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2 pl-4 pt-2">
                              {productItems.map((product) => (
                                <Link
                                  key={product.href}
                                  to={product.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileProductsOpen(false);
                                  }}
                                  className="flex items-center gap-3 py-2"
                                >
                                  <span className="text-sm font-semibold text-[#353535]">{product.label}</span>
                                  <svg width="12" height="11" viewBox="0 0 15 14" fill="none" className="shrink-0">
                                    <path d="M1 7H14M14 7L8 1M14 7L8 13" stroke="#1D68F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
