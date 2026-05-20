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

const BASE = "https://sbtibee.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },

    // Test index pages
    { url: `${BASE}/mbti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sbti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/enneagram`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pet-sbti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/love-language`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/attachment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/inner-child`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/dark-triad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/aura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-vs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Type index pages
    { url: `${BASE}/types/mbti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/types/sbti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/types/enneagram`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  // MBTI 16 types
  Object.keys(mbtiTypes).forEach((type) => {
    entries.push({ url: `${BASE}/mbti/result/${type}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // SBTI 27 types
  sbtiTypes.forEach((t) => {
    entries.push({ url: `${BASE}/sbti/result/${t.id}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Enneagram 9 types
  Object.keys(enneagramTypes).forEach((type) => {
    entries.push({ url: `${BASE}/enneagram/result/${type}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Pet SBTI 12 types
  petSbtiTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/pet-sbti/result/${i}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Love Language 5 types
  Object.keys(loveLanguageTypes).forEach((key) => {
    entries.push({ url: `${BASE}/love-language/result/${key}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Attachment 4 types
  Object.keys(attachmentTypes).forEach((key) => {
    entries.push({ url: `${BASE}/attachment/result/${key}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Inner Child 5 types
  Object.keys(innerChildTypes).forEach((key) => {
    entries.push({ url: `${BASE}/inner-child/result/${key}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Dark Triad 6 types
  darkTriadTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/dark-triad/result/${i}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  // Aura 7 types
  auraTypes.forEach((_, i) => {
    entries.push({ url: `${BASE}/aura/result/${i}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
  });

  return entries;
}