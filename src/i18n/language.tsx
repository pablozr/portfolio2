import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { DEFAULT_LOCALE, type Locale } from "./locales";
import type { SiteCopy } from "./site-copy";

const STORAGE_KEY = "portfolio.locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: SiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [dictionary, setDictionary] = useState<Record<Locale, SiteCopy> | null>(null);
  const transitionRef = useRef<{ skipTransition: () => void } | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt-BR" || stored === "en") {
      setLocaleState(stored);
    } else {
      window.localStorage.setItem(STORAGE_KEY, DEFAULT_LOCALE);
    }
  }, []);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return;
      const commit = () => {
        flushSync(() => setLocaleState(nextLocale));
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      };
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        commit();
        return;
      }
      transitionRef.current?.skipTransition();
      if (document.startViewTransition) {
        transitionRef.current = document.startViewTransition(commit);
      } else {
        commit();
        document.querySelector("main")?.animate(
          [
            { opacity: 0.35, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" },
        );
      }
    },
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    let active = true;

    import("./site-copy").then((module) => {
      if (active) {
        setDictionary(module.siteCopy);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(
    () => (dictionary ? { locale, setLocale, copy: dictionary[locale] } : null),
    [dictionary, locale, setLocale],
  );

  if (!value) {
    return null;
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
