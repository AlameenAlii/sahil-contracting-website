/**
 * Sahil — Sahil Contracting Co. | شركة ساحل للمقاولات
 *
 * Single source of truth for every company fact used by the site, the SEO
 * layer, the JSON-LD blocks and the generated company profile PDFs.
 *
 * Provenance: values marked SOURCED are taken from the public example.com
 * site. Values marked TODO(client) are unknown and must be confirmed before
 * launch — they are deliberately `null` rather than invented, so anything that
 * renders them is written to degrade gracefully instead of printing a
 * placeholder into a live page.
 */

export const brand = {
	tradingName: "Sahil",
	tradingNameAr: "ساحل",
	legalNameEn: "Sahil Contracting Co.", // SOURCED: site footer
	legalNameAr: "شركة ساحل للمقاولات",
	domain: "example.com",
	foundedYear: "2018", // derived from "8+ years" — TODO(client): confirm exact year
	yearsOperating: "8+", // SOURCED: stats band
	taglineEn: "Let's build your living space.", // SOURCED
	taglineAr: "نبني مساحتك المثالية", // SOURCED
	/** TODO(client): commercial registration number */
	crNumber: null as string | null,
	/** TODO(client): unified national number (الرقم الموحد) */
	unifiedNumber: null as string | null,
	/** TODO(client): VAT registration number */
	vatNumber: null as string | null,
} as const;

export const contact = {
	city: "Jeddah",
	cityAr: "جدة",
	region: "Makkah Province",
	regionAr: "منطقة مكة المكرمة",
	country: "Saudi Arabia",
	countryAr: "المملكة العربية السعودية",
	countryCode: "SA",
	/** TODO(client): street address — not published on the source site */
	streetAddress: null as string | null,
	streetAddressAr: null as string | null,
	/** TODO(client): postal code */
	postalCode: null as string | null,
	phonePrimary: "+966500000000", // SOURCED: displayed as 0500000000
	phonePrimaryDisplay: "+966 50 000 0000",
	phonePrimaryDisplayAr: "+966 50 000 0000",
	whatsapp: "+966500000000",
	whatsappDigits: "966500000000",
	/** TODO(client): second line / office landline */
	phoneSecondary: null as string | null,
	emailGeneral: "info@example.com", // SOURCED
	/** TODO(client): dedicated tenders / careers inboxes if they exist */
	emailTenders: null as string | null,
	emailCareers: null as string | null,
	/** TODO(client): LinkedIn company page */
	linkedin: null as string | null,
	workingDays: "Sunday – Thursday",
	workingDaysAr: "الأحد – الخميس",
	workingHours: "8:00 – 17:00 AST",
	workingHoursAr: "8:00 – 17:00 بتوقيت السعودية",
	responseWindowHours: 24,
	/** City-level map only, since no street address is published yet. */
	mapEmbed:
		"https://www.openstreetmap.org/export/embed.html?bbox=39.10%2C21.46%2C39.26%2C21.60&layer=mapnik&marker=21.5433%2C39.1728",
	mapLink: "https://www.openstreetmap.org/?mlat=21.5433&mlon=39.1728#map=12/21.5433/39.1728",
	geo: { latitude: 21.5433, longitude: 39.1728 },
} as const;

/**
 * Strip a displayed phone number down to a dialable form: keep a leading `+`
 * and digits only, so "+966 50 000 0000" and "0500000000" both work.
 */
function dialable(phone: string): string {
	const plus = phone.trim().startsWith("+") ? "+" : "";
	return plus + phone.replace(/[^0-9]/g, "");
}

/**
 * `tel:` href for any published number. Falls back to the main line when the
 * caller passes a number that is not published yet (those are typed `null` on
 * purpose), so a link can never render as `tel:undefined`.
 */
export function telHref(phone?: string | null): string {
	return `tel:${dialable(phone || contact.phonePrimary)}`;
}

/**
 * WhatsApp deep link. Accepts the number to open a chat with and an optional
 * message, which is URL-encoded here so callers can pass plain multi-line text.
 */
export function waHref(phone?: string | null, message?: string): string {
	const digits = dialable(phone || contact.whatsapp).replace(/^\+/, "");
	const base = "https://wa.me/" + digits;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** `mailto:` href, falling back to the general inbox. */
export function mailHref(email?: string | null, subject?: string): string {
	const base = `mailto:${email || contact.emailGeneral}`;
	return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export type LeadershipKey = "founder";

export const leadership: ReadonlyArray<{
	key: LeadershipKey;
	/** Latin name, as rendered in the EN locale. */
	name: string;
	/** Arabic name, as rendered in the AR locale. */
	nameAr: string;
	/**
	 * Contact routes shown on the leadership cards. No direct line or personal
	 * inbox is published for any individual, so these point at the company's
	 * own channels -- reachable and truthful, rather than invented.
	 * TODO(client): supply direct numbers/inboxes if they should be public.
	 */
	phone: string;
	email: string;
}> = [
	{
		key: "founder",
		// TODO(client): the EN and AR spellings on the source site differ; confirm
		// the preferred transliteration before launch.
		name: "Eng. Omar Hassan",
		nameAr: "المهندس عمر حسن",
		phone: contact.phonePrimaryDisplay,
		email: contact.emailGeneral,
	},
];

export type StandardKey = "sbc" | "nfpa" | "iec" | "ashrae";

/**
 * Codes the work is executed and inspected against. These are engineering
 * standards, not certifications — the copy never claims accreditation.
 */
export const standards: ReadonlyArray<{ key: StandardKey; code: string }> = [
	{ key: "sbc", code: "SBC" },
	{ key: "nfpa", code: "NFPA" },
	{ key: "iec", code: "IEC" },
	{ key: "ashrae", code: "ASHRAE" },
];

export type StatKey = "years" | "projects" | "engineers" | "workforce";

/**
 * Headline figures for the stats bands on Home and About.
 *
 * An ordered array rather than an object: both bands render them in a fixed
 * four-column grid and read `key` for the dictionary label, so order is part
 * of the data. `key` matches the `stats` block in every dictionary.
 */
export const statValues: ReadonlyArray<{ key: StatKey; value: string }> = [
	{ key: "years", value: "8+" }, // SOURCED
	{ key: "projects", value: "6+" }, // TODO(client): real delivered count
	{ key: "engineers", value: "20+" }, // SOURCED
	{ key: "workforce", value: "200+" }, // SOURCED
];

/** Keyed lookup for prose that needs a single figure inline. */
export const stats = Object.fromEntries(
	statValues.map((s) => [s.key, s.value]),
) as Record<StatKey, string>;

export type SectorKey = "residential" | "commercial" | "industrial" | "education";

export const sectors: ReadonlyArray<SectorKey> = [
	"residential",
	"commercial",
	"industrial",
	"education",
];

export type ClientKey =
	| "client-01"
	| "client-02"
	| "client-03"
	| "client-04"
	| "client-05"
	| "client-06";

/**
 * Demo client marks carried over from the base project.
 * TODO(client): replace with real client logos and written permission to use them.
 */
export const clients: ReadonlyArray<{
	key: ClientKey;
	logo: string;
	/** Used as the image alt text, so it must never be empty. */
	name: string;
	nameAr: string;
}> = [
	{
		key: "client-01",
		logo: "/clients/client-01.png",
		name: "Client logo placeholder 1",
		nameAr: "شعار عميل بديل 1",
	},
	{
		key: "client-02",
		logo: "/clients/client-02.png",
		name: "Client logo placeholder 2",
		nameAr: "شعار عميل بديل 2",
	},
	{
		key: "client-03",
		logo: "/clients/client-03.png",
		name: "Client logo placeholder 3",
		nameAr: "شعار عميل بديل 3",
	},
	{
		key: "client-04",
		logo: "/clients/client-04.png",
		name: "Client logo placeholder 4",
		nameAr: "شعار عميل بديل 4",
	},
	{
		key: "client-05",
		logo: "/clients/client-05.png",
		name: "Client logo placeholder 5",
		nameAr: "شعار عميل بديل 5",
	},
	{
		key: "client-06",
		logo: "/clients/client-06.png",
		name: "Client logo placeholder 6",
		nameAr: "شعار عميل بديل 6",
	},
];

export type CompanyProfileAsset = {
	/** Public path, served from /public. */
	readonly path: string;
	/** Filename the browser saves as, via the anchor download attribute. */
	readonly fileName: string;
};

export const companyProfile: Record<"en" | "ar", CompanyProfileAsset> = {
	en: {
		path: "/sahil-company-profile.pdf",
		fileName: "Sahil-Company-Profile-EN.pdf",
	},
	ar: {
		path: "/sahil-company-profile-ar.pdf",
		fileName: "Sahil-Company-Profile-AR.pdf",
	},
};

/**
 * Every call site reads `.path` and `.fileName`, so this must return the
 * record rather than a bare string.
 */
export function profileFor(lang: string): CompanyProfileAsset {
	return lang === "ar" ? companyProfile.ar : companyProfile.en;
}

export const social = {
	linkedin: contact.linkedin,
} as const;

/** Every sameAs entry that actually exists, for JSON-LD. */
export const sameAs: ReadonlyArray<string> = [contact.linkedin].filter(
	(value): value is string => Boolean(value),
);
