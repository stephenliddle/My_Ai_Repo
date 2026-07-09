import { useEffect, useState } from "react";
import { loadGallery, loadProducts } from "../lib/content";
import type { GalleryItem, Product } from "../types";

type LoadState<T> = {
  items: T[];
  status: "loading" | "ready" | "error";
};

export function useProducts(): LoadState<Product> {
  const [state, setState] = useState<LoadState<Product>>({
    items: [],
    status: "loading",
  });

  useEffect(() => {
    let cancelled = false;
    loadProducts()
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
    loadGallery()
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
