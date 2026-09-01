export default function Home() {

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Victorian revolving summerhouse in a garden"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-950/85 via-bark-950/40 to-bark-950/10" />
        <div className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-start px-6 pb-8 pt-12 sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sun-400">
            Garden living, reimagined
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            Welcome to The Revolving Summerhouse Company
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg">
            Based on a design by Bolton &amp; Paul of Norwich, discover our beautifully
            crafted Victorian revolving summerhouses. Re-visit this Victorian invention
            — still relevant in the 21st century — and enhance your outdoor space with a
            unique vantage point to enjoy your garden all year round.
          </p>

        </div>
      </section>

    </div>
  );
}
