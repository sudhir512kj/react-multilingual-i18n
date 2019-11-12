import en from "../i18n/en";
import hu from "../i18n/hu";

const languages = {
  en,
  hu
};

let defaultLanguage = window.navigator.language === "en" ? "en" : "hu";

window.i18nData = languages[defaultLanguage];

window.i18n = key => window.i18nData[key];

window.changeLanguage = lang => {
  window.i18nData = languages[lang];
};
