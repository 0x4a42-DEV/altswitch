import toolsData from "@/data/tools.json";
import type { Tool, Alternative } from "./types";

const tools = toolsData as Tool[];

export function getAllTools(): Tool[] {
  return tools;
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return tools.map((t) => t.slug);
}

export function searchTools(query: string): Tool[] {
  const q = query.trim().toLowerCase();
  if (!q) return tools;
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.slug.includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.alternatives.some(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.oneLiner.toLowerCase().includes(q)
      )
  );
}

export function getAllAlternatives(): (Alternative & { toolSlug: string; toolName: string })[] {
  return tools.flatMap((t) =>
    t.alternatives.map((a) => ({ ...a, toolSlug: t.slug, toolName: t.name }))
  );
}

export function pricingLabel(pricing: string): string {
  switch (pricing) {
    case "free":
      return "Free";
    case "freemium":
      return "Freemium";
    case "paid":
      return "Paid";
    case "oss":
      return "Open Source";
    default:
      return pricing;
  }
}
