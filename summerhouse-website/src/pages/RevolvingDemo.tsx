import PageHeader from "../components/PageHeader";
import VideoShowcase from "../components/VideoShowcase";

export default function RevolvingDemo() {
  return (
    <div>
      <PageHeader
        title="Revolving Demo"
        description="See the unique revolving mechanism in action. Watch how effortlessly our summerhouses rotate."
      />
      <div className="mx-auto max-w-4xl px-6 py-4 sm:px-10 lg:px-14">
        <VideoShowcase
          src="/videos/Rotating.mp4"
          poster="/images/hero-summerhouse.jpg"
          title="The revolving mechanism, demonstrated"
        />
        <p className="mt-6 text-sm leading-relaxed text-bark-700">
          A unique invention that lets you follow the sun and enjoy a changing view of your
          garden throughout the day. The turntable makes the whole room rotate smoothly on its
          base, creating a living space that adapts to the weather and the light.
        </p>
      </div>
    </div>
  );
}
