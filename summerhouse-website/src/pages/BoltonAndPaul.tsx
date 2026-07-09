import PageHeader from "../components/PageHeader";

export default function BoltonAndPaul() {
  return (
    <div>
      <PageHeader eyebrow="Our History" title="Bolton & Paul" />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-10 text-base leading-relaxed text-bark-700 sm:px-10 lg:px-14">
        <p>
          Long before The Revolving Summerhouse Company cut its first piece of redwood, the
          idea of a garden building that turned to follow the sun was already a well-loved
          eccentricity of English engineering. It was a partnership with the Norfolk
          ironworks and joinery firm of Bolton &amp; Paul, in the years following the Second
          World War, that gave our founders the turntable mechanism the company still builds
          on today.
        </p>
        <h2 className="font-display text-xl font-semibold text-bark-950">
          A wartime workshop turned to peacetime craft
        </h2>
        <p>
          Bolton &amp; Paul had spent the war years manufacturing precision components for
          aircraft undercarriages - work that demanded smooth, load-bearing rotation under
          weight, in all weathers. When peace returned, their engineers looked for a gentler
          use for that same expertise, and found it in an unlikely place: the garden shed.
        </p>
        <p>
          Their first prototype turntable, cast in iron and set beneath a simple octagonal
          timber frame, could rotate a two-tonne structure with a single hand crank. It was
          this mechanism - refined many times over, now built from marine-grade steel and
          hardwood rather than cast iron - that our founders licensed in 1971 to build the
          very first Oxford.
        </p>
        <h2 className="font-display text-xl font-semibold text-bark-950">A partnership that endures</h2>
        <p>
          Bolton &amp; Paul closed its Norfolk works in 1987, but its drawings, tolerances
          and turning-ring geometry remain the foundation of every base we build. It is a
          small piece of British industrial history, quietly rotating in gardens across the
          country to this day.
        </p>
      </article>
    </div>
  );
}
