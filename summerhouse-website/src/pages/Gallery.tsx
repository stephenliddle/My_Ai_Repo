import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useGallery } from "../hooks/useContent";
import type { GalleryItem } from "../types";

export default function Gallery() {
  const { items: galleryItems, status } = useGallery();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div>
      <PageHeader
        eyebrow="In the Garden"
        title="Gallery"
        description="A look at our summerhouses in the gardens they were built for, in every season. Select View More on any scene for extra photographs."
      />

      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-14">
        {status === "loading" && (
          <p className="text-sm text-bark-700">Loading gallery&hellip;</p>
        )}
        {status === "error" && (
          <p className="text-sm text-bark-700">
            Gallery couldn&apos;t be loaded. Please try again shortly.
          </p>
        )}
        {status === "ready" && galleryItems.length === 0 && (
          <p className="text-sm text-bark-700">
            No gallery items found. Add numbered files such as{" "}
            <code className="rounded bg-moss-100 px-1.5 py-0.5 text-xs">public/data/gallery/1.txt</code>{" "}
            and{" "}
            <code className="rounded bg-moss-100 px-1.5 py-0.5 text-xs">public/images/gallery/1.jpg</code>.
          </p>
        )}
        {galleryItems.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                headerTitle={item.title}
                headerSubtitle={item.caption}
                image={item.image}
                imageAlt={item.title}
                onViewMore={() => setSelected(item)}
              />
            ))}
          </div>
        )}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title ?? ""}>
        {selected && (
          <div>
            <p className="mb-4 text-sm text-bark-700">{selected.caption}</p>
            <div className="grid grid-cols-2 gap-3">
              {selected.relatedImages.slice(0, 4).map((src, i) => (
                <div key={src + i} className="overflow-hidden rounded-xl bg-moss-100">
                  <img
                    src={src}
                    alt={`${selected.title} - photo ${i + 1}`}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
