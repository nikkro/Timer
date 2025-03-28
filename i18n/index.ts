import i18n, {InitOptions} from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const resources: InitOptions['resources'] = {
  "en": { translation: en },
  "pl": { translation: pl },
};

const initI18n = async () => {

  const language = Localization.getLocales()?.[0]?.languageCode;

  i18n.use(initReactI18next).init({
    resources: resources,
    lng: language || undefined,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;