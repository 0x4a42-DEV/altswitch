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
  /** Plain-language pricing vibe (not a live price crawl) */
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
}

export interface Subscriber {
  email: string;
  source?: string;
  toolSlug?: string;
  createdAt: string;
}
