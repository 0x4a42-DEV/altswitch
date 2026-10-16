"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm({
  source = "home",
  toolSlug,
  compact = false,
}: {
  source?: string;
  toolSlug?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "dup" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, toolSlug }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data.error || "Something went wrong");
        return;
      }
      if (data.duplicate) {
        setStatus("dup");
        setMessage("You're already on the list — thanks!");
      } else {
        setStatus("ok");
        setMessage("You're in. We'll send alternatives worth switching to.");
        setEmail("");
      }
    } catch {
      setStatus("err");
      setMessage("Network error — try again.");
    }
  }

  return (
    <div
      id="newsletter"
      className={
        compact
          ? "rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6"
          : "rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-lg"
      }
    >
      <h2
        className={
          compact
            ? "text-lg font-semibold text-zinc-900"
            : "text-2xl font-semibold tracking-tight"
        }
      >
        Get weekly switch picks
      </h2>
      <p
        className={
          compact ? "mt-1 text-sm text-zinc-600" : "mt-2 text-indigo-100"
        }
      >
        Curated SaaS &amp; open-source alternatives. No spam — unsubscribe anytime.
      </p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={
            compact
              ? "flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-indigo-500"
              : "flex-1 rounded-lg border-0 px-3 py-2.5 text-zinc-900 outline-none ring-2 ring-white/30 focus:ring-white"
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={
            compact
              ? "rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 disabled:opacity-60"
              : "rounded-lg bg-white px-4 py-2.5 font-medium text-indigo-700 hover:bg-indigo-50 disabled:opacity-60"
          }
        >
          {status === "loading" ? "Saving…" : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={
            compact
              ? `mt-2 text-sm ${status === "err" ? "text-red-600" : "text-emerald-700"}`
              : `mt-2 text-sm ${status === "err" ? "text-red-200" : "text-indigo-100"}`
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}
