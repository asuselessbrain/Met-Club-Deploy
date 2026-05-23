export type AppLocale = "bn" | "en";

const LANGUAGE_STORAGE_KEY = "met-club-language";

export function getStoredLocale(): AppLocale {
    if (typeof window === "undefined") {
        return "bn";
    }

    const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLocale === "en" ? "en" : "bn";
}

export function setStoredLocale(locale: AppLocale) {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
}

export function getLocalizedPath(pathname: string, locale: AppLocale) {
    if (pathname === "/" || pathname === "/en") {
        return locale === "en" ? "/en" : "/";
    }

    if (pathname === "/about" || pathname === "/en/about") {
        return locale === "en" ? "/en/about" : "/about";
    }

    return pathname;
}
