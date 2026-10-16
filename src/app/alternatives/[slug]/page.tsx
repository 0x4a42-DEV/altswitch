import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllToolSlugs,
  getToolBySlug,
  getAllTools,
} from "@/lib/data";
import AlternativeCard from "@/components/AlternativeCard";
import NewsletterForm from "@/components/NewsletterForm";
import ToolCard from "@/components/ToolCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Not found" };
  return {
    title: `Best ${tool.name} alternatives (2026)`,
    description: `${tool.alternatives.length} SaaS and open-source alternatives to ${tool.name}. ${tool.tagline}`,
    openGraph: {
      title: `Best ${tool.name} alternatives | AltSwitch`,
      description: tool.description,
    },
  };
}

export default async function ToolAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getAllTools()
    .filter((t) => t.slug !== tool.slug && t.category === tool.category)
    .slice(0, 3);

  return (
    <div>
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
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">{tool.description}</p>
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-xl font-semibold text-zinc-900">
          {tool.alternatives.length} alternatives
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tool.alternatives.map((alt) => (
            <AlternativeCard key={alt.slug} alt={alt} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <NewsletterForm source="tool" toolSlug={tool.slug} compact />
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="text-xl font-semibold text-zinc-900">
            More in {tool.category}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
