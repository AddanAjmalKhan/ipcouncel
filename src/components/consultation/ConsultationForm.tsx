"use client";

import { useState } from "react";

const legalMatters = [
  "New Trademark Application",
  "Trademark Search & Clearance",
  "Office Action Response",
  "Madrid Protocol / Global Filing",
  "Renewal",
  "Opposition Board Proceeding",
  "Brand Enforcement",
  "Other",
];

const fieldClasses =
  "mt-3 w-full border-b border-cream/20 bg-transparent pb-3 text-base text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none";

const labelClasses =
  "block text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/50";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="bg-ink p-6 sm:p-10 lg:p-12">
        <h3 className="font-serif text-2xl text-cream">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/60">
          We&apos;ve received your request and will be in touch shortly to
          schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink p-6 sm:p-10 lg:p-12">
      <h3 className="font-serif text-2xl text-cream">Schedule Consultation</h3>

      <form
        className="mt-8 space-y-6"
        onSubmit={async (event) => {
          event.preventDefault();
          setError(null);
          setIsSubmitting(true);

          const form = event.currentTarget;
          const formData = new FormData(form);

          try {
            const response = await fetch("/api/consultation", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                matter: formData.get("matter"),
                message: formData.get("message"),
              }),
            });

            if (!response.ok) {
              const data = await response.json().catch(() => null);
              throw new Error(data?.error || "Something went wrong. Please try again.");
            }

            setSubmitted(true);
          } catch (err) {
            setError(
              err instanceof Error
                ? err.message
                : "Something went wrong. Please try again."
            );
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Company Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone (Optional)
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClasses} />
        </div>

        <div>
          <label htmlFor="matter" className={labelClasses}>
            Legal Matter
          </label>
          <select id="matter" name="matter" defaultValue="" className={fieldClasses}>
            <option value="" disabled className="bg-ink text-cream/50">
              Select a matter...
            </option>
            {legalMatters.map((matter) => (
              <option key={matter} value={matter} className="bg-ink text-cream">
                {matter}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Brief Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-3 w-full border border-cream/20 bg-ink-light px-4 py-3 text-base text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
          />
        </div>

        {error && (
          <p className="text-sm leading-relaxed text-red-400" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Request Consultation"}
        </button>

        <p className="text-xs leading-relaxed text-cream/40">
          Submission of this form does not create an attorney-client
          relationship. Please do not send confidential information.
        </p>
      </form>
    </div>
  );
}
