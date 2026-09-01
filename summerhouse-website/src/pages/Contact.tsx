import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";

const contactDetails = [
  { label: "Email", value: "info@revolvingsummerhouses.co.uk" },
  { label: "Phone", value: "Contact via email for phone details" },
  { label: "Service Area", value: "Nationwide UK installations" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!subject) nextErrors.subject = "Please enter a subject.";
    if (!message) nextErrors.message = "Please tell us a little about your enquiry.";
    if (!phone && !message) {
      // keep the form simple; phone is optional
    }

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
        description="We'd love to discuss your garden project and answer any questions about our Victorian revolving summerhouses."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 sm:px-10 lg:grid-cols-5 lg:px-14">
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-bark-950">Send Us a Message</h2>
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
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="John Smith"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="01234 567890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="Enquiry about Appleton model"
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-bark-950">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-bark-900/15 bg-white px-3.5 py-2.5 text-sm text-bark-950 outline-none ring-moss-500 placeholder:text-bark-700/40 focus:ring-2"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-moss-700 px-6 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition-colors hover:bg-moss-600"
              >
                Send Message
              </button>
              <p className="text-xs text-bark-600">* Required fields</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
