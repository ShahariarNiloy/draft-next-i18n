"use client";

let clientTranslations: Record<string, any> = {};

export const setClientTranslations = (translations: Record<string, any>) => {
  clientTranslations = translations;
};

export const getTranslation = (key: string): string => {
  const value = key
    .split(".")
    .reduce(
      (obj, k) => (obj && obj[k] !== undefined ? obj[k] : null),
      clientTranslations
    );

  // Ensure the value is a string, otherwise return the key
  return typeof value === "string" ? value : key;
};
