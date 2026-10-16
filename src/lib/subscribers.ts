import { promises as fs } from "fs";
import path from "path";
import type { Subscriber } from "./types";

function subscribersPath(): string {
  // Prefer Railway volume mount at /data when present
  const dataDir = process.env.SUBSCRIBERS_DIR || "/data";
  return path.join(dataDir, "subscribers.json");
}

async function ensureFile(filePath: string): Promise<void> {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

export async function readSubscribers(): Promise<Subscriber[]> {
  const filePath = subscribersPath();
  try {
    await ensureFile(filePath);
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as Subscriber[];
  } catch {
    // Fallback to local project data (dev / no volume)
    const fallback = path.join(process.cwd(), "data", "subscribers.json");
    try {
      const raw = await fs.readFile(fallback, "utf8");
      return JSON.parse(raw) as Subscriber[];
    } catch {
      return [];
    }
  }
}

export async function addSubscriber(
  email: string,
  meta?: { source?: string; toolSlug?: string }
): Promise<{ ok: boolean; duplicate?: boolean; error?: string }> {
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return { ok: false, error: "Invalid email" };
  }

  const filePath = subscribersPath();
  let list: Subscriber[] = [];
  let writePath = filePath;

  try {
    await ensureFile(filePath);
    list = JSON.parse(await fs.readFile(filePath, "utf8")) as Subscriber[];
  } catch {
    writePath = path.join(process.cwd(), "data", "subscribers.json");
    try {
      await fs.mkdir(path.dirname(writePath), { recursive: true });
      list = JSON.parse(await fs.readFile(writePath, "utf8")) as Subscriber[];
    } catch {
      list = [];
    }
  }

  if (list.some((s) => s.email === normalized)) {
    return { ok: true, duplicate: true };
  }

  list.push({
    email: normalized,
    source: meta?.source,
    toolSlug: meta?.toolSlug,
    createdAt: new Date().toISOString(),
  });

  await fs.writeFile(writePath, JSON.stringify(list, null, 2), "utf8");
  return { ok: true };
}
