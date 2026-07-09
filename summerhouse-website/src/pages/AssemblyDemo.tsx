import PageHeader from "../components/PageHeader";
import VideoShowcase from "../components/VideoShowcase";

export default function AssemblyDemo() {
  return (
    <div>
      <PageHeader
        eyebrow="From Workshop to Garden"
        title="Assembly Demo"
        description="Our installation team builds every summerhouse on site, start to finish, in a single day. This time-lapse follows an Oxford from foundation to finished roof."
      />
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-14">
        <VideoShowcase
          src="/videos/assembly-demo.mp4"
          poster="/images/gallery/1.jpg"
          title="On-site assembly, start to finish"
        />
        <p className="mt-6 text-sm leading-relaxed text-bark-700">
          A base and turntable are levelled first, followed by the timber frame, roof and
          glazing. Our two-person team completes most models in a single day, leaving your
          garden as tidy as they found it.
        </p>
      </div>
    </div>
  );
}
