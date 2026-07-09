import type { GalleryItem, Product } from "../types";

const MAX_ITEMS = 50;

type HeaderMap = Record<string, string>;

function parseHeadersAndBody(raw: string): { headers: HeaderMap; body: string } {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const headers: HeaderMap = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i += 1;
      break;
    }
    const colon = line.indexOf(":");
    if (colon === -1) break;
    const key = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    headers[key] = value;
    i += 1;
  }

  const body = lines.slice(i).join("\n").trim();
  return { headers, body };
}

function resolveRelatedRef(ref: string): string | null {
  const trimmed = ref.trim().toLowerCase();
  if (!trimmed) return null;
  if (trimmed === "hero") return "/images/hero.jpg";

  const match = trimmed.match(/^(gallery|product):(\d+)$/);
  if (!match) return null;
  const [, kind, num] = match;
  return kind === "gallery"
    ? `/images/gallery/${num}.jpg`
    : `/images/products/${num}.jpg`;
}

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

/**
 * Discover numbered content files by probing 1.txt, 2.txt, ... until a gap.
 * Add/remove/reorder items by renaming files — no React changes needed.
 */
async function loadNumberedTexts(dataDir: string): Promise<{ n: number; raw: string }[]> {
  const found: { n: number; raw: string }[] = [];
  for (let n = 1; n <= MAX_ITEMS; n += 1) {
    const raw = await fetchText(`${dataDir}/${n}.txt`);
    if (raw === null) break;
    found.push({ n, raw });
  }
  return found;
}

export async function loadProducts(): Promise<Product[]> {
  const files = await loadNumberedTexts("/data/products");

  return files.map(({ n, raw }) => {
    const { headers, body } = parseHeadersAndBody(raw);
    return {
      id: String(n),
      number: n,
      name: headers.name ?? `Product ${n}`,
      tagline: headers.tagline ?? "",
      price: headers.price ?? null,
      body,
      image: `/images/products/${n}.jpg`,
    };
  });
}

export async function loadGallery(): Promise<GalleryItem[]> {
  const files = await loadNumberedTexts("/data/gallery");

  return files.map(({ n, raw }) => {
    const { headers } = parseHeadersAndBody(raw);
    const related = (headers.related ?? "")
      .split(",")
      .map(resolveRelatedRef)
      .filter((src): src is string => src !== null);

    return {
      id: String(n),
      number: n,
      title: headers.title ?? `Gallery ${n}`,
      caption: headers.caption ?? "",
      image: `/images/gallery/${n}.jpg`,
      relatedImages: related.length > 0 ? related : [`/images/gallery/${n}.jpg`],
    };
  });
}
