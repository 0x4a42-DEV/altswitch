export type PricingVibe = "free" | "freemium" | "paid" | "oss";

export interface Alternative {
  slug: string;
  name: string;
  oneLiner: string;
  pricing: PricingVibe;
  website: string;
  affiliateParam?: string;
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
