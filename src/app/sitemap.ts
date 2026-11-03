import type { MetadataRoute } from "next";
import { getAllToolSlugs } from "@/lib/data";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteOrigin();
  const now = new Date();
  const toolEntries = getAllToolSlugs().map((slug) => ({
    url: `${base}/alternatives/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/disclosure`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...toolEntries,
  ];
}
