import Link from "next/link";
import { RAILWAY_REFERRAL_URL } from "@/lib/affiliates";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <div>
          <p className="font-medium text-zinc-800">
            Alt<span className="text-indigo-600">Switch</span>
          </p>
          <p className="mt-1">Find SaaS &amp; open-source alternatives.</p>
          <p className="mt-2">
            <a
              href="mailto:hello@altswitch.xyz"
              className="text-indigo-600 hover:underline"
            >
              hello@altswitch.xyz
            </a>
          </p>
          <p className="mt-2 text-xs text-zinc-400">
            Hosted on{" "}
            <a
              href={RAILWAY_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-indigo-600 hover:underline"
            >
              Railway
            </a>
            . Referral link — we may earn credit if you sign up.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-indigo-600">
              How we make money
            </Link>
            <Link href="/#newsletter" className="hover:text-indigo-600">
              Newsletter
            </Link>
          </div>
          <a
            href={RAILWAY_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs text-indigo-600 hover:underline"
          >
            Deploy your stack on Railway →
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} AltSwitch. Affiliate links may earn a
        commission.
      </div>
    </footer>
  );
}
