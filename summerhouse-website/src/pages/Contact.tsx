import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";

const contactDetails = [
  { label: "Workshop & Showground", value: "The Old Sawmill, Reepham Road, Norfolk, NR10 4JT" },
  { label: "Telephone", value: "01603 555 0142" },
  { label: "Email", value: "enquiries@revolvingsummerhouse.co.uk" },
  { label: "Opening Hours", value: "Mon\u2013Sat, 9am\u20135pm" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please tell us a little about your enquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Whether you're choosing between models or planning a bespoke build, our team is happy to help."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 sm:px-10 lg:grid-cols-5 lg:px-14">
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-bark-950">Visit or write to us</h2>
          <dl className="mt-4 space-y-4">
            {contactDetails.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-moss-600">{d.label}</dt>
                <dd className="mt-1 text-sm text-bark-700">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-2xl border border-moss-500/30 bg-moss-50 p-6">
              <p className="font-display text-lg font-semibold text-moss-700">Thank you!</p>
              <p className="mt-2 text-sm text-bark-700">
                Your message has been received. A member of our team will be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-moss-700 underline underline-offset-2 hover:text-moss-600"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="Tell us about your garden, and which model interests you."
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-moss-700 px-6 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition-colors hover:bg-moss-600"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
