import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../state";
import translations from "../languages/translations.json";

const LanguageDetector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const detectedLanguage = navigator.language.slice(0, 2);

    dispatch(setLanguage(detectedLanguage));

    // Update lang attribute of html tag based on user's language
    document.documentElement.lang = detectedLanguage;

    // Update meta tag's content attribute based on user's language
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", translations[detectedLanguage].meta.description);
  }, [dispatch]);

  return null;
};

export default LanguageDetector;
