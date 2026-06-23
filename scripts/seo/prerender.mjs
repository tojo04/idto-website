import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { canonicalFor, DEFAULT_OG_IMAGE, getAllRoutes } from "./routes.mjs";
import { schemaFor } from "./schema.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SERVER_ENTRY = join(__dirname, "..", "..", "dist-server", "entry-server.js");

const ROOT_MARKER = '<div id="root"></div>';
const JSONLD_PATTERN = /<script type="application\/ld\+json">[\s\S]*?<\/script>/g;

const esc = (str) =>
  str.replace(/&(?!amp;|quot;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;");

const jsonLdScript = (schema) =>
  `<script type="application/ld+json">${JSON.stringify(schema).replace(
    /</g,
    "\\u003c"
  )}</script>`;

const stripHeadTags = (body) =>
  body
    .replace(/<title[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

function injectBody(html, route, render) {
  if (html.split(ROOT_MARKER).length - 1 !== 1) {
    throw new Error(`prerender: expected exactly one '${ROOT_MARKER}' in template`);
  }
  const body = stripHeadTags(render(route.path));
  return html.replace(ROOT_MARKER, `<div id="root">${body}</div>`);
}

function injectSchema(html, route) {
  const matches = html.match(JSONLD_PATTERN);
  if (!matches || matches.length !== 1) {
    throw new Error(
      `prerender: expected exactly one application/ld+json block, found ${matches?.length ?? 0}`
    );
  }
  return html.replace(JSONLD_PATTERN, jsonLdScript(schemaFor(route)));
}

function injectMeta(template, route) {
  const canonicalUrl = canonicalFor(route.path);
  const ogImage = route.ogImage ?? DEFAULT_OG_IMAGE;
  const title = route.title;
  const description = route.description;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  if (route.noindex) {
    html = html.replace(
      /(<meta name="robots" content=")[^"]*(")/,
      "$1noindex,follow$2"
    );
  }
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

export async function prerenderRoutes(dist, template) {
  const { render } = await import(pathToFileURL(SERVER_ENTRY).href);
  const routes = getAllRoutes().filter((route) => route.prerender);
  for (const route of routes) {
    let html = injectMeta(template, route);
    html = injectSchema(html, route);
    html = injectBody(html, route, render);
    const dir = join(dist, ...route.path.split("/").filter(Boolean));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html, "utf8");
  }
  return routes.length;
}
