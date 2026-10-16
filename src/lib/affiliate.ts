/** Build an outbound URL with affiliate/ref params ready for later partners. */
export function affiliateUrl(website: string, affiliateParam?: string): string {
  if (!affiliateParam) return website;
  try {
    const url = new URL(website);
    const [key, value] = affiliateParam.includes("=")
      ? affiliateParam.split("=", 2)
      : ["ref", affiliateParam];
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return website;
  }
}
