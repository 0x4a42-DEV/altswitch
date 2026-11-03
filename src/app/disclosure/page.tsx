import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "How AltSwitch monetizes: labeled affiliate and referral links, and what is a plain listing.",
  alternates: { canonical: "/disclosure" },
};

const PARTNERS = [
  "Railway",
  "DigitalOcean",
  "Make",
  "Cal.com",
  "Tally",
  "MailerLite",
  "beehiiv",
  "Vultr",
  "Teable",
  "Close",
  "Gorgias",
];

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        Affiliate disclosure
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        AltSwitch is an independently written directory. Some outbound links
        are affiliate or referral links. If you sign up or buy through one of
        them, we may earn a commission or referral credit. That does not
        change the price you pay.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        How a partner link is labeled
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>
          A sponsored <span className="font-medium">Visit website</span> button
          shows “Affiliate · may earn a commission” on the card.
        </li>
        <li>
          A quick pick we can earn from is marked <span className="font-medium">Affiliate</span>.
        </li>
        <li>
          Those links use <span className="font-medium">rel=&quot;sponsored&quot;</span>.
        </li>
        <li>
          Listings without that label go to the vendor&apos;s public site. They
          are not our referral links.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Editorial and money
      </h2>
      <p className="mt-3 text-zinc-700">
        We do not sell placement. Pros, cons, and pricing notes are ours,
        including limitations of products we can earn from. A page may lead
        with a partner when that product fits the job the page is about. The
        Affiliate label is what tells you we may earn from the link.
      </p>
      <p className="mt-3 text-zinc-700">
        Current partner links point at: {PARTNERS.join(", ")}. Programs change.
        The label on the card is the live signal, not this list.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">Contact</h2>
      <p className="mt-3 text-zinc-700">
        Partnership or disclosure questions:{" "}
        <a
          href="mailto:hello@altswitch.xyz"
          className="text-indigo-600 hover:underline"
        >
          hello@altswitch.xyz
        </a>
        . See also the{" "}
        <Link href="/privacy" className="text-indigo-600 hover:underline">
          privacy policy
        </Link>
        .
      </p>
    </div>
  );
}
