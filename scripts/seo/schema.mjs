import { SITE_URL, DEFAULT_OG_IMAGE, canonicalFor } from "./routes.mjs";
import { HOME_FAQ } from "./faq.mjs";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "idto.ai",
  legalName: "Payvriz Technologies Private Limited",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  description:
    "The only identity and onboarding platform your business needs. Verify users, businesses, and employees globally with a single integration. KYC, KYB, DigiLocker, BAV and fraud prevention.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Orchid Centre, Golf Course Road, Sector 53",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122002",
    addressCountry: "IN",
  },
  sameAs: ["https://in.linkedin.com/company/idto"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@idto.ai",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "privacy",
      email: "privacy@idto.ai",
      availableLanguage: ["en"],
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "idto.ai",
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

const nameFor = (route) => route.title.replace(/\s*\|\s*idto\.ai\s*$/, "");

const SECTION_LABELS = { products: "Products", solutions: "Solutions", blog: "Blog" };

function breadcrumb(route, url) {
  const segment = route.path.split("/").filter(Boolean)[0];
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }];
  if (SECTION_LABELS[segment]) {
    items.push({ "@type": "ListItem", position: 2, name: SECTION_LABELS[segment] });
  }
  items.push({ "@type": "ListItem", position: items.length + 1, name: nameFor(route), item: url });
  return { "@type": "BreadcrumbList", itemListElement: items };
}

function article(route, url) {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: nameFor(route).slice(0, 110),
    description: route.description,
    image: route.ogImage ?? DEFAULT_OG_IMAGE,
    datePublished: route.lastmod,
    dateModified: route.lastmod,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    inLanguage: "en",
  };
}

function faqPage(url) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: HOME_FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function service(route, url) {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: nameFor(route),
    description: route.description,
    provider: { "@id": ORG_ID },
    areaServed: "IN",
    url,
  };
}

export function schemaFor(route) {
  const url = canonicalFor(route.path);
  const graph = [organization, website];

  const isArticle = route.path.startsWith("/blog/");
  const isService =
    route.path.startsWith("/products/") || route.path.startsWith("/solutions/");

  graph.push({
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title ?? "idto.ai",
    description: route.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
  });

  if (isArticle) graph.push(article(route, url));
  if (isService) graph.push(service(route, url));
  if (route.path === "/") graph.push(faqPage(url));
  if (route.path !== "/") graph.push(breadcrumb(route, url));

  return { "@context": "https://schema.org", "@graph": graph };
}
