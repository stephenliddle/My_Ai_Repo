import PageHeader from "../components/PageHeader";

export default function BoltonAndPaul() {
  return (
    <div>
      <PageHeader eyebrow="Our History" title="Bolton & Paul" />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-10 text-base leading-relaxed text-bark-700 sm:px-10 lg:px-14">
        <p>
          Boulton &amp; Paul Ltd was a British general manufacturer from Norwich, England that
          became involved in aircraft manufacture. Jeld Wen Inc. bought Boulton &amp; Paul
          (along with another joinery company, John Carr) from the Rugby Group plc in 1999 to
          form its British subsidiary.
        </p>

        <h2 className="font-display text-xl font-semibold text-bark-950">IRONMONGERS</h2>
        <p>
          The company&apos;s origins date back to an ironmonger&apos;s shop founded in 1797 in
          Norwich by William Moore. William Staples Boulton joined the ironworks firm of Moore
          &amp; Barnard in 1844. By 1870 Boulton had been elevated to a partner alongside John
          Barnard and the firm was renamed Barnard &amp; Boulton. A later partner in the firm was
          Joseph Paul, and the firm was again renamed to Boulton &amp; Paul Ltd, which started its
          construction engineering division in 1905.
        </p>
        <p>
          By the early 1900s, Boulton &amp; Paul Ltd had become a successful general manufacturing
          firm. During the Second World War it was a major producer of prefabricated buildings,
          wire netting and wooden sub-assemblies of aircraft. In 1942 the Midland Woodworking
          Company of Melton Mowbray became a subsidiary.
        </p>

        <h2 className="font-display text-xl font-semibold text-bark-950">AIRCRAFT MANUFACTURE</h2>
        <p>
          In 1915, Boulton &amp; Paul began to construct aircraft under contract including 550 of the
          Royal Aircraft Factory FE.2b. Their extensive use of jigs and the manufacture of the
          smaller fittings required meant that they could maintain fast production. A new production
          site was built and an assembly and proving ground developed on Mousehold Heath in Norwich.
        </p>
        <p>
          Boulton &amp; Paul developed steel-framed aircraft under their designer John Dudley North.
          After World War I, they made their mark with the introduction of powered and enclosed
          defensive machine gun turrets for bombers. Their Sidestrand twin-engined biplane bomber
          and subsequent Overstrand bomber featured the world&apos;s first enclosed, power-operated turret.
        </p>
        <p>
          In a depressed market in 1934, the aircraft division was sold to create Boulton Paul
          Aircraft Ltd. This moved to Wolverhampton in 1936. In 1961 Boulton Paul Aircraft merged
          with the Dowty Group to form Dowty Boulton Paul Ltd and then Dowty Aerospace.
        </p>
      </article>
    </div>
  );
}
