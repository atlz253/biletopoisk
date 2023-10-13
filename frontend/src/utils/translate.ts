import { translations } from "./translations";

export type Locales = "ru";

export const translate = (value: string, locale: Locales): string => translations[locale][value] ?? "";