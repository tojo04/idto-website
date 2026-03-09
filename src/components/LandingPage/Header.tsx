import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInDown } from "../../utils/animations";
import Button from "../UI/Button";
import logoIcon from "../../assets/logo_icon.svg";
import logoText from "../../assets/logo_text.svg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#workflows" },
  { label: "Documentation", href: "https://idtoai.readme.io/reference/idtoai-verification-apis", external: true },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/idto", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white px-5 lg:px-37.5 py-4 lg:py-9 sticky top-0 z-50">
      <motion.div
        initial="hidden"
        animate="show"
        variants={createFadeInDown(0.05)}
      >
        <div className="max-w-480 mx-auto flex items-center justify-between lg:border-0 border-[0.4px] border-[#10dda8] rounded-full lg:rounded-none h-[40px] lg:h-auto px-3 lg:px-0">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 shrink-0">
            <div className="relative w-[43px] h-[23px] lg:w-20.5 lg:h-11">
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-9 py-3 text-xl text-black/70 hover:text-black transition-colors rounded-full"
                >
                  {item.label}
                </a>
              ))}
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
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`w-5 h-0.5 bg-black rounded transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-black rounded transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-black rounded transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
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
                {navItems.map((item) => (
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
                ))}
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
