import Link from "next/link";

/** Visible disclosure for a wired partner link. Plain listings do not render this. */
export default function AffiliateMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/disclosure"
      className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 hover:bg-amber-100"
    >
      {compact ? "Affiliate" : "Affiliate · may earn a commission"}
    </Link>
  );
}
