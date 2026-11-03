import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "How AltSwitch monetizes: some links may earn a commission, and what is a plain listing.",
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
        How a partner link is disclosed
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>
          A comparison page that includes a partner link says once, near the
          top: “Some links may earn us a commission.”
        </li>
        <li>
          That line covers Visit buttons, quick picks, and hosting links on the
          page. We do not stamp Affiliate on each one.
        </li>
        <li>
          Open-source pages include a hosting note for Railway, DigitalOcean,
          and Vultr. Those are affiliate links.
        </li>
        <li>
          Those links use <span className="font-medium">rel=&quot;sponsored&quot;</span>.
        </li>
        <li>
          A plain listing goes to the vendor&apos;s public site. It is not our
          referral link.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Editorial and money
      </h2>
      <p className="mt-3 text-zinc-700">
        We do not sell placement. Pros, cons, and pricing notes are ours,
        including limitations of products we can earn from. A page may lead
        with a partner when that product fits the job the page is about. The
        line on the page is what tells you we may earn from a partner link.
      </p>
      <p className="mt-3 text-zinc-700">
        Current partner links point at: {PARTNERS.join(", ")}. Programs change.
        The sponsored links on the page are the live signal, not this list.
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
