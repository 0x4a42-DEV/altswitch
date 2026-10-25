import type { Alternative, Tool } from "./types";
import { getAllTools, getToolBySlug, pricingLabel } from "./data";

export type FaqItem = { question: string; answer: string };

/**
 * Lowercase the first letter for mid-sentence use, unless the first word is an
 * acronym or brand-style word (second character uppercase, e.g. "SMBs", or any
 * later uppercase letter in the first word, e.g. "SaaS").
 */
function lowerFirst(text: string): string {
  const firstWord = text.split(/\s/, 1)[0] ?? "";
  if (/[A-Z]/.test(firstWord.slice(1))) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

const PRICING_RANK: Record<string, number> = {
  free: 0,
  oss: 1,
  freemium: 2,
  paid: 3,
};

/** One-line tradeoff from existing pros/cons — no invented claims. */
export function tradeoffLine(alt: Alternative): string {
  const pro = alt.pros[0]?.replace(/\.$/, "") ?? alt.oneLiner;
  const con = alt.cons[0]?.replace(/\.$/, "") ?? "smaller ecosystem than the current market leader";
  return `${pro}; tradeoff: ${lowerFirst(con)}.`;
}

/** Map an alternative to a parent-tool page when we cover it. */
export function internalToolSlugForAlt(alt: Alternative): string | undefined {
  if (getToolBySlug(alt.slug)) return alt.slug;
  const name = alt.name.toLowerCase().replace(/\.com$/, "");
  const hit = getAllTools().find(
    (t) =>
      t.name.toLowerCase() === name ||
      t.name.toLowerCase() === alt.name.toLowerCase() ||
      t.slug === name.replace(/\s+/g, "-")
  );
  return hit?.slug;
}

export function relatedTools(tool: Tool, limit = 6): Tool[] {
  return getAllTools()
    .filter((t) => t.slug !== tool.slug && t.category === tool.category)
    .slice(0, limit);
}

/** Other parent tools that list one of this page's alts (cross-links). */
export function toolsSharingAlternatives(tool: Tool, limit = 4): Tool[] {
  const altKeys = new Set(
    tool.alternatives.flatMap((a) => [a.slug, a.name.toLowerCase()])
  );
  return getAllTools()
    .filter((t) => {
      if (t.slug === tool.slug) return false;
      return t.alternatives.some(
        (a) => altKeys.has(a.slug) || altKeys.has(a.name.toLowerCase())
      );
    })
    .slice(0, limit);
}

export function buildFaqs(tool: Tool): FaqItem[] {
  const alts = tool.alternatives;
  const faqs: FaqItem[] = [];

  const freeOrOss = alts.filter(
    (a) => a.pricing === "free" || a.pricing === "oss"
  );
  const freemium = alts.filter((a) => a.pricing === "freemium");
  const byCheapest = [...alts].sort(
    (a, b) =>
      (PRICING_RANK[a.pricing] ?? 9) - (PRICING_RANK[b.pricing] ?? 9)
  );
  const cheapest = byCheapest[0];
  const closest = alts[0];

  // GSC-style: "intercom alternative", "best intercom alternatives", "zendesk alternative"
  if (closest) {
    faqs.push({
      question: `What is a good ${tool.name} alternative?`,
      answer: `${closest.name} is listed first as a strong starting point: ${closest.oneLiner} Best for: ${closest.bestFor} Tradeoff: ${tradeoffLine(closest)} Always verify current pricing on their site.`,
    });
  }

  // GSC-style: "open source zendesk alternative" / free OSS intent
  if (freeOrOss.length > 0) {
    const top = freeOrOss[0];
    const others = freeOrOss
      .slice(1, 3)
      .map((a) => a.name)
      .join(", ");
    const ossOnly = freeOrOss.filter((a) => a.pricing === "oss");
    if (ossOnly.length > 0) {
      faqs.push({
        question: `What is an open-source ${tool.name} alternative?`,
        answer: `${ossOnly[0].name} is the open-source pick we lead with: ${ossOnly[0].oneLiner} Best for: ${ossOnly[0].bestFor}${
          ossOnly.length > 1
            ? ` Also open source on this page: ${ossOnly
                .slice(1, 3)
                .map((a) => a.name)
                .join(", ")}.`
            : ""
        } Pricing notes: ${ossOnly[0].pricingNotes}`,
      });
    } else {
      faqs.push({
        question: `What is the best free or open-source ${tool.name} alternative?`,
        answer: `${top.name} stands out among free/OSS options: ${top.oneLiner} Best for: ${top.bestFor}${
          others ? ` Also worth a look: ${others}.` : ""
        } Pricing notes: ${top.pricingNotes}`,
      });
    }
  } else if (freemium.length > 0) {
    const top = freemium[0];
    faqs.push({
      question: `Is there a free ${tool.name} alternative?`,
      answer: `We don’t list a fully free/OSS swap here. Closest freemium pick: ${top.name} — ${top.oneLiner} ${top.pricingNotes}`,
    });
  }

  if (freeOrOss.some((a) => a.pricing === "oss")) {
    const selfHost = freeOrOss.filter((a) => a.pricing === "oss");
    faqs.push({
      question: `Can I self-host a ${tool.name} alternative?`,
      answer: `Yes. Open-source options on this page: ${selfHost
        .map((a) => a.name)
        .join(", ")}. ${selfHost[0].pricingNotes} Self-hosting means you run ops; hosted ${tool.name} may still win on polish and support.`,
    });
  }

  if (cheapest) {
    faqs.push({
      question: `What’s a lower-cost ${tool.name} alternative?`,
      answer: `Based on listed pricing models (not live quotes): ${cheapest.name} (${pricingLabel(
        cheapest.pricing
      )}). ${cheapest.pricingNotes} Always check current plans on their site before switching.`,
    });
  }

  faqs.push({
    question: `When should I stay on ${tool.name}?`,
    answer: `Stay if your team already depends on ${tool.name}’s ecosystem, integrations, or support model, and switching cost outweighs the gains. ${tool.description} Alternatives below are better when you want a narrower tool, more control, or a different pricing model.`,
  });

  const switchProfiles = alts
    .slice(0, 3)
    .map((a) => `${a.name} if ${lowerFirst(a.bestFor).replace(/\.$/, "")}`)
    .join("; ");
  faqs.push({
    question: `Who should switch from ${tool.name}?`,
    answer: `People who outgrew (or never needed) the full ${tool.name} stack. Quick guide: ${switchProfiles}. Match the “Best for” line on each card before migrating data.`,
  });

  return faqs.slice(0, 6);
}

export function faqJsonLd(tool: Tool, faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function alternativesItemListJsonLd(tool: Tool, siteUrl: string) {
  return {
    "@type": "ItemList",
    name: `Alternatives to ${tool.name}`,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: tool.alternatives.length,
    itemListElement: tool.alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `${siteUrl}/alternatives/${tool.slug}#alt-${alt.slug}`,
      description: alt.oneLiner,
    })),
  };
}

export function pageJsonLd(tool: Tool, faqs: FaqItem[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [faqJsonLd(tool, faqs), alternativesItemListJsonLd(tool, siteUrl)],
  };
}
