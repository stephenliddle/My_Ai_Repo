import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { products } from "../data/products";
import type { Product } from "../types";

function useProductDetails(product: Product | null) {
  const [text, setText] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    if (!product) {
      setText(null);
      setStatus("idle");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    fetch(product.descriptionFile)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((body) => {
        if (!cancelled) {
          setText(body);
          setStatus("idle");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [product]);

  return { text, status };
}

function parsePriceAndBody(raw: string) {
  const lines = raw.trim().split("\n");
  const priceLine = lines.find((l) => l.toLowerCase().startsWith("price:"));
  const price = priceLine ? priceLine.split(":").slice(1).join(":").trim() : null;
  const body = lines.filter((l) => !l.toLowerCase().startsWith("price:")).join("\n").trim();
  return { price, body };
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);
  const { text, status } = useProductDetails(selected);
  const parsed = text ? parsePriceAndBody(text) : null;

  return (
    <div>
      <PageHeader
        eyebrow="Our Range"
        title="Products"
        description="Six revolving summerhouses, from a compact garden retreat to a grand entertaining pavilion. Every model turns a full 360 degrees and is built to order in Britain."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-14">
        {products.map((product) => (
          <Card
            key={product.id}
            headerTitle={product.name}
            headerSubtitle={product.tagline}
            image={product.image}
            imageAlt={product.name}
            onViewMore={() => setSelected(product)}
          />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ""}>
        {selected && (
          <div>
            <div className="mb-5 overflow-hidden rounded-xl bg-moss-100">
              <img src={selected.image} alt={selected.name} className="aspect-video w-full object-cover" />
            </div>

            {status === "loading" && (
              <p className="text-sm text-bark-700">Loading product details&hellip;</p>
            )}
            {status === "error" && (
              <p className="text-sm text-bark-700">
                Details for this product couldn&apos;t be loaded. Please try again shortly.
              </p>
            )}
            {parsed && (
              <div className="space-y-4">
                {parsed.price && (
                  <p className="inline-flex items-center rounded-full bg-sun-100 px-4 py-1.5 font-display text-lg font-semibold text-bark-950">
                    {parsed.price}
                  </p>
                )}
                <p className="whitespace-pre-line text-sm leading-relaxed text-bark-700">{parsed.body}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
