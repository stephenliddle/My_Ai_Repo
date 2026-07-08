import PageHeader from "../components/PageHeader";

export default function GoingInternational() {
  return (
    <div>
      <PageHeader eyebrow="Our History" title="Going International" />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-10 text-base leading-relaxed text-bark-700 sm:px-10 lg:px-14">
        <p>
          For most of our history, The Revolving Summerhouse Company built exclusively for
          gardens within a day's drive of our Norfolk workshop. That changed in 1998, with a
          single, ambitious order: a Blenheim, shipped whole across the Atlantic to a
          rooftop garden on Manhattan's Upper East Side.
        </p>
        <h2 className="font-display text-xl font-semibold text-bark-950">A summerhouse for New York</h2>
        <p>
          The client, an English expatriate with a fondness for the gardens of her
          childhood, had seen a Blenheim at a Chelsea show garden and asked a simple
          question: could one be built forty floors above Fifth Avenue? Our engineers spent
          six months adapting the design - lighter framing to meet the building's load
          limits, a sealed turntable bearing rated for coastal wind gusts, and a disassembly
          plan that would let the entire structure travel by container ship and then by
          service elevator.
        </p>
        <p>
          It arrived in New York in eleven crates, was reassembled by our own installation
          team over four days, and turned for the first time above the city skyline in the
          spring of 1999. It remains, as far as we know, the only hand-cranked revolving
          summerhouse in Manhattan.
        </p>
        <h2 className="font-display text-xl font-semibold text-bark-950">Building on that first order</h2>
        <p>
          Since then we have shipped summerhouses to gardens in Ireland, France, the
          Netherlands and the United States, each one built first in Norfolk, then taken
          apart, crated and rebuilt on site by our own team - the same process, wherever in
          the world it leads us.
        </p>
      </article>
    </div>
  );
}
