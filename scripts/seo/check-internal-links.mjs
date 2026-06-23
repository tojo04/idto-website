import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const ASSET_EXT = /\.(png|jpe?g|svg|webp|avif|gif|ico|txt|xml|json|pdf|css|js|mjs|map)$/i;
const STRING_LINK = /\b(?:href|to)\s*[:=]\s*"(\/[^"]*)"/g;
const TEMPLATE_LINK = /\b(?:href|to)=\{`(\/[^`]*)`\}/g;

const isViolation = (path) => {
  if (path === "/" || path.startsWith("//")) return false;
  if (path.includes("/contact_us")) return "underscore path (use /contact-us/)";
  const [pathOnly] = path.split(/[?#]/);
  if (ASSET_EXT.test(pathOnly)) return false;
  if (path.includes("#") || path.includes("?")) return false;
  if (!path.endsWith("/")) return "missing trailing slash";
  return false;
};

const files = execSync(
  "grep -rlE '(href|to)\\s*[:=]\\s*\"/|(href|to)=\\{`/' src --include=*.tsx --include=*.ts",
  { encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

const violations = [];
for (const file of files) {
  const src = readFileSync(file, "utf8");
  for (const re of [STRING_LINK, TEMPLATE_LINK]) {
    for (const match of src.matchAll(re)) {
      const reason = isViolation(match[1]);
      if (reason) violations.push(`${file}: "${match[1]}" — ${reason}`);
    }
  }
}

if (violations.length) {
  console.error(
    `check-internal-links: ${violations.length} violation(s) — internal links must be canonical (trailing slash, /contact-us):`
  );
  for (const v of violations) console.error(`  ${v}`);
  process.exit(1);
}
console.log(`check-internal-links: OK (${files.length} files scanned)`);
