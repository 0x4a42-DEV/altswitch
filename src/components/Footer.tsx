import Link from "next/link";

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
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link href="/#newsletter" className="hover:text-indigo-600">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} AltSwitch. Some outbound links may be
        affiliate partnerships.
      </div>
    </footer>
  );
}
