import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SiteNav, SiteFooter, Ltr } from "@/components/site-chrome";
import RevealText from "@/components/RevealText";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import { contact, leadership, telHref, waHref } from "@/lib/company";
import { breadcrumbJsonLd, seoLinks, seoMeta, seoScripts, webPageJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta({
      title: en.contact.meta.title,
      description: en.contact.meta.description,
      path: "/contact",
    }),
    links: seoLinks("/contact"),
    scripts: seoScripts([
      webPageJsonLd({
        title: en.contact.meta.title,
        description: en.contact.meta.description,
        path: "/contact",
      }),
      breadcrumbJsonLd([
        { name: en.projectDetail.breadcrumbHome, path: "/" },
        { name: en.nav.contact, path: "/contact" },
      ]),
    ]),
  }),
  component: ContactPage,
});

function Hero() {
  const d = useDict();
  return (
    <section className="blueprint-grid border-b border-border bg-[var(--sand)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {d.contact.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
          <RevealText as="span" text={d.contact.hero.title} />
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
          {d.contact.hero.lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={telHref(contact.phonePrimary)}
            className="ltr-nums inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-105"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <Ltr>{contact.phonePrimary}</Ltr>
          </a>
          <a
            href={waHref(contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground ring-1 ring-border transition hover:ring-primary/40"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {d.common.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

function Info() {
  const d = useDict();
  const lang = useLang();
  return (
    <div className="lg:col-span-5">
      <h2 className="text-2xl font-bold leading-tight md:text-3xl">{d.contact.info.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-foreground/75">{d.contact.info.lead}</p>

      <ul className="mt-9 space-y-5">
        <li className="flex items-start gap-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {d.contact.info.officeTitle}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {d.contact.info.officeValue}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{d.contact.info.officeNote}</p>
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
            <Clock className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {d.contact.info.hoursTitle}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{d.contact.info.daysValue}</p>
            <p className="ltr-nums mt-0.5 text-xs text-muted-foreground">
              <Ltr>{d.contact.info.hoursValue}</Ltr>
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {d.contact.info.generalEmail}
            </p>
            <a
              href={`mailto:${contact.emailGeneral}`}
              className="mt-1 block break-all text-sm font-semibold text-foreground transition hover:text-primary"
            >
              <Ltr>{contact.emailGeneral}</Ltr>
            </a>
          </div>
        </li>

        {contact.linkedin ? (
          <li className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {d.contact.info.linkedinLabel}
              </p>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm font-semibold text-foreground transition hover:text-primary"
              >
                {d.brand.name}
              </a>
            </div>
          </li>
        ) : null}
      </ul>

      <div className="mt-10 rounded-2xl bg-[var(--sand)] p-6 ring-1 ring-border">
        <h3 className="text-sm font-semibold">{d.home.quote.directTitle}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {d.home.quote.directLead}
        </p>
        <ul className="mt-5 space-y-4">
          {leadership.map((person) => (
            <li key={person.key}>
              <p className="text-sm font-semibold text-foreground">
                {lang === "ar" ? person.nameAr : person.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {d.about.leadership.roles[person.key]}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <a
                  href={telHref(person.phone)}
                  className="ltr-nums inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <Ltr>{person.phone}</Ltr>
                </a>
                <a
                  href={waHref(person.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-primary"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {d.common.whatsapp}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const fieldBase =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  onChange: (next: string) => void;
}) {
  return (
    <Field label={label} htmlFor={id}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={fieldBase}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </Field>
  );
}

type EnquiryValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
};

const emptyEnquiry: EnquiryValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
};

function EnquiryForm() {
  const d = useDict();
  const q = d.home.quote;
  const [v, setV] = useState<EnquiryValues>(emptyEnquiry);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof EnquiryValues>(k: K, value: EnquiryValues[K]) =>
    setV((prev) => ({ ...prev, [k]: value }));

  const validate = () => {
    const found: Record<string, string> = {};
    if (!v.name.trim()) found.name = q.required;
    if (!v.phone.trim()) found.phone = q.required;
    else if (!/^\+?[\d\s()-]{8,}$/.test(v.phone.trim())) found.phone = q.invalidPhone;
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      found.email = q.invalidEmail;
    if (!v.message.trim()) found.message = q.required;
    if (!v.consent) found.consent = q.consentRequired;
    return found;
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const rows = [
      `${q.fields.name}: ${v.name}`,
      v.company ? `${q.fields.company}: ${v.company}` : "",
      `${q.fields.phone}: ${v.phone}`,
      v.email ? `${q.fields.email}: ${v.email}` : "",
      v.city ? `${q.fields.city}: ${v.city}` : "",
      v.service ? `${q.fields.service}: ${v.service}` : "",
      v.budget ? `${q.fields.budget}: ${v.budget}` : "",
      v.timeline ? `${q.fields.timeline}: ${v.timeline}` : "",
      `${q.fields.message}: ${v.message}`,
    ].filter(Boolean);

    if (typeof window !== "undefined") {
      window.open(waHref(contact.whatsapp, rows.join("\n")), "_blank", "noopener,noreferrer");
    }
    setSent(true);
    setV(emptyEnquiry);
  };

  return (
    <div className="lg:col-span-7">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {d.contact.form.eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-bold leading-tight md:text-3xl">
        <RevealText as="span" text={d.contact.form.title} />
      </h2>
      <p className="mt-3 text-base leading-relaxed text-foreground/75">{d.contact.form.lead}</p>

      {sent ? (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-2xl bg-[var(--peach)] p-5 ring-1 ring-primary/30"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm font-medium leading-relaxed text-foreground">{q.success}</p>
        </div>
      ) : null}

      <form
        onSubmit={onSubmit}
        noValidate
        className="mt-7 rounded-[2rem] bg-card p-7 ring-1 ring-border md:p-9"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={q.fields.name} htmlFor="c-name" error={errors.name} required>
            <input
              id="c-name"
              name="name"
              type="text"
              autoComplete="name"
              value={v.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder={q.placeholders.name}
              className={fieldBase}
            />
          </Field>
          <Field label={q.fields.company} htmlFor="c-company">
            <input
              id="c-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={v.company}
              onChange={(e) => set("company", e.target.value)}
              placeholder={q.placeholders.company}
              className={fieldBase}
            />
          </Field>
          <Field label={q.fields.phone} htmlFor="c-phone" error={errors.phone} required>
            <input
              id="c-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              dir="ltr"
              autoComplete="tel"
              value={v.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder={q.placeholders.phone}
              className={fieldBase}
            />
          </Field>
          <Field label={q.fields.email} htmlFor="c-email" error={errors.email}>
            <input
              id="c-email"
              name="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              value={v.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder={q.placeholders.email}
              className={fieldBase}
            />
          </Field>
          <SelectField
            id="c-city"
            label={q.fields.city}
            value={v.city}
            options={q.cityOptions}
            placeholder={q.selectPlaceholder}
            onChange={(next) => set("city", next)}
          />
          <SelectField
            id="c-service"
            label={q.fields.service}
            value={v.service}
            options={q.serviceOptions}
            placeholder={q.selectPlaceholder}
            onChange={(next) => set("service", next)}
          />
          <SelectField
            id="c-budget"
            label={q.fields.budget}
            value={v.budget}
            options={q.budgetOptions}
            placeholder={q.selectPlaceholder}
            onChange={(next) => set("budget", next)}
          />
          <SelectField
            id="c-timeline"
            label={q.fields.timeline}
            value={v.timeline}
            options={q.timelineOptions}
            placeholder={q.selectPlaceholder}
            onChange={(next) => set("timeline", next)}
          />
        </div>

        <div className="mt-5">
          <Field label={q.fields.message} htmlFor="c-message" error={errors.message} required>
            <textarea
              id="c-message"
              name="message"
              rows={5}
              value={v.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder={q.placeholders.message}
              className={`${fieldBase} resize-y`}
            />
          </Field>
        </div>

        <div className="mt-6">
          <label htmlFor="c-consent" className="flex items-start gap-3">
            <input
              id="c-consent"
              name="consent"
              type="checkbox"
              checked={v.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
            />
            <span className="text-sm leading-relaxed text-foreground/80">{q.consent}</span>
          </label>
          {errors.consent ? (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.consent}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-105 sm:w-auto"
        >
          {q.submit}
          <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function OfficeMap() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="overflow-hidden rounded-[2rem] ring-1 ring-border">
        <iframe
          title={d.contact.map.title}
          src={contact.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full border-0"
        />
        <div className="flex flex-wrap items-center gap-2.5 bg-card px-6 py-5">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">{d.contact.map.note}</p>
          <span className="hairline mx-2 hidden h-4 sm:block" />
          <p className="text-xs text-muted-foreground">{d.contact.info.officeNote}</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main id="main">
        <Hero />
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <Info />
            <EnquiryForm />
          </div>
        </section>
        <OfficeMap />
      </main>
      <SiteFooter />
    </div>
  );
}
