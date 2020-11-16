export const capitalize = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const strictCapitalize = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;

export { changeClass } from "./dom";

export { checkLang, lang2path, path2lang, getLocale } from "./i18n/theme";
