import { useEffect, useState } from "react";
import type { GalleryItem, Product } from "../types";

type LoadState<T> = {
  items: T[];
  status: "loading" | "ready" | "error";
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export function useProducts(): LoadState<Product> {
  const [state, setState] = useState<LoadState<Product>>({
    items: [],
    status: "loading",
  });

  useEffect(() => {
    let cancelled = false;
    fetchJson<Product[]>("http://localhost:3001/api/products")
      .then((items) => {
        if (!cancelled) setState({ items, status: "ready" });
      })
      .catch(() => {
        if (!cancelled) setState({ items: [], status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

export function useGallery(): LoadState<GalleryItem> {
  const [state, setState] = useState<LoadState<GalleryItem>>({
    items: [],
    status: "loading",
  });

  useEffect(() => {
    let cancelled = false;
    fetchJson<GalleryItem[]>("http://localhost:3001/api/gallery")
      .then((items) => {
        if (!cancelled) setState({ items, status: "ready" });
      })
      .catch(() => {
        if (!cancelled) setState({ items: [], status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
