import PageHeader from "../components/PageHeader";

const stats = [
  { label: "Years building", value: "50+" },
  { label: "Summerhouses delivered", value: "3,200+" },
  { label: "Structural guarantee", value: "Up to 20 yrs" },
  { label: "Countries shipped to", value: "6" },
];

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Who We Are"
        title="About Us"
        description="Family-run since 1971, The Revolving Summerhouse Company designs, builds and installs garden buildings that turn to follow the sun."
      />

      <div className="mx-auto max-w-4xl space-y-10 px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-bark-900/8 bg-white p-4 text-center shadow-sm">
              <p className="font-display text-2xl font-semibold text-moss-700">{s.value}</p>
              <p className="mt-1 text-xs text-bark-700">{s.label}</p>
            </div>
          ))}
        </div>

        <article className="space-y-5 text-base leading-relaxed text-bark-700">
          <p>
            We began in a single Norfolk workshop in 1971, building one revolving summerhouse
            at a time by hand. Fifty years on, the workshop has grown, but the process hasn't
            changed much: every frame is still cut, joined and finished by our own
            carpenters, and every base still turns on the same principle we licensed from
            Bolton &amp; Paul all those years ago.
          </p>
          <p>
            Today our small team of joiners, glaziers and installers builds six models to
            order, from the compact Sandringham to the estate-scale Blenheim, and delivers
            and assembles every one of them on site - in gardens across Britain, and further
            afield.
          </p>
          <p>
            We believe a garden building should do more than sit still. A summerhouse that
            turns lets you chase the last of the evening sun, or simply close its back to a
            cold wind - a small piece of everyday delight that's been at the heart of what we
            build for half a century.
          </p>
        </article>
      </div>
    </div>
  );
}
