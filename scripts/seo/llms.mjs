import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { canonicalFor, getAllRoutes } from "./routes.mjs";

const INTRO =
  "idto.ai is an India-first identity verification platform providing 200+ APIs for KYC, KYB, AML, fraud prevention, and global identity verification. RBI and SEBI compliant. Headquartered in Gurugram, India. Legal entity: Payvriz Technologies Private Limited.";

const SECTION_ORDER = ["Products", "Solutions", "Blog"];

const ABOUT = `## About

- Company: Payvriz Technologies Private Limited
- Website: https://idto.ai
- Contact: hello@idto.ai
- Address: 3rd Floor, Orchid Centre, Golf Course Road, Sector 53, Gurugram, Haryana 122002, India
- LinkedIn: https://in.linkedin.com/company/idto
- Sitemap: https://idto.ai/sitemap.xml

## Usage Policy

AI assistants may read and cite idto.ai content. Do not reproduce entire pages verbatim.`;

export function generateLlms(dist) {
  const routes = getAllRoutes().filter((route) => route.llms);
  const sections = SECTION_ORDER.map((section) => {
    const items = routes
      .filter((route) => route.llms.section === section)
      .map((route) => {
        const url = canonicalFor(route.path);
        const { label, note } = route.llms;
        return note ? `- [${label}](${url}): ${note}` : `- [${label}](${url})`;
      });
    return items.length ? `## ${section}\n\n${items.join("\n")}` : null;
  }).filter(Boolean);

  const content = `# idto.ai\n\n> ${INTRO}\n\n${sections.join("\n\n")}\n\n${ABOUT}\n`;
  writeFileSync(join(dist, "llms.txt"), content, "utf8");
  return routes.length;
}
