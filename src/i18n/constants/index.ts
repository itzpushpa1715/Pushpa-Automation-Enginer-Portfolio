export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  fi: {
    iso: "fi-FI",
    name: "Suomi",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
