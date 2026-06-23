import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getAllRoutes,
  getBlogRoutes,
  withTrailingSlash,
  canonicalFor,
  SITE_URL,
} from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogSource = readFileSync(
  join(__dirname, "..", "..", "src", "data", "blogPosts.ts"),
  "utf8"
);

test("withTrailingSlash normalizes paths", () => {
  assert.equal(withTrailingSlash("/"), "/");
  assert.equal(withTrailingSlash("/products/CKYC"), "/products/CKYC/");
  assert.equal(withTrailingSlash("/products/CKYC/"), "/products/CKYC/");
});

test("canonicalFor builds trailing-slash absolute URLs", () => {
  assert.equal(canonicalFor("/products/CKYC"), `${SITE_URL}/products/CKYC/`);
  assert.equal(canonicalFor("/"), `${SITE_URL}/`);
});

test("all nine solution pages are present", () => {
  const paths = getAllRoutes().map((r) => r.path);
  for (const slug of [
    "fintech-and-lending",
    "banking-and-nbfcs",
    "insurance",
    "crypto-and-web3",
    "marketplaces",
    "social-and-community-platforms",
    "gig-economy",
    "background-verification",
    "merchant-onboarding-kyb",
  ]) {
    assert.ok(paths.includes(`/solutions/${slug}`), `missing /solutions/${slug}`);
  }
});

test("blog routes match every post in blogPosts.ts", () => {
  const sourceSlugCount = (blogSource.match(/^\s*slug:\s*"/gm) || []).length;
  const blogRoutes = getBlogRoutes();
  assert.equal(blogRoutes.length, sourceSlugCount);
  const paths = blogRoutes.map((r) => r.path);
  assert.ok(paths.includes("/blog/loan-fraud-india-identity-checks"));
  assert.ok(paths.includes("/blog/payment-identity-orchestration-global-expansion"));
});

test("blog routes are articles with required meta", () => {
  for (const r of getBlogRoutes()) {
    assert.equal(r.ogType, "article");
    assert.ok(r.title && r.title.length > 0);
    assert.ok(r.description && r.description.length > 0);
    assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(r.lastmod));
  }
});

test("per-post ogImage is parsed from blogPosts.ts", () => {
  const addressPost = getBlogRoutes().find(
    (r) => r.path === "/blog/kyc-address-verification-digipin-dhruva"
  );
  assert.ok(addressPost.ogImage);
  assert.ok(addressPost.ogImage.startsWith("https://idto.ai/blog/"));
});

test("contact route is deduplicated to /contact-us", () => {
  const paths = getAllRoutes().map((r) => r.path);
  assert.ok(paths.includes("/contact-us"));
  assert.ok(!paths.includes("/contact_us"));
});

test("every route carries title and description", () => {
  for (const r of getAllRoutes()) {
    assert.ok(r.title, `no title for ${r.path}`);
    assert.ok(r.description, `no description for ${r.path}`);
  }
});

test("home is prerendered with content", () => {
  const home = getAllRoutes().find((r) => r.path === "/");
  assert.ok(home);
  assert.equal(home.prerender, true);
  assert.ok(home.title);
  assert.ok(home.description);
});

test("every route title is within 30-60 chars", () => {
  for (const r of getAllRoutes()) {
    assert.ok(
      r.title.length >= 30 && r.title.length <= 60,
      `title length ${r.title.length} out of bounds for ${r.path}: ${r.title}`
    );
  }
});

test("every route description is within 70-160 chars", () => {
  for (const r of getAllRoutes()) {
    assert.ok(
      r.description.length >= 70 && r.description.length <= 160,
      `description length ${r.description.length} out of bounds for ${r.path}`
    );
  }
});
