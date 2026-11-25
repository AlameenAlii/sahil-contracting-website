import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Building2, Download, MapPin } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { projects, projectCategories, type ProjectCategory } from "@/lib/projects";
import RevealText from "@/components/RevealText";
import { breadcrumbJsonLd, seoLinks, seoMeta, seoScripts, webPageJsonLd } from "@/lib/seo";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import { profileFor } from "@/lib/company";
import heroImg from "@/assets/mn-hero-site.jpg";
import ctaImg from "@/assets/mn-cta-riyadh.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: seoMeta({
      title: en.projects.meta.title,
      description: en.projects.meta.description,
      path: "/projects",
    }),
    links: seoLinks("/projects"),
    scripts: seoScripts([
      webPageJsonLd({
        title: en.projects.meta.title,
        description: en.projects.meta.description,
        path: "/projects",
      }),
      breadcrumbJsonLd([
        { name: en.projectDetail.breadcrumbHome, path: "/" },
        { name: en.projectDetail.breadcrumbProjects, path: "/projects" },
      ]),
    ]),
  }),
  component: ProjectsPage,
});

/** "all" plus the three real service lines. */
type FilterKey = "all" | ProjectCategory;

function Hero() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
        <img
          src={heroImg}
          alt={d.home.hero.imageAlt}
          className="h-[62vh] min-h-[440px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/35 via-[var(--ink)]/45 to-[var(--ink)]/85" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {d.projects.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
              <RevealText as="span" text={d.projects.hero.title} />
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              {d.projects.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-105"
              >
                {d.common.requestQuote}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <a
                href={profile.path}
                download={profile.fileName}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                {d.common.downloadProfile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Grid() {
  const d = useDict();
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: d.projects.filters.all },
    ...projectCategories.map((c) => ({
      key: c as FilterKey,
      label: d.projectsData.categories[c],
    })),
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label={d.projects.filters.label}
      >
        {filters.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={
                "rounded-full px-4 py-2 text-sm font-semibold transition " +
                (active
                  ? "bg-primary text-primary-foreground shadow shadow-primary/30"
                  : "bg-card text-foreground/70 ring-1 ring-border hover:text-foreground")
              }
            >
              {f.label}
            </button>
          );
        })}
        <span className="ms-auto text-xs uppercase tracking-wider text-muted-foreground">
          {visible.length} {d.projects.countLabel}
        </span>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          {d.projects.empty}
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const item = d.projectsData.items[p.slug as keyof typeof d.projectsData.items];
            const title = item ? item.title : p.title;
            const scope = item ? item.scope : p.scope;
            const location =
              d.projectsData.locations[p.location as keyof typeof d.projectsData.locations];
            const facility =
              d.projectsData.facilityTypes[
                p.facilityType as keyof typeof d.projectsData.facilityTypes
              ];
            return (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 via-transparent to-transparent" />
                  <span className="absolute start-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground ring-1 ring-border backdrop-blur">
                    {d.projectsData.categories[p.category]}
                  </span>
                  <span className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-foreground ring-1 ring-border backdrop-blur transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h2 className="text-lg font-semibold leading-snug text-foreground">{title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{scope}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {facility}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

function FinalCTA() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/85 via-[var(--ink)]/60 to-[var(--ink)]/85" />
        <div className="relative px-6 py-20 text-center text-white md:px-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">
            <RevealText as="span" text={d.projects.cta.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            {d.projects.cta.lead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/40 transition hover:brightness-105"
            >
              {d.projects.cta.primary}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <a
              href={profile.path}
              download={profile.fileName}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.projects.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main id="main">
        <Hero />
        <Grid />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
