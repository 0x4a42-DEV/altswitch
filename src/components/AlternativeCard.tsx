import type { Alternative } from "@/lib/types";
import { pricingLabel } from "@/lib/data";
import { affiliateUrl } from "@/lib/affiliate";

const pricingStyles: Record<string, string> = {
  free: "bg-emerald-50 text-emerald-700",
  freemium: "bg-sky-50 text-sky-700",
  paid: "bg-amber-50 text-amber-800",
  oss: "bg-violet-50 text-violet-700",
};

export default function AlternativeCard({ alt }: { alt: Alternative }) {
  const href = affiliateUrl(alt.website, alt.affiliateParam);
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">{alt.name}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            pricingStyles[alt.pricing] || "bg-zinc-100 text-zinc-600"
          }`}
        >
          {pricingLabel(alt.pricing)}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm text-zinc-600">{alt.oneLiner}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        Visit website →
      </a>
    </article>
  );
}
