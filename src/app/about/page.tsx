import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllTools } from "@/lib/data";

const title = "About AltSwitch — SaaS & Open-Source Alternatives Directory";
const description =
  "AltSwitch is an independent directory of SaaS and open-source software alternatives. Maintained by AltSwitch — contact hello@altswitch.xyz.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    siteName: "AltSwitch",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function AboutPage() {
  const toolCount = getAllTools().length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
        About
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        About AltSwitch
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        AltSwitch is an independent directory of SaaS and open-source
        alternatives. {toolCount} comparison pages are live, with pricing
        notes, strengths, and tradeoffs — so you can see what you gain and
        what you give up before switching.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">Who runs it</h2>
      <p className="mt-4 text-zinc-700">
        AltSwitch publishes this directory independently. The products listed
        here belong to other companies. We write and update the comparison
        notes ourselves, and we label affiliate links when a visit can earn a
        commission. Corrections, missing tools, and partnership notes go to{" "}
        <a
          href="mailto:hello@altswitch.xyz"
          className="text-indigo-600 hover:underline"
        >
          hello@altswitch.xyz
        </a>
        . The company page is on{" "}
        <a
          href="https://www.linkedin.com/company/altswitch/"
          className="text-indigo-600 hover:underline"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        What the directory does
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-zinc-700">
        <li>
          Comparison pages for software people already use — databases, CRM,
          support, automation, email, scheduling, forms, and hosting among
          them.
        </li>
        <li>
          A short path into pages we keep current, including Airtable, Pipedrive,
          Intercom, Zapier, and Mailchimp.
        </li>
        <li>
          Side-by-side notes on pricing models, strengths, and tradeoffs. These
          are editorial notes, not a live price crawl and not a ranking you
          can buy.
        </li>
        <li>
          Optional email signup for occasional product updates. We store the
          address you submit and we don&apos;t sell it.{" "}
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            Privacy policy
          </Link>
          .
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Editorial standards
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>No fake reviews, traffic claims, or undisclosed paid rankings</li>
        <li>
          Some outbound links are affiliate partnerships and are labeled.{" "}
          <Link href="/disclosure" className="text-indigo-600 hover:underline">
            Affiliate disclosure
          </Link>
        </li>
        <li>We never sell your email</li>
        <li>Browsing the directory never requires a credit card</li>
      </ul>

      <p className="mt-8 text-zinc-600">
        <Link href="/" className="text-indigo-600 hover:underline">
          Browse the directory →
        </Link>
      </p>

      <div className="mt-12">
        <NewsletterForm source="about" compact />
      </div>
    </div>
  );
}
