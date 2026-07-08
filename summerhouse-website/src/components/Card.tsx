import type { ReactNode } from "react";

interface CardProps {
  headerTitle: string;
  headerSubtitle?: string;
  image: string;
  imageAlt: string;
  onViewMore: () => void;
  viewMoreLabel?: string;
  footerExtra?: ReactNode;
}

export default function Card({
  headerTitle,
  headerSubtitle,
  image,
  imageAlt,
  onViewMore,
  viewMoreLabel = "View More",
  footerExtra,
}: CardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-bark-900/8 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <header className="border-b border-bark-900/8 px-5 py-4">
        <h3 className="font-display text-lg font-semibold text-bark-950">{headerTitle}</h3>
        {headerSubtitle && <p className="mt-1 text-sm text-bark-700">{headerSubtitle}</p>}
      </header>

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-moss-100">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <footer className="mt-auto flex items-center justify-between gap-3 px-5 py-4">
        {footerExtra ?? <span />}
        <button
          type="button"
          onClick={onViewMore}
          className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-bark-950 px-4 py-2 text-sm font-medium text-cream-50 transition-colors hover:bg-moss-700"
        >
          {viewMoreLabel}
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </footer>
    </article>
  );
}
