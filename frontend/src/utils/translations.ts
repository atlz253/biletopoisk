import { Locales } from "./translate";

export const translations: { [key in Locales]: { [key in string]: string } } = {
  ru: {
    fantasy: "фэнтези",
    horror: "хоррор",
    action: "экшен",
    comedy: "комедия",
  },
};
