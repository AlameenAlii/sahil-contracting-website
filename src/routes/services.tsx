import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Paintbrush,
  ShieldCheck,
  Sofa,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import RevealText from "@/components/RevealText";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import { profileFor } from "@/lib/company";
import {
  breadcrumbJsonLd,
  seoLinks,
  seoMeta,
  seoScripts,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import buildImg from "@/assets/mn-hero-site.jpg";
import finishingImg from "@/assets/mn-proj-plastics-commissioning.jpg";
import interiorsImg from "@/assets/mn-proj-compound-gates.jpg";
import managementImg from "@/assets/mn-about-engineers.jpg";
import ctaImg from "@/assets/mn-cta-riyadh.jpg";
import heroImg from "@/assets/mn-svc-manpower.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: seoMeta({
      title: en.services.meta.title,
      description: en.services.meta.description,
      path: "/services",
    }),
    links: seoLinks("/services"),
    scripts: seoScripts([
      webPageJsonLd({
        title: en.services.meta.title,
        description: en.services.meta.description,
        path: "/services",
      }),
      breadcrumbJsonLd([
        { name: en.projectDetail.breadcrumbHome, path: "/" },
        { name: en.nav.services, path: "/services" },
      ]),
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
  component: ServicesPage,
});

function Hero() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  return (
    <section className="blueprint-grid border-b border-border bg-[var(--sand)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {d.services.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
          <RevealText as="span" text={d.services.hero.title} />
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
          {d.services.hero.lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-105"
          >
            {d.common.requestQuote}
            <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
          </Link>
          <a
            href={profile.path}
            download={profile.fileName}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground ring-1 ring-border transition hover:ring-primary/40"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
            {d.common.downloadProfileShort}
          </a>
        </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-border">
            <img
              src={heroImg}
              alt={d.services.hero.imageAlt}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/55 via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
              {d.services.hero.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceLines() {
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
    <section className="mx-auto max-w-7xl px-6">
      <div className="divide-y divide-border">
        {lines.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={s.key} id={s.key} className="scroll-mt-28 py-20 md:py-28">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className={flip ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"}>
                  <div className="overflow-hidden rounded-[2rem] ring-1 ring-border">
                    <img
                      src={s.img}
                      alt={s.line.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
                <div className={flip ? "lg:order-1 lg:col-span-6" : "lg:col-span-6"}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="ltr-nums text-xs font-black text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="mt-5 text-balance text-3xl font-bold leading-tight md:text-4xl">
                    <RevealText as="span" text={s.line.name} />
                  </h2>
                  <p className="mt-4 text-base font-medium leading-relaxed text-foreground/85 md:text-lg">
                    {s.line.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.line.body}
                  </p>
                  <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {s.line.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 rounded-xl bg-card p-3 text-sm text-foreground/80 ring-1 ring-border"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Approach() {
  const d = useDict();
  return (
    <section className="bg-[var(--steel)] py-20 md:py-28 text-[var(--steel-foreground)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-primary">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {d.services.approach.eyebrow}
              </p>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight md:text-4xl">
              <RevealText as="span" text={d.services.approach.title} />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--steel-foreground)]/70">
              {d.services.approach.lead}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10">
              {d.services.approach.points.map((point, i) => (
                <div key={point.title} className="bg-[var(--steel)] p-7">
                  <p className="ltr-nums text-xs font-black text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{point.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--steel-foreground)]/65">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const d = useDict();
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
            <RevealText as="span" text={d.services.cta.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {d.services.cta.lead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/40 transition hover:brightness-105"
            >
              {d.services.cta.primary}
              <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
            >
              {d.services.cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main id="main">
        <Hero />
        <ServiceLines />
        <Approach />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
