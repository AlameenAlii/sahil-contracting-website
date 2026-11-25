// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const siteUrl = process.env.VITE_SITE_URL?.replace(/\/+$/, "") || "https://example.com";
const projectSlugs = [
  "telecom-network-ict-om",
  "packaging-factory-mep-fire",
  "medical-factory-mep-fire",
  "plastics-factory-mep-fire",
  "compound-electronic-gates",
  "private-schools-om",
];
const prerenderPaths = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  ...projectSlugs.map((slug) => `/projects/${slug}`),
];
const pages = prerenderPaths.map((path) => ({
  path,
  sitemap: {
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.7 : 0.8,
    images: [
      {
        loc: `${siteUrl}/og-image.jpg`,
        title: "Sahil — general contracting, finishing and fit-out in Jeddah",
      },
    ],
  },
}));

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    pages,
    prerender: {
      enabled: true,
      crawlLinks: true,
      concurrency: 4,
      failOnError: true,
    },
    spa: {
      enabled: false,
    },
    sitemap: {
      enabled: true,
      host: siteUrl,
    },
  },
  vite: {
    build: {
      copyPublicDir: true,
    },
  },
});
