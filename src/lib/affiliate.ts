import {
  CAL_COM_REFERRAL_URL,
  DIGITALOCEAN_REFERRAL_URL,
  MAKE_REFERRAL_URL,
  RAILWAY_REFERRAL_URL,
  TALLY_REFERRAL_URL,
  MAILERLITE_REFERRAL_URL,
} from "@/lib/affiliates";

/** Full referral URLs keyed by alternative slug (preferred when present). */
const REFERRAL_BY_SLUG: Record<string, string> = {
  digitalocean: DIGITALOCEAN_REFERRAL_URL,
  "digitalocean-app-platform": DIGITALOCEAN_REFERRAL_URL,
  railway: RAILWAY_REFERRAL_URL,
  make: MAKE_REFERRAL_URL,
  "cal-com": CAL_COM_REFERRAL_URL,
  tally: TALLY_REFERRAL_URL,
  mailerlite: MAILERLITE_REFERRAL_URL,
};

/** Full referral URLs keyed by website hostname. */
const REFERRAL_BY_HOST: Record<string, string> = {
  "digitalocean.com": DIGITALOCEAN_REFERRAL_URL,
  "www.digitalocean.com": DIGITALOCEAN_REFERRAL_URL,
  "m.do.co": DIGITALOCEAN_REFERRAL_URL,
  "railway.com": RAILWAY_REFERRAL_URL,
  "www.railway.com": RAILWAY_REFERRAL_URL,
  "make.com": MAKE_REFERRAL_URL,
  "www.make.com": MAKE_REFERRAL_URL,
  "cal.com": CAL_COM_REFERRAL_URL,
  "www.cal.com": CAL_COM_REFERRAL_URL,
  "refer.cal.com": CAL_COM_REFERRAL_URL,
  "tally.so": TALLY_REFERRAL_URL,
  "www.tally.so": TALLY_REFERRAL_URL,
  "tally.cello.so": TALLY_REFERRAL_URL,
  "mailerlite.com": MAILERLITE_REFERRAL_URL,
  "www.mailerlite.com": MAILERLITE_REFERRAL_URL,
};

function isDigitalOceanName(name?: string): boolean {
  return name?.trim().toLowerCase() === "digitalocean";
}

function isRailwayName(name?: string): boolean {
  return name?.trim().toLowerCase() === "railway";
}

function isMakeName(name?: string): boolean {
  return name?.trim().toLowerCase() === "make";
}

function isCalComName(name?: string): boolean {
  const n = name?.trim().toLowerCase();
  return n === "cal.com" || n === "calcom";
}

function isTallyName(name?: string): boolean {
  return name?.trim().toLowerCase() === "tally";
}

function isMailerLiteName(name?: string): boolean {
  return name?.trim().toLowerCase() === "mailerlite";
}

function referralOverride(
  website: string,
  meta?: { slug?: string; name?: string },
): string | undefined {
  const slug = meta?.slug?.trim().toLowerCase();
  if (slug && REFERRAL_BY_SLUG[slug]) return REFERRAL_BY_SLUG[slug];
  if (isDigitalOceanName(meta?.name)) return DIGITALOCEAN_REFERRAL_URL;
  if (isRailwayName(meta?.name)) return RAILWAY_REFERRAL_URL;
  if (isMakeName(meta?.name)) return MAKE_REFERRAL_URL;
  if (isCalComName(meta?.name)) return CAL_COM_REFERRAL_URL;
  if (isTallyName(meta?.name)) return TALLY_REFERRAL_URL;
  if (isMailerLiteName(meta?.name)) return MAILERLITE_REFERRAL_URL;

  try {
    const host = new URL(website).hostname.toLowerCase();
    if (REFERRAL_BY_HOST[host]) return REFERRAL_BY_HOST[host];
    if (host === "digitalocean.com" || host.endsWith(".digitalocean.com")) {
      return DIGITALOCEAN_REFERRAL_URL;
    }
    if (host === "railway.com" || host.endsWith(".railway.com")) {
      return RAILWAY_REFERRAL_URL;
    }
    if (host === "make.com" || host.endsWith(".make.com")) {
      return MAKE_REFERRAL_URL;
    }
    if (host === "cal.com" || host.endsWith(".cal.com")) {
      return CAL_COM_REFERRAL_URL;
    }
    if (host === "tally.so" || host.endsWith(".tally.so")) {
      return TALLY_REFERRAL_URL;
    }
    if (host === "cello.so" || host.endsWith(".cello.so")) {
      return TALLY_REFERRAL_URL;
    }
    if (host === "mailerlite.com" || host.endsWith(".mailerlite.com")) {
      return MAILERLITE_REFERRAL_URL;
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
