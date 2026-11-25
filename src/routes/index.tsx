import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Layers,
  MapPin,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sofa,
  Users,
} from "lucide-react";
import HomePreloader from "@/components/HomePreloader";
import LogoScroller from "@/components/LogoScroller";
import { SiteNav, SiteFooter, Ltr } from "@/components/site-chrome";
import RevealText from "@/components/RevealText";
import { projects } from "@/lib/projects";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import {
  profileFor,
  contact,
  leadership,
  standards,
  statValues,
  telHref,
  waHref,
} from "@/lib/company";
import { seoLinks, seoMeta, seoScripts, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import heroImg from "@/assets/mn-hero-site.jpg";
import aboutImg from "@/assets/mn-about-engineers.jpg";
import ctaImg from "@/assets/mn-cta-riyadh.jpg";
import buildImg from "@/assets/mn-hero-site.jpg";
import finishingImg from "@/assets/mn-proj-plastics-commissioning.jpg";
import interiorsImg from "@/assets/mn-proj-compound-gates.jpg";
import managementImg from "@/assets/mn-about-engineers.jpg";
import visionLogo from "@/assets/vision-2030.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seoMeta({
      title: en.home.meta.title,
      description: en.home.meta.description,
      path: "/",
    }),
    links: seoLinks("/"),
    scripts: seoScripts([
      webPageJsonLd({
        title: en.home.meta.title,
        description: en.home.meta.description,
        path: "/",
      }),
      serviceJsonLd({
        name: en.services.lines.build.name,
        description: en.services.lines.build.summary,
        path: "/services",
      }),
      serviceJsonLd({
        name: en.services.lines.finishing.name,
        description: en.services.lines.finishing.summary,
        path: "/services",
      }),
      serviceJsonLd({
        name: en.services.lines.interiors.name,
        description: en.services.lines.interiors.summary,
        path: "/services",
      }),
      serviceJsonLd({
        name: en.services.lines.management.name,
        description: en.services.lines.management.summary,
        path: "/services",
      }),
    ]),
  }),
  component: HomePage,
});

function Hero() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="relative isolate overflow-hidden rounded-[2rem] ring-1 ring-border">
        <img
          src={heroImg}
          alt={d.home.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/45 via-[var(--ink)]/50 to-[var(--ink)]/88" />
        <div className="relative flex min-h-[560px] flex-col justify-end p-6 md:min-h-[78vh] md:p-14">
          <p className="inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {d.home.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            <RevealText as="span" text={d.home.hero.titleLine1} />
            <br />
            <RevealText as="span" text={d.home.hero.titleLine2} delayStep={40} />
            <br />
            <RevealText
              as="span"
              text={d.home.hero.titleLine3}
              delayStep={60}
              wordClassName="text-primary"
            />
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            {d.home.hero.lead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:brightness-105"
            >
              {d.home.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
            >
              {d.home.hero.ctaSecondary}
            </Link>
            <a
              href={profile.path}
              download={profile.fileName}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-white hover:underline"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.common.downloadProfileShort}
            </a>
          </div>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            {d.home.hero.badge}
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border lg:grid-cols-4">
        {statValues.map((s) => (
          <div key={s.key} className="bg-card p-7 text-center">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {d.stats[s.key]}
            </dt>
            <dd className="ltr-nums mt-2 text-4xl font-black text-primary md:text-5xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Intro() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
            <img
              src={aboutImg}
              alt={d.home.intro.imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.home.intro.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.home.intro.title} />
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            {d.home.intro.body1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            {d.home.intro.body2}
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 transition hover:text-primary hover:underline"
          >
            {d.home.intro.cta}
            <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const d = useDict();
  const lines = [
    { key: "build", icon: Building2, img: buildImg, line: d.services.lines.build },
    {
      key: "finishing",
      icon: Paintbrush,
      img: finishingImg,
      line: d.services.lines.finishing,
    },
    {
      key: "interiors",
      icon: Sofa,
      img: interiorsImg,
      line: d.services.lines.interiors,
    },
    {
      key: "management",
      icon: ClipboardCheck,
      img: managementImg,
      line: d.services.lines.management,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.home.services.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.home.services.title} />
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {d.home.services.lead}
          </p>
        </div>
        <Link
          to="/services"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 transition hover:text-primary hover:underline"
        >
          {d.home.services.cta}
          <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {lines.map((s) => (
          <Link
            key={s.key}
            to="/services"
            className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={s.img}
                alt={s.line.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-transparent to-transparent" />
              <span className="absolute bottom-3 start-3 grid h-11 w-11 place-items-center rounded-xl bg-white text-primary ring-1 ring-border">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-xl font-semibold leading-snug text-foreground">{s.line.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.line.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.line.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {d.common.learnMore}
                <ArrowUpRight className="h-4 w-4 shrink-0 rtl:-scale-x-100" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const d = useDict();
  const featured = projects.slice(0, 3);

  return (
    <section className="mt-28 bg-[var(--sand)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {d.home.projects.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
              <RevealText as="span" text={d.home.projects.title} />
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              {d.home.projects.lead}
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 transition hover:text-primary hover:underline"
          >
            {d.home.projects.cta}
            <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((p) => {
            const item = d.projectsData.items[p.slug as keyof typeof d.projectsData.items];
            const title = item ? item.title : p.title;
            return (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute start-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground ring-1 ring-border backdrop-blur">
                    {d.projectsData.categories[p.category]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {
                        d.projectsData.locations[
                          p.location as keyof typeof d.projectsData.locations
                        ]
                      }
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {
                        d.projectsData.facilityTypes[
                          p.facilityType as keyof typeof d.projectsData.facilityTypes
                        ]
                      }
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {d.home.why.eyebrow}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
          <RevealText as="span" text={d.home.why.title} />
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {d.home.why.items.map((item, i) => (
          <div key={item.title} className="rule-accent">
            <p className="ltr-nums text-xs font-black text-primary">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const d = useDict();
  return (
    <section className="mt-28 bg-[var(--steel)] py-20 md:py-28 text-[var(--steel-foreground)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.home.process.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.home.process.title} />
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--steel-foreground)]/70">
            {d.home.process.lead}
          </p>
        </div>
        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {d.home.process.steps.map((s) => (
            <li key={s.step} className="bg-[var(--steel)] p-7">
              <p className="ltr-nums text-3xl font-black text-primary">{s.step}</p>
              <h3 className="mt-4 text-base font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--steel-foreground)]/65">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Credentials() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.credentials.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.credentials.title} />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">{d.credentials.lead}</p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
            <span className="grid shrink-0 place-items-center rounded-xl bg-white p-3 ring-1 ring-border">
              <img
                src={visionLogo}
                alt={d.credentials.vision2030}
                width={92}
                height={62}
                loading="lazy"
                decoding="async"
                className="h-auto w-[92px]"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{d.credentials.vision2030}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d.credentials.vision2030Note}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] bg-[var(--sand)] p-8 ring-1 ring-border md:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-primary ring-1 ring-border">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{d.credentials.standardsTitle}</h3>
            </div>
            <dl className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border sm:grid-cols-2">
              {standards.map((s) => (
                <div key={s.key} className="bg-white p-5">
                  <dt className="ltr-nums text-sm font-black tracking-wide text-primary">
                    <Ltr>{s.code}</Ltr>
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-foreground/75">
                    {d.credentials.standardNames[s.key]}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
              <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
              {d.credentials.standardsNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
        <img
          src={ctaImg}
          alt={d.home.cta.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/88 via-[var(--ink)]/65 to-[var(--ink)]/88" />
        <div className="relative px-6 py-20 text-center text-white md:px-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.home.cta.eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
            <RevealText as="span" text={d.home.cta.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {d.home.cta.lead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/40 transition hover:brightness-105"
            >
              {d.home.cta.primary}
              <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
            </a>
            <a
              href={telHref(contact.phonePrimary)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.home.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldBase =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

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
        className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
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
  options: string[];
  placeholder: string;
  onChange: (v: string) => void;
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
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  );
}

type QuoteValues = {
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

const emptyQuote: QuoteValues = {
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

function QuoteForm() {
  const d = useDict();
  const q = d.home.quote;
  const [v, setV] = useState<QuoteValues>(emptyQuote);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof QuoteValues>(k: K, value: QuoteValues[K]) =>
    setV((prev) => ({ ...prev, [k]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!v.name.trim()) e.name = q.required;
    if (!v.phone.trim()) e.phone = q.required;
    else if (!/^\+?[\d\s()-]{8,}$/.test(v.phone.trim())) e.phone = q.invalidPhone;
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = q.invalidEmail;
    if (!v.message.trim()) e.message = q.required;
    if (!v.consent) e.consent = q.consentRequired;
    return e;
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
    setV(emptyQuote);
  };

  return (
    <section id="quote" className="mx-auto max-w-7xl scroll-mt-28 px-6 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {q.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={q.title} />
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">{q.lead}</p>

          <div className="mt-8 rounded-2xl bg-[var(--sand)] p-6 ring-1 ring-border">
            <h3 className="text-sm font-semibold text-foreground">{q.directTitle}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{q.directLead}</p>
            <ul className="mt-5 space-y-4">
              {leadership.map((person) => (
                <li key={person.key} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-primary ring-1 ring-border">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{person.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {d.about.leadership.roles[person.key]}
                    </p>
                    <a
                      href={telHref(person.phone)}
                      className="ltr-nums mt-1 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      <Ltr>{person.phone}</Ltr>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          {sent ? (
            <div
              role="status"
              className="mb-5 flex items-start gap-3 rounded-2xl bg-[var(--peach)] p-5 ring-1 ring-primary/30"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed text-foreground">{q.success}</p>
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] bg-card p-7 ring-1 ring-border md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label={q.fields.name} htmlFor="name" error={errors.name} required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={v.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder={q.placeholders.name}
                  className={fieldBase}
                />
              </Field>
              <Field label={q.fields.company} htmlFor="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={v.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder={q.placeholders.company}
                  className={fieldBase}
                />
              </Field>
              <Field label={q.fields.phone} htmlFor="phone" error={errors.phone} required>
                <input
                  id="phone"
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
              <Field label={q.fields.email} htmlFor="email" error={errors.email}>
                <input
                  id="email"
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
                id="city"
                label={q.fields.city}
                value={v.city}
                options={q.cityOptions}
                placeholder={q.selectPlaceholder}
                onChange={(next) => set("city", next)}
              />
              <SelectField
                id="service"
                label={q.fields.service}
                value={v.service}
                options={q.serviceOptions}
                placeholder={q.selectPlaceholder}
                onChange={(next) => set("service", next)}
              />
              <SelectField
                id="budget"
                label={q.fields.budget}
                value={v.budget}
                options={q.budgetOptions}
                placeholder={q.selectPlaceholder}
                onChange={(next) => set("budget", next)}
              />
              <SelectField
                id="timeline"
                label={q.fields.timeline}
                value={v.timeline}
                options={q.timelineOptions}
                placeholder={q.selectPlaceholder}
                onChange={(next) => set("timeline", next)}
              />
            </div>

            <div className="mt-5">
              <Field label={q.fields.message} htmlFor="message" error={errors.message} required>
                <textarea
                  id="message"
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
              <label htmlFor="consent" className="flex items-start gap-3">
                <input
                  id="consent"
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
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePreloader />
      <SiteNav />
      <main id="main">
        <Hero />
        <StatsBand />
        <LogoScroller />
        <Intro />
        <Services />
        <ProjectsPreview />
        <Why />
        <Process />
        <Credentials />
        <CtaBand />
        <QuoteForm />
        <div className="h-24" />
      </main>
      <SiteFooter />
    </div>
  );
}
