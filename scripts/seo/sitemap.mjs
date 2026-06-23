import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { canonicalFor, getAllRoutes } from "./routes.mjs";

export function generateSitemap(dist) {
  const routes = getAllRoutes().filter((route) => !route.noindex);
  const entries = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${canonicalFor(route.path)}</loc>\n    <lastmod>${route.lastmod}</lastmod>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  writeFileSync(join(dist, "sitemap.xml"), xml, "utf8");
  return routes.length;
}
