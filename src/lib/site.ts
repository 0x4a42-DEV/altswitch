/** Public origin used for canonicals, sitemap, and robots. Apex, never www. */
export function siteOrigin(): string {
  const raw = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://altswitch.xyz"
  ).replace(/\/$/, "");
  try {
    const url = new URL(raw);
    if (url.hostname.toLowerCase() === "www.altswitch.xyz") {
      url.hostname = "altswitch.xyz";
      url.protocol = "https:";
    }
    return url.origin;
  } catch {
    return "https://altswitch.xyz";
  }
}
