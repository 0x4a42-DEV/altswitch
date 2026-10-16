import type { Alternative } from "@/lib/types";
import { pricingLabel } from "@/lib/data";
import { affiliateUrl } from "@/lib/affiliate";
import {
  DIGITALOCEAN_REFERRAL_URL,
  RAILWAY_REFERRAL_URL,
} from "@/lib/affiliates";

const pricingStyles: Record<string, string> = {
  free: "bg-emerald-50 text-emerald-700",
  freemium: "bg-sky-50 text-sky-700",
  paid: "bg-amber-50 text-amber-800",
  oss: "bg-violet-50 text-violet-700",
};

export default function AlternativeCard({ alt }: { alt: Alternative }) {
  const href = affiliateUrl(alt.website, alt.affiliateParam, {
    slug: alt.slug,
    name: alt.name,
  });
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
      <p className="mt-2 text-sm text-zinc-600">{alt.oneLiner}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Pros
          </p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700">
            {alt.pros.map((p) => (
              <li key={p} className="flex gap-1.5">
                <span className="text-emerald-600" aria-hidden>
                  +
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            Cons
          </p>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700">
            {alt.cons.map((c) => (
              <li key={c} className="flex gap-1.5">
                <span className="text-rose-500" aria-hidden>
                  −
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-700">
        <span className="font-medium text-zinc-900">Best for: </span>
        {alt.bestFor}
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        <span className="font-medium text-zinc-700">Pricing notes: </span>
        {alt.pricingNotes}
      </p>

      {alt.pricing === "oss" && (
        <p className="mt-3 rounded-lg bg-zinc-50 px-3 py-2 text-xs text-zinc-600">
          Self-host tip: spin up containers on{" "}
          <a
            href={RAILWAY_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-indigo-600 hover:underline"
          >
            Railway
          </a>{" "}
          or{" "}
          <a
            href={DIGITALOCEAN_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-indigo-600 hover:underline"
          >
            DigitalOcean
          </a>{" "}
          (our referral links).
        </p>
      )}

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
