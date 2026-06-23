import { test } from "node:test";
import assert from "node:assert/strict";
import { getAllRoutes } from "./routes.mjs";
import { schemaFor } from "./schema.mjs";

const routeFor = (path) => getAllRoutes().find((r) => r.path === path);
const types = (schema) => schema["@graph"].map((node) => node["@type"]);

test("every route schema has Organization and WebSite", () => {
  for (const route of getAllRoutes()) {
    const t = types(schemaFor(route));
    assert.ok(t.includes("Organization"), `no Organization for ${route.path}`);
    assert.ok(t.includes("WebSite"), `no WebSite for ${route.path}`);
    assert.ok(t.includes("WebPage"), `no WebPage for ${route.path}`);
  }
});

test("no route emits SoftwareApplication or Offer", () => {
  for (const route of getAllRoutes()) {
    const t = types(schemaFor(route));
    assert.ok(!t.includes("SoftwareApplication"), `SoftwareApplication on ${route.path}`);
    assert.ok(!t.includes("Offer"), `Offer on ${route.path}`);
  }
});

test("blog posts emit Article with required fields", () => {
  const route = routeFor("/blog/ckyc-vs-ekyc");
  const article = schemaFor(route)["@graph"].find((n) => n["@type"] === "Article");
  assert.ok(article);
  assert.ok(article.headline && article.headline.length <= 110);
  assert.ok(article.image);
  assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(article.datePublished));
  assert.ok(article.author);
  assert.ok(article.publisher);
});

test("product and solution pages emit Service", () => {
  for (const path of ["/products/CKYC", "/solutions/insurance"]) {
    const t = types(schemaFor(routeFor(path)));
    assert.ok(t.includes("Service"), `no Service for ${path}`);
  }
});

test("home emits a FAQPage with questions", () => {
  const faq = schemaFor(routeFor("/"))["@graph"].find((n) => n["@type"] === "FAQPage");
  assert.ok(faq);
  assert.ok(faq.mainEntity.length >= 10);
  assert.equal(faq.mainEntity[0]["@type"], "Question");
  assert.ok(faq.mainEntity[0].acceptedAnswer.text);
});

test("non-home pages emit a BreadcrumbList, home does not", () => {
  assert.ok(types(schemaFor(routeFor("/products/CKYC"))).includes("BreadcrumbList"));
  assert.ok(!types(schemaFor(routeFor("/"))).includes("BreadcrumbList"));
});

test("schema serializes without raw script terminators", () => {
  for (const route of getAllRoutes()) {
    const json = JSON.stringify(schemaFor(route));
    assert.doesNotMatch(json, /<\/script>/i, `unsafe </script> in ${route.path}`);
  }
});
