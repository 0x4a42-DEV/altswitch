import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

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
          <strong>Affiliate links</strong> — some &quot;Visit website&quot; buttons
          include a referral parameter. If you sign up through them, we may earn a
          commission at no extra cost to you. Params are ready now; partner
          programs roll out over time.
        </li>
        <li>
          <strong>Featured listings</strong> — vendors can pay for placement in
          featured spots. Featured slots are always labeled. Organic rankings are
          never for sale.
        </li>
        <li>
          <strong>Newsletter sponsorships</strong> (later) — once the list grows,
          occasional sponsored mentions. Editorial picks stay editorial.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">What we won&apos;t do</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>Fake reviews or undisclosed paid rankings</li>
        <li>Sell your email without consent</li>
        <li>Require a credit card to browse the directory</li>
      </ul>

      <p className="mt-8 text-zinc-600">
        Built as a Side Hustle by Jon (0x4a42). MVP uses static seed data; Stripe
        and email ESP (Resend/Buttondown) come later.{" "}
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
