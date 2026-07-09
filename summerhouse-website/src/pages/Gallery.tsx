import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { galleryItems } from "../data/gallery";
import type { GalleryItem } from "../types";

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div>
      <PageHeader
        eyebrow="In the Garden"
        title="Gallery"
        description="A look at our summerhouses in the gardens they were built for, in every season. Select View More on any scene for extra photographs."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-14">
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
