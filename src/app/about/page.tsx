import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "AltSwitch is a curated directory of SaaS and open-source alternatives to popular software.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        About AltSwitch
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        AltSwitch helps teams find SaaS and open-source alternatives to the tools
        they already use — with clear comparisons, pricing notes, and practical
        tradeoffs.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">What we publish</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-zinc-700">
        <li>
          Curated alternative lists for widely used products across productivity,
          devops, marketing, analytics, and more.
        </li>
        <li>
          Side-by-side notes on pricing models, strengths, and tradeoffs — not
          live price crawls or paid rankings dressed up as research.
        </li>
        <li>
          Optional email list for future picks — newsletter sends are parked until comparison traffic converts; signup still works, no ESP campaigns yet.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Editorial standards
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>No fake reviews or undisclosed paid rankings</li>
        <li>Featured placements, when used, are clearly labeled</li>
        <li>We never sell your email without consent</li>
        <li>Browsing the directory never requires a credit card</li>
      </ul>

      <p className="mt-8 text-zinc-600">
        Questions or partnership inquiries?{" "}
        <a
          href="mailto:hello@altswitch.xyz"
          className="text-indigo-600 hover:underline"
        >
          hello@altswitch.xyz
        </a>
        .{" "}
        <Link href="/" className="text-indigo-600 hover:underline">
          Back to the directory →
        </Link>
      </p>

      <div className="mt-12">
        <NewsletterForm source="about" compact />
      </div>
    </div>
  );
}
