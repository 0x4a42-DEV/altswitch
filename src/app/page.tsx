import type { Metadata } from "next";
import { getAllTools, getFeaturedTools } from "@/lib/data";
import SearchBox from "@/components/SearchBox";
import ToolCard from "@/components/ToolCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "AltSwitch — Find SaaS & Open-Source Alternatives",
  description:
    "Browse alternatives to Notion, Slack, Jira, Salesforce, HubSpot, Figma, Zendesk, Airtable, Google Analytics, Mailchimp, and more.",
};

export default function HomePage() {
  const tools = getAllTools();
  const featured = getFeaturedTools();

  return (
    <div>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            Alternatives directory
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Switch smarter. Find better tools.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600">
            Curated SaaS and open-source alternatives to the software you already
            use — with pricing notes, clear tradeoffs, and a weekly newsletter.
          </p>
          <div className="mt-8">
            <SearchBox tools={tools} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">
              Featured: alternatives to…
            </h2>
            <p className="mt-1 text-zinc-600">
              Popular tools teams ask about most.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-semibold text-zinc-900">All tools</h2>
        <p className="mt-1 text-zinc-600">
          {tools.length} tools in the catalog.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <NewsletterForm source="home" />
      </section>
    </div>
  );
}
