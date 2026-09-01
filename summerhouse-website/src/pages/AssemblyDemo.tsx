import PageHeader from "../components/PageHeader";
import VideoShowcase from "../components/VideoShowcase";

export default function AssemblyDemo() {
  return (
    <div>
      <PageHeader
        title="Assembly Demo"
        description="Watch how our revolving summerhouses are expertly assembled. See the craftsmanship and attention to detail that goes into every installation."
      />
      <div className="mx-auto max-w-4xl px-6 py-4 sm:px-10 lg:px-14">
        <VideoShowcase
          src="/videos/Assembling.mp4"
          poster="/images/hero-summerhouse.jpg"
          title="On-site assembly, start to finish"
        />
        <p className="mt-6 text-sm leading-relaxed text-bark-700">
          We begin by preparing the site and installing the revolving base mechanism. The
          floor, wall panels, roof and glazing are then fitted and tested before handover.
        </p>
      </div>
    </div>
  );
}
