import type { Tool } from "@/lib/types";
import {
  DIGITALOCEAN_REFERRAL_LABEL,
  DIGITALOCEAN_REFERRAL_URL,
  RAILWAY_REFERRAL_LABEL,
  RAILWAY_REFERRAL_URL,
  VULTR_REFERRAL_LABEL,
  VULTR_REFERRAL_URL,
} from "@/lib/affiliates";
import AffiliateMark from "@/components/AffiliateMark";

/**
 * Railway and DigitalOcean lead (stronger commission path). Vultr stays third.
 * URLs come only from the wired constants — do not add hosts here.
 */
const HOSTS = [
  {
    label: RAILWAY_REFERRAL_LABEL,
    href: RAILWAY_REFERRAL_URL,
    primary: true,
  },
  {
    label: DIGITALOCEAN_REFERRAL_LABEL,
    href: DIGITALOCEAN_REFERRAL_URL,
    primary: true,
  },
  {
    label: VULTR_REFERRAL_LABEL,
    href: VULTR_REFERRAL_URL,
    primary: false,
  },
] as const;

/** Pages where someone may self-host an open-source alternative. */
export function toolShowsOssHosting(
  tool: Pick<Tool, "category" | "alternatives">
): boolean {
  if (tool.category === "Hosting") return false;
  return tool.alternatives.some((alt) => alt.pricing === "oss");
}

function HostLink({
  host,
  compact,
}: {
  host: (typeof HOSTS)[number];
  compact?: boolean;
}) {
  const size = compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";
  const tone = host.primary
    ? "bg-indigo-600 text-white hover:bg-indigo-500"
    : "border border-zinc-300 bg-white text-zinc-800 hover:border-indigo-300 hover:text-indigo-700";

  return (
    <a
      href={host.href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center rounded-full font-medium ${size} ${tone}`}
    >
      {host.label}
      <span aria-hidden="true"> →</span>
    </a>
  );
}

export default function OssHostingCta({
  variant = "strip",
}: {
  variant?: "strip" | "card";
}) {
  if (variant === "card") {
    return (
      <div className="mt-3 rounded-xl border border-amber-200 bg-white px-3 py-2.5">
        <p className="text-xs font-medium text-zinc-800">
          Self-host tip — you still need a server
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {HOSTS.map((host) => (
            <HostLink key={host.label} host={host} compact />
          ))}
        </div>
        <span className="mt-2 block">
          <AffiliateMark />
        </span>
      </div>
    );
  }

  return (
    <aside
      id="hosting"
      aria-label="Where to run the open-source pick"
      className="mt-5 max-w-2xl scroll-mt-24 rounded-2xl border border-amber-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-semibold text-zinc-900">
          Where to run the open-source pick
        </p>
        <AffiliateMark compact />
      </div>
      <p className="mt-1 text-sm text-zinc-700">
        If you self-host, the software is free and the server is not. These
        are affiliate links.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {HOSTS.map((host) => (
          <HostLink key={host.label} host={host} />
        ))}
      </div>
    </aside>
  );
}
