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
        description="The Revolving Summerhouse Company specializes in crafting authentic Victorian revolving summerhouses based on the historic designs of Bolton & Paul of Norwich."
      />

      <div className="mx-auto max-w-4xl px-6 py-6 sm:px-10 lg:px-14" />
    </div>
  );
}
