import PageHeader from "../components/PageHeader";
import VideoShowcase from "../components/VideoShowcase";

export default function RevolvingDemo() {
  return (
    <div>
      <PageHeader
        eyebrow="See it in Action"
        title="Revolving Demo"
        description="Watch a Windsor complete a full, silent rotation on its motorised turntable, from morning shade into afternoon sun."
      />
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-14">
        <VideoShowcase
          src="/videos/revolving-demo.mp4"
          poster="/images/gallery/6.jpg"
          title="The revolving mechanism, demonstrated"
        />
        <p className="mt-6 text-sm leading-relaxed text-bark-700">
          Every Revolving Summerhouse Company building sits on a steel-and-timber turntable.
          Smaller models turn with a hand crank; the Windsor, Chatsworth and Blenheim are
          fitted with a quiet electric motor that can be controlled by a wall switch, remote,
          or companion app.
        </p>
      </div>
    </div>
  );
}
