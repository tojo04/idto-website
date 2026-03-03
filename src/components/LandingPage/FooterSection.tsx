import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";

const logoIcon = "https://www.figma.com/api/mcp/asset/ac7598ed-cdd4-43ac-aeea-b254b67f1e6f";
const logoText = "https://www.figma.com/api/mcp/asset/e5ea6c41-aa64-412c-b3c2-13e36fd20a57";
const awsLogo = "https://www.figma.com/api/mcp/asset/8d741ca5-a092-4173-b40d-cd4cb3f01d45";
const isoLogo = "https://www.figma.com/api/mcp/asset/7621d378-4a1b-4b32-a8b4-e0a91e5b95b9";
const certLogo3 = "https://www.figma.com/api/mcp/asset/922bab18-f2dc-4f57-8156-36b257f68910";
const digilockerLogo = "https://www.figma.com/api/mcp/asset/baa45a74-76b1-4737-a522-b9951d7de783";

const productLinks = [
  { label: "User Verification (KYC)", href: "#" },
  { label: "Business Verification (KYB)", href: "#" },
  { label: "Employee & Workforce Verification", href: "#" },
  { label: "Fraud & Risk Intelligence", href: "#" },
  { label: "Global Verification Stack", href: "#" },
];

const resourceLinks = [
  { label: "API Documentation", href: "https://idtoai.readme.io/reference/idtoai-verification-apis" },
  { label: "Dashboard Login", href: "https://dashboard.idto.ai/login/" },
  { label: "Dashboard Signup", href: "https://dashboard.idto.ai/signup/" },
  { label: "Blog Posts", href: "https://in.linkedin.com/company/idto" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
];

interface FooterSectionProps {
  bookDemo: () => void;
}

export default function FooterSection({ bookDemo }: FooterSectionProps) {
  return (
    <footer className="bg-blue-section px-6 lg:px-[150px] py-20 lg:py-[150px] rounded-t-[100px] lg:rounded-t-[150px]">
      <div className="max-w-[1620px] mx-auto flex flex-col gap-16 lg:gap-[90px]">
        {/* Main Footer Content - Gradient Border Container */}
        <div
          className="rounded-3xl p-1.5 pt-4"
          style={{
            backgroundImage:
              "linear-gradient(250deg, #0019ff 18%, #4edfc3 31%, #54eebe 49%, #4edfc3 64%, #0019ff 115%)",
          }}
        >
          <div className="bg-blue-section rounded-[21px] px-8 lg:px-[60px] py-10 lg:py-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start">
              {/* Logo & Tagline */}
              <div className="flex flex-col gap-7 w-full lg:w-[498px] shrink-0">
                <div className="relative w-[82px] h-[44px]">
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
                <div className="flex flex-col gap-4">
                  <p className="font-heading text-[26px] text-white leading-[1.5] tracking-[-0.52px]">
                    Your partner for onboarding,
                    <br />
                    verification & trust.
                  </p>
                  <p className="text-sm text-white font-light leading-[1.4]">
                    We handle the complexity so you can focus on growth.
                  </p>
                </div>
              </div>

              {/* Links Columns */}
              <div className="flex flex-1 flex-wrap gap-8 lg:gap-0">
                {/* Company */}
                <div className="flex flex-col gap-9 w-[152px]">
                  <p className="text-[15px] font-semibold text-white/50 uppercase tracking-[0.6px]">
                    Company
                  </p>
                  <div className="flex flex-col gap-4">
                    {companyLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-xl text-white leading-[1.4] tracking-[-0.42px] hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Products */}
                <div className="flex flex-col gap-9 w-[356px]">
                  <p className="text-[15px] font-semibold text-white/50 uppercase tracking-[0.6px]">
                    Products
                  </p>
                  <div className="flex flex-col gap-4">
                    {productLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-xl text-white leading-[1.4] tracking-[-0.42px] hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="flex flex-col gap-9 flex-1">
                  <p className="text-[15px] font-semibold text-white/50 uppercase tracking-[0.6px]">
                    Resources
                  </p>
                  <div className="flex flex-col gap-4">
                    {resourceLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-white leading-[1.4] tracking-[-0.42px] hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 shrink-0">
                <Button
                  title="Sign-up"
                  href="https://dashboard.idto.ai/signup/"
                  variant="white"
                  size="md"
                />
                <Button
                  title="Book a demo"
                  onClick={bookDemo}
                  variant="outline-white"
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <p className="text-xl text-white leading-[1.5] tracking-[-0.42px] max-w-[700px] font-medium">
            Payvriz Technologies Private Limited is compliant with the Digital
            Personal Data Protection Act, 2023 and committed to safeguarding your
            information. All data is transmitted using 256-bit TLS encryption for
            maximum security.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <img src={awsLogo} alt="AWS" className="h-10 w-auto" />
            <img src={isoLogo} alt="ISO" className="h-16 w-auto" />
            <img src={certLogo3} alt="Certification" className="h-11 w-auto" />
            <img src={digilockerLogo} alt="DigiLocker" className="h-9 w-auto" />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8 text-white text-lg font-inter leading-[1.4]">
          <div className="space-y-1">
            <p>© Payvriz India, 2024-2025. All rights reserved.</p>
            <p>CIN : U70200HR2024PTC120930</p>
            <p className="mt-3">Registered office:</p>
            <p>
              3rd Floor, Orchid Centre, Golf Course Road, Sector 53, Gurugram,
              Haryana, India - 122002.
            </p>
          </div>
          <div className="flex gap-12 text-right">
            <a href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-white/80 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
