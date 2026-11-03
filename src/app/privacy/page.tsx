import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How AltSwitch handles email signups, server logs, and affiliate link cookies.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        Privacy policy
      </h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated 3 November 2026</p>
      <p className="mt-4 text-lg text-zinc-600">
        AltSwitch (altswitch.xyz) is a directory of SaaS and open-source
        alternatives. This page describes what we collect on the site and how
        to reach us.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Email you submit
      </h2>
      <p className="mt-3 text-zinc-700">
        If you join the product updates list, we store the email address you
        submit, the page you signed up from, and the time of signup. We use
        that information to send occasional product updates about AltSwitch.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
        <li>We do not sell or rent your email address.</li>
        <li>
          We do not pass it to the software vendors listed in the directory for
          their own marketing.
        </li>
        <li>
          To correct or delete your address, email{" "}
          <a
            href="mailto:hello@altswitch.xyz"
            className="text-indigo-600 hover:underline"
          >
            hello@altswitch.xyz
          </a>
          .
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Cookies and affiliate links
      </h2>
      <p className="mt-3 text-zinc-700">
        AltSwitch does not set advertising cookies and does not run a
        third-party analytics tag. Browsing the directory does not require an
        account.
      </p>
      <p className="mt-3 text-zinc-700">
        Some outbound links are affiliate or referral links. They are labeled{" "}
        <Link href="/disclosure" className="text-indigo-600 hover:underline">
          Affiliate
        </Link>{" "}
        on the page and use <span className="font-medium">rel=&quot;sponsored&quot;</span>.
        When you follow one, the partner site or its affiliate network may set
        its own cookie or store a referral code so it can tell the visit came
        from AltSwitch. We do not control those cookies. Links that are not
        labeled Affiliate go to the vendor&apos;s ordinary website.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Logs and hosting
      </h2>
      <p className="mt-3 text-zinc-700">
        The site is served over HTTPS and hosted on Railway. The host may keep
        standard server logs (such as IP address, user agent, URL, and time)
        to operate and secure the service. We use those logs to keep the site
        up, not to build advertising profiles.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">Contact</h2>
      <p className="mt-3 text-zinc-700">
        Questions about this policy:{" "}
        <a
          href="mailto:hello@altswitch.xyz"
          className="text-indigo-600 hover:underline"
        >
          hello@altswitch.xyz
        </a>
        . How we earn from partner links is explained in the{" "}
        <Link href="/disclosure" className="text-indigo-600 hover:underline">
          affiliate disclosure
        </Link>
        .
      </p>
    </div>
  );
}
