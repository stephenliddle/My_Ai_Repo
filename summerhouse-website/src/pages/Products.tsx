import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useProducts } from "../hooks/useContent";
import type { Product } from "../types";

export default function Products() {
  const { items: products, status } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div>
      <PageHeader
        eyebrow="Our Range"
        title="Products"
        description="Revolving summerhouses, from a compact garden retreat to a grand entertaining pavilion. Every model turns a full 360 degrees and is built to order in Britain."
      />

      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-14">
        {status === "loading" && (
          <p className="text-sm text-bark-700">Loading products&hellip;</p>
        )}
        {status === "error" && (
          <p className="text-sm text-bark-700">
            Products couldn&apos;t be loaded. Please try again shortly.
          </p>
        )}
        {status === "ready" && products.length === 0 && (
          <p className="text-sm text-bark-700">
            No products found. Add numbered files such as{" "}
            <code className="rounded bg-moss-100 px-1.5 py-0.5 text-xs">public/data/products/1.txt</code>{" "}
            and{" "}
            <code className="rounded bg-moss-100 px-1.5 py-0.5 text-xs">public/images/products/1.jpg</code>.
          </p>
        )}
        {products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        )}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ""}>
        {selected && (
          <div>
            <div className="mb-5 overflow-hidden rounded-xl bg-moss-100">
              <img src={selected.image} alt={selected.name} className="aspect-video w-full object-cover" />
            </div>
            <div className="space-y-4">
              {selected.price && (
                <p className="inline-flex items-center rounded-full bg-sun-100 px-4 py-1.5 font-display text-lg font-semibold text-bark-950">
                  {selected.price}
                </p>
              )}
              {selected.body && (
                <p className="whitespace-pre-line text-sm leading-relaxed text-bark-700">{selected.body}</p>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
