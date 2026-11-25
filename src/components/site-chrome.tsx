import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Download,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import {
  LANGS,
  LANG_LABELS,
  applyHtmlLangAttrs,
  type Lang,
  setLang,
  useDict,
  useLang,
} from "@/lib/i18n";
import { brand, contact, profileFor, standards, telHref, waHref } from "@/lib/company";
import logoWhite from "@/assets/sahil-logo-white.png";
import logoDark from "@/assets/sahil-logo-dark.png";
import vision2030 from "@/assets/vision-2030.png";

/**
 * Phone numbers, emails and codes must render left-to-right even inside
 * Arabic copy. Without this an Arabic page shows "966500000001+".
 */
export function Ltr({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <bdi dir="ltr" className={className}>
      {children}
    </bdi>
  );
}

/**
 * Brand lockup. The supplied artwork is a horizontal wordmark, so it is never
 * paired with a duplicate text wordmark.
 */
export function Logo({
  variant = "dark",
  className = "h-9 w-auto",
}: {
  variant?: "dark" | "white";
  className?: string;
}) {
  const d = useDict();
  return (
    <img
      src={variant === "white" ? logoWhite : logoDark}
      alt={d.brand.logoAlt}
      width={430}
      height={160}
      className={className}
      decoding="async"
    />
  );
}

function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const d = useDict();
  const lang = useLang();
  const next: Lang = lang === "ar" ? "en" : "ar";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={d.nav.language}
      title={d.nav.language}
      lang={next}
      className={
        "inline-flex shrink-0 items-center gap-1.5 rounded-full font-semibold transition hover:text-[var(--primary)] " +
        (compact
          ? "bg-card px-3 py-1.5 text-xs ring-1 ring-border hover:ring-[var(--primary)]/50"
          : "px-2.5 py-1 text-xs text-current/80 ring-1 ring-current/25 hover:ring-[var(--primary)]/50")
      }
    >
      <Globe className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {LANG_LABELS[next]}
    </button>
  );
}

/**
 * Slim utility strip. A contractor's phone number is the highest-intent
 * element on the page, so it sits above the fold on every route rather than
 * only on /contact.
 */
function UtilityBar() {
  const d = useDict();
  return (
    <div className="hidden bg-[var(--steel)] text-[var(--steel-foreground)] lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-current/75">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {d.common.basedIn}
          </span>
          <span className="inline-flex items-center gap-1.5 text-current/75">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {d.contact.info.daysValue}
            <span aria-hidden="true">·</span>
            <Ltr className="ltr-nums">{d.contact.info.hoursValue}</Ltr>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={telHref(contact.phonePrimary)}
            className="inline-flex items-center gap-1.5 font-semibold transition hover:text-[var(--primary)]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <Ltr className="ltr-nums">{contact.phonePrimary}</Ltr>
          </a>
          <a
            href={`mailto:${contact.emailGeneral}`}
            className="inline-flex items-center gap-1.5 text-current/75 transition hover:text-[var(--primary)]"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <Ltr>{contact.emailGeneral}</Ltr>
          </a>
          {contact.linkedin ? (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={d.footer.linkedin}
              className="text-current/75 transition hover:text-[var(--primary)]"
            >
              <Linkedin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          ) : null}
          <LangSwitcher />
        </div>
      </div>
    </div>
  );
}

/**
 * Primary navigation. Sticky, so the quote CTA and phone number stay reachable
 * from any scroll position. Every link resolves to a real route — there are no
 * placeholder "#" entries.
 */
export function SiteNav() {
  const d = useDict();
  const lang = useLang();
  const profile = profileFor(lang);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page from scrolling behind the open mobile drawer.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const items: { label: string; to: string }[] = [
    { label: d.nav.home, to: "/" },
    { label: d.nav.services, to: "/services" },
    { label: d.nav.projects, to: "/projects" },
    { label: d.nav.about, to: "/about" },
    { label: d.nav.contact, to: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <a
        href="#main"
        className="sr-only rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]"
      >
        {d.common.skipToContent}
      </a>

      <UtilityBar />

      <header
        className={
          "border-b transition-colors duration-300 " +
          (scrolled
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-background")
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" aria-label={brand.tradingName} className="shrink-0">
            <Logo className="h-9 w-auto md:h-10" />
          </Link>

          <nav
            aria-label={d.brand.name}
            className="hidden items-center gap-1 rounded-full bg-card/70 px-2 py-1.5 ring-1 ring-border lg:flex"
          >
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                activeOptions={{ exact: it.to === "/" }}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/70 transition hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-full px-4 py-1.5 text-sm font-medium bg-primary text-primary-foreground shadow",
                }}
              >
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.path}
              download={profile.fileName}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-foreground/75 ring-1 ring-border transition hover:text-foreground hover:ring-foreground/25"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.common.downloadProfileShort}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-105"
            >
              {d.nav.getQuote}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={telHref(contact.phonePrimary)}
              aria-label={d.common.callUs}
              className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <LangSwitcher compact />
            <button
              type="button"
              aria-label={open ? d.nav.closeMenu : d.nav.toggleMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-card ring-1 ring-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label={d.nav.closeMenu}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-[var(--ink)]/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-3 top-2 z-50 rounded-2xl border border-border bg-card p-3 shadow-2xl">
            <nav className="flex flex-col" aria-label={d.brand.name}>
              {items.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  activeOptions={{ exact: it.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-muted"
                  activeProps={{
                    className:
                      "rounded-xl px-4 py-3 text-sm font-medium bg-primary text-primary-foreground",
                  }}
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={telHref(contact.phonePrimary)}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold ring-1 ring-border transition hover:bg-muted"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {d.common.callUs}
              </a>
              <a
                href={waHref(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold ring-1 ring-border transition hover:bg-muted"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                {d.common.whatsapp}
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {d.nav.getQuote}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>

            <a
              href={profile.path}
              download={profile.fileName}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground/75 ring-1 ring-border transition hover:bg-muted"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              {d.common.downloadProfile}
            </a>

            <p className="mt-3 px-1 pb-1 text-center text-xs text-muted-foreground">
              <Ltr className="ltr-nums">{contact.phonePrimary}</Ltr>
              <span className="px-1.5" aria-hidden="true">
                ·
              </span>
              {d.common.basedIn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Site footer. Dark steel band so the white brand mark reads correctly and the
 * page ends on a deliberate, corporate note.
 *
 * Everything here is verifiable: real routes, the two published phone numbers,
 * the real LinkedIn company page and the codes the work is executed against.
 * No invented social profiles.
 */
export function SiteFooter() {
  const d = useDict();
  const lang = useLang();
  const year = new Date().getFullYear();

  const quickLinks: { label: string; to: string }[] = [
    { label: d.footer.items.home, to: "/" },
    { label: d.footer.items.services, to: "/services" },
    { label: d.footer.items.projects, to: "/projects" },
    { label: d.footer.items.about, to: "/about" },
    { label: d.footer.items.contact, to: "/contact" },
  ];

  const serviceLines = [
    d.footer.items.build,
    d.footer.items.finishing,
    d.footer.items.interiors,
    d.footer.items.management,
  ];

  return (
    <footer className="mt-24 bg-[var(--steel)] text-[var(--steel-foreground)]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + positioning */}
          <div className="lg:col-span-4">
            <Logo variant="white" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-current/70">
              {d.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid place-items-center rounded-xl bg-white px-3 py-2">
                <img
                  src={vision2030}
                  alt={d.credentials.vision2030}
                  width={300}
                  height={201}
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="max-w-[14rem] text-xs leading-snug text-current/60">
                {d.credentials.vision2030Note}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold">{d.footer.quickLinks}</p>
            <ul className="space-y-2.5 text-sm text-current/70">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="transition hover:text-[var(--primary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service lines */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm font-semibold">{d.footer.serviceLines}</p>
            <ul className="space-y-2.5 text-sm text-current/70">
              {serviceLines.map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition hover:text-[var(--primary)]">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm font-semibold">{d.footer.contactTitle}</p>
            <ul className="space-y-3 text-sm text-current/70">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />
                <span>{d.contact.info.officeValue}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />
                <span className="flex flex-col gap-1">
                  <a
                    href={telHref(contact.phonePrimary)}
                    className="transition hover:text-[var(--primary)]"
                  >
                    <Ltr className="ltr-nums">{contact.phonePrimary}</Ltr>
                  </a>
                  {contact.phoneSecondary ? (
                    <a
                      href={telHref(contact.phoneSecondary)}
                      className="transition hover:text-[var(--primary)]"
                    >
                      <Ltr className="ltr-nums">{contact.phoneSecondary}</Ltr>
                    </a>
                  ) : null}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.emailGeneral}`}
                  className="transition hover:text-[var(--primary)]"
                >
                  <Ltr>{contact.emailGeneral}</Ltr>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />
                <span>
                  {d.contact.info.daysValue}
                  <br />
                  <Ltr className="ltr-nums">{d.contact.info.hoursValue}</Ltr>
                </span>
              </li>
              {contact.linkedin ? (
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-current/25 transition hover:text-[var(--primary)] hover:ring-[var(--primary)]/50"
                  >
                    <Linkedin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {d.footer.linkedin}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Head office location + the codes the work is executed against */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="relative h-44 overflow-hidden rounded-2xl ring-1 ring-current/15 lg:col-span-5">
            <iframe
              title={d.footer.mapTitle}
              src={contact.mapEmbed}
              className="absolute inset-x-0 top-0 h-[calc(100%+28px)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold">{d.credentials.standardsTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {standards.map((s) => (
                <li
                  key={s.key}
                  className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold ring-1 ring-current/20"
                >
                  <Ltr>{s.code}</Ltr>
                  <span className="px-1.5 text-current/40" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-medium text-current/70">
                    {d.credentials.standardNames[s.key]}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-current/55">
              {d.credentials.standardsNote}
            </p>
          </div>
        </div>

        {/* Oversized brand watermark */}
        <div className="mt-14 overflow-hidden pb-2">
          <div
            aria-hidden="true"
            lang={lang}
            className={
              lang === "ar"
                ? "select-none whitespace-nowrap text-center text-[11vw] font-black leading-[1.2] opacity-[0.07]"
                : "select-none whitespace-nowrap text-center text-[19vw] font-black leading-[0.85] tracking-tight opacity-[0.07]"
            }
          >
            {d.footer.wordmark}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-current/10 pt-6 text-center text-xs text-current/55 md:flex-row md:text-start">
          <p>{d.footer.rights.replace("%YEAR%", String(year))}</p>
          <p>{d.footer.legalLine}</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Mounted once at the app root: keeps `<html lang>` and `<html dir>` in sync
 * with the active language, so Arabic renders as a genuine RTL document rather
 * than mirrored text inside an LTR shell.
 */
export function I18nDocAttrs() {
  const lang = useLang();
  useEffect(() => {
    applyHtmlLangAttrs(lang);
  }, [lang]);
  return null;
}

// Re-exported so route files pull in the i18n singleton even when they do not
// import "@/lib/i18n" directly.
export { LANGS };
