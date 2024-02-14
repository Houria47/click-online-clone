import { SupportedLanguages } from "@/config";

export enum Namespaces {
  common,
  home,
}

export type Locale = {
  [key in Namespaces]: { [keys: string]: string };
};

export type Locales = { [key in SupportedLanguages]: Locale };
