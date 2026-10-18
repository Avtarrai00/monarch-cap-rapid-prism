import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  email: z.email("Use a valid email so a reply can find you."),
  message: z.string().trim().min(12, "A few more words helps — what are you making?"),
});

type Fields = z.infer<typeof schema>;

const empty: Fields = { name: "", email: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState<Fields | null>(null);
  const [copied, setCopied] = useState(false);

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if ((key === "name" || key === "email" || key === "message") && !next[key]) {
          next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setReady(result.data);
    setCopied(false);
  }

  async function copyNote() {
    if (!ready) return;
    const text = `${ready.name}\n${ready.email}\n\n${ready.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const composed = ready ? `${ready.name}\n${ready.email}\n\n${ready.message}` : "";

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div>
          <p className="kicker">04 — Contact</p>
          <h2 id="contact-title" className="section-title mt-3">
            Tell me what you are making.
          </h2>
          <p className="contact-lead">
            A short note is enough: the work, the timing, and how you like to collaborate. I read
            everything and reply within two working days.
          </p>
        </div>
        <div className="form-card">
          {ready ? (
            <div className="note-ready" role="status">
              <h3>Note ready.</h3>
              <p className="text-ink-soft">
                Nothing was uploaded. Copy it into your mail when you want to send it.
              </p>
              <pre className="composed">{composed}</pre>
              <div className="form-actions">
                <Button type="button" onClick={() => void copyNote()}>
                  {copied ? "Copied" : "Copy note"}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setReady(null);
                    setValues(empty);
                    setCopied(false);
                  }}
                >
                  Write another
                </Button>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit}>
              <div className="form-fields">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    onChange={(event) => update("name", event.target.value)}
                  />
                  {errors.name ? (
                    <p id="name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    onChange={(event) => update("email", event.target.value)}
                  />
                  {errors.email ? (
                    <p id="email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="message">Note</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    placeholder="The project, the timing, and what you need."
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    onChange={(event) => update("message", event.target.value)}
                  />
                  {errors.message ? (
                    <p id="message-error" className="field-error" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="form-actions">
                <Button type="submit">Prepare note</Button>
              </div>
              <p className="form-note">Your note stays in this browser. It is not stored or sent.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
