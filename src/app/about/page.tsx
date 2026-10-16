import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { RAILWAY_REFERRAL_URL } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "About & how we make money",
  description:
    "AltSwitch is a transparent alternatives directory. We earn via affiliate links and featured listings — never pay-to-rank organic results.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        About AltSwitch
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        AltSwitch helps founders and teams find SaaS and open-source alternatives
        to the tools they already use — without the spammy comparison-site noise.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        How we make money
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-zinc-700">
        <li>
          <strong>Affiliate links</strong> — some Visit buttons are
          affiliate/referral links (disclosed). If you sign up through them, we
          may earn a commission at no extra cost to you. Live partners are listed
          below; more programs are being added.
        </li>
        <li>
          <strong>Featured listings</strong> — vendors can pay for placement in
          featured spots. Featured slots are always labeled. Organic rankings are
          never for sale.
        </li>
        <li>
          <strong>Newsletter sponsorships</strong> — as the list grows, occasional
          sponsored mentions. Editorial picks stay editorial.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Live affiliates right now
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-zinc-700">
        <li>
          <strong>Railway</strong> — AltSwitch itself is hosted on Railway. If you
          deploy apps or self-host OSS from our tips, use our referral link:{" "}
          <a
            href={RAILWAY_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-indigo-600 hover:underline"
          >
            railway.com?referralCode=TsViJR
          </a>
          . We may earn referral credit when you sign up through it.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">What we won&apos;t do</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>Fake reviews or undisclosed paid rankings</li>
        <li>Sell your email without consent</li>
        <li>Require a credit card to browse the directory</li>
      </ul>

      <p className="mt-8 text-zinc-600">
        Questions or partnership inquiries?{" "}
        <a
          href="mailto:hello@altswitch.xyz"
          className="text-indigo-600 hover:underline"
        >
          hello@altswitch.xyz
        </a>
        . Hosted on{" "}
        <a
          href={RAILWAY_REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="text-indigo-600 hover:underline"
        >
          Railway
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
