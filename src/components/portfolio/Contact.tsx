import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/i18n/language";

const getSchema = (messages: { nameRequired: string; invalidEmail: string; messageMin: string }) =>
  z.object({
    name: z.string().trim().min(1, messages.nameRequired).max(100),
    email: z.string().trim().email(messages.invalidEmail).max(255),
    budget: z.string().max(50).optional(),
    message: z.string().trim().min(10, messages.messageMin).max(2000),
  });

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
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
    const subject = encodeURIComponent(`${copy.contact.mail.subjectPrefix} - ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${copy.contact.mail.fieldName}: ${parsed.data.name}\n${copy.contact.mail.fieldEmail}: ${parsed.data.email}\n${copy.contact.mail.fieldBudget}: ${
        parsed.data.budget || copy.contact.mail.budgetFallback
      }\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:pablo.farina28@outlook.com?subject=${subject}&body=${body}`;
    setTimeout(() => setState("sent"), 600);
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t-[4px] border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-[float-soft_5.2s_ease-in-out_infinite]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-[float-soft_6.1s_ease-in-out_infinite]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="mb-12 border-b-[3px] border-border pb-8">
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.24em] text-accent">
            {isPt ? "conversa de projeto" : "project conversation"}
          </p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-balance max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              {copy.contact.titleLine1}
              <br />
              <span className="bg-primary px-2 text-foreground">{copy.contact.titleLine2}</span>
            </h2>
            <span className="border-[3px] border-border bg-accent px-4 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-accent-foreground shadow-[4px_4px_0_var(--color-border)]">
              {isPt ? "resposta em 24h" : "24h reply"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <p className="max-w-md text-base font-semibold leading-relaxed text-muted-foreground">
              {copy.contact.body}
            </p>

            <div className="grid gap-3">
              {copy.contact.details.map((r, idx) => (
                <div
                  key={r.k}
                  className="border-[3px] border-border bg-card p-4 shadow-[6px_6px_0_var(--color-border)]"
                  style={{
                    animation: "reveal 0.75s var(--ease-out-expo) both",
                    animationDelay: `${idx * 80 + 120}ms`,
                  }}
                >
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.17em] text-muted-foreground">
                    {r.k}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{r.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden border-[4px] border-border bg-card p-6 shadow-[12px_12px_0_var(--color-border)] sm:p-8 md:p-10"
              noValidate
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-12 border-[3px] border-border bg-primary" />
              <div className="pointer-events-none absolute -bottom-8 left-12 h-16 w-40 -rotate-6 border-[3px] border-border bg-accent" />

              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
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

              <div className="relative mt-6">
                <Field
                  label={copy.contact.labels.budget}
                  name="budget"
                  placeholder={copy.contact.placeholders.budget}
                  error={errors.budget}
                />
              </div>

              <div className="relative mt-6">
                <label className="mb-2 block font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {copy.contact.labels.project}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={2000}
                  placeholder={copy.contact.placeholders.project}
                  className="w-full resize-none border-[3px] border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-[4px_4px_0_var(--color-border)] placeholder:text-muted-foreground/60 transition-transform focus:translate-x-0.5 focus:translate-y-0.5 focus:outline-none focus:shadow-[2px_2px_0_var(--color-border)]"
                />
                {errors.message && (
                  <p className="mt-2 font-mono text-[11px] text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-border pt-6">
                <p className="max-w-sm font-mono text-[11px] font-bold text-muted-foreground">
                  {state === "sent" ? copy.contact.statusSent : copy.contact.statusIdle}
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="group inline-flex items-center gap-3 border-[3px] border-border bg-accent px-6 py-3 text-sm font-black uppercase text-accent-foreground shadow-[6px_6px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
                >
                  {state === "sending" ? copy.contact.submitSending : copy.contact.submitIdle}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
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
      <label className="mb-2 block font-mono text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full border-[3px] border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-[4px_4px_0_var(--color-border)] placeholder:text-muted-foreground/60 transition-transform focus:translate-x-0.5 focus:translate-y-0.5 focus:outline-none focus:shadow-[2px_2px_0_var(--color-border)]"
      />
      {error && <p className="mt-2 font-mono text-[11px] text-destructive">{error}</p>}
    </div>
  );
}
