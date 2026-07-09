import { useState } from "react";

interface VideoShowcaseProps {
  src: string;
  poster: string;
  title: string;
}

/**
 * Plays a real video when one is available at `src`. If the file hasn't
 * been added yet (this is a fresh scaffold), it falls back to a polished
 * "coming soon" placeholder instead of a broken player.
 */
export default function VideoShowcase({ src, poster, title }: VideoShowcaseProps) {
  const [videoAvailable, setVideoAvailable] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-bark-900/10 bg-bark-950 shadow-[var(--shadow-card)]">
      <img
        src={poster}
        alt={title}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${
          videoAvailable ? "opacity-0" : "opacity-40"
        }`}
      />

      <video
        className={`relative size-full object-cover ${videoAvailable ? "" : "invisible"}`}
        controls
        poster={poster}
        preload="metadata"
        onLoadedMetadata={() => setVideoAvailable(true)}
        onError={() => setVideoAvailable(false)}
      >
        <source src={src} />
      </video>

      {!videoAvailable && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-cream-50/90 text-bark-950 shadow-lg">
            <svg viewBox="0 0 24 24" className="size-7 translate-x-0.5" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-cream-50">{title}</p>
            <p className="mt-1 max-w-sm text-sm text-cream-200/80">
              Video coming soon. Drop an .mp4 file at{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-sun-400">{src}</code>{" "}
              to have it play here automatically.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
