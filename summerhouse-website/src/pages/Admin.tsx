import { useEffect, useMemo, useState } from "react";
import type { GalleryItem, Product } from "../types";

const ADMIN_PASSWORD = "admin123";

type AdminDataState = {
  products: Product[];
  gallery: GalleryItem[];
};

const emptyProduct = (): Product => ({
  id: `product-${Date.now()}`,
  number: 1,
  name: "",
  tagline: "",
  price: "",
  body: "",
  image: "/images/products/1.jpg",
});

const emptyGallery = (): GalleryItem => ({
  id: `gallery-${Date.now()}`,
  number: 1,
  title: "",
  caption: "",
  image: "/images/gallery/1.jpg",
  relatedImages: [],
});

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<AdminDataState>({ products: [], gallery: [] });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const [productsRes, galleryRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/gallery"),
      ]);

      if (!productsRes.ok || !galleryRes.ok) {
        throw new Error("Unable to load data");
      }

      const [products, gallery] = await Promise.all([
        productsRes.json() as Promise<Product[]>,
        galleryRes.json() as Promise<GalleryItem[]>,
      ]);

      setData({ products, gallery });
    } catch (error) {
      console.error(error);
      setMessage("Unable to load product and gallery data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    void loadData();
  }, [authenticated]);

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setMessage("Incorrect password or the local admin server is unavailable.");
      return;
    }

    setAuthenticated(true);
    setMessage("");
  };

  const saveProducts = async () => {
    const res = await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.products),
    });

    if (!res.ok) {
      setMessage("Failed to save products.");
      return;
    }

    setMessage("Products saved.");
  };

  const saveGallery = async () => {
    const res = await fetch("/api/gallery", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.gallery),
    });

    if (!res.ok) {
      setMessage("Failed to save gallery.");
      return;
    }

    setMessage("Gallery saved.");
  };

  const updateProduct = (index: number, field: keyof Product, value: string) => {
    setData((current) => ({
      ...current,
      products: current.products.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateGallery = (index: number, field: keyof GalleryItem, value: string | string[]) => {
    setData((current) => ({
      ...current,
      gallery: current.gallery.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addProduct = () => {
    setData((current) => ({ ...current, products: [...current.products, emptyProduct()] }));
  };

  const addGallery = () => {
    setData((current) => ({ ...current, gallery: [...current.gallery, emptyGallery()] }));
  };

  const removeProduct = (index: number) => {
    setData((current) => ({
      ...current,
      products: current.products.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const removeGallery = (index: number) => {
    setData((current) => ({
      ...current,
      gallery: current.gallery.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const productCount = useMemo(() => data.products.length, [data.products]);
  const galleryCount = useMemo(() => data.gallery.length, [data.gallery]);

  if (!authenticated) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-bark-900/10 bg-white p-8 shadow-[var(--shadow-card)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-600">Admin</p>
          <h1 className="mt-3 font-display text-3xl text-bark-950">Content editor</h1>
          <p className="mt-2 text-sm text-bark-700">Enter the local admin password to manage products and gallery entries.</p>

          <label className="mt-6 block text-sm font-medium text-bark-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border border-bark-900/10 bg-cream-50 px-3 py-2.5 text-bark-900 outline-none ring-0 transition focus:border-moss-600"
            placeholder="Enter password"
          />

          <button
            type="button"
            onClick={login}
            className="mt-5 w-full rounded-full bg-bark-950 px-4 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-moss-700"
          >
            Enter admin area
          </button>

          <p className="mt-3 text-xs text-bark-700">Default password: {ADMIN_PASSWORD}</p>
          {message && <p className="mt-3 text-sm text-red-700">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14">
      <div className="mb-8 flex flex-col gap-4 border-b border-bark-900/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-600">Admin</p>
          <h1 className="mt-2 font-display text-3xl text-bark-950">Local content editor</h1>
        </div>
        <button
          type="button"
          onClick={() => setAuthenticated(false)}
          className="inline-flex items-center rounded-full border border-bark-900/10 px-4 py-2 text-sm font-medium text-bark-700 transition hover:bg-bark-50"
        >
          Log out
        </button>
      </div>

      {loading && <p className="text-sm text-bark-700">Loading content...</p>}
      {message && <p className="mb-6 text-sm text-moss-700">{message}</p>}

      <section className="mb-10 rounded-2xl border border-bark-900/10 bg-white p-6 shadow-[var(--shadow-card)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-bark-950">Products ({productCount})</h2>
          <button
            type="button"
            onClick={addProduct}
            className="rounded-full bg-moss-700 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-moss-600"
          >
            Add product
          </button>
        </div>

        <div className="space-y-6">
          {data.products.map((product, index) => (
            <div key={product.id || index} className="rounded-xl border border-bark-900/10 bg-cream-50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-bark-700">Product {index + 1}</p>
                <button
                  type="button"
                  onClick={() => removeProduct(index)}
                  className="text-sm font-medium text-red-700 hover:text-red-600"
                >
                  Remove
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-bark-700">
                  Name
                  <input
                    value={product.name}
                    onChange={(event) => updateProduct(index, "name", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700">
                  Price
                  <input
                    value={product.price ?? ""}
                    onChange={(event) => updateProduct(index, "price", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Tagline
                  <input
                    value={product.tagline}
                    onChange={(event) => updateProduct(index, "tagline", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Image path
                  <input
                    value={product.image}
                    onChange={(event) => updateProduct(index, "image", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Description
                  <textarea
                    value={product.body}
                    onChange={(event) => updateProduct(index, "body", event.target.value)}
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={saveProducts}
          className="mt-6 rounded-full bg-bark-950 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-moss-700"
        >
          Save products
        </button>
      </section>

      <section className="rounded-2xl border border-bark-900/10 bg-white p-6 shadow-[var(--shadow-card)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-bark-950">Gallery ({galleryCount})</h2>
          <button
            type="button"
            onClick={addGallery}
            className="rounded-full bg-moss-700 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-moss-600"
          >
            Add gallery item
          </button>
        </div>

        <div className="space-y-6">
          {data.gallery.map((item, index) => (
            <div key={item.id || index} className="rounded-xl border border-bark-900/10 bg-cream-50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-bark-700">Gallery {index + 1}</p>
                <button
                  type="button"
                  onClick={() => removeGallery(index)}
                  className="text-sm font-medium text-red-700 hover:text-red-600"
                >
                  Remove
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-bark-700 md:col-span-2">
                  Title
                  <input
                    value={item.title}
                    onChange={(event) => updateGallery(index, "title", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Caption
                  <input
                    value={item.caption}
                    onChange={(event) => updateGallery(index, "caption", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Image path
                  <input
                    value={item.image}
                    onChange={(event) => updateGallery(index, "image", event.target.value)}
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
                <label className="text-sm text-bark-700 md:col-span-2">
                  Related images (comma-separated)
                  <input
                    value={item.relatedImages.join(", ")}
                    onChange={(event) =>
                      updateGallery(index, "relatedImages", event.target.value.split(",").map((entry) => entry.trim()).filter(Boolean))
                    }
                    className="mt-1 w-full rounded-xl border border-bark-900/10 bg-white px-3 py-2.5 outline-none focus:border-moss-600"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={saveGallery}
          className="mt-6 rounded-full bg-bark-950 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-moss-700"
        >
          Save gallery
        </button>
      </section>
    </div>
  );
}
