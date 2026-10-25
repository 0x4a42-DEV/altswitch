import type { MetadataRoute } from "next";
import { getAllToolSlugs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://altswitch.xyz").replace(/\/$/, "");
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
    ...toolEntries,
  ];
}
