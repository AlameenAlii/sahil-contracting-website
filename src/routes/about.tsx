import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Eye,
  Mail,
  Phone,
  ShieldCheck,
  Target,
} from "lucide-react";
import { SiteNav, SiteFooter, Ltr } from "@/components/site-chrome";
import RevealText from "@/components/RevealText";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import {
  profileFor,
  contact,
  leadership,
  standards,
  statValues,
  telHref,
} from "@/lib/company";
import { breadcrumbJsonLd, seoLinks, seoMeta, seoScripts, webPageJsonLd } from "@/lib/seo";
import heroImg from "@/assets/mn-about-engineers.jpg";
import ctaImg from "@/assets/mn-cta-riyadh.jpg";
import visionLogo from "@/assets/vision-2030.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({
      title: en.about.meta.title,
      description: en.about.meta.description,
      path: "/about",
    }),
    links: seoLinks("/about"),
    scripts: seoScripts([
      webPageJsonLd({
        title: en.about.meta.title,
        description: en.about.meta.description,
        path: "/about",
      }),
      breadcrumbJsonLd([
        { name: en.projectDetail.breadcrumbHome, path: "/" },
        { name: en.nav.about, path: "/about" },
      ]),
    ]),
  }),
  component: AboutPage,
});

function Hero() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
        <img
          src={heroImg}
          alt={d.about.hero.imageAlt}
          className="h-[58vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-[var(--ink)]/50 to-[var(--ink)]/88" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.about.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-[1.08] text-white md:text-5xl">
            <RevealText as="span" text={d.about.hero.title} />
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            {d.about.hero.lead}
          </p>
        </div>
      </div>
    </section>
  );
}

function Who() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.about.who.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.about.who.title} />
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            {d.about.who.body1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            {d.about.who.body2}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            {d.about.who.body3}
          </p>
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border lg:grid-cols-4">
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

function VisionMission() {
  const d = useDict();
  const cards = [
    { key: "vision", icon: Eye, label: d.about.vision.label, body: d.about.vision.body },
    { key: "mission", icon: Target, label: d.about.mission.label, body: d.about.mission.body },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.key} className="rounded-[2rem] bg-card p-8 ring-1 ring-border md:p-10">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--peach)] text-primary">
              <c.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {c.label}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">{c.body}</p>
          </div>
        ))}

        <div className="flex flex-col justify-between rounded-[2rem] bg-[var(--steel)] p-8 text-[var(--steel-foreground)] md:p-10">
          <div>
            <span className="inline-grid place-items-center rounded-xl bg-white p-3 ring-1 ring-white/20">
              <img
                src={visionLogo}
                alt={d.credentials.vision2030}
                width={104}
                height={70}
                loading="lazy"
                decoding="async"
                className="h-auto w-[104px]"
              />
            </span>
            <p className="mt-6 text-base font-semibold leading-snug">{d.credentials.vision2030}</p>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--steel-foreground)]/70">
              {d.credentials.vision2030Note}
            </p>
          </div>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {d.common.basedIn}
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const d = useDict();
  return (
    <section className="mt-28 bg-[var(--sand)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.about.values.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
            <RevealText as="span" text={d.about.values.title} />
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {d.about.values.items.map((item, i) => (
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
      </div>
    </section>
  );
}

function Leadership() {
  const d = useDict();
  const lang = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {d.about.leadership.eyebrow}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">
          <RevealText as="span" text={d.about.leadership.title} />
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">
          {d.about.leadership.lead}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {leadership.map((person) => (
          <div key={person.key} className="rounded-2xl bg-card p-7 ring-1 ring-border">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {d.about.leadership.roles[person.key]}
            </p>
            <h3 className="mt-2.5 text-xl font-semibold leading-snug text-foreground">
              {lang === "ar" ? person.nameAr : person.name}
            </h3>
            <div className="mt-5 space-y-2.5">
              <a
                href={telHref(person.phone)}
                className="flex items-center gap-2.5 text-sm font-semibold text-foreground transition hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="ltr-nums">
                  <Ltr>{person.phone}</Ltr>
                </span>
              </a>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <Ltr>{person.email}</Ltr>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Registry() {
  const d = useDict();
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div className="rounded-[2rem] bg-card p-8 ring-1 ring-border md:p-10">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-lg font-semibold">{d.credentials.standardsTitle}</h2>
        </div>
        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border sm:grid-cols-2">
          {standards.map((s) => (
            <div key={s.key} className="bg-background p-6">
              <dt className="ltr-nums text-sm font-black tracking-wide text-primary">
                <Ltr>{s.code}</Ltr>
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-foreground">
                {d.credentials.standardNames[s.key]}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.credentials.standardDetails[s.key]}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {d.credentials.docsNote}
        </p>
      </div>
    </section>
  );
}

function Cta() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
        <img
          src={ctaImg}
          alt={d.home.cta.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/88 via-[var(--ink)]/65 to-[var(--ink)]/88" />
        <div className="relative px-6 py-20 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
            <RevealText as="span" text={d.about.cta.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {d.about.cta.lead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/40 transition hover:brightness-105"
            >
              {d.about.cta.primary}
              <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
            </Link>
            <a
              href={profile.path}
              download={profile.fileName}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.about.cta.secondary}
            </a>
          </div>
          <a
            href={telHref(contact.phonePrimary)}
            className="ltr-nums mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-primary hover:underline"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{d.common.callUs}</span>
            <Ltr>{contact.phonePrimary}</Ltr>
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main id="main">
        <Hero />
        <Who />
        <VisionMission />
        <Values />
        <Leadership />
        <Registry />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
