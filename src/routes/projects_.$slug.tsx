import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Download,
  Layers,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { getProject, projects, type Project } from "@/lib/projects";
import RevealText from "@/components/RevealText";
import {
  breadcrumbJsonLd,
  pageUrl,
  seoLinks,
  seoMeta,
  seoScripts,
  siteShortName,
  webPageJsonLd,
} from "@/lib/seo";
import { useDict, useLang } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import { profileFor } from "@/lib/company";
import ctaImg from "@/assets/mn-cta-riyadh.jpg";

export const Route = createFileRoute("/projects_/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const path = p ? `/projects/${p.slug}` : "/projects";
    const title = p ? `${p.title} — ${siteShortName}` : en.projects.meta.title;
    const description = p ? p.description.slice(0, 160) : en.projects.meta.description;
    return {
      meta: seoMeta({
        title,
        description,
        path,
        type: "article",
        image: p ? p.cover : undefined,
      }),
      links: seoLinks(path),
      scripts: seoScripts([
        webPageJsonLd({ title, description, path }),
        breadcrumbJsonLd([
          { name: en.projectDetail.breadcrumbHome, path: "/" },
          { name: en.projectDetail.breadcrumbProjects, path: "/projects" },
          ...(p ? [{ name: p.title, path }] : []),
        ]),
        ...(p
          ? [
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: p.title,
                description,
                url: pageUrl(path),
                image: p.cover,
                about: p.category,
                locationCreated: p.location,
              },
            ]
          : []),
      ]),
    };
  },
  notFoundComponent: NotFoundView,
  errorComponent: ErrorView,
  component: ProjectDetailPage,
});

function NotFoundView() {
  const d = useDict();
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main id="main" className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
        <h1 className="text-3xl font-bold">{d.projectDetail.notFound.title}</h1>
        <p className="mt-3 text-muted-foreground">{d.projectDetail.notFound.lead}</p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
          {d.projectDetail.notFound.cta}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorView({ error }: { error: Error }) {
  const d = useDict();
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main id="main" className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
        <h1 className="text-2xl font-bold">{d.root.error.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
          {d.projectDetail.notFound.cta}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectDetailPage() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  const { project: p } = Route.useLoaderData() as { project: Project };

  const item = d.projectsData.items[p.slug as keyof typeof d.projectsData.items];
  const title = item ? item.title : p.title;
  const scope = item ? item.scope : p.scope;
  const description = item ? item.description : p.description;
  const scopeOfWork: string[] = item ? item.scopeOfWork : p.scopeOfWork;
  const highlights: string[] = item ? item.highlights : p.highlights;
  const location = d.projectsData.locations[p.location as keyof typeof d.projectsData.locations];
  const facility =
    d.projectsData.facilityTypes[p.facilityType as keyof typeof d.projectsData.facilityTypes];
  const category = d.projectsData.categories[p.category];

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const nextItem = d.projectsData.items[next.slug as keyof typeof d.projectsData.items];
  const nextTitle = nextItem ? nextItem.title : next.title;

  const details = [
    { label: d.projectDetail.labels.category, value: category },
    { label: d.projectDetail.labels.location, value: location },
    { label: d.projectDetail.labels.facility, value: facility },
    { label: d.projectDetail.labels.scope, value: scope },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <main id="main">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-6 pt-8 text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="transition hover:text-foreground">
                {d.projectDetail.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/projects" className="transition hover:text-foreground">
                {d.projectDetail.breadcrumbProjects}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-foreground">{title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-6">
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border">
            <img src={p.cover} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/35 via-[var(--ink)]/45 to-[var(--ink)]/85" />
            <div className="relative flex min-h-[440px] flex-col justify-end p-6 md:min-h-[62vh] md:p-12">
              <div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" aria-hidden="true" />
                  {d.projectDetail.back}
                </Link>
              </div>
              <div className="mt-5">
                <p className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                  {category}
                </p>
              </div>
              <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
                <RevealText as="span" text={title} />
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {facility}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <h2 className="sr-only">{d.projectDetail.details}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((row) => (
              <div key={row.label} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {row.label}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-foreground">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {d.projectDetail.overview}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">{description}</p>
            </div>
          </div>
        </section>

        {/* Scope + outcomes */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-semibold">{d.projectDetail.scopeOfWork}</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {scopeOfWork.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-8 ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--peach)] text-primary">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-semibold">{d.projectDetail.highlights}</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {highlights.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="rounded-[2rem] bg-[var(--sand)] p-8 ring-1 ring-border md:p-12">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-primary ring-1 ring-border">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-semibold">{d.projectDetail.disciplines}</h2>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.disciplines.map((disc) => (
                <li
                  key={disc}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground/80 ring-1 ring-border"
                >
                  {disc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <h2 className="text-2xl font-bold md:text-3xl">{d.projectDetail.gallery}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((g, i) => (
              <div
                key={`${g.src}-${i}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {d.projectDetail.imageNote}
          </p>
        </section>

        {/* Next project */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {d.projectDetail.nextProject}
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mt-4 flex flex-col overflow-hidden rounded-[2rem] bg-card ring-1 ring-border transition hover:ring-primary/40 md:flex-row"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:w-2/5">
              <img
                src={next.cover}
                alt={nextTitle}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-6 p-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.projectsData.categories[next.category]}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                  {nextTitle}
                </h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {d.projectsData.locations[next.location as keyof typeof d.projectsData.locations]}
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--peach)] text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </section>

        {/* CTA */}
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
                <RevealText as="span" text={d.projectDetail.cta.title} />
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
                {d.projectDetail.cta.lead}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/40 transition hover:brightness-105"
                >
                  {d.projectDetail.cta.primary}
                  <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden="true" />
                </Link>
                <a
                  href={profile.path}
                  download={profile.fileName}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
                >
                  <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {d.common.downloadProfile}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
