import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  budget: z.string().max(50).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more (10+ chars)")
    .max(2000),
});

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    const subject = encodeURIComponent(`New project — ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nBudget: ${
        parsed.data.budget || "—"
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
              Have a project
              <br />
              <span className="font-serif italic text-muted-foreground">
                in mind?
              </span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell me about it — even a rough idea works. I reply within 24h
              with honest feedback on scope, timeline and price.
            </p>

            <dl className="mt-10 space-y-5">
              {[
                { k: "Email", v: "hello@err-studio.dev" },
                { k: "Response", v: "Under 24h" },
                { k: "Status", v: "Accepting Q3 projects" },
              ].map((r) => (
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
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email}
                />
              </div>
              <div className="mt-6">
                <Field
                  label="Budget"
                  name="budget"
                  placeholder="e.g. 5k — 10k (optional)"
                  error={errors.budget}
                />
              </div>
              <div className="mt-6">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Project
                </label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={2000}
                  placeholder="What are you trying to build?"
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
                    ? "✓ Opened your mail client — see you on the other side."
                    : "Opens your mail client with everything filled in."}
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="group inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                >
                  {state === "sending" ? "Sending…" : "Send message"}
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
