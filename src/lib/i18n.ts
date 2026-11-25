import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en, { type Translations } from "./i18n/en";
import ar from "./i18n/ar";

/**
 * Supported languages. `en` is the source of truth for the dictionary shape;
 * `ar` is compile-checked against it via the `Translations` type.
 */
export const LANGS = ["en", "ar"] as const;
export type Lang = (typeof LANGS)[number];

/** localStorage key holding the visitor's explicit language choice. */
export const LANG_STORAGE_KEY = "sahil-lang";

/** Languages that require `dir="rtl"` on the document element. */
export const RTL_LANGS = new Set<Lang>(["ar"]);

/** Human-readable names, used by the language switcher. */
export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  ar: "العربية",
};

/** Full dictionaries, addressable by language. Powers `useDict()`. */
export const dictionaries: Record<Lang, Translations> = { en, ar };

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/**
 * Resolve the initial language: explicit stored choice wins, then the browser
 * preference, then English. Always returns "en" during SSR so the prerendered
 * markup is deterministic.
 */
export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // localStorage can throw in private mode or when cookies are blocked.
  }
  const nav =
    typeof navigator !== "undefined" && navigator.language ? navigator.language.toLowerCase() : "";
  if (nav.startsWith("ar")) return "ar";
  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: detectInitialLang(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnNull: false,
});

/** Keep `<html lang>` and `<html dir>` in sync with the active language. */
export function applyHtmlLangAttrs(lang: Lang) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
}

/** Change language, persist the choice, and update the document direction. */
export function setLang(lang: Lang) {
  void i18n.changeLanguage(lang);
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Non-fatal: the language still applies for this session.
  }
  applyHtmlLangAttrs(lang);
}

/** The active language, normalised to a supported `Lang`. */
export function useLang(): Lang {
  const { i18n: instance } = useTranslation();
  return isLang(instance.language) ? instance.language : "en";
}

/**
 * The active dictionary as a fully typed object.
 *
 * Prefer this over `t("some.key")` in components: it gives autocomplete,
 * compile-time errors on typos, and direct access to arrays and nested
 * objects without i18next's `returnObjects` handling.
 */
export function useDict(): Translations {
  return dictionaries[useLang()];
}

/** True when the active language reads right-to-left. */
export function useIsRtl(): boolean {
  return RTL_LANGS.has(useLang());
}

export type { Translations };
export default i18n;
