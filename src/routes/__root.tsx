import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Phone, RotateCcw } from "lucide-react";

import appCss from "../styles.css?url";
import "@/lib/i18n";
import { useDict } from "@/lib/i18n";
import en from "@/lib/i18n/en";
import { I18nDocAttrs } from "@/components/site-chrome";
import { contact, telHref } from "@/lib/company";
import { localBusinessJsonLd, organizationJsonLd, seoLinks, seoMeta, seoScripts } from "@/lib/seo";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground/75 ring-1 ring-border transition hover:text-foreground hover:bg-muted";

function NotFoundComponent() {
  const d = useDict();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="text-[5rem] font-black leading-none text-primary">{d.root.notFound.code}</p>
        <h1 className="mt-4 text-xl font-semibold text-foreground">{d.root.notFound.title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.root.notFound.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link to="/" className={btnPrimary}>
            {d.root.notFound.home}
          </Link>
          <Link to="/projects" className={btnGhost}>
            {d.nav.projects}
          </Link>
          <Link to="/contact" className={btnGhost}>
            {d.nav.contactUs}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const d = useDict();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {d.root.error.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.root.error.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={btnPrimary}
          >
            <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
            {d.root.error.retry}
          </button>
          <a href="/" className={btnGhost}>
            {d.root.error.home}
          </a>
          <a href={telHref(contact.phonePrimary)} className={btnGhost}>
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {d.common.callUs}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...seoMeta({
        title: en.root.title,
        description: en.root.description,
        path: "/",
      }),
    ],
    links: [
      ...seoLinks("/", false),
      { rel: "stylesheet", href: appCss },
      // Favicon + apple-touch-icon already come from seoLinks().
      // Self-hosted variable fonts: Inter for Latin, Noto Kufi Arabic for
      // Arabic. Preloaded so first paint is not in a fallback face.
      {
        rel: "preload",
        href: "/fonts/Inter-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/NotoKufiArabic-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
    ],
    scripts: seoScripts([organizationJsonLd, localBusinessJsonLd]),
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/**
 * The document shell is rendered during SSR/prerender, where no visitor
 * language preference exists yet. It therefore ships the English default and
 * `I18nDocAttrs` re-syncs `lang`/`dir` on the client once the stored preference
 * is known. `suppressHydrationWarning` keeps that intentional swap quiet.
 */
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nDocAttrs />
      <Outlet />
    </QueryClientProvider>
  );
}
