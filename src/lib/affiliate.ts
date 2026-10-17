import {
  DIGITALOCEAN_REFERRAL_URL,
  RAILWAY_REFERRAL_URL,
} from "@/lib/affiliates";

/** Full referral URLs keyed by alternative slug (preferred when present). */
const REFERRAL_BY_SLUG: Record<string, string> = {
  digitalocean: DIGITALOCEAN_REFERRAL_URL,
  "digitalocean-app-platform": DIGITALOCEAN_REFERRAL_URL,
  railway: RAILWAY_REFERRAL_URL,
};

/** Full referral URLs keyed by website hostname. */
const REFERRAL_BY_HOST: Record<string, string> = {
  "digitalocean.com": DIGITALOCEAN_REFERRAL_URL,
  "www.digitalocean.com": DIGITALOCEAN_REFERRAL_URL,
  "m.do.co": DIGITALOCEAN_REFERRAL_URL,
  "railway.com": RAILWAY_REFERRAL_URL,
  "www.railway.com": RAILWAY_REFERRAL_URL,
};

function isDigitalOceanName(name?: string): boolean {
  return name?.trim().toLowerCase() === "digitalocean";
}

function isRailwayName(name?: string): boolean {
  return name?.trim().toLowerCase() === "railway";
}

function referralOverride(
  website: string,
  meta?: { slug?: string; name?: string },
): string | undefined {
  const slug = meta?.slug?.trim().toLowerCase();
  if (slug && REFERRAL_BY_SLUG[slug]) return REFERRAL_BY_SLUG[slug];
  if (isDigitalOceanName(meta?.name)) return DIGITALOCEAN_REFERRAL_URL;
  if (isRailwayName(meta?.name)) return RAILWAY_REFERRAL_URL;

  try {
    const host = new URL(website).hostname.toLowerCase();
    if (REFERRAL_BY_HOST[host]) return REFERRAL_BY_HOST[host];
    if (host === "digitalocean.com" || host.endsWith(".digitalocean.com")) {
      return DIGITALOCEAN_REFERRAL_URL;
    }
    if (host === "railway.com" || host.endsWith(".railway.com")) {
      return RAILWAY_REFERRAL_URL;
    }
  } catch {
    /* ignore invalid website */
  }
  return undefined;
}

/** Build an outbound URL with real referral overrides, else optional affiliate params. */
export function affiliateUrl(
  website: string,
  affiliateParam?: string,
  meta?: { slug?: string; name?: string },
): string {
  const override = referralOverride(website, meta);
  if (override) return override;

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
