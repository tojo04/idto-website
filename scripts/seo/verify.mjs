import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getAllRoutes } from "./routes.mjs";

const MIN_WORDS = 120;

const bodyOf = (html) => html.slice(html.indexOf("</head>"));
const countTags = (html, tag) => (html.match(new RegExp(`<${tag}[\\s>]`, "gi")) || []).length;

const h1Text = (html) =>
  (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ""])[1]
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const wordCount = (html) =>
  bodyOf(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;

const internalLinks = (html) =>
  (bodyOf(html).match(/<a\s[^>]*href="(\/[^"]*|https:\/\/idto\.ai[^"]*)"/gi) || []).length;

const expectedSchemaType = (path) => {
  if (path === "/") return "FAQPage";
  if (path.startsWith("/blog/")) return "Article";
  if (path.startsWith("/products/") || path.startsWith("/solutions/")) return "Service";
  return null;
};

export function verifyPrerendered(dist) {
  const failures = [];
  for (const route of getAllRoutes().filter((r) => r.prerender)) {
    const file = join(dist, ...route.path.split("/").filter(Boolean), "index.html");
    const html = readFileSync(file, "utf8");
    const problems = [];

    if (countTags(html, "title") !== 1) problems.push(`titles=${countTags(html, "title")}`);
    if ((html.match(/rel="canonical"/g) || []).length !== 1) problems.push("canonical != 1");
    if ((html.match(/application\/ld\+json/g) || []).length !== 1)
      problems.push("ld+json != 1");
    const expected = expectedSchemaType(route.path);
    if (expected && !html.includes(`"@type":"${expected}"`))
      problems.push(`missing ${expected} schema`);

    if (!route.noindex) {
      if (!h1Text(html)) problems.push("missing/empty h1");
      const words = wordCount(html);
      if (words < MIN_WORDS) problems.push(`words=${words}<${MIN_WORDS}`);
      if (internalLinks(html) < 1) problems.push("no internal links");
    }

    if (problems.length) failures.push(`${route.path}: ${problems.join(", ")}`);
  }
  if (failures.length) {
    throw new Error(`prerender verification failed:\n  ${failures.join("\n  ")}`);
  }
  return getAllRoutes().filter((r) => r.prerender).length;
}
