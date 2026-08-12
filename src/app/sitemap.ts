import { MetadataRoute } from "next";
import { mbtiTypes } from "@/data/mbti";
import { sbtiTypes } from "@/data/sbti";
import { enneagramTypes } from "@/data/enneagram";
import { petSbtiTypes } from "@/data/pet-sbti";
import { loveLanguageTypes } from "@/data/love-language";
import { attachmentTypes } from "@/data/attachment";
import { innerChildTypes } from "@/data/inner-child";
import { darkTriadTypes } from "@/data/dark-triad";
import { auraTypes } from "@/data/aura";
import { blogPosts } from "@/data/blog";

const BASE = "https://sbtibee.com";
const now = new Date();

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // Home
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Test index pages
    { url: `${BASE}/mbti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/mbti/test`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sbti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/enneagram`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pet-sbti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/love-language`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/attachment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/inner-child`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/dark-triad`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/aura`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-vs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Type gallery pages
    { url: `${BASE}/types/mbti`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/types/sbti`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/types/enneagram`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // MBTI: 16 types → result pages + type detail pages
  Object.keys(mbtiTypes).forEach((code) => {
    entries.push({ url: `${BASE}/mbti/result/${code}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
    entries.push({ url: `${BASE}/mbti/types/${code}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // SBTI: 27 types
  sbtiTypes.forEach((t) => {
    entries.push({ url: `${BASE}/sbti/result/${t.code}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Enneagram: 9 types
  Object.keys(enneagramTypes).forEach((type) => {
    entries.push({ url: `${BASE}/enneagram/result/${type}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Pet SBTI: 12 types
  petSbtiTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/pet-sbti/result/${i}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Love Language: 5 types
  Object.keys(loveLanguageTypes).forEach((key) => {
    entries.push({ url: `${BASE}/love-language/result/${key}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Attachment: 4 types
  Object.keys(attachmentTypes).forEach((key) => {
    entries.push({ url: `${BASE}/attachment/result/${key}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Inner Child: 5 types
  Object.keys(innerChildTypes).forEach((key) => {
    entries.push({ url: `${BASE}/inner-child/result/${key}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Dark Triad: 6 types
  darkTriadTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/dark-triad/result/${i}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Aura: 7 types
  auraTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/aura/result/${i}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  });

  // Blog posts (weekly updated)
  blogPosts.forEach((p) => {
    entries.push({ url: `${BASE}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 });
  });

  // Blog index
  entries.push({ url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 });

  return entries;
}
