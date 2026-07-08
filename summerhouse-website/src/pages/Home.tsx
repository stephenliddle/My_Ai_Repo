import { Link } from "react-router-dom";
import { products } from "../data/products";

const highlights = [
  {
    title: "Built to turn",
    body: "Every summerhouse rotates a full 360 degrees, so you can follow the sun or shelter from the wind at will.",
  },
  {
    title: "Handcrafted in Britain",
    body: "Timber-framed and finished by our own joiners, using sustainably sourced hardwoods and softwoods.",
  },
  {
    title: "Delivered & installed",
    body: "We deliver, assemble and commission every building on site, anywhere in the UK.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="A revolving summerhouse on a sunlit garden lawn"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-950/85 via-bark-950/40 to-bark-950/10" />
        <div className="relative flex min-h-[72vh] flex-col justify-end px-6 pb-14 pt-24 sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sun-400">
            Est. 1971 &middot; Handbuilt in Britain
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            A summerhouse that turns to face the sun.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg">
            For over fifty years, The Revolving Summerhouse Company has built garden
            buildings that rotate on their base &mdash; so the best seat in the garden
            always faces the light.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 text-sm font-semibold text-bark-950 shadow-lg transition-colors hover:bg-sun-400"
            >
              Browse the Range
            </Link>
            <Link
              to="/revolving-demo"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cream-50 backdrop-blur transition-colors hover:bg-white/15"
            >
              Watch it Revolve
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-bark-900/8 bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-lg font-semibold text-bark-950">{h.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-bark-700">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss-600">The Range</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-bark-950 sm:text-3xl">
              Six summerhouses, one company.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:text-moss-600"
          >
            View all products
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group overflow-hidden rounded-xl border border-bark-900/8 bg-white shadow-sm transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-moss-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="font-display text-sm font-semibold text-bark-950 sm:text-base">{product.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
