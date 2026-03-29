"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  type ContactSchemaInput,
  contactSchema,
} from "@/lib/contact-schema";

type ContactSectionProps = {
  email: string;
  phone: string;
};

export function ContactSection({ email, phone }: ContactSectionProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchemaInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: ContactSchemaInput) => {
    setStatusMessage(null);
    setFallbackHref(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const payload = (await response.json()) as {
      ok: boolean;
      error?: string;
    };

    if (!response.ok || !payload.ok) {
      setIsSuccess(false);
      setStatusMessage(
        `Currently, sending messages is not working. Sorry for the inconvenience. Kindly contact via ${email}.`,
      );
      return;
    }

    setIsSuccess(true);
    setStatusMessage("Message sent successfully. Thanks for reaching out.");
    reset();
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Contact"
            description="If my profile and engineering work align with your role, send a message and I will respond by email."
          />
        </Reveal>

        <div className="mt-8">
          <Reveal className="section-shell mx-auto max-w-2xl rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40"
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                ) : null}
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" tabIndex={-1} {...register("company")} />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40"
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {fallbackHref ? (
                <a
                  href={fallbackHref}
                  className="ml-3 inline-flex items-center rounded-full border border-border bg-background-elevated px-5 py-2.5 text-sm font-semibold transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Open Mail Draft
                </a>
              ) : null}

              <p className="text-muted-foreground">
                Reply destination:{" "}
                <a href={`mailto:${email}`} className="text-accent hover:underline">
                  {email}
                </a>
              </p>
              <p className="text-xl text-muted-foreground">
                Contact number:{" "}
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-accent hover:underline"
                >
                  {phone}
                </a>
              </p>

              {statusMessage ? (
                <p
                  className={`text-sm ${isSuccess ? "text-emerald-500" : "text-amber-300"}`}
                  role="status"
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
