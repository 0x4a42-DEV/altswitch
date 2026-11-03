import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            A
          </span>
          <span>
            Alt<span className="text-indigo-600">Switch</span>
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-zinc-600 sm:gap-5">
          <Link
            href="/#tools"
            className="rounded-full bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500 transition-colors"
          >
            <span className="sm:hidden">Browse</span>
            <span className="hidden sm:inline">Browse tools</span>
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link
            href="/#newsletter"
            className="hover:text-indigo-600 transition-colors"
          >
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
