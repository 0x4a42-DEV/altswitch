import type { Metadata } from "next";
import Link from "next/link";
import { getAllTools, getFeaturedTools } from "@/lib/data";
import SearchBox from "@/components/SearchBox";
import ToolCard from "@/components/ToolCard";
import NewsletterForm from "@/components/NewsletterForm";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://altswitch.xyz"
).replace(/\/$/, "");

const title = "AltSwitch — SaaS & Open-Source Alternatives Directory";
const description =
  "Independent directory of SaaS and open-source software alternatives. Pricing notes and tradeoffs for Airtable, Pipedrive, Intercom, Zapier, and Mailchimp.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: "AltSwitch",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

/** Wired clusters only. Internal pages — no affiliate URLs here. */
const switches: {
  from: string;
  to: string;
  href: string;
  note: string;
}[] = [
  {
    from: "Airtable",
    to: "Teable",
    href: "/alternatives/airtable",
    note: "Spreadsheet-database on Postgres, with an open-source path.",
  },
  {
    from: "Pipedrive",
    to: "Close",
    href: "/alternatives/pipedrive",
    note: "Outbound sales CRM with calling and email built in.",
  },
  {
    from: "Intercom",
    to: "Gorgias",
    href: "/alternatives/intercom",
    note: "Ecommerce helpdesk for Shopify and DTC brands.",
  },
  {
    from: "Zapier",
    to: "Make",
    href: "/alternatives/zapier",
    note: "Visual automation, often priced per operation.",
  },
  {
    from: "Mailchimp",
    to: "MailerLite & beehiiv",
    href: "/alternatives/mailchimp",
    note: "Simpler SMB email, or a newsletter platform.",
  },
  {
    from: "Calendly",
    to: "Cal.com",
    href: "/alternatives/calendly",
    note: "Open-source scheduling you can cloud-host or self-host.",
  },
  {
    from: "Typeform",
    to: "Tally",
    href: "/alternatives/typeform",
    note: "Forms with a generous free tier.",
  },
  {
    from: "Heroku",
    to: "Railway, DigitalOcean & Vultr",
    href: "/alternatives/heroku",
    note: "PaaS and VPS options when dyno pricing climbs.",
  },
];

const featuredLead = [
  "airtable",
  "pipedrive",
  "intercom",
  "zapier",
  "mailchimp",
  "heroku",
  "zendesk",
  "salesforce",
];

export default function HomePage() {
  const tools = getAllTools();
  const featured = [...getFeaturedTools()].sort((a, b) => {
    const ai = featuredLead.indexOf(a.slug);
    const bi = featuredLead.indexOf(b.slug);
    const ar = ai === -1 ? featuredLead.length : ai;
    const br = bi === -1 ? featuredLead.length : bi;
    return ar - br;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "AltSwitch",
        url: siteUrl,
        description,
      },
      {
        "@type": "Organization",
        name: "AltSwitch",
        url: siteUrl,
        email: "hello@altswitch.xyz",
        sameAs: ["https://www.linkedin.com/company/altswitch/"],
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            SaaS &amp; open-source alternatives directory
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Compare alternatives to the software you already use.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            AltSwitch is an independent directory — pricing notes, strengths,
            and tradeoffs in plain language. Affiliate links are labeled.
            Placement stays editorial.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-700">
            <li className="rounded-full bg-zinc-100 px-3 py-1">
              {tools.length} tools in the directory
            </li>
            <li className="rounded-full bg-zinc-100 px-3 py-1">
              Open-source options called out
            </li>
            <li className="rounded-full bg-zinc-100 px-3 py-1">
              <a href="mailto:hello@altswitch.xyz" className="hover:text-indigo-600">
                hello@altswitch.xyz
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <SearchBox tools={tools} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-zinc-900">Popular switches</h2>
        <p className="mt-1 max-w-2xl text-zinc-600">
          Start with a tool you know. Each link opens a full comparison with
          several options and the tradeoffs written down.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {switches.map((row) => (
            <li key={row.href}>
              <Link
                href={row.href}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
              >
                <p className="text-sm text-zinc-500">{row.from}</p>
                <p className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-indigo-600">
                  → {row.to}
                </p>
                <p className="mt-2 flex-1 text-sm text-zinc-600">{row.note}</p>
                <p className="mt-4 text-sm font-medium text-indigo-600">
                  Compare alternatives →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Featured comparisons
          </h2>
          <p className="mt-1 text-zinc-600">
            Wider set of tools teams look up on AltSwitch.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-semibold text-zinc-900">Full directory</h2>
        <p className="mt-1 text-zinc-600">
          {tools.length} tools, each with alternatives, pricing notes, and
          tradeoffs.
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
