#!/usr/bin/env node
/**
 * Post-build sitemap splitter (Node version - works in Cloudflare Pages build env)
 * Run AFTER `next build`. Splits out/sitemap.xml into:
 *   out/sitemap-tests.xml, out/sitemap-results.xml, out/sitemap-articles.xml,
 *   out/sitemap-static-pages.xml + out/sitemap-index.xml
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "out");
const SRC = path.join(OUT, "sitemap.xml");

if (!fs.existsSync(SRC)) {
  console.error("split-sitemap: out/sitemap.xml not found - did build run?");
  process.exit(0); // non-fatal, don't break build
}

const xml = fs.readFileSync(SRC, "utf-8");
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
console.log(`split-sitemap: ${urls.length} URLs`);

const inSet = (u, re) => re.test(u);
const testsRe = /^https:\/\/sbtibee\.com\/(mbti(\/test(-\w+)?)?|sbti(\/test)?|enneagram|pet-sbti|love-language|attachment|inner-child|dark-triad|aura|ai-vs|types\/(mbti|sbti|enneagram))\/?$/;
const resultsRe = /^https:\/\/sbtibee\.com\/(mbti\/(result|types)\/|sbti\/result\/|enneagram\/result\/|pet-sbti\/result\/|love-language\/result\/|attachment\/result\/|inner-child\/result\/|dark-triad\/result\/|aura\/result\/|ai-vs\/result\/)/;
const articlesRe = /\/blog/;

const tests = urls.filter((u) => inSet(u, testsRe));
const results = urls.filter((u) => inSet(u, resultsRe));
const articles = urls.filter((u) => inSet(u, articlesRe));
const staticPages = urls.filter((u) => !inSet(u, testsRe) && !inSet(u, resultsRe) && !inSet(u, articlesRe));

function writeSitemap(name, list) {
  if (!list.length) return;
  const body = list.map((u) => `  <url><loc>${u}</loc></url>`).join("\n");
  fs.writeFileSync(path.join(OUT, name), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
  console.log(`split-sitemap: ${name} -> ${list.length}`);
}

writeSitemap("sitemap-tests.xml", tests);
writeSitemap("sitemap-results.xml", results);
writeSitemap("sitemap-articles.xml", articles);
writeSitemap("sitemap-static-pages.xml", staticPages);

const index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>https://sbtibee.com/sitemap-tests.xml</loc></sitemap>\n  <sitemap><loc>https://sbtibee.com/sitemap-results.xml</loc></sitemap>\n  <sitemap><loc>https://sbtibee.com/sitemap-articles.xml</loc></sitemap>\n  <sitemap><loc>https://sbtibee.com/sitemap-static-pages.xml</loc></sitemap>\n</sitemapindex>\n`;
fs.writeFileSync(path.join(OUT, "sitemap-index.xml"), index);
console.log("split-sitemap: sitemap-index.xml -> 4 children");
console.log("split-sitemap: DONE");
