import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-bark-900/10 bg-cream-50/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-cream-50/80 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="-ml-1 flex size-9 items-center justify-center rounded-md text-bark-800 hover:bg-moss-100 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-moss-700 text-cream-50 shadow-sm transition-transform group-hover:rotate-45">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <circle cx="12" cy="12" r="8.4" />
              <path strokeLinecap="round" d="M12 3.6v3.4M12 17v3.4M3.6 12h3.4M17 12h3.4" />
            </svg>
          </span>
          <span className="font-display text-[1.05rem] font-semibold leading-tight tracking-tight text-bark-950 sm:text-xl">
            The Revolving Summerhouse Company
          </span>
        </Link>
      </div>
      <Link
        to="/contact"
        className="hidden shrink-0 items-center rounded-full bg-moss-700 px-4 py-2 text-sm font-medium text-cream-50 shadow-sm transition-colors hover:bg-moss-600 sm:inline-flex"
      >
        Get a Quote
      </Link>
    </header>
  );
}
