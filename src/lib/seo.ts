/**
 * SEO, canonical URL and schema.org helpers for Sahil.
 *
 * All company facts are imported from `src/lib/company.ts` so there is exactly
 * one place to change a phone number or an address.
 */

import { brand, contact, standards } from "./company";

export const siteName = `${brand.legalNameEn} (${brand.tradingName})`;
export const siteShortName = brand.tradingName;
export const defaultSiteUrl = "https://example.com";

const viteEnv = (
  import.meta as ImportMeta & {
    env?: Record<string, string | undefined>;
  }
).env;
const nodeEnv = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }
).process?.env;

export const siteUrl =
  viteEnv?.VITE_SITE_URL?.replace(/\/+$/, "") ||
  nodeEnv?.VITE_SITE_URL?.replace(/\/+$/, "") ||
  defaultSiteUrl;

/** White lockup — for dark backgrounds (nav on hero, footer). */
export const logoImagePath = "/sahil-logo-white.png";
/** Charcoal lockup — for light backgrounds. */
export const logoDarkImagePath = "/sahil-logo-dark.png";
export const logoImageUrl = `${siteUrl}${logoDarkImagePath}`;
export const logoImageWidth = "430";
export const logoImageHeight = "160";

/**
 * Social share card. This MUST be an opaque raster at 1200x630 — never a logo
 * lockup. The lockups are 430x160 and ~85% transparent, and social platforms
 * flatten alpha onto black, which is exactly why the old card previewed as an
 * empty image on WhatsApp, Slack and X.
 */
export const ogImagePath = "/og-image.jpg";
export const ogImageUrl = `${siteUrl}${ogImagePath}`;
export const ogImageWidth = "1200";
export const ogImageHeight = "630";
export const ogImageAlt = `${siteShortName} — general contracting, finishing and fit-out in Jeddah, Saudi Arabia`;

type JsonLd = Record<string, unknown>;

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

const normalizePath = (path = "/") => {
  if (!path || path === "/") return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

export const absoluteUrl = (pathOrUrl: string) => {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteUrl}${path}`;
};

export const pageUrl = (path = "/") => `${siteUrl}${normalizePath(path)}`;

export function seoMeta({
  title,
  description,
  path = "/",
  type = "website",
  image = ogImageUrl,
  noIndex = false,
}: SeoOptions) {
  const canonical = pageUrl(path);
  const imageUrl = absoluteUrl(image);

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: siteShortName },
    { name: "geo.region", content: "SA-02" },
    { name: "geo.placename", content: contact.city },
    { property: "og:site_name", content: siteShortName },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "ar_SA" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: ogImageWidth },
    { property: "og:image:height", content: ogImageHeight },
    { property: "og:image:alt", content: ogImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: ogImageAlt },
  ];
}

export function seoScripts(jsonLd?: JsonLd | JsonLd[]) {
  const jsonLdItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return jsonLdItems.map((item) => ({
    type: "application/ld+json",
    children: JSON.stringify(item),
  }));
}

export const seoLinks = (path = "/", includeCanonical = true) => [
  ...(includeCanonical ? [{ rel: "canonical", href: pageUrl(path) }] : []),
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
];

const postalAddress = {
  "@type": "PostalAddress",
  ...(contact.streetAddress ? { streetAddress: contact.streetAddress } : {}),
  addressLocality: contact.city,
  addressRegion: contact.region,
  ...(contact.postalCode ? { postalCode: contact.postalCode } : {}),
  addressCountry: contact.countryCode,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.legalNameEn,
  alternateName: [brand.tradingName, brand.legalNameAr, brand.tradingNameAr],
  url: siteUrl,
  logo: logoImageUrl,
  email: contact.emailGeneral,
  telephone: contact.phonePrimary,
  address: postalAddress,
  sameAs: [contact.linkedin],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: brand.legalNameEn,
  alternateName: brand.tradingName,
  image: ogImageUrl,
  url: siteUrl,
  logo: logoImageUrl,
  telephone: contact.phonePrimary,
  email: contact.emailGeneral,
  address: postalAddress,
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  knowsAbout: standards.map((s) => s.code),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [contact.linkedin],
};

export const webPageJsonLd = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: pageUrl(path),
  image: ogImageUrl,
  isPartOf: {
    "@type": "WebSite",
    name: siteShortName,
    url: siteUrl,
  },
});

/** Service schema — helps the three service lines surface individually. */
export const serviceJsonLd = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  provider: {
    "@type": "GeneralContractor",
    name: brand.legalNameEn,
    url: siteUrl,
  },
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  url: pageUrl(path),
});

/** Breadcrumbs — improves how project detail pages appear in search. */
export const breadcrumbJsonLd = (crumbs: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: pageUrl(c.path),
  })),
});
