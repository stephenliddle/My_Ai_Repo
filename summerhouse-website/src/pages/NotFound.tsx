import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss-600">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-bark-950">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-bark-700">
        The page you're looking for has turned out of view. Let's get you back to the garden.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-full bg-moss-700 px-6 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition-colors hover:bg-moss-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
