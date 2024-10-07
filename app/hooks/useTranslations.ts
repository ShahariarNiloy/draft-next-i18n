"use client";

import { useCallback } from "react";
import { getGlobalDictionary } from "../../get-dictionary";

export function useTranslations() {
  const t = useCallback((key: string) => {
    const dictionary = getGlobalDictionary();
    console.log({ dictionary });
    return key.split(".").reduce((obj, k) => obj && obj[k], dictionary) || key;
  }, []);

  return { t };
}
