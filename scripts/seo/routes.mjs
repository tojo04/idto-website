import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DATA = join(__dirname, "..", "..", "src", "data", "blogPosts.ts");

export const SITE_URL = "https://idto.ai";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const withTrailingSlash = (path) =>
  path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;

export const canonicalFor = (path) => `${SITE_URL}${withTrailingSlash(path)}`;

const STATIC_ROUTES = [
  { path: "/", lastmod: "2026-06-20", prerender: false },
  {
    path: "/products/CKYC",
    lastmod: "2026-04-30",
    title: "CKYC API — Central KYC Registry Integration | idto.ai",
    description:
      "Pull and push CKYC records via a single API. Instant customer onboarding for fintechs, NBFCs, and banks in India. RBI-aligned, DPDP-compliant.",
    llms: {
      section: "Products",
      label: "CKYC Registry API",
      note: "Instant Central KYC search, download and upload for RBI-regulated financial entities",
    },
  },
  {
    path: "/products/BAV",
    lastmod: "2026-04-30",
    title: "Bank Account Verification API (Penny Drop & Pennyless) | idto.ai",
    description:
      "Verify any Indian bank account in seconds. Penny-drop and pennyless BAV API with NPCI coverage, low TAT, and audit-ready logs. INR 1 per check.",
    llms: {
      section: "Products",
      label: "Bank Account Verification",
      note: "Penny-drop and pennyless bank account verification in real-time",
    },
  },
  {
    path: "/products/digilocker-3.0",
    lastmod: "2026-04-30",
    title: "DigiLocker 3.0 API — Document Verification & Fetch | idto.ai",
    description:
      "Pull DigiLocker-issued documents and verify identities with one API. UIDAI-aligned, government-grade source-of-truth with audit logs.",
    llms: {
      section: "Products",
      label: "DigiLocker 3.0",
      note: "Aadhaar-seeded document fetch, eSign, and DigiLocker 3.0 integration API",
    },
  },
  {
    path: "/products/mobile-intelligence",
    lastmod: "2026-04-30",
    title: "Mobile Intelligence API — Identity & Fraud Signals | idto.ai",
    description:
      "Verify identity and detect fraud using mobile-derived signals. Network, device, and behavioural intelligence in one API for fintech onboarding.",
    llms: {
      section: "Products",
      label: "Mobile Intelligence",
      note: "SIM swap detection, device intelligence and mobile number verification",
    },
  },
  {
    path: "/solutions/fintech-and-lending",
    lastmod: "2026-06-20",
    title: "Fintech & Lending Identity Workflows | idto.ai",
    description:
      "Build fintech and lending onboarding, borrower risk, CKYC, DigiLocker, mobile intelligence, and account verification workflows with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Fintech & Lending",
      note: "Onboarding, borrower risk, CKYC, DigiLocker, mobile intelligence and account verification",
    },
  },
  {
    path: "/solutions/banking-and-nbfcs",
    lastmod: "2026-06-20",
    title: "Banking & NBFC Identity Workflows | idto.ai",
    description:
      "Run KYC, CKYC, bank account verification, document checks, and customer intelligence workflows for banks and NBFCs with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Banking & NBFCs",
      note: "KYC, CKYC, bank account verification, document checks and customer intelligence",
    },
  },
  {
    path: "/solutions/insurance",
    lastmod: "2026-06-20",
    title: "Insurance Verification Workflows | idto.ai",
    description:
      "Build insurance verification workflows for policy onboarding, CKYC, claims payout validation, customer reachability, and renewals with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Insurance",
      note: "Policy onboarding, CKYC, claims payout validation, reachability and renewals",
    },
  },
  {
    path: "/solutions/crypto-and-web3",
    lastmod: "2026-06-20",
    title: "Crypto & Web3 Verification Workflows | idto.ai",
    description:
      "Build safer crypto and Web3 onboarding, KYC, biometric checks, bank account validation, payout verification, and risk workflows with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Crypto & Web3",
      note: "Onboarding, KYC, biometric checks, bank validation, payout verification and risk",
    },
  },
  {
    path: "/solutions/marketplaces",
    lastmod: "2026-06-20",
    title: "Marketplace Trust & Verification Workflows | idto.ai",
    description:
      "Verify sellers, buyers, service providers, bank accounts, documents, and contactability for marketplace trust workflows with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Marketplaces",
      note: "Verify sellers, buyers, service providers, bank accounts, documents and contactability",
    },
  },
  {
    path: "/solutions/social-and-community-platforms",
    lastmod: "2026-06-20",
    title: "Social & Community Trust Workflows | idto.ai",
    description:
      "Reduce fake accounts, duplicate profiles, abuse, unsafe payouts, and trust gaps across user-generated platforms with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Social & Community Platforms",
      note: "Reduce fake accounts, duplicate profiles, abuse, unsafe payouts and trust gaps",
    },
  },
  {
    path: "/solutions/gig-economy",
    lastmod: "2026-06-20",
    title: "Gig Economy Verification Workflows | idto.ai",
    description:
      "Verify gig workers, documents, bank accounts, face, and contactability quickly with idto.ai.",
    llms: {
      section: "Solutions",
      label: "Gig Economy",
      note: "Verify gig workers, documents, bank accounts, face and contactability",
    },
  },
  {
    path: "/solutions/background-verification",
    lastmod: "2026-06-20",
    title: "Employment & Candidate Verification Workflows | idto.ai",
    description:
      "Verify candidates, documents, education records, bank accounts, and contactability with one configurable BGV stack from idto.ai.",
    llms: {
      section: "Solutions",
      label: "Employment & Background Verification",
      note: "Verify candidates, documents, education records, bank accounts and contactability",
    },
  },
  {
    path: "/solutions/merchant-onboarding-kyb",
    lastmod: "2026-06-20",
    title: "Merchant Onboarding & KYB Workflows | idto.ai",
    description:
      "Verify businesses, owners, bank accounts, documents, and risk signals faster with one configurable KYB and merchant onboarding layer.",
    llms: {
      section: "Solutions",
      label: "Merchant Onboarding & KYB",
      note: "Verify businesses, owners, bank accounts, documents and risk signals",
    },
  },
  {
    path: "/blog",
    lastmod: "2026-06-20",
    title: "Blog | idto.ai",
    description:
      "Insights on identity verification, KYC, KYB, and fraud prevention for Indian fintechs and enterprises.",
  },
  {
    path: "/demo",
    lastmod: "2026-04-30",
    title: "Book a Demo | idto.ai",
    description:
      "See how idto.ai can streamline your identity verification and onboarding. Book a 30-minute demo with our team.",
  },
  {
    path: "/contact-us",
    lastmod: "2026-05-28",
    title: "Contact Us | Book a Demo | idto.ai",
    description:
      "Contact idto.ai to book a product demo, discuss KYC, KYB, fraud prevention, onboarding workflows, APIs, pricing, and compliance.",
  },
  {
    path: "/privacy",
    lastmod: "2026-04-30",
    title: "Privacy Policy | idto.ai",
    description:
      "idto.ai privacy policy — how we collect, use, and protect your data.",
  },
  {
    path: "/terms",
    lastmod: "2026-04-30",
    title: "Terms and Conditions | idto.ai",
    description: "idto.ai terms and conditions of service.",
  },
];

const BLOG_FIELD_PATTERN =
  /slug:\s*"([^"]+)",[\s\S]*?title:\s*"((?:[^"\\]|\\.)*)",[\s\S]*?description:\s*"((?:[^"\\]|\\.)*)",[\s\S]*?isoDate:\s*"(\d{4}-\d{2}-\d{2})"/g;

const decode = (value) =>
  value.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

export function getBlogRoutes() {
  const source = readFileSync(BLOG_DATA, "utf8");
  const matches = [...source.matchAll(BLOG_FIELD_PATTERN)];
  return matches.map((match, index) => {
    const [, slug, title, description, isoDate] = match;
    const blockEnd =
      index + 1 < matches.length ? matches[index + 1].index : source.length;
    const block = source.slice(match.index, blockEnd);
    const ogImage = block.match(/ogImage:\s*"([^"]+)"/);
    return {
      path: `/blog/${slug}`,
      lastmod: isoDate,
      title: `${decode(title)} | idto.ai`,
      description: decode(description),
      ogType: "article",
      ...(ogImage ? { ogImage: decode(ogImage[1]) } : {}),
      llms: { section: "Blog", label: decode(title) },
    };
  });
}

export function getAllRoutes() {
  return [...STATIC_ROUTES, ...getBlogRoutes()].map((route) => ({
    prerender: route.path !== "/",
    ...route,
  }));
}
