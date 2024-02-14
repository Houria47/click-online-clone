import { ReactNode, useEffect, useState } from "react";
import LocaleContext from "./locale-context";
import { DefaultLanguage, SupportedLanguages, RTLLanguages } from "@/config";
import translate from "@/locale";
import { Namespaces } from "@/locale/types";

type ProviderProps = {
  children: ReactNode;
};
const LocaleProvider = (props: ProviderProps) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<SupportedLanguages>(DefaultLanguage);

  const t = (key: string, namespace?: Namespaces) => {
    return translate(key, currentLanguage, namespace);
  };

  const changeLanguage = (language: SupportedLanguages) => {
    setCurrentLanguage(language);
    localStorage.setItem("local", `${language}`);
  };

  useEffect(() => {
    const storedLocal = localStorage.getItem("local");
    if (storedLocal) {
      switch (+storedLocal) {
        case SupportedLanguages.ar:
          setCurrentLanguage(SupportedLanguages.ar);
          break;
        case SupportedLanguages.en:
          setCurrentLanguage(SupportedLanguages.en);
          break;
      }
    }
  }, []);

  useEffect(() => {
    document.body.dir = RTLLanguages.includes(currentLanguage) ? "rtl" : "ltr";
  }, [currentLanguage]);

  return (
    <LocaleContext.Provider value={{ currentLanguage, t, changeLanguage }}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
