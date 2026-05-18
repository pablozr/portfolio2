import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/i18n/language";

const getSchema = (messages: {
  nameRequired: string;
  invalidEmail: string;
  messageMin: string;
}) =>
  z.object({
    name: z.string().trim().min(1, messages.nameRequired).max(100),
    email: z.string().trim().email(messages.invalidEmail).max(255),
    budget: z.string().max(50).optional(),
    message: z.string().trim().min(10, messages.messageMin).max(2000),
  });

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { copy } = useLanguage();
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const schema = getSchema(copy.contact.errors);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("sending");
    // Compose a mailto with the structured info as a graceful fallback
    const subject = encodeURIComponent(
      `${copy.contact.mail.subjectPrefix} - ${parsed.data.name}`
    );
    const body = encodeURIComponent(
      `${copy.contact.mail.fieldName}: ${parsed.data.name}\n${copy.contact.mail.fieldEmail}: ${parsed.data.email}\n${copy.contact.mail.fieldBudget}: ${
        parsed.data.budget || copy.contact.mail.budgetFallback
      }\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:hello@err-studio.dev?subject=${subject}&body=${body}`;
    setTimeout(() => setState("sent"), 600);
  }

  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              // get in touch
            </p>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {copy.contact.titleLine1}
              <br />
              <span className="font-serif italic text-muted-foreground">
                {copy.contact.titleLine2}
              </span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              {copy.contact.body}
            </p>

            <dl className="mt-10 space-y-5">
              {copy.contact.details.map((r) => (
                <div
                  key={r.k}
                  className="flex items-baseline justify-between border-b border-border pb-3"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {r.k}
                  </dt>
                  <dd className="text-sm text-foreground">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-md border border-border bg-card/40 p-8 sm:p-10"
              noValidate
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  label={copy.contact.labels.name}
                  name="name"
                  placeholder={copy.contact.placeholders.name}
                  error={errors.name}
                />
                <Field
                  label={copy.contact.labels.email}
                  name="email"
                  type="email"
                  placeholder={copy.contact.placeholders.email}
                  error={errors.email}
                />
              </div>
              <div className="mt-6">
                <Field
                  label={copy.contact.labels.budget}
                  name="budget"
                  placeholder={copy.contact.placeholders.budget}
                  error={errors.budget}
                />
              </div>
              <div className="mt-6">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {copy.contact.labels.project}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={2000}
                  placeholder={copy.contact.placeholders.project}
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-2 font-mono text-[11px] text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {state === "sent"
                    ? copy.contact.statusSent
                    : copy.contact.statusIdle}
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="group inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                >
                  {state === "sending"
                    ? copy.contact.submitSending
                    : copy.contact.submitIdle}
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
      />
      {error && (
        <p className="mt-2 font-mono text-[11px] text-destructive">{error}</p>
      )}
    </div>
  );
}
