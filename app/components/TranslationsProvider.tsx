"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

const TranslationContext = createContext<Record<string, any>>({});

export function TranslationProvider({
  children,
  initialTranslations,
}: {
  children: ReactNode;
  initialTranslations: Record<string, any>;
}) {
  const [translations, setTranslations] = useState(initialTranslations);
  const pathname = usePathname();

  useEffect(() => {
    setTranslations(initialTranslations);
  }, [initialTranslations, pathname]);

  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => {
  const translations = useContext(TranslationContext);
  return (key: string) => {
    // return (
    //   key.split(".").reduce((obj, k) => obj && obj[k], translations) || key

    const value = key
      .split(".")
      .reduce(
        (obj, k) => (obj && obj[k] !== undefined ? obj[k] : null),
        translations
      );

    // Ensure the value is a string, otherwise return the key
    return typeof value === "string" ? value : key;
    // );
  };
};
