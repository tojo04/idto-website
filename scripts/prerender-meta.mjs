#!/usr/bin/env node
/**
 * Generates per-route static index.html files in dist/ so that
 * social bots (Twitter, LinkedIn, Slack, etc.) receive the correct
 * OG/Twitter meta tags for each page without needing SSR.
 *
 * Amplify serves dist/<route>/index.html when a path is requested,
 * so each file acts as a prerendered entry point.
 */

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const SITE_URL = "https://idto.ai";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const ROUTES = {
  "/products/BAV": {
    title: "Bank Account Verification API (Penny Drop & Pennyless) | idto.ai",
    description:
      "Verify any Indian bank account in seconds. Penny-drop and pennyless BAV API with NPCI coverage, low TAT, and audit-ready logs. INR 1 per check.",
  },
  "/products/CKYC": {
    title: "CKYC API — Central KYC Registry Integration | idto.ai",
    description:
      "Pull and push CKYC records via a single API. Instant customer onboarding for fintechs, NBFCs, and banks in India. RBI-aligned, DPDP-compliant.",
  },
  "/products/digilocker-3.0": {
    title: "DigiLocker 3.0 API — Document Verification & Fetch | idto.ai",
    description:
      "Pull DigiLocker-issued documents and verify identities with one API. UIDAI-aligned, government-grade source-of-truth with audit logs.",
  },
  "/products/mobile-intelligence": {
    title: "Mobile Intelligence API — Identity & Fraud Signals | idto.ai",
    description:
      "Verify identity and detect fraud using mobile-derived signals. Network, device, and behavioural intelligence in one API for fintech onboarding.",
  },
  "/solutions/fintech-and-lending": {
    title: "Fintech & Lending Identity Workflows | idto.ai",
    description:
      "Build fintech and lending onboarding, borrower risk, CKYC, DigiLocker, mobile intelligence, and account verification workflows with idto.ai.",
  },
  "/solutions/banking-and-nbfcs": {
    title: "Banking & NBFC Identity Workflows | idto.ai",
    description:
      "Run KYC, CKYC, bank account verification, document checks, and customer intelligence workflows for banks and NBFCs with idto.ai.",
  },
  "/solutions/insurance": {
    title: "Insurance Verification Workflows | idto.ai",
    description:
      "Build insurance verification workflows for policy onboarding, CKYC, claims payout validation, customer reachability, and renewals with idto.ai.",
  },
  "/solutions/crypto-and-web3": {
    title: "Crypto & Web3 Verification Workflows | idto.ai",
    description:
      "Build safer crypto and Web3 onboarding, KYC, biometric checks, bank account validation, payout verification, and risk workflows with idto.ai.",
  },
  "/solutions/marketplaces": {
    title: "Marketplace Trust & Verification Workflows | idto.ai",
    description:
      "Verify sellers, buyers, service providers, bank accounts, documents, and contactability for marketplace trust workflows with idto.ai.",
  },
  "/solutions/social-and-community-platforms": {
    title: "Social & Community Trust Workflows | idto.ai",
    description:
      "Reduce fake accounts, duplicate profiles, abuse, unsafe payouts, and trust gaps across user-generated platforms with idto.ai.",
  },
  "/solutions/gig-economy": {
    title: "Gig Economy Verification Workflows | idto.ai",
    description:
      "Verify gig workers, documents, bank accounts, face, and contactability quickly with idto.ai.",
  },
  "/solutions/background-verification": {
    title: "Employment & Candidate Verification Workflows | idto.ai",
    description:
      "Verify candidates, documents, education records, bank accounts, and contactability with one configurable BGV stack from idto.ai.",
  },
  "/solutions/merchant-onboarding-kyb": {
    title: "Merchant Onboarding & KYB Workflows | idto.ai",
    description:
      "Verify businesses, owners, bank accounts, documents, and risk signals faster with one configurable KYB and merchant onboarding layer.",
  },
  "/blog": {
    title: "Blog | idto.ai",
    description:
      "Insights on identity verification, KYC, KYB, and fraud prevention for Indian fintechs and enterprises.",
  },
  "/demo": {
    title: "Book a Demo | idto.ai",
    description:
      "See how idto.ai can streamline your identity verification and onboarding. Book a 30-minute demo with our team.",
  },
  "/contact_us": {
    title: "Contact Us | Book a Demo | idto.ai",
    description:
      "Contact idto.ai to book a product demo, discuss KYC, KYB, fraud prevention, onboarding workflows, APIs, pricing, and compliance.",
  },
  "/contact-us": {
    title: "Contact Us | Book a Demo | idto.ai",
    description:
      "Contact idto.ai to book a product demo, discuss KYC, KYB, fraud prevention, onboarding workflows, APIs, pricing, and compliance.",
  },
  "/privacy": {
    title: "Privacy Policy | idto.ai",
    description:
      "idto.ai privacy policy — how we collect, use, and protect your data.",
  },
  "/terms": {
    title: "Terms and Conditions | idto.ai",
    description: "idto.ai terms and conditions of service.",
  },
  "/blog/loan-fraud-india-identity-checks": {
    title: "Loan Fraud Is Winning in India Until You Check Who's Actually Applying | idto.ai",
    description:
      "Indian lenders are losing money to stolen and synthetic identities. Here is why document-centric KYC fails, and how live identity checks close the gap.",
    ogType: "article",
  },
  "/blog/payment-identity-orchestration-global-expansion": {
    title: "Why Payment & Identity Orchestration Is No Longer Optional for Global Business Expansion | idto.ai",
    description:
      "Global expansion exposes payment, identity, compliance, and fraud gaps quickly. Here is why orchestration has become core infrastructure for scaling businesses.",
    ogType: "article",
  },
  "/blog/kyc-address-verification-digipin-dhruva": {
    title: "The Most Broken Field in KYC Is Finally Getting Fixed: Address | idto.ai",
    description:
      "India's trust stack is getting a new location rail. Here is what DIGIPIN and DHRUVA could change for KYC, CKYC, lending, insurance, and logistics.",
    ogType: "article",
  },
  "/blog/dpdp-is-here-compliance-ready-brands": {
    title: "DPDP Is Here. If You're Already Doing Things Right, You're Already Ahead. | idto.ai",
    description:
      "How India's Data Protection framework rewards compliance-ready brands and what separates the prepared from the panicked.",
    ogType: "article",
  },
  "/blog/bank-account-verification-api-failed": {
    title: "Why Your Bank Account Verification API Failed | idto.ai",
    description:
      "Why the same bank account can fail with one provider and pass with another, and why building in-house orchestration becomes a costly trap.",
    ogType: "article",
  },
  "/blog/aadhaar-verification-vs-validation": {
    title: "Aadhaar Verification vs Validation: What Every Business Must Know About KYC Identity Checks | idto.ai",
    description:
      "Confused between Aadhaar verification and validation? Learn the key differences, how each impacts KYC compliance, and which method your business actually needs.",
    ogType: "article",
  },
  "/blog/penny-drop-integration": {
    title: "Why Your Penny Drop Integration Is Costing You More Than You Think | idto.ai",
    description:
      "Inconsistent outputs, cryptic error codes, and silent failures are quietly burning engineering hours across India's lending stack. There's a better way.",
    ogType: "article",
  },
  "/blog/aadhaar-kyc-evolution": {
    title: "From Aadhaar to DigiLocker: The Evolution of KYC in India | idto.ai",
    description:
      "Trace the journey of India's KYC infrastructure from centralized Aadhaar to decentralized digital lockers, and what it means for fintech integration.",
    ogType: "article",
  },
  "/blog/ckyc-vs-ekyc": {
    title: "CKYC vs eKYC: When to Use What in Your Verification Stack | idto.ai",
    description:
      "A practical guide to choosing between Centralized KYC and Electronic KYC based on your use case, regulatory requirements, and user experience goals.",
    ogType: "article",
  },
};

function esc(str) {
  return str
    .replace(/&(?!amp;|quot;|lt;|gt;)/g, "&amp;")
    .replace(/"/g, "&quot;");
}

function injectMeta(template, route, meta) {
  const canonicalUrl = `${SITE_URL}${route}`;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;
  let html = template;

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);

  // <meta name="description" ...> — \s+ handles both single and multi-line without crossing tags
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(meta.description)}" />`
  );

  // <link rel="canonical" href="...">
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${esc(canonicalUrl)}$2`
  );

  // og:title
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(meta.title)}$2`
  );

  // og:description — \s+ handles both single and multi-line without crossing tags
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(meta.description)}" />`
  );

  // og:url
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${esc(canonicalUrl)}$2`
  );

  // og:image (keep default)
  html = html.replace(
    /(<meta property="og:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`
  );

  // og:image:alt
  html = html.replace(
    /(<meta property="og:image:alt" content=")[^"]*(")/,
    `$1${esc(meta.title)}$2`
  );

  // twitter:title
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(meta.title)}$2`
  );

  // twitter:description — \s+ handles both single and multi-line without crossing tags
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`
  );

  // og:type — only replace when explicitly set (e.g. "article" for blog posts)
  if (meta.ogType) {
    html = html.replace(
      /(<meta property="og:type" content=")[^"]*(")/,
      `$1${esc(meta.ogType)}$2`
    );
  }

  return html;
}

let template;
try {
  template = readFileSync(join(DIST, "index.html"), "utf8");
} catch {
  console.error("dist/index.html not found — run npm run build first");
  process.exit(1);
}

for (const [route, meta] of Object.entries(ROUTES)) {
  const html = injectMeta(template, route, meta);
  const segments = route.split("/").filter(Boolean);
  const dir = join(DIST, ...segments);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");
  console.log(`prerendered ${route}`);
}

console.log(`\ndone — ${Object.keys(ROUTES).length} routes prerendered`);
