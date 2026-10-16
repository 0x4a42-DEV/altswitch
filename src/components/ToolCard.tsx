import Link from "next/link";
import type { Tool } from "@/lib/types";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/alternatives/${tool.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-indigo-600">
          Alternatives to {tool.name}
        </h3>
        <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
          {tool.category}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm text-zinc-600">{tool.tagline}</p>
      <p className="mt-4 text-sm font-medium text-indigo-600">
        {tool.alternatives.length} alternatives →
      </p>
    </Link>
  );
}
