#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { prerenderRoutes } from "./seo/prerender.mjs";
import { generateSitemap } from "./seo/sitemap.mjs";
import { generateLlms } from "./seo/llms.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

let template;
try {
  template = readFileSync(join(DIST, "index.html"), "utf8");
} catch {
  console.error("dist/index.html not found — run vite build first");
  process.exit(1);
}

const prerendered = prerenderRoutes(DIST, template);
const sitemapUrls = generateSitemap(DIST);
const llmsEntries = generateLlms(DIST);

console.log(
  `seo-build: ${prerendered} routes prerendered, ${sitemapUrls} sitemap URLs, ${llmsEntries} llms.txt entries`
);
