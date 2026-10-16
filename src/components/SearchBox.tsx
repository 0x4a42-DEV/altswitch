"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types";

export default function SearchBox({ tools }: { tools: Tool[] }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.slug.includes(query) ||
          t.category.toLowerCase().includes(query) ||
          t.alternatives.some((a) => a.name.toLowerCase().includes(query))
      )
      .slice(0, 8);
  }, [q, tools]);

  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor="search" className="sr-only">
        Search tools
      </label>
      <input
        id="search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Notion, Slack, Jira…"
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm outline-none ring-indigo-500 focus:ring-2"
        autoComplete="off"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
          {results.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/alternatives/${t.slug}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-indigo-50"
                onClick={() => setQ("")}
              >
                <span>
                  <span className="font-medium text-zinc-900">{t.name}</span>
                  <span className="ml-2 text-sm text-zinc-500">{t.category}</span>
                </span>
                <span className="text-xs text-indigo-600">
                  {t.alternatives.length} alts →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
