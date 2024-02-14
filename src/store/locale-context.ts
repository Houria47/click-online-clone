import { createContext } from "react";
import { DefaultLanguage, SupportedLanguages } from "@/config";
import { Namespaces } from "@/locale/types";

export type ContextValue = {
  currentLanguage: SupportedLanguages;
  t: (key: string, namespace?: Namespaces) => string;
  changeLanguage: (language: SupportedLanguages) => void;
};

const LocaleContext = createContext<ContextValue>({
  currentLanguage: DefaultLanguage,
  t: (key: string, namespace?: Namespaces) => key,
  changeLanguage: (language: SupportedLanguages) => {},
});

export default LocaleContext;
