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
        <nav className="flex items-center gap-5 text-sm text-zinc-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Directory
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <a
            href="#newsletter"
            className="rounded-full bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500 transition-colors"
          >
            Newsletter
          </a>
        </nav>
      </div>
    </header>
  );
}
