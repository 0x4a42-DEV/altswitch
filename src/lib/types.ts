export type PricingVibe = "free" | "freemium" | "paid" | "oss";

export interface Alternative {
  slug: string;
  name: string;
  oneLiner: string;
  pricing: PricingVibe;
  website: string;
  affiliateParam?: string;
  /** Short honest bullets */
  pros: string[];
  cons: string[];
  /** Who should pick this */
  bestFor: string;
  /** Plain-language pricing notes (not a live price crawl) */
  pricingNotes: string;
}

export interface Tool {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  website: string;
  featured: boolean;
  alternatives: Alternative[];
  /** Optional SEO overrides (fall back to generated defaults) */
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  /** Extra intro paragraph under the description */
  intro?: string;
  /** Scannable "job → pick" rows under the intro */
  quickPicks?: { useCase: string; pick: string }[];
  /** Optional highlighted section, e.g. "Open-source X alternatives" */
  ossSection?: { heading: string; intro: string; slugs: string[] };
}

export interface Subscriber {
  email: string;
  source?: string;
  toolSlug?: string;
  createdAt: string;
}
