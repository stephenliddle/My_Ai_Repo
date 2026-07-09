import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-bark-900/8 bg-cream-100/60 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
      <div className="mx-auto max-w-4xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss-600">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-3xl font-semibold text-bark-950 sm:text-4xl">{title}</h1>
        {description && (
          <div className="mt-3 max-w-2xl text-base leading-relaxed text-bark-700">{description}</div>
        )}
      </div>
    </div>
  );
}
