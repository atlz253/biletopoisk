export const sentenceCase = (str: string): string =>
  str.charAt(0).toLocaleUpperCase() + str.slice(1);
