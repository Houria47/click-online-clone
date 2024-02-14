import { SupportedLanguages } from "@/config";
import { Locales, Namespaces } from "./types";

import en from "./en";
import ar from "./ar";

const locales: Locales = {
  [SupportedLanguages.en]: en,
  [SupportedLanguages.ar]: ar,
};

export default function (
  key: string,
  language: SupportedLanguages,
  namespace: Namespaces = Namespaces.common
) {
  return locales[language][namespace][key];
}
