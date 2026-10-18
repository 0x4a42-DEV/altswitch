import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllToolSlugs, getToolBySlug, pricingLabel } from "@/lib/data";
import {
  buildFaqs,
  pageJsonLd,
  relatedTools,
  toolsSharingAlternatives,
  tradeoffLine,
  internalToolSlugForAlt,
} from "@/lib/seo";
import AlternativeCard from "@/components/AlternativeCard";
import NewsletterForm from "@/components/NewsletterForm";
import ToolCard from "@/components/ToolCard";

type Props = { params: Promise<{ slug: string }> };

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://altswitch.xyz";

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Not found" };

  const title = `Best ${tool.name} alternatives (2026)`;
  const description = `${tool.alternatives.length} SaaS and open-source alternatives to ${tool.name}. ${tool.tagline}`;
  const path = `/alternatives/${tool.slug}`;
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `Best ${tool.name} alternatives | AltSwitch`,
      description: tool.description,
      url,
      type: "website",
      siteName: "AltSwitch",
    },
    twitter: {
      card: "summary",
      title: `Best ${tool.name} alternatives | AltSwitch`,
      description,
    },
  };
}

export default async function ToolAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = relatedTools(tool, 6);
  const alsoCompare = toolsSharingAlternatives(tool, 4);
  const faqs = buildFaqs(tool);
  const jsonLd = pageJsonLd(tool, faqs, siteUrl);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <p className="text-sm text-zinc-500">
            <Link href="/" className="hover:text-indigo-600">
              Directory
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-800">{tool.name}</span>
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Best {tool.name} alternatives
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">
            {tool.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700">
              {tool.category}
            </span>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 hover:bg-indigo-100"
            >
              Official site →
            </a>
            <a
              href="#compare"
              className="rounded-full bg-zinc-50 px-3 py-1 text-zinc-700 hover:bg-zinc-100"
            >
              Compare
            </a>
            <a
              href="#faq"
              className="rounded-full bg-zinc-50 px-3 py-1 text-zinc-700 hover:bg-zinc-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section
        id="compare"
        className="mx-auto max-w-5xl scroll-mt-24 px-4 py-12"
      >
        <h2 className="text-xl font-semibold text-zinc-900">
          {tool.name} vs alternatives
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Approximate pricing models from our notes — always verify on the
          vendor site. Jump to a card for pros and cons.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-4 py-3">Tool</th>
                <th className="px-4 py-3">Pricing</th>
                <th className="px-4 py-3">Best for</th>
                <th className="px-4 py-3">Tradeoff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr className="bg-indigo-50/40">
                <td className="px-4 py-3 font-medium text-zinc-900">
                  {tool.name}
                  <span className="ml-2 text-xs font-normal text-zinc-500">
                    (current)
                  </span>
                </td>
                <td className="px-4 py-3 text-zinc-600">See official site</td>
                <td className="px-4 py-3 text-zinc-600">{tool.tagline}</td>
                <td className="px-4 py-3 text-zinc-600">
                  Strongest ecosystem; switching cost is the main downside.
                </td>
              </tr>
              {tool.alternatives.map((alt) => {
                const internal = internalToolSlugForAlt(alt);
                return (
                  <tr key={alt.slug} className="hover:bg-zinc-50">
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      <a
                        href={`#alt-${alt.slug}`}
                        className="hover:text-indigo-600"
                      >
                        {alt.name}
                      </a>
                      {internal && (
                        <>
                          {" "}
                          <Link
                            href={`/alternatives/${internal}`}
                            className="text-xs font-normal text-indigo-600 hover:underline"
                          >
                            page
                          </Link>
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-zinc-600">
                      {pricingLabel(alt.pricing)}
                    </td>
                    <td className="px-4 py-3 text-zinc-600">{alt.bestFor}</td>
                    <td className="px-4 py-3 text-zinc-600">
                      {tradeoffLine(alt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="text-xl font-semibold text-zinc-900">
          {tool.alternatives.length} alternatives
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tool.alternatives.map((alt) => (
            <AlternativeCard key={alt.slug} alt={alt} />
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-12">
        <h2 className="text-xl font-semibold text-zinc-900">
          FAQ: switching from {tool.name}
        </h2>
        <dl className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <dt className="font-medium text-zinc-900">{f.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <NewsletterForm source="tool" toolSlug={tool.slug} compact />
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-12">
          <h2 className="text-xl font-semibold text-zinc-900">
            More in {tool.category}
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Related comparison pages on AltSwitch — not outbound vendor links.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600">
            {related.map((t) => (
              <li key={`link-${t.slug}`}>
                <Link
                  href={`/alternatives/${t.slug}`}
                  className="text-indigo-600 hover:underline"
                >
                  {t.name} alternatives
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {alsoCompare.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="text-xl font-semibold text-zinc-900">
            Also compare
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Other tools that share alternatives with {tool.name}.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {alsoCompare.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/alternatives/${t.slug}`}
                  className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {t.name} alternatives
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
