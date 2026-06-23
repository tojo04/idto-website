import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { canonicalFor, DEFAULT_OG_IMAGE, getAllRoutes } from "./routes.mjs";

const esc = (str) =>
  str.replace(/&(?!amp;|quot;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;");

function injectMeta(template, route) {
  const canonicalUrl = canonicalFor(route.path);
  const ogImage = route.ogImage ?? DEFAULT_OG_IMAGE;
  const title = route.title;
  const description = route.description;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(description)}" />`
  );
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${esc(canonicalUrl)}$2`
  );
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(title)}$2`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(description)}" />`
  );
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${esc(canonicalUrl)}$2`
  );
  html = html.replace(
    /(<meta property="og:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`
  );
  html = html.replace(
    /(<meta property="og:image:alt" content=")[^"]*(")/,
    `$1${esc(title)}$2`
  );
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(title)}$2`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${esc(description)}" />`
  );
  html = html.replace(
    /(<meta name="twitter:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`
  );
  if (route.ogType) {
    html = html.replace(
      /(<meta property="og:type" content=")[^"]*(")/,
      `$1${esc(route.ogType)}$2`
    );
  }
  if (route.ogImage) {
    html = html.replace(/\s*<meta property="og:image:width"[^>]*\/>/, "");
    html = html.replace(/\s*<meta property="og:image:height"[^>]*\/>/, "");
  }
  return html;
}

export function prerenderRoutes(dist, template) {
  const routes = getAllRoutes().filter((route) => route.prerender);
  for (const route of routes) {
    const html = injectMeta(template, route);
    const dir = join(dist, ...route.path.split("/").filter(Boolean));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html, "utf8");
  }
  return routes.length;
}
